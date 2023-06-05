import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    phone: "",
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };
  return (
    <div className="mainParent">
      <h1>Controlled inputs</h1>
      <form>
        <div className="myUser">
          <label htmlFor="myName">Name:</label>
          <input
            type="text"
            name="name"
            id="nyName"
            value={person.name}
            onChange={changeHandler}
          />
        </div>
        <div className="myUser">
          <label htmlFor="myAge">Age:</label>
          <input
            type="text"
            name="age"
            id="myAge"
            value={person.age}
            onChange={changeHandler}
          />
        </div>
        <div className="myUser">
          <label htmlFor="myAddress">Address:</label>
          <input
            type="text"
            name="address"
            id="myAddress"
            value={person.address}
            onChange={changeHandler}
          />
        </div>
        <div className="myUser">
          <label htmlFor="myPhone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="myPhone"
            value={person.phone}
            onChange={changeHandler}
          />
        </div>
        <div className="myUser">
          <label htmlFor="myEmail">Email:</label>
          <input
            type="email"
            name="email"
            id="myEmail"
            value={person.email}
            onChange={changeHandler}
          />
        </div>
        <button>Submit</button>
      </form>
      <div className="people"></div>
    </div>
  );
};

export default MultipleInputs;
