
import './App.css'
import Container from './Container';
import Product from './Product';


function App() {


  // const productName = "Buzdolabı";

  return (
    // <div>
    //   <Product productName="Ayakkabı" price={3200} />
    //   <hr />
    //   <Product productName="Pantolon" price={950} />
    //   <hr />
    //   <Product productName={productName} price={15000} />
    // </div>

    <div>
      <Container>
        {/*Product'ı Container'daki props ile yakalarız. */}
        <Product productName="Ayakkabı" price={3200} />
      </Container>
    </div>
  )
}

export default App
