/* import React, { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
       
        const first10Quotes = data.slice(0, 10);
        setQuotes(first10Quotes);
      })
      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Top 10 Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <h2>{quote.title}</h2>
            <p>{quote.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; */


import React, { useEffect, useState } from 'react'

const App = () => {
  const [posts,setPosts]=useState('')
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((posts)=>setPosts(posts.splice(0,10)))
  },[])

  return (
    <div>
         {posts.map((post)=><h5>{post.title} <br></br>{post.body}</h5>)}

    </div>
  )
}

export default App