Geist.Views.GistForm = Backbone.View.extend({
  template: JST['gists/form'],
  subTemplate: JST['gists/gist_file_form_part'],
  counter: 0,
  events: {
    "click button.submit-form": "submitForm",
    "click button.add-gist-file": "addSubForm"
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

    var attributes = {'title': title, gist_files_attributes: []}

    _.times(that.counter, function(n) {
      var name = that.$("input[name=gist\\[" + n + "\\]\\[gist_files_attributes\\]\\[name\\]]").val();
      var body = that.$("textarea[name=gist\\[" + n + "\\]\\[gist_files_attributes\\]\\[body\\]]").val();

      attributes.gist_files_attributes.push({name: name, body: body})
    })

    that.model.save(attributes,{
      url: "/gists",
      success: function (response) {
        that.collection.add(that.model);
      },
      wait:true
    });
    // that.model.get("gist_files").add({name: name, body: body}, {wait:true})
    Backbone.history.navigate("#/");
  },

  addSubForm: function (event) {
    var that = this;
    $(event.target).before(that.subTemplate({
      counter: that.counter
    }));
    that.counter++;
  }

})