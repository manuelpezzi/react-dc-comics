const ProductCard = (props) => {
    const { product } = props;
    const { id, thumb, title, type, sale_date } = product;
    return (
        <div className="card trasparent" >
            <img src={thumb} alt={title} />
            <div className="card-body p-0">
                <h5 className="card-title text-center text-white bg-dark py-2">
                    <a href="#" className=" text-white text-decoration-none">
                        {title}
                    </a>
                </h5>
            </div>
        </div>
    )
}
export default ProductCard