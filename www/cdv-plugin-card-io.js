function CardioPlugin() {
}

exports.scanCard = function (onSuccess, onFailure, options) {
    cordova.exec(onSuccess, onFailure, "CardioPlugin", "scanCard", [options]);
};
