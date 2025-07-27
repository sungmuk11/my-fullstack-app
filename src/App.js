// src/js/App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import Header from "./components/Header.js"; // 경로 확인
import HomePage from "./routes/HomePage.js"; // 경로 확인
import Des from "./routes/Desc.js";
import Hi from "./routes/Hi.js";
import Note from "./routes/Note.js";
import Alarm from "./routes/Alarm.js";
import Setting from "./routes/Setting.js";
import Introduce from "./routes/Introduce.js";
import Profile from "./routes/Profile.js";

//유저

import Join from "./routes/Join.js";
import Login from "./routes/Login.js";

import "./scss/main.scss";

const App = () => {
  return (
    <Router>
      <div className="screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/des" element={<Des />}></Route>
          <Route path="/hi" element={<Hi />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/alarm" element={<Alarm />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/introduce" element={<Introduce />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
