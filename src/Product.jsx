import './Product.css'

function Product(props) {
    console.log(props)

    // Destructuring props to make the code more readable and maintainable
    let { name, title, desc, detailed, price, category } = props

    return (
        <>
            <div className="prod">
                <h1 className="b">{name}</h1>
                <h2 className="b">{title}</h2>
                <h2 className="b"> {desc}</h2>
                <h2 className="b"> {detailed?.Location}</h2>
                <h2 className="b"> {price}</h2>
                <h2 className="b">{Array.isArray(category) && category[1]}</h2>
            </div>
        </>
        //same elements are not allowed for a single component, so wrap everything in a single parent or <> can be used
    )
}
export default Product
