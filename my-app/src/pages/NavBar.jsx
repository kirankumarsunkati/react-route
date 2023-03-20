import React from "react";
import { Link } from 'react-router-dom';
class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="home"></Link>Home</li>
                    <li><Link to="home1"></Link>Home1</li>
                </ul>
            </div>
        )
    }
}
export default NavBar;