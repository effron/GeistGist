Geist.Routers.GistRouter = Backbone.Router.extend({
  initialize: function($rootEl, gists){
    this.gists = gists
    this.$rootEl = $rootEl
  },

  routes: {
    "" : "index"
  },

  index: function () {
    var that = this;

    var gistsIndexView = new Geist.Views.GistsIndex({
      collection: that.gists
    })

    that.$rootEl.html(gistsIndexView.render().$el)
  }
})