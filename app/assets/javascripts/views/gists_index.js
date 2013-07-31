Geist.Views.GistsIndex = Backbone.View.extend({
  initialize: function(){
    var that = this;
    var renderCallback = that.render.bind(that);
    this.listenTo(that.collection, "add", renderCallback);
    this.listenTo(that.collection, "change:title", renderCallback);
    this.listenTo(that.collection, "remove", renderCallback);
  },

  template: JST['gists/index'],
  events: {
    "click li.gist-item" : "openDetail",
    "click .collapse" : "collapseDetail"
  },

  render: function () {
    var that = this;
    window.gists = this.collection;
    this.$el.html(that.template({gists: that.collection}))
    return this;
  },

  openDetail: function(event){
    var that = this;
    var id = $(event.target).data("id")
    var model = this.collection.get(id)
    var detailView = new Geist.Views.GistDetail({
      model: model
    });
    $(event.target).replaceWith(detailView.render().$el)
  },

  collapseDetail: function(event){
    console.log("COLLAPSE WAS CALLED")
    var that = this;
    var id = $(event.target).data("id")
    var model = this.collection.get(id)
    var html = '<li class="gist-item" data-id="'+ model.get("id") + '">'+ model.get("title") + '</li>'
    $(event.target).parent().replaceWith(html)
  }

})