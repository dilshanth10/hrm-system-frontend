import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AddPromotionService } from '../Services/add-promotion.service';
import { AddPromotion } from '../models/add-promotion';
import { Designation } from '../models/designation';
import { User } from 'src/app/models/self-service/user';
import { UserService } from 'src/app/services/self-service/user.service';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {
  promotionViews: AddPromotion[];
  user:User[];
  desig:Designation[];
  proEditObj: AddPromotion = new AddPromotion();

  msg:any;
  promotionview: any;

  displayedColumns: string[] = ['id', 'userId', 'designationId', 'promdate', 'promremark', 'promsalary', 'promotedBy', 'edit/delete'];


  dataSource = new MatTableDataSource<any>(this.promotionview);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private addPromotionService: AddPromotionService,private userService: UserService,) { }

  ngOnInit() {

    this.getAddPromotionHistory();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAddPromotionHistory() {
    this.addPromotionService.getAddPromotion().subscribe(data => {
      this.promotionview = data;
      this.dataSource = new MatTableDataSource<any>(this.promotionview);
      console.log(data);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editPro(pro) {
    this.proEditObj = Object.assign({}, pro);
  }

  updatePro() {
    this.addPromotionService.editPromotion(this.proEditObj).subscribe(data => {
      // alert("User updated"); 
      this.getAddPromotionHistory();
    });
  }

  deletepro(deluser) {
    this.addPromotionService.deletePromotion(deluser).subscribe(data => {
      this.promotionview.id = deluser.id;
      // alert("User deleted");
      this.getAddPromotionHistory();
    });
  }
}
