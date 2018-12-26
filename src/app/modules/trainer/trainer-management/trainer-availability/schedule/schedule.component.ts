import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Availability } from 'src/app/modules/trainer/Model/availability';
import { AvailabilityService } from 'src/app/modules/trainer/Service/availability.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  AvailabilityObj: Availability = new Availability();
  availability: any;

  displayedColumns: string[] = ['id', 'name','startdate','enddate', 'starttime','topic','status'];

  
  dataSource = new MatTableDataSource<any>(this.availability);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllAvailability();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllAvailability() {
    this.availabilityService.getAllAvailability().subscribe(data => {
      this.availability = data;
      this.dataSource = new MatTableDataSource<any>(this.availability);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  console.log(data);
    });
  }




}
