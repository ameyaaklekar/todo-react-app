import React, { Component } from 'react';

import ToDoListItems from './ToDoListItems.jsx';

class ToDoList extends Component {

  constructor(props) {

    super (props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem(e) {

    e.preventDefault();

    if (this._inputElement.value !== '') {
      var newItems = {
        content: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
          return {
            items: prevState.items.concat(newItems),
          };
        });
    }

    this._inputElement.value = '';
  }

  deleteItem(key) {

    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <header>
              <h1>ToDo List</h1>
            </header>
          </div>
          <div className="col-10">
            <form onSubmit={this.addItem}>
              <div className="input-group mb-3">
                <input className="form-control" type="text" ref={(a) => this._inputElement = a}
                  placeholder="Enter Task" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Add</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-8">
            <ToDoListItems entries={this.state.items} 
              delete={this.deleteItem} />
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoList;