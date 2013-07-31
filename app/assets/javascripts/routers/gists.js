Geist.Routers.GistRouter = Backbone.Router.extend({
  initialize: function($rootEl, gists){
    this.gists = gists
    this.$rootEl = $rootEl
  },

  routes: {
    "" : "index",
    "new" : "new"
  },

  index: function () {
    var that = this;

    var gistsIndexView = new Geist.Views.GistsIndex({
      collection: that.gists
    })

    that.$rootEl.html(gistsIndexView.render().$el)
  },

  new: function(){
    var that = this;
    console.log("RUNNING NEW FROM ROUTER")
    var gistFormView = new Geist.Views.GistForm({
      collection: that.gists,
      model: new Geist.Models.Gist({})
    })

    that.$rootEl.html(gistFormView.render().$el)
  }
})