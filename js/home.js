/*
function  is invoked every time the tab button presented to the user as "Location" is clicked.
function contains the information the generate and center a google map at the location of
the university of Washington, Tacoma
*/
function init() {
    var map = new google.maps.LatLng(47.2554865, -122.47653350000002);

    var mapOptions = { // Set up the map options
        center: map,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 16
    };
    var venueMap; // Map() draws a map
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

    var startPosition = new google.maps.Marker({ // Create a new marker
        position: map, // Set its position
        map: venueMap, // Specify the map
    });
}

/*
function is invoked every time the tab button presented to the user as "Location" is clicked.
function contains the begining information to pull information from a javscript file, and invokes the
function "init" which displays a google map centered at the corrdiantes for the university of Washington, Tacoma
*/
function loadScript() {
    var script = document.createElement('script'); // Create <script> element
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script); // Add element to page
}
