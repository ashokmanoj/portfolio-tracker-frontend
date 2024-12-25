import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="alert alert-danger">
      {message}
    </div>
  );
};

export default ErrorMessage;