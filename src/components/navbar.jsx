import { Link } from "react-router-dom"
import React from "react"
import '../App.css';
import { auth } from "../config/firebase" 
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

export const Navbar = () => {
    const[user,loading,error] = useAuthState(auth); // this hook will automatically update the user variable whenever you login with a different account
    const signUserOut = async () => {
        await signOut(auth);
    }
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                {/* <Link to="/login">Login</Link> */}
                {!user?(<Link to="/login">Login</Link>) : 
                (
                    <Link to="/">Logout</Link> 
                )}
                {/* if !user means if user state is invalid(user isn't logged in), then display the log in link on the navbar, else displat teh create post link on the navbar */}
            </div>
            <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} width="20" height="20" />
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </div>
        </div>
    );
}