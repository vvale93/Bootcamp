import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachmovieComponent } from './eachmovie.component';

describe('EachmovieComponent', () => {
  let component: EachmovieComponent;
  let fixture: ComponentFixture<EachmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
