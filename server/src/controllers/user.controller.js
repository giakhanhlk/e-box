const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.addUser = async (req, res, next) => {
  const {
    email,
    username,
    firstName,
    lastName,
    phoneNumber,
    password,
    rePassword,
  } = req.body;

  try {
    const existUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    const existPhoneNumber = await User.findOne({ phoneNumber });

    if (!existUser && !existPhoneNumber) {
      bcrypt.hash(password, 10, async (error, hash) => {
        if (error) {
          return res.status(500).json({ error: error });
        }

        const user = new User({
          email,
          firstName,
          lastName,
          username,
          phoneNumber,
          password: hash,
        });

        await user.save();
        return res
          .status(201)
          .json({ message: "Đăng ký tài khoản thành công" });
      });
    } else if (existPhoneNumber) {
      return res.status(409).json({ message: "Số điện thoai đã tồn tại" });
    } else {
      if (existUser.username === username) {
        return res.status(409).json({ message: "Tài khoản đã tồn tại" });
      }

      if (existUser.email === email) {
        return res.status(409).json({ message: "Email đã tồn tại" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    const users = await User.aggregate([
      {
        $match: {
          $or: [{ email: email }, { username: email }],
        },
      },
      {
        $project: {
          _id: 1,
          username: 1,
          email: 1,
          password: 1,
          avatar: 1,
        },
      },
    ]);

    if (users.length < 1) {
      return res
        .status(400)
        .json({ message: "Không tìm thấy tài khoản Box của bạn" });
    }

    bcrypt.compare(password, users[0].password, (error, result) => {
      if (error) {
        return res
          .status(400)
          .json({ message: "Xảy ra lỗi trong khi xác thực" });
      }

      if (result) {
        const token = jwt.sign(
          {
            email: users[0].email,
            userId: users[0]._id,
            username: users[0].username,
          },
          process.env.SERVER_SECRET_KEY,
          {
            expiresIn: "2h",
          }
        );

        const user = {
          _id: users[0]._id,
          username: users[0].username,
          avatar: users[0].avatar,
          token: `Bearer ${token}`,
        };

        req.body.user = user;
        next();
        return;
      }

      return res.status(400).json({ message: "Sai mật khẩu" });
    });
  } catch (error) {
    return res.status(500).json({ message });
  }
};

exports.getMyData = async (req, res, next) => {
  const user = await User.findById(req.userData.userId).select(
    "username avatar"
  );
  req.body.user = user;
  next();
};

exports.sendUserData = (req, res) => {
  return res.status(200).json({ user: req.body.user });
};
