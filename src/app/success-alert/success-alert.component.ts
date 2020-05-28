import {Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<h3>Success!</h3>',
  styles: [`
    h3 {
      padding: 20px;
      background-color: palegreen;
      border: 1px solid green;
    }
  `]
})
export class SuccessAlertComponent {

}
