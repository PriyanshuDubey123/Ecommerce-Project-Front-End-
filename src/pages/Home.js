import Footer from "../features/common/Footer"
import Navbar from "../features/navbar/Navbar"
import ProductList from "../features/product-list/components/ProductList"

function Home() {
  return (
    <>
    <Navbar>
        <ProductList/>
    </Navbar>
    <Footer/>
    </>
  )
}

export default Home