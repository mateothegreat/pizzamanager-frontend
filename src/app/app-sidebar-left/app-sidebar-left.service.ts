import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSidebarLeftService {

    public headerIcon: string;
    public headerTitle: string;

    public menu: any[] = [

        {

            title: 'Order Management',
            icon: 'reorder',
            link: '/orders'

        }, {

            title: 'Pizza Management',
            icon: 'local_pizza',
            link: '/pizzas'

        }, {

            title: 'User Management',
            icon: 'account_box',
            link: '/settings/users'

        }

    ];

    public constructor() {

    }

}
