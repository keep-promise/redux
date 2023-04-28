import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComB extends Component {


  render() {
    return (<>
      <div>{this.props.count}</div>
    </>)
  }
}

const mapStateToProps = (state) => {
  return state;
}

// A是接收方，所以要实现第一个参数
export default connect(mapStateToProps)(ComB);


