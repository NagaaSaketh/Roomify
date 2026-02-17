import React from "react";
import { Box } from "lucide-react";
import { useOutletContext } from "react-router";
const NavBar = () => {
  const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>();
  const handleAuthClick = async () => {
    if (isSignedIn) {
      try {
        await signOut();
      } catch (err) {
        console.error("Sign out failed!", err);
      }

      return;
    }
    try {
      await signIn();
    } catch (err) {
      console.error("Sign in failed!", err);
    }
  };
  return (
    <header className="navbar">
      <nav className="inner">
        <div className="left">
          <div className="brand">
            <Box className="logo" />
            <span className="name">Roomify</span>
          </div>
          <ul className="links">
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Enterprise</a>
          </ul>
        </div>
        <div className="actions">
          {isSignedIn ? (
            <>
              <span className="greeting">
                {userName ? `Hi, ${userName}` : `Signed in`}
              </span>
              <button className="login" onClick={handleAuthClick}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="login" onClick={handleAuthClick}>
                Login
              </button>
              <a className="cta" href="#upload">
                Get Started
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
