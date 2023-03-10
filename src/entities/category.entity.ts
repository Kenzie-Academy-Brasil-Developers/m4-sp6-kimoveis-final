import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstate.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, unique: true })
  name: string;

  @ManyToOne(() => RealEstate, (RealEstate) => RealEstate.Category)
  RealEstate: RealEstate;
}

export { Category };
