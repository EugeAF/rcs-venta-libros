import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    //fetch("https://jsonplaceholder.typicode.com/posts")
      //.then((response) => response.json())
      //.then((data) => setPosts(data));

      const prueba = setInterval(() => {
        console.log('Hola')
      }, 1000)

      return () => {
        console.log('Chau')
        clearInterval(prueba)
      }
  }, []);

  console.log(posts);

  return (
    <div>
      <h2 className="mt-5 d-flex justify-content-center">Posts</h2>
      <div className="container">
          <div className="row flex-column justify-content-center">
              {posts.map((item, index) => (
                <div className="col-12 align-self-center w-50 mt-5 border-top border-dark">
                    <div className="row boton">
                        <h5 className="col-10">{item.title}</h5>
                        <p>{item.cost}</p>
                        <Link to={`/posts/${posts[index].id}`} className="btn btn-dark col-2 w-20 mt-2">Más</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Posts;
