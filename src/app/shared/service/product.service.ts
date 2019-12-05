import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  endPoint = environment.apiEndpoint;
  
  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return this.http.get(url, { headers });
  }

  // products list
  getProductsList(): Observable<products.Product> {
    const url = this.endPoint + 'products';
    return new Observable(observer => {
      this.getData(url).subscribe((response: products.Product) => {
        observer.next(response);
        observer.complete();
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }

  // product img
  getSelectProductImg(id): Observable<products.ProductImage> {
    const url = this.endPoint + 'products/'+id+'/image';
    return new Observable(observer => {
      this.getData(url).subscribe((response: products.ProductImage) => {
        observer.next(response);
        observer.complete();
      }, error => {
        throw new Error(JSON.stringify(error));
      });
    });
  }

}
