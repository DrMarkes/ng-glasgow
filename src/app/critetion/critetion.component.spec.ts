import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritetionComponent } from './critetion.component';

describe('CritetionComponent', () => {
  let component: CritetionComponent;
  let fixture: ComponentFixture<CritetionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritetionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
