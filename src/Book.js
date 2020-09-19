import React from "react"

class Book extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contents.title}</td>
        <td>{this.props.contents.author}</td>
        <td>{this.props.contents.pages}</td>
        <td>{this.props.contents.read ? "Yes" : "No"}</td>
        <td><button onClick={() => this.props.deleteBook(this.props.position)}>Delete</button></td>
        <td><button onClick={() => this.props.toggleRead(this.props.position)}>Toggle Read</button></td>
      </tr>
    )
  }
}

export default Book;