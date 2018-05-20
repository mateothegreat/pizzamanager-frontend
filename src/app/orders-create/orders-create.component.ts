import { Component, OnInit } from '@angular/core';
import { PizzasService } from '../pizzas/pizzas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-orders-create',
    templateUrl: './orders-create.component.html',
    styleUrls: ['./orders-create.component.scss']
})
export class OrdersCreateComponent implements OnInit {

    public toppings: string[];
    public crust: string[];
    public sizes: string[];

    public selectedToppings: [] = [];

    public formGroup: FormGroup = new FormGroup({

        email: new FormControl(),
        firstname: new FormControl(),
        lastname: new FormControl(),
        address: new FormControl(Validators.required),
        state: new FormControl(Validators.required),
        phone: new FormControl(Validators.required),
        zip: new FormControl(Validators.required),
        size: new FormControl(Validators.required),
        crust: new FormControl(Validators.required),
        toppings: new FormControl(Validators.required),

    });

    public model: any = {
        email: '',
    };

    public constructor(public pizzasService: PizzasService,
                       private toastr: ToastrService,
                       private router: Router) {


    }

    public ngOnInit() {

        this.pizzasService.getJSON().subscribe((settings: any) => {

            console.log(settings);

            this.toppings = settings.toppings;
            this.crust = settings.crust;
            this.sizes = settings.sizes;

            console.log(this.sizes);

        });

    }

    public onButtonSaveClick(): void {

        this.toastr.success('Your order has been placed');

        this.router.navigate(['/orders']);

    }

}
