import React, { useRef } from "react";

const UseRefComponent = () => {
  const refContainer = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  return (
    <div>
      <h1>uncontrolled components</h1>
      <form onSubmit={submitHandler}>
        <div className="myUser">
          <label htmlFor="myName">Name:</label>
          <input type="text" id="nyName" ref={refContainer} />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default UseRefComponent;
