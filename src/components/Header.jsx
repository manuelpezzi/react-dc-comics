import React from "react"
import NavBar from "./NavBar"

const Header = ({ NavLinks }) => {
    return (

        <header className="  py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <img src="/dc-logo.png" alt="DC Comics Logo" className="logo" height="80" />
                <NavBar NavLinks={NavLinks} />
            </div>
        </header>

    )
}
export default Header