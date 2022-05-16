import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Klingos } from 'src/app/constants';
import { KlingosService } from 'src/app/services/klingos.service';
@Component({
  selector: 'app-klingos',
  templateUrl: './klingos.component.html',
  styleUrls: ['./klingos.component.scss'],
})
export class KlingosComponent implements OnInit {
  klingosForm: FormGroup;
  public PLASMA_BASE = Klingos.PlasmaBase;
  public PLASMA_EXTRA = Klingos.PlasmaExtra;
  public INYECTOR_CANT = Klingos.InyectorCant;
  public FLUJO_PLASMA_MAX = Klingos.FlujoPlasmaMax;
  public TIEMPO_FUNCIONAR_MAX = Klingos.TiempoFuncionarMax;
  public PORCENTAJE_VELOCIDAD_MAXIMA = 0;
  public PLASMA_REQUERIDO = 0;
  public CAPACIDAD_PLASMA_A = 0;
  public CAPACIDAD_PLASMA_B = 0;
  public CAPACIDAD_PLASMA_C = 0;
  public DELTA_CAPACIDAD = 0;
  public FLUJO_POR_INYECTOR = 0;
  public TIEMPO_FUNCIONAR: any;

  constructor(
    private _builder: FormBuilder,
    private klingosService: KlingosService,
    private router: Router
  ) {
    this.klingosForm = this._builder.group({
      inyectorA: [''],
      inyectorB: [''],
      inyectorC: [''],
      velocidadMaxima: [''],
    });
  }

  ngOnInit(): void {}

  getVelocidadMaxima() {
    this.PORCENTAJE_VELOCIDAD_MAXIMA =
      ((this.PLASMA_BASE + this.PLASMA_EXTRA) * this.INYECTOR_CANT * 100) /
      this.FLUJO_PLASMA_MAX;
  }

  getPorcentajeVelocidad(PORCENTAJE_VELOCIDAD: any) {
    if (
      PORCENTAJE_VELOCIDAD >= 0 &&
      PORCENTAJE_VELOCIDAD <= this.PORCENTAJE_VELOCIDAD_MAXIMA
    ) {
      this.PLASMA_REQUERIDO =
        (PORCENTAJE_VELOCIDAD * this.FLUJO_PLASMA_MAX) / 100;
    } else
      alert(
        'El Porcentaje de Velocidad : ' +
          PORCENTAJE_VELOCIDAD +
          '% esta fuera del rango permitido'
      );
  }

  getCapacidadPlasma(INYECTOR_A: any, INYECTOR_B: any, INYECTOR_C: any) {
    this.CAPACIDAD_PLASMA_A = ((100 - INYECTOR_A) * this.PLASMA_BASE) / 100;
    this.CAPACIDAD_PLASMA_B = ((100 - INYECTOR_B) * this.PLASMA_BASE) / 100;
    this.CAPACIDAD_PLASMA_C = ((100 - INYECTOR_C) * this.PLASMA_BASE) / 100;
  }

  goKlingos() {
    this.router.navigate(['/list']);
  }

  sendKlingos(value: any) {
    this.getVelocidadMaxima();
    this.getPorcentajeVelocidad(value.velocidadMaxima);
    this.getCapacidadPlasma(value.inyectorA, value.inyectorB, value.inyectorC);

    const FLUJO_PLASMA_INYECTORES =
      this.CAPACIDAD_PLASMA_A +
      this.CAPACIDAD_PLASMA_B +
      this.CAPACIDAD_PLASMA_C;

    this.DELTA_CAPACIDAD = this.PLASMA_REQUERIDO - FLUJO_PLASMA_INYECTORES;

    this.FLUJO_POR_INYECTOR = this.DELTA_CAPACIDAD / this.INYECTOR_CANT;

    if (this.DELTA_CAPACIDAD > 0) {
      if (this.FLUJO_POR_INYECTOR <= this.PLASMA_EXTRA) {
        this.PLASMA_EXTRA = this.FLUJO_POR_INYECTOR;
      }
    } else {
      this.PLASMA_EXTRA = 0;
    }

    if (this.PLASMA_EXTRA > 0) {
      this.TIEMPO_FUNCIONAR = this.TIEMPO_FUNCIONAR_MAX - this.PLASMA_EXTRA;
      alert(
        'Tiempo de funcionamiento:' +
          (this.TIEMPO_FUNCIONAR_MAX - this.PLASMA_EXTRA) +
          ' min'
      );
    } else {
      this.TIEMPO_FUNCIONAR = 'Infinito';
      alert('Tiempo de funcionamiento: Infinito');
    }

    this.klingosService
      .addklingo({
        inyectorA: value.inyectorA,
        inyectorB: value.inyectorB,
        inyectorC: value.inyectorC,
        porcentajeVelocidad: value.velocidadMaxima,
        capacidadPA: this.CAPACIDAD_PLASMA_A,
        capacidadPB: this.CAPACIDAD_PLASMA_B,
        capacidadPC: this.CAPACIDAD_PLASMA_C,
        tiempoFuncionamiento: this.TIEMPO_FUNCIONAR,
        createdAt: new Date(),
      })
      .subscribe(() => {
        this.goKlingos();
      });
  }
}
