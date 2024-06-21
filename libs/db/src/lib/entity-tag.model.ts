import { AllowNull, AutoIncrement, BelongsTo, Column, CreatedAt, DataType, ForeignKey, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";
import { Tag } from "./tag.model";

@Table({
  modelName: 'Tag',
  tableName: 'Tag',
})
export class EntityTag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  name: string;

  @PrimaryKey
  @ForeignKey(() => Tag)
  @Column(DataType.INTEGER)
  tagId: number;

  @BelongsTo(() => Tag)
  tag: Tag;
}
