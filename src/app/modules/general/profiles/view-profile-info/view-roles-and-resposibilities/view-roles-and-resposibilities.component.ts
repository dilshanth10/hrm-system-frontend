import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-roles-and-resposibilities',
  templateUrl: './view-roles-and-resposibilities.component.html',
  styleUrls: ['./view-roles-and-resposibilities.component.css']
})

export class ViewRolesAndResposibilitiesComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  displayedColumns: string[] = ['jobtitle', 'reportingto','responsibilityfor','location','keyactivities','currentproject','Previouslyworkedprojects'];

  role = [
    { 'jobtitle':'JOB1', 'reportingto':'Manager','responsibilityfor':'RES1', 'location':'KANDY','keyactivities':'1', 'currentproject':'Proj1','Previouslyworkedprojects':'ProjA'},
    { 'jobtitle':'JOB2', 'reportingto':'AR','responsibilityfor':'RES2', 'location':'COLOMBO','keyactivities':'2', 'currentproject':'Proj2','Previouslyworkedprojects':'ProjB'},
    { 'jobtitle':'JOB3', 'reportingto':'Manager','responsibilityfor':'RES3', 'location':'JAFFNA','keyactivities':'3', 'currentproject':'Proj3','Previouslyworkedprojects':'ProjC'},
    { 'jobtitle':'JOB4', 'reportingto':'AR','responsibilityfor':'RES4', 'location':'VAVUNIA','keyactivities':'4', 'currentproject':'Proj4','Previouslyworkedprojects':'ProjD'},
    { 'jobtitle':'JOB5', 'reportingto':'HR','responsibilityfor':'RES5', 'location':'JAFFNA','keyactivities':'5', 'currentproject':'Proj5','Previouslyworkedprojects':'ProjE'},
    { 'jobtitle':'JOB6', 'reportingto':'HR','responsibilityfor':'RES6', 'location':'VAVUNIA','keyactivities':'6', 'currentproject':'Proj6','Previouslyworkedprojects':'ProjF'},
    { 'jobtitle':'JOB7', 'reportingto':'Manager','responsibilityfor':'RES7', 'location':'JAFFNA','keyactivities':'7', 'currentproject':'Proj7','Previouslyworkedprojects':'ProjG'}
  ]
  dataSource = new MatTableDataSource<any>(this.role);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.role);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoNext(){
    this.route.navigate(['/profile/attachmentChecklist'])
  }
goBack(){
  this.route.navigate(['/profile/referees'])
}

}
