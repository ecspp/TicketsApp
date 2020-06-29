import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoChangeableComponent } from './logo-changeable.component';

describe('LogoChangeableComponent', () => {
  let component: LogoChangeableComponent;
  let fixture: ComponentFixture<LogoChangeableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoChangeableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoChangeableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
