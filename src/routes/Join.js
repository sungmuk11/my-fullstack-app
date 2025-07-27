import { useNavigate } from "react-router-dom";
import "../scss/form.scss";

import { useState, useEffect } from "react";

const Join = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("비밀번호가 일치하지 않습니다");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      console.log("백엔드 응답", data);

      if (response.ok) {
        setMessage(data.message || "회원가입이 성공적으로 완료되었습니다!");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        navigate("/");
      } else {
        setMessage(
          data.message || "회원가입에 실패했습니다. 다시 시도해주세요."
        );
      }
    } catch (error) {
      console.error("회원가입 요청 중 에러 발생:", error);
      console.error("회원가입 요청 중 네트워크 에러 발생:", error);
      setMessage(
        "네트워크 오류: 서버에 연결할 수 없습니다. 백엔드 서버가 실행 중인지 확인해주세요."
      );
    }

    console.log("폼이 제출되었습니다! 입력된 값:", {
      username: username,
      password: password,
    });
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
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호 확인"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        <button type="submit">제출</button>
        {message && (
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              // color: message.includes("성공") ? "green" : "red",
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

export default Join;
