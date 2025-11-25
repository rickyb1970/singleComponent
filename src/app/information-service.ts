import { Injectable } from '@angular/core';
import { Program } from './program';
import { School } from './school';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
    protected programs: Program[] = [
      {
        programID: 6001,
        programShortName: 'BSCS',
        programFullName: 'Bachelor of Science in Computer Science',
        programSchooID: 6,
      },
      {
        programID: 6002,
        programShortName: 'BSIT',
        programFullName: 'Bachelor of Science in Information Technology',
        programSchooID: 6,
      },
      {
        programID: 6003,
        programShortName: 'BSIS',
        programFullName: 'Bachelor of Science in Information Systems',
        programSchooID: 6,
      },
      {
        programID: 6004,
        programShortName: 'BSEMC',
        programFullName: 'Bachelor of Science in Entertainment and Multimedia Computing',
        programSchooID: 6,
      },
      {
        programID: 6005,
        programShortName: 'BSGD',
        programFullName: 'Bachelor of Science in Game Development',
        programSchooID: 6,
      },
    ];

    protected schools: School[] =[
      {
        schoolID: 1,
        schoolShortName: 'SBM',
        schoolFullName: 'School of Business and Management',
      },
            {
        schoolID: 2,
        schoolShortName: 'SAS',
        schoolFullName: 'School of Arts and Sciences',
      },
            {
        schoolID: 3,
        schoolShortName: 'SAMS',
        schoolFullName: 'School of Allied Medical Sciences',
      },
            {
        schoolID: 4,
        schoolShortName: 'SOE',
        schoolFullName: 'School of Education',
      },
            {
        schoolID: 5,
        schoolShortName: 'SOEng',
        schoolFullName: 'School of Engineering',
      },
            {
        schoolID: 6,
        schoolShortName: 'SCS',
        schoolFullName: 'School of Computer Studies',
      },
    ]

    getSchools(): School[]{
      return this.schools;
    }

    getPrograms(): Program[]{
      return this.programs;
    }
}
