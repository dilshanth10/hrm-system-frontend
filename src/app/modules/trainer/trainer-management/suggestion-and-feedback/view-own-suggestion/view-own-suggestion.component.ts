import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/modules/trainer/Model/suggestion';
import { SuggestionService } from 'src/app/modules/trainer/Service/suggestion.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-view-own-suggestion',
  templateUrl: './view-own-suggestion.component.html',
  styleUrls: ['./view-own-suggestion.component.css']
})
export class ViewOwnSuggestionComponent implements OnInit {

  suggestion: Suggestion[];
  suggestionObj = new Suggestion();
  info:any;

  constructor(private suggestionService: SuggestionService,private token : TokenStorageService) { }

  ngOnInit() {
    this.getSuggetionbyUser();

  }
  getSuggetionbyUser() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.suggestionService.getSuggestionByUser(1).subscribe(data => {
      this.suggestion = data;
      console.log(this.suggestion)
    })
  }
}

