Geist.Views.GistForm = Backbone.View.extend({
  template: JST['gists/form'],

  events: {
    "click button.submit-form": "submitForm"
  },

  render: function () {
    var that = this;

    that.$el.html(that.template({
      gist: that.model
    }));
    return that;
  },

  submitForm: function (event) {
    var that = this;
    var title = that.$("input[name=gist\\[title\\]]").val();

    that.model.save({'title': title},{url: "/gists", wait:true});
    that.collection.add(that.model);
    Backbone.history.navigate("#/");
  }

})