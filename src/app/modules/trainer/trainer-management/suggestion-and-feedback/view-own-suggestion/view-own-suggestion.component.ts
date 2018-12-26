import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/modules/trainer/Model/suggestion';
import { SuggestionService } from 'src/app/modules/trainer/Service/suggestion.service';

@Component({
  selector: 'app-view-own-suggestion',
  templateUrl: './view-own-suggestion.component.html',
  styleUrls: ['./view-own-suggestion.component.css']
})
export class ViewOwnSuggestionComponent implements OnInit {

  suggestion: Suggestion[];
  suggestionObj = new Suggestion();

  constructor(private suggestionService: SuggestionService) { }

  ngOnInit() {
    this.getSuggetionbyUser();

  }
  getSuggetionbyUser() {
    this.suggestionService.getSuggestionByUser(1).subscribe(data => {
      this.suggestion = data;
      console.log(this.suggestion)
    })
  }
}

