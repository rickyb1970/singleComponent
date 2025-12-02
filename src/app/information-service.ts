import { Injectable } from '@angular/core';
import { Program } from './program';
import { School } from './school';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
    protected programs: Program[] = [
      {
        programID: 1001,
        programShortName: 'BSA',
        programFullName: 'Bachelor of Science in Accountancy',
        programSchooID: 1,
      },
      {
        programID: 1002,
        programShortName: 'BSBA-FM',
        programFullName: 'Bachelor of Science in Business Administration Major in Financial Management',
        programSchooID: 1,
      },
      {
        programID: 1003,
        programShortName: 'BSBA-HRM',
        programFullName: 'Bachelor of Science in Business Administration Major in Human Resource Management',
        programSchooID: 1,
      },
      {
        programID: 1004,
        programShortName: 'BSBA-MM',
        programFullName: 'Bachelor of Science in Business Administration Major in Marketing Management',
        programSchooID: 1,
      },
      {
        programID: 1005,
        programShortName: 'BSBA-OM',
        programFullName: 'Bachelor of Science in Business Administration major in Operations Management',
        programSchooID: 1,
      },
      {
        programID: 1006,
        programShortName: 'BSEntrep',
        programFullName: 'Bachelor of Science in Entrepreneurship',
        programSchooID: 1,
      },
      {
        programID: 1007,
        programShortName: 'BSHM',
        programFullName: 'Bachelor of Science in Hospitality Management',
        programSchooID: 1,
      },
      {
        programID: 1008,
        programShortName: 'BSHM-FnB',
        programFullName: 'Bachelor of Science in Hospitality Management Major in Food and Beverage',
        programSchooID: 1,
      },
      {
        programID: 1009,
        programShortName: 'BSMA',
        programFullName: 'Bachelor of Science in Management Accounting',
        programSchooID: 1,
      },
      {
        programID: 1010,
        programShortName: 'BSTourism',
        programFullName: 'Bachelor of Science in Tourism Management',
        programSchooID: 1,
      },
      {
        programID: 2001,
        programShortName: 'BAComm',
        programFullName: 'Bachelor of Science in Nursing',
        programSchooID: 2,
      },
      {
        programID: 2002,
        programShortName: 'BAELS',
        programFullName: 'Bachelor of Arts in English Language Studies',
        programSchooID: 2,
      },
      {
        programID: 2003,
        programShortName: 'BAIS',
        programFullName: 'Bachelor of Arts in International Studies',
        programSchooID: 2,
      },
      {
        programID: 2004,
        programShortName: 'BAJournalism',
        programFullName: 'Bachelor of Arts in Journalism',
        programSchooID: 2,
      },
      {
        programID: 2005,
        programShortName: 'BAMarComm',
        programFullName: 'Bachelor of Arts in Marketing Communication',
        programSchooID: 2,
      },
      {
        programID: 2006,
        programShortName: 'BAPolSci',
        programFullName: 'Bachelor of Arts in Political Science',
        programSchooID: 2,
      },
      {
        programID: 2007,
        programShortName: 'BLibSci',
        programFullName: 'Bachelor of Library and Information Science',
        programSchooID: 2,
      },
      {
        programID: 2008,
        programShortName: 'BSBio-MedBio',
        programFullName: 'Bachelor of Science in Biology major in Medical Biology',
        programSchooID: 2,
      },
      {
        programID: 2009,
        programShortName: 'BSPsych',
        programFullName: 'Bachelor of Science in Psychology',
        programSchooID: 2,
      },
      {
        programID: 2010,
        programShortName: 'BAComm',
        programFullName: 'Bachelor of Science in Nursing',
        programSchooID: 2,
      },
      {
        programID: 3001,
        programShortName: 'BSN',
        programFullName: 'Bachelor of Science in Nursing',
        programSchooID: 3,
      },
      {
        programID: 3002,
        programShortName: 'BSMedTech',
        programFullName: 'Bachelor of Science in Medical Technology',
        programSchooID: 3,
      },
      {
        programID: 3003,
        programShortName: 'BSMedLabSci',
        programFullName: 'Bachelor of Science in Medical Laboratory Science',
        programSchooID: 3,
      },
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
