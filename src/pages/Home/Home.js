import React from "react";
import TransactionForm from "./TransactionForn";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="content">transaction list</div>
      <div className="sidebar">
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
