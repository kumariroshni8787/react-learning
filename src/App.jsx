

// import Student from "./Student";

import State from "./State";

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

function App() {
  return (
    <div>
      {/* <Event /> */}
      <State/>
    </div>
  );
}

export default App;