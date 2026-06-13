// function UserCard() {
//     return (
//         <div>
//             <h2>Rahul Kumar</h2>
//             <p>React Learner</p>
//         </div>
//     );
// }
// export default UserCard;




//Inline CSS

// const UserCard = () => {
//   return (
//     <div>
//       <h2 style={{ color: "blue", fontSize: "24px" }}>Rahul Kumar </h2>
//       <p>React Learner</p>
//     </div>
//   );
// };

// export default UserCard;




//External CSS File
import "./App.css";
const UserCard = () => {
  return (
    <div>
      <h1 className="title">Hello React</h1>
      <p>ROSHNI KUMARI </p>
    </div>
  );
};

export default UserCard;