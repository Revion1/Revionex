var channelID = "UCHAdpRszgvVvLk3y-gMUBKg";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=" + channelID;

$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL), function(data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=") + 1);
    $("#youtube_video").attr("src", "https://www.youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0");
});
document.addEventListener("DOMContentLoaded", function () {
  const para = document.getElementById("myPara");

  function checkVisibility() {
    const rect = para.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      para.classList.add("show");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
