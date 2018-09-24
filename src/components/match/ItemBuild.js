import React, {Component} from 'react';

class ItemBuild extends Component {

  getItemName(item){
    return item === null ? 'No Item': item.name;
  }

  render() {
    let i = 0;
    return (
      <div>
        <h6 className="mb-2 text-muted">Item Build:</h6>
        <ul>
          {this.props.items.map(item => {
            i++;
            return (<li key={i}> {this.getItemName(item)} </li>);
          })}
        </ul>
      </div>
    );
  }
}

export default ItemBuild;