import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';
import { ManejodbService } from './manejodb.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;
  let service2: ManejodbService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
    service2 = TestBed.inject(ManejodbService);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});


/* 

import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

--------------------------------------------------

import { TestBed } from '@angular/core/testing';

import { AutenticacionService } from './autenticacion.service';
import { ManejodbService } from './manejodb.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;
  let service2: ManejodbService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionService);
    service2 = TestBed.inject(ManejodbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


*/