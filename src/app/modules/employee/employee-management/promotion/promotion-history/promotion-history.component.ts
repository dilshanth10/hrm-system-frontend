import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AddPromotionService } from '../Services/add-promotion.service';
import { AddPromotion } from '../models/add-promotion';

@Component({
  selector: 'app-promotion-history',
  templateUrl: './promotion-history.component.html',
  styleUrls: ['./promotion-history.component.css']
})
export class PromotionHistoryComponent implements OnInit {
  promotionView: AddPromotion[];
  msg: any;
  
  displayedColumns: string[] = ['proId', 'reqID', 'DesigID', 'position', 'promdate', 'promremark', 'promsalary', 'promotedBy', 'edit/delete'];

 
  dataSource = new MatTableDataSource<any>(this. promotionView);

  // Creditcheck = [
  //   { 'proId': '001', 'reqID': '1', 'DesigID': '1', 'position': 'ASE', 'promdate': '25.04.2001', 'promremark': 'Good', 'promsalary': '80000', 'promotedBy': 'hjh', 'edit/delete': '' },
  //   { 'proId': '002', 'reqID': '2', 'DesigID': '2', 'position': 'PM', 'promdate': '25.04.2006', 'promremark': 'Good', 'promsalary': '90000', 'promotedBy': 'rt', 'edit/delete': '' }

  // ]
 // dataSource = new MatTableDataSource<any>(this.Creditcheck);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private addPromotionService: AddPromotionService) { }

  ngOnInit() {
   
    this.getAddPromotionHistory();

  }

  

    getAddPromotionHistory(){
      this.addPromotionService.getAddPromotion().subscribe(data => {
        this. promotionView = data;
        this.dataSource = new MatTableDataSource<any>(this. promotionView);
         this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
