import React from 'react';
import { useState } from 'react';


const AddBook = () => {
  const [book, setBook] = useState({
    "author": "",
    "title": ""
  })
    console.log(book.title)
  function handleTitleChange(e) {
    setBook({
      ...book,
      title: e.target.value
    });
  }

  function handleAuthorChange(e) {
    setBook({
      ...book,
      author: e.target.value
    });
  }

  function onSubmit() {
    const requestOptions = {
    method: 'POST',
    headers: { 
            'Content-Type': 'application/json'
        },
    body: JSON.stringify(book)
        };
  fetch('http://localhost:8000/api/cars', requestOptions)
        .then(response => response.json());
  }
  
  return (
        <div className="main-form">
          <form onSubmit={onSubmit}>
          <label>Book Name</label>
          <input
            className="input-control"
            type="text"
            name="title"
          placeholder="Enter name of book"
          value={book.title}
          onChange={handleTitleChange}
          />
        <label>Book Author</label>
          <input
            className="input-control"
            type="text"
            name="author"
          placeholder="Enter name of author"
          value={book.author}
          onChange={handleAuthorChange}
              />
        <button type='submit'>
                  Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;