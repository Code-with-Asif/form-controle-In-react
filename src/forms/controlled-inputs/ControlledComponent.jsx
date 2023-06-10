import React, { useState } from "react";
import FileBase from "react-file-base64";
import "./style.css";
const ControlledComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [fileUpload, setFileUpload] = useState("");
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
        <FileBase
          type="file"
          multipl={false}
          onDone={({ base64 }) => setFileUpload(base64)}
        />
        <button>Submit</button>
      </form>
      <div className="people">
        {people.map((mypeople) => {
          return (
            <div className="myPeople" key={mypeople.id}>
              <h4> Name:{mypeople.firstName}</h4>

              <h5>Email:{mypeople.email}</h5>

              <img src={fileUpload} alt="file" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlledComponent;
