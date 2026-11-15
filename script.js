"use strict";
/* =========================================================
   DATA — all facts from official NASA sources (see SOURCES)
   ========================================================= */
const NSSDC = id => "https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=" + id;

const VEHICLES = [
    /* ---------------- MOON ---------------- */
    {
        id: "lunokhod-1", world: "moon", art: "lunokhod", name: "Lunokhod 1", agency: "Soviet Union", mission: "Luna 17",
        year: 1970, landedYear: 1970, launch: "10 November 1970", landing: "17 November 1970",
        location: "Mare Imbrium (Sea of Rains)", lat: 38.315, lon: -35.008,
        coords: "38.315° N, 35.008° W (final parking spot, measured from NASA LRO images)",
        status: "Inactive since September 1971 — still parked in Mare Imbrium", distance: "About 10.5 km",
        short: "The first robot rover to explore another world",
        summary: "The first remote-controlled rover on another world. Drivers on Earth steered it across the Sea of Rains for about 10 months.",
        purpose: "Luna 17 delivered Lunokhod 1 to test whether a robot vehicle could be driven on the Moon by a team on Earth, and to study the lunar surface and soil.",
        design: "Lunokhod 1 was an eight-wheeled robot shaped like a tub with a lid. The lid opened during the lunar day to expose solar cells that charged its batteries, and closed at night to keep it warm. TV cameras let a five-person crew on Earth drive it, and it carried instruments to test soil, measure the chemistry of the ground, and detect cosmic rays, plus a laser retroreflector (a special mirror).",
        discoveries: ["First successful robotic rover ever to explore another world.", "Drove about 10.5 kilometers across Mare Imbrium.", "Sent back more than 20,000 TV pictures and more than 200 panoramic images.", "Tested the lunar soil at more than 500 places.", "Worked for 11 lunar days — far longer than its planned 3 lunar days."],
        facts: ["Its controllers on Earth saw the pictures with a delay of several seconds, so they had to drive very carefully.", "After 1971 nobody knew exactly where it was parked — until NASA's Lunar Reconnaissance Orbiter (LRO) photographed it in 2010.", "Scientists then bounced lasers off its mirror for the first time in almost 40 years."],
        dyk: ["Lunokhod means “Moon walker.”", "It had 8 wheels — and each wheel had its own motor!", "Its lid worked like a laptop: open in the day for solar power, closed at night.", "Scientists on Earth still shine lasers at its mirror today."],
        now: "Lunokhod 1 rests in its final parking spot in northern Mare Imbrium. NASA's LRO camera found it in March 2010, and its laser mirror is now used again to measure the distance between Earth and the Moon very precisely.",
        why: "Lunokhod 1 proved that a robot could be driven on another world by people far away. Every rover that has explored Mars follows the idea it tested first.",
        sources: [["NASA NSSDCA — Luna 17 / Lunokhod 1", NSSDC("1970-095A")], ["NASA LRO Camera — Lunokhod 1 Revisited", "https://lroc.im-ldi.com/posts/402"]],
        quiz: [
            ["Which mission carried Lunokhod 1 to the Moon?", "Luna 17", "Apollo 11", "Luna 9", "Surveyor 3"],
            ["In what year did Lunokhod 1 land on the Moon?", "1970", "1969", "1973", "1966"],
            ["Where did Lunokhod 1 explore?", "Mare Imbrium (Sea of Rains)", "The Sea of Tranquility", "Le Monnier crater", "Hadley Rille"],
            ["How many wheels did Lunokhod 1 have?", "8", "4", "6", "3"],
            ["Who drove Lunokhod 1?", "A team of controllers on Earth", "An astronaut sitting on it", "A robot dog", "Nobody — it never moved"],
            ["About how far did Lunokhod 1 travel?", "About 10.5 km", "About 100 m", "About 1,000 km", "About 1 km"],
            ["What was on the inside of Lunokhod 1's lid?", "Solar cells", "A parachute", "A drill", "Spare wheels"],
            ["Which tool on Lunokhod 1 is still used by scientists on Earth?", "Its laser mirror (retroreflector)", "Its radio telescope", "Its weather station", "Its rocket engine"],
            ["Which NASA spacecraft photographed Lunokhod 1's parking spot in 2010?", "Lunar Reconnaissance Orbiter (LRO)", "Hubble Space Telescope", "Voyager 1", "Mars Odyssey"],
            ["Why is Lunokhod 1 so famous?", "It was the first robotic rover to explore another world", "It carried the first astronauts", "It was the first Mars lander", "It brought Moon rocks back to Earth"]]
    },
    {
        id: "lunokhod-2", world: "moon", art: "lunokhod", name: "Lunokhod 2", agency: "Soviet Union", mission: "Luna 21",
        year: 1973, landedYear: 1973, launch: "8 January 1973", landing: "15 January 1973",
        location: "Le Monnier crater, eastern edge of Mare Serenitatis", lat: 25.832, lon: 30.922,
        coords: "≈ 25.83° N, 30.92° E (final position, measured from NASA LRO images)",
        status: "Inactive since 1973 — parked inside Le Monnier crater", distance: "About 42 km (re-measured with NASA LRO images)",
        short: "The long-distance champion of the Moon",
        summary: "An improved Moon robot that drove about 42 km — a record that lasted more than 40 years.",
        purpose: "Luna 21 delivered Lunokhod 2 to explore the area where the Sea of Serenity meets the highlands, take pictures, study the soil and measure the Moon's magnetism.",
        design: "Lunokhod 2 was an upgraded copy of Lunokhod 1: eight wheels, a tub-shaped body, and a solar-cell lid. It added a third TV camera mounted higher up, at a driver's eye level, to help the team on Earth steer, plus a magnetometer and a laser retroreflector.",
        discoveries: ["Drove about 42 km — the longest distance driven on another world until NASA's Opportunity rover beat it on Mars in 2014.", "Sent back more than 80,000 TV pictures and 86 panoramic images.", "Measured the Moon's magnetic field and tested soil along its route.", "Explored the floor of Le Monnier, a crater flooded by ancient lava."],
        facts: ["Its mission ended in 1973 after the open lid touched a crater wall and got covered with Moon dust, which made the rover overheat.", "NASA's LRO cameras can still see its tracks from orbit!", "Its laser mirror is also still used by scientists on Earth."],
        dyk: ["Lunokhod 2 drove about four times farther than Lunokhod 1.", "Its record for longest drive lasted over 40 years!", "A little bit of Moon dust ended its mission.", "You can see its wheel tracks in pictures taken from space."],
        now: "Lunokhod 2 is parked inside Le Monnier crater, near where it landed. NASA's Lunar Reconnaissance Orbiter photographed the rover and its long trail of tracks.",
        why: "Lunokhod 2 showed that robot rovers could travel long distances and do science for months. It set the off-world driving record for four decades.",
        sources: [["NASA NSSDCA — Luna 21 / Lunokhod 2", NSSDC("1973-001A")], ["NASA LRO Camera — Lunokhod 2 Revisited", "https://lroc.im-ldi.com/images/699"]],
        quiz: [
            ["Which mission carried Lunokhod 2 to the Moon?", "Luna 21", "Luna 17", "Apollo 17", "Luna 9"],
            ["In what year did Lunokhod 2 land?", "1973", "1970", "1971", "1976"],
            ["In which crater did Lunokhod 2 explore?", "Le Monnier", "Copernicus", "Tycho", "Shorty"],
            ["Lunokhod 2 landed at the edge of which lunar sea?", "Mare Serenitatis (Sea of Serenity)", "Mare Imbrium (Sea of Rains)", "The Ocean of Storms", "Mare Crisium"],
            ["About how far did Lunokhod 2 drive?", "About 42 km", "About 1 km", "About 400 km", "About 10 m"],
            ["What ended Lunokhod 2's mission?", "Moon dust on the lid made it overheat", "It ran out of gasoline", "A meteor hit it", "It fell into a deep hole"],
            ["Which NASA rover finally beat Lunokhod 2's driving record?", "Opportunity", "Sojourner", "Spirit", "Ingenuity"],
            ["How many wheels did Lunokhod 2 have?", "8", "6", "4", "10"],
            ["What new camera did Lunokhod 2 add?", "A camera at a driver's eye level", "A night-vision telescope", "A 3D movie camera", "It had no cameras"],
            ["How did Lunokhod 2 get power during the lunar day?", "Solar cells on its lid", "A gas engine", "Wind turbines", "Pedals"]]
    },
    {
        id: "apollo-15-lrv", world: "moon", art: "lrv", name: "Apollo 15 Lunar Roving Vehicle", agency: "NASA", mission: "Apollo 15",
        year: 1971, landedYear: 1971, launch: "26 July 1971", landing: "30 July 1971",
        location: "Hadley–Apennine region", lat: 26.132, lon: 3.634,
        coords: "26.132° N, 3.634° E (Apollo 15 landing site; the rover was parked nearby)",
        status: "Left on the Moon in August 1971 at Hadley–Apennine", distance: "About 27.8 km",
        short: "The first car driven on the Moon",
        summary: "The first Lunar Roving Vehicle. Astronauts Dave Scott and Jim Irwin drove it near Hadley Rille and the Apennine Mountains.",
        purpose: "Apollo 15 was the first of NASA's longer “J missions.” The crew stayed about three days on the Moon and used the brand-new Lunar Roving Vehicle to travel farther than any astronauts before them and collect rocks from many places.",
        design: "The Lunar Roving Vehicle (LRV) was a light, battery-powered car built for two astronauts. Each of its four wire-mesh wheels had its own electric motor. It folded up to ride on the side of the Lunar Module and opened on the Moon. It carried tools, cameras, a navigation system, and antennas to send TV pictures to Earth.",
        discoveries: ["First-ever drives of a car on the Moon by astronauts David Scott and James Irwin.", "Explored the edge of Hadley Rille, a long winding valley, and the foot of the Apennine Mountains.", "The crew found the “Genesis Rock,” a very old piece of the Moon's early crust.", "Brought about 77 kg of Moon rocks and soil back to Earth."],
        facts: ["The rover's TV camera could be moved by controllers in Houston, so people on Earth could watch the astronauts explore.", "Dave Scott dropped a hammer and a feather at the same time — they hit the ground together, just as Galileo predicted!", "Crewmate Al Worden stayed in orbit in the Command Module Endeavour."],
        dyk: ["The Moon car folded up like a suitcase for the trip!", "It ran on batteries, not gasoline.", "Its wheels were made of woven wire, like a mesh.", "It is still parked on the Moon today."],
        now: "The Apollo 15 rover was left parked near the landing site of the Lunar Module Falcon at Hadley–Apennine, where it remains today.",
        why: "Apollo 15 showed that a rover could multiply how much astronauts can explore. With the LRV, the crew traveled far from their lander and brought back a much richer set of samples.",
        sources: [["NASA — Apollo 15 mission", "https://www.nasa.gov/mission/apollo-15/"], ["NASA NSSDCA — Apollo Lunar Roving Vehicle", "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html"], ["NASA NSSDCA — Apollo 15 Lunar Module", NSSDC("1971-063C")]],
        quiz: [
            ["In what year did Apollo 15 land on the Moon?", "1971", "1969", "1972", "1970"],
            ["Where did Apollo 15 land?", "Hadley–Apennine", "Taurus–Littrow", "Descartes Highlands", "Sea of Tranquility"],
            ["Which astronauts drove the Apollo 15 rover?", "David Scott and James Irwin", "Neil Armstrong and Buzz Aldrin", "John Young and Charles Duke", "Gene Cernan and Harrison Schmitt"],
            ["What was special about Apollo 15?", "It was the first mission to use a Lunar Roving Vehicle", "It was the last Moon landing", "It was the first Moon landing", "It landed on Mars"],
            ["What powered the Lunar Roving Vehicle?", "Batteries and electric motors", "A gasoline engine", "Solar sails", "Bicycle pedals"],
            ["How did the rover travel to the Moon?", "Folded up on the side of the Lunar Module", "On its own rocket", "It was built on the Moon", "Inside an astronaut's backpack"],
            ["What is the name of the famous old rock found by Apollo 15?", "Genesis Rock", "Big Muley", "Blueberry", "Barnacle Bill"],
            ["How many wheels did the Lunar Roving Vehicle have?", "4", "6", "8", "3"],
            ["Where is the Apollo 15 rover now?", "Still on the Moon at Hadley–Apennine", "In a museum", "Back in Houston", "It burned up in Earth's air"],
            ["What did Dave Scott drop together to test gravity?", "A hammer and a feather", "Two apples", "A rock and a ball", "A boot and a glove"]]
    },
    {
        id: "apollo-16-lrv", world: "moon", art: "lrv", name: "Apollo 16 Lunar Roving Vehicle", agency: "NASA", mission: "Apollo 16",
        year: 1972, landedYear: 1972, launch: "16 April 1972", landing: "21 April 1972",
        location: "Descartes Highlands", lat: -8.973, lon: 15.500,
        coords: "8.973° S, 15.500° E (Apollo 16 landing site; the rover was parked nearby)",
        status: "Left on the Moon in April 1972 in the Descartes Highlands", distance: "About 26.7 km",
        short: "The rover that explored the lunar highlands",
        summary: "The second Moon car, driven by John Young and Charlie Duke in the bright, hilly Descartes Highlands.",
        purpose: "Apollo 16 was the first mission to land in the Moon's central highlands. Scientists wanted to study these bright, mountainous areas, which are very different from the dark lava plains visited before.",
        design: "Like the Apollo 15 rover, it was a foldable, battery-powered car with four wire-mesh wheels, each with its own motor. It carried two astronauts, their tools and sample bags, a TV camera controlled from Earth, and a high-gain antenna to talk directly with Earth.",
        discoveries: ["First human exploration of the lunar highlands.", "Scientists expected volcanic rocks, but the crew mostly found breccias — rocks made of broken pieces smashed together by impacts.", "Collected about 95.8 kg of samples, including “Big Muley,” the largest single rock brought back by Apollo.", "Set up the first telescope on the Moon, a far-ultraviolet camera that photographed Earth and stars."],
        facts: ["Before driving away, the crew filmed a “Grand Prix” test drive to see how the rover handled on bumpy ground.", "Charlie Duke left a photo of his family on the Moon.", "Crewmate Ken Mattingly orbited the Moon in the Command Module Casper."],
        dyk: ["Big Muley weighs about as much as a bowling ball and a half!", "The astronauts tested the rover with a “Grand Prix” drive.", "A photo of a family is still lying on the Moon.", "The first telescope on the Moon came on Apollo 16."],
        now: "The Apollo 16 rover remains on the Moon near the landing site of the Lunar Module Orion in the Descartes Highlands.",
        why: "Apollo 16 changed what scientists thought about the lunar highlands — showing they were shaped mostly by giant impacts — and the rover made it possible to visit many different stops.",
        sources: [["NASA — Apollo 16 mission", "https://www.nasa.gov/mission/apollo-16/"], ["NASA NSSDCA — Apollo Lunar Roving Vehicle", "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html"], ["NASA NSSDCA — Apollo 16 Lunar Module", NSSDC("1972-031C")]],
        quiz: [
            ["In what year did Apollo 16 land on the Moon?", "1972", "1971", "1969", "1975"],
            ["Where did Apollo 16 land?", "Descartes Highlands", "Hadley–Apennine", "Taurus–Littrow", "Mare Imbrium"],
            ["Which astronauts drove the Apollo 16 rover?", "John Young and Charles Duke", "David Scott and James Irwin", "Gene Cernan and Harrison Schmitt", "Neil Armstrong and Buzz Aldrin"],
            ["Apollo 16 was the first mission to explore the Moon's…", "Highlands", "Far side", "South pole", "Oceans of water"],
            ["What is “Big Muley”?", "The largest rock brought back by Apollo", "A Moon rover", "A crater on Mars", "A spacesuit"],
            ["What was the rover “Grand Prix”?", "A test drive to see how the rover handled", "A race on Earth", "A camera", "A Moon dance"],
            ["What did Charlie Duke leave on the Moon?", "A photo of his family", "A Mars flag", "A guitar", "A rover wheel"],
            ["What was the Apollo 16 Lunar Module called?", "Orion", "Eagle", "Falcon", "Challenger"],
            ["About how far did the Apollo 16 rover travel?", "About 27 km", "About 270 km", "About 2 km", "About 270 m"],
            ["What “first” did Apollo 16 bring to the Moon?", "The first telescope on the Moon", "The first Moon base", "The first plants on the Moon", "The first Moon satellite"]]
    },
    {
        id: "apollo-17-lrv", world: "moon", art: "lrv", name: "Apollo 17 Lunar Roving Vehicle", agency: "NASA", mission: "Apollo 17",
        year: 1972, landedYear: 1972, launch: "7 December 1972", landing: "11 December 1972",
        location: "Taurus–Littrow valley", lat: 20.191, lon: 30.772,
        coords: "20.191° N, 30.772° E (Apollo 17 landing site; the rover was parked nearby)",
        status: "Left on the Moon in December 1972 at Taurus–Littrow", distance: "About 35.7 km",
        short: "The last car driven on the Moon",
        summary: "Driven by Gene Cernan and Harrison Schmitt on the last Apollo Moon landing, in the Taurus–Littrow valley.",
        purpose: "Apollo 17 explored the Taurus–Littrow valley to collect very old highland rocks and young volcanic material in one place. It was the final mission of the Apollo program.",
        design: "The third Lunar Roving Vehicle: a foldable, battery-powered car with four motorized wire-mesh wheels, seats for two, a navigation system, tools, sample racks, a remote-controlled TV camera and a high-gain antenna.",
        discoveries: ["Drove about 35.7 km — the most of any Apollo rover.", "Harrison Schmitt, a geologist, became the first professional scientist to walk on the Moon.", "Discovered bright orange soil at Shorty crater — made of tiny glass beads from ancient volcanic fire fountains.", "Brought home about 110.5 kg of samples, the most of any Apollo mission."],
        facts: ["When a rover fender broke, the astronauts fixed it with folded maps, duct tape and clamps!", "Apollo 17 is the last time humans have walked on the Moon (so far).", "Ron Evans orbited the Moon in the Command Module America while Cernan and Schmitt explored."],
        dyk: ["Astronauts fixed the Moon car with duct tape and maps!", "They found orange soil on the gray Moon.", "A real scientist walked on the Moon for the first time.", "No one has driven on the Moon since 1972."],
        now: "The Apollo 17 rover is still parked in the Taurus–Littrow valley, close to where the Lunar Module Challenger's base stage sits.",
        why: "Apollo 17 brought back the largest Apollo sample collection and helped scientists understand the Moon's volcanic history. Its samples are still being studied today.",
        sources: [["NASA — Apollo 17 mission", "https://www.nasa.gov/mission/apollo-17/"], ["NASA NSSDCA — Apollo Lunar Roving Vehicle", "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html"], ["NASA NSSDCA — Apollo 17 Lunar Module", NSSDC("1972-096C")]],
        quiz: [
            ["In what year did Apollo 17 land on the Moon?", "1972", "1969", "1971", "1975"],
            ["Where did Apollo 17 land?", "Taurus–Littrow valley", "Hadley–Apennine", "Descartes Highlands", "Ocean of Storms"],
            ["Which astronauts drove the Apollo 17 rover?", "Gene Cernan and Harrison Schmitt", "John Young and Charles Duke", "David Scott and James Irwin", "Neil Armstrong and Buzz Aldrin"],
            ["Harrison Schmitt was the first … to walk on the Moon.", "Professional scientist (geologist)", "Woman", "Teenager", "Doctor"],
            ["What colorful soil did Apollo 17 discover?", "Orange soil", "Blue soil", "Green ice", "Purple sand"],
            ["How did the astronauts fix the broken fender?", "With maps and duct tape", "With chewing gum", "With a rock", "They did not fix it"],
            ["About how far did the Apollo 17 rover travel?", "About 36 km", "About 3 km", "About 360 km", "About 300 m"],
            ["Why is Apollo 17 special in history?", "It is the last time humans walked on the Moon (so far)", "It was the first Moon landing", "It landed on Mars", "It was the first rover ever"],
            ["What was the Apollo 17 Lunar Module called?", "Challenger", "Eagle", "Orion", "Falcon"],
            ["Apollo 17 brought back the … of any Apollo mission.", "Most Moon samples", "Fewest Moon samples", "Only Moon samples", "First Mars samples"]]
    },
    /* ---------------- MARS ---------------- */
    {
        id: "sojourner", world: "mars", art: "sojourner", name: "Sojourner", agency: "NASA / JPL", mission: "Mars Pathfinder",
        year: 1997, landedYear: 1997, launch: "4 December 1996", landing: "4 July 1997",
        location: "Ares Vallis, Chryse Planitia", lat: 19.13, lon: -33.22,
        coords: "19.13° N, 33.22° W (Mars Pathfinder landing site)",
        status: "Mission ended in 1997 — resting beside the Pathfinder lander", distance: "About 100 m in total",
        short: "The first rover on Mars",
        summary: "A rover the size of a microwave oven — the very first wheeled explorer on Mars.",
        purpose: "Mars Pathfinder was designed to show a new, low-cost way to land on Mars and to test a small rover. Sojourner studied the rocks and soil around the landing site in an ancient flood channel.",
        design: "Sojourner was a small six-wheeled rover with a solar panel on top. It used a “rocker-bogie” suspension to climb over rocks and had cameras plus an instrument (APXS) to measure what rocks and soil are made of. The Pathfinder lander bounced to a stop on giant airbags.",
        discoveries: ["First rover ever to drive on Mars.", "Analyzed the chemistry of rocks and soil around Ares Vallis.", "Rocks and pebbles at the site suggested that huge floods of water once flowed there.", "The mission sent back thousands of images and lasted about three times longer than planned for the lander and twelve times longer for the rover."],
        facts: ["The lander bounced on airbags many times before it stopped rolling.", "Scientists gave the rocks fun names like “Barnacle Bill” and “Yogi.”", "The lander was renamed the Carl Sagan Memorial Station."],
        dyk: ["Sojourner was about as big as a microwave oven.", "It landed on the 4th of July!", "A 12-year-old student named it after Sojourner Truth.", "Its lander bounced on giant airbags like a beach ball."],
        now: "Sojourner sits near the Mars Pathfinder lander in Ares Vallis. Contact with the mission was lost on 27 September 1997.",
        why: "Sojourner proved that rovers could work on Mars. It opened the door for Spirit, Opportunity, Curiosity and Perseverance.",
        sources: [["NASA Science — Mars Pathfinder", "https://science.nasa.gov/mission/mars-pathfinder/"], ["NASA NSSDCA — Mars Pathfinder", NSSDC("1996-068A")]],
        quiz: [
            ["Which mission carried Sojourner to Mars?", "Mars Pathfinder", "Viking 1", "Mars Odyssey", "Phoenix"],
            ["When did Sojourner land on Mars?", "4 July 1997", "4 January 2004", "6 August 2012", "18 February 2021"],
            ["Where did Sojourner land?", "Ares Vallis", "Gale Crater", "Jezero Crater", "Gusev Crater"],
            ["What “first” did Sojourner achieve?", "First rover to drive on Mars", "First helicopter on Mars", "First rover on the Moon", "First human on Mars"],
            ["How did the Pathfinder lander slow down and land?", "It bounced on giant airbags", "A sky crane lowered it", "It landed on a runway", "It landed in an ocean"],
            ["About how big was Sojourner?", "About the size of a microwave oven", "About the size of a car", "About the size of a bus", "About the size of a coin"],
            ["Who was Sojourner named after?", "Sojourner Truth", "A planet", "A ship", "A dog"],
            ["Who suggested the name Sojourner?", "A 12-year-old student in an essay contest", "A president", "An astronaut", "A robot"],
            ["What was the Pathfinder lander renamed?", "Carl Sagan Memorial Station", "Bradbury Landing", "Wright Brothers Field", "Octavia E. Butler Landing"],
            ["How many wheels did Sojourner have?", "6", "4", "8", "3"]]
    },
    {
        id: "spirit", world: "mars", art: "mer", name: "Spirit", agency: "NASA / JPL", mission: "Mars Exploration Rover A",
        year: 2003, landedYear: 2004, launch: "10 June 2003", landing: "4 January 2004",
        location: "Gusev Crater", lat: -14.57, lon: 175.47,
        coords: "14.57° S, 175.47° E (landing site in Gusev Crater)",
        status: "Mission ended in 2011 — resting at a spot called “Troy” in Gusev Crater", distance: "About 7.7 km",
        short: "The twin who never gave up",
        summary: "One of NASA's twin rovers. Planned for 90 Martian days, it explored Gusev Crater for more than six years.",
        purpose: "Spirit's job was to search Gusev Crater for clues that liquid water once existed on Mars, by studying rocks and soil like a robot geologist.",
        design: "Spirit was a six-wheeled, solar-powered rover about the size of a golf cart. A tall mast held panoramic cameras, and a robotic arm carried a microscope, spectrometers and a rock-grinding tool (RAT) to look inside rocks.",
        discoveries: ["Found rocks and minerals showing that water had changed them long ago.", "Discovered soil almost pure silica — strong evidence for ancient hot springs or steam vents.", "Found carbonate minerals in rocks named “Comanche,” a sign of past water.", "Climbed Husband Hill and explored a plateau called Home Plate."],
        facts: ["When one front wheel stopped working, Spirit drove backward, dragging the broken wheel — which accidentally dug up the silica-rich soil!", "Martian winds and dust devils sometimes cleaned its solar panels and gave it extra power.", "In 2009 it got stuck in soft soil at a place called “Troy.”"],
        dyk: ["Spirit was planned to work for 90 days — it worked for over 6 years!", "A broken wheel helped it make a big discovery.", "Mars wind cleaned its solar panels like a free car wash.", "Spirit had a twin sister rover: Opportunity."],
        now: "Spirit sits at “Troy,” on the west side of Home Plate in Gusev Crater. It last communicated on 22 March 2010, and NASA ended the mission on 25 May 2011.",
        why: "Spirit showed that Gusev Crater once had hot, watery environments — the kind of places where microbes might have lived.",
        sources: [["NASA Science — Spirit rover", "https://science.nasa.gov/mission/mer-spirit/"], ["NASA NSSDCA — MER-A Spirit", NSSDC("2003-027A")]],
        quiz: [
            ["In what year did Spirit land on Mars?", "2004", "1997", "2012", "2021"],
            ["In which crater did Spirit land?", "Gusev Crater", "Gale Crater", "Jezero Crater", "Eagle Crater"],
            ["What was the name of Spirit's twin rover?", "Opportunity", "Curiosity", "Sojourner", "Zhurong"],
            ["How long was Spirit's mission first planned to last?", "90 Martian days", "10 years", "1 day", "100 years"],
            ["Where did Spirit get stuck in soft soil?", "At a place called “Troy”", "In an ocean", "In a cave", "On Olympus Mons"],
            ["What important soil did Spirit find?", "Silica-rich soil, a clue to ancient hot springs", "Gold", "Living microbes", "Liquid water today"],
            ["What sometimes cleaned Spirit's solar panels?", "Wind and dust devils", "Rain", "Astronauts", "A robotic broom"],
            ["Why did Spirit start driving backward?", "One front wheel stopped working", "It was faster", "Its camera was in the back", "It was lost"],
            ["In what year did Spirit last communicate with Earth?", "2010", "2004", "2018", "2024"],
            ["About how far did Spirit drive?", "About 7.7 km", "About 77 km", "About 0.7 km", "About 770 km"]]
    },
    {
        id: "opportunity", world: "mars", art: "mer", name: "Opportunity", agency: "NASA / JPL", mission: "Mars Exploration Rover B",
        year: 2003, landedYear: 2004, launch: "7 July 2003", landing: "25 January 2004",
        location: "Meridiani Planum", lat: -1.95, lon: -5.53,
        coords: "1.95° S, 5.53° W (354.47° E) — landing site in Eagle Crater",
        status: "Mission ended in 2019 — resting in Perseverance Valley, Endeavour Crater", distance: "About 45 km (more than a marathon)",
        short: "The marathon rover",
        summary: "Planned for 90 Martian days, “Oppy” explored for almost 15 years and drove more than a marathon.",
        purpose: "Opportunity was sent to Meridiani Planum, on the other side of Mars from Spirit, to look for evidence of past water and learn whether Mars once had environments friendly to life.",
        design: "Opportunity was the identical twin of Spirit: six wheels, solar panels, a camera mast and a robotic arm with science tools, including a rock-grinding tool and a microscopic imager.",
        discoveries: ["Found strong evidence that liquid water once soaked the ground at Meridiani Planum.", "Discovered tiny round hematite pebbles nicknamed “blueberries,” which formed in water.", "Found veins of gypsum, a mineral left behind by water flowing through cracks.", "Explored huge craters including Victoria and Endeavour."],
        facts: ["It landed inside a small crater by chance — NASA called it a “hole in one.”", "In 2014 it passed Lunokhod 2's record for the longest distance driven on another world.", "A giant dust storm in 2018 blocked the sunlight that powered it."],
        dyk: ["Opportunity was nicknamed “Oppy.”", "It drove farther than a marathon run!", "It found tiny round pebbles called “blueberries.”", "It was planned for 90 days but lasted almost 15 years."],
        now: "Opportunity rests in Perseverance Valley on the western rim of Endeavour Crater. It last communicated on 10 June 2018, and NASA ended the mission on 13 February 2019.",
        why: "Opportunity proved that Mars once had liquid water at its surface and set the record for the longest drive on another world.",
        sources: [["NASA Science — Opportunity rover", "https://science.nasa.gov/mission/mer-opportunity/"], ["NASA NSSDCA — MER-B Opportunity", NSSDC("2003-032A")]],
        quiz: [
            ["When did Opportunity land on Mars?", "January 2004", "July 1997", "August 2012", "May 2021"],
            ["Where did Opportunity land?", "Meridiani Planum", "Utopia Planitia", "Gusev Crater", "Jezero Crater"],
            ["What were Opportunity's tiny round pebbles nicknamed?", "Blueberries", "Cherries", "Peas", "Marbles"],
            ["Opportunity was planned for 90 days. How long did it work?", "Almost 15 years", "90 days", "1 year", "50 years"],
            ["About how far did Opportunity drive?", "About 45 km — more than a marathon", "About 4.5 km", "About 450 km", "About 450 m"],
            ["Which record did Opportunity set?", "Longest distance driven on another world", "Fastest rover ever", "Highest jump on Mars", "Deepest hole on Mars"],
            ["What ended Opportunity's mission?", "A huge dust storm in 2018", "A flood", "A meteor", "It fell off a cliff"],
            ["Opportunity's landing in a small crater was called a…", "“Hole in one”", "“Home run”", "“Slam dunk”", "“Touchdown dance”"],
            ["Where is Opportunity resting now?", "Perseverance Valley, Endeavour Crater", "On Olympus Mons", "At the Mars north pole", "Inside Jezero Crater"],
            ["What big discovery did Opportunity make?", "Liquid water once soaked the ground", "Martians", "Trees", "Oil"]]
    },
    {
        id: "curiosity", world: "mars", art: "msl", name: "Curiosity", agency: "NASA / JPL", mission: "Mars Science Laboratory",
        year: 2011, landedYear: 2012, launch: "26 November 2011", landing: "6 August 2012 (UTC)",
        location: "Gale Crater (Bradbury Landing)", lat: -4.5895, lon: 137.4417,
        coords: "4.59° S, 137.44° E (Bradbury Landing, Gale Crater)",
        status: "Active — still climbing Mount Sharp", distance: "More than 30 km and counting",
        short: "The car-sized science lab climbing a mountain",
        summary: "A car-sized, nuclear-powered science lab that found an ancient lake in Gale Crater and is still exploring.",
        purpose: "Curiosity's main question: did Mars ever have environments able to support tiny life forms (microbes)? It studies layers of rock on Mount Sharp, which record Mars's history like pages in a book.",
        design: "Curiosity is about the size of a small car. It is powered by a nuclear power source (MMRTG) instead of solar panels, so it can work day and night. It has 17 cameras, a laser called ChemCam that zaps rocks from a distance, a drill, and a mini chemistry lab inside.",
        discoveries: ["Found that Gale Crater once held a lake with water that could have supported microbes.", "Detected organic molecules — carbon-based building blocks — in ancient rocks.", "Measured methane in the air going up and down with the seasons.", "Measured the radiation astronauts would face on a trip to Mars."],
        facts: ["It landed using a “sky crane” that lowered it on cables from a rocket-powered descent stage.", "The holes in its wheels spell “JPL” in Morse code, leaving a pattern in the dirt.", "It takes selfies with a camera on its robotic arm."],
        dyk: ["Curiosity is as big as a small car!", "Its laser can zap a rock from several meters away.", "It landed with a flying “sky crane.”", "Its wheels write “JPL” in Morse code on Mars."],
        now: "Curiosity is still active, slowly climbing the lower slopes of Mount Sharp (Aeolis Mons) inside Gale Crater.",
        why: "Curiosity proved Mars was once habitable — it had liquid water, the right chemistry, and energy that microbes could have used.",
        sources: [["NASA Science — Curiosity rover", "https://science.nasa.gov/mission/msl-curiosity/"], ["NASA NSSDCA — Mars Science Laboratory", NSSDC("2011-070A")]],
        quiz: [
            ["When did Curiosity land on Mars?", "August 2012", "January 2004", "July 1997", "February 2021"],
            ["In which crater did Curiosity land?", "Gale Crater", "Jezero Crater", "Gusev Crater", "Eagle Crater"],
            ["Which mountain is Curiosity climbing?", "Mount Sharp (Aeolis Mons)", "Olympus Mons", "Mount Everest", "The Apennines"],
            ["How did Curiosity land?", "A “sky crane” lowered it on cables", "It bounced on airbags", "It used only a parachute", "It landed on a runway"],
            ["What powers Curiosity?", "A nuclear power source (MMRTG)", "Solar panels", "Wind", "Gasoline"],
            ["About how big is Curiosity?", "About the size of a small car", "About the size of a microwave", "About the size of a bus", "About the size of a phone"],
            ["What big discovery did Curiosity make?", "An ancient lake that could have supported microbes", "Living animals", "Flowing rivers today", "Gold"],
            ["What does Curiosity's ChemCam do?", "Zaps rocks with a laser to study them", "Cuts rocks in half", "Sends messages to aliens", "Lights the way at night"],
            ["What do Curiosity's wheel holes spell in Morse code?", "JPL", "NASA", "MARS", "HELLO"],
            ["Is Curiosity still working?", "Yes, it is still exploring", "No, it ended in 2010", "It never landed", "It came back to Earth"]]
    },
    {
        id: "perseverance", world: "mars", art: "percy", name: "Perseverance", agency: "NASA / JPL", mission: "Mars 2020",
        year: 2020, landedYear: 2021, launch: "30 July 2020", landing: "18 February 2021",
        location: "Jezero Crater (Octavia E. Butler Landing)", lat: 18.4447, lon: 77.4508,
        coords: "18.44° N, 77.45° E (Octavia E. Butler Landing, Jezero Crater)",
        status: "Active — exploring Jezero Crater and its rim", distance: "Still driving — tens of kilometers so far",
        short: "The sample collector searching for ancient life",
        summary: "NASA's newest rover, collecting rock samples in an ancient lake and river delta in Jezero Crater.",
        purpose: "Perseverance is searching for signs of ancient microbial life and collecting rock and soil samples in sealed tubes that could one day be brought back to Earth. It also tests technology for future human explorers.",
        design: "Perseverance is about the size of a car and nuclear-powered like Curiosity, with an upgraded design. It has 23 cameras, two microphones, a 2-meter robotic arm with a coring drill, and a system that seals samples in tubes. It used Terrain-Relative Navigation to steer to a safe landing spot.",
        discoveries: ["Explored the delta of an ancient river that flowed into a lake in Jezero Crater.", "Collected and sealed many rock-core samples for possible return to Earth.", "Its MOXIE experiment made oxygen from the carbon dioxide in Mars's air — a first.", "Recorded the first sounds from the surface of Mars with its microphones.", "Found a rock nicknamed “Cheyava Falls” with features NASA calls a potential biosignature — a possible clue that needs more study."],
        facts: ["It carried the Ingenuity helicopter to Mars under its belly.", "Its name came from an essay by seventh-grader Alex Mather.", "It carries chips with the names of about 10.9 million people!"],
        dyk: ["Perseverance can hear Mars with its microphones.", "It made oxygen on Mars — like a tiny tree!", "A 7th grader named it.", "It brought a helicopter friend: Ingenuity."],
        now: "Perseverance is still active, exploring Jezero Crater and the crater rim, where some of the oldest rocks it has studied are found.",
        why: "Perseverance is taking the first steps toward bringing Mars rocks to Earth, where powerful labs could finally answer whether life ever existed on Mars.",
        sources: [["NASA Science — Perseverance rover", "https://science.nasa.gov/mission/mars-2020-perseverance/"], ["NASA NSSDCA — Mars 2020", NSSDC("2020-052A")]],
        quiz: [
            ["When did Perseverance land on Mars?", "18 February 2021", "4 July 1997", "6 August 2012", "25 January 2004"],
            ["In which crater did Perseverance land?", "Jezero Crater", "Gale Crater", "Gusev Crater", "Le Monnier crater"],
            ["Why was Jezero Crater chosen?", "It once held a lake and a river delta", "It has active volcanoes", "It is the highest place on Mars", "It is full of ice cream"],
            ["What is one of Perseverance's main jobs?", "Collecting rock samples that could return to Earth", "Building a house", "Finding gold", "Measuring the Moon"],
            ["What did the MOXIE experiment do?", "Made oxygen from Mars's carbon dioxide air", "Grew plants", "Made water", "Made rocket fuel for the trip home"],
            ["What did Perseverance carry to Mars?", "The Ingenuity helicopter", "A Moon rover", "A satellite", "A telescope"],
            ["Who suggested the name Perseverance?", "Seventh-grader Alex Mather", "A NASA director", "An astronaut", "A famous singer"],
            ["What did Perseverance record for the first time?", "Sounds on the surface of Mars", "Snowfall", "Music by Martians", "Earthquakes on the Moon"],
            ["What is Perseverance's landing site called?", "Octavia E. Butler Landing", "Bradbury Landing", "Carl Sagan Memorial Station", "Wright Brothers Field"],
            ["How many people's names does Perseverance carry on chips?", "About 10.9 million", "About 100", "About 1,000", "About 1 billion"]]
    },
    {
        id: "zhurong", world: "mars", art: "zhurong", name: "Zhurong", agency: "China National Space Administration (CNSA)", mission: "Tianwen-1",
        year: 2020, landedYear: 2021, launch: "23 July 2020", landing: "14 May 2021 (UTC)",
        location: "Southern Utopia Planitia", lat: 25.1, lon: 109.9,
        coords: "≈ 25.1° N, 109.9° E (landing area, southern Utopia Planitia)",
        status: "Inactive — went into hibernation in 2022 and has not woken up", distance: "About 1.9 km",
        short: "China's first Mars rover, seen from orbit by NASA",
        summary: "China's first Mars rover. NASA's HiRISE camera on the Mars Reconnaissance Orbiter photographed it and its lander from orbit.",
        purpose: "The Tianwen-1 mission carried an orbiter, a lander and the Zhurong rover. Zhurong studied the surface geology, soil, and the possible presence of underground water ice in Utopia Planitia.",
        design: "Zhurong is a six-wheeled, solar-powered rover with solar panels that open like butterfly wings. It carried cameras, a ground-penetrating radar to look under the surface, and instruments to study rocks, magnetic fields and weather.",
        discoveries: ["Made China the second country to operate a rover on Mars.", "Explored southern Utopia Planitia, a huge plain in Mars's northern lowlands.", "Used ground-penetrating radar to study the layers beneath the surface."],
        facts: ["NASA's HiRISE camera on the Mars Reconnaissance Orbiter photographed Zhurong and its landing platform in June 2021.", "Utopia Planitia is the same giant plain where NASA's Viking 2 lander touched down in 1976.", "Zhurong is named after the god of fire in Chinese mythology."],
        dyk: ["Zhurong's solar panels look like butterfly wings.", "A NASA camera in orbit took its picture from space.", "It is named after a fire god — fitting for the Red Planet!", "It landed on the same big plain as NASA's Viking 2."],
        now: "Zhurong remains in southern Utopia Planitia. It entered planned hibernation in May 2022 for the Martian winter and has not resumed operations.",
        why: "Zhurong added a new country to Mars exploration and studied a part of the northern plains where scientists look for buried ice and clues about ancient water.",
        sources: [["NASA Photojournal — The Zhurong Rover Explores Utopia Planitia (HiRISE)", "https://photojournal.jpl.nasa.gov/catalog/PIA24914"], ["NASA NSSDCA — Tianwen-1", NSSDC("2020-049A")]],
        quiz: [
            ["Which country's space agency built Zhurong?", "China", "USA", "Russia", "India"],
            ["Which mission carried Zhurong to Mars?", "Tianwen-1", "Mars 2020", "Viking 2", "Luna 21"],
            ["When did Zhurong land on Mars?", "May 2021", "August 2012", "July 1997", "January 2004"],
            ["Where did Zhurong land?", "Utopia Planitia", "Gale Crater", "Jezero Crater", "Meridiani Planum"],
            ["Zhurong is named after…", "The god of fire in Chinese mythology", "A famous river", "A scientist", "A star"],
            ["What do Zhurong's solar panels look like?", "Butterfly wings", "An umbrella", "A flower pot", "A kite"],
            ["Which NASA camera photographed Zhurong from orbit?", "HiRISE on Mars Reconnaissance Orbiter", "Hubble", "LRO camera", "Curiosity's Mastcam"],
            ["How many wheels does Zhurong have?", "6", "4", "8", "2"],
            ["Which NASA lander also touched down on Utopia Planitia, in 1976?", "Viking 2", "Sojourner", "Phoenix", "InSight"],
            ["What happened to Zhurong in 2022?", "It went into hibernation and has not woken up", "It flew away", "It returned to Earth", "It met Curiosity"]]
    },
    {
        id: "ingenuity", world: "mars", art: "heli", name: "Ingenuity (Mars Helicopter)", agency: "NASA / JPL", mission: "Mars 2020 technology demonstration",
        year: 2020, landedYear: 2021, launch: "30 July 2020 (with Perseverance)", landing: "18 February 2021 · first flight 19 April 2021",
        location: "Jezero Crater (first flight at Wright Brothers Field)", lat: 18.4447, lon: 77.4508,
        coords: "≈ 18.4° N, 77.4° E — Jezero Crater, beside Perseverance's landing site",
        status: "Mission ended January 2024 — resting in Jezero Crater", distance: "72 flights · about 17 km flown",
        short: "The first aircraft to fly on another planet",
        summary: "A tiny helicopter that made the first powered, controlled flight on another planet — and then flew 72 times.",
        purpose: "Ingenuity was a technology demonstration: NASA wanted to know if a helicopter could fly in Mars's very thin air. It was planned for up to 5 test flights in about 30 days.",
        design: "Ingenuity weighed about 1.8 kg. It had two stacked rotors, each about 1.2 meters across, spinning in opposite directions at about 2,400 rotations per minute. A small solar panel on top charged its batteries, and cameras helped it navigate.",
        discoveries: ["Made the first powered, controlled flight on another planet on 19 April 2021.", "Flew 72 times instead of 5, for a total of more than two hours in the air.", "Became a scout, taking pictures to help Perseverance plan its routes.", "Showed that future Mars missions can use aircraft."],
        facts: ["It carried a small piece of fabric from the Wright brothers' 1903 airplane, the Flyer.", "Its first airfield was named “Wright Brothers Field.”", "Its final flight was on 18 January 2024; a damaged rotor blade ended its mission."],
        dyk: ["Ingenuity weighed about as much as a big bag of sugar.", "Its blades spun about 2,400 times every minute!", "It was supposed to fly 5 times — it flew 72!", "It carried a tiny piece of the Wright brothers' plane."],
        now: "Ingenuity rests in Jezero Crater, a few kilometers from where it first flew. NASA ended its mission on 25 January 2024 after rotor damage on its 72nd flight.",
        why: "Ingenuity proved flight is possible on Mars, opening the door to future Mars helicopters that could scout places rovers cannot reach.",
        sources: [["NASA Science — Ingenuity Mars Helicopter", "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/"], ["NASA Science — Perseverance rover", "https://science.nasa.gov/mission/mars-2020-perseverance/"]],
        quiz: [
            ["What kind of vehicle is Ingenuity?", "A helicopter", "A rover", "An orbiter", "A rocket"],
            ["When did Ingenuity make its first flight?", "19 April 2021", "4 July 1997", "6 August 2012", "18 January 2024"],
            ["Why was Ingenuity's first flight historic?", "First powered, controlled flight on another planet", "First rover on Mars", "First Moon landing", "First human on Mars"],
            ["How many flights was Ingenuity first planned to make?", "Up to 5", "72", "1", "500"],
            ["How many times did Ingenuity actually fly?", "72", "5", "10", "1,000"],
            ["About how much did Ingenuity weigh?", "About 1.8 kg", "About 180 kg", "About 18 kg", "About 18 g"],
            ["About how fast did its rotors spin?", "About 2,400 rotations per minute", "About 24 per minute", "About 240 per minute", "About 2 per minute"],
            ["What special item did Ingenuity carry?", "A piece of fabric from the Wright brothers' Flyer", "A Moon rock", "A flag", "A toy rocket"],
            ["What was Ingenuity's first airfield called?", "Wright Brothers Field", "Bradbury Landing", "Ares Vallis", "Home Plate"],
            ["What ended Ingenuity's mission in 2024?", "Damage to a rotor blade", "It ran out of fuel", "It was blown away by wind", "It landed on Earth"]]
    }];

