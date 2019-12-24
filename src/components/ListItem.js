import React from 'react';
class ListItem extends React.Component {
    render() {
      return (
        <li>{this.props.value}<button onClick={() => this.props.onDelete(this.props.value)}>DELETE</button></li>
      )
    }
  }

  export default ListItem;