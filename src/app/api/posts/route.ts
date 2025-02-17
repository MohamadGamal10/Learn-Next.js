import { NextResponse } from "next/server";
 
export async function GET() {
  const res = await(await fetch('https://dummyjson.com/posts')).json();
 
  return NextResponse.json( res );
}

//or 

// export async function GET() {
//   const res = await fetch('https://dummyjson.com/posts');
//   const data = await res.json();
 
//   return NextResponse.json( data );
// }