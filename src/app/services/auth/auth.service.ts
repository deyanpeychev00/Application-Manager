import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }
  getDatabaseCredentials(): object {
    return {
      key: 'kid_BJJ-nVSBL',
      secret: 'c0d172755f15481ebb8f40fc3dea9d2e',
      url: 'https://baas.kinvey.com',
      token: 'a2lkX0JKSi1uVlNCTDoxNTQxNzk3MDQ1OTQ0MzdhYjZhZWQyNDQ3ODhmYWY3NA=='
    };
  }
}
