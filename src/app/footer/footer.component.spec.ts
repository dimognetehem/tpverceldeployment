import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import {HeaderComponent} from "../header/header.component";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'dimognetehem@gmail.com'`, () => {
    const fixture = TestBed.createComponent(FooterComponent)
    const footer = fixture.componentInstance;
    expect(footer.email).toEqual('dimognetehem@gmail.com');
  });

  it(`should have as text '6 96 66 08 24'`, () => {
    const fixture = TestBed.createComponent(FooterComponent)
    const footer = fixture.componentInstance;
    expect(footer.numtel1).toEqual('6 96 66 08 24');
  });

  it(`should have as text '6 71 85 08 00'`, () => {
    const fixture = TestBed.createComponent(FooterComponent)
    const footer = fixture.componentInstance;
    expect(footer.numtel2).toEqual('6 71 85 08 00');
  });

});
