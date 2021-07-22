import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function PostsDetalles() {
  const [posts, setPosts] = useState([{}]);
  const [coments, setComents] = useState([{}]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((hola) => setComents(hola));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </div>
        <div className="mt-5 row justify-content-center">
          <h3 className="col-10">Comentarios</h3>
          {coments.map((item) => (
            <div className="col-10">
                <ul>
                    <li>
                        <h5>{item.name}</h5>
                    </li>
                </ul>
                <p>{item.email}</p>
                <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostsDetalles;
