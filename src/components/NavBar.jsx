import React from "react";

const Navbar = ({ navLinks }) => {
    return (
        <nav>
            <ul className="nav">
                {navLinks.map((link) => (
                    <li key={link.id} className="nav-item">
                        <a className="nav-link text-black fw-bold text-uppercase" href={link.href}>{link.text}</a>
                    </li>

                ))}
            </ul>
        </nav>
    );
}
export default Navbar;