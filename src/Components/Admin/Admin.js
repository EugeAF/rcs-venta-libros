import React, {useState} from "react"; 
import Table from "../Table/Table";
import NewBook from "../NewBook/NewBook";

function Admin() {

    let [book, setBook] = useState(JSON.parse(localStorage.getItem('books')) || []);
    localStorage.setItem('books', JSON.stringify(book));
    
    console.log(book)
    
    const addBook = (element) =>{
        setBook([
            ...book,
            element
        ]);
        localStorage.setItem('books', JSON.stringify(book));
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
                            <Table prueba={index} name={item.name} description={item.description} img={item.img} cost={item.cost}/>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin