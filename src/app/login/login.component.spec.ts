import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {HttpClientTestingModule, HttpTestingController}from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatInputModule,
        MatSnackBarModule, 
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('good init', () => {
    expect(component.logged).toBeFalsy();
    expect(component.loading).toBeFalsy();
    expect(component.Username).toEqual('Bret');
  })
  it('connexion done', () => {
    // test initialisation du test
    expect(component.logged).toBeFalsy();
    expect(component.Username).toEqual('Bret');
    // execution de la methode de test
    component.connexion();
    // attend toi a avoir une requete GET (par defaut) sur cette Url
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username='+component.Username);
    //repond a la requete avec telle reponse
    req.flush([{}]);
    //verification que toutes les requetes sont traitees
    httpTestingController.verify();
    //test du bon deroulement de la methode
    expect(component.logged).toBeTruthy();
  })
});
