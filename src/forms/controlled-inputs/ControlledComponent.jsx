import React, { useState } from "react";
import "./style.css";
const ControlledComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("user submited");
    console.log(firstName, email);
    const user = { id: new Date().getTime().toString(), firstName, email };
    console.log(user.id);
    setPeople([...people, user]);
    console.log(user);
    setFirstName("");
    setEmail("");
  };
  return (
    <div className="mainParent">
      <h1>Controlled inputs</h1>
      <form onSubmit={submitHandler}>
        <div className="myUser">
          <label htmlFor="myName">Name:</label>
          <input
            type="text"
            id="nyName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="myUser">
          <label htmlFor="myEmail">Email:</label>
          <input
            type="email"
            id="myEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <div className="people">
        {people.map((mypeople) => {
          return (
            <div className="myPeople" key={mypeople.id}>
              <h4>{mypeople.firstName}</h4>
              <h5>{mypeople.email}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledComponent;
