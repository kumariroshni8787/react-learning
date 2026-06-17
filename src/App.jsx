

// import Student from "./Student";

// import State from "./State";

// function App() {
//   return (
//     <>
//       <h1>React Props Example</h1>

//       <Student
//         name="Rahul"
//         age={21}
//         course="React JS"
//       />

//       <Student
//         name="Aman"
//         age={22}
//         course="JavaScript"
//       />

//       <Student
//         name="Priya"
//         age={20}
//         course="Frontend Development"
//       />
//     </>
//   );
// }

// export default App;


// import Child from "./Child";

// function App() {
//   const handleData = (message) => {
//     alert(message);
//   };

//   return (
//     <>
//       <h1>Parent Component</h1>
//       <Child sendData={handleData} />
//     </>
//   );
// }

// export default App;


// import Event from "./Event";

// function App() {
//   return (
//     <div>
//       {/* <Event /> */}
//       <State/>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <div>
//       <h2>Registration Form</h2>

//       <input
//         type="text"
//         placeholder="Enter Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br />
//       <br />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <h3>Submitted Data</h3>

//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Authentication App</h1>

      {isLoggedIn ? (
        <>
          <h2>Welcome User</h2>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;