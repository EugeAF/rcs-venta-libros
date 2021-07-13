import React, {useState} from "react"; 
import NewBook from "../NewBook/NewBook";

function Admin() {

    let [book, setBook] = useState(JSON.parse(localStorage.getItem('books')) || []);
    localStorage.setItem('books', JSON.stringify(book));
    
    const addBook = (element) =>{
        setBook([
            ...book,
            element
        ]);
        localStorage.setItem('books', JSON.stringify(book));
    };

    const delate = (index) => {
        const products = JSON.parse(localStorage.getItem('books'));
        products.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(products));
        setBook(products)
    };


    return( 
        <div>
            <NewBook addParentBook={addBook}/>
            {/*Table*/}
            <table className="table container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Img</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Accions</th>
                    </tr>
                </thead>
                <tbody>
                        {book.map((item, index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img src={item.img} className="card-img-top w-25" alt="..." />
                                </td>
                                <td>${item.cost}</td>
                                <button type="button" className="btn bg-danger btn-danger mt-2" onClick={() => delate(index)}>Delate</button>
                                {/*<button type="button" className="btn bg-danger btn-danger mt-2" onClick={() => delate(index)}>Delate</button>*/}
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin