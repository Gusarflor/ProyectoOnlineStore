import { ClienteModel } from './../models/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  RegistroCliente(cliente:ClienteModel){

  }

}

