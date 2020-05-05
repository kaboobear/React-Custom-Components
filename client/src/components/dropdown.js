import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className = "dropdown-block">
        <div className={`dropdown-button${this.state.showMenu ? ' active' : ''}`} onClick={this.showMenu}>
          Kaboo <span className="dropdown-arrow"></span>
        </div>
        
        {
          this.state.showMenu
            ? (
              <div className="dropdown-list" ref={(element) => {this.dropdownMenu = element;}}>
                <NavLink to = "/" className="dropdown-item"> User </NavLink>
                <NavLink to = "/settings" className="dropdown-item"> Settings </NavLink>
                <NavLink to = "/logout" className="dropdown-item"> Logout </NavLink>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown;