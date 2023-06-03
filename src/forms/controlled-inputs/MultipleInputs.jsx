import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    phone: "",
  });
  return (
    <div className="mainParent">
      <h1>Controlled inputs</h1>
      <form>
        <div className="myUser">
          <label htmlFor="myName">Name:</label>
          <input type="text" id="nyName" />
        </div>
        <div className="myUser">
          <label htmlFor="myAge">Age:</label>
          <input type="text" id="myAge" />
        </div>
        <div className="myUser">
          <label htmlFor="myAddress">Address:</label>
          <input type="text" id="myAddress" />
        </div>
        <div className="myUser">
          <label htmlFor="myPhone">Phone:</label>
          <input type="text" id="myPhone" />
        </div>
        <div className="myUser">
          <label htmlFor="myEmail">Email:</label>
          <input type="email" id="myEmail" />
        </div>
        <button>Submit</button>
      </form>
      <div className="people"></div>
    </div>
  );
};

export default MultipleInputs;
