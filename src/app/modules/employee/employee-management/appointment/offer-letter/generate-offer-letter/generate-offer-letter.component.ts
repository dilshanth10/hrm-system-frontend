import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-offer-letter',
  templateUrl: './generate-offer-letter.component.html',
  styleUrls: ['./generate-offer-letter.component.css']
})
export class GenerateOfferLetterComponent implements OnInit {

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
