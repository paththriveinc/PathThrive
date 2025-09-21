
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center flex items-center justify-center min-h-[calc(100vh-10rem)]"> {/* Adjusted min-height considering navbar/footer */}
      <Card className="max-w-md mx-auto p-8 sm:p-12">
        <svg className="w-24 h-24 text-red-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
        </svg>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800 mb-3">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go to Homepage
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFoundPage;