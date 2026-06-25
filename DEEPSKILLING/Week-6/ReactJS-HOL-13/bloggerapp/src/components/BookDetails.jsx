import React from 'react';
import books from '../data/books';

// Component to render Book Details
function BookDetails() {
  return (
    <div className="section-column book-section">
      <h2 className="section-heading">Book Details</h2>
      <div className="items-container">
        {/* Step 3: Display books using map() and key={book.id} */}
        {books.map((book) => (
          <div className="item-row book-item" key={book.id}>
            <h3 className="book-name">{book.bname}</h3>
            <p className="book-price">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;
