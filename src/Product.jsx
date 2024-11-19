import './Product.css'

function Product(props) {
    return (
        <>
            <div className="prod">
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
                <h2>{props.desc}</h2>
            </div>
        </>
        //same elements are not allowed for a single component, so wrap everything in a single parent or <> can be used
    )
}
export default Product
