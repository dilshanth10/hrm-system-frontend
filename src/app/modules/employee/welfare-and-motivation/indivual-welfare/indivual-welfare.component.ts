import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';

@Component({
  selector: 'app-indivual-welfare',
  templateUrl: './indivual-welfare.component.html',
  styleUrls: ['./indivual-welfare.component.css']
})
export class IndivualWelfareComponent implements OnInit {

  displayedColumns: string[] = ['name','allowance','amount','date','edit/delete'];

  individualwelfare = [
    {'name':'John','allowance':'Medical Allowance','amount':'5000.00','date':'10.11.2018', 'edit/delete':'' },
    {'name':'Peris','allowance':'Travalling Allowance','amount':'3000.00','date':'20.11.2018',  'edit/delete':'' },
    
  ]
  dataSource = new MatTableDataSource<any>(this.individualwelfare);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.individualwelfare);
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

