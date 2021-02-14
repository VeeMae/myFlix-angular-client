import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {

    /**
     * Access to the data from the movie-card component.
     * @param data
     */
    constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: {
      description: string
    }
  ) { }

  ngOnInit(): void {
  }

}
