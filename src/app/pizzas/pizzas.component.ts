import { Component } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-pizzas',
    templateUrl: './pizzas.component.html',
    styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent {

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create Pizza',
        icon: 'add',
        link: '/pizzas/create'

    }, {

        title: 'View Pizzas',
        icon: 'list_alt',
        link: '/pizzas'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Manage Pizzas';
        pageHeaderService.buttons = PizzasComponent.PAGE_HEADER_BUTTONS;

    }

}
