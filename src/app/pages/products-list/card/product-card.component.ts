import {Component} from '@angular/core';
// eslint-disable-next-line import/no-unresolved
import {productMock} from '../../../shared/products/product.mock';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
    product = productMock;

    buyAction() {
        console.log('Товар добавлен в корзину');
    }
}
