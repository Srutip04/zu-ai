import React from 'react';

function CommonCard({ children, classes = "mt-4 rounded-3xl bg-[#FFFFFF]", testId }) {
  return (
    <div className={`${classes} p-4`} data-test-id={testId}>
      {children}
    </div>
  );
}

export default CommonCard;
