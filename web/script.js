// $(document).ready(function() {
  // parseMd()
// });

parseMd()

function parseMd() {
  var GITHUB = 'https://raw.githubusercontent.com/gto76/the-library-of-the-babel/master/README.md'
  jQuery.get(GITHUB, function(text) {
    var converter = new showdown.Converter()
    html = converter.makeHtml(text)
    aDiv = $('#bla')
    nodes = $.parseHTML(html)
    aDiv.append(nodes);
    insertLinks()
  });
}

function insertLinks() {
  $('h2').each(function() {
    aId = $(this).attr('id')
    $(this).append('<a href="#'+aId+'" name="'+aId+'">#</a>')
  })
}
