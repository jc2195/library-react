import React from "react"

class BooksForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
      title: "",
      author: "",
      pages: "",
      read: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(event) {
    const {name, value, type} = event.target;
    type === "radio" ? this.setState({ [name]: (value === "true") }) : this.setState({ [name]: value })
  }

  handleClick = (props) => {
    props.newBook(this.state);
    this.setState({
      hidden: this.state.hidden,
      title: "",
      author: "",
      pages: "",
      read: false
    });
  }

  chooseView() {
    if (!this.state.hidden) {
      return (
        <div>
          <input 
            type="text" 
            placeholder="Title" 
            onChange={this.handleChange} 
            value={this.state.title} 
            name="title"
          />
          <br/>
          <input 
            type="text" 
            placeholder="Author" 
            onChange={this.handleChange} 
            value={this.state.author} 
            name="author"
          />
          <br/>
          <input 
            type="number" 
            placeholder="Pages" 
            onChange={this.handleChange} 
            value={this.state.pages} 
            name="pages"
          />
          <br/>
          <label>
            <input 
              type="radio" 
              name="read" 
              value="true" 
              checked={this.state.read} 
              onChange={this.handleChange}
            />
            Read
          </label>
          <label>
            <input 
              type="radio" 
              name="read" 
              value="false" 
              checked={!this.state.read} 
              onChange={this.handleChange}
            />
            Not Read
          </label>
          <br/>
          <button onClick={() => this.handleClick(this.props)}>Submit</button>
        </div>
      )
    }
  }

  toggleForm = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>Toggle Book Form</button><br/>
        {this.chooseView()}
      </div>
    )
  }
}

export default BooksForm;