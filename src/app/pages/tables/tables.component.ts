import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/api';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  rotas='/verProdutosClassificados';

  private produtos:Produto[];

  constructor(
    private _api:Api,
    private _http:HttpClient
  ) { 
    this._http.get<Produto[]>(this._api.endereco+this.rotas).subscribe(
      (produtos) => {
        this.produtos = produtos;
      }
    );
  }



  ngOnInit() {
  }

}
