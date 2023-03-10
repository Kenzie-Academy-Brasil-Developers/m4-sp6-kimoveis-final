import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean", nullable: true, default: false })
  sold?: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number | string;

  @Column()
  size: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address | null | undefined;

  @OneToMany(() => Schedule, (schedule) => schedule.RealEstate)
  schedule: Schedule[];

  @ManyToOne(() => Category, (Category) => Category.RealEstate)
  Category: Category[];
}

export { RealEstate };
