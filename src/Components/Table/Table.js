function Table(props){

    const products = JSON.parse(localStorage.getItem('books'));
    const eliminar = () => {
        let confirmar = confirm("Do you really want to delate this item?");
        if (confirmar) {
        products.splice(index, 1);
        localStorage.setItem('books', JSON.stringify(products));
    }};

    return(
        <tr>
            <td>{props.prueba}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>
                <img src={props.img} className="card-img-top w-25" alt="..." />
            </td>
            <td>${props.cost}</td>
            <button type="button" className="btn bg-danger btn-danger mt-2" onClick={eliminar}>Delate</button>
        </tr>
    )
}

export default Table;