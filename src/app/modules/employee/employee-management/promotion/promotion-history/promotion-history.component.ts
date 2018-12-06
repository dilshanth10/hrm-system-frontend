import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AddPromotionService } from '../Services/add-promotion.service';
import { AddPromotion } from '../models/add-promotion';
import { Designation } from '../models/designation';
import { User } from 'src/app/models/self-service/user';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {
  promotionViews: AddPromotion[];
  user:User[];
  desig:Designation[];
  promotionview: any;

  displayedColumns: string[] = ['proId', 'userId', 'position', 'promdate', 'promremark', 'promsalary', 'promotedBy', 'edit/delete'];


  dataSource = new MatTableDataSource<any>(this.promotionview);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private addPromotionService: AddPromotionService) { }

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

}
