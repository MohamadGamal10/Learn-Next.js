import Link from "next/link"

interface IProps {
    products: Array<{id: string, title: string}>
}

const ProductList = async({products}: IProps) => {
// console.log(products)   

  return (
    <div>
      {
        products ? products.map(({id, title}: {id: string, title: string}, idx: number) => 
        <Link key={idx} href={`/products/${id}`} className="block">{id}- {title}</Link>
            
        ): null
      }
    </div>
  )
}

export default ProductList
