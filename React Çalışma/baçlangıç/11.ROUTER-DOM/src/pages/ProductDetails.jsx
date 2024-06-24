import { useParams } from "react-router-dom"
import { products } from "../data/products"
import Product from "../components/Product";


function ProductDetails() {
    const { id } = useParams(); // URL'e girilen değeri (id) yakalar. : işaretinden sonraki değişleni yakalar.
    return (
        <div>
            <h1>Ürün Detayı</h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Product key={product.id} product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails