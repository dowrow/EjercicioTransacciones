import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleNavigationComponent } from './role-navigation.component';

describe('RoleNavigationComponent', () => {
  let component: RoleNavigationComponent;
  let fixture: ComponentFixture<RoleNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
