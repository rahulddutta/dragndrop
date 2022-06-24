import { useEffect } from "react";
import { useState } from "react";
import "./App.css";


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((response) => response.json())
    .then((data) =>{
      console.log(data)
      setPosts(data)
    }).catch((err) => {
      console.log(err.message)
    })
  },[])


  return (
    <div className="box">
      <h2 className="header">
        React drop files input
      </h2>
      {posts.map((post) =>{
        return (
          <div className="post-card" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
