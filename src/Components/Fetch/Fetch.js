import React, {useState, useEffect} from "react";

function Fetch() {
    const [data, setDatas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(hola => {
                console.log(hola)
                setDatas(hola)
            })
    }, [])

    return(
        <div className="container mt-4">
            <div className="row">
            {data.map((item) => (
                <div className="col-3">
                    <h3>Nombre: {item.nombre}</h3>
                    <p>Password: {item.password}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Fetch;