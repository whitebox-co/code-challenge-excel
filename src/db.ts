import { Sequelize } from 'sequelize';
import { RateFactory } from './models/rate';

const sequelize = new Sequelize('whitebox', 'dbuser', 'resubd', {
  host: 'mysql',
  dialect: 'mysql',
});

export default {
  rate: RateFactory(sequelize),
};
