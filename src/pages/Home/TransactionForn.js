import React, { useState } from "react";

const TransactionForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={submitHandler}>
        <label>
          <span>Transaction Name</span>
          <input
            type="text"
            value={name}
            required
            placeholder="Type here"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Amount (CAD): </span>
          <input
            type="number"
            value={amount}
            required
            placeholder="Type here"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
