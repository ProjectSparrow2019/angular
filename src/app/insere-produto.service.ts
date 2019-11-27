import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class InsereProdutoService {

  private rota= '/buscarNovosProdutos';

  constructor(private _http:HttpClient,
    private _api: Api) { }

  request(mensagem:string){
    return this._http.post(this._api.endereco+this.rota, mensagem);
  }
}
