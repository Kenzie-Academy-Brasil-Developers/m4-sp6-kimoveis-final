import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (User) => User.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  realEstate: RealEstate;
}

export { Schedule };
