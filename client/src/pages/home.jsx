import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    navigate('/');
  };

  useEffect(() => {
    fetch('http://localhost:5001/home', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        alert(`Failed to fetch data: ${err.message}`);
        handleLogout();
      });
  }, [navigate]);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 py-4 bg-blue-700 shadow-md">
        <h1 className="text-2xl font-bold text-white">Attendance System</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-base font-medium text-blue-700 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          Logout
        </button>
      </nav>
      <section className="flex flex-col items-center justify-start flex-grow p-6 mt-20 bg-white text-gray-900">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Attendance System!</h1>
          <p className="text-lg mb-4">
            You have successfully logged in.
          </p>
          <p className="text-lg">{message}</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
