import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Home from "./pages/Home";
import UserAction from "./pages/UserAction";
import { validatePhone } from "./utils/vailidation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addUser"
          element={<UserAction title="Add a New User" action="add" />}
        />
        <Route
          path="/:id"
          element={<UserAction title="Edit User" action="edit" />}
        />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
