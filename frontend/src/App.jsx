import { useState, useEffect } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";

function App() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return (
      savedMode === "true" ||
      (savedMode === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [latestFeedback, setLatestFeedback] = useState(null);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleFeedbackView = () => {
    setShowFeedback((prev) => !prev);
  };

  const handleFeedbackSubmit = (newFeedback) => {
    setLatestFeedback(newFeedback);
    setShowFeedback(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <main className="flex-grow p-4 container mx-auto max-w-4xl">
        <div className="mb-6">
          <FeedbackForm onSubmitSuccess={handleFeedbackSubmit} />
        </div>

        <div className="text-center my-8">
          <button
            onClick={toggleFeedbackView}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            aria-expanded={showFeedback}
          >
            {showFeedback ? "Hide Feedback" : "View Submitted Feedback"}
          </button>
        </div>

        {/* Feedback List */}
        {showFeedback && (
          <div className="mb-6 animate-fadeIn">
            <FeedbackList key={latestFeedback?._id} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
