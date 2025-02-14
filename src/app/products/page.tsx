import Link from "next/link"

async function getProducts() {
    const res = await fetch(`https://dummyjson.com/products`);
    return res.json();
  }

const page = async() => {
    const {products } = await getProducts();
    console.log(products)
  return (
    <div>
        
      {
        products.map(({id, title}: {id: string, title: string}, idx: number) => 
        <Link key={idx} href={`/products/${id}`} className="block">{id}- {title}</Link>
            
        )
      }
    </div>
  )
}

export default page