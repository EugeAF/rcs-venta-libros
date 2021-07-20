import React, {useState, useEffect} from "react";

function Fetch() {
    const [data, setDatas] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setDatas(data))
    }, [])

    return(
        <div className="container mt-4">
            <div className="row">
            {data.map((item) => (
                <div className="col-3">
                    <h3>Title: {item.title}</h3>
                    <p>Content: {item.body}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Fetch;