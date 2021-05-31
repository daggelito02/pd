import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaggesPicsComponent } from './dagges-pics.component';

describe('DaggesPicsComponent', () => {
  let component: DaggesPicsComponent;
  let fixture: ComponentFixture<DaggesPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaggesPicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaggesPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
