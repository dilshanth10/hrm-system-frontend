import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-offer-letter',
  templateUrl: './generate-offer-letter.component.html',
  styleUrls: ['./generate-offer-letter.component.css']
})
export class GenerateOfferLetterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Back() {
    this.router.navigate(['/appointment/offerLetter']);
  }
 
  public printComponent() {
    var printButton = document.getElementById("btnPrint");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
  }
}
