import Card from "../Card/Card";

function Products() {
    const products = JSON.parse(localStorage.getItem('books')) || [];

    return(
        <div className="container">
              <div className="row justify-content-evenly mt-3">
                {products.map((item, index) => (
                  <Card key={index}  name={item.name} img={item.img} cost={item.cost}/>
                ))}
              </div>
        </div> 
    )
}

export default Products;