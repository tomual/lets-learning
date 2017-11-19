import React, { Component } from 'react';
import './Product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ns = new NotificationService();
let ds = new DataService();
class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {onWishlist: ds.itemOnWishlist()}

        this.onWishlistChanged = this.onWishlistChanged.bind(this);
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishlistChanged(newWishlist) {
        this.setState({onWishlist: ds.itemOnWishlist(this.props.product)});
    }

    onButtonClicked = () => {
        if (this.state.onWishlist) {
            ds.removeWishlistItem(this.props.product);
        } else {
            ds.addWishlistItem(this.props.product);
        }        
    }

    render() {
        var buttonClass;

        if (this.state.onWishlist) {
            buttonClass = "btn btn-danger";
        } else {
            buttonClass = "btn btn-primary";
        }
        return (
            <div className="card product">
                <img className="card-img-top" src={this.props.product.imgUrl}></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <a href="#" onClick={() => this.onButtonClicked()} className={buttonClass}>{this.state.onWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</a>
                </div>
            </div>
        );
    }
}

export default Product;
