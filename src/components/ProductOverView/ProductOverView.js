
import './ProductOverView.css'

export default function ProductOverView() {

  return (
    <div className="product-overview pt-10 lg:flex items-center justify-between">
      <div className="left xs:w-full lg:w-6/12 mx-auto">
        <div className='my-6 mx-4'>
          <img src="./assets/images/RTX-4070.jpg" alt="" className="mx-auto w-96" />
        </div>
      </div>
      <div className="right lg:w-6/12 text-start xs:ml-4">
        <h2 className='text-4xl font-blender700'>Nvidia's RTX 4070</h2>
        <div className="my-1">
          <span className="mr-2 text-darkyellow">
            Medicine Brand:
          </span>
          <span>MSI</span>
        </div>
        <span className='text-darkcyan'>in stock</span>
        <p className='lg:w-96 xs:w-72 py-2 text-lg font-blender400'>Play with style! GAMING is upgraded with TRI FROZR 3 to sustain intense performance during gaming and content creation. A high-speed style matches high-performance capabilities for gamers who want to go all out.</p>
        <ul className="ml-4 mb-4">
          <li>CUDA® Cores 7680 Units</li>
          <li>PCI Express® Gen 4</li>
          <li>12GB GDDR6X 192-bit</li>
          <li>Extreme Performance: 2760 MHz (MSI Center)</li>
        </ul>
        <p>Price: <span>$800 - MSRP</span></p>
        <div className="mt-4">
          <button className="cp-btn cp-btn-yellow mr-4 xs:mb-2 lg:mb-0">Add to cart</button>
          <button className="cp-btn cp-btn-cyan">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
