import React, { Component } from 'react';

class ToDoListItems extends Component {

  constructor(props) {
    super(props);

    this.addItems = this.addItems.bind(this);
  }

  addItems(item) {
    return <li key={item.key} className="list-group-item d-flex justify-content-between align-items-center">
      {item.content}
      <button className="btn btn-outline-danger btn-sm"
        onClick={() => this.delete(item.key)}>Remove</button>
    </li>
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var toDoEntries = this.props.entries,
        listItems = toDoEntries.map(this.addItems);

    return (
      <ul className="list-group">
        {listItems}
      </ul>
    )
  }
}

export default ToDoListItems;