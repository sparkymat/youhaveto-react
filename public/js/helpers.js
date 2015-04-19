window.yht = {};

window.yht.capitalizeString = function(str) {
};

window.yht.broadcast = function(message, data) {
  radio(message).broadcast(data);
};

window.yht.subscribe = function(message, receiver) {
  radio(message).subscribe(function() {
    var methodName = "on" + message.capitalize();
    
    receiver[methodName](arguments[0]);
  });
};

// Add to standard prototypes
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
