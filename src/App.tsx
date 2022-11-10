import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators, State } from "./state";


const App: React.FC = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const data:any=useSelector((state:State)=>state.bank)
  return (
    <>
      <h1>{data.amount}</h1>
      <button onClick={()=>depositMoney(1000)}>Deposit</button>
      <button  onClick={()=>withdrawMoney(1000)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </>
  );
};

export default App;