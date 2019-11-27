import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class ConsultaProdutosService {

  private rota="/verProdutosClassificados";

  constructor(private _http:HttpClient,
    private _api: Api) { }

  request(){
    return this._http.get(this._api.endereco+this.rota);
  }
}
