pipeline {
    agent any

    environment {
        // Define environment variables
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        DOCKER_IMAGE_BACKEND = "ankit059/og-img-server"
        DOCKER_IMAGE_FRONTEND = "ankit059/og-img-client"
        KUBECONFIG_CREDENTIALS_ID = 'kubeconfig'
        K8S_CLUSTER = 'open-graph-k8s'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_BACKEND, "-f ./backend/Dockerfile .")
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_FRONTEND, "-f ./frontend/Dockerfile .")
                }
            }
        }

        stage('Push Backend Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        docker.image(DOCKER_IMAGE_BACKEND).push('latest')
                    }
                }
            }
        }

        stage('Push Frontend Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        docker.image(DOCKER_IMAGE_FRONTEND).push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([file(credentialsId: KUBECONFIG_CREDENTIALS_ID, variable: 'KUBECONFIG')]) {
                    sh 'kubectl apply -f ./k8s/backend-deployment.yaml'
                    sh 'kubectl apply -f ./k8s/backend-service.yaml'
                    sh 'kubectl apply -f ./k8s/frontend-deployment.yaml'
                    sh 'kubectl apply -f ./k8s/frontend-service.yaml'
                }
            }
        }
    }

    post {
        always {
            cleanWs() // Clean up the workspace after the pipeline run
        }
    }
}
