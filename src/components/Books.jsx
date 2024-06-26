import React, { useEffect, useState } from "react";


export default function Books() {
  const [books, setBooks] = useState([])
  const fetchBooks = () => {
    fetch("https://basilisk-magical-easily.ngrok-free.app/api/cars")
      .then((resp) => resp.json())
      .then((data => setBooks(data)))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  return (<div>
    <ul>
    {books.map((book) => (
      <li key={book.id}>{book.brand} <b>{book.model}</b></li>
    ))}
    </ul>
  </div>
  )
}