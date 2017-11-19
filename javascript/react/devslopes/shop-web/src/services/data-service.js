import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';

let ns = new NotificationService();

let instance = null;
var wishlist = [];
class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    itemOnWishlist = item => {
        for (var i = wishlist.length - 1; i >= 0; i--) {
            if( wishlist[i]._id === item._id ) {
                return true;
            }
        }
        return false;
    }

    addWishlistItem = item => {
        wishlist.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
    }

    removeWishlistItem = item => {
        for (var i = wishlist.length - 1; i >= 0; i--) {
            if (wishlist[i]._id === item._id) {
                wishlist.splice(i, 1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
                break;
            }
        }
    }
}

export default DataService;