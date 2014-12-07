// Generated by CoffeeScript 1.8.0

/*
Poe.TextStyle is the used to apply font and text styles
to Poe.Word. You can apply a style to a word by using
applyWord. In order to change the style without affecting the
the whole word, e.g. for new text, the style needs to know
what Poe.TextCursor to use. In that case you can pass it in
the constructor or use setTextCursor().
 */

(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Poe.TextStyle = (function(_super) {
    __extends(TextStyle, _super);


    /*
    Construct new TextStyle.
    TextStyle is used to apply formatting to a Poe.Word.
    
    @param [Poe.TextCursor] textCursor text cursor for use with applyChar
    @note It only uses the text cursor when applyChar is called. If you do not need
    to apply change the style that cursor is typing text in, it is not neccessary
     */

    function TextStyle(textCursor) {
      this.textCursor = textCursor;
      this.bold = false;
      this.italic = false;
      this.underline = false;
      this.font = 'Tinos';
      this.fontSize = 12;
      this.color = 'black';
      this.backround = 'white';
      this.currentWord = null;
      this.changedCallbacks = [];
    }


    /*
    Copies style to this style
    @param [Poe.TextStyle] style the style to copy
    @return [Poe.TextStyle] this
     */

    TextStyle.prototype.clone = function(style) {
      this.bold = style.bold;
      this.italic = style.italic;
      this.underline = style.underline;
      this.font = style.font;
      this.fontSize = style.fontSize;
      this.color = style.color;
      this.background = style.background;
      return this;
    };


    /*
    A helper that both applyWord and applyChar use
    @param [Boolean] wholeWord true to applyWord false to applyChar
    @param [Poe.Word] word the word to apply to. Only needed if using applyWord
     */

    TextStyle.prototype.apply = function(wholeWord, word) {
      var apply, element, lastWord, middleWord, otherStyle, size;
      if (wholeWord == null) {
        wholeWord = false;
      }
      if (word == null) {
        word = this.currentWord;
      }
      element = word.element;
      if (!wholeWord) {
        word = this.textCursor.currentWord;
        otherStyle = new Poe.TextStyle();
        otherStyle.update(word);
        lastWord = new Poe.Word();
        lastWord.insertAfter(word);
        while (this.textCursor.element.nextSibling()) {
          lastWord.element.append(this.textCursor.element.nextSibling());
        }
        lastWord.prepend(this.textCursor.element);
        middleWord = new Poe.Word();
        middleWord.insertAfter(word);
        otherStyle = null;
        element = middleWord.element;
        element.prepend(this.textCursor.element);
        this.textCursor.currentWord = middleWord;
        if (word.isEmpty()) {
          word.remove();
        }
        if (lastWord.isEmpty()) {
          lastWord.remove();
        } else {
          otherStyle.apply(lastWord);
        }
        word = middleWord;
      }
      if (this.bold) {
        element.addClass('bold');
      } else {
        element.removeClass('bold');
      }
      if (this.italic) {
        element.addClass('italic');
      } else {
        element.removeClass('italic');
      }
      if (this.underline) {
        element.addClass('underline');
      } else {
        element.removeClass('underline');
      }
      apply = function(style, value) {
        return element.css(style, value);
      };
      apply('font-family', '"' + this.font + '"');
      size = (this.fontSize * 96) / 72;
      apply('font-size', "" + size + "px");
      apply('color', this.color);
      apply('background-color', this.background);
      this.currentWord = word;
      this.hasChanged;
      if (this.textCursor) {
        this.textCursor.visibleCursor.css('height', "" + this.fontSize + "pt");
        this.textCursor.update();
        if (this.italic) {
          return this.textCursor.visibleCursor.css('transform', 'rotate(10deg)');
        } else {
          return this.textCursor.visibleCursor.css('transform', 'none');
        }
      }
    };


    /*
    Applies style so that any new text that is typed gets the style
    @return [Poe.TextStyle] this
    @note This requires a Poe.TextCursor to be known by the style. Use setTextCursor().
    @throw [Error] if there is no Poe.TextCursor to use
     */

    TextStyle.prototype.applyChar = function() {
      if (!this.textCursor) {
        throw new Error('Poe.TextStyle.applyChar needs a textCursor');
      }
      this.apply(false, this.textCursor.currentWord);
      return this;
    };


    /*
    Applies style to word. The whole word gets the style.
    This also calls any callbacks registered with changed.
    @param [Poe.Word] word word to apply style to
    @return [Poe.TextStyle] this
     */

    TextStyle.prototype.applyWord = function(word) {
      if (!word) {
        word = this.textCursor.currentWord;
      }
      this.apply(true, word);
      return this;
    };


    /*
    Makes this style match the style that word has.
    @param [Poe.Word] word word to get styles from
    @return [Poe.TextStyle] this
     */

    TextStyle.prototype.update = function(word) {
      var element;
      element = word.element;
      if (!word || !element) {
        return;
      }
      if (element.hasClass('bold')) {
        this.bold = true;
      } else {
        this.bold = false;
      }
      if (element.hasClass('italic')) {
        this.italic = true;
      } else {
        this.italic = false;
      }
      if (element.hasClass('underline')) {
        this.underline = true;
      } else {
        this.underline = false;
      }
      this.font = element.css('font-family').split('"')[0];
      this.font = this.font.replace("'", '').replace("'", '');
      this.fontSize = Math.floor((parseInt(element.css('font-size')) * 72) / 96);
      this.color = element.css('color');
      this.background = element.css('background-color');
      if (this.textCursor) {
        this.textCursor.visibleCursor.css('height', "" + this.fontSize + "pt");
        if (this.italic) {
          this.textCursor.visibleCursor.css('transform', 'rotate(10deg)');
        } else {
          this.textCursor.visibleCursor.css('transform', 'none');
        }
      }
      this.currentWord = word;
      this.hasChanged();
      return this;
    };

    return TextStyle;

  })(Poe.Style);

}).call(this);

//# sourceMappingURL=TextStyle.js.map
