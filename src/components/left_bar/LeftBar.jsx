// MyComponent.js
import React from 'react';

function LeftBar() {
    return (
        <div className="col-md-3 p-4 bg-light min-vh-100">
            <h3>Menú Lateral</h3>
            <ul className="nav flex-column">
                <li className="nav-item">Enlace A</li>
                <li className="nav-item">Enlace B</li>
            </ul>
        </div>
    );
}

export default LeftBar;