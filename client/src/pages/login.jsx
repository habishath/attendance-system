import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        navigate('/home'); // Redirect after login
      } else {
        alert('Login failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <nav className="flex items-center justify-between px-6 py-4 bg-blue-700 shadow-md">
        <h1 className="text-2xl font-bold text-white">Attendance System</h1>
      </nav>
      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900">Sign in to your account</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                id="username" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Username" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                id="password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                placeholder="••••••••" 
                required 
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input 
                  id="remember" 
                  type="checkbox" 
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" 
                />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-700">Remember me</label>
            </div>
            <button 
              type="submit" 
              className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
