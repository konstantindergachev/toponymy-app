const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    default: 'John Doe',
    required: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('users', UserSchema);

module.exports.createUser = async (newUser, callback) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;
    newUser.save(callback);
  } catch (err) {
    console.log('Ошибка в bcrypt в createUser', err);
  }
};

module.exports.comparePassword = async (candidatePassword, hash) => {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, hash);
    return isMatch;
  } catch (err) {
    console.log('Ошибка в bcrypt в comparePassword: ', err);
  }
};
