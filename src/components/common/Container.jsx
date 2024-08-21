import React from 'react';

function Container({ children, testId }) {
  return (
    <div className='container' data-test-id={testId}>
      {children}
    </div>
  );
}

export default Container;
