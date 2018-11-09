import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-letter-template',
  templateUrl: './experience-letter-template.component.html',
  styleUrls: ['./experience-letter-template.component.css']
})
export class ExperienceLetterTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public printComponent() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }

}
