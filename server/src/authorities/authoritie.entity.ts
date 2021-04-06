import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import UserEntity from "../user/user.entity";

@Entity()
class AuthorityEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  authority: string;
}

export default AuthorityEntity;
