import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatIconRegistry } from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

export interface TraineeAttendanceView {
  hoursCovered: string;
  attendancePercentage: number;
} 

const Attendance_Data: TraineeAttendanceView[] = [
  { hoursCovered: '2', attendancePercentage: 45 },
]; 

@Component({
  selector: 'app-view-directory',
  templateUrl: './view-directory.component.html',
  styleUrls: ['./view-directory.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ViewDirectoryComponent implements OnInit {
  name = '';
  jobTitle = '';
  track = '';
  displayedColumns: string[] = ['hoursCovered', 'attendancePercentage','satisfactory'];
  // dataSource = new MatTableDataSource(Attendance_Data); 
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['id','name', 'address', 'contact', 'email'];
  expandedElement: PeriodicElement;
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'serach',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/baseline-search-24px.svg'));
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)
  }
  
}

export interface PeriodicElement {
  id: string;
  name: string;
  address: string;
  contact: string;
  email: string;
  salary: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: '1',
    name: 'John',
    address: 'North',
    contact: '+9477-0123456',
    email: 'example@gmail.com',
    salary:100000
  },
  {
    id: '2',
    name: 'Doe',
    address: 'South',
    contact: '+011-256488',
    email: 'doe@gmail.com',
    salary:150000
  },
  {
    id: '3',
    name: 'Anne',
    address: 'West',
    contact: '+94012125252',
    email: 'anne@gmail.com',
    salary:200000
  },
  {
    id: '4',
    name: 'Shane',
    address: 'America',
    contact: '+9711-86552526',
    email: 'hane@gmail.com',
    salary:90000
  }
];


