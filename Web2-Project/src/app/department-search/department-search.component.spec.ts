import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentoSearchComponent } from './department-search.component';

describe('DepartmentSearchComponent', () => {
  let component: DepartmentoSearchComponent;
  let fixture: ComponentFixture<DepartmentoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
