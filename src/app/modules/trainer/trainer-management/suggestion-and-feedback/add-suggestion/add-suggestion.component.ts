import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/self-service/department';
import { User } from 'src/app/modules/general/career-dev-plan/Model/user';
import { Suggestion } from 'src/app/modules/trainer/Model/suggestion';
import { SuggestionService } from 'src/app/modules/trainer/Service/suggestion.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-add-suggestion',
  templateUrl: './add-suggestion.component.html',
  styleUrls: ['./add-suggestion.component.css']
})
export class AddSuggestionComponent implements OnInit {
  department: Department[];
  departmentObj = new Department();
  users: User[];
  userObj = new User();
  suggestion: Suggestion[];
  suggestionObj = new Suggestion();
  msg: any;
  info:any;
  constructor(private suggestionService: SuggestionService,private token : TokenStorageService) { }

  ngOnInit() {
    this.getDepartment();
    // this.getSuggetionbyUser();
    this.getUsers();

  }
  getUsers() {
    this.suggestionService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  getDepartment() {
    this.suggestionService.getDepartment().subscribe(data => {
      this.department = data;
      console.log(data);
    })
  }
  // getSuggetionbyUser() {
  //   this.info = {
  //     token: this.token.getToken(),
  //     username: this.token.getUsername(),
  //     authorities: this.token.getAuthorities()
  //   };
  //   this.suggestionService.getSuggestionByUser(this.info.username).subscribe(data => {
  //     this.suggestion = data;
  //     console.log(this.suggestion)
  //   })
  // }
  createSuggestion() {
    this.suggestionService.createSuggestion(this.suggestionObj).subscribe(data => {
      console.log(data);
    })
  }
}

