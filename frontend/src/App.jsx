import { useState, useEffect } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check user preference or system preference
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
    // Auto-show the feedback list after submission
    setShowFeedback(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <main className="flex-grow p-4 container mx-auto max-w-4xl">
        <div className="mb-6">
          <FeedbackForm onSubmitSuccess={handleFeedbackSubmit} />
        </div>

        {/* Toggle Button */}
        <div className="text-center my-6">
          <button
            onClick={toggleFeedbackView}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            aria-expanded={showFeedback}
          >
            {showFeedback ? "Hide Feedback" : "View Submitted Feedback"}
          </button>
        </div>

        {/* Feedback List */}
        {showFeedback && (
          <div className="mb-6">
            <FeedbackList key={latestFeedback?._id} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
