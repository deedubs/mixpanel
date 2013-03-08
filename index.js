function Mixpanel (token) {
  this.token = token;
}

Mixpanel.prototype.track = function (event, params) {
  console.log('Mixpanel track:', event, params);
}

module.exports = Mixpanel;