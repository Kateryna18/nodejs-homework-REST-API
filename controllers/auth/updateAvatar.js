const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models/index");


const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars")

const updateAvatar = async (req, res) => {
    const {_id} = req.user;

    const {path: tempUpload, originalname} = req.file;
    const fileName = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, fileName);
    await fs.rename(tempUpload, resultUpload)

    const avatarURL = path.join("avatars", fileName);
    await User.findByIdAndUpdate(_id, {avatarURL})

    res.status(200).json({
        avatarURL,
      });
}

module.exports = updateAvatar