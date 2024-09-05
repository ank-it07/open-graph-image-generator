import React from 'react';

const Feature = ({ title, content }) => {
    return (
        <div className="bg-gray-100 p-6 rounded flex-1 min-w-[300px]">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="mt-2">
                {content}
            </div>
        </div>
    );
};

export default Feature;
