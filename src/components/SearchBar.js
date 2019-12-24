import React from 'react';
import ListItem from './ListItem'
class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: "",
        list: [],
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(item) {
      this.setState((prevState) => ({
        list: prevState.list.filter(items => item !== items)
      }));
    }
    handleChange(e) {
      this.setState({
        tasks: e.target.value,
      })
    }
    handleOnClick(e) {
      const newItem = [this.state.tasks];
      this.setState({
        //list: [...this.state.list, (<li>{newItem}<button>DELETE</button></li>)],
        list: [...this.state.list, newItem],
        tasks: '',
      })
    }
    render() {
      return (
        <div>
          <input type="text" value={this.state.tasks} onChange={this.handleChange} />
          <button onClick={this.handleOnClick}>ADD</button> <br />
          <ul>
            {this.state.list.map((item) =>
              <ListItem 
                value={item}
                onDelete={this.handleDelete.bind(null, item)}
              />
            )}
          </ul>
          <p>
            {this.state.list.length} item(s) available.
          </p>
        </div>
      )
    }
  }

  export default SearchBar;