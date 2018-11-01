import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-care-taker',
  templateUrl: './care-taker.component.html',
  styleUrls: ['./care-taker.component.css']
})
export class CareTakerComponent implements OnInit {
  public _inputText: string;
  constructor(public http: HttpClient) { }
  @Input()
  get inputText() {
    return this._inputText;
  }

  set inputText(val) {
    console.log(val);
    this._inputText = val;
    this.inputTextChange.emit(this._inputText);
  }

  @Output() inputTextChange = new EventEmitter();
  ngOnInit() {
  }
  public save() {
    console.log(this._inputText);
    // if (this.inputText === 'N/A') {
    //   console.log(this.inputText)
    // }
    // this.http.put(environment.API_ENDPOINT + '/session/')
  }
}
