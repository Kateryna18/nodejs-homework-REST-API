const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models/index");
const Jimp = require("jimp");
const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, fileName);
  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", fileName);

  try {
    const image = await Jimp.read(resultUpload);
    await image.resize(250, 250);
    await image.writeAsync(resultUpload);
  } catch (error) {
    HttpError(500, "Avatar resizing error")
  }

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;
