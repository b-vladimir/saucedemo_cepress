import Login from './login'
import Home from './home';
import Cart from './cart';
import YourInformation from './yourInformation';
import Checkout from './checkout';
import CheckoutComplete from './checkoutComplete';

class PageFactory {
    constructor() {
        this.login = new Login();
        this.home = new Home();
        this.cart = new Cart();
        this.yourInformation = new YourInformation();
        this.checkout = new Checkout();
        this.checkoutComplete = new CheckoutComplete();
    }
}

export default PageFactory;