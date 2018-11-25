import { Component, OnInit } from '@angular/core';
import { ParAppraisorService } from '../../services/par-appraisor.service';
import { ParAppraisor } from '../../models/par-appraisor.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-par-appraisors',
  templateUrl: './par-appraisors.component.html',
  styleUrls: ['./par-appraisors.component.css']
})
export class ParAppraisorsComponent implements OnInit {

  parAppraisorArray:ParAppraisor[];
  parAppraisor:ParAppraisor=new ParAppraisor()

  formParAppraisor=new FormGroup({
    appraisorId:new FormControl(),
    appraisorEmpId:new FormControl()
  })

  

  constructor(private parAppraisorService:ParAppraisorService) { }

  ngOnInit() {
  this.getdata()
  }

  addData(){
    this.parAppraisor.id=this.formParAppraisor.value.appraisorId;
    this.parAppraisor.empId=this.formParAppraisor.value.appraisorEmpId;
    console.log(this.parAppraisor);
    this.parAppraisorService.addParAppraisor(this.parAppraisor).subscribe(data=>{
      alert("data inserted successfully")
      this.getdata();
    })

  }

  getdata(){
    this.parAppraisorService.getParAppraisor().subscribe(data=>{
      console.log(data);
      this.parAppraisorArray=data;
    })
  }
}