const TIMELINE_MOON = [
    { y: "1959", t: "Luna 2", i: "impact", d: "The Soviet Luna 2 becomes the first spacecraft to reach the Moon's surface, by impact.", u: NSSDC("1959-014A") },
    { y: "1966", t: "Luna 9 & Surveyor 1", i: "lander", d: "The first soft landings on the Moon: Luna 9 in February and NASA's Surveyor 1 in June.", u: "https://science.nasa.gov/mission/surveyor-1/" },
    { y: "1969", t: "Apollo 11", i: "crew", d: "Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon.", u: "https://www.nasa.gov/mission/apollo-11/" },
    { y: "1970", t: "Lunokhod 1 (Luna 17)", i: "rover", d: "The first robotic rover drives on another world, controlled from Earth.", v: "lunokhod-1" },
    { y: "1971", t: "Apollo 15 Lunar Roving Vehicle", i: "rover", d: "Astronauts drive a car on the Moon for the first time.", v: "apollo-15-lrv" },
    { y: "1972", t: "Apollo 16 Lunar Roving Vehicle", i: "rover", d: "The first human exploration of the lunar highlands.", v: "apollo-16-lrv" },
    { y: "1972", t: "Apollo 17 Lunar Roving Vehicle", i: "crew", d: "The last Apollo landing — and the most recent time humans walked on the Moon.", v: "apollo-17-lrv" },
    { y: "1973", t: "Lunokhod 2 (Luna 21)", i: "rover", d: "Drives about 42 km, a distance record that lasts more than 40 years.", v: "lunokhod-2" },
    { y: "2009", t: "Lunar Reconnaissance Orbiter", i: "orbiter", d: "NASA's LRO begins mapping the Moon in amazing detail — later photographing Apollo sites and the Lunokhods.", u: "https://science.nasa.gov/mission/lro/" },
    { y: "2022", t: "Artemis I", i: "rocket", d: "NASA's uncrewed Orion spacecraft flies around the Moon and back, preparing for astronauts to return.", u: "https://www.nasa.gov/mission/artemis-i/" }
];
const TIMELINE_MARS = [
    { y: "1965", t: "Mariner 4", i: "orbiter", d: "NASA's Mariner 4 makes the first successful flyby of Mars and sends the first close-up pictures.", u: "https://science.nasa.gov/mission/mariner-4/" },
    { y: "1971", t: "Mariner 9", i: "orbiter", d: "The first spacecraft to orbit another planet maps volcanoes and giant canyons on Mars.", u: "https://science.nasa.gov/mission/mariner-9/" },
    { y: "1976", t: "Viking 1 & 2", i: "lander", d: "NASA's Viking landers take the first pictures from the surface of Mars and search for life.", u: "https://science.nasa.gov/mission/viking-1/" },
    { y: "1997", t: "Mars Pathfinder & Sojourner", i: "rover", d: "Sojourner becomes the first rover to drive on Mars.", v: "sojourner" },
    { y: "2004", t: "Spirit & Opportunity", i: "rover", d: "Twin rovers land on opposite sides of Mars and find evidence of past water.", v: "opportunity" },
    { y: "2006", t: "Mars Reconnaissance Orbiter", i: "orbiter", d: "MRO arrives with its HiRISE camera, later used to photograph rovers from orbit.", u: "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/" },
    { y: "2008", t: "Phoenix", i: "lander", d: "NASA's Phoenix lands in the far north and touches water ice under the soil.", u: "https://science.nasa.gov/mission/phoenix/" },
    { y: "2012", t: "Curiosity", i: "rover", d: "A car-sized rover lands with a sky crane and discovers an ancient habitable lake.", v: "curiosity" },
    { y: "2018", t: "InSight", i: "lander", d: "NASA's InSight lander listens for marsquakes to study the inside of Mars.", u: "https://science.nasa.gov/mission/insight/" },
    { y: "2021", t: "Perseverance & Ingenuity", i: "heli", d: "Perseverance starts collecting samples, and Ingenuity makes the first flight on another planet.", v: "perseverance" },
    { y: "2021", t: "Zhurong (Tianwen-1)", i: "rover", d: "China's first Mars rover lands in Utopia Planitia; NASA's HiRISE photographs it from orbit.", v: "zhurong" },
    { y: "2024", t: "Ingenuity's final flight", i: "heli", d: "After 72 flights, the Mars Helicopter's mission ends.", v: "ingenuity" }
];

