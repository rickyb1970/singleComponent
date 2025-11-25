import { Component, } from '@angular/core';
import { Student } from './student';
import { School } from './school';
import { Program } from './program';
import { InformationService } from './information-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
   title:string = '';
   studentData: Student = {
      studNumber: 0,
      studFname: '',
      studMname: '',
      studLname: '',
      studCollID: 0,
      studProgID: 0,
      studYear: 0,
   };
   studentCollection: Student[] = [];
   schools!: School[];
   programs!: Program[];
   filteredPrograms!: Program[];
   disabledProgram: boolean = true;
   showStudentList: boolean = false;
   successfullyAdded = false;

   constructor(private info: InformationService){
       this.schools = info.getSchools();
       this.programs = info.getPrograms();
   }

   private validateData(): boolean{
       if(this.studentData.studNumber === 0
          || this.studentData.studFname === ""
          || this.studentData.studLname === ""
          || this.studentData.studCollID === 0
          || this.studentData.studProgID === 0
          || this.studentData.studYear === 0
        ){
          return false;
        } else {
          return true;
        }
   }

   addStudentData(): void{
        if(this.validateData()){
            this.studentCollection.push(this.studentData);
            this.displayAddedMessage();
        }
        this.resetStudentData();
        console.log(this.studentCollection);
   }

   displayAddedMessage(){
      setTimeout(() => {
         this.successfullyAdded = true;
      }, 3000);

      this.successfullyAdded = false;
   }

   listStudentCollection(): Student[] | boolean{
       if(this.studentCollection.length === 0){
             this.showStudentList = false;
        } else {
             this.showStudentList = (!this.showStudentList) ? true : false;
        }
        return this.studentCollection;
   }

   resetStudentData(): void{
        this.studentData = {
          studNumber: 0,
          studFname: '',
          studMname: '',
          studLname: '',
          studCollID: 0,
          studProgID: 0,
          studYear: 0,
        }

        this.disabledProgram = true;
        this.showStudentList = false;
        this.successfullyAdded = false;
   }

   filterPrograms(event: Event): void{
       let selectedValue = Number((event.target as HTMLSelectElement ).value);

       let programs = this.programs.filter(item => {
           return item.programSchooID === selectedValue;
       });

       this.disabledProgram = (programs.length > 0) ? false : true;

       this.filteredPrograms = programs;

   }

   checkMiddleName(middleName: string | undefined): string{
        if(middleName === undefined || middleName === ""){
             return "";
        } else {
             return middleName.substring(0,1) + ".";
        }
   }

   getSchoolName(schoolID: number): string | undefined{
          let school: School | undefined;

          school = this.schools.find(item => {
              return item.schoolID === Number(schoolID);
          });

          return school?.schoolFullName;

   }

   getProgramName(programID: number): string | undefined{
          let program: Program | undefined;

          program = this.programs.find(item => {
              return item.programID === Number(programID);
          });

          return program?.programFullName;
      }


}
