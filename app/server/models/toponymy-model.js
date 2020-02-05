const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToponymySchema = new Schema({
  oldName: {
    type: String,
    default: '100 лет революции',
    index: true,
  },
  adminDistrict: {
    type: String,
    default: 'Дзержинский',
  },
  newName: {
    type: String,
    default: '100 лет революции',
  },
});

module.exports = Topopnymy = mongoose.model('toponymies', ToponymySchema);
