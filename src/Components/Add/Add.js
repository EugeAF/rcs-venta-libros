import React, { useState } from "react";

function Add(props) {

    const [newBook, setNewBook] = useState({
        name: '',
        description: '',
        img: '',
        cost: ''
    });

    const setBookObj = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    const addNewBook = () => {
        debugger
        if (newBook.name != "" && newBook.description != "" && newBook.img != "" && newBook.cost != "") {
            props.addParentBook(newBook);
            setNewBook({
                name: '',
                description: '',
                img: '',
                cost: ''
            });
        }else{
            alert("Complete los campos");
        }
    };


    return (
        <div>
            {/*Form*/}
            <form className="d-flex flex-column ms-3">
                <label htmlFor="">Name</label>
                <input type="text" name="name" className="w-25" value={newBook.name} onChange={setBookObj} />

                <label htmlFor="">Description</label>
                <input type="text" name="description" className="w-25" value={newBook.description} onChange={setBookObj} />

                <label htmlFor="">Img</label>
                <input type="img" name="img" className="w-25" value={newBook.img} onChange={setBookObj} />

                <label htmlFor="">Cost</label>
                <input type="text" name="cost" className="w-25" value={newBook.cost} onChange={setBookObj} />

                <a className="btn btn-primary w-25 mt-3" onClick={addNewBook}>Add</a>
            </form>
        </div>
    )
}

export default Add;