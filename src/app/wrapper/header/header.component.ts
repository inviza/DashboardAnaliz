import { Component, OnInit } from '@angular/core';
import { ManipulatorDOM } from '../../service/manipulationDOM.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkMode: boolean  = false;

  constructor(
    private manipulatorDOM: ManipulatorDOM
  ) { }

  changeMode() { 
    this.manipulatorDOM.toggleClass( document.documentElement, 'dark')
  }
  ngOnInit() {
  }

}
