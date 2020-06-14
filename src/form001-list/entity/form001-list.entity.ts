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
    Sequelize
} from 'sequelize-typescript';
import { User } from 'src/users/entity/users.entity';
import { Form001 } from 'src/form001/entity/forms.entity';
@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001_List extends Model<Form001_List>{
    @PrimaryKey
    @AutoIncrement
    @Column
    l_id: number
    
    // !------------------------ info 1  ------------------------! //
    @Column
    l_detail_1: string;

    @Column
    l_amount_1: number;

    @Column
    l_unit_1: string;

    @Column
    l_priceunit_1: number;
    // !------------------------ End 1  ------------------------! //

    // !------------------------ info 2  ------------------------! //
    @Column
    l_detail_2: string;

    @Column
    l_amount_2: number;

    @Column
    l_unit_2: string;

    @Column
    l_priceunit_2: number;
    // !------------------------ end 2  ------------------------! //

    // !------------------------ info 3  ------------------------! //
    @Column
    l_detail_3: string;

    @Column
    l_amount_3: number;

    @Column
    l_unit_3: string;

    @Column
    l_priceunit_3: number;
    // !------------------------ end 3  ------------------------! //

    // !------------------------ info 4  ------------------------! //
    @Column
    l_detail_4: string;

    @Column
    l_amount_4: number;

    @Column
    l_unit_4: string;

    @Column
    l_priceunit_4: number;
    // !------------------------ end 4  ------------------------! //

    // !------------------------ Relation to Table Form001 ------------------------! //
    @BelongsTo(()=> Form001)
    form001: Form001;

    @AllowNull(false)
    @ForeignKey(() => Form001)
    @Column
    order_id: number
    // !------------------------- end ------------------------! //
}