import React from "react";
import { connect } from "react-redux";
import '../styles/style.css';
import { updateMax } from '../store/action';


function Max(props){
  return (
    <div>
      <button className={props.max === 15 ? 'active' : ''} onClick={() => props.dispatch(updateMax(15))}>15</button>
      <button className={props.max === 100 ? 'active' : ''} onClick={() => props.dispatch(updateMax(100))}>100</button>
      <button className={props.max === 200 ? 'active' : ''} onClick={() => props.dispatch(updateMax(200))}>200</button>
    </div>
  )
}

function mapStateToProps(state){
  return {
    max: state.max
  }
}

export default connect(mapStateToProps)(Max);