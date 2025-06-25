import React from 'react';
import { useNavigate } from 'react-router-dom';
import { School, ArrowLeft } from 'lucide-react';
import Button from './ui/Button';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50 p-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <School size={80} className="text-primary-400" />
        </div>
        <h1 className="font-heading font-bold text-4xl text-secondary-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => navigate('/')}
          icon={<ArrowLeft size={18} />}
          size="lg"
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;