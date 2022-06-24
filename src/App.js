import { useEffect } from "react";
import { useState } from "react";
import "./App.css";


function App() {

  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  //PURE FETCH

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setPosts(data)
  //     }).catch((err) => {
  //       console.log(err.message)
  //     })
  // }, [])

  //ASYNC FETCH

  useEffect(() => {

    const fetchPost = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const data = await response.json()
        console.log("api", data)
        setPosts(data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchPost()
  }, [])

  // const addPost = async (title, body) => {
  //   await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       title: title,
  //       body: body,
  //       userId: Math.random().toString(36).slice(2)
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPosts((posts) => [data, ...posts])
  //       setTitle('')
  //       setBody('')
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }


  const addPosts = async (title, body) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
    setTitle('');
    setBody('');
  };


  // const deletePost = async (id) => {
  //   await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //     method: 'DELETE',
  //   }).then((response) => {
  //     if (response.status === 200) {
  //       setPosts(
  //         posts.filter((post) => {
  //           return post.id !== id;
  //         })
  //       );
  //     } else {
  //       return;
  //     }
  //   });
  // };

  const deletePost = async (id) => {
    let response = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${id}`,
       {
          method: 'DELETE',
       }
    );
    if (response.status === 200) {
       setPosts(
          posts.filter((post) => {
             return post.id !== id;
          })
       );
    } else {
       return;
    }
 };

  const handleSubmit = (e) => {
    e.preventDefault()
    addPosts(title, body)
  }


  return (
    <div className="box">
      <h2 className="header">
        React drop files input
      </h2>
      <div className="add-post-container">
        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control" value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea name="" className="form-control" id="" cols="10" rows="8"
            value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>

      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>

            <button className="delete-btn" onClick={() => deletePost(post.id)}>Delete</button>
          </div>

        )
      })}

    </div>
  );
}

export default App;
