import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RecordOfEmploymentService } from '../../../Service/record-of-employment.service';
import { RecordOfEmployment } from '../../../Model/record-of-employment';

@Component({
  selector: 'app-record-of-employment',
  templateUrl: './record-of-employment.component.html',
  styleUrls: ['./record-of-employment.component.css']
})
export class RecordOfEmploymentComponent implements OnInit {
  recordOfEmployment:RecordOfEmployment[];
  displayedColumns: string[] = ['id','from','to','period','workPlaceName','workPlaceAddres','designation','typeOfWork','edit/delete'];

  dataSource = new MatTableDataSource<any>(this.recordOfEmployment);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private recordOfEmploymentService:RecordOfEmploymentService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.recordOfEmployment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRecord();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllRecord(){
    this.recordOfEmploymentService.getRecordOfEmployment().subscribe(data=>{
      this.dataSource=new MatTableDataSource();
      this.dataSource.data=data;
      this.dataSource.paginator = this.paginator;
      console.log(data);

    })
  }

}
