import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

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
  styleUrls: ['./view-directory.component.css']
})
export class ViewDirectoryComponent implements OnInit {

  displayedColumns: string[] = ['hoursCovered', 'attendancePercentage','satisfactory'];
  dataSource = new MatTableDataSource(Attendance_Data); 
  
  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue)
  }
  
}
