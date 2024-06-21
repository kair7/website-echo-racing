
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Hey, come back!';

    document.addEventListener('visibilitychange', function() {
        var isPageActive = !document.hidden;
    
        if (!isPageActive) {
            document.title = attentionMessage;
        } else {
            document.title = pageTitle;
        }
    });
}


jQuery(document).ready(function () {
    jQuery("#mng").nanogallery2({
        
      items: [
        // album 1
        { src: 'car_lm23.jpg',                         title: 'LM 23',  ID: 1,	kind:'album' },
        { src: 'car_lm23.jpg', srct: 'car_lm23.jpg', title: 'image A1', ID: 10, albumID: 1 },
        { src: 'ts_lm23.jpg', srct: 'car_lm23.jpg', title: 'image A2', ID: 11, albumID: 1 },
        { src: 'time_lm23.jpg', srct: 'time_lm23.jpg', title: 'image A3', ID: 12, albumID: 1 },
        
        // album 2
        {	src: 'car_lm24.jpg',                         title: 'LM 24',  ID: 2,  kind:'album' },
        { src: 'car_lm24.jpg', srct: 'car_lm24.jpg', title: 'image B1', ID: 20, albumID: 2 },
        { src: 'ts_lm24.jpg', srct: 'ts_lm24.jpg', title: 'image B2', ID: 21, albumID: 2 },
        { src: 'time_lm24.jpg', srct: 'time_lm24.jpg', title: 'image B3', ID: 22, albumID: 2 },
        

      ],
      thumbnailWidth:  'auto',
        thumbnailHeight: 170,
      itemsBaseURL:    './assets/gallery/',
          locationHash:    false
    });
  });
