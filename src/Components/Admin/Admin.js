import React, {useState} from "react"; 
import Add from "../Add/Add";
import Modal from "../Edit/Edit";

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

    /*SETEAR EL INDEX*/
    let [reference, setReference] = useState(0);
    const setIndice = (index) => {
        reference = index;
        setReference(index);
        console.log(reference);
    };

    /*Eliminar*/
    const remove = (index) => {
        const products = JSON.parse(localStorage.getItem('books'));
        products.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(products));
        setBook(products);
    };

    /*Editar */
    const editBook = (e) =>{
        setBook(e);
        localStorage.setItem('books', JSON.stringify(book));
    };

    return( 
        <div>
            <Add addParentBook={addBook}/>
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
                                <button type="button" className="btn bg-danger btn-danger mt-2 w-25" onClick={() => remove(index)}>Remove</button>
                                <button type="button" className="btn bg-secondary btn-secondary mt-2 ms-2 w-25" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIndice(index)}>Edit
                                </button>
                            </tr>
                        ))}
                </tbody>
                <Modal propIndex={reference} editParentBook={editBook}/>
            </table>
        </div>
    )
}

export default Admin;