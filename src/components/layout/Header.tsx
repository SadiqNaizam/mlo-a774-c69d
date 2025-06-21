import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-background px-6">
      {/* The TopHeader component contains the page title, tabs, and action buttons. */}
      {/* It is wrapped here to control layout properties like padding and stickiness. */}
      {/* Note: The provided TopHeader component's root is also a <header> tag, which results in nesting. */}
      {/* In a real-world scenario, TopHeader should be refactored to use a <div>. */}
      <div className="w-full">
        <TopHeader />
      </div>
    </header>
  );
};

export default Header;
