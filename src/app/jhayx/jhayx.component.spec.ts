import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhayxComponent } from './jhayx.component';

describe('JhayxComponent', () => {
  let component: JhayxComponent;
  let fixture: ComponentFixture<JhayxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhayxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhayxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
