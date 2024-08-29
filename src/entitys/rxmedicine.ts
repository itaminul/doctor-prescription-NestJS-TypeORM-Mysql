import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patientsrx } from './patientsrx';

@Entity('rxmedicine')
export class Rxmedicine {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  medicineId: number;
  @Column({ nullable: true })
  doses: string
  @Column({ nullable: true })
  isContinue: number
  @Column({ nullable: true })
  duration: string
  @Column({ nullable: true })
  remarks: string
  @Column({default: 1})
  activeStatus: number;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ type: 'int', nullable: true })
  updated_by: number;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
  @ManyToOne(() => Patientsrx,(patientrx) => patientrx.rxmedicine, {
    nullable: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'patientsrxid' }) 
  patientsrx: Patientsrx
}
