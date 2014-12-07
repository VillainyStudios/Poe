// Generated by CoffeeScript 1.8.0

/*
Poe.Line is really only neccessary for word wrap and page breaks.
It normally contains children of type Poe.Word.
 */

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Poe.Line = (function(_super) {
    __extends(Line, _super);


    /*
    Create a new Poe.Line. This also creates a new
    {Poe.Word} as a child.
     */

    function Line() {
      this.children = [];
      this.element = $('<div class="line"></div>');
      this.parent = null;
      $('body').append(this.element);
      this.append(new Poe.Word());
    }


    /*
    Returns whether or not child is completely inside of this line.
    It does not check however if it contains that child. It goes only
    by screen position.
    @param child [Poe.TextObject] The textObject to check
    @return [Boolean] true if child is contained, false otherwise
     */

    Line.prototype.visiblyContains = function(child) {
      var childPos, pos;
      childPos = child.element.position();
      pos = this.element.position();
      childPos.right = childPos.left + child.element.width();
      pos.right = pos.left + this.element.outerWidth(false);
      if (childPos.right > pos.right) {
        return false;
      }
      return true;
    };

    return Line;

  })(Poe.TextObject);

}).call(this);

//# sourceMappingURL=Line.js.map
