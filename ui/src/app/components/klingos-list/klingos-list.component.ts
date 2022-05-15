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
    this.klingosService.getklingos().subscribe((res) => {
      this.klingos = res.klingons;
    });
  }

  deleteKlingos(id: any) {
    this.klingosService.deleteklingos(id).subscribe(() => {
      alert('Dato Eliminado');
      this.goHome();
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
