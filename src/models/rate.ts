import { Model, DataTypes, Sequelize } from 'sequelize';

export interface RateAttributes {
  id: number;
  client_id: string;
  start_weight: string | null;
  end_weight: number | null;
  zone: string | null;
  rate: number | null;
  shipping_speed: number | null;
  locale: string | null;
}

export class Rate extends Model<RateAttributes> implements RateAttributes {
  public id!: number;
  public client_id!: string;
  public start_weight!: string | null;
  public end_weight!: number | null;
  public zone!: string | null;
  public rate!: number | null;
  public shipping_speed!: number | null;
  public locale!: string | null;
}

/**
 * Builds a sequelize Rate object to interact with the db.
 * @param sequelize
 * @returns {Rate} The static Rate class to interact with sequelize
 */
export const RateFactory = (sequelize: Sequelize): any => {
  return sequelize.define(
    'Rate',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_weight: {
        type: DataTypes.FLOAT,
        defaultValue: null,
      },
      end_weight: {
        type: DataTypes.FLOAT,
        defaultValue: null,
      },
      zone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      rate: {
        type: DataTypes.FLOAT,
        defaultValue: null,
      },
      shipping_speed: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      locale: {
        type: DataTypes.ENUM,
        values: ['international', 'domestic'],
        defaultValue: null,
      },
    },
    {
      tableName: 'rates',
      timestamps: false,
    }
  );
};
