import React from "react"
import Books from "./Books"
import BooksForm from "./BooksForm"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [
        {title: "book1", author: "author1", pages: "100", read: false},
        {title: "book2", author: "author2", pages: "99", read: true},
        {title: "book3", author: "author3", pages: "2", read: true},
        {title: "book4", author: "author4", pages: "50", read: false}
      ]
    }
  }

  newBook = (book) => {
    this.setState(prevState => prevState.books.push(book))
  }

  toggleRead = (id) => {
    this.setState(prevState => {
      prevState.books[id].read = !prevState.books[id].read
      return prevState;
    });
  }

  deleteBook = (id) => {
    this.setState(prevState => prevState.books.splice(id, 1));
  }

  render() {
    return (
      <div>
        <Books books={this.state.books} deleteBook={this.deleteBook} toggleRead={this.toggleRead}/>
        <BooksForm newBook={this.newBook}/>
      </div>
    )
  }
}

export default App;