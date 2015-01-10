// Generated by CoffeeScript 1.8.0

/*
A serialization/deserialization class to convert a {Poe.Document} to .rtf
 */

(function() {
  var str2ab;

  Poe.FileFormat.RTF = (function() {

    /*
    Creates a new RTF using document
    @param document [Poe.Document] the document that will be serialized/deserialized to.
     */
    function RTF(document) {
      this.document = document;
      if (!this.document) {
        throw new Error('Poe.FileFormat.RTF takes a Poe.Document as an argument');
      }
      this.data = "{\\rtf1\\ansi\\ansicpg1252\\uc0\\stshfdbch0\\stshfloch0\\stshfhich0\\stshfbi0\\deff0\\adeff0{\\fonttbl{\\f0\\froman\\fcharset0\\fprq2{\\*\\panose 02020603050405020304}Times New Roman;}{\\f1\\froman\\fcharset2\\fprq2{\\*\\panose 05050102010706020507}Symbol;}{\\f2\\fswiss\\fcharset0\\fprq2{\\*\\panose 020b0604020202020204}Arial;}{\\f3\\fnil\\fcharset0 Courier New;}{\\f4\\fnil\\fcharset0 Georgia;}}{\\colortbl;\\red0\\green0\\blue0;\\red102\\green102\\blue102;}{\\stylesheet{\\s0\\snext0\\sqformat\\spriority0\\fi0\\sb0\\sa0\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab0\\ai0\\af2\\afs22\\ltrch\\b0\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 Normal;}{\\s1\\sbasedon0\\snext0\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb480\\sa120\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs48\\ltrch\\b\\i0\\fs48\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 heading 1;}{\\s2\\sbasedon0\\snext0\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb360\\sa80\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs36\\ltrch\\b\\i0\\fs36\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 heading 2;}{\\s3\\sbasedon0\\snext0\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb280\\sa80\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 heading 3;}{\\s4\\sbasedon0\\snext0\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb240\\sa40\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs24\\ltrch\\b\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 heading 4;}{\\s5\\sbasedon0\\snext0\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb220\\sa40\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs22\\ltrch\\b\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 heading 5;}{\\s6\\sbasedon0\\snext0\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb200\\sa40\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs20\\ltrch\\b\\i0\\fs20\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 heading 6;}{\\*\\cs10\\additive\\ssemihidden\\spriority0 Default Paragraph Font;}{\\s15\\sbasedon0\\snext15\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb480\\sa120\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab\\ai0\\af2\\afs72\\ltrch\\b\\i0\\fs72\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 Title;}{\\s16\\sbasedon0\\snext16\\styrsid15694742\\sqformat\\spriority0\\keep\\keepn\\fi0\\sb360\\sa80\\aspalpha\\aspnum\\adjustright\\widctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab0\\ai\\af4\\afs48\\ltrch\\b0\\i\\fs48\\loch\\af4\\dbch\\af4\\hich\\f4\\strike0\\ulnone\\cf2 Subtitle;}}{\\*\\rsidtbl\\rsid10976062}{\\*\\generator Aspose.Words for Java 13.10.0.0;}{\\info\\version1\\edmins0\\nofpages1\\nofwords0\\nofchars0\\nofcharsws0}{\\mmathPr\\mbrkBin0\\mbrkBinSub0\\mdefJc1\\mdispDef1\\minterSp0\\mintLim0\\mintraSp0\\mlMargin0\\mmathFont0\\mnaryLim1\\mpostSp0\\mpreSp0\\mrMargin0\\msmallFrac0\\mwrapIndent1440\\mwrapRight0}\\deflang1033\\deflangfe2052\\adeflang1025\\jexpand\\showxmlerrors1\\validatexml1{\\*\\wgrffmtfilter 013f}\\viewkind1\\viewscale100\\fet0\\ftnbj\\aenddoc\\ftnrstcont\\aftnrstcont\\ftnnar\\aftnnrlc\\widowctrl\\nospaceforul\\nolnhtadjtbl\\alntblind\\lyttblrtgr\\dntblnsbdb\\noxlattoyen\\wrppunct\\nobrkwrptbl\\expshrtn\\snaptogridincell\\asianbrkrule\\htmautsp\\noultrlspc\\useltbaln\\splytwnine\\ftnlytwnine\\lytcalctblwd\\allowfieldendsel\\lnbrkrule\\nouicompat\\nofeaturethrottle1\\formshade\\nojkernpunct\\dghspace180\\dgvspace180\\dghorigin1800\\dgvorigin1440\\dghshow1\\dgvshow1\\dgmargin\\pgbrdrhead\\pgbrdrfoot\\sectd\\sectlinegrid360\\pgwsxn12240\\pghsxn15840\\marglsxn1440\\margrsxn1440\\margtsxn1440\\margbsxn1440\\guttersxn0\\headery708\\footery708\\colsx708\\ltrsect\\pard\\plain\\itap0\\s0\\ilvl0\\fi0\\sb0\\sa0\\aspalpha\\aspnum\\adjustright\\brdrt\\brdrl\\brdrb\\brdrr\\brdrbtw\\brdrbar\\nowidctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\qr\\faauto\\sl276\\slmult1\\rtlch\\ab0\\ai0\\af2\\afs22\\ltrch\\b0\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1{\\rtlch\\ab\\ai0\\af3\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af3\\dbch\\af3\\hich\\f3\\strike0\\ulnone\\cf1 Poe}{\\rtlch\\ab0\\ai0\\af2\\afs22\\ltrch\\b0\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\insrsid10976062\\strike0\\ulnone\\cf1\\par}\\pard\\plain\\itap0\\s0\\ilvl0\\fi0\\sb0\\sa0\\aspalpha\\aspnum\\adjustright\\brdrt\\brdrl\\brdrb\\brdrr\\brdrbtw\\brdrbar\\nowidctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\qr\\faauto\\sl276\\slmult1\\rtlch\\ab0\\ai0\\af2\\afs22\\ltrch\\b0\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1{\\rtlch\\ab\\ai0\\af3\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af3\\dbch\\af3\\hich\\f3\\strike0\\ulnone\\cf1 Word}{\\rtlch\\ab\\ai0\\af3\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af3\\dbch\\af3\\hich\\f3\\strike0\\ulnone\\cf1  }{\\rtlch\\ab\\ai0\\af3\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af3\\dbch\\af3\\hich\\f3\\strike0\\ulnone\\cf1 Processor}{\\rtlch\\ab\\ai0\\af3\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af3\\dbch\\af3\\hich\\f3\\insrsid10976062\\strike0\\ulnone\\cf1\\par}\\pard\\plain\\itap0\\s0\\ilvl0\\fi0\\sb0\\sa0\\aspalpha\\aspnum\\adjustright\\brdrt\\brdrl\\brdrb\\brdrr\\brdrbtw\\brdrbar\\nowidctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab0\\ai0\\af2\\afs22\\ltrch\\b0\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 Poe}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 is}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 a}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 word}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 processor}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 like}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 no}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1  }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 other}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 . }{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 Hahaha}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1 .}{\\rtlch\\ab0\\ai0\\af2\\afs24\\ltrch\\b0\\i0\\fs24\\loch\\af2\\dbch\\af2\\hich\\f2\\insrsid10976062\\strike0\\ulnone\\cf1\\par}\\pard\\plain\\itap0\\s0\\ilvl0\\fi0\\sb0\\sa0\\aspalpha\\aspnum\\adjustright\\brdrt\\brdrl\\brdrb\\brdrr\\brdrbtw\\brdrbar\\nowidctlpar\\ltrpar\\li0\\lin0\\ri0\\rin0\\ql\\faauto\\sl276\\slmult1\\rtlch\\ab0\\ai0\\af2\\afs22\\ltrch\\b0\\i0\\fs22\\loch\\af2\\dbch\\af2\\hich\\f2\\strike0\\ulnone\\cf1{\\rtlch\\ab\\ai0\\af3\\afs28\\ltrch\\b\\i0\\fs28\\loch\\af3\\dbch\\af3\\hich\\f3\\insrsid10976062\\strike0\\ulnone\\cf1\\par}{\\*\\latentstyles\\lsdstimax267\\lsdlockeddef0\\lsdsemihiddendef0\\lsdunhideuseddef0\\lsdqformatdef0\\lsdprioritydef0{\\lsdlockedexcept\\lsdqformat1 Normal;\\lsdqformat1 heading 1;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 2;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 3;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 4;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 5;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 6;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 7;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 8;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 heading 9;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1 caption;\\lsdqformat1 Title;\\lsdqformat1 Subtitle;\\lsdqformat1 Strong;\\lsdqformat1 Emphasis;\\lsdsemihidden1\\lsdpriority99 Placeholder Text;\\lsdqformat1\\lsdpriority1 No Spacing;\\lsdpriority60 Light Shading;\\lsdpriority61 Light List;\\lsdpriority62 Light Grid;\\lsdpriority63 Medium Shading 1;\\lsdpriority64 Medium Shading 2;\\lsdpriority65 Medium List 1;\\lsdpriority66 Medium List 2;\\lsdpriority67 Medium Grid 1;\\lsdpriority68 Medium Grid 2;\\lsdpriority69 Medium Grid 3;\\lsdpriority70 Dark List;\\lsdpriority71 Colorful Shading;\\lsdpriority72 Colorful List;\\lsdpriority73 Colorful Grid;\\lsdpriority60 Light Shading Accent 1;\\lsdpriority61 Light List Accent 1;\\lsdpriority62 Light Grid Accent 1;\\lsdpriority63 Medium Shading 1 Accent 1;\\lsdpriority64 Medium Shading 2 Accent 1;\\lsdpriority65 Medium List 1 Accent 1;\\lsdsemihidden1\\lsdpriority99 Revision;\\lsdqformat1\\lsdpriority34 List Paragraph;\\lsdqformat1\\lsdpriority29 Quote;\\lsdqformat1\\lsdpriority30 Intense Quote;\\lsdpriority66 Medium List 2 Accent 1;\\lsdpriority67 Medium Grid 1 Accent 1;\\lsdpriority68 Medium Grid 2 Accent 1;\\lsdpriority69 Medium Grid 3 Accent 1;\\lsdpriority70 Dark List Accent 1;\\lsdpriority71 Colorful Shading Accent 1;\\lsdpriority72 Colorful List Accent 1;\\lsdpriority73 Colorful Grid Accent 1;\\lsdpriority60 Light Shading Accent 2;\\lsdpriority61 Light List Accent 2;\\lsdpriority62 Light Grid Accent 2;\\lsdpriority63 Medium Shading 1 Accent 2;\\lsdpriority64 Medium Shading 2 Accent 2;\\lsdpriority65 Medium List 1 Accent 2;\\lsdpriority66 Medium List 2 Accent 2;\\lsdpriority67 Medium Grid 1 Accent 2;\\lsdpriority68 Medium Grid 2 Accent 2;\\lsdpriority69 Medium Grid 3 Accent 2;\\lsdpriority70 Dark List Accent 2;\\lsdpriority71 Colorful Shading Accent 2;\\lsdpriority72 Colorful List Accent 2;\\lsdpriority73 Colorful Grid Accent 2;\\lsdpriority60 Light Shading Accent 3;\\lsdpriority61 Light List Accent 3;\\lsdpriority62 Light Grid Accent 3;\\lsdpriority63 Medium Shading 1 Accent 3;\\lsdpriority64 Medium Shading 2 Accent 3;\\lsdpriority65 Medium List 1 Accent 3;\\lsdpriority66 Medium List 2 Accent 3;\\lsdpriority67 Medium Grid 1 Accent 3;\\lsdpriority68 Medium Grid 2 Accent 3;\\lsdpriority69 Medium Grid 3 Accent 3;\\lsdpriority70 Dark List Accent 3;\\lsdpriority71 Colorful Shading Accent 3;\\lsdpriority72 Colorful List Accent 3;\\lsdpriority73 Colorful Grid Accent 3;\\lsdpriority60 Light Shading Accent 4;\\lsdpriority61 Light List Accent 4;\\lsdpriority62 Light Grid Accent 4;\\lsdpriority63 Medium Shading 1 Accent 4;\\lsdpriority64 Medium Shading 2 Accent 4;\\lsdpriority65 Medium List 1 Accent 4;\\lsdpriority66 Medium List 2 Accent 4;\\lsdpriority67 Medium Grid 1 Accent 4;\\lsdpriority68 Medium Grid 2 Accent 4;\\lsdpriority69 Medium Grid 3 Accent 4;\\lsdpriority70 Dark List Accent 4;\\lsdpriority71 Colorful Shading Accent 4;\\lsdpriority72 Colorful List Accent 4;\\lsdpriority73 Colorful Grid Accent 4;\\lsdpriority60 Light Shading Accent 5;\\lsdpriority61 Light List Accent 5;\\lsdpriority62 Light Grid Accent 5;\\lsdpriority63 Medium Shading 1 Accent 5;\\lsdpriority64 Medium Shading 2 Accent 5;\\lsdpriority65 Medium List 1 Accent 5;\\lsdpriority66 Medium List 2 Accent 5;\\lsdpriority67 Medium Grid 1 Accent 5;\\lsdpriority68 Medium Grid 2 Accent 5;\\lsdpriority69 Medium Grid 3 Accent 5;\\lsdpriority70 Dark List Accent 5;\\lsdpriority71 Colorful Shading Accent 5;\\lsdpriority72 Colorful List Accent 5;\\lsdpriority73 Colorful Grid Accent 5;\\lsdpriority60 Light Shading Accent 6;\\lsdpriority61 Light List Accent 6;\\lsdpriority62 Light Grid Accent 6;\\lsdpriority63 Medium Shading 1 Accent 6;\\lsdpriority64 Medium Shading 2 Accent 6;\\lsdpriority65 Medium List 1 Accent 6;\\lsdpriority66 Medium List 2 Accent 6;\\lsdpriority67 Medium Grid 1 Accent 6;\\lsdpriority68 Medium Grid 2 Accent 6;\\lsdpriority69 Medium Grid 3 Accent 6;\\lsdpriority70 Dark List Accent 6;\\lsdpriority71 Colorful Shading Accent 6;\\lsdpriority72 Colorful List Accent 6;\\lsdpriority73 Colorful Grid Accent 6;\\lsdqformat1\\lsdpriority19 Subtle Emphasis;\\lsdqformat1\\lsdpriority21 Intense Emphasis;\\lsdqformat1\\lsdpriority31 Subtle Reference;\\lsdqformat1\\lsdpriority32 Intense Reference;\\lsdqformat1\\lsdpriority33 Book Title;\\lsdsemihidden1\\lsdunhideused1\\lsdpriority37 Bibliography;\\lsdsemihidden1\\lsdunhideused1\\lsdqformat1\\lsdpriority39 TOC Heading;}}}";
      this.parseHandlers = {};
      this.registerParseHandlers();
      this.colorTable = [];
      this.groupStack = [];
      this.pos = 0;
      this.str = "";
      this.test();
    }

    RTF.prototype.test = function() {
      var arrBuff;
      arrBuff = str2ab(this.data);
      return this.deserialize(arrBuff);
    };


    /*
    Returns the current group off of the stack.
    Internally everytime a group is encountered in the RTF file when deserializing
    a new group is pushed on the stack. The group is actually just an empty javascript
    object that can be used to store group scoped formatting or control words.
    
    @return [Object] The stack object
     */

    RTF.prototype.currentGroup = function() {
      return this.groupStack.pop();
    };


    /*
    Pops the top group off the stack and returns it.
     */

    RTF.prototype.popGroup = function() {
      return this.groupStack.pop();
    };


    /*
    Gets the next character in the file for parsing.
    
    @return [char] string with one character
     */

    RTF.prototype.getChar = function() {
      var ch;
      ch = this.data[this.pos];
      this.pos += 1;
      return ch;
    };


    /*
    Serialize the document to the RTF file format.
    
    @return [ArrayBuffer] An array buffer containing the file.
     */

    RTF.prototype.serialize = function() {};


    /*
    Deserialize the document into the {Poe.Document} specified at class construction.
    @param buffer [ArrayBuffer] the array buffer of an RTF to deserialize
     */

    RTF.prototype.deserialize = function(buffer) {
      var check, found, handler, self, _ref;
      this.data = String.fromCharCode.apply(null, new Uint16Array(buffer));
      self = this;
      while (this.pos < this.data.length) {
        this.str += this.getChar();
        found = false;
        _ref = this.parseHandlers;
        for (check in _ref) {
          handler = _ref[check];
          if (check === this.str) {
            if (check !== '{' && check !== '}') {
              console.log('Known Control: ' + check);
            }
            handler.call(self);
            this.str = "";
            found = true;
            break;
          }
        }
        if (!found) {
          if (this.str[0] === '\\' && (this.data[this.pos] === '\\' || this.data[this.pos] === '}' || this.data[this.pos] === '{') && this.str.length !== 0) {
            console.log("Unknown control: " + this.str);
            this.str = "";
          }
        }
      }
    };


    /*
    Registers a character/string that when found calls a handler to manage that
    tag. The handlers that are registered are used in {Poe.RTF#deserialize}
    In order to understand better look at the source code.
     */

    RTF.prototype.registerParseHandlers = function() {
      this.parseHandlers['{'] = this.handlerGroupStart;
      this.parseHandlers['}'] = this.handlerGroupEnd;
      this.parseHandlers['\\rtf'] = this.handlerCtrlRtf;
      this.parseHandlers['\\*'] = this.handlerIgnoreIfUnkown;
      this.parseHandlers['\\panose'] = this.handlerPanose;
    };


    /*
    A handler for when '{' is found in the rtf. Pushes a new
    group onto the stack.
     */

    RTF.prototype.handlerGroupStart = function() {
      console.log('+++++++++++++++++++ GROUP +++++++++++++++++');
      return this.groupStack.push({});
    };


    /*
    A handler for when '}' is found in the rtf. Pops a group off
    of the stack.
     */

    RTF.prototype.handlerGroupEnd = function() {
      console.log('------------------- GROUP -----------------');
      return this.groupStack.pop();
    };


    /*
    A handler for '\rtf' this just logs the rtf version to the console.
     */

    RTF.prototype.handlerCtrlRtf = function() {
      return console.log('RTF Version: ' + this.getChar());
    };


    /*
    A handler to ignore unkown control words
     */

    RTF.prototype.handlerIgnoreIfUnkown = function() {};


    /*
    A handler for Panose (whatever that is)
    @todo Look up the Panose 1 Standard Specification
    @note Right now it just reads the numbers then skips it
     */

    RTF.prototype.handlerPanose = function() {
      var i, numbers, _i;
      this.getChar();
      numbers = "";
      for (i = _i = 0; _i <= 19; i = ++_i) {
        numbers += this.getChar();
      }
      console.log(this.data[this.pos]);
    };

    return RTF;

  })();

  str2ab = function(str) {
    var buf, bufView, i, _i, _ref;
    buf = new ArrayBuffer(str.length * 2);
    bufView = new Uint16Array(buf);
    this.currentBlock = null;
    for (i = _i = 0, _ref = str.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  };

}).call(this);

//# sourceMappingURL=RTF.js.map