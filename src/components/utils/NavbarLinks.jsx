import React, { Component, Fragment } from 'react';
import { Link } from 'react-scroll';

export class NavbarLinks extends Component {
    
    render() {
        
        const { isToggleOpen } = this.props;
        return (
            <Fragment>
                <ul className={`nav-list-display ${!isToggleOpen ? 'w-close' : 'w-open'}`}>
                    <Link to="Home" spy={true} smooth={true} offset={-275} duration= {500}>
                            Home
                    </Link>
                    {/* <Link to="Blog" spy={true} smooth={true} offset={-30} duration= {500}>
                        Webinar Topics
                    </Link> */}
                    <Link to="Sentry" spy={true} smooth={true} offset={0} duration= {500}>
                        Sentry
                    </Link>
                    <Link to="Suite" spy={true} smooth={true} offset={0} duration= {500}>
                        Suite
                    </Link>
                    <Link to="Advantage" spy={true} smooth={true} offset={0} duration= {500}>
                        Advantage
                    </Link>
                    <Link to="Subscription" spy={true} smooth={true} offset={0} duration= {500}>
                        Subscription
                    </Link>
                    <Link to="FAQ" spy={true} smooth={true} offset={0} duration= {500}>
                        FAQ
                    </Link>
                    
                    <Link to="Contact" spy={true} smooth={true} offset={0} duration= {800}>
                        Contact
                    </Link>
                </ul>
                <p className={`side-toggle-footer ${!isToggleOpen ? 'close' : 'open'}`}>Powered by <b>Stack</b> Technologies &copy; 2020</p>
            </Fragment>
        )
    }
}

export default NavbarLinks
