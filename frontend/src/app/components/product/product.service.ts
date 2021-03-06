import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://localhost:3001/produtos';

  constructor(
    private snackbar: MatSnackBar,
    private httpclient: HttpClient
    ) { }

    criarproduto(product: Product): Observable<Product>{
    return this.httpclient.post<Product>(this.baseURL, product);
  }

  showmessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
}
