const Header = () => {
    return (

        <header className="  py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <img src="/dc-logo.png" alt="DC Comics Logo" className="logo" height="80" />
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase " href="#">Characters</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Comics</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Movies</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">TV</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Games</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Collectibles</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Videos</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Fans</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">News</a></li>
                        <li className="nav-item"><a className="nav-link text-black fw-bold text-uppercase" href="#">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
export default Header