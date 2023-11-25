import { Component } from "react";
import './navbar.css';
import logo from '../Assets/logo.png';
import { MenuItems } from "./MenuItems";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className='navbar'>
        <h1 className='nav-logo'>
          <img className='imagen' src={logo} alt="" />
          SOLAR MDP
        </h1>

        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>{item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
