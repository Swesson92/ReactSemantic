import React from 'react';
import './toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-logo"><a href="/">Linn Didoff</a></div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <ul className="test">
                    <li><a href="/">Archive</a></li>
                    <li><a href="/">Pictures</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;