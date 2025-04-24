import { useState, useEffect } from "react";
import axios from "axios";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/api/feedbacks");
        setFeedbacks(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching feedback:", err);
        setError("Failed to load feedback. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="text-center p-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 p-3 text-red-700 border border-red-400"
        role="alert"
      >
        <p>{error}</p>
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="text-center p-4 bg-white border border-gray-300">
        <p className="text-gray-600">No feedback submissions yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Submitted Feedback</h2>

      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div
            key={feedback._id}
            className="bg-white p-4 border border-gray-300 mb-3 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-2">
              <h3 className="font-medium">{feedback.name}</h3>
              <p className="text-sm text-gray-500">{feedback.email}</p>
              <span className="text-xs text-gray-500">
                {formatDate(feedback.createdAt)}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <p className="text-gray-700">{feedback.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
