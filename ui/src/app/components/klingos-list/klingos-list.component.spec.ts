import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlingosListComponent } from './klingos-list.component';

describe('KlingosListComponent', () => {
  let component: KlingosListComponent;
  let fixture: ComponentFixture<KlingosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
