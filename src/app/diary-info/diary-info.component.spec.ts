import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryInfoComponent } from './diary-info.component';

describe('DiaryInfoComponent', () => {
  let component: DiaryInfoComponent;
  let fixture: ComponentFixture<DiaryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
