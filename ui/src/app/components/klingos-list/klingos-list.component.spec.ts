import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlingosListComponent } from './klingos-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Router, RouterModule} from '@angular/router';

describe('KlingosListComponent', () => {
  let component: KlingosListComponent;
  let fixture: ComponentFixture<KlingosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterModule.forRoot([])],
      declarations: [ KlingosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlingosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
