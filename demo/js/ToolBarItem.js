// Generated by CoffeeScript 1.8.0
(function() {
  Poe.ToolBarItem = (function() {
    function ToolBarItem() {
      return;
    }

    ToolBarItem.prototype.parent = function() {
      return this.element().parent();
    };

    ToolBarItem.prototype.hide = function() {
      return this.element().hide();
    };

    ToolBarItem.prototype.show = function() {
      return this.element().show();
    };

    ToolBarItem.prototype.css = function(key, value) {
      this.element().css(key, value);
      return this;
    };

    return ToolBarItem;

  })();

}).call(this);

//# sourceMappingURL=ToolBarItem.js.map
