"use client"
interface IProps {
   text: string;
}

const Button = ({ text }: IProps) => {
  return (
      <button onClick={() => console.log('clicked')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{text}</button>
  )
}

export default Button