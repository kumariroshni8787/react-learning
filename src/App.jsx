

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


// import { useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <h1>Authentication App</h1>

//       {isLoggedIn ? (
//         <>
//           <h2>Welcome User</h2>
//           <button onClick={() => setIsLoggedIn(false)}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <h2>Please Login</h2>
//           <button onClick={() => setIsLoggedIn(true)}>
//             Login
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// const users = [
//   { id: 1, name: "Rahul" },
//   { id: 2, name: "Aman" },
//   { id: 3, name: "Priya" },
//   { id: 4, name: "neha" }
// ];

// function App() {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     document.title = "React Learning";
//   }, []);

//   return <h1>useEffect Example</h1>;
// }

// export default App;




// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     console.log("Mounted");
//   }, []);

//   return <h1>Hello React</h1>;
// }

// export default App;



import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Data App</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;