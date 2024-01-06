/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:justify-between md:px-8 lg:px-12">
      <a className="btn btn-ghost text-2xl">Wallet</a>
      <div className="hidden md:flex lg:gap-5">
        <a className="btn btn-ghost btn-sm font-thin">Sign up</a>
        <a className="btn btn-secondary btn-sm font-thin px-9">Log in</a>
      </div>
    </div>
  );
};

export default Navbar;
