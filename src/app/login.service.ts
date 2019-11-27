import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private _htto:HttpClient,
    private _usuario:Usuario,
    private _api: Api) { }

    
}