const SOURCE_GROUPS = [
    {
        h: "Moon vehicles", l: [
            ["NASA NSSDCA — Luna 17 / Lunokhod 1", NSSDC("1970-095A")],
            ["NASA NSSDCA — Luna 21 / Lunokhod 2", NSSDC("1973-001A")],
            ["NASA NSSDCA — Apollo Lunar Roving Vehicle", "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html"],
            ["NASA — Apollo 15", "https://www.nasa.gov/mission/apollo-15/"],
            ["NASA — Apollo 16", "https://www.nasa.gov/mission/apollo-16/"],
            ["NASA — Apollo 17", "https://www.nasa.gov/mission/apollo-17/"],
            ["NASA NSSDCA — Apollo landing site coordinates", "https://nssdc.gsfc.nasa.gov/planetary/lunar/lunar_sites.html"]]
    },
    {
        h: "Mars vehicles", l: [
            ["NASA Science — Mars Pathfinder (Sojourner)", "https://science.nasa.gov/mission/mars-pathfinder/"],
            ["NASA Science — Spirit", "https://science.nasa.gov/mission/mer-spirit/"],
            ["NASA Science — Opportunity", "https://science.nasa.gov/mission/mer-opportunity/"],
            ["NASA Science — Curiosity", "https://science.nasa.gov/mission/msl-curiosity/"],
            ["NASA Science — Perseverance", "https://science.nasa.gov/mission/mars-2020-perseverance/"],
            ["NASA Science — Ingenuity Mars Helicopter", "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/"],
            ["NASA Photojournal — Zhurong seen by HiRISE (PIA24914)", "https://photojournal.jpl.nasa.gov/catalog/PIA24914"],
            ["NASA NSSDCA — Tianwen-1", NSSDC("2020-049A")]]
    },
    {
        h: "Maps, images & timelines", l: [
            ["NASA Science — Lunar Reconnaissance Orbiter", "https://science.nasa.gov/mission/lro/"],
            ["NASA LRO Camera — Lunokhod 1 Revisited", "https://lroc.im-ldi.com/posts/402"],
            ["NASA LRO Camera — Lunokhod 2 Revisited", "https://lroc.im-ldi.com/images/699"],
            ["NASA Science — The Moon", "https://science.nasa.gov/moon/"],
            ["NASA Science — Mars", "https://science.nasa.gov/mars/"],
            ["NASA Science — Mars Reconnaissance Orbiter", "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/"],
            ["NASA Image and Video Library", "https://images.nasa.gov/"],
            ["NASA — Artemis I", "https://www.nasa.gov/mission/artemis-i/"]]
    }
];

