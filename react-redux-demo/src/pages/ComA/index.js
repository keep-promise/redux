import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComA extends Component {

  doAction = () => {
    // const action = sendAction();
    // store.dispatch(action);
    console.log('ComA:', this.props);
    this.props.sendAction();
  }


  render() {
    return (<>
      <button onClick={this.doAction}>+</button>
    </>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({
        type: 'add_action'
      });
    }
  }
}


// A是发送方，所以要实现第二个参数
export default connect(null, mapDispatchToProps)(ComA);

