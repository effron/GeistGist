Geist.Views.GistDetail = Backbone.View.extend({
  template: JST['gists/show'],
  tagName: "li",
  events: {
    "click button.favorite" : "addFavorite",
    "click button.unfavorite" : "removeFavorite"
  },

  render: function () {
    var that = this;

    that.$el.html(that.template({
      counter: that.counter,
      gist: that.model
    }))
    return this
  },

  addFavorite: function(event){
    var that = this;
    var url = "gists/" + this.model.get("id") + "/favorite";

    Backbone.sync("create", that.model, {
      url: url,
      success: function () {
        console.log("Saved favorite")
        that.model.set("favorites", true)
      },
      error: function () {
        console.log("Failed to save favorite")
      }
    })
    $(event.target).parent().toggleClass("favorited unfavorited")
  },

  removeFavorite: function(event){
    var that = this;
    var url = "gists/" + this.model.get("id") + "/favorite";

    Backbone.sync("delete", that.model, {
      url: url,
      success: function () {
        console.log("Deleted favorite")
        that.model.set("favorites", false)
      },
      error: function () {
        console.log("Failed to Delete favorite")
      }
    })
    $(event.target).parent().toggleClass("favorited unfavorited")
  }

});