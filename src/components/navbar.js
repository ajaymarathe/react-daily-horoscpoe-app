import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                    <a className="navbar-brand" href="#">Daily Horoscope</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                        </ul>
                    </div> */}
                    </nav>
            </div>
         );
    }
}
 
export default Navbar;