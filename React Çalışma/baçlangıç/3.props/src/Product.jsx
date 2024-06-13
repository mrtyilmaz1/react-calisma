/* eslint-disable react/prop-types */




function Product({ productName, price } /*props*/) {
    //  const {productName , price} = props;
    console.log({ productName, price })
    return (
        <div>
            <div>Ürün Bilgileri</div>

            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div>
        </div>
    )
}

export default Product