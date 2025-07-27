import AuthContext from "../context/AuthContext.js";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/form.scss";

import { useState } from "react";

const Login = () => {
  const { setLoggedIn, setUsername } = useContext(AuthContext);
  const [username, setUsernameLocal] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setLoggedIn(true);
        setMessage(data.message || "로그인 성공!");
        navigate("/");
      } else {
        setMessage(
          data.message ||
            "로그인에 실패했습니다. 사용자 이름 또는 비밀번호를 확인해주세요"
        );
      }
    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
      setMessage("네트워크 오류: 서버에 연결할수 없습니다");
    }
  };
  return (
    <div className="form">
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          required
          value={username}
          onChange={(e) => {
            setUsernameLocal(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">제출</button>
        {message && (
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "white",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
