import React from 'react';

const Card = ({ image, name, company, rating, testimonial, statValue, statLabel }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
            <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} />
            <div>
                <div className="text-xl font-semibold">{name}</div>
                <div className="text-gray-500">{company}</div>
            </div>
        </div>
        <div className="flex items-center mb-4">
            <span className="text-yellow-500">
                {'★'.repeat(rating)}
                {'☆'.repeat(5 - rating)}
            </span>
        </div>
        <p className="text-gray-700 mb-4">“{testimonial}”</p>
        <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center">
                <div className="text-4xl font-bold text-yellow-500">{statValue}</div>
                <div className="ml-2 text-gray-600">{statLabel}</div>
            </div>
        </div>
    </div>
);

export default Card;