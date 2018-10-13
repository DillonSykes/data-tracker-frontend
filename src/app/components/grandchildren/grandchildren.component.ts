import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Person} from '../../models/person';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth.service';
import {NavigateService} from '../../navigate.service';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-grandchildren',
  templateUrl: './grandchildren.component.html',
  styleUrls: ['./grandchildren.component.css']
})
export class GrandchildrenComponent implements OnInit {
  @ViewChild('GrandChildList') grandChildList: ElementRef;
  public sessionId: string;
  public grandChildNumber: number;
  public grandChildren: Person[];
  public currentGrandChild: number;
  constructor(private http: HttpClient,
              private authService: AuthService,
              private navigate: NavigateService,
              private dataService: DataService,
              private route: ActivatedRoute,
  ) {
    this.currentGrandChild = 0;
    this.grandChildNumber = 1;
    this.grandChildren = [];
    this.grandChildren.push(new Person());
  }

  ngOnInit() {
    this.sessionId = this.route.snapshot.queryParamMap.get('sessionId');
    console.log('Session ID: ', this.sessionId);
    console.log(this.grandChildNumber);

  }
  addGrandChild() {
    this.grandChildren.push(new Person());
  }
  public save() {
    this.grandChildren.map((child) => {
      if (!child.smoker) {
        child.smoker_amount = 'N/A';
        child.smoker = false;
      }
    });
    this.http.post('http://localhost:3000/grandchildren/new',
      {
        token: this.authService.getToken(),
        grandChildren: this.grandChildren,
        sessionId: this.sessionId
      }).subscribe(res => {
      const data: any = res;
      console.log(data);
      if (data.status === true) {
        // TODO create toast
        this.navigate.goToGrandChildren(this.sessionId);
      }
    });
  }

}
