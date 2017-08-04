var $container = $('#instabkgd');
// var photos = $('#street').val();

// ajax for scraping picta website
$.ajax({
    url: "http://www.thepicta.com/user/daviswushu/1516200733",
    dataType: 'text',
    success: function(data) {
          // var imageList = $("<div>").html(data)[0].getElementsByTagName("div")[0].getElementsByTagName("img");
          // for(var i = 0; i < imageList.length; i++) {
          //      var imageSrc = imageList[i].firstChild.nodeValue;
          //      // Do something here
          // }
        var imageList = $('.image a img').map(function()
        {
            return $(this).attr('src');
        }).get();

        $container.append(imageList);

    }
});






// $container.append();