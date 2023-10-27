import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface Props {
  title: string,
  image: string,
  price: number,
  category: string,
  currency: string,
}


const ProductCard = (product: Props) => {
  return (

    <Link href={"/"} className='product-card'>

      <div className="product-card_img-container">




        <Image src={product.image} alt={product.title} width={200} height={200}
          className='product-card_img' />
      </div>
      <div className="flex flex-col gap-3 p-2">
        <h3>{product.title}</h3>

        <div className="flex justify-between ">

          <p className="text-red-300 opacity-50 text-lg capitalize">

            {product.category}
          </p>
          <p className='text-slate-300 text-lg font-semibold '>

            <span>{product.currency}</span>
            <span>{product.price}</span>
          </p>
        </div>
      </div>

    </Link>
  )
}

export default ProductCard