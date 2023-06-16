import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  /* pegando a la ruta general para la optencion de todos los vinos incluyendo sus filtros */
  getAllWinesService(toQuery: {
    page: number,
    limit: number,
    orderName: string,
    orderStock: string,
    orderAlcoholContent: string,
    name: string,
    categoryId: string,

  }) {
    let params = new HttpParams()
      .set('page', toQuery.page)
      .set('limit', toQuery.limit)
      .set('orderName', toQuery.orderName)
      .set('orderStock', toQuery.orderStock)
      .set('orderAlcoholContent', toQuery.orderAlcoholContent)
      .set('name', toQuery.name)
      .set('categoryId', toQuery.categoryId)
    return this.http.get(`${environment.apiUrl}/wine`, { params }).subscribe((data) => { return data })

  }

}
