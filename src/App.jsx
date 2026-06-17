

import Student from "./Student";

function App() {
  return (
    <>
      <h1>React Props Example</h1>

      <Student
        name="Rahul"
        age={21}
        course="React JS"
      />

      <Student
        name="Aman"
        age={22}
        course="JavaScript"
      />

      <Student
        name="Priya"
        age={20}
        course="Frontend Development"
      />
    </>
  );
}

export default App;