/* =========================================================
   ILLUSTRATIONS (original SVG drawings)
   ========================================================= */
let _uid = 0;
function wheel(cx, cy, r, mesh) {
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${mesh ? '#64748b' : '#334155'}" stroke="#cbd5e1" stroke-width="2"/>`;
    if (mesh) { for (let a = 0; a < 6; a++) { const an = a * Math.PI / 6; s += `<line x1="${cx - Math.cos(an) * r}" y1="${cy - Math.sin(an) * r}" x2="${cx + Math.cos(an) * r}" y2="${cy + Math.sin(an) * r}" stroke="#94a3b8" stroke-width="1.2"/>`; } s += `<circle cx="${cx}" cy="${cy}" r="${r * 0.62}" fill="none" stroke="#94a3b8" stroke-width="1.2"/>`; }
    else { for (let a = 0; a < 4; a++) { const an = a * Math.PI / 4; s += `<line x1="${cx - Math.cos(an) * r * .7}" y1="${cy - Math.sin(an) * r * .7}" x2="${cx + Math.cos(an) * r * .7}" y2="${cy + Math.sin(an) * r * .7}" stroke="#94a3b8" stroke-width="1.6"/>`; } }
    return s + `<circle cx="${cx}" cy="${cy}" r="${r * 0.22}" fill="#e2e8f0"/>`;
}
function panelGrid(points, cols) {
    return `<polygon points="${points}" fill="#1e40af" stroke="#0f172a" stroke-width="1.5"/>`;
}
function vehicleShape(type) {
    switch (type) {
        case "lunokhod": {
            let s = "";
            s += `<polygon points="-110,-150 -30,-162 6,-80 -76,-70" fill="#1d4ed8" stroke="#0f172a" stroke-width="2"/>`;
            for (let i = 1; i < 5; i++) { const t = i / 5; s += `<line x1="${-110 + 80 * t}" y1="${-150 - 12 * t}" x2="${-76 + 82 * t}" y2="${-70 - 10 * t}" stroke="#60a5fa" stroke-width="1"/>`; }
            for (let i = 1; i < 4; i++) { const t = i / 4; s += `<line x1="${-110 + 34 * t}" y1="${-150 + 80 * t}" x2="${-30 + 36 * t}" y2="${-162 + 82 * t}" stroke="#60a5fa" stroke-width="1"/>`; }
            s += `<path d="M-60,-30 L60,-30 L76,-70 L-76,-70 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>`;
            s += `<path d="M-52,-36 L52,-36 L62,-58 L-62,-58 Z" fill="#e2e8f0" opacity=".6"/>`;
            s += `<ellipse cx="0" cy="-70" rx="76" ry="7" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>`;
            s += `<circle cx="64" cy="-50" r="5" fill="#0f172a"/><circle cx="52" cy="-50" r="5" fill="#0f172a"/>`;
            s += `<line x1="40" y1="-72" x2="58" y2="-118" stroke="#475569" stroke-width="3"/><path d="M50,-122 L66,-114 L58,-104 Z" fill="#94a3b8"/>`;
            s += `<line x1="-14" y1="-72" x2="-14" y2="-108" stroke="#475569" stroke-width="2.5"/><circle cx="-14" cy="-110" r="4" fill="#f59e0b"/>`;
            s += `<rect x="66" y="-66" width="14" height="10" rx="2" fill="#fbbf24" stroke="#475569"/>`;
            [-60, -20, 20, 60].forEach(x => s += wheel(x, -15, 15, false));
            return s;
        }
        case "lrv": {
            let s = "";
            s += `<line x1="72" y1="-40" x2="72" y2="-128" stroke="#64748b" stroke-width="3"/>`;
            s += `<path d="M44,-128 Q72,-158 100,-128 Z" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/><line x1="72" y1="-128" x2="72" y2="-146" stroke="#64748b" stroke-width="1.5"/>`;
            s += `<line x1="52" y1="-40" x2="52" y2="-110" stroke="#64748b" stroke-width="2.5"/><path d="M48,-112 l4,-10 l4,10 z" fill="#94a3b8"/>`;
            s += `<rect x="84" y="-74" width="20" height="14" rx="3" fill="#334155"/><circle cx="104" cy="-67" r="4" fill="#0ea5e9"/><line x1="94" y1="-60" x2="94" y2="-40" stroke="#64748b" stroke-width="3"/>`;
            s += `<rect x="-100" y="-44" width="200" height="11" rx="4" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>`;
            s += `<path d="M-46,-44 L-46,-60 L-18,-60 L-18,-44" fill="none" stroke="#475569" stroke-width="3"/><path d="M-46,-60 L-50,-92" stroke="#475569" stroke-width="3"/><rect x="-52" y="-92" width="6" height="34" rx="2" fill="#e5e7eb" stroke="#475569" transform="rotate(-8 -49 -75)"/><rect x="-46" y="-64" width="28" height="6" rx="2" fill="#e5e7eb" stroke="#475569"/>`;
            s += `<path d="M-6,-44 L-6,-60 L22,-60 L22,-44" fill="none" stroke="#475569" stroke-width="3"/><path d="M-6,-60 L-10,-92" stroke="#475569" stroke-width="3"/><rect x="-12" y="-92" width="6" height="34" rx="2" fill="#e5e7eb" stroke="#475569" transform="rotate(-8 -9 -75)"/><rect x="-6" y="-64" width="28" height="6" rx="2" fill="#e5e7eb" stroke="#475569"/>`;
            s += `<rect x="30" y="-78" width="18" height="14" rx="2" fill="#cbd5e1" stroke="#475569"/><line x1="39" y1="-64" x2="39" y2="-44" stroke="#475569" stroke-width="3"/>`;
            s += `<rect x="-96" y="-62" width="34" height="18" rx="3" fill="#cbd5e1" stroke="#475569"/>`;
            s += `<path d="M-104,-30 Q-80,-58 -56,-30" fill="none" stroke="#e2e8f0" stroke-width="6" stroke-linecap="round"/><path d="M56,-30 Q80,-58 104,-30" fill="none" stroke="#e2e8f0" stroke-width="6" stroke-linecap="round"/>`;
            s += wheel(-80, -22, 22, true) + wheel(80, -22, 22, true);
            return s;
        }
        case "sojourner": {
            let s = "";
            s += `<line x1="34" y1="-50" x2="40" y2="-100" stroke="#475569" stroke-width="2.5"/><circle cx="40" cy="-102" r="3.5" fill="#f59e0b"/>`;
            s += `<rect x="-52" y="-56" width="104" height="8" rx="2" fill="#1e40af" stroke="#0f172a" stroke-width="1.5"/>`;
            for (let i = 1; i < 8; i++) s += `<line x1="${-52 + 13 * i}" y1="-56" x2="${-52 + 13 * i}" y2="-48" stroke="#60a5fa" stroke-width="1"/>`;
            s += `<rect x="-46" y="-48" width="92" height="22" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>`;
            s += `<rect x="-40" y="-44" width="28" height="12" rx="2" fill="#fbbf24" opacity=".8"/>`;
            s += `<circle cx="38" cy="-38" r="4" fill="#0f172a"/><circle cx="28" cy="-38" r="4" fill="#0f172a"/>`;
            s += `<path d="M-48,-11 L-30,-30 L0,-30 M0,-30 L22,-11 M-30,-30 L-4,-11 M22,-30 L48,-11" stroke="#475569" stroke-width="3" fill="none"/>`;
            [-48, 0, 48].forEach(x => s += wheel(x, -11, 11, false));
            return s;
        }
        case "mer": {
            let s = "";
            s += `<polygon points="-112,-74 104,-74 92,-84 -100,-84" fill="#1e40af" stroke="#0f172a" stroke-width="1.5"/>`;
            for (let i = 1; i < 10; i++) s += `<line x1="${-112 + 21.6 * i}" y1="-74" x2="${-100 + 19.2 * i}" y2="-84" stroke="#60a5fa" stroke-width="1"/>`;
            s += `<rect x="-48" y="-74" width="96" height="30" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>`;
            s += `<rect x="-42" y="-68" width="40" height="18" rx="2" fill="#d4a017" opacity=".55"/>`;
            s += `<rect x="30" y="-150" width="7" height="76" fill="#cbd5e1" stroke="#475569"/>`;
            s += `<rect x="14" y="-164" width="40" height="16" rx="3" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><circle cx="24" cy="-156" r="4" fill="#0f172a"/><circle cx="44" cy="-156" r="4" fill="#0f172a"/>`;
            s += `<ellipse cx="-28" cy="-96" rx="14" ry="6" fill="#f1f5f9" stroke="#475569" transform="rotate(-25 -28 -96)"/><line x1="-28" y1="-90" x2="-28" y2="-84" stroke="#475569" stroke-width="2"/>`;
            s += `<path d="M48,-54 L72,-46 L78,-26" stroke="#475569" stroke-width="3" fill="none"/><rect x="72" y="-28" width="12" height="10" rx="2" fill="#94a3b8"/>`;
            s += `<path d="M-60,-14 L-34,-44 L4,-44 M4,-44 L30,-14 M-34,-44 L-4,-14 M30,-44 L60,-14" stroke="#475569" stroke-width="3.5" fill="none"/>`;
            [-60, 0, 60].forEach(x => s += wheel(x, -14, 14, false));
            return s;
        }
        case "msl": case "percy": {
            const body = type === "percy" ? "#f8fafc" : "#e2e8f0";
            let s = "";
            s += `<polygon points="-104,-82 -84,-110 -70,-104 -86,-74" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>`;
            for (let i = 0; i < 5; i++) s += `<line x1="${-100 + 4 * i}" y1="${-86 - 5 * i}" x2="${-112 + 4 * i}" y2="${-94 - 5 * i}" stroke="#1e293b" stroke-width="2"/>`;
            s += `<rect x="-72" y="-90" width="138" height="36" rx="4" fill="${body}" stroke="#475569" stroke-width="2"/>`;
            s += `<rect x="-64" y="-84" width="50" height="22" rx="2" fill="${type === 'percy' ? '#cbd5e1' : '#d4a017'}" opacity=".55"/>`;
            s += `<polygon points="-20,-108 -2,-116 16,-108 16,-96 -2,-90 -20,-96" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>`;
            s += `<line x1="-2" y1="-90" x2="-2" y2="-96" stroke="#475569" stroke-width="2"/>`;
            s += `<rect x="38" y="-180" width="8" height="90" fill="#cbd5e1" stroke="#475569"/>`;
            s += `<rect x="18" y="-202" width="50" height="24" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/>`;
            s += `<circle cx="${type === 'percy' ? 54 : 56}" cy="-190" r="8" fill="#0f172a"/><circle cx="${type === 'percy' ? 54 : 56}" cy="-190" r="3.5" fill="#38bdf8"/>`;
            s += `<circle cx="30" cy="-186" r="3.5" fill="#0f172a"/><circle cx="30" cy="-195" r="2.5" fill="#0f172a"/>`;
            s += `<path d="M66,-66 L96,-56 L104,-30" stroke="#475569" stroke-width="4" fill="none"/><rect x="96" y="-34" width="18" height="14" rx="3" fill="#94a3b8" stroke="#475569"/>`;
            if (type === "percy") s += `<rect x="-60" y="-52" width="70" height="8" rx="3" fill="#94a3b8"/>`;
            s += `<path d="M-76,-17 L-44,-54 L6,-54 M6,-54 L40,-17 M-44,-54 L-6,-17 M40,-54 L76,-17" stroke="#475569" stroke-width="4" fill="none"/>`;
            [-76, 0, 76].forEach(x => s += wheel(x, -17, 17, false));
            return s;
        }
        case "zhurong": {
            let s = "";
            s += `<polygon points="-40,-66 -118,-96 -112,-112 -30,-74" fill="#1e40af" stroke="#0f172a" stroke-width="1.5"/>`;
            s += `<polygon points="-30,-74 -96,-120 -84,-132 -18,-78" fill="#2563eb" stroke="#0f172a" stroke-width="1.5"/>`;
            s += `<polygon points="40,-66 118,-96 112,-112 30,-74" fill="#1e40af" stroke="#0f172a" stroke-width="1.5"/>`;
            s += `<polygon points="30,-74 96,-120 84,-132 18,-78" fill="#2563eb" stroke="#0f172a" stroke-width="1.5"/>`;
            s += `<rect x="-48" y="-68" width="96" height="30" rx="4" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>`;
            s += `<rect x="-40" y="-62" width="36" height="18" rx="2" fill="#d4a017" opacity=".55"/>`;
            s += `<rect x="4" y="-140" width="6" height="72" fill="#cbd5e1" stroke="#475569"/><rect x="-8" y="-154" width="34" height="16" rx="3" fill="#f1f5f9" stroke="#475569"/><circle cx="2" cy="-146" r="3.5" fill="#0f172a"/><circle cx="16" cy="-146" r="3.5" fill="#0f172a"/>`;
            s += `<path d="M-58,-13 L-34,-38 L4,-38 M4,-38 L30,-13 M-34,-38 L-4,-13 M30,-38 L58,-13" stroke="#475569" stroke-width="3.5" fill="none"/>`;
            [-58, 0, 58].forEach(x => s += wheel(x, -13, 13, false));
            return s;
        }
        case "heli": {
            let s = "";
            s += `<path d="M-14,-40 L-48,0 M14,-40 L48,0 M-8,-40 L-22,0 M8,-40 L22,0" stroke="#64748b" stroke-width="3" fill="none"/>`;
            s += `<rect x="-22" y="-62" width="44" height="26" rx="5" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>`;
            s += `<rect x="-16" y="-56" width="32" height="14" rx="2" fill="#d4a017" opacity=".55"/>`;
            s += `<rect x="-3" y="-140" width="6" height="80" fill="#94a3b8" stroke="#475569"/>`;
            s += `<ellipse cx="0" cy="-88" rx="96" ry="5" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>`;
            s += `<ellipse cx="0" cy="-112" rx="96" ry="5" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>`;
            s += `<ellipse cx="0" cy="-88" rx="96" ry="12" fill="#cbd5e1" opacity=".18"/><ellipse cx="0" cy="-112" rx="96" ry="12" fill="#cbd5e1" opacity=".18"/>`;
            s += `<rect x="-24" y="-148" width="48" height="8" rx="2" fill="#1e40af" stroke="#0f172a"/>`;
            return s;
        }
    }
    return "";
}
function art(type, world, opts = {}) {
    const id = "g" + (++_uid);
    const moon = world === "moon";
    const sky = moon ? `<stop offset="0" stop-color="#0b1b3f"/><stop offset="1" stop-color="#1e3a8a"/>` : `<stop offset="0" stop-color="#f6c79a"/><stop offset="1" stop-color="#e9935a"/>`;
    const gnd = moon ? `<stop offset="0" stop-color="#b8c0cc"/><stop offset="1" stop-color="#6b7280"/>` : `<stop offset="0" stop-color="#d0642a"/><stop offset="1" stop-color="#8f3311"/>`;
    let deco = "";
    if (moon) {
        const st = [[30, 20], [70, 48], [120, 14], [200, 34], [260, 18], [300, 56], [180, 70], [24, 80], [240, 84]];
        st.forEach(([x, y], i) => deco += `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1 : 1.6}" fill="#fff" opacity=".8"/>`);
        deco += `<circle cx="268" cy="44" r="16" fill="#3b82f6"/><path d="M258,38 q6,-6 12,0 q4,6 10,2 q-2,10 -12,10 q-8,-2 -10,-12z" fill="#22c55e" opacity=".85"/><circle cx="268" cy="44" r="16" fill="none" stroke="#bfdbfe" stroke-width="2" opacity=".6"/>`;
    } else {
        deco += `<path d="M0,128 Q60,98 120,122 T240,112 T320,120 L320,140 L0,140Z" fill="#c2603a" opacity=".55"/><circle cx="262" cy="40" r="10" fill="#fff7ed" opacity=".85"/>`;
    }
    const craters = moon ? `<ellipse cx="60" cy="178" rx="22" ry="5" fill="#5b6370" opacity=".5"/><ellipse cx="268" cy="188" rx="30" ry="6" fill="#5b6370" opacity=".45"/><ellipse cx="200" cy="168" rx="12" ry="3" fill="#5b6370" opacity=".4"/>` :
        `<ellipse cx="56" cy="180" rx="10" ry="4" fill="#6d2a10" opacity=".55"/><ellipse cx="280" cy="172" rx="8" ry="3" fill="#6d2a10" opacity=".5"/><ellipse cx="250" cy="190" rx="14" ry="4" fill="#6d2a10" opacity=".45"/>`;
    const scale = { lunokhod: .82, lrv: .82, sojourner: 1.15, mer: .78, msl: .68, percy: .68, zhurong: .82, heli: .8 }[type] || .8;
    const shadow = `<ellipse cx="160" cy="${moon ? 163 : 163}" rx="${86}" ry="7" fill="#000" opacity=".25"/>`;
    return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${opts.label || 'Illustration'}" preserveAspectRatio="xMidYMid slice">
  <defs><linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1">${sky}</linearGradient><linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1">${gnd}</linearGradient></defs>
  <rect width="320" height="200" fill="url(#${id}s)"/>${deco}
  <path d="M0,150 Q80,136 160,148 T320,144 L320,200 L0,200Z" fill="url(#${id}g)"/>${craters}${shadow}
  <g transform="translate(160,164) scale(${scale})">${vehicleShape(type)}</g></svg>`;
}
function planetIcon(world) {
    const id = "p" + (++_uid);
    const m = world === "moon";
    return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="${id}" cx=".38" cy=".35" r=".7">${m ? '<stop offset="0" stop-color="#f8fafc"/><stop offset=".6" stop-color="#a8b1c1"/><stop offset="1" stop-color="#4b5563"/>' : '<stop offset="0" stop-color="#ffcfa3"/><stop offset=".6" stop-color="#d9622b"/><stop offset="1" stop-color="#7c2d12"/>'}</radialGradient></defs>
  <rect width="320" height="200" fill="${m ? '#0b1b3f' : '#2a0f06'}"/><circle cx="40" cy="30" r="1.5" fill="#fff"/><circle cx="280" cy="40" r="1.2" fill="#fff"/><circle cx="250" cy="170" r="1.4" fill="#fff"/><circle cx="60" cy="160" r="1" fill="#fff"/>
  <circle cx="160" cy="100" r="72" fill="url(#${id})"/>${m ? '<circle cx="135" cy="80" r="14" fill="#6b7280" opacity=".55"/><circle cx="180" cy="120" r="10" fill="#6b7280" opacity=".5"/><circle cx="170" cy="70" r="6" fill="#6b7280" opacity=".5"/><ellipse cx="150" cy="118" rx="18" ry="10" fill="#6b7280" opacity=".35"/>' : '<path d="M100,95 q30,-10 60,4 q30,8 58,-4" stroke="#7c2d12" stroke-width="5" fill="none" opacity=".55"/><ellipse cx="160" cy="34" rx="22" ry="6" fill="#fff" opacity=".85"/><circle cx="130" cy="125" r="9" fill="#9a3412" opacity=".5"/>'}</svg>`;
}
const ICONS = {
    rover: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="12" width="18" height="7" rx="2"/><path d="M20 12V6h4"/><circle cx="9" cy="24" r="3"/><circle cx="16" cy="24" r="3"/><circle cx="23" cy="24" r="3"/></svg>`,
    lander: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 8h12l3 10H7z"/><path d="M9 18l-4 9M23 18l4 9M3 27h5M24 27h5M16 8V4"/></svg>`,
    orbiter: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="13" y="12" width="6" height="8" rx="1"/><rect x="2" y="13" width="9" height="6"/><rect x="21" y="13" width="9" height="6"/><path d="M11 16h2M19 16h2M16 12V8"/></svg>`,
    crew: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="10" r="6"/><path d="M12 10h8"/><path d="M8 28v-5a8 8 0 0 1 16 0v5"/></svg>`,
    rocket: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3c5 4 6 10 4 17h-8C10 13 11 7 16 3z"/><circle cx="16" cy="12" r="2"/><path d="M12 20l-4 5h5M20 20l4 5h-5M14 24l2 5 2-5"/></svg>`,
    impact: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="20" r="8"/><path d="M26 4l-6 8M22 4l-4 6M28 8l-6 6"/></svg>`,
    heli: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h26M3 12h26M16 8v10"/><rect x="12" y="18" width="8" height="5" rx="1"/><path d="M12 23l-3 5M20 23l3 5"/></svg>`
};

