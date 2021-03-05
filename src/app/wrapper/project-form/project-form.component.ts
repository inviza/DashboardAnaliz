import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from '../../interfaces/project-content.inteface'
import { Router, ActivatedRoute } from '@angular/router';

//service 
import { ProjectService } from '../../service/projectRequest.service'
import { DateFormator } from '../../service/dateFarmator.service'

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  id: string;
  formMethod: string;
  templateValues: {title: string, button: string}
  topicNames = ['Testing', 'Data Analysis', 'UI Development', 'Backend'];

  projectForm = this.fb.group({
    topic: ['Testing', [Validators.required]],
    customTopic: [null, [Validators.required]],
    progress: [null, [Validators.required]],
    start: [null, [Validators.required]],
    deadline: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private dateFormator: DateFormator
  ) { }

  projectFormValueTransformator(value) {
    value.start = Date.parse(value.start);
    value.deadline = Date.parse(value.deadline);
    return value
  }

  ngOnInit() {
    
    this.activatedRoute.data.subscribe(data => {
      this.formMethod = data['method']
      if(data['method'] === 'POST'){
        this.templateValues= {
          title: 'Додати',
          button: 'Створити'
        }
      } else if(data['method'] === 'PUT') {
        this.templateValues= {
          title: 'Редагування',
          button: 'Змінити'
        }
        this.activatedRoute.params.subscribe(data => {
          this.id = data.id
        })


        this.projectService.getProjectSingle(this.id).subscribe((data: Project)=>{

          this.projectForm.patchValue({
            topic: data.topic,
            customTopic: data.customTopic,
            progress: data.progress,
            start: this.dateFormator.fromTimestampToDate(data.start),
            deadline: this.dateFormator.fromTimestampToDate(data.deadline)
          })

      })
      }
    });
   
  }

  submitForm() {
    // console.log(this.projectFormValueTransformator(this.projectForm.value))
    if(this.formMethod === 'PUT'){
      this.projectService.patchProject(this.projectFormValueTransformator(this.projectForm.value), this.id)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/']);
      })
    } else if(this.formMethod === 'POST') {
      this.projectService.postProject(this.projectFormValueTransformator(this.projectForm.value))
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/']);
      })
    }
    
    console.log(this.projectForm.status)
  }

}
