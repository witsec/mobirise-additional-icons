defineM("witsec-additional-icons", function(g, mbrApp, tr) {
    mbrApp.registerPlugin("witsec-additional-icons", {
        name: "map-icons",
        condition: !1,
        priority: 105,
        iconfont: {
            family: "MapIcons",
            title: "Map Icons",
            prefix: "map-icon-",
            "class": "map-icon",
            names: "abseiling accounting airport amusement-park aquarium archery art-gallery assistive-listening-system atm audio-description bakery bank bar baseball beauty-salon bicycle-store bicycling boat-ramp boat-tour boating book-store bowling-alley braille bus-station cafe campground canoe car-dealer car-rental car-repair car-wash casino cemetery chairlift church circle city-hall climbing closed-captioning clothing-store compass convenience-store courthouse cross-country-skiing crosshairs dentist department-store diving doctor electrician electronics-store embassy expand female finance fire-station fish-cleaning fishing fishing-pier florist food fullscreen funeral-home furniture-store gas-station general-contractor golf grocery-or-supermarket gym hair-care hang-gliding hardware-store health hindu-temple horse-riding hospital ice-fishing ice-skating inline-skating insurance-agency jet-skiing jewelry-store kayaking laundry lawyer library liquor-store local-government location-arrow locksmith lodging low-vision-access male map-pin marina mosque motobike-trail movie-rental movie-theater moving-company museum natural-feature night-club open-captioning painter park parking pet-store pharmacy physiotherapist place-of-worship playground plumber point-of-interest police political post-box post-office postal-code postal-code-prefix rafting real-estate-agency restaurant roofing-contractor route route-pin rv-park sailing school scuba-diving search shield shopping-mall sign-language skateboarding ski-jumping skiing sledding snow snow-shoeing snowboarding snowmobile spa square square-pin square-rounded stadium storage store subway-station surfing swimming synagogue taxi-stand tennis toilet trail-walking train-station transit-station travel-agency unisex university veterinary-care viewing volume-control-telephone walking waterskiing whale-watching wheelchair wind-surfing zoo zoom-in zoom-in-alt zoom-out zoom-out-alt".split(" ")
        },
        files: "css/map-icons.min.css fonts/map-icons.eot fonts/map-icons.svg fonts/map-icons.ttf fonts/map-icons.woff".split(" ")
    });
}, ["jQuery", "mbrApp", "TR()"]);