const Main = () => {
    return (
        <main>
            <section className="bg-black blackContent">
                <div className="container">
                    <div className="row">
                        <div className="col text-start ">
                            <h1 className="text-light pt-3  "> --{">"} content goes here{"<"}-- </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary primaryContent ">
                <div className="container">
                    <div className="row">
                        <div className="col md-2 text-center d-flex align-items-center">
                            <picture>
                                <img src="src\assets\img\buy-comics-digital-comics.png" alt="buy comics digital" className=" img-fluid pt-5 small-icon" />
                            </picture>
                            <p className="text-light ms-3 pt-5 ">DIGITAL COMICS </p>
                        </div>
                        <div className="col md-2 text-center d-flex align-items-center">
                            <picture>
                                <img src="src\assets\img\buy-comics-merchandise.png" alt="buy comics merch" className=" img-fluid pt-5 small-icon" />
                            </picture>
                            <p className="text-light ms-3 pt-5 ">DC MERCHANDISE </p>
                        </div>
                        <div className="col md-2 text-center d-flex align-items-center">
                            <picture>
                                <img src="src\assets\img\buy-comics-subscriptions.png" alt=" comics sub" className=" img-fluid pt-5 small-icon" />
                            </picture>
                            <p className="text-light ms-3 pt-5 ">SUBSCRIPTIONS </p>
                        </div>
                        <div className="col md-2 text-center d-flex align-items-center">
                            <picture>
                                <img src="src/assets/img/buy-comics-shop-locator.png" alt=" comics shop locator" className=" img-fluid pt-5 small-icon" />
                            </picture>
                            <p className="text-light ms-3 pt-5 ">COMIC SHOP LOCATOR </p>
                        </div>
                        <div className="col md-2 text-center d-flex align-items-center">
                            <picture>
                                <img src="src\assets\img\buy-dc-power-visa.svg" alt=" dc power visa" className=" img-fluid pt-5 small-icon" />
                            </picture>
                            <p className="text-light ms-3 pt-5 ">DC POWER VISA </p>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}
export default Main