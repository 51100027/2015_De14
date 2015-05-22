<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	    <!-- it works the same with all jquery version from 1.x to 2.x -->
    <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
    <!-- use jssor.slider.mini.js (40KB) instead for release -->
    <!-- jssor.slider.mini.js = (jssor.js + jssor.slider.js) -->
    <script type="text/javascript" src="js/slider/jssor.js"></script>
    <script type="text/javascript" src="js/slider/jssor.slider.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
  	<link rel="stylesheet" href="css/bootstrap.min.css">
  	<script src="js/jquery.min.js"></script>
  	<script src="js/bootstrap.min.js"></script>
  	<script src="https://connect.facebook.net/en_US/all.js"></script>
    <<title>Slide Show</title>	
</head>
<body>	
	<style> 
        .captionOrange, .captionBlack
        {
            color: #fff;
            font-size: 20px;
            line-height: 30px;
            text-align: center;
            border-radius: 4px;
        }
        .captionOrange
        {
            background: #EB5100;
            background-color: rgba(235, 81, 0, 0.6);
        }
        .captionBlack
        {
        	font-size:16px;
            background: #000;
            background-color: rgba(0, 0, 0, 0.4);
        }
        a.captionOrange, A.captionOrange:active, A.captionOrange:visited
        {
        	color: #ffffff;
        	text-decoration: none;
        }
        a.captionOrange:hover
        {
            color: #eb5100;
            text-decoration: underline;
            background-color: #eeeeee;
            background-color: rgba(238, 238, 238, 0.7);
        }
        .bricon
        {
            background: url(../img/browser-icons.png);
        }
    </style>
    <script>

        jQuery(document).ready(function ($) {
            //Reference http://www.jssor.com/development/slider-with-slideshow-jquery.html
            //Reference http://www.jssor.com/development/tool-slideshow-transition-viewer.html

            var _SlideshowTransitions = [
            //Collapse Random
            { $Duration: 1000, $Delay: 80, $Cols: 10, $Rows: 4, $Clip: 15, $SlideOut: true, $Easing: $JssorEasing$.$EaseOutQuad }

            //Fade in LR Chess
            , { $Duration: 1200, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Outside: true }

            //Rotate VDouble+ out
            , { $Duration: 1000, x: -1, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.85 } }

            ////Swing Inside in Stairs
            //, { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 1.3, $Top: 2.5} }

            //Zoom HDouble+ out
            , { $Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }

            ////Dodge Pet Inside in Stairs
            //, { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 0.8, $Top: 2.5} }

            //Rotate Zoom+ out BL
            , { $Duration: 1200, x: 4, y: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8 } }

            //Dodge Dance Inside in Random
            , { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } }

            //Rotate VFork+ out
            , { $Duration: 1200, x: -3, y: 1, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } }

            //Clip and Chess in
            , { $Duration: 1200, y: -1, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Top: [0.5, 0.5], $Clip: [0, 0.5] }, $Formation: $JssorSlideshowFormations$.$FormationStraight, $ChessMode: { $Column: 12 }, $ScaleClip: 0.5 }

            ////Swing Inside in Swirl
            //, { $Duration: 1200, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 1.3, $Top: 2.5} }

            ////Rotate Zoom+ out
            //, { $Duration: 1200, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Zoom: $JssorEasing$.$EaseInCubic, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.7} }

            ////Dodge Pet Inside in ZigZag
            //, { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 20, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 260, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseOutQuad }, $Round: { $Left: 0.8, $Top: 2.5} }

            //Rotate Zoom- out TL
            , { $Duration: 1200, x: 0.5, y: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } }

            //Rotate Zoom- in BR
            , { $Duration: 1200, x: -0.6, y: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Easing: { $Zoom: $JssorEasing$.$EaseSwing, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseSwing }, $Opacity: 2, $Round: { $Rotate: 0.5 } }

            // Wave out Eagle
            , { $Duration: 1500, y: -0.5, $Delay: 60, $Cols: 24, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Easing: $JssorEasing$.$EaseInWave, $Round: { $Top: 1.5 } }

            //Expand Stairs
            , { $Duration: 1000, $Delay: 30, $Cols: 10, $Rows: 4, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: $JssorEasing$.$EaseInQuad }

            //Fade Clip out H
            , { $Duration: 1200, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $JssorEasing$.$EaseOutCubic, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 }

            ////Dodge Pet Inside in Random Chess
            //, { $Duration: 1500, x: 0.2, y: -0.1, $Delay: 80, $Cols: 10, $Rows: 4, $Clip: 15, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8] }, $ChessMode: { $Column: 15, $Row: 15 }, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseInWave, $Clip: $JssorEasing$.$EaseLinear }, $Round: { $Left: 0.8, $Top: 2.5} }
            ];

            //Reference http://www.jssor.com/development/slider-with-caption-jquery.html
            //Reference http://www.jssor.com/development/reference-ui-definition.html#captiondefinition
            //Reference http://www.jssor.com/development/tool-caption-transition-viewer.html

            var _CaptionTransitions = [];
            _CaptionTransitions["L"] = { $Duration: 900, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["R"] = { $Duration: 900, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["T"] = { $Duration: 900, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["B"] = { $Duration: 900, y: -0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };
            _CaptionTransitions["TR"] = { $Duration: 900, x: -0.6, y: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutSine, $Top: $JssorEasing$.$EaseInOutSine }, $Opacity: 2 };

            _CaptionTransitions["L|IB"] = { $Duration: 1200, x: 0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutBack }, $Opacity: 2 };
            _CaptionTransitions["R|IB"] = { $Duration: 1200, x: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInOutBack }, $Opacity: 2 };
            _CaptionTransitions["T|IB"] = { $Duration: 1200, y: 0.6, $Easing: { $Top: $JssorEasing$.$EaseInOutBack }, $Opacity: 2 };

            _CaptionTransitions["CLIP|LR"] = { $Duration: 900, $Clip: 3, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
            _CaptionTransitions["CLIP|TB"] = { $Duration: 900, $Clip: 12, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
            _CaptionTransitions["CLIP|L"] = { $Duration: 900, $Clip: 1, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };

            _CaptionTransitions["MCLIP|R"] = { $Duration: 900, $Clip: 2, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };
            _CaptionTransitions["MCLIP|T"] = { $Duration: 900, $Clip: 4, $Move: true, $Easing: { $Clip: $JssorEasing$.$EaseInOutCubic }, $Opacity: 2 };

            _CaptionTransitions["WV|B"] = { $Duration: 1200, x: -0.2, y: -0.6, $Easing: { $Left: $JssorEasing$.$EaseInWave, $Top: $JssorEasing$.$EaseLinear }, $Opacity: 2, $Round: { $Left: 1.5} };

            _CaptionTransitions["TORTUOUS|VB"] = { $Duration: 1800, y: -0.2, $Zoom: 1, $Easing: { $Top: $JssorEasing$.$EaseOutWave, $Zoom: $JssorEasing$.$EaseOutCubic }, $Opacity: 2, $During: { $Top: [0, 0.7] }, $Round: { $Top: 1.3} };

            _CaptionTransitions["LISTH|R"] = { $Duration: 1500, x: -0.8, $Clip: 1, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleClip: 0.8, $Opacity: 2, $During: { $Left: [0.4, 0.6], $Clip: [0, 0.4], $Opacity: [0.4, 0.6]} };

            _CaptionTransitions["RTT|360"] = { $Duration: 900, $Rotate: 1, $Easing: { $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInQuad }, $Opacity: 2 };
            _CaptionTransitions["RTT|10"] = { $Duration: 900, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} };

            _CaptionTransitions["RTTL|BR"] = { $Duration: 900, x: -0.6, y: -0.6, $Zoom: 11, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $Opacity: 2, $Round: { $Rotate: 0.8} };

            _CaptionTransitions["T|IE*IE"] = { $Duration: 1800, y: 0.8, $Zoom: 11, $Rotate: -1.5, $Easing: { $Top: $JssorEasing$.$EaseInOutElastic, $Zoom: $JssorEasing$.$EaseInElastic, $Rotate: $JssorEasing$.$EaseInOutElastic }, $Opacity: 2, $During: { $Zoom: [0, 0.8], $Opacity: [0, 0.7] }, $Round: { $Rotate: 0.5} };

            _CaptionTransitions["RTTS|R"] = { $Duration: 900, x: -0.6, $Zoom: 1, $Rotate: 1, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $Opacity: 2, $Round: { $Rotate: 1.2} };
            _CaptionTransitions["RTTS|T"] = { $Duration: 900, y: 0.6, $Zoom: 1, $Rotate: 1, $Easing: { $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $Opacity: 2, $Round: { $Rotate: 1.2} };

            _CaptionTransitions["DDGDANCE|RB"] = { $Duration: 1800, x: -0.3, y: -0.3, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Zoom: $JssorEasing$.$EaseOutQuad }, $Opacity: 2, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 2.5} };
            _CaptionTransitions["ZMF|10"] = { $Duration: 900, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 };
            _CaptionTransitions["DDG|TR"] = { $Duration: 1200, x: -0.3, y: 0.3, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump }, $Opacity: 2, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 0.8} };

            _CaptionTransitions["FLTTR|R"] = { $Duration: 900, x: -0.2, y: -0.1, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $Opacity: 2, $Round: { $Top: 1.3} };
            _CaptionTransitions["FLTTRWN|LT"] = { $Duration: 1800, x: 0.5, y: 0.2, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseInOutSine, $Top: $JssorEasing$.$EaseInWave, $Zoom: $JssorEasing$.$EaseInOutQuad }, $Opacity: 2, $During: { $Left: [0, 0.7], $Top: [0.1, 0.7] }, $Round: { $Top: 1.3} };

            _CaptionTransitions["ATTACK|BR"] = { $Duration: 1500, x: -0.1, y: -0.5, $Zoom: 1, $Easing: { $Left: $JssorEasing$.$EaseOutWave, $Top: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $During: { $Left: [0.3, 0.7], $Top: [0, 0.7] }, $Round: { $Left: 1.3} };

            _CaptionTransitions["FADE"] = { $Duration: 900, $Opacity: 2 };

            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 2000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                                   //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideEasing: $JssorEasing$.$EaseOutQuint,          //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
                $SlideDuration: 800,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                    $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                    $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                    $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                    $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
                },

                $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
                },

                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                },

                $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 4,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 4,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$ScaleWidth(Math.max(Math.min(parentWidth, 980), 300));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
    </script>
	<script type="text/javascript" charset="utf-8">

        var nextStepURL = "step_import_image_fb.html";
        var isLogin = false;

        var a = <?php if(isset($_GET["a"])) echo $_GET["a"];
                        else echo "000000";?>;
        $(document).ready(function(){
        if(a == "fl"){
            isLogin = true;
            nextStepURL = "step_import_image_fl.html";
            var p = '<a id = "user_name" onclick = $("#main_content").load("user_layout.html")>'+
                                            "Nguyen An"+
                                        '</a>';
                                document.getElementById("user_info").innerHTML = p;  
            $.ajax({
          // The link we are accessing.
              url: " https://api.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=f54215c654a239c02b8e4004e10c80fa&user_id=132497432%40N06&format=json&nojsoncallback=1",
                
              // The type of request.
              type: "get",
              //crossDomain: false,
                
              // The type of data that is getting returned.
              dataType: "html",
              headers: {'X-Requested-With': 'XMLHttpRequest'},

              success: function( strData ){
                console.log(strData);

                }
            });
        }
        else{

    		FB.init({
                        appId      : '388013708073548',
                        status     : true, // check login status
                        cookie     : true, // enable cookies to allow the server to access the session
                        xfbml      : true  // parse XFBML
             });

            FB.getLoginStatus(function(response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        isLogin = true;
                        FB.api('/me', function(response) {
                                var p = '<a id = "user_name" onclick = $("#main_content").load("user_layout.html")>'+
                                            response.name
                                        '</a>';
                                document.getElementById("user_info").innerHTML = p;             
                            });
                        }
                });
        }
    });


		function loginFacebook(){
		   	FB.login(function(response) {
		      		console.log(response);
		      		if(response.status== 'connected'){
				    	FB.api('/me', function(response) {
                            isLogin = true;
				    		var p = '<a id = "user_name" onclick = $("#main_content").load("user_layout.html")>'+
										response.name
									'</a>';
							document.getElementById("user_info").innerHTML = p;

		              		/*FB.api('me/picture', function(response){
		              			console.log(response);
		              			var avata = document.createElement("img");
		              			avata.src = response.data.url;
		              			document.getElementById("user_info").appendChild(avata);
		              		});*/
		              		$("#main_content").load("step_import_image.html");           		
		            	});
				    }
			});		  
		}
        function loginFlickr(){
            $.ajax({
          // The link we are accessing.
              url: "flickr/getToken.php",
                
              // The type of request.
              type: "get",
                
              // The type of data that is getting returned.
              dataType: "html",

              success: function( strData ){
                console.log(strData);

            }
        });
        }

        $('#createSlider').click(function(){
            checkBtnGetStart();
        });

        function checkBtnGetStart(){
            //alert("hello");
           /* FB.getLoginStatus(function(response){
                console.log(response);
                if(response.status== 'connected'){
                        // $("#main_content").load("step_import_image.html");
                        $("#main_content").load("step_import_image_fb.html");
                  }  
                  else {
                    alert("Bạn chưa đăng nhập, Vui lòng đăng nhập trước!!!");
                  }             
            });   */ 
            if(isLogin)
                 $("#main_content").load(nextStepURL);
            else  
                alert("Bạn chưa đăng nhập, Vui lòng đăng nhập trước!!!");
        }
		function logoutFacebook(){
			
			FB.getLoginStatus(function(response) {
	            if (response.status === 'connected') {
	                FB.logout(function(response) {
	                    window.location.href = "/facebookPhotoSlide";
	                    });
	           	}
        	});
		}

	</script>
	<!-- header menu -->
	<div class="headercontainer" style="z-index: 1000;">

		<div class="header clearfix">

			<span class="logo">Photo Slider</span>
			<div class="nav">
				<input id="toggle" type="checkbox">
				<label class="toggle" onclick="" for="toggle">
					<span class="icon-bar" style="top:7px;"></span>
					<span class="icon-bar" style="top:14px;"></span>
					<span class="icon-bar" style="top:21px;"></span>
				</label>
				<ul class="menu">
					<li>
						<a  href="" >Trang Chủ</a>
					</li>
					<li>
						<a href="demos/">Mẫu</a>
					</li>
					<li>
						<a href="NewFeeds">Bản Tin</a>
					</li>
					<!-- <li>
						<a href="" id="createSlider">Tạo Sliders</a>
					</li> -->
					<li>
						<a href="about.html">Giới Thiệu</a>
					</li>
					<li>
						<a href="support.html">Trợ Giúp</a>
					</li>
					<li class="dropdown" id = "user_info">
						<a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
							Đăng nhập
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" role="menu">
							<li>
								<!-- <a href="#">An Gay</a> -->
								<img src="images/fb_login.jpg" style="width: 150px; margin-top: -5px" onclick="loginFacebook()">
								<!-- <a class="btn btn-primary btn-lg" href="#" role="button" onclick="loginFacebook()">Đăng nhập facebook</a> -->
							</li>
							<li>
							<img src="images/flickr_login.jpg" style="width: 150px; height: 35px; margin-top:3px" onclick="loginFlickr()">
								<!-- <a href="#">CMNR</a> -->
								<!-- <a class="btn btn-danger btn-lg" href="#" role="button" onclick="loginFlickr()">Đăng nhập flickr</a> -->
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="headerspace"></div>

