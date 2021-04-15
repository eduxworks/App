import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catninos',
  templateUrl: './catninos.page.html',
  styleUrls: ['./catninos.page.scss'],
})
export class CatninosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar() {
    this.router.navigate(['/home']);
  }

}
