import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-emp-ex-letter-view-history',
  templateUrl: './emp-ex-letter-view-history.component.html',
  styleUrls: ['./emp-ex-letter-view-history.component.css']
})
export class EmpExLetterViewHistoryComponent implements OnInit {
  displayedColumns: string[] = ['requestedDate','reason','status','issuedDate','provided'];


  history = [
    {'requestedDate' :'12/1/2018', 'reason':'leaving', 'status':'jhbj', 'issuedDate':'15/4/14','provided':'Provided'},
    {'requestedDate' :'1/5/2018', 'reason':'salary demand', 'status':'jhbj', 'issuedDate':'15/4/14','provided':'Provided'}
  ]
  dataSource = new MatTableDataSource<any>(this.history);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.history);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
