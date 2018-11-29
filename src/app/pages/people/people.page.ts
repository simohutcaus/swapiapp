import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private router: Router, private api: ApiService, private http: HttpClient) { }

  ngOnInit() {
    this.people = this.http.get('https://swapi.co/api/people');
  }

  openDetails(person) {
    let split = person.url.split('/');
    let personId = split[split.length-2];
    console.log('this is personId ' + personId);
    this.router.navigateByUrl(`/tabs/(people:people/${personId})`)
  }


}
