// Generated by CoffeeScript 1.8.0

/*
Poe.Document is the top and contains pages. It also manages
page margins and page size.
 */

(function() {
  Poe.Document = (function() {

    /*
    Create a new Poe.Document. Creating a document is only possible in {Poe.Writer}
    in order for it to be shown in the DOM.
     */
    function Document() {
      var margins;
      this.children = [];
      this.element = $('<div class="document"></div>');
      $('body').append(this.element);
      this.append(new Poe.Page());
      this.textCursor = new Poe.TextCursor(this.children[0].child(0).child(0).child(0));
      this.setPageSize(Poe.Document.PageSize.Letter);
      this.setPageMargins(margins = {
        top: 96,
        bottom: 96,
        left: 96,
        right: 96
      });
    }


    /*
    Gets the child page at index.
    @param index [Number] index to retrieve
    @return [null] if the page does not exist
    @return [Poe.Page] if the page exists
     */

    Document.prototype.page = function(index) {
      if (index >= 0 && index < this.children.length) {
        return this.children[index];
      }
      return null;
    };


    /*
    Append a page to the end of the document.
    @param page [Poe.Page] the page to append
     */

    Document.prototype.append = function(page) {
      page.document = this;
      this.children.append(page);
      this.element.append(page.element);
      page.setParent(this);
      return this;
    };


    /*
    Prepend a page to the front of the document.
    @param page [Poe.Page] the page to prepend
    @return [Poe.Document] this
     */

    Document.prototype.prepend = function(page) {
      page.document = this;
      this.children.prepend(page);
      this.element.prepend(page.element);
      page.setParent(this);
      return this;
    };


    /*
    Sets the page size to size
    @param size [Object] the size object
    @option size [Number] width the width in pixels
    @option size [Number] height the height in pixels
    @return [Poe.Document] this
     */

    Document.prototype.setPageSize = function(size) {
      var page, _i, _len, _ref;
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        page.element.height(size.height);
        page.element.width(size.width);
      }
      return this;
    };


    /*
    Sets the page margins for all pages.
    @param margins [Poe.Document.PageSize] the size
    @return [Poe.Document] this
     */

    Document.prototype.setPageMargins = function(margins) {
      var page, _i, _len, _ref;
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        page = _ref[_i];
        page.element.css('padding-left', margins.left);
        page.element.css('padding-right', margins.right);
        page.element.css('padding-top', margins.top);
        page.element.css('padding-bottom', margins.bottom);
      }
      return this;
    };


    /*
    "Enum" of possible page sizes
     */

    Document.PageSize = {
      Letter: {
        height: 1056,
        width: 816
      }
    };

    return Document;

  })();

}).call(this);

//# sourceMappingURL=Document.js.map
