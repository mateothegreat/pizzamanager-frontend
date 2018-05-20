import { Component } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create Order',
        icon: 'add',
        link: '/orders/create'

    }, {

        title: 'View Orders',
        icon: 'list_alt',
        link: '/orders'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Manage Orders';
        pageHeaderService.buttons = OrdersComponent.PAGE_HEADER_BUTTONS;

    }

}
