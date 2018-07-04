
import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  OnChanges,
  AfterViewInit
} from '@angular/core';

import { Observable , Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
