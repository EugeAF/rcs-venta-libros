import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/scss/bootstrap.scss";

function Edit(props) {
    //const myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        //keyboard: false
    //})

    let products = JSON.parse(localStorage.getItem('books'));
    const [edit, setEdit] = useState({
        name: '',
        description: '',
        img: '',
        cost: '',
        destacado: true
    });

    let setEditObj = (event) => {
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setEdit({ ...edit, [event.target.name]: value });
    };

    const editFunction = () => {
        if (edit.name != "" && edit.decription != "" && edit.img != "" && edit.cost != "") {
            setEdit(...products, [
                products[props.propIndex] = edit,
            ])
            localStorage.setItem('books', JSON.stringify(products));
            props.editParentBook(products)
            //myModal.hide()
        } else {
            alert("Complete los campos");
        }
    }

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form className="d-flex flex-column ms-3">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" value={edit.name} onChange={setEditObj} />

                            <label htmlFor="">Description</label>
                            <input type="text" name="description" value={edit.description} onChange={setEditObj} />

                            <label htmlFor="">Img</label>
                            <input type="img" name="img" value={edit.img} onChange={setEditObj} />

                            <label htmlFor="">Cost</label>
                            <input type="text" name="cost" value={edit.cost} onChange={setEditObj} />

                            <label htmlFor="">Destacado</label>
                            <input type="checkbox" checked={edit.destacado} name="destacado" className="w-25" onChange={setEditObj} />  
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={editFunction}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;