import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar'
import Card from './Card'
import AddItem from './AddItem'
import '../style.css'


class App extends Component {
  constructor() {
    super();
    const db_list = JSON.parse(localStorage.getItem("list"))
    this.state = {
      name: 'React',
      list: db_list || []
    };

   
    this.addNote = this.addNote.bind(this)
  }

  addNote = (newItem) => {
    const newList = [...this.state.list, newItem]
    this.setState({ list: newList })
    const db_list = JSON.stringify(newList) 
    localStorage.setItem('list', db_list)
  }

  deleteNote = (index) => {
    const newList = this.state.list.filter((item) => item !== index)
    this.setState({list: newList})
    const db_list = JSON.stringify(newList) 
    localStorage.setItem('list', db_list)
  } 

  render() {
    return (
      <div>
        <NavBar name="Notabene" />
        <AddItem addItem={this.addNote} />
        <div className="row">
          {this.state.list.map((item, index) => <Card text={item} deleteItem= {this.deleteNote} key={index} />)}
        </div>
      </div>
    );
  }
}

export default App;