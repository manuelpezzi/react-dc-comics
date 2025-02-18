const Footer = () => {
    return (
        <div>
            <section className="bgHeroes position-relative">
                <picture>
                    <img src="src\assets\img\dc-logo-bg.png" alt="dc logo" className="centered-logo" />
                </picture>
                <div className="container fontSize">
                    <div className="row">
                        <div className="col-md-1 mt-3 text-light">
                            <ul>
                                <li className="bold"> DC COMICS </li>
                                <li className="text-secondary">Characters</li>
                                <li className="text-secondary">Movies</li>
                                <li className="text-secondary">TV</li>
                                <li className="text-secondary">games</li>
                                <li className="text-secondary">Videos</li>
                                <li className="text-secondary">News</li>
                                <li className="text-secondary">Comics</li>
                                <li className="bold"> SHOP </li>
                                <li className="text-secondary">Shop DC</li>
                                <li className="text-secondary">Shop DC Collectibles</li>


                            </ul>
                        </div>
                        <div className="col-md-1 mt-3 text-light">
                            <ul>
                                <li className="bold"> DC </li>
                                <li className="text-secondary">Term Of use</li>
                                <li className="text-secondary">Privacy Policy(New)</li>
                                <li className="text-secondary">Ad Choices</li>
                                <li className="text-secondary">Advertising</li>
                                <li className="text-secondary">Jobs</li>
                                <li className="text-secondary">Subsciptions</li>
                                <li className="text-secondary">Talent Workshops</li>
                                <li className="text-secondary">CPSC Certificates</li>
                                <li className="text-secondary">Ratings</li>
                                <li className="text-secondary">Shop Help</li>
                                <li className="text-secondary">Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-1  mt-3  text-light">
                            <ul>
                                <li className="bold">SITES </li>
                                <li className="text-secondary">DC</li>
                                <li className="text-secondary">MAD Magazine</li>
                                <li className="text-secondary">DC Kids</li>
                                <li className="text-secondary">DC Universe</li>
                                <li className="text-secondary">DC Power Visa</li>

                            </ul>

                        </div>

                    </div>

                </div>
            </section>
            <section className="footerblk d-flex justify-content-between align-items-center ">
                <button className="btn btn-outline-primary mt-3 mb-3 text-light">
                    SING-UP NOW
                </button>
                <div className="d-flex align-items-center">
                    <p className=" text-primary mt-4 mb-3">FOLLOW US</p>
                    <picture className=" mt-3 mb-3 d-flex   ">
                        <img src="src\assets\img\footer-facebook.png" alt="Facebook" className=" me-2" />
                        <img src="src\assets\img\footer-twitter.png" alt="Twitter" className=" me-2" />
                        <img src="src\assets\img\footer-youtube.png" alt=" Youtube" className=" me-2" />
                        <img src="src\assets\img\footer-pinterest.png" alt="Pinterest" className=" me-2" />
                        <img src="src\assets\img\footer-periscope.png" alt="Periscope" className=" me-2" />
                    </picture>
                </div>
            </section>
        </div>
    )
}
export default Footer