import React , {useState} from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  Search,
  SearchOutlined,
  PersonAdd,
  PersonAddOutlined,
} from "@mui/icons-material";
// import Home from "@mui/icons-material";

const Header = () => {

    const [active, setActive ] = useState(window.location.pathname);

  return (
    <div className="header">
      <Link className="link"  link to='/' onClick={()=>{
        setActive('/')
      }}>
        {active === "/" ? <Home style={{}}/> : <HomeOutlined/>}
      </Link>

      <Link className="link" link to="/addnewpost" onClick={()=>{
        setActive('/addnewpost')
      }}>
        {active === "/addnewpost" ? <Add /> : <AddOutlined />}
      </Link>

      <Link className="link" link to="/search" onClick={()=>{setActive('/Search')}}>
        {active === "/search" ? <Search /> : <SearchOutlined />}
      </Link>

      <Link className="link" link to='/account' onClick={()=>{
        setActive('/account')
      }}>
        {active === "/account" ? <PersonAdd /> : <PersonAddOutlined />}
      </Link>
    
    </div>
  );
};

export default Header;
