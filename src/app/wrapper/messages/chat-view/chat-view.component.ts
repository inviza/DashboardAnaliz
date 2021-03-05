import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.scss']
})
export class ChatViewComponent implements OnInit {

  @ViewChild('chatProfile', { static: true })  chatProfile: ElementRef;
  @ViewChild('chatForm', { static: true })  chatForm: ElementRef;
  @ViewChild('chatView', { static: true })  chatView: ElementRef;

  chatViewHeight: number;
  chatViewStyle: {
    'height': string,
    'padding-top': string

  }

  constructor() { }

  ngOnInit() {
    this.chatViewHeight = this.chatView.nativeElement.clientHeight - ( this.chatForm.nativeElement.clientHeight);
    console.log(this.chatViewHeight)

    this.chatViewStyle = {
      'height': this.chatViewHeight + 'px',
      'padding-top': this.chatProfile.nativeElement.clientHeight + 'px',
    }
  }

}
