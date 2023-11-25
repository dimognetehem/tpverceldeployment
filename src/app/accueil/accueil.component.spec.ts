import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import {HeaderComponent} from "../header/header.component";

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent]
    });
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'DIMOGNE TEHEM'`, () => {
    const fixture = TestBed.createComponent(AccueilComponent)
    const accueil = fixture.componentInstance;
    expect(accueil.noms).toEqual('DIMOGNE TEHEM');
  });

  it(`should have as text 'Emmanuel Franck'`, () => {
    const fixture = TestBed.createComponent(AccueilComponent)
    const accueil = fixture.componentInstance;
    expect(accueil.prenoms).toEqual('Emmanuel Franck');
  });

  it(`should have as text '4ème année'`, () => {
    const fixture = TestBed.createComponent(AccueilComponent)
    const accueil = fixture.componentInstance;
    expect(accueil.classe).toEqual('4ème année');
  });

});