/* =========================================================
   PROCEDURAL PLANET TEXTURES
   ========================================================= */
function hash3(x, y, z, s) { let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1274126177) ^ Math.imul(s, 2246822519); h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967295; }
function vnoise(x, y, z, s) {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const xf = x - xi, yf = y - yi, zf = z - zi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
    const a = hash3(xi, yi, zi, s), b = hash3(xi + 1, yi, zi, s), c = hash3(xi, yi + 1, zi, s), d = hash3(xi + 1, yi + 1, zi, s);
    const e = hash3(xi, yi, zi + 1, s), f = hash3(xi + 1, yi, zi + 1, s), g = hash3(xi, yi + 1, zi + 1, s), h = hash3(xi + 1, yi + 1, zi + 1, s);
    const x1 = a + (b - a) * u, x2 = c + (d - c) * u, x3 = e + (f - e) * u, x4 = g + (h - g) * u;
    const y1 = x1 + (x2 - x1) * v, y2 = x3 + (x4 - x3) * v;
    return y1 + (y2 - y1) * w;
}
function fbm(x, y, z, oct, s) { let sum = 0, amp = .5, f = 1, norm = 0; for (let i = 0; i < oct; i++) { sum += amp * vnoise(x * f, y * f, z * f, s + i); norm += amp; amp *= .5; f *= 2.03; } return sum / norm; }
function seeded(seed) { let t = seed >>> 0; return () => { t += 0x6D2B79F5; let r = Math.imul(t ^ (t >>> 15), 1 | t); r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296; }; }

