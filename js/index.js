
//takes information from API and creates entry on the page
function appendEntry(title, description, link){
  var html = '<div class="row"><a href="' + link + '"><div class="col-xs-12 entry"><h4 class ="title"><strong>' + title + '</strong></h4><p class="desc">' + description + '</p></div></a></div>';
  $( html ).appendTo("#entries");
}



$( "form").on("submit", function(e) {
  //prevent default keeps the page from resetting immediately after loading
  e.preventDefault();
  
  $("#entries").empty();
  var term = $('#search').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + term + "&callback=?";
  
    $.getJSON((url), function(json) {
      var topics = json[1];
      var snippets = json[2];
      var links = json[3];
      console.log(topics);
  
      topics.forEach(function(val, i){
        console.log(topics[i] + snippets[i] + val + links[i]);
        appendEntry(topics[i], snippets[i], links[i]);
    });
  });
});