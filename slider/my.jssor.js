    var allImageJson;


    var string = "abc";
    var SlideShowTransition = [
        "------------ Twins Effects --------------",
        "Fade Twins",
        "Rotate Overlap",
        "Switch",
        "Rotate Relay",
        "Doors",

        "Rotate in+ out-",
        "Fly Twins",
        "Rotate in- out+",
        "Rotate Axis up overlap",
        "Chess Replace TB",

        "Chess Replace LR",

        "Shift TB",
        "Shift LR",
        "Return TB",
        "Return LR",
        "Rotate Axis down",
        "Extrude Replace",
        "------------ Fade Effects --------------",
        "Fade",
        "Fade in L",
        "Fade in R",
        "Fade in T",
        "Fade in B",
        "Fade in LR",

        "Fade in LR Chess",

        "Fade in TB",

        "Fade in TB Chess",

        "Fade in Corners",

        "Fade out L",
        "Fade out R",
        "Fade out T",
        "Fade out B",
        "Fade out LR",

        "Fade out LR Chess",

        "Fade out TB",

        "Fade out TB Chess",

        "Fade out Corners",

        "Fade Fly in L",
        "Fade Fly in R",
        "Fade Fly in T",
        "Fade Fly in B",
        "Fade Fly in LR",

        "Fade Fly in LR Chess",

        "Fade Fly in TB",

        "Fade Fly in TB Chess",

        "Fade Fly in Corners",

        "Fade Fly out L",
        "Fade Fly out R",
        "Fade Fly out T",
        "Fade Fly out B",
        "Fade Fly out LR",

        "Fade Fly out LR Chess",

        "Fade Fly out TB",

        "Fade Fly out TB Chess",

        "Fade Fly out Corners",

        "Fade Clip in H",
        "Fade Clip in V",
        "Fade Clip out H",
        "Fade Clip out V",
        "Fade Stairs",
        "Fade Random",
        "Fade Swirl",
        "Fade ZigZag",
        "------------ Swing Outside Effects --------------",
        "Swing Outside in Stairs",
        "Swing Outside in ZigZag",
        "Swing Outside in Swirl",
        "Swing Outside in Random",
        "Swing Outside in Random Chess",

        "Swing Outside in Square",
        "Swing Outside out Stairs",
        "Swing Outside out ZigZag",
        "Swing Outside out Swirl",
        "Swing Outside out Random",
        "Swing Outside out Random Chess",

        "Swing Outside out Square",
        "------------ Swing Inside Effects --------------",
        "Swing Inside in Stairs",
        "Swing Inside in ZigZag",
        "Swing Inside in Swirl",
        "Swing Inside in Random",
        "Swing Inside in Random Chess",

        "Swing Inside in Square",
        "Swing Inside out ZigZag",
        "Swing Inside out Swirl",
        "------------ Dodge Dance Outside Effects --------------",
        "Dodge Dance Outside in Stairs",
        "Dodge Dance Outside in Swirl",
        "Dodge Dance Outside in ZigZag",
        "Dodge Dance Outside in Random",
        "Dodge Dance Outside in Random Chess",

        "Dodge Dance Outside in Square",
        "Dodge Dance Outside out Stairs",
        "Dodge Dance Outside out Swirl",
        "Dodge Dance Outside out ZigZag",
        "Dodge Dance Outside out Random",
        "Dodge Dance Outside out Random Chess",

        "Dodge Dance Outside out Square",
        "------------ Dodge Dance Inside Effects --------------",
        "Dodge Dance Inside in Stairs",
        "Dodge Dance Inside in Swirl",
        "Dodge Dance Inside in ZigZag",
        "Dodge Dance Inside in Random",
        "Dodge Dance Inside in Random Chess",

        "Dodge Dance Inside in Square",
        "Dodge Dance Inside out Stairs",
        "Dodge Dance Inside out Swirl",
        "Dodge Dance Inside out ZigZag",
        "Dodge Dance Inside out Random",
        "Dodge Dance Inside out Random Chess",

        "Dodge Dance Inside out Square",
        "------------ Dodge Pet Outside Effects --------------",
        "Dodge Pet Outside in Stairs",
        "Dodge Pet Outside in Swirl",
        "Dodge Pet Outside in ZigZag",
        "Dodge Pet Outside in Random",
        "Dodge Pet Outside in Random Chess",

        "Dodge Pet Outside in Square",
        "Dodge Pet Outside out Stairs",
        "Dodge Pet Outside out Swirl",
        "Dodge Pet Outside out ZigZag",
        "Dodge Pet Outside out Random",
        "Dodge Pet Outside out Random Chess",

        "Dodge Pet Outside out Square",
        "------------ Dodge Pet Inside Effects --------------",
        "Dodge Pet Inside in Stairs",
        "Dodge Pet Inside in Swirl",
        "Dodge Pet Inside in ZigZag",
        "Dodge Pet Inside in Random",
        "Dodge Pet Inside in Random Chess",

        "Dodge Pet Inside in Square",
        "Dodge Pet Inside out Stairs",
        "Dodge Pet Inside out Swirl",
        "Dodge Pet Inside out ZigZag",
        "Dodge Pet Inside out Random",
        "Dodge Pet Inside out Random Chess",

        "Dodge Pet Inside out Square",
        "------------ Dodge Outside Effects --------------",
        "Dodge Outside out Stairs",
        "Dodge Outside out Swirl",
        "Dodge Outside out ZigZag",
        "Dodge Outside out Random",
        "Dodge Outside out Random Chess",

        "Dodge Outside out Square",
        "Dodge Outside in Stairs",
        "Dodge Outside in Swirl",
        "Dodge Outside in ZigZag",
        "Dodge Outside in Random",
        "Dodge Outside in Random Chess",

        "Dodge Outside in Square",
        "------------ Dodge Inside Effects --------------",
        "Dodge Inside out Stairs",
        "Dodge Inside out Swirl",
        "Dodge Inside out ZigZag",
        "Dodge Inside out Random",
        "Dodge Inside out Random Chess",

        "Dodge Inside out Square",
        "Dodge Inside in Stairs",
        "Dodge Inside in Swirl",
        "Dodge Inside in ZigZag",
        "Dodge Inside in Random",
        "Dodge Inside in Random Chess",

        "Dodge Inside in Square",
        "Dodge Inside in TL",
        "Dodge Inside in TR",
        "Dodge Inside in BL",
        "Dodge Inside in BR",
        "Dodge Inside out TL",
        "Dodge Inside out TR",
        "Dodge Inside out BL",
        "Dodge Inside out BR",
        "------------ Flutter Outside Effects --------------",
        "Flutter Outside in",
        "Flutter Outside in Wind",
        "Flutter Outside in Swirl",
        "Flutter Outside in Column",
        "Flutter Outside out",
        "Flutter Outside out Wind",
        "Flutter Outside out Swirl",
        "Flutter Outside out Column",
        "------------ Flutter Inside Effects --------------",
        "Flutter Inside in",
        "Flutter Inside in Wind",
        "Flutter Inside in Swirl",
        "Flutter Inside in Column",
        "Flutter Inside out",
        "Flutter Inside out Wind",
        "Flutter Inside out Swirl",
        "Flutter Inside out Column",
        "------------ Rotate Effects --------------",
        "Rotate VDouble+ in",

        "Rotate HDouble+ in",

        "Rotate VDouble- in",

        "Rotate HDouble- in",

        "Rotate VDouble+ out",

        "Rotate HDouble+ out",

        "Rotate VDouble- out",

        "Rotate HDouble- out",

        "Rotate VFork+ in",

        "Rotate HFork+ in",

        "Rotate VFork+ out",

        "Rotate HFork+ out",

        "Rotate Zoom+ in",
        "Rotate Zoom+ in L",
        "Rotate Zoom+ in R",
        "Rotate Zoom+ in T",
        "Rotate Zoom+ in B",
        "Rotate Zoom+ in TL",
        "Rotate Zoom+ in TR",
        "Rotate Zoom+ in BL",
        "Rotate Zoom+ in BR",
        "Rotate Zoom+ out",
        "Rotate Zoom+ out L",
        "Rotate Zoom+ out R",
        "Rotate Zoom+ out T",
        "Rotate Zoom+ out B",
        "Rotate Zoom+ out TL",
        "Rotate Zoom+ out TR",
        "Rotate Zoom+ out BL",
        "Rotate Zoom+ out BR",
        "Rotate Zoom- in",
        "Rotate Zoom- in L",
        "Rotate Zoom- in R",
        "Rotate Zoom- in T",
        "Rotate Zoom- in B",
        "Rotate Zoom- in TL",
        "Rotate Zoom- in TR",
        "Rotate Zoom- in BL",
        "Rotate Zoom- in BR",
        "Rotate Zoom- out",
        "Rotate Zoom- out L",
        "Rotate Zoom- out R",
        "Rotate Zoom- out T",
        "Rotate Zoom- out B",
        "Rotate Zoom- out TL",
        "Rotate Zoom- out TR",
        "Rotate Zoom- out BL",
        "Rotate Zoom- out BR",
        "------------ Zoom Effects --------------",
        "Zoom VDouble+ in",

        "Zoom HDouble+ in",

        "Zoom VDouble- in",

        "Zoom HDouble- in",

        "Zoom VDouble+ out",

        "Zoom HDouble+ out",

        "Zoom VDouble- out",

        "Zoom HDouble- out",

        "Zoom+ in",
        "Zoom+ in L",
        "Zoom+ in R",
        "Zoom+ in T",
        "Zoom+ in B",
        "Zoom+ in TL",
        "Zoom+ in TR",
        "Zoom+ in BL",
        "Zoom+ in BR",
        "Zoom+ out",
        "Zoom+ out L",
        "Zoom+ out R",
        "Zoom+ out T",
        "Zoom+ out B",
        "Zoom+ out TL",
        "Zoom+ out TR",
        "Zoom+ out BL",
        "Zoom+ out BR",
        "Zoom- in",
        "Zoom- in L",
        "Zoom- in R",
        "Zoom- in T",
        "Zoom- in B",
        "Zoom- in TL",
        "Zoom- in TR",
        "Zoom- in BL",
        "Zoom- in BR",
        "Zoom- out",
        "Zoom- out L",
        "Zoom- out R",
        "Zoom- out T",
        "Zoom- out B",
        "Zoom- out TL",
        "Zoom- out TR",
        "Zoom- out BL",
        "Zoom- out BR",
        "------------ Collapse Effects --------------",
        "Collapse Stairs",
        "Collapse Swirl",
        "Collapse Square",
        "Collapse Rectangle Cross",
        "Collapse Rectangle",
        "Collapse Cross",
        "Collapse Circle",
        "Collapse ZigZag",
        "Collapse Random",
        "------------ Compound Effects --------------",
        "Clip & Chess in",

        "Clip & Chess out",

        "Clip & Oblique Chess in",

        "Clip & Oblique Chess out",

        "Clip & Wave in",
        "Clip & Wave out",
        "Clip & Jump in",
        "Clip & Jump out",
        "------------ Expand Effects --------------",
        "Expand Stairs",
        "Expand Straight",
        "Expand Swirl",
        "Expand Square",
        "Expand Rectangle Cross",
        "Expand Rectangle",
        "Expand Cross",
        "Expand ZigZag",
        "Expand Random",
        "------------ Stripe Effects --------------",
        "Dominoes Stripe",
        "Extrude out Stripe",
        "Extrude in Stripe",
        "Horizontal Blind Stripe",
        "Vertical Blind Stripe",
        "Horizontal Stripe",
        "Vertical Stripe",
        "Horizontal Moving Stripe",
        "Vertical Moving Stripe",
        "Horizontal Fade Stripe",
        "Vertical Fade Stripe",
        "Horizontal Fly Stripe",
        "Vertical Fly Stripe",
        "Horizontal Chess Stripe",

        "Vertical Chess Stripe",

        "Horizontal Random Fade Stripe",
        "Vertical Random Fade Stripe",
        "Horizontal Bounce Stripe",
        "Vertical Bounce Stripe",
        "------------ Wave out Effects --------------",
        "Wave out",
        "Wave out Eagle",
        "Wave out Swirl",
        "Wave out ZigZag",

        "Wave out Square",
        "Wave out Rectangle",
        "Wave out Circle",
        "Wave out Cross",
        "Wave out Rectangle Cross",
        "------------ Wave in Effects --------------",
        "Wave in",
        "Wave in Eagle",
        "Wave in Swirl",
        "Wave in ZigZag",

        "Wave in Square",
        "Wave in Rectangle",
        "Wave in Circle",
        "Wave in Cross",
        "Wave in Rectangle Cross",
        "------------ Jump out Effects --------------",
        "Jump out Straight",
        "Jump out Swirl",
        "Jump out ZigZag",
        "Jump out Square",
        "Jump out Square with Chess",

        "Jump out Rectangle",
        "Jump out Circle",
        "Jump out Rectangle Cross",
        "------------ Jump in Effects --------------",
        "Jump in Straight",
        "Jump in Swirl",
        "Jump in ZigZag",
        "Jump in Square",
        "Jump in Square with Chess",

        "Jump in Rectangle",
        "Jump in Circle",
        "Jump in Rectangle Cross",
        "------------ Parabola Effects --------------",
        "Parabola Swirl in",
        "Parabola Swirl out",
        "Parabola ZigZag in",

        "Parabola ZigZag out",

        "Parabola Stairs in",
        "Parabola Stairs out",
        "------------ Float Effects --------------",
        "Float Right Random",
        "Float up Random",
        "Float up Random with Chess",

        "Float Right ZigZag",
        "Float up ZigZag",
        "Float up ZigZag with Chess",

        "Float Right Swirl",
        "Float up Swirl",
        "Float up Swirl with Chess",

        "------------ Fly Effects --------------",
        "Fly Right Random",
        "Fly up Random",
        "Fly up Random with Chess",

        "Fly Right ZigZag",
        "Fly up ZigZag",
        "Fly up ZigZag with Chess",

        "Fly Right Swirl",
        "Fly up Swirl",
        "Fly up Swirl with Chess",

        "------------ Stone Effects --------------",
        "Slide Down",
        "Slide Right",
        "Bounce Down",
        "Bounce Right",
    ]


    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    var c = [];

    c["------------ Twins Effects --------------"] = null;

    c["Fade Twins"] = {
        $Duration: 700,
        $Opacity: 2,
        $Brother: {
            $Duration: 1000,
            $Opacity: 2
        }
    };

    c["Rotate Overlap"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        },
        $Brother: {
            $Duration: 1200,
            $Zoom: 1,
            $Rotate: 1,
            $Easing: $JssorEasing$.$EaseSwing,
            $Opacity: 2,
            $Round: {
                $Rotate: 0.5
            },
            $Shift: 90
        }
    };

    c["Switch"] = {
        $Duration: 1400,
        x: 0.25,
        $Zoom: 1.5,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Zoom: $JssorEasing$.$EaseInSine
        },
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
            $Duration: 1400,
            x: -0.25,
            $Zoom: 1.5,
            $Easing: {
                $Left: $JssorEasing$.$EaseInWave,
                $Zoom: $JssorEasing$.$EaseInSine
            },
            $Opacity: 2,
            $ZIndex: -10
        }
    };

    c["Rotate Relay"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 1
        },
        $ZIndex: -10,
        $Brother: {
            $Duration: 1200,
            $Zoom: 11,
            $Rotate: -1,
            $Easing: {
                $Opacity: $JssorEasing$.$EaseLinear,
                $Rotate: $JssorEasing$.$EaseInQuad
            },
            $Opacity: 2,
            $Round: {
                $Rotate: 1
            },
            $ZIndex: -10,
            $Shift: 600
        }
    };

    c["Doors"] = {
        $Duration: 1500,
        x: 0.5,
        $Cols: 2,
        $ChessMode: {
            $Column: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1500,
            $Opacity: 2
        }
    };


    c["Rotate in+ out-"] = {
        $Duration: 1500,
        x: -0.3,
        y: 0.5,
        $Zoom: 1,
        $Rotate: 0.1,
        $During: {
            $Left: [0.6, 0.4],
            $Top: [0.6, 0.4],
            $Rotate: [0.6, 0.4],
            $Zoom: [0.6, 0.4]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Top: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1000,
            $Zoom: 11,
            $Rotate: -0.5,
            $Easing: {
                $Opacity: $JssorEasing$.$EaseLinear,
                $Rotate: $JssorEasing$.$EaseInQuad
            },
            $Opacity: 2,
            $Shift: 200
        }
    };

    c["Fly Twins"] = {
        $Duration: 1500,
        x: 0.3,
        $During: {
            $Left: [0.6, 0.4]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true,
        $Brother: {
            $Duration: 1000,
            x: -0.3,
            $Easing: {
                $Left: $JssorEasing$.$EaseInQuad,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2
        }
    };

    c["Rotate in- out+"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.5,
        $During: {
            $Left: [0.4, 0.6],
            $Top: [0.4, 0.6],
            $Rotate: [0.4, 0.6],
            $Zoom: [0.4, 0.6]
        },
        $Easing: {
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1000,
            $Zoom: 1,
            $Rotate: -0.5,
            $Easing: {
                $Opacity: $JssorEasing$.$EaseLinear,
                $Rotate: $JssorEasing$.$EaseInQuad
            },
            $Opacity: 2,
            $Shift: 200
        }
    };

    c["Rotate Axis up overlap"] = {
        $Duration: 1200,
        x: 0.25,
        y: 0.5,
        $Rotate: -0.1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Top: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1200,
            x: -0.1,
            y: -0.7,
            $Rotate: 0.1,
            $Easing: {
                $Left: $JssorEasing$.$EaseInQuad,
                $Top: $JssorEasing$.$EaseInQuad,
                $Opacity: $JssorEasing$.$EaseLinear,
                $Rotate: $JssorEasing$.$EaseInQuad
            },
            $Opacity: 2
        }
    };

    c["Chess Replace TB"] = {
        $Duration: 1600,
        x: 1,
        $Rows: 2,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1600,
            x: -1,
            $Rows: 2,
            $ChessMode: {
                $Row: 3
            },
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutQuart,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2
        }
    };


    c["Chess Replace LR"] = {
        $Duration: 1600,
        y: -1,
        $Cols: 2,
        $ChessMode: {
            $Column: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1600,
            y: 1,
            $Cols: 2,
            $ChessMode: {
                $Column: 12
            },
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutQuart,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2
        }
    };


    c["Shift TB"] = {
        $Duration: 1200,
        y: 1,
        $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1200,
            y: -1,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutQuart,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2
        }
    };

    c["Shift LR"] = {
        $Duration: 1200,
        x: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1200,
            x: -1,
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutQuart,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2
        }
    };

    c["Return TB"] = {
        $Duration: 1200,
        y: -1,
        $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
            $Duration: 1200,
            y: -1,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutQuart,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2,
            $ZIndex: -10,
            $Shift: -100
        }
    };

    c["Return LR"] = {
        $Duration: 1200,
        x: 1,
        $Delay: 40,
        $Cols: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
            $Duration: 1200,
            x: 1,
            $Delay: 40,
            $Cols: 6,
            $Formation: $JssorSlideshowFormations$.$FormationStraight,
            $Easing: {
                $Top: $JssorEasing$.$EaseInOutQuart,
                $Opacity: $JssorEasing$.$EaseLinear
            },
            $Opacity: 2,
            $ZIndex: -10,
            $Shift: -100
        }
    };

    c["Rotate Axis down"] = {
        $Duration: 1500,
        x: -0.1,
        y: -0.7,
        $Rotate: 0.1,
        $During: {
            $Left: [0.6, 0.4],
            $Top: [0.6, 0.4],
            $Rotate: [0.6, 0.4]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Top: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Brother: {
            $Duration: 1000,
            x: 0.2,
            y: 0.5,
            $Rotate: -0.1,
            $Easing: {
                $Left: $JssorEasing$.$EaseInQuad,
                $Top: $JssorEasing$.$EaseInQuad,
                $Opacity: $JssorEasing$.$EaseLinear,
                $Rotate: $JssorEasing$.$EaseInQuad
            },
            $Opacity: 2
        }
    };

    c["Extrude Replace"] = {
        $Duration: 1600,
        x: -0.2,
        $Delay: 40,
        $Cols: 12,
        $During: {
            $Left: [0.4, 0.6]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Opacity: $JssorEasing$.$EaseInOutQuad
        },
        $Opacity: 2,
        $Outside: true,
        $Round: {
            $Top: 0.5
        },
        $Brother: {
            $Duration: 1000,
            x: 0.2,
            $Delay: 40,
            $Cols: 12,
            $Formation: $JssorSlideshowFormations$.$FormationStraight,
            $Assembly: 1028,
            $Easing: {
                $Left: $JssorEasing$.$EaseInOutExpo,
                $Opacity: $JssorEasing$.$EaseInOutQuad
            },
            $Opacity: 2,
            $Round: {
                $Top: 0.5
            }
        }
    };

    c["------------ Fade Effects --------------"] = null;

    c["Fade"] = {
        $Duration: 1200,
        $Opacity: 2
    };

    c["Fade in L"] = {
        $Duration: 1200,
        x: 0.3,
        $During: {
            $Left: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade in R"] = {
        $Duration: 1200,
        x: -0.3,
        $During: {
            $Left: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade in T"] = {
        $Duration: 1200,
        y: 0.3,
        $During: {
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade in B"] = {
        $Duration: 1200,
        y: -0.3,
        $During: {
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade in LR"] = {
        $Duration: 1200,
        x: 0.3,
        $Cols: 2,
        $During: {
            $Left: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade in LR Chess"] = {
        $Duration: 1200,
        y: 0.3,
        $Cols: 2,
        $During: {
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade in TB"] = {
        $Duration: 1200,
        y: 0.3,
        $Rows: 2,
        $During: {
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Row: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade in TB Chess"] = {
        $Duration: 1200,
        x: 0.3,
        $Rows: 2,
        $During: {
            $Left: [0.3, 0.7]
        },
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade in Corners"] = {
        $Duration: 1200,
        x: 0.3,
        y: 0.3,
        $Cols: 2,
        $Rows: 2,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade out L"] = {
        $Duration: 1200,
        x: 0.3,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade out R"] = {
        $Duration: 1200,
        x: -0.3,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade out T"] = {
        $Duration: 1200,
        y: 0.3,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade out B"] = {
        $Duration: 1200,
        y: -0.3,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade out LR"] = {
        $Duration: 1200,
        x: 0.3,
        $Cols: 2,
        $SlideOut: true,
        $ChessMode: {
            $Column: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade out LR Chess"] = {
        $Duration: 1200,
        y: -0.3,
        $Cols: 2,
        $SlideOut: true,
        $ChessMode: {
            $Column: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade out TB"] = {
        $Duration: 1200,
        y: 0.3,
        $Rows: 2,
        $SlideOut: true,
        $ChessMode: {
            $Row: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade out TB Chess"] = {
        $Duration: 1200,
        x: -0.3,
        $Rows: 2,
        $SlideOut: true,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade out Corners"] = {
        $Duration: 1200,
        x: 0.3,
        y: 0.3,
        $Cols: 2,
        $Rows: 2,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Fade Fly in L"] = {
        $Duration: 1200,
        x: 0.3,
        $During: {
            $Left: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly in R"] = {
        $Duration: 1200,
        x: -0.3,
        $During: {
            $Left: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly in T"] = {
        $Duration: 1200,
        y: 0.3,
        $During: {
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly in B"] = {
        $Duration: 1200,
        y: -0.3,
        $During: {
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly in LR"] = {
        $Duration: 1200,
        x: 0.3,
        $Cols: 2,
        $During: {
            $Left: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly in LR Chess"] = {
        $Duration: 1200,
        y: 0.3,
        $Cols: 2,
        $During: {
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly in TB"] = {
        $Duration: 1200,
        y: 0.3,
        $Rows: 2,
        $During: {
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Row: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly in TB Chess"] = {
        $Duration: 1200,
        x: 0.3,
        $Rows: 2,
        $During: {
            $Left: [0.3, 0.7]
        },
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly in Corners"] = {
        $Duration: 1200,
        x: 0.3,
        y: 0.3,
        $Cols: 2,
        $Rows: 2,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly out L"] = {
        $Duration: 1200,
        x: 0.3,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly out R"] = {
        $Duration: 1200,
        x: -0.3,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly out T"] = {
        $Duration: 1200,
        y: 0.3,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly out B"] = {
        $Duration: 1200,
        y: -0.3,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };

    c["Fade Fly out LR"] = {
        $Duration: 1200,
        x: 0.3,
        $Cols: 2,
        $SlideOut: true,
        $ChessMode: {
            $Column: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly out LR Chess"] = {
        $Duration: 1200,
        y: 0.3,
        $Cols: 2,
        $SlideOut: true,
        $ChessMode: {
            $Column: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly out TB"] = {
        $Duration: 1200,
        y: 0.3,
        $Rows: 2,
        $SlideOut: true,
        $ChessMode: {
            $Row: 12
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly out TB Chess"] = {
        $Duration: 1200,
        x: 0.3,
        $Rows: 2,
        $SlideOut: true,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Fly out Corners"] = {
        $Duration: 1200,
        x: 0.3,
        y: 0.3,
        $Cols: 2,
        $Rows: 2,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true
    };


    c["Fade Clip in H"] = {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 3,
        $Assembly: 260,
        $Easing: {
            $Clip: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade Clip in V"] = {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 12,
        $Assembly: 260,
        $Easing: {
            $Clip: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade Clip out H"] = {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 3,
        $SlideOut: true,
        $Assembly: 260,
        $Easing: {
            $Clip: $JssorEasing$.$EaseOutCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade Clip out V"] = {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 12,
        $SlideOut: true,
        $Assembly: 260,
        $Easing: {
            $Clip: $JssorEasing$.$EaseOutCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Fade Stairs"] = {
        $Duration: 800,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Opacity: 2
    };

    c["Fade Random"] = {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Opacity: 2
    };

    c["Fade Swirl"] = {
        $Duration: 800,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Opacity: 2
    };

    c["Fade ZigZag"] = {
        $Duration: 800,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Opacity: 2
    };

    c["------------ Swing Outside Effects --------------"] = null;

    c["Swing Outside in Stairs"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside in ZigZag"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside in Swirl"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside in Random"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside in Random Chess"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 3,
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };


    c["Swing Outside in Square"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside out Stairs"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside out ZigZag"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside out Swirl"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside out Random"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Outside out Random Chess"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 3,
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };


    c["Swing Outside out Square"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["------------ Swing Inside Effects --------------"] = null;

    c["Swing Inside in Stairs"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Inside in ZigZag"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Inside in Swirl"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Inside in Random"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Inside in Random Chess"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 3,
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };


    c["Swing Inside in Square"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Inside out ZigZag"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["Swing Inside out Swirl"] = {
        $Duration: 1200,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 1.3,
            $Top: 2.5
        }
    };

    c["------------ Dodge Dance Outside Effects --------------"] = null;

    c["Dodge Dance Outside in Stairs"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside in Swirl"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside in ZigZag"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside in Random"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside in Random Chess"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Dance Outside in Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside out Stairs"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside out Swirl"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside out ZigZag"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside out Random"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Outside out Random Chess"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Dance Outside out Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["------------ Dodge Dance Inside Effects --------------"] = null;

    c["Dodge Dance Inside in Stairs"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside in Swirl"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside in ZigZag"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside in Random"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside in Random Chess"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Dance Inside in Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside out Stairs"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside out Swirl"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside out ZigZag"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.1, 0.9],
            $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside out Random"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Dance Inside out Random Chess"] = {
        $Duration: 1500,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Dance Inside out Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["------------ Dodge Pet Outside Effects --------------"] = null;

    c["Dodge Pet Outside in Stairs"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside in Swirl"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside in ZigZag"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside in Random"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside in Random Chess"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Pet Outside in Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside out Stairs"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside out Swirl"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside out ZigZag"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside out Random"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Outside out Random Chess"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Pet Outside out Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["------------ Dodge Pet Inside Effects --------------"] = null;

    c["Dodge Pet Inside in Stairs"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside in Swirl"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside in ZigZag"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside in Random"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside in Random Chess"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Pet Inside in Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside out Stairs"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside out Swirl"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside out ZigZag"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside out Random"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["Dodge Pet Inside out Random Chess"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseLinear
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };


    c["Dodge Pet Inside out Square"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Top: $JssorEasing$.$EaseInWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $Round: {
            $Left: 0.8,
            $Top: 2.5
        }
    };

    c["------------ Dodge Outside Effects --------------"] = null;

    c["Dodge Outside out Stairs"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside out Swirl"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside out ZigZag"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside out Random"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside out Random Chess"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Assembly: 260,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };


    c["Dodge Outside out Square"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside in Stairs"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside in Swirl"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside in ZigZag"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside in Random"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Outside in Random Chess"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Assembly: 260,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };


    c["Dodge Outside in Square"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Outside: true,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["------------ Dodge Inside Effects --------------"] = null;

    c["Dodge Inside out Stairs"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out Swirl"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out ZigZag"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out Random"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out Random Chess"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Assembly: 260,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };


    c["Dodge Inside out Square"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in Stairs"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in Swirl"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in ZigZag"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in Random"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in Random Chess"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Assembly: 260,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };


    c["Dodge Inside in Square"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8]
        },
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in TL"] = {
        $Duration: 1200,
        x: 0.3,
        y: 0.3,
        $Delay: 60,
        $Zoom: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in TR"] = {
        $Duration: 1200,
        x: -0.3,
        y: 0.3,
        $Delay: 60,
        $Zoom: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in BL"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 60,
        $Zoom: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside in BR"] = {
        $Duration: 1200,
        x: -0.3,
        y: -0.3,
        $Delay: 60,
        $Zoom: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out TL"] = {
        $Duration: 1200,
        x: 0.3,
        y: 0.3,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out TR"] = {
        $Duration: 1200,
        x: -0.3,
        y: 0.3,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out BL"] = {
        $Duration: 1200,
        x: 0.3,
        y: -0.3,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["Dodge Inside out BR"] = {
        $Duration: 1200,
        x: -0.3,
        y: -0.3,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInJump,
            $Top: $JssorEasing$.$EaseInJump,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Left: 0.8,
            $Top: 0.8
        }
    };

    c["------------ Flutter Outside Effects --------------"] = null;

    c["Flutter Outside in"] = {
        $Duration: 1800,
        x: 1,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 0.8
        }
    };

    c["Flutter Outside in Wind"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Outside in Swirl"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Outside in Column"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 150,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true,
        $Round: {
            $Top: 2
        }
    };

    c["Flutter Outside out"] = {
        $Duration: 1800,
        x: 1,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 0.8
        }
    };

    c["Flutter Outside out Wind"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Outside out Swirl"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Outside: true,
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Outside out Column"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 150,
        $Cols: 12,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Outside: true,
        $Round: {
            $Top: 2
        }
    };

    c["------------ Flutter Inside Effects --------------"] = null;

    c["Flutter Inside in"] = {
        $Duration: 1800,
        x: 1,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Round: {
            $Top: 0.8
        }
    };

    c["Flutter Inside in Wind"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Inside in Swirl"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Inside in Column"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 150,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Top: 2
        }
    };

    c["Flutter Inside out"] = {
        $Duration: 1800,
        x: 1,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Round: {
            $Top: 0.8
        }
    };

    c["Flutter Inside out Wind"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Inside out Swirl"] = {
        $Duration: 1800,
        x: 1,
        y: 0.2,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
            $Left: [0.3, 0.7],
            $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutSine,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $Round: {
            $Top: 1.3
        }
    };

    c["Flutter Inside out Column"] = {
        $Duration: 1500,
        x: 0.2,
        y: -0.1,
        $Delay: 150,
        $Cols: 12,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Top: 2
        }
    };

    c["------------ Rotate Effects --------------"] = null;

    c["Rotate VDouble+ in"] = {
        $Duration: 1200,
        x: -1,
        y: 2,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };


    c["Rotate HDouble+ in"] = {
        $Duration: 1200,
        x: 2,
        y: 1,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate VDouble- in"] = {
        $Duration: 1200,
        x: -0.5,
        y: 1,
        $Rows: 2,
        $Zoom: 1,
        $Rotate: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate HDouble- in"] = {
        $Duration: 1200,
        x: 0.5,
        y: 0.3,
        $Cols: 2,
        $Zoom: 1,
        $Rotate: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate VDouble+ out"] = {
        $Duration: 1000,
        x: -1,
        y: 2,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.85
        }
    };


    c["Rotate HDouble+ out"] = {
        $Duration: 1000,
        x: 4,
        y: 2,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };


    c["Rotate VDouble- out"] = {
        $Duration: 1000,
        x: -0.5,
        y: 1,
        $Rows: 2,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate HDouble- out"] = {
        $Duration: 1000,
        x: 0.5,
        y: 0.3,
        $Cols: 2,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate VFork+ in"] = {
        $Duration: 1200,
        x: -4,
        y: 2,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 28
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate HFork+ in"] = {
        $Duration: 1200,
        x: 1,
        y: 2,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 19
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };


    c["Rotate VFork+ out"] = {
        $Duration: 1000,
        x: -3,
        y: 1,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 28
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };


    c["Rotate HFork+ out"] = {
        $Duration: 1000,
        x: 1,
        y: 2,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 19
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };


    c["Rotate Zoom+ in"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in L"] = {
        $Duration: 1200,
        x: 4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in R"] = {
        $Duration: 1200,
        x: -4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in T"] = {
        $Duration: 1200,
        y: 4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in B"] = {
        $Duration: 1200,
        y: -4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in TL"] = {
        $Duration: 1200,
        x: 4,
        y: 4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in TR"] = {
        $Duration: 1200,
        x: -4,
        y: 4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in BL"] = {
        $Duration: 1200,
        x: 4,
        y: -4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ in BR"] = {
        $Duration: 1200,
        x: -4,
        y: -4,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.7
        }
    };

    c["Rotate Zoom+ out"] = {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out L"] = {
        $Duration: 1000,
        x: 4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out R"] = {
        $Duration: 1000,
        x: -4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out T"] = {
        $Duration: 1000,
        y: 4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out B"] = {
        $Duration: 1000,
        y: -4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out TL"] = {
        $Duration: 1000,
        x: 4,
        y: 4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out TR"] = {
        $Duration: 1000,
        x: -4,
        y: 4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out BL"] = {
        $Duration: 1000,
        x: 4,
        y: -4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom+ out BR"] = {
        $Duration: 1000,
        x: -4,
        y: -4,
        $Zoom: 11,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.8
        }
    };

    c["Rotate Zoom- in"] = {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in L"] = {
        $Duration: 1200,
        x: 0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Left: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in R"] = {
        $Duration: 1200,
        x: -0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Left: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in T"] = {
        $Duration: 1200,
        y: 0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Top: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in B"] = {
        $Duration: 1200,
        y: -0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Top: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in TL"] = {
        $Duration: 1200,
        x: 0.6,
        y: 0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in TR"] = {
        $Duration: 1200,
        x: -0.6,
        y: 0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in BL"] = {
        $Duration: 1200,
        x: 0.6,
        y: -0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- in BR"] = {
        $Duration: 1200,
        x: -0.6,
        y: -0.6,
        $Zoom: 1,
        $Rotate: 1,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8],
            $Zoom: [0.2, 0.8],
            $Rotate: [0.2, 0.8]
        },
        $Easing: {
            $Zoom: $JssorEasing$.$EaseSwing,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out"] = {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out L"] = {
        $Duration: 1000,
        x: 0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out R"] = {
        $Duration: 1000,
        x: -0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out T"] = {
        $Duration: 1000,
        y: 0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out B"] = {
        $Duration: 1000,
        y: -0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out TL"] = {
        $Duration: 1000,
        x: 0.5,
        y: 0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out TR"] = {
        $Duration: 1000,
        x: -0.5,
        y: 0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out BL"] = {
        $Duration: 1000,
        x: 0.5,
        y: -0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["Rotate Zoom- out BR"] = {
        $Duration: 1000,
        x: -0.5,
        y: -0.5,
        $Zoom: 1,
        $Rotate: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
            $Rotate: 0.5
        }
    };

    c["------------ Zoom Effects --------------"] = null;

    c["Zoom VDouble+ in"] = {
        $Duration: 1200,
        y: 2,
        $Rows: 2,
        $Zoom: 11,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["Zoom HDouble+ in"] = {
        $Duration: 1200,
        x: 4,
        $Cols: 2,
        $Zoom: 11,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["Zoom VDouble- in"] = {
        $Duration: 1200,
        y: 1,
        $Rows: 2,
        $Zoom: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Zoom HDouble- in"] = {
        $Duration: 1200,
        x: 0.5,
        $Cols: 2,
        $Zoom: 1,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Zoom VDouble+ out"] = {
        $Duration: 1200,
        y: 2,
        $Rows: 2,
        $Zoom: 11,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Zoom HDouble+ out"] = {
        $Duration: 1200,
        x: 4,
        $Cols: 2,
        $Zoom: 11,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Zoom VDouble- out"] = {
        $Duration: 1200,
        y: 1,
        $Rows: 2,
        $Zoom: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Row: 15
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Zoom HDouble- out"] = {
        $Duration: 1200,
        x: 0.5,
        $Cols: 2,
        $Zoom: 1,
        $SlideOut: true,
        $Assembly: 2049,
        $ChessMode: {
            $Column: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Zoom+ in"] = {
        $Duration: 1000,
        $Zoom: 11,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in L"] = {
        $Duration: 1000,
        x: 4,
        $Zoom: 11,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in R"] = {
        $Duration: 1000,
        x: -4,
        $Zoom: 11,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2,
        $Round: {
            $Top: 2.5
        }
    };

    c["Zoom+ in T"] = {
        $Duration: 1000,
        y: 4,
        $Zoom: 11,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in B"] = {
        $Duration: 1000,
        y: -4,
        $Zoom: 11,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in TL"] = {
        $Duration: 1000,
        x: 4,
        y: 4,
        $Zoom: 11,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in TR"] = {
        $Duration: 1000,
        x: -4,
        y: 4,
        $Zoom: 11,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in BL"] = {
        $Duration: 1000,
        x: 4,
        y: -4,
        $Zoom: 11,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ in BR"] = {
        $Duration: 1000,
        x: -4,
        y: -4,
        $Zoom: 11,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom+ out"] = {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out L"] = {
        $Duration: 1000,
        x: 4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out R"] = {
        $Duration: 1000,
        x: -4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out T"] = {
        $Duration: 1000,
        y: 4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out B"] = {
        $Duration: 1000,
        y: -4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out TL"] = {
        $Duration: 1000,
        x: 4,
        y: 4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out TR"] = {
        $Duration: 1000,
        x: -4,
        y: 4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out BL"] = {
        $Duration: 1000,
        x: 4,
        y: -4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom+ out BR"] = {
        $Duration: 1000,
        x: -4,
        y: -4,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- in"] = {
        $Duration: 1200,
        $Zoom: 1,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in L"] = {
        $Duration: 1200,
        x: 0.6,
        $Zoom: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in R"] = {
        $Duration: 1200,
        x: -0.6,
        $Zoom: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in T"] = {
        $Duration: 1200,
        y: 0.6,
        $Zoom: 1,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in B"] = {
        $Duration: 1200,
        y: -0.6,
        $Zoom: 1,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in TL"] = {
        $Duration: 1200,
        x: 0.6,
        y: 0.6,
        $Zoom: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in TR"] = {
        $Duration: 1200,
        x: -0.6,
        y: 0.6,
        $Zoom: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in BL"] = {
        $Duration: 1200,
        x: 0.6,
        y: -0.6,
        $Zoom: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- in BR"] = {
        $Duration: 1200,
        x: -0.6,
        y: -0.6,
        $Zoom: 1,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Zoom: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Zoom- out"] = {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out L"] = {
        $Duration: 1000,
        x: 1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out R"] = {
        $Duration: 1000,
        x: -1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out T"] = {
        $Duration: 1000,
        y: 1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out B"] = {
        $Duration: 1000,
        y: -1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out TL"] = {
        $Duration: 1000,
        x: 1,
        y: 1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out TR"] = {
        $Duration: 1000,
        x: -1,
        y: 1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out BL"] = {
        $Duration: 1000,
        x: 1,
        y: -1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Zoom- out BR"] = {
        $Duration: 1000,
        x: -1,
        y: -1,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInExpo,
            $Top: $JssorEasing$.$EaseInExpo,
            $Zoom: $JssorEasing$.$EaseInExpo,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["------------ Collapse Effects --------------"] = null;

    c["Collapse Stairs"] = {
        $Duration: 1000,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2049,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Swirl"] = {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Square"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Rectangle Cross"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Rectangle"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Cross"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Circle"] = {
        $Duration: 800,
        $Delay: 200,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 2049
    };

    c["Collapse ZigZag"] = {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["Collapse Random"] = {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Easing: $JssorEasing$.$EaseOutQuad
    };

    c["------------ Compound Effects --------------"] = null;

    c["Clip & Chess in"] = {
        $Duration: 1200,
        y: -1,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Top: [0.5, 0.5],
            $Clip: [0, 0.5]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Column: 12
        },
        $ScaleClip: 0.5
    };


    c["Clip & Chess out"] = {
        $Duration: 1200,
        y: -1,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
            $Top: [0.5, 0.5],
            $Clip: [0, 0.5]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Column: 12
        },
        $ScaleClip: 0.5
    };


    c["Clip & Oblique Chess in"] = {
        $Duration: 1200,
        x: -1,
        y: -1,
        $Cols: 6,
        $Rows: 6,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8],
            $Clip: [0, 0.2]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleClip: 0.5
    };


    c["Clip & Oblique Chess out"] = {
        $Duration: 1200,
        x: -1,
        y: -1,
        $Cols: 6,
        $Rows: 6,
        $Clip: 15,
        $During: {
            $Left: [0.2, 0.8],
            $Top: [0.2, 0.8],
            $Clip: [0, 0.2]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Column: 15,
            $Row: 15
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleClip: 0.5
    };


    c["Clip & Wave in"] = {
        $Duration: 4000,
        x: -1,
        y: 0.45,
        $Delay: 80,
        $Cols: 12,
        $Clip: 15,
        $During: {
            $Left: [0.35, 0.65],
            $Top: [0.35, 0.65],
            $Clip: [0, 0.15]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 2049,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleClip: 0.7,
        $Round: {
            $Top: 4
        }
    };

    c["Clip & Wave out"] = {
        $Duration: 4000,
        x: -1,
        y: 0.45,
        $Delay: 80,
        $Cols: 12,
        $Clip: 15,
        $During: {
            $Left: [0.35, 0.65],
            $Top: [0.35, 0.65],
            $Clip: [0, 0.15]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 2049,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleClip: 0.7,
        $Round: {
            $Top: 4
        }
    };

    c["Clip & Jump in"] = {
        $Duration: 4000,
        x: -1,
        y: 0.7,
        $Delay: 80,
        $Cols: 12,
        $Clip: 11,
        $Move: true,
        $During: {
            $Left: [0.35, 0.65],
            $Top: [0.35, 0.65],
            $Clip: [0, 0.1]
        },
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 2049,
        $Easing: {
            $Left: $JssorEasing$.$EaseOutQuad,
            $Top: $JssorEasing$.$EaseOutJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleClip: 0.7,
        $Round: {
            $Top: 4
        }
    };

    c["Clip & Jump out"] = {
        $Duration: 4000,
        x: -1,
        y: 0.7,
        $Delay: 80,
        $Cols: 12,
        $Clip: 11,
        $Move: true,
        $During: {
            $Left: [0.35, 0.65],
            $Top: [0.35, 0.65],
            $Clip: [0, 0.1]
        },
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 2049,
        $Easing: {
            $Left: $JssorEasing$.$EaseOutQuad,
            $Top: $JssorEasing$.$EaseOutJump,
            $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleClip: 0.7,
        $Round: {
            $Top: 4
        }
    };

    c["------------ Expand Effects --------------"] = null;

    c["Expand Stairs"] = {
        $Duration: 1000,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand Straight"] = {
        $Duration: 1000,
        $Cols: 3,
        $Rows: 2,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: $JssorEasing$.$EaseInBounce
    };

    c["Expand Swirl"] = {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand Square"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand Rectangle Cross"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand Rectangle"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand Cross"] = {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand ZigZag"] = {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Expand Random"] = {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["------------ Stripe Effects --------------"] = null;

    c["Dominoes Stripe"] = {
        $Duration: 2000,
        y: -1,
        $Delay: 60,
        $Cols: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: $JssorEasing$.$EaseOutJump,
        $Round: {
            $Top: 1.5
        }
    };

    c["Extrude out Stripe"] = {
        $Duration: 1000,
        x: -0.2,
        $Delay: 40,
        $Cols: 12,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Opacity: $JssorEasing$.$EaseInOutQuad
        },
        $Opacity: 2,
        $Outside: true,
        $Round: {
            $Top: 0.5
        }
    };

    c["Extrude in Stripe"] = {
        $Duration: 1000,
        x: 0.2,
        $Delay: 40,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Opacity: $JssorEasing$.$EaseInOutQuad
        },
        $Opacity: 2,
        $Outside: true,
        $Round: {
            $Top: 0.5
        }
    };

    c["Horizontal Blind Stripe"] = {
        $Duration: 400,
        $Delay: 100,
        $Rows: 7,
        $Clip: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraight
    };

    c["Vertical Blind Stripe"] = {
        $Duration: 400,
        $Delay: 100,
        $Cols: 10,
        $Clip: 2,
        $Formation: $JssorSlideshowFormations$.$FormationStraight
    };

    c["Horizontal Stripe"] = {
        $Duration: 1000,
        $Rows: 6,
        $Clip: 4
    };

    c["Vertical Stripe"] = {
        $Duration: 1000,
        $Cols: 8,
        $Clip: 1
    };

    c["Horizontal Moving Stripe"] = {
        $Duration: 1000,
        $Rows: 6,
        $Clip: 4,
        $Move: true
    };

    c["Vertical Moving Stripe"] = {
        $Duration: 1000,
        $Cols: 8,
        $Clip: 1,
        $Move: true
    };

    c["Horizontal Fade Stripe"] = {
        $Duration: 600,
        $Delay: 100,
        $Rows: 7,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Opacity: 2
    };

    c["Vertical Fade Stripe"] = {
        $Duration: 600,
        $Delay: 100,
        $Cols: 10,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Opacity: 2
    };

    c["Horizontal Fly Stripe"] = {
        $Duration: 800,
        x: 1,
        $Delay: 80,
        $Rows: 8,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Vertical Fly Stripe"] = {
        $Duration: 800,
        y: 1,
        $Delay: 80,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Horizontal Chess Stripe"] = {
        $Duration: 1000,
        x: -1,
        $Rows: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Row: 3
        }
    };


    c["Vertical Chess Stripe"] = {
        $Duration: 1000,
        y: -1,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
            $Column: 12
        }
    };


    c["Horizontal Random Fade Stripe"] = {
        $Duration: 600,
        $Delay: 80,
        $Rows: 6,
        $Opacity: 2
    };

    c["Vertical Random Fade Stripe"] = {
        $Duration: 600,
        $Delay: 80,
        $Cols: 10,
        $Opacity: 2
    };

    c["Horizontal Bounce Stripe"] = {
        $Duration: 800,
        $Delay: 150,
        $Rows: 5,
        $Clip: 8,
        $Move: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 264,
        $Easing: $JssorEasing$.$EaseInBounce
    };

    c["Vertical Bounce Stripe"] = {
        $Duration: 800,
        $Delay: 150,
        $Cols: 10,
        $Clip: 1,
        $Move: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 264,
        $Easing: $JssorEasing$.$EaseInBounce
    };

    c["------------ Wave out Effects --------------"] = null;

    c["Wave out"] = {
        $Duration: 1500,
        y: -0.5,
        $Delay: 60,
        $Cols: 12,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: $JssorEasing$.$EaseInWave,
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out Eagle"] = {
        $Duration: 1500,
        y: -0.5,
        $Delay: 60,
        $Cols: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Easing: $JssorEasing$.$EaseInWave,
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out Swirl"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out ZigZag"] = {
        $Duration: 1500,
        x: 1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };


    c["Wave out Square"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out Rectangle"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out Circle"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out Cross"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave out Rectangle Cross"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["------------ Wave in Effects --------------"] = null;

    c["Wave in"] = {
        $Duration: 1500,
        y: -0.5,
        $Delay: 60,
        $Cols: 12,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: $JssorEasing$.$EaseInWave,
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in Eagle"] = {
        $Duration: 1500,
        y: -0.5,
        $Delay: 60,
        $Cols: 15,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Easing: $JssorEasing$.$EaseInWave,
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in Swirl"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in ZigZag"] = {
        $Duration: 1500,
        x: 1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };


    c["Wave in Square"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in Rectangle"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in Circle"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in Cross"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Wave in Rectangle Cross"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInWave
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["------------ Jump out Effects --------------"] = null;

    c["Jump out Straight"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump out Swirl"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump out ZigZag"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump out Square"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump out Square with Chess"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };


    c["Jump out Rectangle"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 800,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump out Circle"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump out Rectangle Cross"] = {
        $Duration: 1500,
        x: -1,
        y: 0.5,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseLinear,
            $Top: $JssorEasing$.$EaseOutJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["------------ Jump in Effects --------------"] = null;

    c["Jump in Straight"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump in Swirl"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump in ZigZag"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump in Square"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump in Square with Chess"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };


    c["Jump in Rectangle"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 800,
        $Cols: 8,
        $Rows: 4,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump in Circle"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["Jump in Rectangle Cross"] = {
        $Duration: 1500,
        x: -1,
        y: -0.5,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
            $Left: $JssorEasing$.$EaseSwing,
            $Top: $JssorEasing$.$EaseInJump
        },
        $Round: {
            $Top: 1.5
        }
    };

    c["------------ Parabola Effects --------------"] = null;

    c["Parabola Swirl in"] = {
        $Duration: 600,
        x: -1,
        y: 1,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 264,
        $Easing: {
            $Top: $JssorEasing$.$EaseInQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Parabola Swirl out"] = {
        $Duration: 600,
        x: -1,
        y: 1,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 264,
        $Easing: {
            $Top: $JssorEasing$.$EaseInQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Parabola ZigZag in"] = {
        $Duration: 600,
        x: 1,
        y: 1,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Parabola ZigZag out"] = {
        $Duration: 600,
        x: 1,
        y: 1,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
            $Row: 3
        },
        $Easing: {
            $Top: $JssorEasing$.$EaseInQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };


    c["Parabola Stairs in"] = {
        $Duration: 600,
        x: -1,
        y: 1,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInQuart,
            $Top: $JssorEasing$.$EaseInQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["Parabola Stairs out"] = {
        $Duration: 600,
        x: -1,
        y: 1,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
            $Left: $JssorEasing$.$EaseInQuart,
            $Top: $JssorEasing$.$EaseInQuart,
            $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
    };

    c["------------ Float Effects --------------"] = null;

    c["Float Right Random"] = {
        $Duration: 600,
        x: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Float up Random"] = {
        $Duration: 600,
        y: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Float up Random with Chess"] = {
        $Duration: 600,
        x: 1,
        y: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["Float Right ZigZag"] = {
        $Duration: 600,
        x: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Float up ZigZag"] = {
        $Duration: 600,
        y: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 264,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Float up ZigZag with Chess"] = {
        $Duration: 600,
        x: -1,
        y: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 1028,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["Float Right Swirl"] = {
        $Duration: 600,
        x: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Float up Swirl"] = {
        $Duration: 600,
        y: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2049,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Float up Swirl with Chess"] = {
        $Duration: 600,
        x: 1,
        y: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["------------ Fly Effects --------------"] = null;

    c["Fly Right Random"] = {
        $Duration: 600,
        x: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Fly up Random"] = {
        $Duration: 600,
        y: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Fly up Random with Chess"] = {
        $Duration: 600,
        x: -1,
        y: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["Fly Right ZigZag"] = {
        $Duration: 600,
        x: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Fly up ZigZag"] = {
        $Duration: 600,
        y: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 264,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Fly up ZigZag with Chess"] = {
        $Duration: 600,
        x: 1,
        y: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 1028,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["Fly Right Swirl"] = {
        $Duration: 600,
        x: 1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Fly up Swirl"] = {
        $Duration: 600,
        y: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2049,
        $Easing: {
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };

    c["Fly up Swirl with Chess"] = {
        $Duration: 600,
        x: -1,
        y: -1,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $ChessMode: {
            $Column: 3,
            $Row: 12
        },
        $Easing: {
            $Left: $JssorEasing$.$EaseInCubic,
            $Top: $JssorEasing$.$EaseInCubic,
            $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
    };


    c["------------ Stone Effects --------------"] = null;

    c["Slide Down"] = {
        $Duration: 500,
        y: 1,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Slide Right"] = {
        $Duration: 400,
        x: 1,
        $Easing: $JssorEasing$.$EaseInQuad
    };

    c["Bounce Down"] = {
        $Duration: 1000,
        y: 1,
        $Easing: $JssorEasing$.$EaseInBounce
    };

    c["Bounce Right"] = {
        $Duration: 1000,
        x: 1,
        $Easing: $JssorEasing$.$EaseInBounce
    };


    var jssor_slider1;

    var total_time = 0;

    init_jssor_slider1 = function(index) {
        // CREATE SLIDESHOW CONTAINER AND CHANGE TRANSITION CONTAINER
        $('#slideshow_container').attr("class", "col-sm-10 col-md-10 col-centered");
        $('#slideshow_container').html('<div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 800px;' +
            'height: 456px; background: #24262e; overflow: hidden; float: left; ">' +
            '<div u="loading" style="position: absolute; top: 0px; left: 0px;">' +
            '<div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;' +
            'background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">' +
            '</div>' +
            '<div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat 50% 50%;' +
            'top: 0px; left: 0px;width: 100%;height:100%;">' +
            '</div>' +
            '</div>' +
            '<div id="slides" u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 800px; height: 356px; overflow: hidden;">' +
            '</div>' +
            '<div u="thumbnavigator" class="jssort01" style="left: 0px; bottom: 0px;">' +
            '<div u="slides" style="cursor: default;">' +
            '<div u="prototype" class="p">' +
            '<div class=w>' +
            '<div u="thumbnailtemplate" class="t"></div>' +
            '</div>' +
            '<div class=c></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<a style="display: none" href="http://www.jssor.com">Carousel Slider</a>' +
            '</div>');
        $('#control_container').attr("class", "col-md-2 col-sm-2");
        $('#control_container').html('<div class="btn-group-vertical" id="btnGroup" style="margin: 0 auto;">' +
            '<button id="btnPlayPause" type="button" class="btn btn-success center-block" onclick="playPause()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-pause pull-left"></span>PAUSE</button>' +
            '<button id="btnPlayAgain" type="button" class="btn btn-info center-block" onclick="rePlay()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-repeat pull-left"></span>REPLAY</button>' +
            '<button id="btnChangeTransition" type="button" class="btn btn-primary center-block" onclick="changeTransition()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-wrench pull-left"></span>ĐỔI HIỆU ỨNG</button>' +
            '<button id="addMusic" type="button" class="btn btn-warning center-block" onclick="addMusic()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-music pull-left"></span>THÊM NHẠC</button>' +
            '</div>');
        //END CREATE

        //CREATE GALLERY
        createGallery();
        //END CREATE

        //CREATE TRANSITION FOR SLIDESHOW
        var SlideshowTransitions = [];
        for (var i = index; i < allImageJson.length; i++) {
            SlideshowTransitions.push(c[allImageJson[i].SlideShowTransition]);

        }
        for (var j = 0; j < index; j++) {
            SlideshowTransitions.push(c[allImageJson[j].SlideShowTransition]);
        }

        for (var i = 0; i < allImageJson.length; i++) {
            if (SlideshowTransitions[i] != null)
                total_time = total_time + SlideshowTransitions[i].$Duration + 1500;
            else total_time = total_time + 2000;
        }

        console.log(total_time);


        var _CaptionTransitions = [];
        _CaptionTransitions["CLIP|LR"] = {
                $Duration: 900,
                $Clip: 3,
                $Easing: {
                    $Clip: $JssorEasing$.$EaseInOutCubic
                },
                $Opacity: 2
        };
        _CaptionTransitions["L|IB"] = {
                $Duration: 1200,
                x: 0.6,
                $Easing: {
                    $Left: $JssorEasing$.$EaseInOutBack
                },
                $Opacity: 2
            };
        var options = {
            $FillMode: 1,
            $Loop: 1,
            $StartIndex: index,
            $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $SlideDuration: 500, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

            $AutoPlayInterval: 1500, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 0, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $DragOrientation: 0, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $SlideshowOptions: { //[Optional] Options to specify and enable slideshow or not
                $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
                $Transitions: SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
            },
            $CaptionSliderOptions: { //[Optional] Options which specifies how to animate caption
                    $Class: $JssorCaptionSlider$, //[Required] Class to create instance to animate caption
                    $CaptionTransitions: _CaptionTransitions, //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
                    $PlayInMode: 1, //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
                    $PlayOutMode: 3 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
            },
            $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
                $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 1, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 2, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
            },

            $ThumbnailNavigatorOptions: { //[Optional] Options to specify and enable thumbnail navigator or not
                $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $Loop: 1,
                $ActionMode: 1, //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                $SpacingX: 8, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                $DisplayPieces: 10, //[Optional] Number of pieces to display, default value is 1
                $ParkingPosition: 360 //[Optional] The offset position to park thumbnail
            }
        };

        jssor_slider1 = new $JssorSlider$("slider1_container", options);

        function ScaleSlider() {
                var parentWidth = $('#slider1_container').parent().width();
                if (parentWidth) {
                    jssor_slider1.$ScaleWidth(parentWidth);
                } else
                    window.setTimeout(ScaleSlider, 30);
            }
            //Scale slider after document ready
        ScaleSlider();

        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
        return jssor_slider1;
        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizes

        //responsive code end

        //API $Play, $Pause, $PlayTo, $GoTo, $Next, $Prev function BEGIN


    };


    createMainSlideShow = function(index) {
        // CREATE SLIDESHOW CONTAINER AND CHANGE TRANSITION CONTAINER

        $('#slideshow_container').html('<div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 800px;' +
            'height: 456px; background: #24262e; overflow: hidden; float: left; ">' +
            '<div u="loading" style="position: absolute; top: 0px; left: 0px;">' +
            '<div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;' +
            'background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">' +
            '</div>' +
            '<div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat 50% 50%;' +
            'top: 0px; left: 0px;width: 100%;height:100%;">' +
            '</div>' +
            '</div>' +
            '<div id="slides" u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 800px; height: 356px; overflow: hidden;">' +
            '</div>' +
            '<div u="thumbnavigator" class="jssort01" style="left: 0px; bottom: 0px;">' +
            '<div u="slides" style="cursor: default;">' +
            '<div u="prototype" class="p">' +
            '<div class=w>' +
            '<div u="thumbnailtemplate" class="t"></div>' +
            '</div>' +
            '<div class=c></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<a style="display: none" href="http://www.jssor.com">Carousel Slider</a>' +
            '</div>');
        $('#control_container').attr("class", "col-md-2 col-sm-2");
        $('#control_container').html('<div class="btn-group-vertical" id="btnGroup" style="margin: 0 auto;">' +
            '<button id="btnPlayPause" type="button" class="btn btn-success center-block" onclick="playPause()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-play pull-left"></span>PLAY</button>' +
            '<button id="btnPlayAgain" type="button" class="btn btn-info center-block" onclick="rePlay()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-repeat pull-left"></span>REPLAY</button>' +
            '<button id="btnChangeTransition" type="button" class="btn btn-primary center-block" onclick="changeTransition()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-wrench pull-left"></span>ĐỔI HIỆU ỨNG</button>' +
            '<button id="addMusic" type="button" class="btn btn-warning center-block" onclick="addMusic()" style="font-size:18px; width: 200px; height: 50px"><span class="glyphicon glyphicon-music pull-left"></span>THÊM NHẠC</button>' +
            '</div>');
        //END CREATE

        //CREATE GALLERY
        createGallery();
        //END CREATE

        //CREATE TRANSITION FOR SLIDESHOW
        var SlideshowTransitions = [];
        for (var i = index; i < allImageJson.length; i++) {
            SlideshowTransitions.push(c[allImageJson[i].SlideShowTransition]);

        }
        for (var j = 0; j < index; j++) {
            SlideshowTransitions.push(c[allImageJson[j].SlideShowTransition]);
        }

        var options = {
            $FillMode: 1,
            $Loop: 1,
            $StartIndex: index,
            $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $SlideDuration: 500, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

            $AutoPlayInterval: 1500, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 0, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $DragOrientation: 0, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $SlideshowOptions: { //[Optional] Options to specify and enable slideshow or not
                $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
                $Transitions: SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
            },

            $ArrowNavigatorOptions: { //[Optional] Options to specify and enable arrow navigator or not
                $Class: $JssorArrowNavigator$, //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 1, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 2, //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1 //[Optional] Steps to go for each navigation request, default value is 1
            },

            $ThumbnailNavigatorOptions: { //[Optional] Options to specify and enable thumbnail navigator or not
                $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
                $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                $Loop: 1,
                $ActionMode: 1, //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                $SpacingX: 8, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                $DisplayPieces: 10, //[Optional] Number of pieces to display, default value is 1
                $ParkingPosition: 360 //[Optional] The offset position to park thumbnail
            }
        };

        jssor_slider1 = new $JssorSlider$("slider1_container", options);

        function ScaleSlider() {
                var parentWidth = $('#slider1_container').parent().width();
                if (parentWidth) {
                    jssor_slider1.$ScaleWidth(parentWidth);
                } else
                    window.setTimeout(ScaleSlider, 30);
            }
            //Scale slider after document ready
        ScaleSlider();

        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
        return jssor_slider1;
        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizes

        //responsive code end

        //API $Play, $Pause, $PlayTo, $GoTo, $Next, $Prev function BEGIN


    };

    var jssor_slider2;

    createSelectSlideShowTransiton = function() {
        $("#change_transition_container").append('<button id="prevSlide" type="button" class="btn btn-primary" onclick="prevSlide()"><span class="glyphicon glyphicon-backward pull-left"></span></button>' +
            '<button id="nextSlide" type="button" class="btn btn-primary  pull-right" onclick="nextSlide()"><span class="glyphicon glyphicon-forward pull-right"></span></button>');
        var selectList = document.createElement("SELECT");
        selectList.setAttribute("id", "ssTransition");
        selectList.setAttribute("style", "width: 100%; margin-top:5%; margin-bottom:5%");
        var myDiv = document.getElementById("change_transition_container");
        myDiv.appendChild(selectList);

        var optgroup;
        for (i = 0; i < SlideShowTransition.length; i++) {
            if (c[SlideShowTransition[i]] == null) {
                optgroup = document.createElement("optgroup");
                optgroup.setAttribute("label", SlideShowTransition[i]);
                selectList.appendChild(optgroup);
            } else {
                var option = document.createElement("option");
                option.text = SlideShowTransition[i];
                option.value = SlideShowTransition[i];
                // console.log(c[SlideShowTransition[i]]);
                optgroup.appendChild(option);
            }
        }
    }




    createGallery = function() {
        var slide = document.getElementById("slides");
        for (var i = 0; i < allImageJson.length; i++) {
            var imageDiv = document.createElement("div");
            var imageItem = document.createElement("img");
            /*var imageCaption = document.createElement("div");
            imageCaption.setAttribute("id",i);
            imageCaption.setAttribute("u","caption");
            imageCaption.setAttribute("t","CLIP|LR");
            imageCaption.setAttribute("du","1500");
            imageCaption.setAttribute("class","captionOrange");
            imageCaption.setAttribute("style","position:absolute; left:150px; top: 300px; width:500px; height:30px;");
            imageCaption.appendChild(document.createTextNode(""));
*/
            imageItem.setAttribute("u", "image");
            imageItem.setAttribute("src", allImageJson[i].photoLink);
            var imageThumb = document.createElement("img");
            imageThumb.setAttribute("u", "thumb");
            imageThumb.setAttribute("src", allImageJson[i].thumbLink);
            imageDiv.appendChild(imageItem);
            imageDiv.appendChild(imageThumb);
            //imageDiv.appendChild(imageCaption);
            slide.appendChild(imageDiv);
        }
    }


    createChangeTransitionSlideShow = function(index) {
        /// Create Selection////////////////
        $('#control_container').html('<div id="change_transition_container"></div>');




        var slide = document.createElement("div");
        var divTransition = document.getElementById("change_transition_container");
        slide.setAttribute("id", "slider2_container");
        slide.setAttribute("style", "position: relative; top: 0px; left: 0px; width: 800px; height: 456px; background: #24262e; overflow: hidden; ");
        divTransition.appendChild(slide);
        $("#slider2_container").html('<div u="loading" style="position: absolute; top: 0px; left: 0px;">' +
            '<div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;' +
            'background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">' +
            '</div>' +
            '<div style="position: absolute; display: block; background: url(../img/loading.gif) no-repeat 50% 50%;' +
            'top: 0px; left: 0px;width: 100%;height:100%;">' +
            '</div>' +
            '</div>' +
            '<div id = "slides2" u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 800px; height: 356px; overflow: hidden;"></div>');
        var slide = document.getElementById("slides2");


        createSelectSlideShowTransiton();

        /////// Switch select to index//////
        $("#ssTransition").val(allImageJson[index].SlideShowTransition);

        $("#change_transition_container").append('<div class="input-group" style="margin-bottom: 5%">'+
      '<input type="text" id="txtCaption" class="form-control" placeholder="Điền Caption...">'+
      '<span class="input-group-btn">'+
        '<button class="btn btn-danger" type="button" onclick="setCaption()">Go!</button>'+
      '</span></div>');
        //Create Button Save
        var btnSave = document.createElement("input");
        btnSave.setAttribute("id", "btnSave");
        btnSave.setAttribute("type", "button");
        btnSave.setAttribute("class", "btn btn-success pull-left");
        btnSave.setAttribute("value", "Done");
        divTransition.appendChild(btnSave);
        //

        //Create Button Cancel
        var btnCancel = document.createElement("input");
        btnCancel.setAttribute("id", "btnCancel");
        btnCancel.setAttribute("type", "button");
        btnCancel.setAttribute("class", "btn btn-primary pull-right");
        btnCancel.setAttribute("value", "Cancel");
        divTransition.appendChild(btnCancel);
        //

        for (var i = index; i < index + 2; i++) {
            if (i == allImageJson.length) {
                var imageDiv = document.createElement("div");
                var imageItem = document.createElement("img");
                imageItem.setAttribute("u", "image");
                imageItem.setAttribute("src", allImageJson[0].photoLink);
                var imageThumb = document.createElement("img");
                imageDiv.appendChild(imageItem);
                slide.appendChild(imageDiv);
            } else {
                var imageDiv = document.createElement("div");
                var imageItem = document.createElement("img");
                imageItem.setAttribute("u", "image");
                imageItem.setAttribute("src", allImageJson[i].photoLink);
                var imageThumb = document.createElement("img");
                imageDiv.appendChild(imageItem);
                slide.appendChild(imageDiv);
            }
        }

        var SlideshowTransitions = [];
        SlideshowTransitions.push(c[allImageJson[index].SlideShowTransition]);

        var options = {
            $FillMode: 1,
            $Loop: 1,
            $StartIndex: 0,
            $AutoPlay: true, //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $SlideDuration: 500, //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

            $AutoPlayInterval: 1500, //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 0, //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

            $DragOrientation: 0, //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

            $SlideshowOptions: { //[Optional] Options to specify and enable slideshow or not
                $Class: $JssorSlideshowRunner$, //[Required] Class to create instance of slideshow
                $Transitions: SlideshowTransitions, //[Required] An array of slideshow transitions to play slideshow
                $TransitionsOrder: 1, //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                $ShowLink: true //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
            }

        };

        jssor_slider2 = new $JssorSlider$("slider2_container", options);




        function ScaleSlider() {
                var parentWidth = $('#slider2_container').parent().width();
                if (parentWidth) {
                    jssor_slider2.$ScaleWidth(parentWidth);
                } else
                    window.setTimeout(ScaleSlider, 30);
            }
            //Scale slider after document ready
        ScaleSlider();

        //Scale slider while window load/resize/orientationchange.
        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
        return jssor_slider2;
    }


    function setTransition(value) {
        var SlideshowTransitions = [];
        SlideshowTransitions.push(c[value]);
        jssor_slider2.$SetSlideshowTransitions(SlideshowTransitions);
    }

    function saveTransition(value) {
        var index = jssor_slider1.$CurrentIndex();

        document.getElementById("0").appendChild(document.createTextNode("BA"));
        //$('#' + index).html("ACSCS");

        allImageJson[index].SlideShowTransition = value;
        // var SlideshowTransitions = [];
        //SlideshowTransitions.push(c[allImageJson[index].SlideShowTransition]);
        /*for (var i = 0; i < allImageJson.length; i++) {
            SlideshowTransitions.push(c[allImageJson[i].SlideShowTransition]);
        }
        console.log(SlideshowTransitions);*/
        // jssor_slider1.$SetSlideshowTransitions(SlideshowTransitions);
        // jssor_slider1.$Play();
        // jssor_slider1.$PlayTo(0);


    }

    function playPause() {
        if (jssor_slider1.$IsAutoPlaying()) {
            jssor_slider1.$Pause();
            $('#btnPlayPause').html('<span class="glyphicon glyphicon-play pull-left"></span>PLAY');
        } else {
            jssor_slider1.$Play();
            $('#btnPlayPause').html('<span class="glyphicon glyphicon-pause pull-left"></span>PAUSE');
        }
    }

    function Pause() {
        jssor_slider1.$Pause();

    }

    function rePlay() {
        init_jssor_slider1(0);
    }


    function prevSlide() {
        jssor_slider1.$Prev();

        var index = jssor_slider1.$CurrentIndex();
        var valueSelected = $('#ssTransition').val();
        console.log(valueSelected);
        saveTransition(valueSelected);

        if (index == 0)
            changeTransition(allImageJson.length - 1);
        else
            changeTransition(index - 1);
    }

    function nextSlide() {
        jssor_slider1.$Next();
        var index = jssor_slider1.$CurrentIndex();
        var valueSelected = $('#ssTransition').val();
        console.log(valueSelected);
        saveTransition(valueSelected);
        if (index == allImageJson.length - 1)
            changeTransition(0);
        else
            changeTransition(index + 1);
    }

    function changeTransition(index) {
        // $("#btnChangeTransition").attr('disabled', 'disabled');
        $("#btnGroup").remove();
        if (index == null)
            index = jssor_slider1.$CurrentIndex();

        $('#slideshow_container').attr("class", "col-sm-8 col-md-8 col-centered");

        jssor_slider1 = createMainSlideShow(index);

        Pause();

        $('#control_container').attr({
            "class": "col-sm-4 col-md-4 col-centered"
        });


        jssor_slider2 = createChangeTransitionSlideShow(index);

        $('select').on('change', function(e) {
            var optionSelected = $("option:selected", this);
            var valueSelected = this.value;
            //console.log(valueSelected);
            setTransition(valueSelected);
        });

        $('#btnSave').click(function() {
            //var optionSelected = $("option:selected", $('select'));
            var valueSelected = $('#ssTransition').val();
            console.log(valueSelected);
            saveTransition(valueSelected);
            $("#btnSave").attr('disabled', 'disabled');
            $("#btnChangeTransition").removeAttr('disabled');
            $("#slider1_container").remove();
            jssor_slider1 = init_jssor_slider1(jssor_slider1.$CurrentIndex());
        });

        $('#btnCancel').click(function() {
            jssor_slider1 = init_jssor_slider1(jssor_slider1.$CurrentIndex());
        });
    }