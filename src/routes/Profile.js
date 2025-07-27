import "../scss/profile.scss";
import "../scss/form.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext.js";

const Profile = () => {
  const navigate = useNavigate();
  const { logout, user, setUser, loading } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const userId = user ? user.userId : null;

  const formatCreatedAt = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        logout();
        navigate("/");
      } else {
        console.log("로그아웃 실패", response.data.message);
      }
    } catch (error) {
      console.log(error);
      logout();
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      const response = await axios.post(
        "/api/edit",
        {
          userId,
          newUsername: username,
          newPassword: password,
        },
        {
          withCredentials: true,
        }
      );

      const data = await response.data;

      if (response.status >= 200 && response.status < 300) {
        setMessage("변경사항 저장 완료");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        if (data.user) {
          setUser(data.user);
          console.log(data.user);
        }
        await handleLogout();
        navigate("/login");
      } else {
        setMessage(data.message || "유저 정보 업데이트를 실패했습니다");
      }
    } catch (error) {
      console.log("에러:", error);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          setMessage("이미 존재하는 유저 이름입니다");
        } else {
          setMessage("유저 정보 업데이트를 실패했습니다");
        }
      } else {
        setMessage("네트워크 오류: 서버를 실행할수 없습니다");
      }
    }
  };

  return (
    <div className="profile_container">
      <div className="profile">
        <div className="user_info">
          <div className="info_buttons">
            {loading ? (
              <span>loading...</span>
            ) : user ? (
              <div className="user_container">
                <div className="username">{user.username}</div>
                <div className="created_at">
                  <div className="">유저 생성일:</div>
                  {formatCreatedAt(user.createdAt)}
                </div>
              </div>
            ) : (
              <span>로그인 후 이용하세요</span>
            )}
            <div className="logout">
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          </div>
        </div>
        <div className="edit_profile-container">
          <form className="edit_profile">
            <div className="edit_desc">Edit Profile</div>

            <label htmlFor="edit_name">새 이름</label>
            <input
              id="edit_name"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>

            <label htmlFor="edit_password">새 비밀번호</label>
            <input
              id="edit_password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>

            <label htmlFor="confirm_password">비밀번호 확인</label>
            <input
              id="confirm_password"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            ></input>

            <button type="submit" className="submit" onClick={handleSubmit}>
              제출
            </button>
            {message && (
              <p
                style={{
                  color: "white",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
