var YHT = {
  broadcast: function(message, data) {
    radio(message).broadcast(data);
  },
  subscribe: function(message, receiver, methodName) {
    radio(message).subscribe(function() {
      receiver[methodName].apply(receiver, arguments);
    });
  },
  stores: []
};

// Add to standard prototypes
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
