// Generated by CoffeeScript 1.8.0
(function() {
  Docx.ElementFactory = (function() {
    function ElementFactory() {}

    ElementFactory.prototype.createDocument = function() {
      this.doc = document.implementation.createDocument(null, 'w:doc', null);
      return this.doc;
    };

    ElementFactory.prototype.createBody = function() {
      return this.doc.createElement('w:body');
    };

    ElementFactory.prototype.createParagraph = function() {
      return this.doc.createElement('w:p');
    };

    ElementFactory.prototype.createRun = function() {
      return this.doc.createElement('w:r');
    };

    ElementFactory.prototype.createRunProperties = function() {
      var elm;
      elm = this.doc.createElement('w:rPr');
      console.log(elm);
      return elm;
    };

    ElementFactory.prototype.createText = function() {
      return this.doc.createElement('w:t');
    };

    ElementFactory.prototype.createBold = function() {
      return this.doc.createElement('w:b');
    };

    ElementFactory.prototype.createItalic = function() {
      return this.doc.createElement('w:i');
    };

    ElementFactory.prototype.createUnderline = function() {
      return this.doc.createElement('w:u');
    };

    return ElementFactory;

  })();

}).call(this);

//# sourceMappingURL=ElementFactory.js.map
