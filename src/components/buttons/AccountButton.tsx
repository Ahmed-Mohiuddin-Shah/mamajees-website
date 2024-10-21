import React from 'react';

interface AccountButtonProps {
  onClick: () => void;
  label: string;
}

const AccountButton: React.FC<AccountButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="
      bg-mama-aqua-blue
      border-2
      border-mama-dark-blue
      rounded-full
      text-white
      px-5
      py-1
    ">
      {label}
    </button>
  );
};

export default AccountButton;