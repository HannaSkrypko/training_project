    import React, { Component } from 'react';
    import headerLogo from '../../assets/headerLogo.png';

    import './main.scss';

    class Header extends Component {
        render() {
            return (
                <header className="header grid-wrapper">
                    <div className="header-nav">menu</div>
                    <div className="header-logo">
                        <img src={headerLogo} alt="Exclusive resorts." />
                    </div>
                    <div className="header-buttons-wrapper">
                        <button>member login</button>
                        <button>questions</button>
                    </div>
                </header>
            )
        }
    };

    export default Header;
