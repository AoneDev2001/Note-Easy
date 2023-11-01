import React from "react";
// Router
import { Link, NavLink, useNavigate ,useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUser,FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state }));
  
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };
  return (
    <div className="Navbar">
   
      <div className="navbar-left">
        <NavLink to={user ?  "/mynote" : "/"}>
          <h1>My Note</h1>
        </NavLink>
      </div>
      <div className="navbar-right">
        {user ? (
          <ul className="content">
             <NavLink to="/createnote" activeClassName="selected"><li>New Note</li></NavLink>
            <NavLink to="/allnote" activeClassName="selected"><li>All Note</li></NavLink>
            <button onClick={logout} >
              Logout
            </button>
          </ul>
        ) : (
          <> 
          <div className="content">
          <Link  to="/">
              <FaUser className="icons"/> Login
            </Link>
            <NavLink  to="/register">
              <FaUserPlus className="icons"/> Register
            </NavLink>
          </div>
            
          </>
        )}
      </div>
    </div>
  
  );
};

export default Navbar;
