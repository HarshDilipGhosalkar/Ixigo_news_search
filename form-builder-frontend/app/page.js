"use client";
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    if (!query) return;

    const res = await fetch(`http://127.0.0.1:5000/news?query=${encodeURIComponent(query)}`);
    console.log(res);
    // Check if response is okay (status 200)
    if (res.ok) {
      const data = await res.json();
      console.log("data",data);
      setArticles(data);
    } else {
      console.error('Error fetching data');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-300 flex flex-col justify-between">
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8 shadow-xl">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold">News Reader</h1>
          <p className="mt-2 text-xl text-gray-100">Get the latest updates from trusted sources</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto mt-6 text-white animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3v18l15-9-15-9z"
            ></path>
          </svg>
        </div>
      </header>

      {/* Search Section */}
      <main className="p-8 flex-grow">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 mb-8">
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Search for news..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-4 rounded-lg border-2 border-indigo-500 w-2/3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={fetchNews}
              className="p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500">
              Search
            </button>
          </div>
        </div>

        {/* Displaying the fetched news */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/400x250'}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-indigo-800">{article.title}</h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-12 text-xl text-gray-600">No articles found. Please search again.</div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-8 mt-8">
        <p>&copy; 2025 News Reader | All rights reserved</p>
        <div className="mt-4">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white inline-block mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23 3a10.91 10.91 0 01-3.142.86A5.47 5.47 0 0022.438 1a10.94 10.94 0 01-3.469 1.333A5.426 5.426 0 0016.488 0C12.637 0 9.622 3.014 9.622 6.685c0 .52.075 1.03.215 1.523a15.432 15.432 0 01-11.274-5.693A5.654 5.654 0 001.18 5.97c0 2.415 1.42 4.535 3.577 5.487a5.417 5.417 0 01-2.56-.698v.07c0 2.58 1.842 4.748 4.285 5.239a5.435 5.435 0 01-2.55.095c.717 2.274 2.809 3.918 5.276 3.961A10.947 10.947 0 010 19.441a15.408 15.408 0 008.61 2.53c10.347 0 16.02-8.457 16.02-15.78 0-.24-.004-.478-.017-.714A11.592 11.592 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white inline-block mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.98 3C3.87 3 3 3.87 3 4.98v14.04c0 1.11.87 1.98 1.98 1.98h14.04c1.11 0 1.98-.87 1.98-1.98V4.98c0-1.11-.87-1.98-1.98-1.98H4.98zM7.07 18.33V9.27h3.77v9.06H7.07zm1.88-10.25c-1.13 0-2.02-.9-2.02-2.02s.9-2.02 2.02-2.02 2.02.9 2.02 2.02-.9 2.02-2.02 2.02zm11.99 10.25h-3.77v-5.18c0-1.23-.45-2.07-1.57-2.07-.86 0-1.37.58-1.59 1.14-.08.2-.09.48-.09.75v5.07h-3.77V9.27h3.77v1.26h.05c.5-.76 1.45-1.25 2.5-1.25 1.92 0 3.36 1.26 3.36 3.95v5.1z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
