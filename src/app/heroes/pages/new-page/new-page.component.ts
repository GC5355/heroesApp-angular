import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'hero-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  public heroForm =   new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl(''),
    publisher:        new FormControl(''),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  })

  public publishers = [
    {id: 'DC Comics', value: 'DC - Comics'},
    {id: 'Marvel Comics', value: 'Marvel - Comics'}
  ]
}
