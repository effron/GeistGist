Geist.Models.Gist = Backbone.Model.extend({
  initialize: function (response) {
    console.log("INITIALIZING MODEL")
    this.attributes = this.parse(response);
  },

  parse: function(response) {
    console.log("PARSING PARSING")
    if (response["favorites"] && response["favorites"].length > 0) {
      response.favorites = true;
    } else {
      response.favorites = false;
    }

    response.gist_files = new Geist.Collections.GistFiles(response["gist_files"] || {});

    return response;
  }
});