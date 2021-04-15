import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catmujeres',
  templateUrl: './catmujeres.page.html',
  styleUrls: ['./catmujeres.page.scss'],
})
export class CatmujeresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  regresar() {
    this.router.navigate(['/home']);
  }
}
