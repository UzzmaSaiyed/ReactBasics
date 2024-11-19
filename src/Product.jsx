import './Product.css'

function Product() {
    return (
        <>
            <div class="prod">
                <h1>Book</h1>
                <h2>Harry Potter</h2>
                <h2>2002 Edition</h2>
            </div>
        </>
        //same elements are not allowed for a single component, so wrap everything in a single parent or <> can be used
    )
}
export default Product
