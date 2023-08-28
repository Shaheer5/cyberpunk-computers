import React from 'react'

// components
import ProductLists from '../../components/ProductLists/ProductLists'
import ProductOverView from '../../components/ProductOverView/ProductOverView'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

// styles
import './Home.css'

export default function Home() {
  return (
    <div>
      <ProductOverView />
      <ProductLists />
      <Newsletter />
      <Footer />
    </div>
  )
}
