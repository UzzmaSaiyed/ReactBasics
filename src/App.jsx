import './App.css'
import Product from './Product'

function App() {
  return (
    <>
      <h1>Welcome User!!!</h1>
      <div className="a">
        {/* in JSX file write className instead of class as class is a reserved keyword in JS */}
        <Product name="Book 1" title="Harry Potter" desc="2002 Edition" />
        <Product name="Book 2" title="Lord of the rings" desc="2010 Edition" />
        <Product name="Book 3" title="The Vampire Diaries" desc="2008 Edition" />
      </div>

    </>
  )
}

export default App
