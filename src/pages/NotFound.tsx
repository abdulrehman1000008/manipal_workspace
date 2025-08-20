import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
