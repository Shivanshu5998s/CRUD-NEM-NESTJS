import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = async (id) => {
    // Placeholder implementation for deleting a book
    alert(`Delete book with ID: ${id}`);
  };

  const handleEdit = (id) => {
    // Show an alert with the book ID
    alert(`Edit book with ID: ${id} - Not available edit`);
  };

  return (
    <div className="mx-auto p-4 m-0 justify-start">
      <h1 className="text-3xl font-bold mb-4">Books List</h1>
      <Link
        to="/add"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
      >
        Add New Book
      </Link>
      <table className="w-full divide-gray-200 border-4">
        <thead className="bg-zinc-400">
          <tr>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Created At
            </th>
            <th className="px-6 py-3 text-left font-medium text-black text-xl uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-cyan-100 divide-gray-200">
          {books.map((book) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {book.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">${book.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.createdAt}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    handleEdit(book._id);
                  }}
                  to={`/edit/${book._id}`}
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;