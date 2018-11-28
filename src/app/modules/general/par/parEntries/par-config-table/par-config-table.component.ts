import { Component, OnInit, ViewChild } from '@angular/core';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-par-config-table',
  templateUrl: './par-config-table.component.html',
  styleUrls: ['./par-config-table.component.css']
})
export class ParConfigTableComponent implements OnInit {
  parConfigArray:ParConfig[];
  parConfig:ParConfig = new ParConfig();
 
  formParConfig=new FormGroup({
    parConfigId:new FormControl(),
    parConfigName:new FormControl()
  })

  constructor(private parConfigService:ParconfigService) { }

  ngOnInit() {
    this.getdata();

  }
  getdata(){
    this.parConfigService.getParConfig().subscribe(data=>{
      console.log(data);
 this.parConfigArray=data;
    })
  }

  addData(){
    this.parConfig.id=this.formParConfig.value.parConfigId;
    this.parConfig.contentName=this.formParConfig.value.parConfigName;
    console.log(this.parConfig);
    this.parConfigService.addParConfig(this.parConfig).subscribe(data=>{
      alert("data inserted successfully")
      this.getdata();
    })

  }

  
}
