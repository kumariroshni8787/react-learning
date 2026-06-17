function Student({ name, age, course }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Student;