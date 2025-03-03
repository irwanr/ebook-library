import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const Product = db.define(
  'product',
  {
    name: DataTypes.STRING,
    book: DataTypes.STRING,
    url: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export default Product;

(async () => {
  await db.sync();
})();
