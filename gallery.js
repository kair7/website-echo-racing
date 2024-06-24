
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
        locationHash:    false,
          
        galleryL1DisplayMode: 'fullContent',       
        galleryDisplayMode: 'rows',                      
        galleryMaxRows: 4,
        gallerySorting: 'random', 

        thumbnailL1Height: 400, thumbnailL1Width: 600,   
        thumbnailL1GutterWidth: 20,
        thumbnailL1GutterHeight: 20,
        thumbnailL1BorderHorizontal: 0,
        thumbnailL1BorderVertical: 0,

        thumbnailHeight: 400, thumbnailWidth: 'auto',   
        thumbnailGutterWidth: 2,
        thumbnailGutterHeight: 2,
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,

        thumbnailAlignment: 'fillWidth',

        thumbnailToolbarImage : null,
        thumbnailToolbarAlbum: null,

        thumbnailL1Label: { display: true, position:'overImageOnBottom', hideIcons: true, titleFontSize: '1em', align: 'center', titleMultiLine:true, displayDescription: false},
        thumbnailL1Label: { display: true, valign:'bottom', hideIcons: true, titleFontSize: '3em', align: 'left', titleMultiLine:true, displayDescription: false},

        thumbnailLabel: { display: true, position:'overImageOnBottom', hideIcons: true, titleFontSize: '1em', align: 'center', titleMultiLine:true, displayDescription: false},

        thumbnailToolbarAlbum: { topRight: 'counter' },
        
        thumbnailL1DisplayTransition: 'flipUp',       
        thumbnailDisplayTransition: 'slideDown',        
        thumbnailDisplayTransitionDuration: 500,
        thumbnailDisplayInterval: 30,

        thumbnailL1BuildInit2: 'title_font-weight_bold|image_scale_0.8|label_left_-5px|label_text-transform_uppercase|label_top_95%|label_rotateZ_-90deg|label_transform-origin_top left',
        thumbnailL1BuildInit2: 'title_font-weight_bold|image_scale_0.8|label_left_-25px|label_top_95%|label_rotateZ_-90deg|label_transform-origin_top left',
        thumbnailL1HoverEffect2: 'imageGrayOff|title_color_#c800ea_#aaaaaa|labelOpacity50',

        touchAnimation: false,
        touchAutoOpenDelay: 800,

        galleryTheme : { 
        thumbnail: { background: '#18171c', titleShadow : '', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#000' },
        navigationBreadcrumb: { background : '#3C4B5B' },
        },

        locationHash: false
    });
  });
