import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agrement-letter',
  templateUrl: './agrement-letter.component.html',
  styleUrls: ['./agrement-letter.component.css']
})
export class AgrementLetterComponent implements OnInit {

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
