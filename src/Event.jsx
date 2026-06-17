
import React from "react";

function Event() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  const greetUser = (name) => {
    alert(`Hello ${name}`);
  };

  const handleInputChange = (e) => {
    console.log("Input Value:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div>
      <h2>React Events Example</h2>

      {/* Click Event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <br />
      <br />

      {/* Passing Arguments */}
      <button onClick={() => greetUser("Rahul")}>
        Greet User
      </button>

      <br />
      <br />

      {/* Input Event */}
      <input
        type="text"
        placeholder="Enter something"
        onChange={handleInputChange}
      />

      <br />
      <br />

      {/* Form Event */}
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Event;

