const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const errorHandler = require('../utils/error');

const updateUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can update only your account!'));
    }

    const userToUpdate = await User.findById(req.params.id);

    if (!userToUpdate) {
      return next(errorHandler(404, 'User not found'));
    }

    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedFields = {
      username: req.body.username || userToUpdate.username,
      email: req.body.email || userToUpdate.email,
      password: req.body.password || userToUpdate.password,
      profilePicture: req.body.profilePicture || userToUpdate.profilePicture,
    };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedFields, { new: true });

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can delete only your account!'));
    }

    const userToDelete = await User.findById(req.params.id);

    if (!userToDelete) {
      return next(errorHandler(404, 'User not found'));
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteUser, updateUser };
