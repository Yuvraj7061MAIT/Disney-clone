import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth, provider } from "../../Firebase/Firebase"; // Firebase imports
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/User/UserSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Check for user authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/home"); // Redirect to home after login
      } else {
        // User is signed out
        dispatch(setSignOutState());
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [dispatch, navigate]);

  // Function to handle Google sign-in
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Photo URL:", result.user.photoURL);
        dispatch(
          setUserLoginDetails({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
        navigate("/home"); // Redirect to home after login
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  // Function to handle sign-out
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        dispatch(setSignOutState());
        navigate("/"); // Redirect to landing page or login after sign-out
      })
      .catch((error) => {
        console.error("Error during sign-out:", error);
      });
  };

  // Toggle menu for small screens
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <Logo>
        <img src="images/logo.svg" alt="Disney+" />
      </Logo>

      <HamburgerMenu onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerMenu>

      <NavMenu className={showMenu ? "active" : ""}>
        <a href="/home">
          <img src="images/home-icon.svg" alt="Home Icon" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="images/search-icon.svg" alt="Search Icon" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="images/watchlist-icon.svg" alt="Watchlist Icon" />
          <span>WATCHLIST</span>
        </a>
        <a href="/original">
          <img src="images/original-icon.svg" alt="Original Icon" />
          <span>ORIGINAL</span>
        </a>
        <a href="/movies">
          <img src="images/movie-icon.svg" alt="Movie Icon" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src="images/series-icon.svg" alt="Series Icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      {username ? (
        <UserInfo>
          <span>{username}</span>
          {userPhoto ? (
            <img src={userPhoto} alt="User Profile" />
          ) : (
            <img src="path/to/default/avatar.png" alt="Default Avatar" />
          )}
          <Logout onClick={handleLogout}>Logout</Logout> {/* Logout Button */}
        </UserInfo>
      ) : (
        <Login onClick={handleAuth}>Login</Login>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      width: 20px;
    }

    span {
      color: white;
      font-size: 15px;
      letter-spacing: 1.42px;
      position: relative;
      white-space: nowrap;

      &:before {
        content: "";
        position: absolute;
        height: 2px;
        background-color: white;
        bottom: -6px;
        left: 0;
        right: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
      }

      &:hover:before {
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: #090b13;
    flex-direction: column;
    padding: 20px;
    display: none;

    a {
      padding: 12px 0;
      justify-content: center;
    }

    &.active {
      display: flex;
    }
  }
`;

const Login = styled.a`
  color: white;
  font-size: 18px;
  background-color: #6439ff;
  padding: 10px 20px;
  border-radius: 20px;
  letter-spacing: 1.5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: white;
    color: #6439ff;
  }
`;

const Logout = styled.button`
  color: white;
  font-size: 18px;
  background-color: #ff3d3d; /* Red background for logout */
  padding: 10px 20px;
  border-radius: 20px;
  letter-spacing: 1.5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  margin-left: 10px; /* Space between avatar and logout button */

  &:hover {
    background-color: white;
    color: #ff3d3d;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;

  span {
    width: 25px;
    height: 2px;
    background-color: white;
    margin: 4px 0;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
