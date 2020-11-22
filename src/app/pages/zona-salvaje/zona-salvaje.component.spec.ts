import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaSalvajeComponent } from './zona-salvaje.component';

describe('ZonaSalvajeComponent', () => {
  let component: ZonaSalvajeComponent;
  let fixture: ComponentFixture<ZonaSalvajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaSalvajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaSalvajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
