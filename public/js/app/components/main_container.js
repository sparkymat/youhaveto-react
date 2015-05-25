'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var MainContainer = (function (_React$Component) {
  function MainContainer(props) {
    _classCallCheck(this, MainContainer);

    _get(Object.getPrototypeOf(MainContainer.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _inherits(MainContainer, _React$Component);

  _createClass(MainContainer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'main-container row' },
        React.createElement(
          'div',
          { className: 'col s12 m10 offset-m1 l8 offset-l2' },
          React.createElement(
            'h3',
            { className: 'center-align' },
            'Fire'
          ),
          React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed orci lobortis, feugiat nibh et, congue nisi. Maecenas at lorem eu nunc vehicula pretium in in lacus. Cras eget nulla pulvinar, fringilla orci ut, eleifend nisl. Aliquam ac posuere nunc. Nulla placerat blandit ullamcorper. Vivamus viverra ullamcorper dui, quis hendrerit risus tempor quis. Suspendisse vehicula mauris metus, hendrerit sollicitudin orci lobortis in. Sed ullamcorper laoreet nisl, at fermentum lorem iaculis ac. Nullam eu nisi orci. Donec lectus elit, faucibus sed nisl id, gravida interdum felis.'
          ),
          React.createElement(
            'p',
            null,
            'Aliquam erat volutpat. Aenean suscipit pretium iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo mollis mi vitae eleifend. Ut consectetur, diam nec tempus finibus, ligula metus vestibulum lectus, dapibus pharetra massa leo et quam. Praesent vitae sem hendrerit, porta turpis nec, sollicitudin eros. Sed sit amet hendrerit tortor. Quisque vel nisi non nisl feugiat luctus. Quisque eu tempor eros, eget ullamcorper mauris. Nulla dictum mauris ac semper aliquet. Maecenas vel condimentum leo, sed molestie metus. Suspendisse sit amet elit eget purus sollicitudin interdum. Aliquam erat volutpat. Curabitur lacinia ut tortor nec posuere. Cras pellentesque augue sit amet pulvinar tempus.'
          ),
          React.createElement(
            'p',
            null,
            'Duis nec feugiat dolor. Vestibulum sed efficitur dui. Sed pulvinar et dui rutrum faucibus. Donec fermentum maximus lectus at aliquet. Curabitur tempus in ex non volutpat. Suspendisse vitae sapien non elit ultricies dignissim. In tincidunt suscipit congue.'
          ),
          React.createElement(
            'p',
            null,
            'Duis dictum, felis eget condimentum pharetra, nulla nunc ultricies diam, eget pretium sapien est vel tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent gravida eget odio nec scelerisque. Integer id venenatis ligula. Cras hendrerit urna non felis dapibus aliquam. Vivamus sit amet scelerisque ex. Cras tempus justo in pellentesque condimentum. Nullam at sodales nibh. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam finibus diam sed leo varius, sit amet ornare quam pharetra. Praesent nisl nibh, accumsan nec dui nec, tincidunt efficitur elit.'
          )
        )
      );
    }
  }]);

  return MainContainer;
})(React.Component);
