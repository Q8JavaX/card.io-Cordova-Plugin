function CardIO() {
}

exports.scanCard = function (onSuccess, onFailure, options) {
    cordova.exec(onSuccess, onFailure, "CardIO", "scanCard", [options]);
};
