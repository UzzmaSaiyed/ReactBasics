import './App.css'
import Category from './Category'
import Product from './Product'
import User from './Users'

function App(props) {
  return (
    <>
      <h1>Welcome {props.name}!!!</h1>
      <div className="a">
        {/* in JSX file write className instead of class as class is a reserved keyword in JS */}
        <Product name="Book 1" title="Harry Potter" desc="2002 Edition" />
        <Product name="Book 2" title="Lord of the rings" desc="2010 Edition" detailed={{ theme: "Fantasy", Location: "Middle Earth" }} />
        <Product name="Book 3" title="The Vampire Diaries" desc="2008 Edition" price={3000} />
        <Product name="Book 4" title="Tom Sawyer" desc="2003 Edition" category={["Fiction", "Fantasy", "Adventure"]} />
      </div>

      <User email="a@gmail.com" />
      <Category />

    </>
  )
}

export default App
