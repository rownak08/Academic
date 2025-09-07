import { Module } from '@nestjs/common';
import { PatientController } from './patient/patient.controller';
import { PatientService } from './patient/patient.service';
import { PatientController } from './patient/patient.controller';

@Module({
  controllers: [PatientController],
  providers: [PatientService]
})
export class PatientsModule {}
