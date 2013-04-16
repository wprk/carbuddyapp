$('#tab-bar a').on('click', function(e){
    e.preventDefault();
    var nextPage = $(e.target.hash);
    var nextLink = $('#tab-bar a[href=' + e.target.hash + ']');
    page(nextPage, nextLink);
    $("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

function page(toPage, toLink) {
    var toPage = $(toPage),
        fromPage = $("#pages .current");
    var toLink = $(toLink),
        fromLink = $("#tab-bar .current");
    if(toPage.hasClass("current") || toPage === fromPage) {
        return;
    };
    toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromLink.removeClass("current");
    toLink.addClass("current");
    fromPage.addClass("fade out");
}

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);