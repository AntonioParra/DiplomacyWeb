import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCommandComponent } from './country-command.component';

describe('CountryCommandComponent', () => {
  let component: CountryCommandComponent;
  let fixture: ComponentFixture<CountryCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
