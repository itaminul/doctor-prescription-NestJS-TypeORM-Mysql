import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rxexaminations } from "./rxexaminations";

@Entity('setExamination')
export class SetExamination {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ nullable: true })
  slNo: number;
  @Column({ nullable: true })
  description: string;
  @Column({ default: 1 })
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @OneToMany(() => Rxexaminations, (rxEamination) => rxEamination.setExamination, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'examinationId'})
  rxExaminations: Rxexaminations[]
}