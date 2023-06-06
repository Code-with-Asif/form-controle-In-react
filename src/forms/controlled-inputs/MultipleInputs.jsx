import React, { useState } from "react";
const MultipleInputs = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    email: "",
    address: "",
    phone: "",
  });
  const [people, setPeople] = useState([]);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      person.name &&
      person.age &&
      person.address &&
      person.email &&
      person.phone
    ) {
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
    } else {
      alert("please fill All  input feilds");
    }
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
        <button onClick={submitHandler}>Submit</button>
      </form>
      <div className="people">
        {people.map((mypeople, index) => {
          return (
            <div className="myPeople" key={index}>
              <h4>{mypeople.name}</h4>
              <h5>{mypeople.email}</h5>
              <h5>{mypeople.address}</h5>
              <h5>{mypeople.phone}</h5>
              <h5>{mypeople.age}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleInputs;
