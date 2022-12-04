import React from 'react';
import { NavLink } from "react-router-dom";

class NaveBar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <nav className=" navbar navbar-dark bg-dark">
                {/* navbar navbar-expand-lg */}
                <div className="container-fluid">
                    <img className="navbar-brand" src="https://opentdb.com/images/logo-banner.png" alt='nav-img' />
                    <div className='d-flex justify-content-end flex-nowrap'>
                    <NavLink to="/questions">Browse Questions</NavLink>
                    <NavLink to="/about">About</NavLink>
                
                    </div>
                </div>
            </nav>
        );
    }
}

export default NaveBar;