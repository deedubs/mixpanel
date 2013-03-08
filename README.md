# mixpanel

Component for mixpanel

## Usage

    var Mixpanel = require('mixpanel')
      , mx = new Mixpanel('YOUR_TOKEN');
      
    mx.track('signup', {package: 'Bronze'});