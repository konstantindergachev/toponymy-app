const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  image: {
    type: String,
    default: '../img/about_kharkiv/img_1.jpg',
    index: true,
  },
  title: {
    type: String,
    default: '100 лет революции',
  },
  text: {
    type: String,
    default:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Article = mongoose.model('articles', ArticleSchema);
