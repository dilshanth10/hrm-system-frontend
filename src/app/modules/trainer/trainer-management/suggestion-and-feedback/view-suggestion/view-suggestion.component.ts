import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/modules/trainer/Model/suggestion';
import { SuggestionService } from 'src/app/modules/trainer/Service/suggestion.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-view-suggestion',
  templateUrl: './view-suggestion.component.html',
  styleUrls: ['./view-suggestion.component.css']
})
export class ViewSuggestionComponent implements OnInit {

  suggestions :Suggestion[];
  suggestionObj=new Suggestion();
  msg:any;

  constructor(private suggestionService:SuggestionService,private token: TokenStorageService) { }

  ngOnInit() {
    this.getSuggestion();
  }

  
  getSuggestion(){
    this.suggestionService.getSuggestion().subscribe(data=>{
      this.suggestions=data;
      console.log(data);
    })
  }
}

