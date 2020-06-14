import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo,
    Sequelize,
    HasOne
} from 'sequelize-typescript';

import { Form001 } from 'src/form001/entity/forms.entity'
@Table({
    timestamps: true,
    paranoid: true,
})
export class Status_form001 extends Model<Status_form001> {
    @PrimaryKey
    @AutoIncrement
    @Column
    s_id: number
    
    @Column
    s_detail_th: string;

    @Column
    s_detail_en: string;

    // !------------------------ Relation to Table Form001 ------------------------! //
    @HasMany(() => Form001)
    players: Form001[];
    // !------------------------ end ------------------------! //
}
    