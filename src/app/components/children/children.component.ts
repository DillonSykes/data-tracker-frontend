import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Person} from '../../models/person';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import {NavigateService} from '../../navigate.service';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnInit {
  @ViewChild('childlist') childlist: ElementRef;
  public sessionId: string;
  public childNumber: number;
  public children: Person[];
  public currentChild: number;
  constructor(private http: HttpClient,
              private authService: AuthService,
              private navigate: NavigateService,
              private dataService: DataService,
              private route: ActivatedRoute,
              ) {
    this.currentChild = 0;
    this.childNumber = 1;
    this.children = [];
    this.children.push(new Person());
  }

  ngOnInit() {
    this.sessionId = this.route.snapshot.queryParamMap.get('sessionId');
    console.log('Session ID: ', this.sessionId);
    console.log(this.childNumber);

  }
  addChild() {
    this.children.push(new Person());
  }
  public save() {
    console.log('Saving children...');
    this.children.map((child) => {
      if (!child.smoker) {
        child.smoker_amount = 'N/A';
        child.smoker = false;
      }
    });
    this.http.post(environment.LOCAL_HOST + '/children/new',
      {
        token: this.authService.getToken(),
        children: this.children,
        sessionId: this.sessionId
      }).subscribe(res => {
        const data: any = res;
        if (data.status === true) {
          console.log('Saved.');
          // TODO create toast
          this.navigate.goToGrandChildren(this.sessionId);
        }
    });
  }
}
