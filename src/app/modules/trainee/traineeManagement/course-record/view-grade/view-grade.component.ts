import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-grade',
  templateUrl: './view-grade.component.html',
  styleUrls: ['./view-grade.component.css']
})
export class ViewGradeComponent implements OnInit {
  displayedColumns: string[] = ['gradeId', 'gradeValue','editGrade','deleteGrade'];

  gradeId = [
    { 'gradeId':'1', 'gradeValue':'A','editGrade':'edit','deleteGrade':'delete'},
    { 'gradeId':'2', 'gradeValue':'B','editGrade':'edit','deleteGrade':'delete'},
    { 'gradeId':'3', 'gradeValue':'C','editGrade':'edit','deleteGrade':'delete'},
    { 'gradeId':'4', 'gradeValue':'D','editGrade':'edit','deleteGrade':'delete'} 
  ]
  dataSource = new MatTableDataSource<any>(this.gradeId);
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.gradeId);
  }
}
