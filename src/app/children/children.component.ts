import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Person} from '../models/person';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {NavigateService} from '../navigate.service';
import {DataService} from '../data.service';
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
              public renderer: Renderer2) {
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
    console.log(this.childNumber);
    const number: number = ++this.childNumber;
    console.log(number);
    const button = this.renderer.createElement('button');
    this.renderer.addClass(button, 'dropdown-item');
    const text = this.renderer.createText('Child #' + number);
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(this.childlist.nativeElement, button);
    this.renderer.listen(button, 'click', (event) => {
      this.currentChild = number - 1;
    });
    console.log(button);
    this.children.push(new Person());
  }
  // public save(form, goToGrandChildren: boolean) {
  //   const formValue = form.value;
  //   const child: Person = new Person(
  //     formValue.person.first_name,
  //     formValue.person.last_name,
  //     formValue.person.dob,
  //     formValue.checkbox.smoker,
  //     formValue.checkbox.amount,
  //     formValue.person.health_concerns
  //   );
  //   console.log(child);
  //   this.http.post(environment.API_ENDPOINT + '/children/new',
  //     {
  //       token: this.authService.getToken(),
  //       child: child,
  //       sessionId: 'Something',
  //     }).subscribe(res => {
  //     const data: any = res;
  //     if (data.status === true && goToGrandChildren === false) {
  //       // TODO create toast
  //     }
  //     if (data.status && goToGrandChildren) {
  //       this.navigate.goToGrandChildren();
  //     } else {
  //       window.alert('DIDNt work');
  //       // TODO create toast
  //     }
  //   });
  //
  // }
}
