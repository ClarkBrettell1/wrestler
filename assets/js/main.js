
function numb() {
    return Math.floor((Math.random()* 20) + 1);
}

function smallnumber() {
    return Math.floor((Math.random()* 6) + 1);
}

Name = [
    "CrazyBones",
    "Archie Gripz",
    "Downing Out",
    "Biggie Slamz",
    "Loud Mouth Andy",
    "The Rooster",
    "Slugger Chops",
    "Technicality",
    "Thermos",
    "Mighty Husk",
    "Magnificent Malcolm",
    "Johnny Spacecraft",
    "Tombmaker",
    "Screaming Jack",
    "Jock McCleglock",
    "The Tennessee Tank",
    "Angry Bull",
    "Back Alley Allan",
    "Strapz",
    "Gargoyle",
    "Artillery Thompson",
    "Mortar",
    "The Hiroshima Express",
    "The Castaway"
];

Finisher = [
    "The Last Sunset",
    "One Last Splash",
    "The Keyless Lock",
    "The Hiroshima Hold",
    "Battering Ram Slam",
    "The Silent Suplex",
    "Chop Chop Slam",
    "Thrust Booster",
    "The Demon Kick",
    "Castaway Slam",
    "The Extraction",
    "The Gunner's Seat",
    "Declaration on Pin-dendance",
    "The Scream Maker",
    "The Surrender Slam",
    "Casket Roll",
    "Sweet Veronica",
    "Clingsman's Doom",
    "The Grotesque Press",
    "Cognitive Scrambler",
    "Smash and Grab",
    "The Spigot Splash",
    "The Juicer"
];

Style = [
    "Brawler",
    "High Flyer",
    "All Rounder",
    "Technician",
    "Big Man",
    "Submission Expert"
]

function populateWrestler () {
    number = numb();
    movenumber = numb();
    stylenumber = smallnumber ();

    $('#wrestlerName').html(Name[number]);
    $('#wrestlerFinish').html(Finisher[movenumber]);
    $('#wrestlerStyle').html(Style[stylenumber]);
}

$( "#generate" ).click(function() {
    number = numb();
    movenumber = numb();
    stylenumber = smallnumber ();

    $('#wrestlerName').html(Name[number]);
    $('#wrestlerFinish').html(Finisher[movenumber]);
    $('#wrestlerStyle').html(Style[stylenumber]);
  });

