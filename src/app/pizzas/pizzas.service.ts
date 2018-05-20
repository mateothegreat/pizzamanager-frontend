import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PizzasService {

    public toppings: string[];
    public crust: string[];
    public sizes: string[];

    public constructor(private http: HttpClient) {

    }

    public getJSON(): Observable<any> {

        return this.http.get('./assets/pizzas.json');

    }

}
