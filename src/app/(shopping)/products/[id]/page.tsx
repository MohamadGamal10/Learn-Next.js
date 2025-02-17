// "use client"
// import { useParams } from "next/navigation"

import Button from "@/components/Button";
import Image from "next/image";


import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).id
 
  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
 
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    //   images: product.images,
    },
  }
}
 
// export default function Page({ params, searchParams }: Props) {}


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
            <Button  text="Add to cart" />
        </div>
    )
}

export default page