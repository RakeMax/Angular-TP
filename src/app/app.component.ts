import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-b3b';
  styleVar='pointer';

  click(){
    this.title ='stop';
  }
}
