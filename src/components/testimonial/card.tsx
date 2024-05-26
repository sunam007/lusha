import React from 'react';

const Card = ({ image, name, company, rating, testimonial, statValue, statLabel }) => (
    <div class="bg-white shadow-md rounded-lg p-6 border border-[#ececec] ">

        <div class="flex items-center mb-4">
            <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
        </div>
        <p class="text-gray-700 mb-4">“I honestly couldn’t imagine working without Lusha, it’s a game changer.”</p>
        <div class="flex items-center mb-4">
            <img class="w-12 h-12 rounded-full mr-4" src="https://picsum.photos/300" alt="Eric Lindroos" />
            <div>
                <div class="text-xl font-semibold">Eric Lindroos</div>
                <div class="text-gray-500">Gong</div>
            </div>
        </div>
        <div class="border-t border-gray-200 pt-4">
            <div class="flex items-center">
                <div class="text-4xl font-bold text-yellow-500">99%</div>
                <div class="ml-2 text-gray-600">More meetings</div>
            </div>
        </div>

    </div>
);

export default Card;