import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);

     const db_name = JSON.parse(localStorage.getItem("name"))

    this.state = {
      newItem: db_name || ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const item = e.target.value
    this.setState({newItem: item})
    const db_item = JSON.stringify(item) 
    localStorage.setItem('name', db_item)
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = this.state.newItem;
    this.props.addItem(newItem)
  }

  render() {
    return (
      <form className="row addItem" onSubmit={this.handleSubmit}>
        <div className="col s2" />
        <textarea placeholder="Add Note"
        value={this.state.newItem}
        onChange={this.handleChange}
         className="materialize-textarea col s6 " >
         </textarea>

        <button className="waves-effect waves-light btn addButton">Add Note</button>
      </form>

    );
  }
}

export default AddItem;
