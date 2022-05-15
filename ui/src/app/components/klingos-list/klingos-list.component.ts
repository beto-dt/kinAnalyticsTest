import { Component, OnInit } from '@angular/core';
import { KlingosService } from 'src/app/services/klingos.service';

@Component({
  selector: 'app-klingos-list',
  templateUrl: './klingos-list.component.html',
  styleUrls: ['./klingos-list.component.scss']
})
export class KlingosListComponent implements OnInit {

  public klingos : any;

  constructor(private klingosService: KlingosService,) { }

  ngOnInit(): void {
    this.klingosService.getklingos().subscribe((res) => {
      this.klingos = res.klingons;
      console.log(this.klingos)
    })
  }

}
