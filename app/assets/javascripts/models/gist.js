Geist.Models.Gist = Backbone.Model.extend({
  initialize: function (response) {
    this.attributes = this.parse(response);
  },

  parse: function(response) {
    if (response["favorites"] && response["favorites"].length > 0) {
      response.favorites = true;
    } else {
      response.favorites = false;
    }
    return response;
  }
});