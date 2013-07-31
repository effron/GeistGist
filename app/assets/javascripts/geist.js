window.Geist = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, gists) {
    console.log("Initialize GEIST")
    var gists = new Geist.Collections.Gists(gists);

    new Geist.Routers.GistRouter($rootEl, gists);
    Backbone.history.start();
  }
};
