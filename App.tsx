import React from 'react';

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <main className="text-center">
        <div className="bg-white/30 backdrop-blur-xl p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-200/50">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Hello Moomin Wani
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Welcome to your React application.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
