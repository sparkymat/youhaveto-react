import radio from "radio";

export default class YHT {
  static broadcast(message, data) {
    radio(message).broadcast(data);
  }

  static subscribe(message, receiver, methodName) {
    radio(message).subscribe(function() {
      receiver[methodName].apply(receiver, arguments);
    });
  }
}

// Add to standard prototypes
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
