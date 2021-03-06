define([
  "jquery",
  "underscore",
  "backbone",
  "views/temp-snippet",
  "helper/pubsub",
  "text!templates/app/renderform.html",
  "Guid",
], function ($, _, Backbone, TempSnippetView, PubSub, _renderForm) {
  return Backbone.View.extend({
    tagName: "fieldset",
    initialize: function () {
      this.collection.on("add", this.render, this);
      this.collection.on("remove", this.render, this);
      this.collection.on("change", this.render, this);
      PubSub.on("mySnippetDrag", this.handleSnippetDrag, this);
      PubSub.on("tempMove", this.handleTempMove, this);
      PubSub.on("tempDrop", this.handleTempDrop, this);
      this.$build = $("#build");
      this.build = document.getElementById("build");
      this.buildBCR = this.build.getBoundingClientRect();
      this.renderForm = _.template(_renderForm);
      this.render();
    },

    render: function () {
      //Render Snippet Views
      this.$el.empty();
      var that = this;
      _.each(this.collection.renderAll(), function (snippet) {
        that.$el.append(snippet);
      });
      $("#render").val(
        that.renderForm({
          text: _.map(this.collection.renderAllClean(), function (e) {
            return e.html();
          }).join("\n"),
        })
      );
      this.$el.appendTo("#build form");
      this.delegateEvents();
    },

    getBottomAbove: function (eventY) {
      var myFormBits = $(this.$el.find(".component"));
      var topelement = _.find(myFormBits, function (renderedSnippet) {
        if (
          $(renderedSnippet).position().top + $(renderedSnippet).height() >
          eventY - 160
        ) {
          return true;
        } else {
          return false;
        }
      });
      if (topelement) {
        return topelement;
      } else {
        return myFormBits[0];
      }
    },

    handleSnippetDrag: function (mouseEvent, snippetModel) {
      $("body").append(new TempSnippetView({ model: snippetModel }).render());
      this.collection.remove(snippetModel);
      PubSub.trigger("newTempPostRender", mouseEvent);
    },

    handleTempMove: function (mouseEvent) {
      $(".target").removeClass("target");
      if (
        mouseEvent.pageX >= this.buildBCR.left &&
        mouseEvent.pageX < this.$build.width() + this.buildBCR.left &&
        mouseEvent.pageY >= this.buildBCR.top &&
        mouseEvent.pageY < this.$build.height() + this.buildBCR.top
      ) {
        $(this.getBottomAbove(mouseEvent.pageY)).addClass("target");
      } else {
        $(".target").removeClass("target");
      }
    },

    handleTempDrop: function (mouseEvent, model, index) {
      if (
        mouseEvent.pageX >= this.buildBCR.left &&
        mouseEvent.pageX < this.$build.width() + this.buildBCR.left &&
        mouseEvent.pageY >= this.buildBCR.top &&
        mouseEvent.pageY < this.$build.height() + this.buildBCR.top
      ) {
        var index = $(".target").index();
        $(".target").removeClass("target");
        this.collection.add(model, { at: index + 1 });
      } else {
        $(".target").removeClass("target");
      }
    },
  });
});
