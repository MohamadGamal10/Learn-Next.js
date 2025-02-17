import ProductList from "@/components/ProductList";
import ProductsSleleton from "@/components/ProductsSleleton";
import { Suspense } from "react";

async function getProducts() {
  const res = await fetch(`http://localhost:3000/api/products`);
  return res.json();
}


const page = async () => {
  const { products } = await getProducts();
  // console.log(products)

  return (
    <div>
      <h2 className="my-5 text-4xl">Our Latest Products</h2>
      {/* <ProductList /> */}

      <Suspense fallback={<ProductsSleleton />} >
        <ProductList products={products} />
      </Suspense>
    </div>
  )
}

export default page;