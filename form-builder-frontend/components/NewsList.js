"use client";
import { useState } from 'react';

function NewsList({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-lg font-bold">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
