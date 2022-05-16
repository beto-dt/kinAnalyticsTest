import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KlingosService } from 'src/app/services/klingos.service';

@Component({
  selector: 'app-klingos-list',
  templateUrl: './klingos-list.component.html',
  styleUrls: ['./klingos-list.component.scss'],
})
export class KlingosListComponent implements OnInit {
  public klingos: any;

  constructor(private klingosService: KlingosService, private router: Router) {}

  ngOnInit(): void {
    /* Cargar la informacion de la coleccion Klingos */
    this.klingosService.getklingos().subscribe((res) => {
      this.klingos = res.klingons;
    });
  }

  /* Elimina el documento mediante el ID  de la coleccion klingos */
  deleteKlingos(id: any) {
    this.klingosService.deleteklingos(id).subscribe(() => {
      alert('Dato Eliminado');
      this.goHome();
    });
  }

  /* Redirrigir a la pagina home */
  goHome() {
    this.router.navigate(['/home']);
  }
}