const TEX = {};
function makeTexture(kind) {
    if (TEX[kind]) return TEX[kind];
    const W = 2048, H = 1024, nw = 512, nh = 256;
    const nc = document.createElement("canvas"); nc.width = nw; nc.height = nh;
    const nctx = nc.getContext("2d"); const nid = nctx.createImageData(nw, nh); const nd = nid.data;
    const moon = kind === "moon";
    for (let y = 0; y < nh; y++) {
        const lat = (0.5 - (y + .5) / nh) * Math.PI, cl = Math.cos(lat), sl = Math.sin(lat);
        for (let x = 0; x < nw; x++) {
            const lon = ((x + .5) / nw) * 2 * Math.PI - Math.PI;
            const vx = cl * Math.cos(lon), vz = cl * Math.sin(lon), vy = sl;
            const n = fbm(vx * 2.6 + 5, vy * 2.6 + 5, vz * 2.6 + 5, 5, moon ? 11 : 23);
            const n2 = fbm(vx * 9 + 1, vy * 9 + 1, vz * 9 + 1, 3, moon ? 37 : 41);
            const i = (y * nw + x) * 4;
            if (moon) {
                const g = 150 + (n - .5) * 110 + (n2 - .5) * 50;
                nd[i] = g; nd[i + 1] = g; nd[i + 2] = g * 1.02;
            } else {
                const t = Math.min(1, Math.max(0, (n - .25) * 1.6));
                nd[i] = 150 + t * 78 + (n2 - .5) * 30; nd[i + 1] = 66 + t * 58 + (n2 - .5) * 20; nd[i + 2] = 36 + t * 40 + (n2 - .5) * 12;
            }
            nd[i + 3] = 255;
        }
    }
    nctx.putImageData(nid, 0, 0);
    const c = document.createElement("canvas"); c.width = W; c.height = H;
    const ctx = c.getContext("2d"); ctx.imageSmoothingEnabled = true; ctx.drawImage(nc, 0, 0, W, H);
    const rnd = seeded(moon ? 7 : 19);
    const toXY = (lat, lon) => [(lon + 180) / 360 * W, (90 - lat) / 180 * H];
    function blob(lat, lon, rlat, rlon, col, a, mode) {
        const [x, y] = toXY(lat, lon); const ry = rlat / 180 * H; const rx = rlon / 360 * W / Math.max(Math.cos(lat * Math.PI / 180), .18);
        ctx.save(); ctx.globalCompositeOperation = mode || "multiply";
        for (const dx of [-W, 0, W]) {
            ctx.save(); ctx.translate(x + dx, y); ctx.scale(rx / ry, 1);
            const g = ctx.createRadialGradient(0, 0, 0, 0, 0, ry);
            g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(.55, `rgba(${col},${a * .85})`); g.addColorStop(1, `rgba(${col},0)`);
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, ry, 0, Math.PI * 2); ctx.fill(); ctx.restore();
        }
        ctx.restore();
    }
    function patch(lat, lon, sLat, sLon, col, a, n, mode) {
        for (let k = 0; k < n; k++) { const la = lat + (rnd() - .5) * sLat * 1.1, lo = lon + (rnd() - .5) * sLon * 1.1; blob(la, lo, sLat * (.35 + rnd() * .4), sLon * (.35 + rnd() * .4), col, a, mode); }
    }
    function crater(lat, lon, r, strength) {
        const [x, y] = toXY(lat, lon); const ry = r / 180 * H; const sx = 1 / Math.max(Math.cos(lat * Math.PI / 180), .18);
        for (const dx of [-W, 0, W]) {
            ctx.save(); ctx.translate(x + dx, y); ctx.scale(sx, 1);
            ctx.globalCompositeOperation = "multiply";
            let g = ctx.createRadialGradient(ry * .18, 0, 0, 0, 0, ry);
            g.addColorStop(0, `rgba(90,90,96,${.55 * strength})`); g.addColorStop(.75, `rgba(120,120,126,${.35 * strength})`); g.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, ry, 0, Math.PI * 2); ctx.fill();
            ctx.globalCompositeOperation = "screen";
            ctx.strokeStyle = `rgba(255,255,255,${.22 * strength})`; ctx.lineWidth = Math.max(1, ry * .18);
            ctx.beginPath(); ctx.arc(0, 0, ry * .9, Math.PI * .55, Math.PI * 1.45); ctx.stroke();
            ctx.restore();
        }
    }
    if (moon) {
        const D = "62,62,70";
        const maria = [[57, -50, 12, 40, 10], [18, -57, 40, 32, 18], [33, -16, 18, 26, 10], [28, 17, 12, 16, 7], [8.5, 31, 14, 18, 8], [17, 59, 9, 10, 5], [-8, 51, 11, 12, 6], [-21, -17, 13, 18, 7], [-24, -39, 7, 8, 4], [-15, 35, 6, 7, 4], [13, 4, 5, 7, 3], [-10, -23, 8, 10, 4], [56, 1, 6, 50, 10], [-2, -6, 3, 6, 2], [-1, 86, 6, 8, 4], [-24, -71, 5, 5, 2], [27, -40, 6, 12, 4]];
        maria.forEach(m => patch(m[0], m[1], m[2], m[3], D, .6, m[4]));
        for (let i = 0; i < 650; i++) { const r = Math.pow(rnd(), 3.2) * 4.6 + .25; const la = Math.asin(rnd() * 2 - 1) * 180 / Math.PI; crater(la, rnd() * 360 - 180, r, .6 + rnd() * .5); }
        [[-43.3, -11.2, 3], [9.6, -20, 3], [8.1, -38, 1.6], [-9.6, -22, 1.2], [-27, -2, 1.2]].forEach(([la, lo, r]) => {
            crater(la, lo, r * .6, 1.1);
            const [x, y] = toXY(la, lo); ctx.save(); ctx.globalCompositeOperation = "screen";
            for (let k = 0; k < 14; k++) { const ang = rnd() * Math.PI * 2, len = (r * 4 + rnd() * r * 10) / 180 * H; ctx.strokeStyle = `rgba(255,255,255,${.02 + rnd() * .03})`; ctx.lineWidth = 2 + rnd() * 3; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(ang) * len * 1.3, y + Math.sin(ang) * len); ctx.stroke(); }
            blob(la, lo, r * 1.2, r * 1.2, "255,255,255", .25, "screen"); ctx.restore();
        });
    } else {
        const D = "70,38,26";
        [[10, 70, 14, 16, 8], [46, -25, 14, 40, 10], [-25, -40, 10, 40, 10], [-3, 0, 5, 26, 6], [-20, 100, 10, 26, 8], [-24, 140, 9, 32, 8], [-30, -155, 7, 30, 6], [-27, -87, 5, 8, 4], [30, 95, 8, 14, 5], [-5, 30, 6, 12, 4], [50, 150, 10, 30, 5], [-45, 175, 8, 20, 4]].forEach(m => patch(m[0], m[1], m[2], m[3], D, .5, m[4]));
        blob(-42, 70, 14, 22, "255,226,190", .38, "screen"); blob(-50, -43, 7, 10, "255,226,190", .3, "screen");
        blob(5, -112, 20, 30, "255,214,170", .18, "screen");
        for (let k = 0; k < 26; k++) { const lo = -100 + k * 2.5, la = -8 - Math.sin(k / 26 * Math.PI) * 3 + (rnd() - .5) * 2; blob(la, lo, 1.4 + rnd(), 3, D, .55); }
        [[18.65, -133.8, 4], [1, -112.5, 2.3], [-8.4, -120.5, 2.3], [12, -104.5, 2.2], [24.8, -101, 1.7]].forEach(([la, lo, r]) => { blob(la, lo, r, r, "255,236,210", .35, "screen"); crater(la, lo, r * .25, .9); });
        for (let i = 0; i < 260; i++) { const r = Math.pow(rnd(), 3) * 3.2 + .25; const la = Math.asin(rnd() * 2 - 1) * 180 / Math.PI; crater(la, rnd() * 360 - 180, r, .35 + rnd() * .3); }
        crater(-5.4, 137.8, 1.6, .9); crater(18.4, 77.6, .7, .9); crater(-14.5, 175.4, 1.4, .8); crater(-2.3, -5.2, 1.4, .7);
        const cap = (top) => { const g = ctx.createLinearGradient(0, top ? 0 : H, 0, top ? H * .075 : H * .925); g.addColorStop(0, "rgba(250,250,255,.97)"); g.addColorStop(.6, "rgba(245,240,235,.75)"); g.addColorStop(1, "rgba(245,240,235,0)"); ctx.fillStyle = g; ctx.fillRect(0, top ? 0 : H * .925, W, H * .075); };
        cap(true); cap(false);
        for (let k = 0; k < 18; k++) { blob(80 + rnd() * 5, rnd() * 360 - 180, 2 + rnd() * 3, 10 + rnd() * 20, "250,248,245", .6, "screen"); blob(-80 - rnd() * 5, rnd() * 360 - 180, 2 + rnd() * 3, 10 + rnd() * 20, "250,248,245", .55, "screen"); }
    }
    const id = ctx.getImageData(0, 0, W, H); const d = id.data; const r2 = seeded(moon ? 3 : 5);
    for (let i = 0; i < d.length; i += 4) { const g = (r2() - .5) * (moon ? 14 : 10); d[i] += g; d[i + 1] += g; d[i + 2] += g; }
    TEX[kind] = { w: W, h: H, data: d };
    return TEX[kind];
}

/* =========================================================
   GLOBE RENDERER (orthographic projection)
   ========================================================= */
class Globe {
    constructor(canvas, o) {
        this.c = canvas; this.ctx = canvas.getContext("2d"); this.o = Object.assign({ light: [-.55, .35, .76], amb: .06, dif: 1, dprMax: 1.5, size: .46 }, o || {});
        this.lat0 = 0; this.lon0 = 0; this.zoom = 1; this.tex = null; this.dirty = true; this.onRender = null;
        this.resize();
    }
    resize() {
        const r = this.c.getBoundingClientRect(); const dpr = Math.min(window.devicePixelRatio || 1, this.o.dprMax);
        this.dpr = dpr; this.cw = r.width; this.ch = r.height;
        const w = Math.max(2, Math.round(r.width * dpr)), h = Math.max(2, Math.round(r.height * dpr));
        if (w !== this.c.width || h !== this.c.height) { this.c.width = w; this.c.height = h; this.img = this.ctx.createImageData(w, h); }
        if (!this.img) this.img = this.ctx.createImageData(this.c.width, this.c.height);
        this.dirty = true;
    }
    setTexture(t) { this.tex = t; this.dirty = true; }
    radius() { return Math.min(this.c.width, this.c.height) * this.o.size * this.zoom; }
    render() {
        if (!this.tex) return; this.dirty = false;
        const w = this.c.width, h = this.c.height, d = this.img.data; d.fill(0);
        const R = this.radius(), cx = w / 2, cy = h / 2;
        const lat0 = this.lat0 * Math.PI / 180, lon0 = this.lon0 * Math.PI / 180, sP = Math.sin(lat0), cP = Math.cos(lat0);
        const T = this.tex, td = T.data, tw = T.w, th = T.h, PI = Math.PI, TAU = 2 * PI;
        const [Lx, Ly, Lz] = this.o.light, amb = this.o.amb, dif = this.o.dif;
        const y0 = Math.max(0, Math.floor(cy - R)), y1 = Math.min(h, Math.ceil(cy + R));
        for (let py = y0; py < y1; py++) {
            const sy = (cy - py - .5) / R, sy2 = sy * sy; if (sy2 >= 1) continue;
            const half = Math.sqrt(1 - sy2) * R;
            const x0 = Math.max(0, Math.floor(cx - half)), x1 = Math.min(w, Math.ceil(cx + half));
            let i = (py * w + x0) * 4;
            for (let px = x0; px < x1; px++, i += 4) {
                const sx = (px + .5 - cx) / R, r2 = sx * sx + sy2; if (r2 >= 1) continue;
                const z = Math.sqrt(1 - r2);
                let s = z * sP + sy * cP; s = s > 1 ? 1 : s < -1 ? -1 : s;
                const lat = Math.asin(s), lon = lon0 + Math.atan2(sx, z * cP - sy * sP);
                let u = lon / TAU + .5; u -= Math.floor(u);
                let ty = ((.5 - lat / PI) * th) | 0; if (ty >= th) ty = th - 1;
                const t = (ty * tw + ((u * tw) | 0)) * 4;
                let l = sx * Lx + sy * Ly + z * Lz; l = l > 0 ? l : 0;
                const sh = amb + dif * l;
                d[i] = td[t] * sh; d[i + 1] = td[t + 1] * sh; d[i + 2] = td[t + 2] * sh;
                const edge = (1 - r2) * R; d[i + 3] = edge < 1.2 ? edge / 1.2 * 255 : 255;
            }
        }
        this.ctx.putImageData(this.img, 0, 0);
        if (this.onRender) this.onRender();
    }
    project(lat, lon) {
        const la = lat * Math.PI / 180, lo = lon * Math.PI / 180, la0 = this.lat0 * Math.PI / 180, lo0 = this.lon0 * Math.PI / 180;
        const cosc = Math.sin(la0) * Math.sin(la) + Math.cos(la0) * Math.cos(la) * Math.cos(lo - lo0);
        const x = Math.cos(la) * Math.sin(lo - lo0), y = Math.cos(la0) * Math.sin(la) - Math.sin(la0) * Math.cos(la) * Math.cos(lo - lo0);
        const R = this.radius() / this.dpr;
        return { x: this.cw / 2 + x * R, y: this.ch / 2 - y * R, vis: cosc > 0.02 };
    }
}

/* =========================================================
   HELPERS
   ========================================================= */
