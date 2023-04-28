import React, { Component } from 'react';
import store from '../../store';
import { sendAction } from '../../action';

export default class Home extends Component {


  componentDidMount() {
    store.subscribe(() => {
      console.log('subscribe', store.getState());
    });
  }

  componentWillUnmount() {
    store.unSubscribe();
  }

  doAction = () => {
    const action = sendAction();
    store.dispatch(action);
  }


  render() {
    return (<>
      <button onClick={this.doAction}>do action</button>
      <div>{ store.getState().value }</div>
    </>)
  }
}



