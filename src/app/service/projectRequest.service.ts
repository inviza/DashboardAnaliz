import { Injectable } from '@angular/core';
import { 
    HttpClient,
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

//service
import { Project } from '../interfaces/project-content.inteface'


  

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    url = 'http://localhost:3000/'
    constructor(
        private http: HttpClient,
    ){}


    getProjects() {
        // return [
        //     {
        //     "start" : 1614722400000,
        //     "topic": "Testing",
        //     "customTopic": "Прототипування БТМПР БД",
        //     "progress" : 50,
        //     "deadline": 1615068000000
        //   }
        // ]

        return this.http.get( this.url + 'project').pipe(
            tap( response => {
                console.log(response)
            })
        )
    }

    getProjectSingle(_id: string) {
        return this.http.get( this.url + 'project/' + _id)
    }

    patchProject(project: Project, _id: string) {
        return this.http.patch(this.url + 'project/' + _id, project)
    }

    postProject(project: Project) {
        return this.http.post(this.url + 'project', project)
    }


}