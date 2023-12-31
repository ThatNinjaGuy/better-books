import React from "react";

import BookCard from "../common/BookCard";

import "./BookList.css";
import { Link } from "react-router-dom";

/** 
Create a function called BookList which takes a prop called books. The prop books is an array of objects. Each object has the following shape:

{
  title: "The Alchemist",
  author: "Paulo Coelho",
  imageUrl: "https://i.pravatar.cc/48?u=499476"
}
The BookList function should return a div with the class name container. Inside the container div, there should be a BookCard component for each book in the books array. The BookCard component should receive the book object as a prop and display the book title, author and imageUrl. The BookCard component should also display the profile picture of the author.
*/

function BookList({ books, onBookClick }) {
  return (
    <ul className="book-list">
      {books?.map((book, i) => (
        <div className="list-item" key={i} onClick={() => onBookClick(book.id)}>
          <Link to="/book-viewer">
            <BookCard book={book} index={i}>
              <div className="book-description">
                <h2>{book.title}</h2>
                <p>By {book.author}</p>
              </div>
            </BookCard>
          </Link>
        </div>
      ))}
    </ul>
  );
}

export default BookList;
