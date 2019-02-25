import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() public item;
public finalRating: number = 0;
  constructor() { }

  ngOnInit() {
    this.getRating(this.item)
  }

  getRating(item) {
    let totalRating = 0;
    let noOfReviews = item.review.length;
    for(let i = 0; i < item.review.length; i++) {
      totalRating += item.review[i].rating; 
    }
    this.finalRating = Math.floor(totalRating / noOfReviews)
  }

}
