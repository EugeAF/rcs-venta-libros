import Card from "../Card/Card";

function Products() {
    const products = JSON.parse(localStorage.getItem('books')) || [];

    return(
        <div className="container">
              <div className="row justify-content-between mt-3">
                {products.map((item, index) => (
                  <Card key={index}  name={item.name} description={item.description} img={item.img} cost={item.cost}/>
                ))}
              </div>
        </div> 
    )
}

export default Products;