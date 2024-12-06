import { DataSource, DataSourceOptions } from 'typeorm';
import { PatPatientsInformation } from './entitys/pat_patients_information';
import { Patientsrx } from './entitys/patientsrx';
import { Rxmedicine } from './entitys/rxmedicine';
import { Rxexaminations } from './entitys/rxexaminations';
import { RxInvestigations } from './entitys/rxinvestigations';
import { RxAdvice } from './entitys/rxadvice';
import { Rxcomplains } from './entitys/rxcomplains';
import { Medicine } from './entitys/medicine';
import { Complains } from './entitys/complains';
import { Set_investigations } from './entitys/set_investigations';
import { SetAdvice } from './entitys/setAdvice';
import { SetExamination } from './entitys/setExamination';
import { Doctor } from './entitys/doctor';
import { Users } from './entitys/users';
import { pat_patients_info } from './entitys/pat_patients_info';

export const AppDataSource: DataSourceOptions = {
  type: 'mysql',
  host: '192.168.0.106',
  port: 3306,
  username: 'qms_uat', 
  password: 'qms_uat',
  database: 'qms_uat', 
  entities: [
    PatPatientsInformation,
    Patientsrx,
    Rxmedicine,
    Rxexaminations,
    RxInvestigations,
    RxAdvice,
    Rxcomplains,
    Medicine,
    Complains,
    Set_investigations,
    SetAdvice,
    SetExamination,
    Doctor,
    Users,
    pat_patients_info
  ],
  // migrations: ['./src/migrations/*.ts'], // For TypeScript files
  migrations: ['./dist/migrations/*.js'],
  synchronize: false, // Set to false in production
  logging: true,
};

const dataSource = new DataSource(AppDataSource);
export default dataSource;

// "migration:generate": "npm run build && npm run typeorm -- migration:generate -d ./dist/data-source.js src/migrations/AutoGeneratedMigration",
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:run -d ./data-source.ts
//npm run typeorm -- migration:run -d ./dist/data-source.js -- -n <MigrationName>

// npm run migration:generate
// npm run migration:run
//npm run typeorm -- migration:run -d ./src/data-source.ts
