const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 py-4 border-t border-gray-300 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Feedback Collection Application
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Adarsh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
