import React from "react";
import { Link, Outlet } from "react-router-dom";
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
      
        )
    }
}
export default Layout;