const $ = s => document.querySelector(s), $$ = s => Array.from(document.querySelectorAll(s));
const byId = id => VEHICLES.find(v => v.id === id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

/* =========================================================
   HOME: cards, quiz grid, timelines, sources
   ========================================================= */
/* Официальное фото NASA на карточке; если не загрузится — остаётся иллюстрация */
function cardPhoto(v) {
    const p = PHOTOS[v.id]; if (!p) return "";
    return `<img class="cphoto" src="${p.src}" alt="${esc(p.alt)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.nextElementSibling.remove();this.remove()"><span class="ccredit">${esc(p.credit)}</span>`;
}

function buildCards() {
    ["moon", "mars"].forEach(w => {
        $(w === "moon" ? "#moonCards" : "#marsCards").innerHTML = VEHICLES.filter(v => v.world === w).map(v => `
  <a class="vcard ${w}" href="#/v/${v.id}">
    <div class="pic">${art(v.art, w, { label: v.name + ' illustration' })}${cardPhoto(v)}<span class="yr">${v.landedYear}</span></div>
    <div class="body"><h3>${esc(v.name)}</h3><div class="sub">${esc(v.short)}</div><div class="sub" style="font-size:13px">${esc(v.agency)} · ${esc(v.mission)}</div><div class="go">Read the story →</div></div>
  </a>`).join("");
    });
    $("#quizGrid").innerHTML = VEHICLES.map((v, i) => `<a class="qchip ${v.world}" href="#/v/${v.id}/quiz"><span class="n">${i + 1}</span><span>${esc(v.name.replace(" Lunar Roving Vehicle", " Rover").replace(" (Mars Helicopter)", ""))}<small>${v.world === "moon" ? "Moon" : "Mars"} · 10 questions</small></span></a>`).join("");
}
function buildTimelines() {
    const row = e => `<li><div class="ic">${ICONS[e.i] || ICONS.rover}</div><div class="y">${e.y}</div><h5>${esc(e.t)}</h5><p>${esc(e.d)}</p>${e.v ? `<a class="more" href="#/v/${e.v}">Open mission page →</a>` : `<a class="more" href="${e.u}" target="_blank" rel="noopener">NASA page ↗</a>`}</li>`;
    $("#tlMoon").innerHTML = TIMELINE_MOON.map(row).join("");
    $("#tlMars").innerHTML = TIMELINE_MARS.map(row).join("");
    $$("#tlMoon .ic").forEach(e => e.style.color = "#2563eb"); $$("#tlMars .ic").forEach(e => e.style.color = "#e3561a");
}
function buildSources() {
    $("#srcGrid").innerHTML = SOURCE_GROUPS.map(g => `<div class="src"><h4>${esc(g.h)}</h4><ul>${g.l.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a></li>`).join("")}</ul></div>`).join("");
}

/* =========================================================
   HERO PLANET
   ========================================================= */
let hero = null, heroRunning = false, world = "moon";
function initHero() {
    hero = new Globe($("#heroPlanet"), { light: [-.42, .3, .86], amb: .05, dif: 1.05, dprMax: 1.25, size: .5 });
    hero.lat0 = world === "moon" ? 6 : 18; hero.lon0 = world === "moon" ? 0 : 60;
    hero.setTexture(makeTexture(world));
    let last = 0;
    const loop = t => {
        if (!document.body.classList.contains("on-detail") && t - last > 40) { hero.lon0 += world === "moon" ? .08 : .14; hero.render(); last = t; }
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
}
function setWorld(w) {
    if (w === world) return;
    world = w;
    document.body.dataset.world = w;
    $$(".topbar .wbtn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.w === w)));
    const st = $("#planetStage"); st.classList.add("swap");
    setTimeout(() => {
        hero.setTexture(makeTexture(w)); hero.lat0 = w === "moon" ? 6 : 18; hero.lon0 = w === "moon" ? 0 : 60; hero.render();
        $("#heroPlanet").setAttribute("aria-label", "Rotating " + (w === "moon" ? "Moon" : "Mars"));
        $("#planetName").textContent = w === "moon" ? "The Moon · Earth's companion" : "Mars · The Red Planet";
        st.classList.remove("swap");
    }, 430);
}

/* =========================================================
   MEMORY GAME
   ========================================================= */
const MEM = [["moon", "moon", "The Moon"], ["mars", "mars", "Mars"], ["lunokhod", "moon", "Lunokhod"], ["lrv", "moon", "Moon Rover"], ["sojourner", "mars", "Sojourner"], ["msl", "mars", "Curiosity"], ["heli", "mars", "Ingenuity"], ["zhurong", "mars", "Zhurong"]];
let mem = { first: null, lock: false, pairs: 0, moves: 0 };
function newGame() {
    mem = { first: null, lock: false, pairs: 0, moves: 0 };
    $("#pairs").textContent = 0; $("#moves").textContent = 0; $("#win").classList.remove("show");
    const deck = shuffle(MEM.flatMap((m, i) => [i, i]));
    const back = `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="9" fill="#fff" opacity=".9"/><ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="#fff" stroke-width="2" transform="rotate(-24 20 20)"/><path d="M33 5l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#fde68a"/></svg>`;
    $("#board").innerHTML = deck.map((k, i) => {
        const [t, w, l] = MEM[k]; const pic = (t === "moon" || t === "mars") ? planetIcon(t) : art(t, w);
        return `<button class="mcard" data-k="${k}" aria-label="Hidden card ${i + 1}"><div class="in"><div class="f">${back}</div><div class="b">${pic}<span class="lbl">${l}</span></div></div></button>`;
    }).join("");
    $$("#board .mcard").forEach(c => c.addEventListener("click", () => flip(c)));
}
function flip(c) {
    if (mem.lock || c.classList.contains("flip") || c.classList.contains("done")) return;
    c.classList.add("flip"); c.setAttribute("aria-label", MEM[c.dataset.k][2]);
    if (!mem.first) { mem.first = c; return; }
    mem.moves++; $("#moves").textContent = mem.moves;
    const a = mem.first; mem.first = null;
    if (a.dataset.k === c.dataset.k) {
        setTimeout(() => { a.classList.add("done"); c.classList.add("done"); }, 350);
        mem.pairs++; $("#pairs").textContent = mem.pairs;
        if (mem.pairs === MEM.length) { setTimeout(() => { $("#winText").textContent = `You matched all 8 pairs in ${mem.moves} moves. Your space memory is out of this world!`; $("#win").classList.add("show"); }, 700); }
    } else {
        mem.lock = true;
        setTimeout(() => { a.classList.remove("flip"); c.classList.remove("flip"); a.setAttribute("aria-label", "Hidden card"); c.setAttribute("aria-label", "Hidden card"); mem.lock = false; }, 950);
    }
}

/* =========================================================
   INTERACTIVE MAPS
   ========================================================= */
/* Подписи у точек: скрыты, появляются при наведении, закрепляются при клике */
(function () {
    const st = document.createElement("style");
    st.textContent = `
    /* Луна: прячем старый canvas (заднюю Луну), Марс: прячем 3D-модель */
    #mapView:not(.mars) #mapCanvas{display:none !important}
    #mapView.mars #moonModel{display:none !important}

    /* карточка: помещается в окно карты, без скролл-бара */
    #popup{top:64px;bottom:auto;max-height:calc(100% - 76px);z-index:20;
      display:flex;flex-direction:column;overflow-y:auto;
      scrollbar-width:none;-ms-overflow-style:none}
    #popup::-webkit-scrollbar{display:none}
    #popup .ph{flex:0 0 auto}
    #popup .ph.photo{flex:0 1 200px;min-height:70px;height:auto;aspect-ratio:auto;overflow:hidden;background:#0b1b3f}
    #popup .ph.photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 40%}
    #popup .pc{flex:0 0 auto;padding:12px 16px 14px}
    #popup h4{font-size:17px;margin:0 0 6px}
    #popup dl{font-size:12.5px;line-height:1.35;margin:0 0 8px}
    #popup .pc>p{font-size:13px;line-height:1.4;margin:0 0 10px}
    #popup .btn{padding:9px 18px;font-size:13px}
    #popup .pc>p.pcredit{margin:8px 0 0;font-size:10px;line-height:1.35;color:#94a3b8}
    #popup .pcredit a{color:inherit;text-decoration:underline}`;
    document.head.appendChild(st);
})();
let map = null, mapWorld = "moon", activePin = null, anim = null;
const VIEW = { moon: { lat: 18, lon: 5, zoom: 1.15 }, mars: { lat: 5, lon: 75, zoom: 1 } };
function initMap() {
    map = new Globe($("#mapCanvas"), { light: [-.25, .3, .92], amb: .5, dif: .6, dprMax: 1.5, size: .44 });
    map.onRender = placePins;
    requestAnimationFrame(updateMoonPins);
    setMapWorld("moon", true);
    const cv = $("#mapCanvas"); const pts = new Map(); let pinch = null;
    cv.addEventListener("pointerdown", e => {
        cv.setPointerCapture(e.pointerId); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); stopAnim();
        if (pts.size === 2) { const [p, q] = [...pts.values()]; pinch = { d: Math.hypot(p.x - q.x, p.y - q.y), z: map.zoom }; }
    });
    cv.addEventListener("pointermove", e => {
        if (!pts.has(e.pointerId)) return; const prev = pts.get(e.pointerId); const cur = { x: e.clientX, y: e.clientY }; pts.set(e.pointerId, cur);
        if (pts.size === 2 && pinch) { const [p, q] = [...pts.values()]; const d = Math.hypot(p.x - q.x, p.y - q.y); setZoom(pinch.z * d / pinch.d); return; }
        const R = map.radius() / map.dpr; const k = 180 / Math.PI / R;
        map.lon0 -= (cur.x - prev.x) * k / Math.max(Math.cos(map.lat0 * Math.PI / 180), .3) * .9;
        map.lat0 = Math.max(-85, Math.min(85, map.lat0 + (cur.y - prev.y) * k));
        map.dirty = true;
    });
    const up = e => { pts.delete(e.pointerId); if (pts.size < 2) pinch = null; };
    cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
    /* колесо без Ctrl прокручивает страницу, а не зумит планету; зум — Ctrl + колесо, кнопки +/−, щипок на тач-экране */
    $("#mapView").addEventListener("wheel", e => { if (!e.ctrlKey) e.stopPropagation(); }, { capture: true, passive: true });
    cv.addEventListener("wheel", e => { e.preventDefault(); stopAnim(); setZoom(map.zoom * Math.exp(-e.deltaY * .0015)); }, { passive: false });
    cv.addEventListener("dblclick", () => setZoom(map.zoom * 1.6));
    $("#zin").onclick = () => mapWorld === "moon" ? moonZoom(1 / 1.4) : animateTo(map.lat0, map.lon0, map.zoom * 1.5);
    $("#zout").onclick = () => mapWorld === "moon" ? moonZoom(1.4) : animateTo(map.lat0, map.lon0, map.zoom / 1.5);
    $("#zreset").onclick = () => { closePopup(); if (mapWorld === "moon") { $("#moonModel").cameraOrbit = MOON_HOME; return; } const v = VIEW[mapWorld]; animateTo(v.lat, v.lon, v.zoom); };
    $$("[data-map]").forEach(b => b.onclick = () => setMapWorld(b.dataset.map));
    const loop = () => { if (map.dirty && !document.body.classList.contains("on-detail")) map.render(); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
    new ResizeObserver(() => { map.resize(); }).observe($("#mapView"));
}
function setZoom(z) { map.zoom = Math.max(.8, Math.min(8, z)); map.dirty = true; }
function setMapWorld(w, first) {
    mapWorld = w; closePopup();
    $$("[data-map]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.map === w)));
    $("#mapView").classList.toggle("mars", w === "mars");
    map.resize();
    $("#mapTitle").textContent = w === "moon" ? "The Moon" : "Mars";
    $("#legendTitle").textContent = w === "moon" ? "Moon missions" : "Mars missions";
    const list = VEHICLES.filter(v => v.world === w);
    $("#markers").innerHTML = list.map(v => `<button class="pin ${w}" data-id="${v.id}" aria-label="${esc(v.name)} location"><span class="p"></span><span class="t">${esc(v.name.replace(" Lunar Roving Vehicle", " LRV").replace(" (Mars Helicopter)", ""))}</span></button>`).join("");
    $$("#markers .pin").forEach(p => p.onclick = e => { e.stopPropagation(); openPopup(p.dataset.id); });
    $("#legendList").innerHTML = list.map(v => `<button data-id="${v.id}"><i style="background:${w === 'moon' ? '#2563eb' : '#e3561a'}"></i><span>${esc(v.name.replace(" Lunar Roving Vehicle", " LRV").replace(" (Mars Helicopter)", ""))}<small>${v.landedYear} · ${esc(v.location.split(" (")[0].split(",")[0])}</small></span></button>`).join("");
    $$("#legendList button").forEach(b => b.onclick = () => { const v = byId(b.dataset.id); animateTo(v.lat, v.lon, Math.max(map.zoom, 2.2)); openPopup(v.id); });
    const v = VIEW[w];
    map.setTexture(makeTexture(w)); map.lat0 = v.lat; map.lon0 = v.lon; map.zoom = v.zoom; map.dirty = true;
}
function placePins() {
    if (mapWorld === "moon") return;
    const pins = $$("#markers .pin"); const pos = [];
    pins.forEach(p => { const v = byId(p.dataset.id); const q = map.project(v.lat, v.lon); pos.push({ p, x: q.x, y: q.y, vis: q.vis }); });
    /* точки стоят строго на своих координатах; смещаем только совпадающие (Perseverance и Ingenuity) */
    for (let i = 1; i < pos.length; i++) for (let j = 0; j < i; j++) {
        if (pos[i].vis && pos[j].vis && Math.hypot(pos[i].x - pos[j].x, pos[i].y - pos[j].y) < 10) { pos[i].x += 18; pos[i].y -= 18; break; }
    }
    const boxes = [];
    pos.sort((a, b) => (b.p.classList.contains("active") ? 1 : 0) - (a.p.classList.contains("active") ? 1 : 0));
    pos.forEach(({ p, x, y, vis }) => {
        p.style.display = vis ? "block" : "none"; p.style.left = x + "px"; p.style.top = y + "px";
    });
}
/* Официальные фото NASA для карточек на карте (ключ — id аппарата) */
const PHOTOS = {
    "lunokhod-1": {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia12/pia12967/PIA12967.jpg",
        alt: "Luna 17 lander and Lunokhod 1 rover tracks on Mare Imbrium, seen from lunar orbit",
        cap: "Luna 17 lander and Lunokhod 1 tracks, seen from orbit by NASA's LRO (PIA12967)",
        credit: "NASA/GSFC/Arizona State University",
        page: "https://science.nasa.gov/photojournal/soviet-union-lunar-rovers/"
    },
    "lunokhod-2": {
        src: "https://assets.science.nasa.gov/content/dam/science/psd/photojournal/pia/pia12/pia12976/PIA12976.jpg",
        alt: "Luna 21 lander and Lunokhod 2 rover tracks in Le Monnier crater, seen from lunar orbit",
        cap: "Luna 21 lander and Lunokhod 2 tracks, seen from orbit by NASA's LRO (PIA12976)",
        credit: "NASA/GSFC/Arizona State University",
        page: "https://science.nasa.gov/photojournal/luna-21-lander/"
    },
    "apollo-15-lrv": {
        src: "https://www.nasa.gov/wp-content/uploads/2023/03/as15-86-11603.jpg",
        alt: "Astronaut James Irwin working at the Lunar Roving Vehicle at Hadley-Apennine",
        cap: "James Irwin at the Lunar Roving Vehicle, Hadley-Apennine (AS15-86-11603)",
        credit: "NASA",
        page: "https://www.nasa.gov/image-article/apollo-15-lunar-roving-vehicle/"
    },
    "apollo-16-lrv": {
        src: "https://www.nasa.gov/wp-content/uploads/2023/03/s72-36970.jpg",
        alt: "John Young driving the Lunar Roving Vehicle during the Grand Prix run at Descartes",
        cap: "John Young driving the rover in the “Grand Prix” run, Descartes (S72-36970)",
        credit: "NASA",
        page: "https://www.nasa.gov/image-article/john-young-driving-lunar-rover/"
    },
    "apollo-17-lrv": {
        src: "https://www.nasa.gov/wp-content/uploads/2023/03/171016main_image_feature_774_ys_full.jpg",
        alt: "Gene Cernan checking out the Lunar Roving Vehicle at Taurus-Littrow",
        cap: "Gene Cernan checks out the Lunar Roving Vehicle, Taurus-Littrow",
        credit: "NASA",
        page: "https://www.nasa.gov/image-article/driving-moon/"
    }
};
(function () {
    const st = document.createElement("style");
    st.textContent = `
    #popup .ph.photo{height:auto;aspect-ratio:16/9;overflow:hidden;background:#0b1b3f}
    #popup .ph.photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:50% 40%}
    #popup{max-height:calc(100% - 16px);overflow-y:auto}
    #popup .pcredit{margin:14px 0 0;font-size:12px;line-height:1.45;color:#64748b}
    #popup .pcredit a{color:inherit;text-decoration:underline}`;
    document.head.appendChild(st);
})();
/* Официальные фото NASA для роботов Марса */
Object.assign(PHOTOS, {
    "sojourner": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia00/pia00611/PIA00611.jpg?w=900&fit=clip", alt: "Sojourner rover on the Mars Pathfinder lander just after landing, with deflated airbags and rocky terrain", cap: "Sojourner on the Pathfinder lander, July 1997 (PIA00611)", credit: "NASA/JPL", page: "https://science.nasa.gov/photojournal/pathfinders-rover-airbags-and-martian-terrain/" },
    "spirit": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia03/pia03275/PIA03275.jpg?w=900&fit=clip", alt: "Self-portrait of the Spirit rover deck with a panorama of Gusev Crater from the summit of Husband Hill", cap: "Spirit's deck and Gusev Crater from Husband Hill (PIA03275)", credit: "NASA/JPL-Caltech/Cornell", page: "https://science.nasa.gov/photojournal/still-shining-after-all-this-time-polar/" },
    "opportunity": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia15/pia15114/PIA15114.jpg?w=900&fit=clip", alt: "Self-portrait of the Opportunity rover on Mars taken with its panoramic camera in 2007", cap: "Opportunity self-portrait, 2007 (PIA15114)", credit: "NASA/JPL-Caltech/Cornell", page: "https://photojournal.jpl.nasa.gov/catalog/PIA15114" },
    "curiosity": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia16/pia16457/PIA16457.jpg?w=900&fit=clip", alt: "Curiosity rover self-portrait at Rocknest in Gale Crater with Mount Sharp on the horizon", cap: "Curiosity at “Rocknest,” Gale Crater (PIA16457)", credit: "NASA/JPL-Caltech/MSSS", page: "https://science.nasa.gov/photojournal/curiosity-self-portrait-wide-view" },
    "perseverance": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia24/pia24542/PIA24542.jpg?w=900&fit=clip", alt: "Perseverance rover selfie with the Ingenuity helicopter in Jezero Crater", cap: "Perseverance's selfie with Ingenuity, Jezero Crater (PIA24542)", credit: "NASA/JPL-Caltech/MSSS", page: "https://science.nasa.gov/photojournal/perseverances-selfie-with-ingenuity/" },
    "zhurong": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia24/pia24914/PIA24914.jpg?w=900&fit=clip", alt: "The Zhurong rover and its tracks in Utopia Planitia, seen from orbit by NASA's Mars Reconnaissance Orbiter", cap: "Zhurong in Utopia Planitia, seen by NASA's MRO HiRISE (PIA24914)", credit: "NASA/JPL-Caltech/University of Arizona", page: "https://science.nasa.gov/photojournal/the-zhurong-rover-explores-utopia-planitia" },
    "ingenuity": { src: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia24/pia24550/PIA24550.jpg?w=900&fit=clip", alt: "Ingenuity helicopter after its first flight at Wright Brothers Field, seen by Perseverance's Mastcam-Z", cap: "Ingenuity after its first flight, seen by Mastcam-Z (PIA24550)", credit: "NASA/JPL-Caltech/ASU/MSSS", page: "https://science.nasa.gov/photojournal/ingenuitys-first-flight-recorded-by-mastcam-z/" }
});
function popupPhoto(v) {
    const p = PHOTOS[v.id];
    if (!p) return `<div class="ph">${art(v.art, v.world)}</div>`;
    return `<div class="ph photo"><img src="${p.src}" alt="${esc(p.alt)}" loading="lazy" referrerpolicy="no-referrer"></div>`;
}
function popupCredit(v) {
    const p = PHOTOS[v.id];
    if (!p) return "";
    return `<p class="pcredit">Photo &amp; data: ${esc(p.credit)} · <a href="${p.page}" target="_blank" rel="noopener">source ↗</a></p>`;
}
function openPopup(id) {
    const v = byId(id); activePin = id;
    $$(PIN_SEL).forEach(p => p.classList.toggle("active", p.dataset.id === id));
    $$("#legendList button").forEach(b => b.classList.toggle("on", b.dataset.id === id));
    const pop = $("#popup");
    pop.innerHTML = `<button class="x" aria-label="Close">✕</button>${popupPhoto(v)}<div class="pc"><h4>${esc(v.name)}</h4>
<dl><dt>Mission</dt><dd>${esc(v.mission)} (${v.year})</dd><dt>${v.id === "ingenuity" ? "Arrived" : "Landed / left"}</dt><dd>${v.landedYear}</dd><dt>Location</dt><dd>${esc(v.location)}</dd><dt>Coordinates</dt><dd>${esc(v.coords)}</dd></dl>
<p>${esc(v.summary)}</p><a class="btn btn-primary" href="#/v/${v.id}">Open full mission page →</a>${popupCredit(v)}</div>`;
    pop.classList.add("show");
    const im = pop.querySelector(".ph img");
    if (im) im.onerror = () => { /* если фото не загрузилось — возвращаем иллюстрацию */
        const ph = im.parentNode; ph.classList.remove("photo"); ph.innerHTML = art(v.art, v.world);
        const c = pop.querySelector(".pcredit"); if (c) c.remove();
    };
    pop.querySelector(".x").onclick = closePopup;
}
function closePopup() { activePin = null; $("#popup").classList.remove("show"); $$(PIN_SEL).forEach(p => p.classList.remove("active")); $$("#legendList button").forEach(b => b.classList.remove("on")); }
const PIN_SEL = "#markers .pin, #moonModel .hs";
/* ---- Луна = 3D-модель. Точки — hotspot'ы model-viewer: они сами крутятся/зумятся вместе с моделью и прячутся на обратной стороне.
   Если на вашей модели точки сдвинуты по долготе — поменяйте MOON_CAL.lonOffset (в градусах) или flipLon. ---- */
const MOON_CAL = { lonOffset: 0, flipLon: false, latOffset: 0, radiusScale: 1 };
window.MOON_CAL = MOON_CAL;
const MOON_HOME = "5deg 72deg 120%";
function moonVec(lat, lon, r) {
    const la = (lat + MOON_CAL.latOffset) * Math.PI / 180;
    const lo = ((MOON_CAL.flipLon ? -lon : lon) + MOON_CAL.lonOffset) * Math.PI / 180;
    return [r * Math.cos(la) * Math.sin(lo), r * Math.sin(la), r * Math.cos(la) * Math.cos(lo)];
}
/* Точки на 3D-Луне: считаем экранную позицию сами по камере model-viewer (каждый кадр) */
function updateMoonPins() {
    requestAnimationFrame(updateMoonPins);
    if (mapWorld !== "moon" || document.body.classList.contains("on-detail")) return;
    const mv = $("#moonModel"); if (!mv || !mv.loaded || !mv.getCameraOrbit) return;
    const rect = mv.getBoundingClientRect(), W = rect.width, H = rect.height; if (!W || !H) return;
    const o = mv.getCameraOrbit(), t = mv.getCameraTarget(), d = mv.getDimensions(), c = mv.getBoundingBoxCenter();
    const th = Math.tan(mv.getFieldOfView() * Math.PI / 360), R = Math.max(d.x, d.y, d.z) / 2 * MOON_CAL.radiusScale, sp = Math.sin(o.phi);
    const C = [t.x + o.radius * sp * Math.sin(o.theta), t.y + o.radius * Math.cos(o.phi), t.z + o.radius * sp * Math.cos(o.theta)];
    const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
    const f = norm(sub([t.x, t.y, t.z], C)), right = norm(cross(f, [0, 1, 0])), up = cross(right, f), cc = [c.x, c.y, c.z];
    $$("#markers .pin").forEach(p => {
        const v = byId(p.dataset.id), u = moonVec(v.lat, v.lon, 1);
        const P = [cc[0] + R * u[0], cc[1] + R * u[1], cc[2] + R * u[2]], rel = sub(P, C), z = dot(rel, f);
        const vis = z > 0 && dot(u, sub(C, cc)) > R * 1.002;
        p.style.display = vis ? "block" : "none"; if (!vis) return;
        p.style.left = (W / 2 + dot(rel, right) / z / th * (H / 2)) + "px";
        p.style.top = (H / 2 - dot(rel, up) / z / th * (H / 2)) + "px";
    });
}
function moonFocus(lat, lon, zoom) {
    const mv = $("#moonModel"), [x, y, z] = moonVec(lat, lon, 1);
    const pct = Math.max(60, Math.min(300, 120 * 1.15 / (zoom || 1.15)));
    mv.cameraOrbit = `${Math.atan2(x, z)}rad ${Math.acos(y)}rad ${pct}%`;
}
function moonZoom(f) {
    const mv = $("#moonModel"), o = mv.getCameraOrbit();
    mv.cameraOrbit = `${o.theta}rad ${o.phi}rad ${o.radius * f}m`;
}
function stopAnim() { if (anim) { cancelAnimationFrame(anim); anim = null; } }
function animateTo(lat, lon, zoom) {
    if (mapWorld === "moon") { moonFocus(lat, lon, zoom); return; }
    stopAnim(); zoom = Math.max(.8, Math.min(8, zoom));
    const s = { lat: map.lat0, lon: map.lon0, z: map.zoom }; let dl = ((lon - s.lon) % 360 + 540) % 360 - 180; const t0 = performance.now(), dur = 900;
    const step = t => {
        let k = Math.min(1, (t - t0) / dur); k = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        map.lat0 = s.lat + (lat - s.lat) * k; map.lon0 = s.lon + dl * k; map.zoom = s.z * Math.pow(zoom / s.z, k); map.dirty = true;
        if (k < 1) anim = requestAnimationFrame(step); else anim = null;
    };
    anim = requestAnimationFrame(step);
}

/* =========================================================
   DETAIL PAGES + QUIZ
   ========================================================= */
const BI = {
    target: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,
    gear: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`,
    star: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z"/></svg>`,
    bulb: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z"/></svg>`,
    pin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/></svg>`,
    link: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>`
};
function renderDetail(v) {
    const list = VEHICLES.filter(x => x.world === v.world); const i = list.indexOf(v);
    const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    const W = v.world;
    $("#detail").innerHTML = `
<div class="${W}-page">
<section class="d-hero ${W}">
<div class="deco orbitline" style="width:600px;height:600px;right:-240px;top:-260px;${W === 'mars' ? 'border-color:rgba(251,146,60,.35)' : ''}"></div>
<div class="deco star4" style="left:46%;top:40px;${W === 'mars' ? 'background:#fb923c' : ''}"></div>
<div class="wrap">
  <a class="back" href="#${W}-missions">← Back to ${W === "moon" ? "Moon" : "Mars"} missions</a>
  <div class="d-grid">
    <div class="fade-in">
      <span class="tag ${W}">${W === "moon" ? "Moon Mission" : "Mars Mission"} · ${v.year}</span>
      <h1>${esc(v.name)}</h1>
      <div class="d-meta"><span class="chip c-${W}">${esc(v.mission)}</span><span class="chip">${esc(v.agency)}</span><span class="chip">Mission year ${v.year}</span></div>
      <p class="lead" style="margin-bottom:20px">${esc(v.summary)}</p>
      <div class="btn-row"><a class="btn btn-primary" href="#/v/${v.id}/quiz" style="background:linear-gradient(135deg,${W === 'moon' ? '#2563eb,#60a5fa' : '#e3561a,#fb923c'})">Take the quiz ✦</a><button class="btn btn-ghost" id="seeMap">See it on the map</button></div>
    </div>
    <div class="d-pic">${art(v.art, W, { label: v.name + ' illustration' })}</div>
  </div>
</div>
</section>
<section style="padding:0 0 70px">
<div class="wrap">
  <div class="facts">
    <div class="fact"><span>Launch</span><b>${esc(v.launch)}</b></div>
    <div class="fact"><span>Landing</span><b>${esc(v.landing)}</b></div>
    <div class="fact"><span>Location</span><b>${esc(v.location)}</b></div>
    <div class="fact"><span>Coordinates</span><b>${esc(v.coords)}</b></div>
    <div class="fact"><span>Distance</span><b>${esc(v.distance)}</b></div>
    <div class="fact"><span>Status</span><b>${esc(v.status)}</b></div>
  </div>
  <div class="d-body">
    <div class="block"><h3><span class="bi">${BI.target}</span>Purpose of the mission</h3><p>${esc(v.purpose)}</p></div>
    <div class="block"><h3><span class="bi">${BI.gear}</span>What it was designed to do</h3><p>${esc(v.design)}</p></div>
    <div class="block"><h3><span class="bi">${BI.star}</span>Discoveries &amp; achievements</h3><ul>${v.discoveries.map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>
    <div class="block"><h3><span class="bi">${BI.bulb}</span>Interesting facts</h3><ul>${v.facts.map(d => `<li>${esc(d)}</li>`).join("")}</ul></div>
    <div class="block"><h3><span class="bi">${BI.pin}</span>Where is it now?</h3><p>${esc(v.now)}</p><p style="font-size:14px;color:var(--muted);margin:0"><b>Coordinates:</b> ${esc(v.coords)}</p></div>
    <div class="block"><h3><span class="bi">${BI.heart}</span>Why it is important</h3><p>${esc(v.why)}</p></div>
    <div class="block wide"><h3><span class="bi">✦</span>Did You Know?</h3><div class="dyk">${v.dyk.map(d => `<div>${esc(d)}</div>`).join("")}</div></div>
    <div class="block wide quiz" id="quiz"><div class="qstars"></div><div class="quiz-inner" id="quizInner"></div></div>
    <div class="block wide d-src"><h3><span class="bi">${BI.link}</span>NASA sources for this page</h3>${v.sources.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join("")}</div>
  </div>
  <div class="pager">
    <a class="btn btn-ghost" href="#/v/${prev.id}">← ${esc(prev.name)}</a>
    <a class="btn btn-ghost" href="#/v/${next.id}">${esc(next.name)} →</a>
  </div>
</div>
</section></div>`;
    $("#seeMap").onclick = () => { location.hash = "#maps"; setTimeout(() => { if (mapWorld !== v.world) setMapWorld(v.world); setTimeout(() => { animateTo(v.lat, v.lon, 2.2); openPopup(v.id); }, 100); }, 350); };
    quizIntro(v);
}
function quizIntro(v) {
    $("#quizInner").innerHTML = `<h3>${esc(v.name)} Quiz</h3><p class="qi">10 questions · 4 answers each · one question at a time. Ready to test your space knowledge?</p><button class="btn btn-light" id="qStart">START QUIZ</button>`;
    $("#qStart").onclick = () => startQuiz(v);
}
function startQuiz(v) {
    const qs = v.quiz.map(q => { const correct = q[1]; return { q: q[0], opts: shuffle(q.slice(1)), correct }; });
    const st = { i: 0, score: 0, qs };
    showQ(v, st);
}
function showQ(v, st) {
    const q = st.qs[st.i]; const L = "ABCD";
    $("#quizInner").innerHTML = `<div class="qcount">QUESTION ${st.i + 1} OF ${st.qs.length}</div><div class="qbar"><i style="width:${st.i / st.qs.length * 100}%"></i></div>
<p class="qq">${esc(q.q)}</p><div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${L[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>
<div class="qfoot"><div class="qmsg" id="qmsg" aria-live="polite"></div><button class="btn btn-light" id="qNext" disabled>${st.i === st.qs.length - 1 ? "SEE MY SCORE" : "NEXT"} →</button></div>`;
    const opts = $$("#quizInner .opt");
    opts.forEach(b => b.onclick = () => {
        const pick = q.opts[+b.dataset.k], ok = pick === q.correct;
        opts.forEach(x => { x.disabled = true; if (q.opts[+x.dataset.k] === q.correct) x.classList.add("right"); });
        if (ok) { st.score++; $("#qmsg").textContent = ["Correct! 🚀", "Yes! Great answer! ⭐", "You got it! 🌟"][Math.floor(Math.random() * 3)]; }
        else { b.classList.add("wrong"); $("#qmsg").textContent = "Not quite — the right answer is highlighted. Keep going! 💪"; }
        $("#qNext").disabled = false; $("#qNext").focus();
    });
    $("#qNext").onclick = () => { st.i++; if (st.i < st.qs.length) showQ(v, st); else showResult(v, st); };
}
function showResult(v, st) {
    const s = st.score; let msg;
    if (s === 10) msg = "Amazing! Perfect score! You are a Space Expert! 🏆";
    else if (s >= 8) msg = "Great job! You know a lot about space! 🚀";
    else if (s >= 5) msg = "Nice work! Keep learning and exploring! 🌍";
    else msg = "Good try! Every new fact helps you learn! ✨";
    $("#quizInner").innerHTML = `<div class="qresult"><div class="qcount">YOUR SCORE</div><div class="qbar"><i style="width:100%"></i></div><div class="score">${s}/10</div><p>${msg}</p><div class="btn-row" style="justify-content:center"><button class="btn btn-light" id="qAgain">TRY AGAIN ↻</button><a class="btn btn-ghost" style="background:transparent;color:#fff;border-color:rgba(255,255,255,.4)" href="#quizzes">More quizzes</a></div></div>`;
    $("#qAgain").onclick = () => startQuiz(v);
}

/* =========================================================
   ROUTER
   ========================================================= */
function route() {
    const h = decodeURIComponent(location.hash || "");
    const m = h.match(/^#\/v\/([\w-]+)(\/quiz)?$/);
    if (m && byId(m[1])) {
        const v = byId(m[1]);
        document.body.classList.add("on-detail");
        if (document.body.dataset.world !== v.world) { document.body.dataset.world = v.world; }
        renderDetail(v);
        document.title = v.name + " — Cosmic Legacy";
        if (m[2]) { requestAnimationFrame(() => $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" })); }
        else window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
        return;
    }
    const wasDetail = document.body.classList.contains("on-detail");
    document.body.classList.remove("on-detail");
    document.body.dataset.world = world;
    document.title = "Cosmic Legacy — by Stellar Minds";
    if (wasDetail) { hero && hero.resize(); map && map.resize(); }
    const id = h.replace(/^#/, "");
    const el = id && id !== "home" ? document.getElementById(id) : null;
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: wasDetail ? "auto" : "smooth", block: "start" }));
    else if (wasDetail || id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    buildCards(); buildTimelines(); buildSources(); newGame();
    $$(".topbar .wbtn").forEach(b => b.onclick = () => { if (document.body.classList.contains("on-detail")) { location.hash = "#home"; } setWorld(b.dataset.w); });
    $("#restart").onclick = newGame; $("#again").onclick = newGame;
    const mb = $("#menuBtn"), dr = $("#drawer");
    mb.onclick = () => { const o = dr.classList.toggle("open"); mb.setAttribute("aria-expanded", String(o)); };
    $$("#drawer a").forEach(a => a.addEventListener("click", () => { dr.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); }));
    window.addEventListener("hashchange", route);
    window.addEventListener("resize", () => { hero && hero.resize(); });
    initHero();
    initMap();
    setTimeout(() => makeTexture("mars"), 300);
    route();
});