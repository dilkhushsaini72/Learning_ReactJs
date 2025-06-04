import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// ✅ Move this outside the component (best practice)
const UserContext = createContext();

function App() {
  const userData = [
    {
      name: "krishna",
      age: 22,
      email: "krishna@gmail.com",
    },
    {
      name: "dilkhush",
      age: 21,
      email: "dilkhsush@gmail.com",
    },
    {
      name: "shyam",
      age: 29,
      email: "shyam@gmail.com",
    },
    {
      name: "bantu",
      age: 33,
      email: "bantu@gmail.com",
    },
  ];

  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <h1 className="capitalize text-center text-2xl font-bold text-white py-3 bg-red-500">
        Let's understand the React useContext
      </h1>
      <ChildA />
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
