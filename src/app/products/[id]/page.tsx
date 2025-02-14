// "use client"
// import { useParams } from "next/navigation"

import Image from "next/image";

async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
  }

interface IProps {
    params: {
        id: string
    }
}


const page = async({params}: IProps) => {
    const product = await getProduct(params.id);
    console.log(product)

    // Accessing the dynamic route parameter in client-side using useParams hook.
    // const params = useParams();
    // console.log(params)
    return (
        <div>
            <h1>id - {product.id}</h1>
            <h1>title - {product.title}</h1>
            {/* <img src={`${product.images[0]}`} alt="img" width={200} /> */}
            <Image src={product.images[0]} alt="img" width={200} height={200} />
        </div>
    )
}

export default page