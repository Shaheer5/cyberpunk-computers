import React from 'react'

// components
import ProductQuickViews from '../../components/ProductQuickViews/ProductQuickViews'
import ProductOverView from '../../components/ProductOverView/ProductOverView'

export default function ProductDetail() {
  return (
    <div>
      <ProductOverView />
      <ProductQuickViews />
    </div>
  )
}
