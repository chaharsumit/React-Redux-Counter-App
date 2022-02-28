import React from "react";
import { connect } from "react-redux";
import { updateStep } from '../store/action';
import '../styles/style.css';

function Step(props) {
  return (
    <div>
      <button className={props.step === 5 ? 'active' : ''} onClick={() => props.dispatch(updateStep(5))}>5</button>
      <button className={props.step === 10 ? 'active' : ''} onClick={() => props.dispatch(updateStep(10))}>10</button>
      <button className={props.step === 15 ? 'active' : ''} onClick={() => props.dispatch(updateStep(15))}>15</button>
    </div>
  );
}

function mapStateToProps(state){
  return {
    step: state.step
  }
}

export default connect(mapStateToProps)(Step);
