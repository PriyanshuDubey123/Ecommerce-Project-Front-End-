import React from 'react'
import Navbar from "../features/navbar/Navbar"
import ProductDetail from '../features/product-list/components/ProductDetail'
import Footer from '../features/common/Footer'

function ProductDetailPage() {
  return (
   <>
   <Navbar>
   <ProductDetail/>
   </Navbar>
   <Footer/>
    </>
  )
}

export default ProductDetailPage