import React, { Component } from 'react';

class ListMakanan  extends Component {
  constructor(props){
    super(props);
      this.state={
        datalist: this.props.state
    };
  }
 render() {
   return (
     <div>
        <img src={this.props.datalist} alt="product makanan" width="150" />
      </div>
   );
 }
}

export default ListMakanan ;
