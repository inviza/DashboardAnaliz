import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { SidebarComponent } from './wrapper/sidebar/sidebar.component';
import { HomeComponent } from './wrapper/home/home.component';
import { ProjectsComponent } from './wrapper/home/projects/projects.component';
import { MessagesComponent } from './wrapper/messages/messages.component';
import { ChatViewComponent } from './wrapper/messages/chat-view/chat-view.component';
import { ChatsComponent } from './wrapper/messages/chats/chats.component';
import { ProjectFormComponent } from './wrapper/project-form/project-form.component';

//Pipes
import { DateDifferance } from './pipes/datedifference.pipe'
import { TruncateWords } from './pipes/truncateWords.pipe';
import { DateHumanReadable } from  './pipes/dateHumanReadable.pipe'



@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProjectsComponent,
    MessagesComponent,
    ChatViewComponent,
    ChatsComponent,
    DateDifferance,
    TruncateWords,
    DateHumanReadable,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
