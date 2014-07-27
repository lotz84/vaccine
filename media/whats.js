$(function(){
  var src = $(".article-main .type-video iframe").attr("src");
  var re = /embed\/(.+)\?/;
  var matches = re.exec(src);
  var id = matches[1];
  window.location = "http://www.youtube.com/watch?v=" + id;
});
