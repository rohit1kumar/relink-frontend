function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="p-6 max-w-sm mx-auto bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 rounded-xl shadow-2xl flex flex-col items-center space-y-4">
        <h1 className="lowercase text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 transform transition-all duration-300 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 hover:scale-110">relink</h1>
        <span className="text-slate-500 text-base md:text-lg text-center">a next gen URL shortener</span>
        <span className="text-gray-400 text-sm md:text-base italic mt-2 text-center">hold on! we're still <span><a target="_blank" href="https://github.com/rohit1kumar/relink?ref=relink" className="underline">doodling</a></span> at the drawing board, trying not to turn into spaghetti!</span>
      </div>
    </div>
  );
}

export default App;
