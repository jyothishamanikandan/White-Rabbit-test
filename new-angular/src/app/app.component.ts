import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-angular';

  formData: any = {};

  onSubmit() {
    console.log('Form Data:', this.formData);
  }

}
