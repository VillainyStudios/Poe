###
Poe.Paragraph's sole purpose is to hold a Poe.Line. It is used by
Poe.TextCursor when the user presses return. Which then creates
a new paragraph.
###
class Poe.Paragraph extends Poe.TextObject
  ###
  Creates a new Poe.Paragraph. This also creates a new {Poe.Line} as a child.
  @param page [Poe.Page] Optional. The page to set as this paragraphs parent.
  @note The paragraph is appended to the page if page is supplied.
  ###
  constructor: (page) ->
    @children = []
    @element = $ '<p class="paragraph" align="left"></p>'
    $('body').append(@element)
    @element.attr 'name', "_pgraph#{Poe.Paragraph.Counter}"
    Poe.Paragraph.Counter += 1
    page.append this if page

    line = new Poe.Line()
    @append line

  name: ->
    @element.attr 'name'

  setName: (name) ->
    @element.attr 'name', name

  @Counter: 0