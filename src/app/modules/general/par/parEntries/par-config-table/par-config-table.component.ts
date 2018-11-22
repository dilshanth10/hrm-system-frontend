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
 
  formParConfig=new FormGroup({
    parConfigId:new FormControl(),
    parConfigName:new FormControl()
  })

  constructor(private parConfig:ParconfigService) { }

  ngOnInit() {
   this.parConfig.getParConfig().subscribe(data=>{
     console.log(data);
this.parConfigArray=data;
   })
  }

  
}
