import React from 'react';
import './toolbar.css';
import {Link} from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <div className="toolbar-logo"><a href="/">Linn Didoff</a></div>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <ul>
                <Link style={{ padding: '0 1rem'}} to="/projects">Archive</Link>
                <Link style={{ padding: '0 1rem'}} to="/resume">Pictures</Link>
                <Link style={{ padding: '0 1rem'}} to="/contact">About</Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;