<div id = "main_content">
	<!-- screen demo -->
	<div id="slider1_container" style="position: relative; margin: 0px auto; width: 980px; height: 480px; overflow: hidden;" jssor-slider="true">
		<!-- Loading Screen --> 
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;

                background-color: #000; top: 0px; left: 0px;width: 100%; height:100%;"> 
            </div> 
            <div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat center center;

                top: 0px; left: 0px;width: 100%;height:100%;">
            </div> 
        </div> 
 
        <!-- Slides Container --> 
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 980px; height: 380px;
            overflow: hidden;">
            <div>
                <img u="image" src="../img/home/01.jpg" />
                <div u=caption t="CLIP|LR" du="1500" class="captionOrange"  style="position:absolute; left:20px; top: 30px; width:500px; height:30px;"> 
                CHÀO MỪNG CÁC BẠN
                </div>
                <div u=caption t="L|IB" t2=L d=-900 class="captionBlack"  style="position:absolute; left:360px; top: 130px; width:100px; height:30px;"> 
                ĐẾN VỚI
                </div> 
                <div u=caption t="RTT|360" d=-200 class="captionBlack"  style="position:absolute; left:360px; top: 180px; width:100px; height:30px;"> 
                ĐỀ TÀI CỦA
                </div>
                <div u=caption t="DDGDANCE|RB" t2="RTT|10" d=-1800 du=3800 class="captionOrange" style="position:absolute; left:560px; top: 110px; width:200px; height:120px; text-align: left;">
                    &nbsp; NHÓM CHIP CHIP<BR/>
                    &nbsp; NGUYỄN DUY TÂN<br />
                    &nbsp; BIỆN QUỐC ĐOÀN<br />
                    &nbsp; NGUYỄN VĂN AN
                </div>
                <div u=caption t="T|IE*IE" d=-1600 du=3800 t2="B" class="captionOrange" style="position:absolute; left:20px; top: 310px; width:390px; height:30px;">
                    SLIDESHOW AND RESPONSIVE SLIDER
                </div>
                <div u="caption" t="ZMF|10" t2="B" d=-1300 style="position:absolute;left:420px;top:280px;width:90px;height:40px;font-size:36px;color:#fff;line-height:40px;">390+</div>
                <div u="caption" t="CLIP|L" d=-300 style="position:absolute;left:520px;top:280px;width:160px;height:40px;font-size:36px;color:#fff;line-height:40px; text-align: center;">CAPTION</div>
                <a class="captionOrange" u="caption" t="CLIP|L" d=-300 href="http://www.jssor.com/development/tool-caption-transition-viewer.html" style="position:absolute;left:720px;top:280px;width:220px;height:40px;font-size:36px;color:#fff;line-height:40px;">TRANSITIONS</a>
            </div>
            <div> 
                <img u="image" src="../img/home/02.jpg" />
                <a class="captionOrange" href="http://www.jssor.com/development/tool-slideshow-transition-viewer.html" style="position: absolute; top: 300px; left: 630px; width: 380px; height: 30px;">360+ SLIDESHOW TRANSITIONS</a>
                <div u=caption t="CLIP|LR" t2="B" du="2000" class="captionOrange"  style="position:absolute; left:20px; top: 300px; width:500px; height:30px;"> 
                GIÚP CÁC BẠN TẠO NÊN CÁC SLIDESHOW
                </div>
                <div u="caption" t="FADE" t2="B" d=-450 class=captionBlack style="position: absolute; left:700px;top:120px;width:200px;height:90px;">
                        TỪ<br />
                        FACEBOOK<br />
                        FLICKR
                </div>
                <div u="caption" t="T|IB" t2="R" d=-600 class=captionOrange style="position: absolute; top: 90px; left: 20px; width: 260px;
                    height: 90px;  line-height: 90px;">
                    TIẾT KIỆM HIỆU NĂNG
                </div>
                <div u="caption" t="MCLIP|T" t2="T" d=-450 style="position:absolute;left:505px;top:40px;width:200px;height:30px;font-size:18px;color:#fff;line-height:30px;text-align:center;">Size&nbsp; &nbsp; &nbsp;CPU Usage</div>
                <div u="caption" t="MCLIP|R" d=-300 style="position:absolute;left:325px;top:90px;width:350px;height:30px;font-size:18px;color:#fff;line-height:30px;">Slider with Slideshow&nbsp; &nbsp; &nbsp; 23KB&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ~4%</div>
                <div u="caption" t="MCLIP|R" d=-300 style="position:absolute;left:325px;top:140px;width:350px;height:30px;font-size:18px;color:#fff;line-height:30px;">Slider with Caption&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 18KB&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ~4%</div>
                <div u="caption" t="MCLIP|R" d=-300 style="position:absolute;left:325px;top:190px;width:350px;height:30px;font-size:18px;color:#fff;line-height:30px;">Slider&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;17KB&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ~1%</div>
            </div>
            <div> 
                <img u="image" src="../img/home/03.jpg" />
                <a class="captionOrange" href="http://www.jssor.com/demos/index.html" style="position: absolute; top: 50px; right: 30px; width: 200px;">HƠN 30 MẪU SLIDESHOW</a>
                <div u=caption t="T" t2=NO style="position: absolute; left: 20px; top:30px; width:600px; height:90px; color: #fff; line-height: 30px; text-align: center;"> 
                    Các bạn có thể tạo ra các slideshow tuyệt đẹp từ hình ảnh từ Facebook và Flick<br />
                    Với hơn 360 hiệu ứng slideshow cho bạn chọn lựa<br />
                    Các bạn có thể chia sẻ với bạn bè slideshow của bạn.
                </div>
                <div u=caption t="L" d=-750 class="captionOrange"  style="position:absolute; left:10px; top: 300px; width:130px; height:30px;"> 
                CoolSlider
                </div>
                <div u=caption t="CLIP|L" t2=B d=-450 class="captionBlack"  style="position:absolute; left:160px; top: 300px; width:30px; height:30px;"> 
                là
                </div>
                <div u=caption t="DDG|TR" t2="TORTUOUS|VB" d=-750 class="captionOrange"  style="position:absolute; left:200px; top: 300px; width:300px; height:30px;"> 
                ứng dụng web
                </div>
                <div u=caption t="RTT|10" d=-450 class="captionBlack"  style="position:absolute; left:430px; top: 240px; width:120px; height:30px;"> 
                dành cho
                </div>
                <div u=caption t="TORTUOUS|VB" d=-750 class="captionOrange"  style="position:absolute; left:590px; top: 220px; width:120px; height:30px;"> 
                mọi người
                </div>
                <div u=caption t="T" d=-450 class="captionOrange"  style="position:absolute; left:720px; top: 200px; width:120px; height:30px;">
                muốn
                </div>
                <div u=caption t="FLTTR|R" t2="B" d=-600 class="captionOrange"  style="position:absolute; left:560px; top: 300px; width:120px; height:30px;"> 
                lưu trữ
                </div>
                <div u=caption t="ATTACK|BR" d=-600 class="captionOrange"  style="position:absolute; left:760px; top: 310px; width:80px; height:30px;"> 
                hình ảnh
                </div>
                <div u="caption" t="FLTTRWN|LT" d=-900 style="position:absolute;left:460px;top:160px;width:130px;height:30px;font-size:28px;color:#fff;line-height:30px;">khoảnh khắc</div>
                <div u="caption" t="RTTS|R" d=-900 style="position:absolute;left:760px;top:120px;width:130px;height:30px;font-size:28px;color:#fff;line-height:30px;">của mình</div>
                <div u="caption" t="R|IB" t2=R d=-900 style="position:absolute;left:860px;top:250px;width:60px;height:30px;font-size:28px;color:#fff;line-height:30px;">và người thân</div>
            </div>
            <div>
                <img u="image" src="../img/home/04.jpg" />
                <div u=caption t="RTTS|T" d=-300 t2="B" class=captionOrange style="position:absolute; left:20px; top: 330px; width:300px; height:30px;"> 
                Phù hợp trên
                </div>
                <div u=caption t="T|IB" t2="T" d=-300 class="captionOrange"  style="position:absolute; left:20px; top: 100px; width:180px; height:30px;"> 
                Tất cả trình duyệt
                </div>
                <div u=caption t="T|IB" t2=L d=-900 class="captionBlack"  style="position:absolute; left:60px; top: 170px; width:100px; height:30px;"> 
                được hỗ trợ
                </div>
                <div u="caption" t="WV|B" t2="T" d=-600 class=bricon style="position:absolute; top:50px; left: 220px; width:30px; height:30px; background-position: 0px 0px;"></div>
                <div u="caption" t="WV|B" t2="T" d="-1100" class=bricon style="position:absolute; top:100px; left: 220px; width:30px; height:30px; background-position: -30px 0px;"></div>
                <div u="caption" t="WV|B" t2="T" d="-1100" class=bricon style="position:absolute; top:150px; left: 220px; width:30px; height:30px; background-position: -60px 0px;"></div>
                <div u="caption" t="WV|B" t2="T" d="-1100" class=bricon style="position:absolute; top:200px; left: 220px; width:30px; height:30px; background-position: -90px 0px;"></div>
                <div u="caption" t="WV|B" t2="T" d="-1100" class=bricon style="position:absolute; top:250px; left: 220px; width:30px; height:30px; background-position: -120px 0px;"></div>
                <div u="caption" t="LISTH|R" t2="CLIP|TB" d=-600 class=captionOrange style="position: absolute; top: 40px; left: 280px; width: 180px;
                    height: 250px; text-align: left; line-height: 50px;">
                        &nbsp; Chrome&nbsp; &nbsp; &nbsp; 3+<br />
                        &nbsp; Firerfox&nbsp; &nbsp; &nbsp; 2+<br />
                        &nbsp; IE&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6+<br />
                        &nbsp; Safari&nbsp; &nbsp; &nbsp; &nbsp; 3.1+<br />
                        &nbsp; Opera&nbsp; &nbsp; &nbsp; &nbsp;10+
                </div>
                <div u=caption t="TR" t2="T" d=-900 class="captionOrange"  style="position:absolute; left:700px; top: 40px; width:300px; height:30px;"> 
                Trên tất cả các thiết bị
                </div>
                <div u=caption t="R" t2=R d=-900 class="captionBlack"  style="position:absolute; left:780px; top: 55px; width:100px; height:30px;"> 
                Được hỗ trợ
                </div>
                <div u="caption" t="T|IB" d=-900 style="position:absolute;left:525px;top:90px;width:220px;height:30px;font-size:28px;color:#fff;line-height:30px;">Windows Phone</div>
                <div u="caption" t="T|IB" t2="ZMF|10" d=-900 style="position:absolute;left:560px;top:160px;width:120px;height:30px;font-size:28px;color:#fff;line-height:30px;">Android</div>
                <div u="caption" t="T|IB" t2=R d=-900 style="position:absolute;left:760px;top:140px;width:60px;height:30px;font-size:28px;color:#fff;line-height:30px;">iOS</div>
                <img u="caption" t="T|IB" t2=B d=-900 src="../img/home/moc-iphone.png" style="position:absolute;left:600px;top:230px;width:120px;height:80px;" />
                <img u="caption" t="RTTL|BR" d=-450 src="../img/home/moc-ipad.png" style="position:absolute;left:750px;top:220px;width:77px;height:100px;" />
            </div>

            <!-- Example to add fixed static share buttons in slider BEGIN -->
            <!-- Remove it if no need -->
            <!-- Share Button Styles -->
            <style>
                .share-icon {
                    display: inline-block;
                    float: left;
                    margin: 4px;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    vertical-align: middle;
                    background-image: url(../img/share/share-icons.png);
                }

                .share-facebook {
                    background-position: 0px 0px;
                }

                    .share-facebook:hover {
                        background-position: 0px -40px;
                    }

        .share-twitter {
            background-position: -40px 0px;
        }

            .share-twitter:hover {
                background-position: -40px -40px;
            }

        .share-pinterest {
            background-position: -80px 0px;
        }

            .share-pinterest:hover {
                background-position: -80px -40px;
            }

                .share-linkedin {
                    background-position: -240px 0px;
                }

                    .share-linkedin:hover {
                        background-position: -240px -40px;
                    }


                .share-googleplus {
                    background-position: -120px 0px;
                }

                    .share-googleplus:hover {
                        background-position: -120px -40px;
                    }


        .share-stumbleupon {
            background-position: -360px 0px;
        }

            .share-stumbleupon:hover {
                background-position: -360px -40px;
            }

                .share-email {
                    background-position: -320px 0px;
                }

                    .share-email:hover {
                        background-position: -320px -40px;
                    }
            </style>

            <div u="any" style="position: absolute; display: block; top: 6px; right: 16px; width: 280px; height: 40px; z-index: 10;">

                <a class="share-icon share-facebook" target="_blank" href="http://www.facebook.com/sharer.php?u=http://jssor.com" title="Share on Facebook"></a>
                <a class="share-icon share-twitter" target="_blank" href="http://twitter.com/share?url=http://jssor.com&text=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive" title="Share on Twitter"></a>
                <a class="share-icon share-googleplus" target="_blank" href="https://plus.google.com/share?url=http://jssor.com" title="Share on Google Plus"></a>
                <a class="share-icon share-linkedin" target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=http://jssor.com" title="Share on LinkedIn"></a>
                <a class="share-icon share-stumbleupon" target="_blank" href="http://www.stumbleupon.com/submit?url=http://jssor.com&title=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive" title="Share on StumbleUpon"></a>
                <a class="share-icon share-pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url=http://jssor.com&media=http://jssor.com/img/site/jssor.slider.jpg&description=JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive" title="Share on Pinterst"></a>
                <a class="share-icon share-email" target="_blank" href="mailto:?Subject=Jssor%20Slider&Body=Highly%20recommended%20JavaScript%20jQuery%20Image%20Slider/Slideshow/Carousel/Gallery/Banner%20html%20TOUCH%20SWIPE%20Responsive%20http://jssor.com" title="Share by Email"></a>
            </div>
            <!-- Example to add fixed static share buttons in slider END -->

            <!-- Example to add fixed static QR code in slider BEGIN -->
            <!-- Remove it if no need -->
            <!-- QR Code Style -->
            <style>
                @media only screen and (max-width: 980px) {
                    .qr_code {
                        display: none;
                    }
                }
            </style>
            <img u="any" class="qr_code" src="../img/qr/jssor.com.png" style="position: absolute; width: 80px; height: 80px; bottom: 20px; right: 20px; opacity: .5; filter: alpha(opacity=50);" />
            <!-- Example to add fixed static QR code in slider END -->
        </div> 
 
        <!--#region Bullet Navigator Skin Begin -->
        <!-- Help: http://www.jssor.com/development/slider-with-bullet-navigator-jquery.html -->
        <style>
            /* jssor slider bullet navigator skin 03 css */
            /*
            .jssorb03 div           (normal)
            .jssorb03 div:hover     (normal mouseover)
            .jssorb03 .av           (active)
            .jssorb03 .av:hover     (active mouseover)
            .jssorb03 .dn           (mousedown)
            */
            .jssorb03 {
                position: absolute;
            }
            .jssorb03 div, .jssorb03 div:hover, .jssorb03 .av {
                position: absolute;
                /* size of bullet elment */
                width: 21px;
                height: 21px;
                text-align: center;
                line-height: 21px;
                color: white;
                font-size: 12px;
                background: url(../img/b03.png) no-repeat;
                overflow: hidden;
                cursor: pointer;
            }
            .jssorb03 div { background-position: -5px -4px; }
            .jssorb03 div:hover, .jssorb03 .av:hover { background-position: -35px -4px; }
            .jssorb03 .av { background-position: -65px -4px; }
            .jssorb03 .dn, .jssorb03 .dn:hover { background-position: -95px -4px; }
        </style>
        <!-- bullet navigator container -->
        <div u="navigator" class="jssorb03" style="bottom: 16px; right: 6px;">
            <!-- bullet navigator item prototype -->
            <div u="prototype"><div u="numbertemplate"></div></div>
        </div>
        <!--#endregion Bullet Navigator Skin End -->
        
        <!--#region Arrow Navigator Skin Begin -->
        <!-- Help: http://www.jssor.com/development/slider-with-arrow-navigator-jquery.html -->
        <style>
            /* jssor slider arrow navigator skin 20 css */
            /*
            .jssora20l                  (normal)
            .jssora20r                  (normal)
            .jssora20l:hover            (normal mouseover)
            .jssora20r:hover            (normal mouseover)
            .jssora20l.jssora20ldn      (mousedown)
            .jssora20r.jssora20rdn      (mousedown)
            */
            .jssora20l, .jssora20r {
                display: block;
                position: absolute;
                /* size of arrow element */
                width: 55px;
                height: 55px;
                cursor: pointer;
                background: url(../img/a20.png) no-repeat;
                overflow: hidden;
            }
            .jssora20l { background-position: -3px -33px; }
            .jssora20r { background-position: -63px -33px; }
            .jssora20l:hover { background-position: -123px -33px; }
            .jssora20r:hover { background-position: -183px -33px; }
            .jssora20l.jssora20ldn { background-position: -243px -33px; }
            .jssora20r.jssora20rdn { background-position: -303px -33px; }
        </style>
        <!-- Arrow Left -->
        <span u="arrowleft" class="jssora20l" style="top: 123px; left: 8px;">
        </span>
        <!-- Arrow Right -->
        <span u="arrowright" class="jssora20r" style="top: 123px; right: 8px;">
        </span>
        <!--#endregion Arrow Navigator Skin End -->
        <a style="display: none" href="http://www.jssor.com">Bootstrap Slider</a>
	<!-- chạy trên màn hình home -->

		<!-- <div style="position: absolute; top: 0px; left: 0px; width: 980px; height: 380px; transform-origin: 0px 0px 0px; transform: scale(1);">
			<div class="" style="position: relative; margin: 0px auto; width: 980px; height: 380px; overflow: visible; display: block; top: 0px; left: 0px;">
			</div>
		</div> -->
    	</div>
    	<div style="height:1px;"></div>
    	<div  class="ad_button">
            <button id = "button_getstart" type="button" name="" value="" class="css3button" onclick="checkBtnGetStart()">Get Start</button>
        </div>  
    	<div style="height:1px;"></div>
    	<div class="ad_title">
    		<div class="ad_title_caption" style="position:absolute;top:0px;left:0px;margin-left:30px;line-height:50px;font-size:26px;color:#ff8400;">
    			<span>Mẫu - Slideshows</span>
    		</div>
    	</div>

    	<div style="margin:0 auto;width:100%;max-width:980px;background-color:#EAEAEA;overflow:hidden;">
    		<div class="thumb_wrapper">
    			<div class="thumb">
                    <a class="thumbb" href="http://www.jssor.com/demos/full-width-slider.html">
                        <div class="thumbi"><img src="img/demo/t-full-width-slider.jpg" alt="full width slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Full Width Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="http://www.jssor.com/demos/simple-fade-slideshow.html">
                        <div class="thumbi">
                            <img src="img/demo/t-simple-fade-slideshow.jpg" alt="simple fade slideshow jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Simple Fade Slideshow</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="http://www.jssor.com/demos/image-slider.html">
                        <div class="thumbi"><img src="img/demo/t-image-slider.jpg" alt="image slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Image Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/banner-slider.html">
                        <div class="thumbi"><img src="img/demo/t-banner-slider.jpg" alt="banner slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Banner Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/image-gallery.html">
                        <div class="thumbi"><img src="img/demo/t-image-gallery.jpg" alt="image gallery jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Image Gallery</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/list-slider.html">
                        <div class="thumbi"><img src="img/demo/t-list-slider.jpg" alt="list slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">List Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/image-gallery-with-vertical-thumbnail.html">
                        <div class="thumbi"><img src="img/demo/t-image-gallery-with-vertical-thumbnail.jpg" alt="image gallery with vertical thumbnail jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Image Gallery with Vertical Thumbnail</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/carousel-slider.html">
                        <div class="thumbi"><img src="img/demo/t-carousel-slider.jpg" alt="carousel jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Carousel Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/grid-slider.html">
                        <div class="thumbi"><img src="img/demo/t-grid-slider.jpg" alt="grid slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Grid Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/nested-slider.html">
                        <div class="thumbi"><img src="img/demo/t-nested-slider.jpg" alt="nested slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Nested Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/content-slider.html">
                        <div class="thumbi"><img src="img/demo/t-content-slider.jpg" alt="content (text/image/html) slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Content Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/introduction-slider.html">
                        <div class="thumbi"><img src="img/demo/t-introduction-slider.jpg" alt="introduction slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Introduction Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/slider-cluster.html">
                        <div class="thumbi"><img src="img/demo/t-slider-cluster.jpg" alt="slider cluster jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Slider Cluster</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/banner-rotator.html">
                        <div class="thumbi"><img src="img/demo/t-banner-rotator.jpg" alt="banner rotator jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Banner Rotator</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/vertical-slider.html">
                        <div class="thumbi"><img src="img/demo/t-vertical-slider.jpg" alt="vertical slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Vertical Slider</div>
                    </a>
                </div>

                <div class="thumb">
                    <a class="thumbb" href="demos/scrolling-logo-thumbnail-slider.html">
                        <div class="thumbi"><img src="img/demo/t-scrolling-logo-thumbnail-slider.jpg" alt="scrolling logo thumbnail slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Scrolling Logo/Thumbnail Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/thumbnail-navigator-with-arrows.html">
                        <div class="thumbi"><img src="img/demo/t-arrow-for-thumbnail-navigator-slider.jpg" alt="arrow for thumbnail navigator slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Arrow for Thumbnail Navigator Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/different-size-photo-slider.html">
                        <div class="thumbi"><img src="img/demo/t-different-size-photo-slider.jpg" alt="different size photo slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Different Size Photo Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/nearby-image-partial-visible-slider.html">
                        <div class="thumbi"><img src="img/demo/t-nearby-image-partial-visible-slider.jpg" alt="nearby image partial visible slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Nearby Image Partial Visible Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/tiled-menu-slider.html">
                        <div class="thumbi"><img src="img/demo/t-tiled-menu-slider.jpg" alt="tiled menu slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Tiled Menu Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/responsive-slider.html">
                        <div class="thumbi"><img src="img/demo/t-responsive-slider.jpg" alt="responsive slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Responsive Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/tab-slider.html">
                        <div class="thumbi"><img src="img/demo/t-tab-slider.jpg" alt="tabs, jquery tab slider, javascript tab slider jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Tab Slider</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="demos/video-gallery.html">
                        <div class="thumbi"><img src="img/demo/t-video-gallery.jpg" alt="video gallery jquery javascript+html code example for website builder, website design, web developer, web design, web development, website development, web designer, website designer, website developer, website, web page"></div>
                        <div class="thumbc">Video Gallery</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="bootstrap/bootstrap-carousel.html">
                        <div class="thumbi"><img src="img/demo/t-bootstrap-carousel.jpg" alt="Bootstrap Carousel Slider Slideshow/Gallery/Banner/Rotator/Scroller"></div>
                        <div class="thumbc">Bootstrap Carousel</div>
                    </a>
                </div>
                <div class="thumb">
                    <a class="thumbb" href="bootstrap/bootstrap-slider.html">
                        <div class="thumbi"><img src="img/demo/t-bootstrap-slider.jpg" alt="Bootstrap Slider Carousel/Slideshow/Gallery/Banner/Rotator/Scroller"></div>
                        <div class="thumbc">Bootstrap Slider</div>
                    </a>
                </div>
    		</div>
    	</div>
	</div>
    <div style="height:30px;"></div>
    <div class="footer">
        <div style="position:relative;display:block;margin:0 auto;padding:0px;width:100%;max-width:980px;height:60px;line-height:60px;font-size:20px;overflow:hidden;">
            <span class="copyright"> Design by: Chip Chip</span>
        </div>
    </div>
</body>