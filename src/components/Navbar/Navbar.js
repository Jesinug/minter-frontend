import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import logo from './../../resources/img/LOGO_MINTER.png'
import './Navbar.css'
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`navbar-button ${props.active ? 'is-active' : ''}`}
  ></button>
);
class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  // componentDidMount() {
  //   document.addEventListener('click', this.handleClickOutside, true);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClickOutside, true);
  // }
  // handleClickOutside = event => {
  //   const domNode = ReactDOM.findDOMNode(this);
  //   if (!domNode || !domNode.contains(event.target)) {
  //       this.setState({ activeMenu: false });
  //   }
  // }
  toggleMenu = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };
  render() {
    return (
      <nav className="navigation is-fixed-top">
        <Link to="/">
          <img src={logo} className="navbar-logo"/>
        </Link>
        <NavbarBurger
          active={this.state.activeMenu}
          toggleMenu={this.toggleMenu}
        />
        <div className={`navigation-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
          <Link to="/profile" className="navigation-link">Profile</Link>
          <LogoutButton className="navigation-link"/>
        </div>
      </nav>
    );
  }
}
  // render() {
  //     return(
  //         <div>
  //             <button ><Link className="py-3 px-3 is-inline-block" to="/board">Board</Link></button>
  //             <button ><Link className="py-3 px-3 is-inline-block" to="/profile">Profile</Link></button>
  //             <LogoutButton />
  //         </div>
  //     )
  // }
export default Navbar;