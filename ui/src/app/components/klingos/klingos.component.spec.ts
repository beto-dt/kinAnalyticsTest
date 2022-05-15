import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlingosComponent } from './klingos.component';

describe('KlingosComponent', () => {
  let component: KlingosComponent;
  let fixture: ComponentFixture<KlingosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
