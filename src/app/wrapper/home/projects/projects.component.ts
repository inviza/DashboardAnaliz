import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';


//service 
import { ManipulatorDOM } from '../../../service/manipulationDOM.service'
import { DateFormator } from '../../../service/dateFarmator.service'
import { ProjectService} from '../../../service/projectRequest.service'

//interfaces
import { Project } from '../../../interfaces/project-content.inteface'
import { from } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('projectList', { static: true })  projectList: ElementRef;
  @ViewChild('viewActionBox', { static: true }) viewActionBox: ElementRef;

  viewMode: string = 'grid';
  currentDate: string;
  currentDateTimestasmp: number = new Date().getTime();
  projects: Project[] = []; 
  // [
  //   {
  //     "start" : 1614722400000,
  //     "topic": "Testing",
  //     "customTopic": "Прототипування БТМПР БД",
  //     "progress" : 50,
  //     "deadline": 1615068000000
  //   },
  //   {
  //       "start" : 1614722400000,
  //       "topic": "Data Analysis",
  //       "customTopic": "Розвертування модуляції",
  //       "progress" : 10,
  //       "deadline": 1615327200000
  //   },
  //   {
  //       "start" : 1614722400000,
  //       "topic": "UI Development",
  //       "customTopic": "Контрагенти встановлення",
  //       "progress" : 20,
  //       "deadline": 1615759200000
  //   },
  //   {
  //       "start" : 1614722400000,
  //       "topic": "Data Analysis",
  //       "customTopic": "Моделювання по першому блоку...",
  //       "progress" : 30,
  //       "deadline": 1616364000000
  //   },
  //   {
  //       "start" : 1614722400000,
  //       "topic": "Backend",
  //       "customTopic": "Запроси Контрагенти(Patch,...",
  //       "progress" : 70,
  //       "deadline": 1616965200000
  //   },
  //   {
  //       "start" : 1614722400000,
  //       "topic": "Backend",
  //       "customTopic": "Бітемполярність Замовлень",
  //       "progress" : 80,
  //       "deadline": 1616965200000
  //   },
  //   {
  //     "start" : 1614722400000,
  //     "topic": "Testing",
  //     "customTopic": "Прототипування",
  //     "progress" : 100,
  //     "deadline": 1616965200000
  //   }
  // ]
  
  constructor(
    private manipulatorDOM: ManipulatorDOM,
    private dateFormator: DateFormator,
    private projectService: ProjectService
  ) { }

  listView() {
    this.manipulatorDOM.changeClass(this.projectList.nativeElement, 'jsGridView', 'jsListView')
    this.viewTypeActiveButton('list')
    this.viewMode = 'list';
  }

  gridView() {
    this.manipulatorDOM.changeClass(this.projectList.nativeElement, 'jsListView', 'jsGridView')
    this.viewTypeActiveButton('grid')
    this.viewMode = 'grid';
  }
  viewTypeActiveButton(type: string) {
    if(type !== this.viewMode) { 
      let gridButton = this.viewActionBox.nativeElement.lastElementChild;
      let listButton = this.viewActionBox.nativeElement.firstElementChild;
  
      this.manipulatorDOM.toggleClass( gridButton, 'active')
      this.manipulatorDOM.toggleClass( listButton, 'active')
    }
  }

  boxStyles() {
    this.projects.map(project => {
      
      switch(project.topic){
        case 'Testing': 
          project.boxColor = '#dbf6fd';
          project.progressBarColor = '#096c86';
          break;
        case 'Data Analysis':
          project.boxColor = '#e9e7fd';
          project.progressBarColor = '#4f3ff0'
          break;
        case 'Backend':
          project.boxColor = '#fee4cb';
          project.progressBarColor = '#ff942e'
          break;

        default: 
          project.boxColor = '#ffd3e2';
          project.progressBarColor = '#e92aa2'
      }
    }) 
  }



  ngOnInit() {
    // this.projects = this.projectService.getProjects()
    this.projectService.getProjects().subscribe((data: Project[])=>{
      this.projects = data
      this.boxStyles()
    });
    
    this.currentDate = this.dateFormator.mounthDayHumanRead(new Date().getTime())
  }
}
