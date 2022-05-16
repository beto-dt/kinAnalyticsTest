import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KlingosComponent } from './klingos.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Router, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('KlingosComponent', () => {
  let component: KlingosComponent;
  let fixture: ComponentFixture<KlingosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterModule.forRoot([])],
      declarations: [ KlingosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlingosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
