import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInButton } from '@clerk/clerk-react';

const SignInModal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Please Sign In</h2>
        <p className="mb-4">You need to sign in to access the Contact page.</p>
        <SignInButton className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600" onSignIn={() => navigate('/contact')} />
        <button className="ml-4 text-gray-600 hover:text-gray-800" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
};

export default SignInModal;
