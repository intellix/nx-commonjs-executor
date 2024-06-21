import { AllowNull, AutoIncrement, Column, CreatedAt, DataType, HasMany, Model, PrimaryKey, Table, Unique, UpdatedAt } from "sequelize-typescript";
import { EntityTag } from "./entity-tag.model";

@Table({
  modelName: 'Tag',
  tableName: 'Tag',
})
export class Tag extends Model {
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

  @HasMany(() => EntityTag)
  entityTags: EntityTag[];
}
