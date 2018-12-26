import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TrainingHistory } from 'src/app/models/training-history';
import { TrainingHistoryService } from '../../Service/training-history.service';


@Component({
  selector: 'app-training-history',
  templateUrl: './training-history.component.html',
  styleUrls: ['./training-history.component.css']
})
export class TrainingHistoryComponent implements OnInit {
  trainingHistoryObj: TrainingHistory = new TrainingHistory();
  training: any;
  dataSource = new MatTableDataSource<any>(this.training);


  displayedColumns: string[] = ['id', 'trainerName', 'trainingTopic', 'date', 'totalCoveredHours', 'edit/delete'];
 




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingHistoryService: TrainingHistoryService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllTrainingHistory();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  getAllTrainingHistory() {
    this.trainingHistoryService.getAllTrainingHistory().subscribe(data => {
      this.training = data;
      this.dataSource = new MatTableDataSource<any>(this.training);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  console.log(data);
    });
  }


  addTrainingHistory() {
    this.trainingHistoryService.createTrainingHistory(this.trainingHistoryObj).subscribe(data => {
      alert("Training History added");
    });
  }

  editTrainingHistory(trainingHistory) {
    console.log(trainingHistory);
    this.trainingHistoryObj = Object.assign({}, trainingHistory);
  }


  updateTrainingHistory() {
    this.trainingHistoryService.updateTrainingHistory(this.trainingHistoryObj).subscribe(data => {
      alert("trainingHistory Updated Sucessfully");
      this.getAllTrainingHistory();
    });
  }
  deleteTrainingHistory(trainingHistory) {
    console.log(trainingHistory);
    this.trainingHistoryService.deleteTrainingHistory(trainingHistory).subscribe(data => {

      this.getAllTrainingHistory();

    });
  }
}