import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsComponent } from './searchs.component';

describe('SearchsComponent', () => {
  let component: SearchsComponent;
  let fixture: ComponentFixture<SearchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
