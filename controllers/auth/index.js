const { ctrlWrapper } = require("../../helpers");

const register = require("./register")
const login = require("./login")
const getCurrentUser = require("./getCurrentUser")
const logout = require("./logout")
const updateAvatar = require("./updateAvatar")
const verifyEmail = require("./verifyEmail")
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    getCurrentUser: ctrlWrapper(getCurrentUser),
    logout: ctrlWrapper(logout),
    updateAvatar: ctrlWrapper(updateAvatar),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
    // updateSubscription: ctrlWrapper(updateSubscription),
  };