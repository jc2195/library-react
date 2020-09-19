import React from "react"
import Book from "./Book"

class Books extends React.Component {
  render() {
    const bookList = this.props.books.map((book, index) => {
      return (
        <Book 
          key={index} 
          position={index} 
          contents={book} 
          deleteBook={this.props.deleteBook} 
          toggleRead={this.props.toggleRead}
        />
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Read</th>
            <th>Delete</th>
          </tr>
          {bookList}
        </tbody>
      </table>
    )
  }
}

export default Books;