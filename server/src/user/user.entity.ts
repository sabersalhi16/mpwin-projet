import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import AuthorityEntity from "../authorities/authoritie.entity";
@Entity()
class UserEntity {
  @PrimaryGeneratedColumn()
  public id: string;
  @Column()
  public username: string;
  @Column()
  public firstName: string;
  @Column()
  public lastName: string;
  @Column()
  public name: string;
  @Column()
  public email: string;
  @Column()
  public imageUrl: string;
  @Column()
  public activated: boolean;
  @Column()
  public langKey: string;
  @Column()
  public createdBy: string;
  @CreateDateColumn()
  createdDate: Date;
  @UpdateDateColumn()
  updatedDate: Date;
  @OneToOne(() => AuthorityEntity)
  @JoinColumn()
  public authorities: AuthorityEntity[];
  @Column()
  public photoDocumentId: number;
  @Column()
  public couvertureDocumentId: number;
}

export default UserEntity;
