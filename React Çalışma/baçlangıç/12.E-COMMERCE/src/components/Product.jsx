import "../css/Product.css"
function Product({ product }) {
    const { id, price, image, title, description } = product;
    console.log(image)
    return (
        <div className="card">
            <img className="image" src={image} alt="" />
            <div >
                <p className="text-center" style={{ height: "90px" }}>{title}</p>
                <h4 className="text-center">{price} ₺</h4>
            </div>
            <div className="flex-row">
                <button className="detail-button">Detayları Göster</button>
            </div>
        </div>
    )
}

export default Product