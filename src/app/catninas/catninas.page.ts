import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catninas',
  templateUrl: './catninas.page.html',
  styleUrls: ['./catninas.page.scss'],
})
export class CatninasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  regresar() {
    this.router.navigate(['/home']);
  }
}
