
function numb() {
    return Math.floor((Math.random()* 46) + 1);
}

function smallnumber() {
    return Math.floor((Math.random()* 46) + 1);
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
    "The Castaway",
    "Meteor",
    "David 'Toolbox' Taylor",
    "Striker",
    "Prince Hakim",
    "The Sultan of Slams",
    "Jimmy Holdz",
    "Tag Team Terry",
    "Tripod",
    "Jake Sturdy",
    "Steady Eddie",
    "Jamboree Jones",
    "Apache Kid",
    "Tommy Turnbuckle",
    "Massive Mike",
    "Earl 'The Pearl' King",
    "Empire",
    "Jujitsu Jenkins",
    "Hot Blooded Male",
    "Crosshair",
    "The Lethal Weapon",
    "The Canvas Kid",
    "Ten Pin Jim",
    "Dangerous Doug Diehard"
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
    "The Juicer",
    "Hurricarana to Moonsalt",
    "Duelling Banjoe's",
    "The Mantis Kick",
    "Running Power Chop",
    "The Hammer Bomb",
    "The Grave maker",
    "The Cartwheel Kick",
    "Omega Bomb",
    "The Thermo Thrust",
    "The Graphic Details",
    "Final Stop",
    "The Terminus",
    "Monkey Wrench Slam",
    "The Ape Bomb",
    "The Eraser",
    "Smart Attack",
    "Bold Statement",
    "The Suddick Slam",
    "Shoe Box Drop",
    "Helicopter Drop",
    "Emotional Detachment",
    "Cold as Ice",
    "Clock Cleaner",
    "The Chimney Sweep"
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

