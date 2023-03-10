import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "timestamp" })
  date: Date | string;

  @Column()
  hour: string;

  @ManyToOne(() => User, (User) => User.schedule)
  user: User;

  @ManyToOne(() => RealEstate, (RealEstate) => RealEstate.schedule)
  RealEstate: RealEstate;
}

export { Schedule };
