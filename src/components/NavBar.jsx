import React from "react";

const NavBar = ({ NavLinks }) => {
    return (
        <nav>
            <ul className="nav">
                {
                    NavLinks && NavLinks.map((element) => (
                        <li key={element.id} className="nav-item">
                            <a className="nav-link text-black fw-bold text-uppercase" href={element.href}>{element.text}</a>
                        </li>

                    ))}
            </ul>
        </nav>
    );
}
export default NavBar;