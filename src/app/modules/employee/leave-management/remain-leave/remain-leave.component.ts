import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';
import { LeaveAllocationService } from 'src/app/services/leave-management/leave-allocation.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveAllocation } from 'src/app/models/leave-management/leave-allocation';

@Component({
  selector: 'app-remain-leave',
  templateUrl: './remain-leave.component.html',
  styleUrls: ['./remain-leave.component.css']
})
export class RemainLeaveComponent implements OnInit {
  info:any;
  role: String;
  username: String;
  allocationLeaveByUsername: LeaveAllocation[];
  dataSource = new MatTableDataSource<any>(this.allocationLeaveByUsername);
  
  

  constructor(private token: TokenStorageService,
    private leaveAllocationService:LeaveAllocationService) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.role = this.info.authorities;
    this.username = this.info.username;
    this.getLeaveAllocation();
  }
  
  getLeaveAllocation() {
    this.leaveAllocationService.getAllLeaveAllocationByUser(this.username).subscribe(data => {
      this.allocationLeaveByUsername = data;
      this.dataSource = new MatTableDataSource<any>(this.allocationLeaveByUsername);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

}
