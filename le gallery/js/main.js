var images = [
    {
        path: "img/munch1.jpg",
    },
    {
        path: "img/munch2.jpg",
    },
    {
        path: "img/munch3.jpg",
    },
    {
        path: "img/munch4.jpg",
    },
    {
        path: "img/munch5.jpg",
    },
    {
        path: "img/munch6.jpg",
    },
    {
        path: "img/pom1.jpg",
    },
    {
        path: "img/doge2.jpg",
    },
    {
        path: "img/pusheen1.png",
    },
    {
        path: "img/pusheen2.jpg",
    },
    {
        path: "img/pusheen3.jpg",
    },
    {
        path: "img/facts.gif",
    }
];

for (var i = 0; i < images.length; i++) {
    listImages(i);
}

// Allows deleting of images
$.UIDeletable({
                list: '#list1', // UIDeletable acts on #list1
            callback: function(item) {
                var text = $(item).siblings('h3').text();
                $('#response').html('You deleted: <strong>' + text + '</strong>');
            }
            });

function listImages(id) {
    $("#list1").append("<li data-id='" + id + "'>" +
                       '<span class="deletion-indicator"></span>' +
                        "<a class='fancybox' href='" + images[id].path + "'>" +
                        "<img class='page3' src='" + images[id].path + "'/>" +
                        "</a>" +
                        "</li>");
}

$("#submit").on("singletap", function() {
    var url = $("#input").val();
    
    if (url.length < 1) {
        
    }
    else {
        addImage(url);
    }
    
});
function validImage(src) {
    var image_new = new Image();
    image_new.src = src;
    // Get accurate measurements from that.
    if ((image_new.width>0)&&(image_new.height>0)){
        return true;
    } else {
        return false;
}
}

function addImage(url) {
    // push the new image to imagesList
    images.push({path: url});
    
    listImages(images.length - 1);

    // clear the form values
    $("#input").val("");
}

