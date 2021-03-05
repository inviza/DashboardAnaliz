import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMessage = false;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  messageViewToggle() {
    this.showMessage = !this.showMessage;
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.data.subscribe(data => console.log(data));
  }

}
