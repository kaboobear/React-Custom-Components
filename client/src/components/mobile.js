import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Mobile extends Component {
    render() {
        return (
            <div class={`mobile-nav ${this.props.isMenuShown && 'active'}`}>
                <div class="close" onClick={this.props.setMenuShown}></div>

                <ul>
                    <ul className="header-nav mob">
                        <li>
                            <NavLink exact className="nav-item" to="/" onClick={this.props.setMenuShown}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/about" onClick={this.props.setMenuShown}>About</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/faq" onClick={this.props.setMenuShown}>FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink exact className="nav-item" to="/contacts" onClick={this.props.setMenuShown}>Contacts</NavLink>
                        </li>
                    </ul>
                </ul>
            </div>
        )
    }
}


export default Mobile