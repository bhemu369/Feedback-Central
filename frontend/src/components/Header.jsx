const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 py-4 border-b border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Feedback Central</h1>

          <button
            onClick={toggleDarkMode}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
