import { useNavigate } from "react-router-dom";

function Product({ product }) {
    const { id, name, price } = product;
    const navigate = useNavigate(); // bir URL yönlendirmek için kullanılır.
    return (
        <div style={{ backgroundColor: "lightgray", border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
            <div>Ürün Detayı</div>
            <h3>İsim: {name}</h3>
            <h3>Fiyat: {price}</h3>
            <button onClick={() => navigate("/product-details/" + id)}>Detayına Git</button>
        </div>
    )
}

export default Product