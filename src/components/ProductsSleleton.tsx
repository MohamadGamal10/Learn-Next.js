
const ProductsSleleton = () => {
    return (
        <ul className="space-y-3">
            {Array.from({ length: 20 }).map((_, index) => (
                <li
                    key={index}
                    className="animate-pulse h-7 bg-gray-700 rounded-sm"
                ></li>
            ))
            }
        </ul>
    )
}

export default ProductsSleleton
