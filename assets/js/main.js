
function numb() {
    return Math.floor((Math.random()* 72) + 1);
}

function smallnumber() {
    return Math.floor((Math.random()* 8) + 1);
}

function boolnumber() {
    return Math.round(Math.random());
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
    "Dangerous Doug Diehard",
    "The Immortal Soul",
    "Count Smackula",
    "King Ogre",
    "Ruthless Rick",
    "Chief Quarterback",
    "Chris Hopkins",
    "Leonard Tyson",
    "Joshua Patterson",
    "Rambo Robinson",
    "Sid Lunar",
    "Marley Dawson",
    "Hank Falls",
    "Columbo Springstein",
    "Kurt Lemon",
    "Crazy Bobcat ",
    "Willy Wildcat",
    "Trigger",
    "Denzel De Fense",
    "Spice Cloud",
    "Global Warning",
    "Victor E Dance",
    "Stu Goldmine",
    "Sluice Box Kid",
    "Mine Shaft",
    "Mutley B Perfect",
    "Andrew Starr",
    "Concubine",
    "Gomez Titan"

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
    "The Chimney Sweep",
    "Soul Sapper",
    "Blood Sweat and Tears",
    "Onion 1-2-3",
    "The Funky Drop",
    "The Rain Dance",
    "The Cactus Clutch",
    "Rainbow Drop",
    "The Olde Oak Tree",
    "The Summit Smash",
    "Chapter and Verse",
    "The Buckler",
    "The Cannonball Bomb",
    "The false reprieve",
    "Culture Shock",
    "Anaphalaxis Flip",
    "The Turkey Twizzler",
    "Hook Clothesline and Sinker",
    "Picasso's Kiss",
    "The Cosmic Spark",
    "The Shelf of Pain",
    "The Penultimate Milestone",
    "The Horn of Pain",
    "Born Again",
    "Acro-battering Ram",
    "Critical Condition",
    "Blue Star Collision",
    "End of Days",
    "The Termination"
];

Style = [
    "Brawler",
    "High Flyer",
    "All Rounder",
    "Technician",
    "Powerhouse",
    "Submission Expert",
    "Veteran",
    "Hardcore",
    "Giant",
    "Martial Arts",
    "Striker"
];

CrowdStatus = [
    "Babyface",
    "Heel",
    "Tweener"
];

function populateWrestler () {
    number = numb();
    movenumber = numb();
    stylenumber = smallnumber ();
    facenumber = boolnumber();

    $('#wrestlerName').html(Name[number]);
    $('#wrestlerFinish').html(Finisher[movenumber]);
    $('#wrestlerStyle').html(Style[stylenumber]);
    $('#wrestlerStatus').html(CrowdStatus[facenumber]);
}

$( "#generate" ).click(function() {
    number = numb();
    movenumber = numb();
    stylenumber = smallnumber ();
    facenumber = boolnumber();

    $('#wrestlerName').html(Name[number]);
    $('#wrestlerFinish').html(Finisher[movenumber]);
    $('#wrestlerStyle').html(Style[stylenumber]);
    $('#wrestlerStatus').html(CrowdStatus[facenumber]);
    $('html,body').animate({
        scrollTop: $("#wrestler").offset().top},
        'fast');
  });

