export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

var observers = {};

let instance = null;

class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    postNotification = (name, data) => {
        let obs = observers[name];
        for (var i = 0; i < obs.length; i++) {
          var obj = obs[i];
          obj.callback(data);
        }
    }

    removeObserver = (observer, name) => {
        var obs = observers[name];

        if(obs) {
            for (var i = obs.length - 1; i >= 0; i--) {
                if (obs[i] === observer) {
                    obs.splice(i, 1);
                    observers[name] = obs;
                    break;
                }
            }
        }
    }

    addObserver = (name, observer, callback) => {
        let obs = observers[name];

        if (!obs) {
            observers[name] = [];
        }

        let obj = {observer: observer, callback: callback};
        observers[name].push(obj);
    }
}

export default NotificationService;