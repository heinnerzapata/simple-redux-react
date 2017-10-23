import  React , { Component } from 'react';
import { connect } from 'react-redux';

class ShowComponent extends React.Component{

  componentDidMount(){
  }

  render(){
    return(
      <div>
        Count {this.props.count}
        <h1>Hello Show Component</h1>
        <button onClick={() => this.props.dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={() => this.props.dispatch({type:'DECREMENT'})}>Decrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ShowComponent);
