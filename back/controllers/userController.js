import { redirect } from "react-router-dom";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const join = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "이미 존재하는 사용자 이름입니다" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "회원가입 성공" });
  } catch (error) {
    console.error("회원가입 중 서버 에러 발생:", error);
    res.status(500).json({ message: "서버 에러가 발생하였습니다" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을수 없습니다" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다" });
    }

    req.session.loggedIn = true;
    req.session.userId = user._id;
    req.session.username = user.username;
    req.session.createdAt = user.createdAt;
    await req.session.save();
    console.log(req.session);
    res.status(200).json({
      message: "로그인 성공!",
    });
  } catch (error) {
    console.error("로그인 중 에러 발생:", error);
    res.status(500).json({ message: "서버 에러가 발생했습니다" });
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("로그아웃 중 세션 파괴 실패:", err);
      return res.status(500).json({ message: "로그아웃 실패" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "로그아웃 성공!", success: true });
  });
};

export const checkLogin = (req, res) => {
  if (req.session.loggedIn) {
    res.json({
      loggedIn: true,
      userId: req.session.userId,
      username: req.session.username,
      createdAt: req.session.createdAt,
    });
  } else {
    res.json({
      loggedIn: false,
    });
  }
};

export const edit = async (req, res) => {
  const { newUsername, newPassword, userId } = req.body;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "유저가 존재하지 않습니다" });
  }
  if (newUsername && newUsername !== user.username) {
    //편집할 유저의 이름이 있고 편집할 유저 이름이 현재 유저 이름과 겹치지 않을 경우
    const existingUsername = await User.findOne({ username: newUsername });
    if (
      existingUsername &&
      String(existingUsername._id) !== String(user._id) //이미 세션에 존재하는 이름이고 그 이름의 주인이 현재 유저가 아닐경우
    ) {
      return res.status(409).json({ message: "이미 존재하는 유저이름입니다" });
    }
    user.username = newUsername;
  }
  if (newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
  }
  await user.save();

  const updatedUser = user.toObject();
  delete updatedUser.password;

  res.status(200).json({
    message: "유저 업데이트 성공!",
    user: {
      userId: updatedUser._id.toString(),
      username: updatedUser.username,
      createdAt: updatedUser.createdAt,
    },
  });
};
