console.log("loading breweries_and_beers");

var breweries_and_beers = [{
    "Brewery": 'Brasserie Saint-Germain',
    "Beers": ['Page 24 Bi��re De No��l', 'Page 24 R��serve Hildegarde', 'Page 24 Biere De Printemps', 'Page 24 R��serve Hildegarde Ambr��e']
}, {
    "Brewery": 'Friesisches Brauhaus zu Jever GmbH &amp; Co KG',
    "Beers": ['Jever Dark', 'Jever Pilsener']
}, {
    "Brewery": 'Standing Stone Brewing Company',
    "Beers": ['Standing Stone Double IPA']
}, {
    "Brewery": 'Croucher Brewing Co.',
    "Beers": ['Patriot', 'New Zealand Pilsner']
}, {
    "Brewery": 'Chama River Brewing Company',
    "Beers": ['Jackalope IPA']
}, {
    "Brewery": 'DuClaw Brewing Company',
    "Beers": ['Bourbon Barrel Aged Imperial Chocolate Rye Porter (X-1)', 'Kangaroo Love', 'Twisted Kilt', 'H.E.R.O. 2012 (Chocolate Chipotle Stout)', '31', 'ALCHEMY', 'Old Flame', 'Anti-Venom-Citra', 'X5 Sorachi Ace IPA', '13 (Thirteen) Degrees', 'DuClaw Exile 4 (macchiato Milk Stout)', 'Sawtooth', 'Mysterium', 'Soul Jacker', 'Misfit Red', 'Sweet Baby Jesus', 'Double Naked Fish', 'Repent', 'Euphoria', 'Naked Fish', 'Bare Ass Blonde Ale', 'Bad Moon Porter', 'Oak Aged Black Jack Stout', 'Mad Bishop', 'Misery', 'Colossus', 'DuClaw Exile 1 (Imperial Chocolate Rye Porter)', 'Black Lightning', 'Serum', 'Black Jack Imperial Stout', 'Venom', 'Devil\'s Milk', 'Retribution', 'HellRazer']
}, {
    "Brewery": 'Mystic "Brewery"',
    "Beers": ['An Dreoilin', 'Day Of Doom', 'Cabernet Sauvignon Barrel Fermented Saison', 'Cabernet Sauvignon Barrel Fermented Descendant', 'Lord Falconer', 'Vinland One', 'Old Powderhouse', 'Bourbon-Barrel Aged Descendant Suffolk Dark Ale', 'Saison Renaud', 'Saison', 'Sauvignon Blanc Barrel Fermented Saison', 'Descendant Dark Ale']
}, {
    "Brewery": 'Brouwerij Huyghe',
    "Beers": ['St. Idesbald Blond', 'St. Idesbald Tripel', 'St. Idesbald Dubbel', 'Kira', 'Floris Framboise', 'Florisgaarden Ninkeberry', 'Florisgaarden Apple', 'Floris Ninkeberry', 'Artevelde Grand Cru', 'Duinen Tripel', 'Van Diest Fr�_li Strawberry Beer', 'Delirium Nocturnum', 'Delirium No��l', 'La Guillotine', 'Delirium Tremens', 'Floris Apple']
}, {
    "Brewery": 'Alexander Keith\'s',
    "Beers": ['Alexander Keith\'s Tartan Ale', 'Alexander Keith\'s Nova Scotia Style Brown Ale']
}, {
    "Brewery": 'Rocky Mountain Brewing',
    "Beers": ['Rocky Mountain IPA']
}, {
    "Brewery": 'New Albanian Brewing Company Pizzeria and Public House',
    "Beers": ['Elsa Von Horizon', 'Tunnel Vision', 'Jaxon', 'Naughty Girl Blonde India Pale Ale', 'Thunderfoot', 'Bonfire Of The Valkyries', 'Yakima Rye IPA', 'Solidarity', 'New Albanian Hoptimus IPA', 'Elector Imperial Red Ale']
}, {
    "Brewery": 'Hair of the Dog Brewing Company / "Brewery" and Tasting Room',
    "Beers": ['Little Dog', 'Greg', 'Michael', 'Adam', 'Adam From The Wood', 'Doggie Claws', 'Ruth', 'Fred From The Wood', 'Matt', 'Fred', 'Cherry Adam From The Wood', 'Bourbon Fred From The Wood', 'Blue Dot Double India Pale Ale']
}, {
    "Brewery": 'Murray\'s Craft Brewing Co.',
    "Beers": ['Murray\'s Heart Of Darkness Oak Aged', 'Murray\'s Big Wednesday Pale Ale', 'Murray\'s Angry Man', 'Murray\'s Pilsner', 'Murray\'s Heart Of Darkness', 'Murray\'s Port Stephens Whale Ale', 'Murray\'s Spartacus', 'Murray\'s Shawn\'s Fault', 'Murray\'s Grand Cru', 'Murray\'s Best Extra Porter', 'Murray\'s Punch &amp; Judy', 'Murray\'s Wild Thing Imperial Stout', 'Murray\'s Icon 2IPA']
}, {
    "Brewery": 'Snipes Mountain Micro"Brewery" &amp; Restaurant',
    "Beers": ['Porter', 'Sunnyside Pale', 'Roza Barley Wine', 'Snipes India Pale Ale']
}, {
    "Brewery": 'St. Austell "Brewery"',
    "Beers": ['Cornish IPA', 'Admiral\'s Ale', 'St. Austell Tribute Premium Cornish Ale', 'Proper Job']
}, {
    "Brewery": 'Utah Brewers Cooperative',
    "Beers": ['Wasatch Summer Twilight', 'Wasatch Apricot Hefeweizen', 'Wasatch Bobsled Brown Ale', 'Squatters Organic Amber Ale', 'Wasatch Polygamy Porter', 'Wasatch Evolution Amber Ale', 'Squatters Captain Bastard\'s Oatmeal Stout', 'Squatters Big Cottonwood', 'Wasatch Pumpkin Ale', 'Wasatch White Label', 'Squatters Fifth Element', 'Squatters Provo Girl Pilsner', 'Wasatch The Devastator Double Bock', 'Squatters Hell\'s Keep', 'Squatters Full Suspension Pale Ale', 'Wasatch 1st Amendment Lager', 'Squatters 529', 'Wasatch Summerbrau Lager', 'Squatters IPA', 'Squatters Hop Rising Double IPA', 'Squatters Outer Darkness', 'Wasatch Winterfest']
}, {
    "Brewery": 'BJ\'s Restaurant &amp; Brewhouse',
    "Beers": ['Octoberfest', 'Nutty Brewnette', 'Grand Cru', 'Jeremiah Red Ale', 'Tatonka Stout', 'Piranha Pale Ale']
}, {
    "Brewery": 'Moon Dog Craft "Brewery"',
    "Beers": ['Henry Ford\'s Girthsome Fjord', 'Skunkworks Double IPA (Cognac Barrel Aged)']
}, {
    "Brewery": 'Steel Toe Brewing',
    "Beers": ['Sommer Vice', 'Lunker', 'Size 11', 'Provider', 'Size 7', 'Dissent', 'Rainmaker']
}, {
    "Brewery": 'New Holland Brewing Company',
    "Beers": ['Monkey King Saison, Farmhouse Ale', 'Bourbon Barrel Aged Pilgrim\'s Dole', 'Charkoota Rye', 'New Holland Red Tulip Ale', 'New Holland Zoomer Wit', 'New Holland Pilgrim\'s Dole', 'New Holland Sundog Amber Ale', 'Four Witches', 'New Holland El Mole Ocho', 'New Holland Ichabod Ale', 'Beerhive Tripel', 'New Holland Lucid', 'New Holland Mad Hatter India Pale Ale', 'New Holland Paleooza', 'New Holland The Poet', 'New Holland Dragon\'s Milk Oak Barrel Ale', 'New Holland Imperial Hatter', 'New Holland Blue Goat', 'New Holland Full Circle', 'New Holland Cabin Fever Brown Ale', 'Oak Aged Mad Hatter India Pale Ale', 'New Holland Night Tripper', 'Blue Sunday Sour', 'Golden Cap', 'New Holland Black Tulip Trippel Ale', 'New Holland Black Hatter', 'New Holland Farmhouse Hatter Belgian IPA', 'White Hatter']
}, {
    "Brewery": 'Berkshire Brewing Company Inc.',
    "Beers": ['Franklin Land Trust Preservation Ale', 'Berkshire Good Night Irene', 'Saint Of Circumstance Sour Mash Whiskey Barrel Aged IPA', 'Berkshire Hefeweizen', 'Gold Spike Ale', 'Raspberry Strong Ale', 'Berkshire Ale Traditional Pale Ale', 'Cabin Fever Ale', 'Steel Rail Extra Pale Ale', 'Drayman\'s Porter', '"Shabadoo" Black &amp; Tan Ale', 'Berkshire Maibock Lager', 'Berkshire Oktoberfest Lager', 'River Ale', 'Lost Sailor India Pale Ale', 'Berkshire Russian Imperial Stout', 'Coffeehouse Porter', 'Berkshire Czech Pilsner', 'Holidale', 'Saint Of Circumstance India Pale Ale']
}, {
    "Brewery": 'Cigar City Brewing',
    "Beers": ['Oktoberfest M�_rzen', 'Tony Jannus Pale Ale', 'Ligero', 'Hot Blooded Foreign Stout', 'Tropical Heatwave Wheat Ale', 'Patio Pils', 'Ghost Stories', 'Hopped Up Johnnie', 'El Lector', 'Guava Groove', 'Criterium Ale (2012)', 'Table Saison', 'Florida Cracker White Ale', 'Minaret Extra Special Bitter', 'Hillsborough River Dry Irish Stout (Patio Tools)', 'Cucumber Saison', 'Puppy\'s Breath Porter', 'Humidor Double American Black Ale', 'Sugar Plum Brown Ale', 'Cigar City / Dunedin Auld Alliance', 'Guava Grove Saison', 'Oatmeal Raisin Cookie Brown Ale', 'Homefront IPA', 'Kalevipoeg Baltic Porter', 'Maduro Oatmeal Brown Ale', 'Cubano-Style Espresso Brown Ale', 'Black Whole', 'Hotter Than Helles Lager', 'Jai Alai IPA', 'Improv (Improvisaci�_n) Oatmeal Rye India-Style Brown Ale', 'Leon', 'Bolita Double Nut Brown Ale', 'Good Gourd Imperial Pumpkin Ale', 'Marshal Zhukov\'s Imperial Stout', 'Tocobaga Red Ale', 'Moat Water', 'Jos�� Mart�_ American Porter', '110K+OT Batch #5', 'Hunahpu\'s Imperial Stout']
}, {
    "Brewery": 'Hangar 24 "Brewery"',
    "Beers": ['Essence', 'Amarillo Pale Ale', 'Polycot', 'Hangar 24 Chocolate Porter', 'Barrel Roll No. 4 Hammerhead', 'Hangar 24 IPA', 'Columbus IPA', 'Hangar 24 Orange Wheat', 'Barrel Roll No. 3 Pugachev\'s Cobra', 'Alt-Bier Ale']
}, {
    "Brewery": 'Grizzly Peak Brewing Company',
    "Beers": ['Bear Paw Porter', 'Grizzly Peak Pale Ale']
}, {
    "Brewery": 'Helltown Brewing',
    "Beers": ['Helltown Devious Ale', 'Helltown The Rapture IPA']
}, {
    "Brewery": 'Iron Hill "Brewery" &amp; Restaurant',
    "Beers": ['Oak Aged Cherry Quad', 'Cassis De Hill', 'Octoberfest', 'Rising Sun', 'Phightin Phils Pils', 'Belgian Tripel', 'American IPA', 'Oak-Aged Saison De Sorachi', 'Ron Burgundy', 'Belgian Witbier', 'Shokolad Stout', 'Kriek De Hill', 'Dark Ritual', 'Framboise De Hill', 'Hefeweizen', 'Barleywine', 'Oompa Loompa Chocolate Stout', 'Weizenbock', 'German Pilsener', 'Flemish Red (F.red)', 'Anvil Ale', 'Belgian Pale Ale', 'Rye IPA', 'Bourbon Porter', 'Wee Heavy', 'The Cannibal', 'FE 10 Anniversary Ale', 'Big Red Wibby', 'Hopilicious IPA', 'Raspberry Wheat', 'American Brown Ale', 'Vienna Red Lager', 'Abbey Dubbel', 'Hopstinger', 'Afternoon Delight', 'Berliner Weisse', 'Ironbound Ale', 'Pig Iron Porter', 'Russian Imperial Stout', 'Kryptonite']
}, {
    "Brewery": 'Skagit River "Brewery"',
    "Beers": ['Jenny\'s Scottish Ale', 'Brown Ale', 'Trumpeter Imperial Stout', 'Sculler\'s IPA']
}, {
    "Brewery": '"Brewery" Lobkowicz',
    "Beers": ['Demon', 'Lobkowicz Prince', 'Lobkowicz Baron', 'Lobkowicz Knight']
}, {
    "Brewery": 'Mt. Carmel Brewing Company',
    "Beers": ['Quaff Bros Figgy Pudding', 'Copper Ale', 'Harvest Ale', 'Summer Wheat Ale', 'Springtime Ale', 'Nut Brown Ale', 'Winter Ale', 'Stout', 'Amber Ale']
}, {
    "Brewery": 'Flying Bison Brewing Company',
    "Beers": ['Skye Pilot Scotch Ale', 'Rusty Chain', 'The "Herc" C-130 Strong Ale', 'Barnstormer Pale Ale', 'Blackbird Oatmeal Stout', 'Buffalo Lager', 'Aviator Red']
}, {
    "Brewery": 'Port Brewing Company / Pizza Port',
    "Beers": ['Fallbrook Estate Pale Ale', 'Achievement Beyond Life\'s Experiences (A.B.L.E.) (Pizza Port Ocean Beach)', 'Twerp', 'Riptide', 'Pier Rat Porter', 'Dusk Till Dawn', 'Amigo Lager', 'Doheny Double IPA', 'Carlsbad Cow Stout', 'Dubbelicious', 'Booya Steez', 'Way Heavy', 'Pants Optional', 'Cho-Saiko', 'Coffee Monster', 'InFamous', 'California Honey Ale', 'El Camino IPA', 'Lou P Lin IPA', 'Shark Attack Triple Red Ale', 'Killer Dana Double IPA', 'Sticky Stout', 'Carlsbad Chronic', 'Bacon &amp; Eggs Porter', 'Ad Lib', 'Back In Mak (La Cruda)', 'Jetty IPA', 'Dawn Patrol Dark', 'Pseudo IPA', 'Poor Man\'s Double IPA', '547 Haight', 'Swamis IPA', 'Night Rider', 'Plant To Pint', 'Hot Rocks Lager', 'Summer Pale Ale', 'Shark Bite Red Ale', '6th Anniversary Double IPA', 'Panzer Imperial Pilsner', 'Old Viscosity', 'Midnight Expression', 'Hop 15', 'Older Viscosity', 'Wipeout I.P.A.', 'Santa\'s Little Helper', 'Board Meeting', '5th Anniversary', 'Mongo', 'High Tide Fresh Hop IPA', 'Hop Suey', 'Shark Attack Double Red Ale', 'Special Pale Ale (SPA)']
}, {
    "Brewery": 'Port Jeff Brewing Company',
    "Beers": ['Port Jeff Porter']
}, {
    "Brewery": '1516 Brewing Company',
    "Beers": ['NZ Victory Hop Devil IPA']
}, {
    "Brewery": 'Ferme-Brasserie Saint Rieul',
    "Beers": ['Saint Rieul Triple']
}, {
    "Brewery": 'Hill Farmstead "Brewery"',
    "Beers": ['The Myth Of Saison', 'Civil Disobedience #5', 'Phenomenology Of Spirit', 'Mary', 'Columbus Pale Ale', 'Life Without Principle #2', 'Fear And Trembling (Cabernet/Bourbon Blend)', 'Genealogy Of Morals', 'Fear And Trembling (French Oak Cabernet)', 'Holger Danske', 'Everett (Barrel Aged)', 'Fear And Trembling (Bourbon)', 'Vera Mae', 'Clara Grisette', 'Earl (Bourbon Barrel Aged)', 'Biere De Norma', 'Life Without Principle #1', 'Fear And Trembling', 'Art', 'Mimosa', 'Ann', 'E.', 'Flora', 'Civil Disobedience #4', 'Florence Wheat Saison', 'Society &amp; Solitude #1', 'Arthur', 'Jim', 'What Is Enlightenment?', 'Double Citra', 'Amarillo Pale Ale', 'Simcoe Pale Ale', 'Juicy', 'Harlan IPA', 'James Black Ale', 'Anna', 'Everett Porter', 'Society &amp; Solitude #3', 'Motueka Pale Ale', 'Riwaka Pale Ale', 'Foster', 'Edward', 'Twilight Of The Idols', 'Earl Coffee Oatmeal Stout', 'Abner', 'George', 'Double Galaxy', 'Society &amp; Solitude #4', 'Society &amp; Solitude #5', 'Jimmy', 'Nor', 'Walden', 'Society &amp; Solitude #6', 'Damon (Blanton\'s Barrel Aged)', 'Citra Pale Ale', 'Birth Of Tragedy', 'Susan', 'Society &amp; Solitude #2', 'Ephraim', 'Daybreak']
}, {
    "Brewery": 'Otto\'s Pub and "Brewery"',
    "Beers": ['Bourbon-aged Jolly Roger Imperial Stout', 'Zeno\'s Rye Ale', 'Arthurs British IPA', 'Old Fugget', 'Ottonator', 'Black Mo Dry Stout', 'Apricot Wheat', 'Red Mo Ale', 'Jolly Roger Imperial Stout', 'Mt. Nittany Pale Ale', 'Slab Cabin IPA', 'Double D IPA']
}, {
    "Brewery": 'J. Boag &amp; Son Brewing',
    "Beers": ['Wizard Smith\'s Ale']
}, {
    "Brewery": 'Rockyard Brewing',
    "Beers": ['Lightning Strike Stout', 'Hopyard IPA']
}, {
    "Brewery": 'Meantime Brewing Company Limited',
    "Beers": ['Wheat', 'Yakima Red', 'Naval College Old Porter', 'Winter Time', 'Chocolate Porter', 'Old Smoked Bock', 'Coffee Porter', 'London Porter', 'London Pale Ale', 'Chocolate', 'London Stout']
}, {
    "Brewery": 'K�_ppers Brauerei GmbH',
    "Beers": ['K�_ppers Kolsch']
}, {
    "Brewery": 'Trinity Brewing Company',
    "Beers": ['Brain Of The Turtle: Petite Cerise', 'Flo IPA', 'Slap Your Mammy Double IPA', 'Awaken Stout', 'TPS Report']
}, {
    "Brewery": 'Aktien-Brauerei Kaufbeuren AG',
    "Beers": ['St. Martin Dunkler Bock', 'Heller Belli Bock', 'Premium Edel (Spezialbier Edel)', 'Steingadener Weisse Dunkel', 'St. Blasius Weizenbock', 'Buronator Doppelbock', 'St. Martin Dunkler Doppelbock', 'Jubil�_ums German Pils']
}, {
    "Brewery": 'Milwaukee Ale House',
    "Beers": ['Sheepshead Stout', 'Flaming Damsel', 'Louie\'s Demise', 'Pull Chain Pail Ale']
}, {
    "Brewery": 'Old Forge Brewing Company',
    "Beers": ['Overbite IPA', 'Endless Summer Ale', 'T-Rail Pale Ale']
}, {
    "Brewery": 'Barrier Brewing Company',
    "Beers": ['Bulkhead Red', 'Sanity IPA']
}, {
    "Brewery": 'Brewmaster Jack',
    "Beers": ['Ambrewsia']
}, {
    "Brewery": 'Tequesta Brewing Company',
    "Beers": ['Gnarly Barley']
}, {
    "Brewery": 'The Defiant Brewing Company',
    "Beers": ['The Horseman\'s Ale', 'Golden Nugget', 'Muddy Creek Lager', 'Christmas Ale', 'Belgian Tripel']
}, {
    "Brewery": 'Manzanita Brewing Company',
    "Beers": ['Serenity', 'Chaotic Double IPA']
}, {
    "Brewery": 'N�_rke Kulturbryggeri AB',
    "Beers": ['�_rebro Bitter', 'CAmarillo', 'Kaggen! Stormaktsporter', 'Stormaktsporter']
}, {
    "Brewery": 'Trailhead Brewing Company',
    "Beers": ['Old Courthouse Stout', 'Trailhead Red Ale', 'Missouri Brown Dark Ale']
}, {
    "Brewery": 'Bowen Island Brewing Co. Ltd.',
    "Beers": ['Bowen Island Irish Cream Ale', 'Bowen Island Extra Pale Ale']
}, {
    "Brewery": 'Nova Paka "Brewery"',
    "Beers": ['BrouCzech Lager (Brouۍek Beer)']
}, {
    "Brewery": 'Pennsylvania Brewing Company',
    "Beers": ['Penn Harvest Rye PA', 'Penn Overlook IPA', 'Penn 25th Anniversary Imperial Pilsner', 'Chocolate Meltdown', 'Penn Weizen', 'Penn Pilsner', 'M�_rzen', 'Kaiser Pils', 'Penn Dark', 'Penn Oktoberfest', 'PENNdemonium', 'St. Nikolaus Bock Bier', 'Allegheny Pale Ale', 'Penn Gold']
}, {
    "Brewery": 'Ringwood "Brewery"',
    "Beers": ['Ringwood Boondoggle Summer Ale', 'Ringwood Old Thumper (UK Version)']
}, {
    "Brewery": 'Westbrook Brewing Co.',
    "Beers": ['Single Hop: Amarillo', 'M�_rzenbier', 'Single Hop: Pacific Jade', 'Gose', 'Covert Hops', 'Single Hop: Nelson Sauvin', 'Dark Helmet', 'Lichtenhainer', 'Vanilla Tree Dubbel', 'Farmhouse IPA', 'Westbrook / Evil Twin Minigrowler Imperial Stout', 'Cap\'n Skoon\'s Ballistic Stout', 'White Thai', 'Mexican Cake', 'India Pale Ale', 'Citrus Ninja Exchange (2012)']
}, {
    "Brewery": 'Cairngorm "Brewery" Company, The',
    "Beers": ['Sheepshaggers Gold', 'Blessed Thistle', 'Wildcat', 'Black Gold', 'Trade Winds']
}, {
    "Brewery": 'Privat Brauerei Schmucker Ober-Mossau KG',
    "Beers": ['Odenwalder Meister Pils']
}, {
    "Brewery": 'Tampa Bay Brewing Co.',
    "Beers": ['One Night Stand Pale Ale', 'Wild Warthog Hefeweizen', 'Moosekiller Barley Wine Style Ale', 'Jack The Quaffer Porter', 'Old Elephant Foot IPA']
}, {
    "Brewery": 'Yakima Craft Brewing Co.',
    "Beers": ['Twin Stag Scottish Ale']
}, {
    "Brewery": 'Lucette Brewing Company',
    "Beers": ['Farmer\'s Daughter']
}, {
    "Brewery": 'Blue Mountain "Brewery"',
    "Beers": ['Sour Devil', 'Evan Altmighty', 'Blue Mountain Imperial Porter', 'The Big D.I.P.A.', 'Isabel', 'Rockfish Wheat', 'Dark Hollow Chocolate &amp; Coffee Aged', 'Lights Out Holiday Ale', 'Blue Mountain Lager', 'Full Nelson Virginia Pale Ale', 'Mandolin', 'K�_lsch 151', 'Local Species', 'Dark Hollow Artisanal Ale', 'Evil 8�� Belgian-Style Dubbel Ale']
}, {
    "Brewery": 'Brasseurs R.J.',
    "Beers": ['Cap Espoir', 'Belle Gueule Rousse', 'Belle Gueule Originale', 'Tord Vis', 'Belle Gueule Pilsner', 'Brune D\'Achouffe', 'Blonde D\'Achouffe', 'Le Cheval Blanc Blanche', 'Coup De Grisou']
}, {
    "Brewery": 'Ruhstaller',
    "Beers": ['1881', 'Capt.']
}, {
    "Brewery": 'Kona Brewing Co.',
    "Beers": ['Old Blowhole Barleywine', 'Castaway IPA', 'Koko Brown', 'Pipeline Porter', 'Longboard Island Lager', 'Fire Rock Pale Ale', 'Big Wave Golden Ale', 'Wailua Wheat']
}, {
    "Brewery": 'Oskar Blues Brewing Company',
    "Beers": ['Leroy', 'OSKAr The G\'Rauch', 'Chaka', 'HGH Part Duh', 'Old Double Bagger', 'Ten FIDY (Whiskey Barrel)', 'Mama\'s Little Yella Pils', 'GUBNA Imperial IPA', 'One Hit Wonder', 'Dale\'s Pale Ale', 'G\'Knight Imperial Red Ale', 'Deviant Dale\'s IPA', 'Ten FIDY']
}, {
    "Brewery": 'Freetail Brewing Company',
    "Beers": ['Velocihoptor', 'Bandito', 'Rye Wit', '3Tail', 'Barrel Aged Old Bat Rastard', 'Porto Gallito', 'Buffalo Hump 1840', 'Yo Soy Un Berliner', 'Witicus Double Rye Wit', 'Raspberry Ananke', 'Fortuna Roja', 'Woodicus', 'Old Bat Rastard', 'La Muerta', 'Ananke']
}, {
    "Brewery": 'Boston Beer Company (Samuel Adams)',
    "Beers": ['Samuel Adams Oak Aged Porter', 'LongShot Magnificent Seven', 'SAVOR Flowers', 'Samuel Adams Little White Rye', 'Samuel Adams Bonfire Rauchbier', 'Samuel Adams Stony Brook Red (Barrel Room Collection)', 'Samuel Adams Blueberry Hill Lager', 'Samuel Adams Utopias', 'Samuel Adams White Ale', 'Samuel Adams Hazel Brown', 'Samuel Adams Summer Ale', 'Cinder Bock', 'Samuel Adams American Kriek (Barrel Room Collection)', 'Samuel Adams Dunkelweizen', 'Samuel Adams Old Fezziwig Ale', 'Samuel Adams Octoberfest', 'Samuel Adams Imperial White', 'Norse Legend Sahti', 'Samuel Adams Scotch Ale', 'Samuel Adams Blackberry Witbier', 'Samuel Adams Boston Lager', 'Samuel Adams White Christmas', 'Samuel Adams Chocolate Bock', 'Samuel Adams Holiday Porter', 'Samuel Adams Chocolate Cherry Bock', 'Samuel Adams Rustic Saison', 'Samuel Adams Irish Red', 'Samuel Adams Boston Ale (Stock Ale)', 'Samuel Adams Black Lager', 'Sam Adams Light', 'Samuel Adams Maple Pecan Porter', 'Samuel Adams East-West K�_lsch', 'Samuel Adams Imperial Stout', 'Samuel Adams Honey Porter', 'Curious Traveler Summer Shandy', 'Belgian Session', 'Samuel Adams Winter Lager', 'Samuel Adams Pale Ale', 'Samuel Adams Harvest Pumpkin Ale', 'Verloren', 'Samuel Adams Double Bock (Imperial Series)', 'Samuel Adams White Lantern', 'Samuel Adams Cream Stout', 'Samuel Adams Wee Heavy (Imperial Series)', 'Samuel Adams New World Tripel (Barrel Room Collection)', 'Infinium', 'Samuel Adams New Albion Ale', 'Samuel Adams Mighty Oak Ale', 'Samuel Adams Whitewater IPA', 'Samuel Adams Alpine Spring', 'Samuel Adams Thirteenth Hour Stout (Barrel Room Collection)', 'Samuel Adams Noble Pils', 'Merry Mischief Gingerbread Stout', 'The Vixen Chocolate Chili Bock', 'Samuel Adams Hallertau Imperial Pilsner', 'Samuel Adams Revolutionary Rye Ale', 'Samuel Adams Black &amp; Brew Coffee Stout', 'Samuel Adams Latitude 48 IPA', 'Samuel Adams Porch Rocker', 'Grumpy Monk', 'Tasman Red IPA', 'Samuel Adams Double Agent IPL', 'Samuel Adams Fat Jack Double Pumpkin Ale', 'Dark Depths', 'Third Voyage Double IPA', 'Griffin\'s Bow']
}, {
    "Brewery": 'Three Floyds Brewing Co. &amp; Brewpub',
    "Beers": ['219', 'Mushy P.', 'Murda\'d Out Stout', 'Bourbon Behemoth With Cherries', 'Blot Out The Sun Stout', 'Deesko!', 'Conquistador De Muerte', 'Barrel Aged Black Sun Stout', 'Space Station: Middle Finger', 'Barrel Aged Alpha Klaus', 'Stack N Stabb', 'Region Riot', 'Toxic Revolution', 'Ham On Rye', 'Samurai Gazebo', 'Drunk Monk Hefeweizen', 'Robert The Bruce Scottish Ale', 'Thick White Freeks', 'Rabbid Rabbit', 'Pride &amp; Joy Mild Ale', 'Alpha King Pale Ale', 'Gumballhead', 'Bourbon Barrel Aged Dark Lord Imperial Stout', 'Zes Zes Zes', 'Munsterfest', 'Topless Wytch', 'Behemoth Blonde Barleywine', 'Risgoop', 'Hell\'s Black Intelligencer', 'Sand Pebbles', 'Rye\'d Da Lightning', 'In The Name Of Suffering', 'Barrel Aged Moloko', 'Evil Power', 'Alpha Klaus Christmas (Xmas) Porter', 'Barrel Aged Behemoth', 'Rye\'da Tiger', 'Live A Rich Life', 'Dreadnaught IPA', 'Gorch Fock', 'Jinx Proof', 'Brian Boru Old Irish Red', 'Lord Rear Admiral', 'Bourbon Barrel Aged Vanilla Bean Dark Lord', 'Blackheart', 'Calumet Queen', 'Black Sun Stout', 'Permanent Funeral', 'Moloko', 'Arctic Panzer Wolf', 'Dark Lord Imperial Stout', 'Zombie Dust', 'Apocalypse Cow', 'Broo Doo']
}, {
    "Brewery": 'Crossroads Brewing Company',
    "Beers": ['Brady\'s Bay Cream Ale', 'Outrage IPA']
}, {
    "Brewery": 'Gulpener Bierbrouwerij B.V.',
    "Beers": ['Gulpener Dort', 'Gulpener Korenwolf']
}, {
    "Brewery": 'Victory Brewing Company',
    "Beers": ['Saphir Pils', 'Ranch Double IPA', 'Bags Packed Porter', 'Harvest Pils', 'NATO IPA', 'Strangeways Golden Ale', 'Schwarz Pils', 'Mild Rye\'d', 'Scarlet Fire Rauchbier', 'Otto In Oak', 'Rauch Porter', 'Golden Monkey', 'Dampf Bier', 'Otto Ale', 'Throwback Lager', 'Mad King\'s Weiss', 'Altbier', 'Milltown Mild', 'Smokin\' Oats', 'Ranch S IPA', 'Sunrise Weiss', 'Prima Pils', 'Festbier', 'Red Thunder', 'Moonglow Weizenbock', 'Whirlwind Witbier', 'V-Twelve', 'HopDevil Ale', 'Victory Dark Lager', 'Old Horizontal', 'St. Boisterous', 'Wild Devil', 'Victory Lager', 'Hop Wallop', 'Donnybrook Stout', 'St. Victorious', 'Braumeister Harvest Pils', 'Victory ESB', 'K�_lsch Ale', 'Baltic Thunder', 'Victory Village', 'Uncle Teddy\'s Bitter', 'White Monkey', 'Storm King Stout', 'Braumeister Pils', 'Helios  (V Saison)', 'Victory Harvest Ale', 'Swing Session Saison', 'Summer Love', 'Headwaters Pale Ale', 'Yakima Glory', 'Pursuit Of Pale Ale', 'Ranch R Double IPA', 'Oak Horizontal']
}, {
    "Brewery": 'Nail Brewing Australia Pty Ltd',
    "Beers": ['Clout Stout']
}, {
    "Brewery": 'Bristol Brewing Company',
    "Beers": ['Venetucci Pumpkin Ale', 'Yellow Kite', 'Beehive', 'Cheyenne Canon Pinon Nut Brown Ale', 'Mass Transit Ale', 'Smokebrush Porter', 'Laughing Lab Scottish-Style Ale', 'Red Rocket Ale', 'Winter Warlock Oatmeal Stout', 'Edge City IPA', 'Compass IPA', 'Old No. 23']
}, {
    "Brewery": 'Tired Hands Brewing Company',
    "Beers": ['Single Hop Saison (Simcoe)', 'Brothers', 'Slava Oner', 'Entropic', 'MotherAnimal', 'Singel Hop Saison (Nelson Sauvin)', 'E.W.B.A.N.H. (Everything Was Beautiful And Nothing Hurt)', 'Nigel', 'Ego Disillusionment', 'Delicado', 'Guillemot Nebula', 'Mago Tago', 'HandFarm', 'HopHands', 'FarmHands', 'The Light That Spills Out Of The Hole In Your Head']
}, {
    "Brewery": 'World Brews',
    "Beers": ['Trouble Brewing Amber Ale', 'Barrel Trolley Pale Ale', 'Roscoe\'s Hop House Pale Ale', 'Hollande 1620']
}, {
    "Brewery": 'Bear Republic Brewing Co.',
    "Beers": ['El Oso', 'Double Aught', 'Wine Country Wheat', 'Late Harvest Lager', 'Crazy Ivan', 'Rebellion', 'Nor Cal Ale', 'Tartare', 'Racer 5 India Pale Ale', 'Black Racer', 'Heritage Ale', 'Red Rocket Ale', 'Big Bear Black Stout', 'Peter Brown Tribute Ale', 'Mach 10', 'Apex', 'Hop Rod Rye', 'XP Pale Ale', 'Racer X Double IPA', 'Ryevalry', 'Caf�� Racer 15']
}, {
    "Brewery": 'Brouwerij Timmermans-John Martin N.V.',
    "Beers": ['Timmermans P��che Lambic', 'Timmermans Tradition Gueuze Lambic', 'Timmermans Gueuze Lambic', 'Timmermans Kriek Lambic', 'Bourgogne Des Flandres', 'Bourgogne Des Flandres Brune / Bruin', 'Timmermans Lambicus Blanche (Blanche-Lambic)', 'Timmermans Pumpkin Lambicus']
}, {
    "Brewery": 'Carlton &amp; United Breweries, Ltd.',
    "Beers": ['Abbotsford Invalid Stout', 'Carlton Black', 'Sheaf Stout']
}, {
    "Brewery": 'Les Fr��res Houblon Microbrasserie',
    "Beers": ['Fontaine Du Diable']
}, {
    "Brewery": 'Calicraft Brewing Co.',
    "Beers": ['Oaktown Brown Ale']
}, {
    "Brewery": 'Allg�_uer Brauhaus AG',
    "Beers": ['Allg�_uer Weihnachtsbier', 'Allg�_uer Urbairisch Dunkel', 'St. Magnus Heller Bock', 'Allg�_uer F�_rstabt Hefeweizen', 'Allg�_uer Bayrisch Hell', 'Altenm�_nster Brauer Bier Urig Wurzig', 'Allg�_uer Teutsch Pils', 'Allg�_uer Oktoberfest', 'Altenm�_nster Premium', 'Allg�_uer B�_ble Bier', 'Altenm�_nster Winterbier Dopplebock', 'Allg�_uer Cambonator Doppelbock', 'Altenm�_nster Maibock']
}, {
    "Brewery": 'JT Schmid\'s Restaurant &amp; "Brewery"',
    "Beers": ['JT Schmid\'s India Pale Ale']
}, {
    "Brewery": 'Kane Brewing Company',
    "Beers": ['First Anniversary Three-Hundred-Sixty-Five', 'Malus', 'Overhead', 'Head High']
}, {
    "Brewery": 'Thomas Creek "Brewery"',
    "Beers": ['Thomas Creek Chocolate Orange IPA', 'Thomas Creek Banana Split Chocolate Stout', 'Thomas Creek Dockside Pilsner', 'Thomas Creek River Falls Red Ale', 'Thomas Creek Deep Water Dopplebock', 'Thomas Creek Appalachian Amber Ale', 'Thomas Creek Conduplico Immundus Monachus', 'Thomas Creek Stillwater Vanilla Cream Ale', 'Thomas Creek Pump House Porter', 'Thomas Creek Class Five IPA', 'Thomas Creek Up The Creek']
}, {
    "Brewery": 'Howe Sound Inn &amp; Brewing Company',
    "Beers": ['Gathering Storm', 'Garibaldi Honey Pale Ale', '4 Way Fruit Ale', 'Baldwin And Cooper Best Bitter', 'Woolly Bugger', 'Megadestroyer Imperial Licorice Stout', 'Rail Ale Nut Brown', 'King Heffy Imperial Hefeweizen', 'Diamond Head Oatmeal Stout', 'Pumpkineater', 'Bailout Bitter', 'Devil\'s Elbow IPA', 'Pothole Filler Imperial Stout', 'Father John\'s Winter Ale', 'Total Eclipse Of The Hop']
}, {
    "Brewery": 'R &amp; B Brewing Co.',
    "Beers": ['Dark Star Oatmeal Stout', 'Raven Cream Ale', 'Hoppelganger IPA']
}, {
    "Brewery": 'Saint Louis "Brewery" / Schlafly Tap Room',
    "Beers": ['Schlafly Belgian Singel', 'Schlafly Wit', 'Schlafly Doppelbock', 'Schlafly India Pale Ale', 'Schlafly Culinaria Holiday Ale', 'Schlafly Raspberry Hefeweizen', 'Schlafly 1904 American Lager', 'Schlafly #20, Volume 3: Citrus Witbier', 'Schlafly Hefeweizen', 'Schlafly Hop Harvest Ale', 'Schlafly American Brown Ale', 'Schlafly Porter', 'Schlafly Scotch Style Ale', 'Schlafly Weissbier', 'Schlafly Oktoberfest', 'Schlafly Quadrupel', 'Schlafly Summer Lager', 'Schlafly Oatmeal Stout', 'Schlafly Christmas Ale', 'Schlafly Bi��re De Garde', 'Schlafly Pilsner', 'Schlafly Saison', 'Schlafly Tripel', 'Schlafly Pale Ale', 'Schlafly Schwarzbier', 'Schlafly Winter ESB', 'Schlafly Culinaria Raspberry Coffee Stout', 'Schlafly Irish-Style Extra Stout', 'Schlafly American Pale Ale (APA) / Expedition Reserve', 'Schlafly Coffee Stout', 'Schlafly Grand Cru', 'Schlafly Yakima Wheat Ale', 'Schlafly K�_lsch', 'Schlafly Export India Pale Ale', 'Schlafly Pumpkin Ale', 'Schlafly American IPA', 'Schlafly Dry-Hopped American Pale Ale', 'Schlafly Tasmanian IPA (TIPA)']
}, {
    "Brewery": 'Engel Brauerei',
    "Beers": ['Trompe La Mort']
}, {
    "Brewery": 'Brasserie des Sources',
    "Beers": ['Bellerose']
}, {
    "Brewery": 'Urban Chestnut Brewing Company',
    "Beers": ['Daft', 'Winged Nut', 'Zwickel']
}, {
    "Brewery": 'Cismontane Brewing Company',
    "Beers": ['Black\'s Nocturne', 'The Citizen', 'Coulter IPA', 'Black\'s Dawn']
}, {
    "Brewery": 'Ballast Point Brewing Company',
    "Beers": ['Gueuze (Hout Series)', 'Three Sheets Barleywine (Syrah Barrel Aged)', 'Schooner Fresh Hop Ale', 'Ballast Point Oktoberfest', 'Piper Down Scottish Ale', 'Brother Levonian Saison', '3 Sheets Barleywine', 'Sea Monster American Stout (Bourbon Barrel Aged)', 'Abandon Ship Smoked Lager', 'Tongue Buckler (Bourbon Barrel Aged)', 'Reef Rye Brown Ale', 'Sour Wench Blackberry Ale', 'Piper Down Scottish Ale (Bourbon Barrel Aged)', 'Navigator Dopplebock', 'Indra Kunindra', 'Longfin Lager', 'Habanero Sculpin', 'Sextant Oatmeal Stout', 'Navigator Dopplebock (Brandy Barrel Aged)', 'Calico Copper Amber Ale', 'Fathom India Pale Lager', 'Black Marlin Porter', 'Even Keel', 'Yellowtail Pale Ale', 'Wahoo Wheat Beer', 'Three Sheets Barleywine (Barrel Aged)', 'Victory At Sea Coffee Vanilla Imperial Porter', 'Big Eye IPA', 'Dorado Double IPA', 'Sea Monster Imperial Stout', 'Victory At Sea (Barrel Aged) Imperial Porter', 'Sculpin India Pale Ale']
}, {
    "Brewery": 'Barley Creek Brewing Company',
    "Beers": ['Old \'99 Barleywine']
}, {
    "Brewery": 'Weston Brewing Company &amp; O\'Malley\'s Pub',
    "Beers": ['O\'Malley\'s IPA', 'SunRyes Ale', 'Drop Kick Ale']
}, {
    "Brewery": 'Maui Brewing Co.',
    "Beers": ['Aloha B\'ak\'tun', 'La Perouse White', 'Mana Wheat', 'Bikini Blonde Lager', 'Liquid Breadfruit', 'CoCoNut Porter', 'Big Swell IPA', 'Flyin\' HI.P.Hay']
}, {
    "Brewery": 'Monteith\'s Brewing Co.',
    "Beers": ['Monteith\'s Celtic Red', 'Monteith\'s Black', 'Monteith\'s Doppelbock Winter Ale']
}, {
    "Brewery": 'Delta Beverages',
    "Beers": ['Zambezi']
}, {
    "Brewery": 'Flossmoor Station Restaurant &amp; "Brewery"',
    "Beers": ['Zephyr Golden Ale', 'Gandy Dancer Honey Ale', 'Saison &amp; Garfunkel', 'Station Master Wheat Ale', 'Panama Limited Red Ale', 'Pullman Brown Ale', 'Killer "Kapowski" Kowalski', 'Rail Hopper IPA']
}, {
    "Brewery": 'Coedo "Brewery" (Kyodo Shoji Koedo "Brewery")',
    "Beers": ['Coedo Ruri', 'Coedo Kyara', 'Coedo Beniaka']
}, {
    "Brewery": 'O\'Connor Brewing Co.',
    "Beers": ['Norfolk Canyon Pale Ale', 'The Great Dismal Black IPA']
}, {
    "Brewery": 'Brewfist',
    "Beers": ['Fear', 'Caterpillar', 'Burocracy India Pale Ale', 'Spaceman']
}, {
    "Brewery": 'Brasserie Pietra',
    "Beers": ['Amber', 'Colomba']
}, {
    "Brewery": 'Lengthwise Brewing Company',
    "Beers": ['Lengthwise Triple Hop Red', 'Lengthwise Centennial Ale']
}, {
    "Brewery": 'Maui Brewing Co. (Brewpub)',
    "Beers": ['La Perouse']
}, {
    "Brewery": 'SA Brain &amp; Company Ltd',
    "Beers": ['Brains S. A.', 'SA Gold', 'Brains Dark', 'Reverend James']
}, {
    "Brewery": 'Leech Lake Brewing Company',
    "Beers": ['Driven Snow', '3 Sheets']
}, {
    "Brewery": 'Blue Frog Grog &amp; Grill',
    "Beers": ['Blonde Frog Ale', 'The Big DIPA 3', 'Red Frog Ale']
}, {
    "Brewery": 'Paper City "Brewery" Co., Inc.',
    "Beers": ['Cabot Street Wheat', 'PC Blue (Blueberry Brew)', 'Captain Elizur\'s Heritage Red Ale', 'Paper City Summer Brew', 'Summit House Oktoberfest', 'Paper City Nut Brown Ale', 'Goats Peak Bock', 'Batch 108', 'Fogbuster Coffee House Ale', 'Holyoke Dam Ale', 'India\'n Pale Ale', 'Ireland Parish Brand Golden Ale', 'Riley\'s Stout', 'Winter Palace Wee Heavy', 'Riley\'s Mothers Milk Stout', 'Hop Monster']
}, {
    "Brewery": 'Mendocino Brewing Company',
    "Beers": ['Talon Double IPA', 'Mendocino Black IPA', 'Mendocino Spring Seasonal Bock', 'Saratoga Lager', 'Saratoga IPA', 'White Hawk Original IPA', 'Black Eye Ale', 'Red Tail Ale', 'Eye of the Hawk', 'Imperial Stout', 'Imperial Barley Wine Style Ale', 'Blue Heron Pale Ale', 'Red Tail Lager', 'Black Hawk Stout']
}, {
    "Brewery": 'Dock Street "Brewery" &amp; Restaurant',
    "Beers": ['Man Full Of Trouble Porter', 'Hop Garden Double IPA', 'Dock Street Philadelphia Amber', 'Dock Street Bohemian Pilsner', 'Dock Street Illuminator']
}, {
    "Brewery": 'Goose Island Beer Co.',
    "Beers": ['Broad Shoulders Barleywine', 'Honest Stout', 'Bourbon Barrel Wheatmiser', 'Willow St. Wit', 'Resolutions', 'Hopscotch Ale', 'Madame Rose', 'Blonde', 'Pepe Nero', 'Kilgubbin Red Ale', 'Lolita', 'P��re Jacques', 'Liquid Inspiration Stout', 'Oktoberfest', 'Extremely Naughty Goose', 'Sahti', 'Juliet', 'Marisol', 'Baudoinia', 'Nut Brown Ale', 'Matilda', '312 Urban Wheat', 'Christmas Ale', 'Naughty Goose', 'Midway IPA', 'Bourbon County Brand Stout', 'Honker\'s Ale', 'Cherry Rye Bourbon County Brand Stout', 'Sofie', 'Mild Winter', 'Bramble Rye Bourbon County Brand Stout', 'Summertime', 'Green Line', 'Minx', 'Harvest Ale', 'Big John', 'Red Felt Ale', 'Bourbon County Brand Coffee Stout', 'Night Stalker', 'Imperial IPA']
}, {
    "Brewery": 'Snoqualmie Falls Brewing Company &amp; Taproom',
    "Beers": ['Louis Quatorze 14th Anniversary Imperial Stout', 'Plant 1 Powerhouse IPA', 'PGA (Perfectly Great Amber)', 'Summer Beer', 'Spring Fever Belgian Style Grand Cru Ale', 'Steam Train Porter', 'Avalanche', 'Harvest Moon Festbier Style Ale', 'Copperhead American Pale Ale', 'Wildcat India Pale Ale']
}, {
    "Brewery": 'Fitger\'s Brewhouse',
    "Beers": ['Apricot Wheat', 'Ol\' Redbeard Barleywine', 'Big Boat Oatmeal Stout', 'Starfire Pale Ale', 'El Nino IPA', 'Edmund Fitzgerald Imperial Stout (Bourbon Barrel Aged)']
}, {
    "Brewery": 'The Ale Apothecary',
    "Beers": ['Sahalie']
}, {
    "Brewery": 'Coffee Infused',
    "Beers": ['Imperial Stout Trooper']
}, {
    "Brewery": 'Brauerei Zipf (Brau Union)',
    "Beers": ['Zipfer Original']
}, {
    "Brewery": 'Double Take Brewing Company',
    "Beers": ['India Pale Ale']
}, {
    "Brewery": 'Mac and Jack\'s "Brewery"',
    "Beers": ['Two Tun IPA', 'Black Cat Porter', 'African Amber']
}, {
    "Brewery": 'Tommyknocker "Brewery"',
    "Beers": ['Alpine Glacier Pilsner', 'Nice Saison Seasonal Ale', 'Black Powder Stout', 'Vienna-Style Amber Lager', 'Cocoa Porter Winter Warmer', 'Oaked Butt Head Bock', 'Jack Whacker Wheat Ale', 'Maple Nut Brown Ale', 'Alpine Glacier Lager', 'Butthead Doppelbock', 'Pick Axe IPA', 'Small Patch Pumpkin Harvest Ale', 'Imperial Nut Brown Ale', 'Hop Strike Black IPA']
}, {
    "Brewery": 'Al\'s of Hampden / Pizza Boy Brewing',
    "Beers": ['Hop Test #1', 'Arck Angel 4IPA', 'Sunny Side Up (Little Amps Coffee)']
}, {
    "Brewery": 'Five Seasons Prado',
    "Beers": ['Munich Helles', 'Hopgasm']
}, {
    "Brewery": 'Georgetown Brewing Company',
    "Beers": ['Roger\'s Pils', 'Lucille IPA', 'Georgetown  Porter', 'Manny\'s Pale Ale']
}, {
    "Brewery": 'Birrificio Br�_ton',
    "Beers": ['Stoner', '10 (Dieci)', 'Lilith']
}, {
    "Brewery": 'Devil\'s Canyon Brewing Company',
    "Beers": ['Belle', 'California Sunshine Rye IPA', 'Full Boar Scotch Ale']
}, {
    "Brewery": 'Church Brew Works',
    "Beers": ['Thunderhop Double IPA', 'Coconut Stout', 'Blast Furnace Stout', 'Quadzilla (Cherry Quad)', 'Millenium Tripel', 'Pious Monk Dunkel', 'Thunderhop IPA', 'Celestial Gold']
}, {
    "Brewery": 'Nyn�_shamns Angbryggeri',
    "Beers": ['Dragets Kanal Dubbel IPA', 'Pumpviken P��sk�_l', 'Sotholmen Extra Stout', 'Mysingen Midvinterbrygd', 'B�_tet Barley Wine', 'Bedar�_ Bitter']
}, {
    "Brewery": 'Market Cross Pub &amp; "Brewery"',
    "Beers": ['Market Cross Red', 'Olde Yeller IPA']
}, {
    "Brewery": 'Lavery Brewing Company',
    "Beers": ['Devil Bird Holiday Ale', 'Belfast Black', 'Stingy Jack Pumpkin Ale', 'Liopard Oir']
}, {
    "Brewery": 'Evil Twin Brewing',
    "Beers": ['The Talented Mr. Orangutan Orange Stout', 'Evil Twin The Cowboy', 'Evil Twin Without You I\'m Nothing', 'Evil Twin Wet Dream', 'Evil Twin Bikini Beer', 'Evil Twin The Beer Formerly Known As Blackout', 'Evil Twin S��nderho Hipster Ale', 'Evil Twin Mad Dog Pale Ale', 'Evil Twin Kiwi Imperial Pils', 'Evil Twin 9th Symphony', 'All Occasions IPA', 'Russian Roulette', 'Evil Twin Disco Beer (Red Cap)', 'Evil Twin Ashtray Heart', 'Evil Twin Williamsburg Hipster Ale', 'Evil Twin Monk Suffers Serious Sugar Rush On Barbados', 'Evil Twin Katz Pis', 'Evil Twin Auld Yin', 'Evil Twin Yin', 'Evil Twin Ryan And The Beaster Bunny', 'Evil Twin Hop Flood', 'Evil Twin Biscotti Break', 'Evil Twin Soft Xmas', 'Evil Twin Yin &amp; Yang', 'Evil Twin Molotov Cocktail', 'Evil Twin Ron And The Beast Ryan', 'Evil Twin Disco Beer', 'Evil Twin Soft Dookie', 'Evil Twin Imperial Biscotti Break', 'Evil Twin Hipster', 'Evil Twin Yang', 'Evil Twin A�_n M��s A Jes�_s', 'Evil Twin Even More Jesus', 'Evil Twin Freudian Slip', 'Evil Twin Femme Fatale Brett', 'Evil Twin Lil\' B']
}, {
    "Brewery": 'Anderson Valley Brewing Company',
    "Beers": ['Bahl Hornin\' Mowkeef', 'Mendo Mellow', 'Wee Geech', 'Bahl Hornin\' Imperial Boont Amber Ale', 'Brother David\'s Triple Abbey Style Ale', 'High Rollers Wheat', 'Winter Solstice Seasonal Ale', 'Boont ESB', 'Deep Enders Dark Porter', 'Barney Flats Oatmeal Stout', 'Boont Amber Ale', 'Poleeko Gold Pale Ale', 'Brother David\'s Belgian-style Double Ale', 'Summer Solstice Cerveza Crema', 'Hop Ottin\' IPA', 'Anderson Valley Wild Turkey Bourbon Barrel Stout', 'Heelch O\'Hops']
}, {
    "Brewery": 'Brasserie Lef��bvre SA',
    "Beers": ['Moeder Overste', 'Abbaye De Floreffe Blonde', 'Abbaye De Floreffe Prima Melior', 'Abbaye De Floreffe Double', 'Barb��r (Belgian Honey Ale)', 'Saison 1900', 'Blanche De Bruxelles / Manneken Pis Belgian White', 'Hopus', 'Abbaye De Floreffe Triple', 'Barb��r Bok (formerly Barb��r De No��l)']
}, {
    "Brewery": 'Dark Star Brewing Company Limited',
    "Beers": ['Imperial Stout', 'ESPRESSO Superior Coffee Beer', 'HopHead', 'Espresso Stout', 'Dark Star Sunburst']
}, {
    "Brewery": 'Oak Pond Brewing Company',
    "Beers": ['Laughing Loon Lager', 'DoorYard Ale', 'Storyteller Doppelbock']
}, {
    "Brewery": 'Pipeworks Brewing Company',
    "Beers": ['Pastrami On Rye', 'Ubiquitous Pale Ale', 'Pipeworks / 18th St. "Brewery" Brotherhood', 'Nisperos De Batata', 'Raspberry Truffle Abduction Imperial Stout', 'Cranpire Christmas', 'Froggy Style', 'Ca$h 4 Golden Ale', 'Poivre Rose', 'North &amp; Western', 'Flower Child', 'Well Read Temptress', 'Jones Dog', 'Standard Issue IPA', 'Last Kiss', 'Barrel Aged Smoked Porter (20%)', 'Blue Lady', 'Glaucus', 'Santa Vs. Unicorn', 'End Of Days', 'Hyper Dog', 'At Her Majesty\'s Pleasure', 'Unicorn Galaxy', 'Blood Of The Unicorn', 'Something Hoppy This Way Comes', 'Ninja Vs. Unicorn', 'Citra Ninja', 'Abduction', 'Close Encounter', 'Abduction Coffee Break', 'Unicorn\'s Revenge']
}, {
    "Brewery": 'Tenaya Creek "Brewery"',
    "Beers": ['Tenaya Creek Old Jackalope Barleywine', 'Tenaya Creek Pilsner', 'Tenaya Creek Monsoon IPA', 'Tenaya Creek Imperial Stout', 'Tenaya Creek Calico Brown Ale', 'Tenaya Creek Hop Ride IPA']
}, {
    "Brewery": 'Arbor Brewing Company',
    "Beers": ['Arbor Brewing Sodibo Barrel Aged Blond Ale (Sour Series)', 'Arbor Brewing Demetrius', 'Arbor Brewing Michael Faricy\'s Stout', 'Arbor Brewing Velvet Hammer', 'Arbor Brasserie Blonde Belgian', 'Arbor Brewing Buzzsaw Ale', 'Arbor Brewing Flamboyant Wild Red Ale', 'Arbor Brewing Milestone Porter', 'Arbor Brewing Brasserie Blonde Sparkling Ale', 'Dark Corner (Red Cap)', 'Arbor Brewing Faricy Fest Irish Stout', 'Arbor Brewing Bavarian Bliss', 'Arbor Brewing Red Snapper Special Bitter', 'Arbor Brewing Olde Number 22 Alt Bier', 'Arbor Brewing Tree Fort Beer', 'Arbor Brewing Sacred Cow IPA', 'Arbor Brewing Jackhammer Old Ale', 'Arbor Brewing Phat Abbot Belgian Triple', 'Arbor Brewing Phat Abbot Belgian Dubbel']
}, {
    "Brewery": 'Lancaster Brewing Company',
    "Beers": ['Baltic Porter', 'Litening Lager', 'Lancastrator Doppelbock', 'Celtic Rose', 'Boss Hog', 'Double Chocolate Milk Stout', 'Shoo-Fly Porter', 'Gold Star Pilsner', 'Rumspringa Golden Bock', 'Hop Hog India Pale Ale', 'Winter Warmer', 'Lancaster K�_lsch']
}, {
    "Brewery": 'Heater Allen Brewing',
    "Beers": ['Mediator', 'IsarWeizen', 'Schwarz', 'Coastal Common']
}, {
    "Brewery": 'Parallel 49 Brewing Company',
    "Beers": ['Hoparazzi', 'Salty Scot', 'Gypsy Tears Ruby Ale']
}, {
    "Brewery": 'Double Mountain "Brewery" &amp; Taproom',
    "Beers": ['Killer Green Wet Hopped DIPA', 'Devil\'s Kriek', 'India Red Ale (I.R.A.)', 'The Vaporizer', 'Hop Lava IPA']
}, {
    "Brewery": 'Boom Island Brewing Company',
    "Beers": ['Hoodoo', 'Brimstone', 'Thoprock']
}, {
    "Brewery": 'Revolution Brewing Company',
    "Beers": ['3rd Year Beer', 'Bean Gene', 'TV Party', 'Red Scare', 'Institutionalized', 'Repo Man', 'Mad Cow', 'Fistmas', 'Oktoberfest Revolution', 'Workingman', 'Bottom Up', 'Cross Of Gold', 'Iron Fist', 'Coup D\'Etat', 'Rise', 'Very Mad Cow', 'Double Fist', 'A Little Crazy', 'Straight Jacket (Barrel-Aged Institutionalized)', 'Eugene', 'Anti-Hero']
}, {
    "Brewery": 'Bourbon Barrel Aged',
    "Beers": ['Night Rider', 'Nickel Brook Cuv��e (2012)', 'O.E.', 'Suitable For Cave Aging', 'Existent', 'John Barleycorn', 'Darkness', 'Allagash Black', 'Old Guardian Barley Wine Style Ale', 'Big Sound Scotch Ale', 'Bolita Brown', 'Imperial Stout Trooper', 'Dark Apparition', 'Imperial Russian Stout', 'Santa\'s Little Helper', 'Framinghammer Baltic Porter']
}, {
    "Brewery": 'Fish Brewing Company / Fishbowl Brewpub',
    "Beers": ['Hodgson\'s Double India Pale Ale', 'Leavenworth Blind Pig Dunkelweizen', 'Mud Shark Porter', 'Leavenworth Eightmile Alt', 'Leavenworth Whistling Pig Wheat Ale', 'Fish Tale Organic Blonde Ale', 'Leavenworth Boulder Bend Dunkelweizen', 'Starfish Imperial Red Ale', 'Fish Tale Amber Ale', 'Fish Tale Detonator Doppelbock Lager', 'Old Woody', 'Fish Tale Winterfish', 'Fish Tale India Pale Ale', 'Fish Tale Monkfish Belgian-Style Triple', 'Swordfish', 'Fish Tale Leviathan Barleywine', 'Fish Tale Wild Salmon Pale Ale', 'Fish Tale Poseidon\'s Imperial Stout', '10 Squared Fish Tale Ale']
}, {
    "Brewery": 'Tractor Brewing Co.',
    "Beers": ['Sod Buster']
}, {
    "Brewery": 'Golden Valley "Brewery" and Pub',
    "Beers": ['Red Thistle Ale', 'Dundee Porter', 'Chehalem Mountain IPA', 'Tannen Bomb']
}, {
    "Brewery": 'Evil Genius Beer Company',
    "Beers": ['Trick Or Treat', 'Evil Eye PA']
}, {
    "Brewery": 'Big City Brewing CO LTD',
    "Beers": ['Lion Heart Stout', 'Jamaica Stout']
}, {
    "Brewery": '3 Ravens Brewing',
    "Beers": ['3 Ravens Bronze', '3 Ravens Black']
}, {
    "Brewery": 'Microbrouwerij Achilles',
    "Beers": ['Serafijn Donker', 'Serafijn Celtic Angel', 'Serafijn Christmas Angel']
}, {
    "Brewery": 'Those Guys &amp; TG Enterprises, Inc.',
    "Beers": ['One Of Those Guys Beer']
}, {
    "Brewery": 'Grey Sail Brewing of Rhode Island',
    "Beers": ['Leaning Chimney Porter', 'Flagship Ale', 'Flying Jenny Extra Pale Ale']
}, {
    "Brewery": 'The Tin Whistle Brewing Company',
    "Beers": ['Peach Cream Ale', 'Killer Bee Dark Honey Ale', 'Black Widow', 'Chocolate Cherry Porter']
}, {
    "Brewery": 'Rock Bottom Restaurant &amp; "Brewery"',
    "Beers": ['Milk Chocolate Stout', 'Bighorn Nut Brown Ale', 'Falcon Pale Ale', 'Bourbon Barrel Aged Imperial Stout', 'Naughty Scot', 'Molly\'s Titanic Brown Ale', 'Lumpy Dog Light Lager', 'Brown Bear Brown Ale', 'Sub Zero IPA', 'Munich Gold', 'Double Barrel IPA', 'Itasca Extra Pale Ale', 'Rocktoberfest', 'Improper Hopper', 'Fire Chief Ale', 'American Dream Ale', 'IPA', 'Prussia\'s Pride IPA', 'Hop Bomb']
}, {
    "Brewery": 'Port City Brewing',
    "Beers": ['Tartan Ale', 'Optimal Wit', 'Tidings', 'Monumental IPA', 'Essential Pale Ale']
}, {
    "Brewery": 'Mahrs-Br�_u',
    "Beers": ['Mastodon', 'Mahr\'s Leicht', 'Der Weisse Bock', 'Mahr\'s Weisse', 'Mahr\'s Bock-Bier', 'Mahr\'s Christmas Bock', 'Mahr\'s Saphir Weiss', 'Mahr\'s Ungespundet-hefetr�_b', 'Jubelfestbier', 'Mahr\'s Hell', 'Mahr\'s Pilsner']
}, {
    "Brewery": 'Terminal Brewhouse',
    "Beers": ['Magnum P.A.']
}, {
    "Brewery": 'Bitter Root Brewing',
    "Beers": ['Single Hop APA (Amarillo)', 'Sawtooth Ale', 'India Pale Ale']
}, {
    "Brewery": 'Triumph Brewing Company',
    "Beers": ['Bengal Gold India Pale Ale', 'Coffee &amp; Cream Stout']
}, {
    "Brewery": 'Stoudts Brewing Co.',
    "Beers": ['Imperial Schwarzbier', 'Amber 25', 'Brotherly Suds (BS2)', 'Stoudt\'s Winter Ale (2010-2011)', 'Stoudt\'s Fest', 'Stoudts Heifer-in-Wheat', 'Stoudt\'s Triple (Belgian Abbey-Style Ale)', 'Stoudt\'s Gold Lager', 'Stoudt\'s Abbey Double Ale', 'Stoudt\'s Blonde Double MaiBock', 'Stoudt\'s Scarlet Lady ESB', 'Stoudt\'s Double IPA (India Pale Ale)', 'Stoudts American Pale Ale', 'Stoudt\'s Fat Dog (Imperial Oatmeal Stout)', 'Revel Red', '1860 IPA', 'Stoudts Pils', 'Old Abominable', 'Oktober Fest', 'Smooth Hoperator', 'Stoudt\'s Barrel Aged Old Abominable', 'Karnival Kolsch']
}, {
    "Brewery": 'Blackstone Restaurant &amp; "Brewery"',
    "Beers": ['Adam Bomb IPA', 'St. Charles Porter', 'American Pale Ale', 'Chaser Pale']
}, {
    "Brewery": 'Elk Creek Cafe &amp; Aleworks',
    "Beers": ['Great Blue Heron Pale Ale', 'Double Rainbow IPA']
}, {
    "Brewery": 'McKenzie Brew House',
    "Beers": ['La Soeur Mechant', 'Grisette Brux', 'Abbey 8', 'Saison Vautour (Draft)', 'Irma Extra', 'Saison Vautour Du Bois', 'Saison Vautour']
}, {
    "Brewery": 'Backlash Beer Company',
    "Beers": ['Convergence', 'Groundswell', 'Declaration']
}, {
    "Brewery": 'Harviestoun "Brewery" Ltd.',
    "Beers": ['Wild Hop IPA', 'Ola Dubh Special Reserve 18', 'Ola Dubh Special Reserve 40', 'Old Engine Oil', 'Ola Dubh Special Reserve 16', 'Ola Dubh Special Reserve 12', 'Mr Sno\'balls', 'Bitter &amp; Twisted', 'Ola Dubh Special Reserve 30', 'Old Engine Oil Engineer\'s Reserve Blackest Ale', 'Schiehallion']
}, {
    "Brewery": 'Golden City "Brewery"',
    "Beers": ['Stand Up Double IPA', 'Clear Creek Gold Pale Ale', 'Evolution IPA', 'Centurion Barleywine Ale']
}, {
    "Brewery": 'Lawson\'s Finest Liquids',
    "Beers": ['Liquid Sunshine Ale', 'Papelblonde Ale', 'Weiss-K', 'Hunger Mountain 40th Anniversary Ale', 'Sugarhouse IPA', 'Seared Palate', 'Paradise Pale Ale', 'Gonzie', 'Red Spruce Bitter', 'Toast', 'Session In The Rye', 'Jade IPA', 'Oak-Aged Fayston Maple Imperial Stout', 'Double Sunshine IPA', 'Maple Tripple Ale', 'Maple Nipple Ale', 'Fayston Maple Imperial Stout', 'BIG HAPI India Black Ale', 'Chinooker\'d IPA', 'Triple Play IPA', 'Maple Barrel Aged Fayston Maple Imperial Stout', 'Bourbon Barrel Aged Fayston Maple Imperial Stout', 'Permagrin Rye Pale Ale', 'Kiwi', 'Hopzilla', 'Knockout Blonde']
}, {
    "Brewery": 'Jackie O\'s Pub &amp; "Brewery"',
    "Beers": ['Bourbon Barrel-Aged �_ Shark-Alligator �_ Man', 'Cherry Wood Ya Honey', 'Rum Barrel Dark Apparition', 'Ice Apparition', 'Evelyn', 'Bolero Brown', 'Black Betty', 'Cellar Cuvee 6', 'Drawn And Portered', 'Bourbon Barrel Middle Of Nowhere', 'Java The Stout', 'Thorogood', 'Bourbon Barrel-Aged Black Betty', 'Berliner Weiss', 'Brandy Barrel Superfly', 'Cellar Cuvee 5', 'Baklava Braggot', 'Dynamo Hum', 'Mystic Mama', 'The Grand Wazoo', 'Brown Recluse', 'Dark Apparition Brandy Barrel', 'Kentucky Monk', 'Chunga\'s Old Bruin', 'Funky South Paw', 'Cab Cherry Man', 'Hocking Triple', 'Matriarch']
}, {
    "Brewery": 'Crooked Stave Artisan Beer Project',
    "Beers": ['Crooked Stave Bourbon Barrel Aged Sentience', 'Oculus', 'Batch #1', 'Crooked Stave Wild Wild Brett "Indigo"', 'Surette Provision Saison', 'L\'Brett D\'Or', 'Crooked Stave Surette', 'Crooked Stave Wild Wild Brett "Rouge"', 'Crooked Stave Wild Wild Brett "Blue"', 'Saison Vieille Artisanal', 'Crooked Stave Pure Guava Petite Sour', 'Crooked Stave Fertile Soil', 'Crooked Stave Surette Reserva', 'Crooked Stave Wild Wild Brett "Yellow"', 'Crooked Stave Petite Sour', 'Crooked Stave Wild Wild Brett "Green"']
}, {
    "Brewery": 'Pivovar Velk�� Popovice a.s.',
    "Beers": ['Kozel Sv��tl�_', 'Kozel', 'Kozel Premium', 'Kozel Cerny (Kozel Dark) Velckopopovicky']
}, {
    "Brewery": 'Adnams plc, Sole Bay "Brewery"',
    "Beers": ['Adnams Spindrift', 'Adnams Gunhill', 'Adnams Bitter', 'Adnams Tally-Ho', 'Adnams Explorer', 'Adnams Broadside', 'Adnams Southwold Bitter', 'Adnams SSB (Suffolk Special Bitter)', 'Adnams Broadside Strong Original']
}, {
    "Brewery": 'Cool Beer Brewing Co.',
    "Beers": ['Duggan\'s #5 Sorachi Lager']
}, {
    "Brewery": 'BridgePort Brewing Co. / Brewpub',
    "Beers": ['Smooth Ryed', 'Witch Hunt Spiced Harvest Ale', 'Stumptown Tart (2011)', 'Bridgeport Porter', 'Hop Harvest Ale (2011)', 'Caf�� Negro Coffee Infused Porter', 'Raven Mad Imperial Porter', 'Ebenezer Ale', 'Dark Rain Black Pale Ale', 'Summer Squeeze', 'Kingpin Double Red Ale', 'Old Knucklehead Barleywine', 'Blue Heron Ale', 'Bridgeport IPA', 'Hop Czar']
}, {
    "Brewery": 'Boxcar Brewing Co.',
    "Beers": ['Brown Ale', 'Original Ale']
}, {
    "Brewery": 'Ferme Brasserie Schoune',
    "Beers": ['Blanche De Quebec']
}, {
    "Brewery": 'Roanoke Railhouse "Brewery"',
    "Beers": ['Loose Caboose', 'Railhouse IPA', 'Track1']
}, {
    "Brewery": 'De Hoevebrouwers',
    "Beers": ['Toria Tripel']
}, {
    "Brewery": 'SanTan Brewing Co.',
    "Beers": ['Sex Panther', 'Count Hopula', 'Epicenter Amber', 'Devil\'s Ale', 'HopShock IPA']
}, {
    "Brewery": 'Southern Oregon Brewing Company',
    "Beers": ['Black Heart Imperial Stout', 'Old Humbug', 'Na Zdrav�_', 'Nice Rack IPA', 'Woodshed Red', 'Pin-up Porter']
}, {
    "Brewery": 'Birrificio Barley',
    "Beers": ['Sella Del Diavolo', 'BB10']
}, {
    "Brewery": 'Fernie Brewing Co.',
    "Beers": ['Ol\' Willy Wit', 'What The Huck', 'Sap Sucker', 'The Griz Pale Ale']
}, {
    "Brewery": 'New Belgium Brewing',
    "Beers": ['The Trip XIV (Fresh Hop Imperial IPA)', 'Rolle Bolle', 'Love (Foeder #3)', 'Sunshine Wheat Beer', 'Frambozen Raspberry Brown Ale', 'Fat Tire Amber Ale', 'Blue Paddle Pilsner', 'Abbey Belgian Style Ale', 'Springboard', '1554 Enlightened Black Ale', '2�� Below Winter Ale', 'Ranger', 'Belgo Belgian India Pale Ale', 'Shift Pale Lager', 'Trippel Belgian Style Ale', 'Dig', 'Red Hoptober', 'Somersault', 'Snow Day Winter Ale', 'Rampant Imperial IPA', 'Hoptober Golden Ale']
}, {
    "Brewery": 'Brouwerij De Dochter van de Korenaar',
    "Beers": ['Noblesse Extra Ordinaire', 'Belle-Fleur', 'Courage', 'L\'enfant Terrible', 'Bravoure', 'Embrasse Peated Oak Aged', 'Finesse', 'Noblesse', 'Embrasse']
}, {
    "Brewery": 'Swans Brewpub / Buckerfield "Brewery"',
    "Beers": ['Legacy Ale', 'Extra I.P.A.']
}, {
    "Brewery": 'Lion "Brewery", Inc.',
    "Beers": ['Stegmaier Summer Stock Lager', 'Stegmaier Pumpkin Ale', 'Stegmaier White Ale', 'Pocono Caramel Porter', 'Pocono Lager', 'Stegmaier Winter Warmer', 'Stegmaier Brewhouse Bock', 'Stegmaier Amber Lager', 'Stegmaier Porter', 'Stegmaier Oktoberfest', 'Stegmaier Pale Ale', 'Stegmaier Holiday Warmer', 'Stegmaier IPA', 'Pocono Pale Ale', 'Stegmaier Gold']
}, {
    "Brewery": 'Kiuchi "Brewery"',
    "Beers": ['Hitachino Nest Amber Ale', 'Hitachino Nest Pale Ale', 'Hitachino Nest 3 Days', 'Hitachino Nest Japanese Classic Ale', 'Hitachino Nest Weizen', 'Hitachino Nest Red Rice Ale', 'Hitachino Nest White Ale', 'Hitachino Nest Extra High (XH)', 'Hitachino Nest Real Ginger Brew', 'Hitachino Nest Commemorative Ale', 'Hitachino Nest Celebration Ale', 'Hitachino Nest Espresso Stout', 'Hitachino Nipponia']
}, {
    "Brewery": 'Innis &amp; Gunn',
    "Beers": ['Innis &amp; Gunn Canada Day 2012 Scottish Oak', 'Innis &amp; Gunn Spiced Rum Finish', 'Innis &amp; Gunn Independence Day 2012', 'Innis &amp; Gunn Winter Beer 2012', 'Innis &amp; Gunn Rum Cask Oak Aged Beer', 'Innis &amp; Gunn Irish Whiskey Cask', 'Innis And Gunn Oak Aged Beer', 'Innis And Gunn Original', 'Innis &amp; Gunn India Pale Ale']
}, {
    "Brewery": 'Weissbierbrauerei Hopf',
    "Beers": ['Hopf Spezial Weisse', 'Hopf Helle Weisse', 'Hopf Weisser Bock', 'Hopf Dunkle Weisse']
}, {
    "Brewery": 'Tuatara Brewing Co.',
    "Beers": ['Tuatara APA', 'Tuatara Helles', 'Tuatara Ardenne', 'Tuatara India Pale Ale', 'Tuatara Pilsener']
}, {
    "Brewery": 'Horseheads Brewing Inc.',
    "Beers": ['Maple Amber Ale', 'Christmas Ale', 'Black Horse Ale', 'Chocolate Porter', 'Hot-Jala-Heim', 'Rye PA', 'Sullivan\'s Stout', 'Horseheads IPA']
}, {
    "Brewery": 'Hofbrauhaus Freising',
    "Beers": ['Huber Weisses Original']
}, {
    "Brewery": 'Brasserie Trois Dames',
    "Beers": ['L\'Amoureuse No. 2', 'Bise Noire', 'La Pasionaria', 'La Semeuse Espresso Stout', 'Grande Dame Oud Bruin']
}, {
    "Brewery": 'Intuition Ale Works',
    "Beers": ['King Street Stout', 'Peoples Pale Ale', 'I-10 IPA']
}, {
    "Brewery": 'Broad Ripple Brew Pub',
    "Beers": ['E.S.B.']
}, {
    "Brewery": 'Great Lakes Brewing Company',
    "Beers": ['Great Lakes York Street Bitter', 'Great Lakes Barrel Select Pils', 'Great Lakes Engine 20 Smoked Pale Ale', 'Great Lakes Hop Madness ("Quitness")', 'Great Lakes Cellar Dweller', 'Great Lakes Rockefeller Bock', 'Great Lakes Big Black Smoke', 'Great Lakes Alberta Clipper', 'Great Lakes Pumpkin Ale', 'Great Lakes Ohio City Oatmeal Stout', 'Great Lakes Grand Cru', 'Great Lakes Grassroots Ale', 'Great Lakes Holy Moses', 'Great Lakes Glockenspiel Weizenbock', 'Great Lakes Eliot Ness', 'Great Lakes Wolfhound Stout', 'Great Lakes Prohibition Pils', 'Great Lakes Christmas Ale', 'Great Lakes Blackout Stout', 'Great Lakes Anniversary Ale', 'Great Lakes Edmund Fitzgerald Porter', 'Great Lakes Dortmunder Gold', 'Great Lakes Independence Ale', 'Great Lakes Oktoberfest', 'Great Lakes Conway\'s Irish Ale', 'Great Lakes Burning River Pale Ale', 'Great Lakes Moondog ESB', 'Rye Of The Tiger', 'Great Lakes The Wright Pils', 'Great Lakes Commodore Perry IPA', 'Rackhouse Ale', 'Great Lakes The Doppelrock', 'Great Lakes Imperial Dortmunder', 'Great Lakes Lake Erie Monster', 'Great Lakes Barrel-Aged Blackout Stout', 'Great Lakes Nosferatu', 'Great Lakes Cleveland Brown Ale', 'Alchemy Hour Double IPA']
}, {
    "Brewery": 'Skyscraper Brewing Company',
    "Beers": ['Lug Nut Lager', 'Bulldozer Honeyweizen']
}, {
    "Brewery": 'Pug Ryan\'s "Brewery"',
    "Beers": ['Morning Wood Wheat']
}, {
    "Brewery": 'Gritty McDuff\'s Brewing Company',
    "Beers": ['Gritty McDuff\'s Red Claws Ale', 'Gritty McDuff\'s Best Brown Ale', 'Gritty McDuff\'s Original Pub Style', 'Gritty McDuff\'s Best Bitter', 'Gritty McDuff\'s Christmas Ale', 'Gritty McDuff\'s Scottish Ale', 'Gritty McDuff\'s Vacationland Summer Ale', 'Gritty McDuff\'s Black Fly Stout', 'Gritty McDuff\'s Halloween Ale']
}, {
    "Brewery": 'Jennings Brothers PLC',
    "Beers": ['Cocker Hoop', 'Jennings Cumberland Ale', 'Jennings Sneck Lifter']
}, {
    "Brewery": 'Mountain Goat Beer Pty Ltd',
    "Beers": ['Mountain Goat Surefoot Stout', 'Mountain Goat Rye IPA', 'Mountain Goat Pale Ale', 'Mountain Goat Cross Breed Gypsy And The Goat Black Pepperberry IPA', 'Mountain Goat India Pale Ale', 'Mountain Goat Cross Breed Seedy Goat Coffee IPA', 'Mountain Goat Steam Ale', 'Mountain Goat Hightail Ale']
}, {
    "Brewery": 'Lakefront "Brewery", Inc.',
    "Beers": ['My Turn Series: Brad', 'Wisconsinite Summer Weiss Beer', 'My Turn Series: Dan', 'My Turn Series: Luther', '25th Anniversary Imperial Stout', 'Local Acre Lager', 'Cherry Lager', 'Snake Chaser', 'Local Acre Lager Wisconsin Wet Hop', 'Holiday Spice Lager Beer', 'Organic ESB', 'Bock Beer', 'Oktoberfest Lager Beer', 'Rendezvous', 'IBA', 'Riverwest Stein Beer', 'Big Easy Imperial Maibock', 'Eastside Dark', 'Bridge Burner Special Reserve Ale', 'White Beer', 'Pumpkin Lager Beer', 'Fuel Cafe (Coffee Flavored Stout)', 'Klisch Pilsner Beer', 'Cream City Pale Ale', 'IPA', 'Fixed Gear']
}, {
    "Brewery": 'Temple Brewing Company',
    "Beers": ['Temple Saison']
}, {
    "Brewery": 'Cervejaria Sudbrack Ltda',
    "Beers": ['Eisenbahn Pilsen', 'Eisenbahn Vigorosa (Weizenbock)', 'Eisenbahn Pale Ale', 'Eisenbahn Rauchbier', 'Eisenbahn Escura (Dunkel)', 'Eisenbahn S.A.P.A. (South American Pale Ale)', 'Eisenbahn Lust', 'Eisenbahn Dourada (K�_lsch)']
}, {
    "Brewery": 'Beer Works',
    "Beers": ['Bay State ESB', 'Mad Hops', 'Victory Red', 'Haymarket Hefe-Weizen', 'Custom\'s House IPA', 'Imperial Stout', 'Beantown Nut Brown Ale', 'Curley\'s Irish Stout', 'Pumpkinhead Ale', 'Bunker Hill Blueberry Ale', 'Buck Eye Oatmeal Stout', 'Boston Red', 'Watermelon Ale', 'Back Bay IPA', 'Fenway Pale Ale']
}, {
    "Brewery": 'Brasserie Fant��me',
    "Beers": ['Fant��me La Pi��train Blonde', 'Fant��me Chocolat', 'Fant��me Magic Ghost', 'Fant��me Black Ghost', 'Fant��me Pissenlit', 'Fant��me Saint-Roch', 'Fant��me Strange Ghost', 'Fant��me Boo!', 'Fant��me Extra Sour Special Original Creation', 'Fant��me De Noel', 'Fant��me Brise-BonBons', 'Fant��me BBB Dark White', 'Fant��me Saison', 'Fant��me Blanche', 'Fant��me La Dalmatienne (Dark)', 'Fant��me La Dalmatienne (Light)']
}, {
    "Brewery": 'N��gne ��',
    "Beers": ['Bitter', 'Holy Smoke', 'Wit', 'Havre Stout', 'Imperial DunkelWit', 'God Jul', 'Sunturnbrew', 'Tiger Tripel', 'Saison', 'Brown Ale', 'Imperial Rye Porter (N��gne �� / Terrapin Collaboration)', 'Imperial Stout', 'Bridge Road / N��gne �� India-Style Saison', 'Underlig Jul', 'Imperial Brown Ale', 'India Pale Ale', 'Two Captains', '# 100']
}, {
    "Brewery": 'Phillips Brewing Company',
    "Beers": ['Instigator', 'Slipstream Cream Ale', 'Crooked Tooth Pumpkin Ale', 'Double Dragon Imperial Red Ale', 'Phillips / GLB Puzzler Belgian Black IPA', 'Green Reaper  Fresh Hop IPA', 'Trainwreck Barley Wine', 'Longboat Chocolate Porter', 'Blue Buck', 'Double Barrel Scotch Ale', 'Hoperation Tripel Cross Belgian IPA', 'Krypton Rye PA', 'Hop Circle IPA', 'Skookum Cascadian Brown Ale', 'Amnesiac Double IPA']
}, {
    "Brewery": 'Staatliches Hofbr�_uhaus (Hofbr�_u M�_nchen)',
    "Beers": ['Hofbr�_u M�_nchen Hefe Weizen', 'Hofbr�_u M�_nchner Sommer Naturtr�_b', 'Hofbr�_u Schwarze Weisse', 'Hofbr�_u M�_nchner Weisse', 'Hofbr�_u Maibock (Urbock)', 'Hofbr�_u Dunkel', 'Hofbr�_u Oktoberfestbier', 'Hofbr�_u Original']
}, {
    "Brewery": 'Throwback "Brewery"',
    "Beers": ['Throwback Dippity Do American Brown', 'Throwback Hog Happy Hefeweizen', 'Throwback Fat Alberta Imperial Stout', 'Throwback Maple-Kissed Wheat Porter', 'Throwback Campfire Smoked Porter']
}, {
    "Brewery": 'Granville Island "Brewery"',
    "Beers": ['GIBitter', 'Ginger Beer', 'Gastown Amber Ale', 'Imperial Chocolate Stout', 'Imperial IPA', 'Cypress Honey Lager', 'Robson Street Hefeweizen', 'Island Lager', 'Lions Winter Ale', 'Brockton IPA', 'Kitsilano Maple Cream Ale']
}, {
    "Brewery": 'Hollister Brewing Co.',
    "Beers": ['Hip Hop']
}, {
    "Brewery": 'Founders Brewing Company',
    "Beers": ['Founders 10K IPA', 'Founders Wheatwine', 'Founders Session Noir', 'Founders Empire Strikes Bitter', 'Founders Frangelic Stout', 'Founders Furniture City Stock Ale', 'Founders Blushing Monk', 'Founders Curmudgeon (Old Ale)', 'Founders Bad Habit Belgian Quad', 'Founders Looking Glass', 'Founders Oatmeal Stout', 'Founders Red\'s Rye PA', 'Founders Devil Dancer', 'Founders Breakfast Stout', 'Founders Centennial IPA', 'Founders Harvest Ale', 'Founders Dirty Bastard', 'Founders Backwoods Bastard', 'Founders Porter', 'Founders Imperial Stout', 'Founders KBS (Kentucky Breakfast Stout)', 'Founders Pale Ale', 'Founders Doom', 'Founders Bolt Cutter', 'Founders Double Trouble', 'Founders All Day IPA', 'Founders CBS Imperial Stout']
}, {
    "Brewery": 'Bomb Beer Company',
    "Beers": ['Bomb Lager']
}, {
    "Brewery": 'Coddington Brewing Co.',
    "Beers": ['India Pale Ale']
}, {
    "Brewery": 'Hermitage Brewing',
    "Beers": ['Maltopia Double Scotch Ale', 'Citra Hops (Single Hop Series)']
}, {
    "Brewery": 'Estes Park "Brewery"',
    "Beers": ['Longs Peak Raspberry Wheat', 'Estes Park Barley Wine', 'Estes Park Porter', 'Estes Park Renegade', 'Samson Stout']
}, {
    "Brewery": 'Les Brasseurs de Gayant',
    "Beers": ['Saint Landelin Mythique', 'Saint Landelin Sp��ciale No��l', 'Saint Landelin La Divine', 'Goudale', 'Amadeus Biere Blanche']
}, {
    "Brewery": 'Fauerbach Brewing Company',
    "Beers": ['Fauerbach Amber Lager']
}, {
    "Brewery": 'De Proefbrouwerij (bvba Andelot)',
    "Beers": ['Bloemenbier', 'Reinaert Grand Cru', 'Iki Beer', 'IJsbok (for SNAB)', 'Witte Noire', 'Boerinneken', 'Bottleworks Van Den Vern Grand Cru', 'Zoetzuur Flemish Ale', 'Bottleworks Tripel Krullekop', 'Reinaert Flemish Amber Ale', 'De Proef Flemish Primitive Wild Ale (Demon Fish)', 'Andelot Cuvee Lunatique', 'L\'Ange Tomb��', 'Andelot Cuvee Angelique', 'Draeckenier', 'Andelot Cuvee Euphorique', 'La Grande Blanche', 'De Proef Flemish Primitive Wild Ale (Rat Rider)', 'Reinaert Flemish Wild Ale', 'K-O Blond Beer', 'De Proef Signature Les Deux Brasseurs Ale (w/Jason Perkins)', 'Lozen Boer', 'De Proef Flemish Primitive Wild Ale (Spoon Whacker)', 'Andelot Cuvee Diabolique', 'Bottleworks Bangelijk Blonde', 'Broederlijke Liefde (w/ Brian O\'Reilly)', 'De Proef Flemish Primitive Wild Ale (Pinhead)', 'Andelot Cuvee Mystique', 'De Proef Flemish Primitive Wild Ale (Surly Bird)', 'Flanders Fred (w/ Alan Sprints)', 'De Proef Reserve Signature Ale (w/ Tomme Arthur)']
}, {
    "Brewery": 'Roy Pitz Brewing Company',
    "Beers": ['Best Blonde Ale', 'Old Jail Ale', 'Lovitz Lager', 'Ludwig\'s Revenge', 'Daddy Fat Sacks IPA']
}, {
    "Brewery": 'Kulmbacher Brauerei AG',
    "Beers": ['M�_nchshof Weihnachts Bier', 'Kulmbacher Export', 'M�_nchshof Original', 'Kapuziner Schwarz-Weizen', 'EKU 28', 'Kapuziner Weissbier', 'M�_nchshof Bockbier', 'Kulmbacher Reichelbrau Eisbock', 'M�_nchshof Schwarzbier', 'M�_nchshof Kellerbier (Kellerbr�_u)', 'EKU Pils', 'Kulmbacher Edelherb Premium Pils']
}, {
    "Brewery": 'Birrificio Del Ducato',
    "Beers": ['Krampus', 'My Blueberry Nightmare', 'Sally Brown', '"Beers"el Mattina', 'Bia IPA', 'Chimera', 'Verdi Imperial Stout', 'Nuova Mattina', 'ViaEmilia']
}, {
    "Brewery": 'CB\'s Brewing Company',
    "Beers": ['CB\'s St. Patricks Ale', 'CB\'s Mabel Imperial Breakfast Beer (Signature Series)', 'CB\'s Spring Fever', 'CB\'s Christmas Ale', 'CB\'s English Pale Ale', 'CB\'s Canandaigua Lake Ale', 'CB\'s Double Dark Cream Porter', 'CB\'s Caged Alpha Monkey IPA']
}, {
    "Brewery": 'Selin\'s Grove Brewing Company',
    "Beers": ['River Rat Triple (previously River Piraat)', 'Winter Solstice Dubbel', 'Saint Fillian\'s Wee Heavy', 'Amazing Wit', 'Priestley Pale Ale', 'Pilsner', 'St. Fillin\'s', 'Market Street Fest', 'Organic Pilsner', 'Wilder\'s Weizenbier', 'Goldings Special Bitter', 'Snake Drive Stout', 'Framboise', 'SNAFU IPA', 'Olde Frosty IPA', 'Scottish Style Ale', 'American Pale Ale', 'Hop Nouveau', 'Phoenix Kriek', 'Stealth Tripel', 'Saison De Peche', 'Organic Baltic Porter', 'Captain Selin\'s Cream Ale', 'Shade Mountain Oatmeal Stout', 'White Horse Porter', 'India Pale Ale']
}, {
    "Brewery": '4 Hands Brewing Co.',
    "Beers": ['Prussia Berliner Style Weiss', 'War Hammer Imperial IPA', 'Pyrus Saison', 'Reprise Centennial Red', 'Divided Sky Rye IPA']
}, {
    "Brewery": 'Tree Brewing',
    "Beers": ['Spiced Reserve Ale', 'Vertical Winter Ale', 'Jumpin Jack Pumpkin Ale', 'Captivator Doppelbock', 'Hefeweizen', 'Spy Porter', 'Raspberry Porter', 'Thirsty Beaver Amber Ale', 'Hop Head India Pale Ale', 'Kelowna Pilsner', 'Cutthroat Pale Ale', 'Hop Head Double India Pale Ale', 'Hop Head Black India Pale Ale']
}, {
    "Brewery": 'P�_ffgen Oberg�_rige Hausbrauerei',
    "Beers": ['K�_lsch']
}, {
    "Brewery": 'Short\'s Brewing Company',
    "Beers": ['Short\'s Bourbon Huma', 'Bloody Beer', 'Short\'s Key Lime Pie', 'Short\'s Rye Not?', 'Black Licorice Lager', 'Aww Jeah', 'Short\'s S\'more Stout', 'Short\'s The Magician', 'Short\'s Bourbon Barrel Aged Wizard', 'Short\'s PB &amp; J', 'Cornholio', 'Imperial Spruce India Pilsner', 'Short\'s Uber Goober Oatmeal Stout', 'Short\'s The Soft Parade', 'Short\'s Black Cherry Porter', 'Anniversary Ale', 'Short\'s Publican Porter (Imperial London Porter)', 'Goodnight Bodacious', 'Beach Wheat', 'Captain Fantasy', 'Short\'s Controversi-ALE', 'Short\'s Hopstache', 'Short\'s Smoked Apple Ale', 'Short\'s Nicie Spicie', 'Short\'s Pontius Road Pilsner', 'Short\'s Raisin Apollo', 'Short\'s The Good Samaritan', 'Short\'s Autumn Ale', 'Short\'s The Woodmaster', 'Rich\'s Rye', 'Peaches &amp; Cr��me', 'Short\'s Chocolate Wheat', 'Kolsch 45', 'Short\'s The Golden Rule', 'Short\'s Sustenance Black Bier', 'Ginger In The Rye (Rye Munich Weizen)', 'Short\'s Uncle Steve\'s Irish Stout', 'Short\'s Noble Chaos Oktoberfest', 'Short\'s Pandemonium Pale Ale', 'Short\'s The Wizard', 'Short\'s Bellaire Brown Ale', 'Short\'s Kind Ale', 'Prolonged Enjoyment', 'Short\'s Mystery Stout', 'Short\'s The Curl', 'Short\'s Huma-Lupa-Licious IPA', 'Short\'s Cup A Joe Coffee Creme Stout', 'Ale La Reverend', 'Bludgeon Yer Eye PA', 'The Liberator', 'Aorta Ale (Double Red Ale)', 'Good Humans']
}, {
    "Brewery": 'Alpine Beer Company',
    "Beers": ['19/10 O\'Brien\'s Anniversary IPA', 'Good', 'Briscoe', 'WHAle (Wet Hopped Ale)', 'Token', 'Willy Vanilly', 'Red Card', 'New Millenium', 'Chez Monieux', 'Bourbon Barrel-Aged Odin\'s Raven', 'Willy Wheat Ale', 'Gouden Vallei', 'Keene Idea', 'Mandarin Nectar', 'O\'Brien\'s IPA', 'McIlhenney\'s Irish Red', 'Bad Boy', 'Captain Stout', 'Great', 'Alpine Ale', 'Tuatara', 'Pure Hoppiness', 'Exponential Hoppiness', 'Hoppy Birthday', 'Duet IPA', 'Nelson']
}, {
    "Brewery": 'Browar Van Pur S.A. (Brau Union Polska)',
    "Beers": ['Karpackie Premium']
}, {
    "Brewery": 'Atwater Block "Brewery"',
    "Beers": ['Atwater D Light', 'Atwater Pale Ale', 'Uber Ursa Pils', 'Michigan Lager', 'Atwater Bourbon Barrel Aged Shaman\'s Porter', 'Atwater Double Down Imperial Amber Ale', 'Atwater Dunkel', 'Atwater Shaman\'s Porter', 'Atwater Conniption Fit Double IPA', 'Teufel Bock', 'Atwater Voodoovator', 'Atwater Maibock', 'Atwater Bloktoberfest', 'Atwater Pilsner', 'Atwater Vanilla Java Porter', 'Atwater VJ Black', 'Decadent Dark Chocolate Ale']
}, {
    "Brewery": 'Brouwerij van Hoegaarden',
    "Beers": ['Julius', 'Hoegaarden Speciale', 'Hoegaarden Grand Cru', 'Hoegaarden Original White Ale', 'Verboden Vrucht  / Fruit Defendu (Forbidden Fruit)']
}, {
    "Brewery": 'Hacker-Pschorr Br�_u GmbH',
    "Beers": ['Hacker-Pschorr Munich Gold', 'Hacker-Pschorr Dunkle Weisse', 'Hacker-Pschorr Hefe Weisse Nat�_rtrub', 'Hacker-Pschorr Sternweisse', 'Hacker-Pschorr M�_nchner Hell', 'Hacker-Pschorr M�_nchner Dunkel', 'Hacker-Pschorr Hubertus Bock', 'Hacker-Pschorr Kristall Weisse', 'Hacker-Pschorr Animator', 'Hacker-Pschorr Oktoberfest-M�_rzen', 'Hacker-Pschorr Edelhell', 'Hacker-Pschorr Anno 1417', 'Hacker-Pschorr M�_nchner Gold']
}, {
    "Brewery": 'Yukon Brewing Company',
    "Beers": ['Deadman Creek Cranberry Wheat Ale', 'Discovery Fireweed Honey Ale', 'Chilkoot Lager', 'Ice Fog IPA', 'Yukon Red Amber Ale (Arctic Red)', 'Lead Dog Olde English Ale', 'Yukon Gold English Pale Ale', 'Midnight Sun Espresso Stout']
}, {
    "Brewery": 'Upright Brewing Company',
    "Beers": ['Barrel-Aged Stout Of Monte Fisto (Sole Composition Series)', 'Special Herbs (Sole Composition Series)', 'Belmont Station 14th Anniversary Ale', 'Oyster Stout', 'Blend Love', 'Fatali Four', 'Billy The Mountain', 'Pure Wit', 'Late Harvest', 'Flora Rustica', 'Fantasia', 'Six (#6)', 'Four (#4)', 'Five (#5)', 'Seven (#7)']
}, {
    "Brewery": 'Highlander Brew Co.',
    "Beers": ['Scottish Pale Ale']
}, {
    "Brewery": 'Saint Arnold Brewing Company',
    "Beers": ['Saint Arnold Icon Blue', 'Bishop\'s Barrel 1', 'Saint Arnold Divine Reserve #13', 'Saint Arnold Divine Reserve #12', 'Saint Arnold Santo', 'Saint Arnold Weedwacker', 'Saint Arnold Sailing Santa', 'Saint Arnold Spring Bock', 'Saint Arnold Christmas Ale', 'Saint Arnold Summer Pils', 'Saint Arnold Winter Stout', 'Saint Arnold Oktoberfest', 'Saint Arnold Amber Ale', 'Saint Arnold Brown Ale', 'Saint Arnold Elissa IPA', 'Saint Arnold Homefront IPA', 'Saint Arnold Fancy Lawnmower', 'Saint Arnold Endeavour IPA', 'Pumpkinator']
}, {
    "Brewery": 'Jailhouse Brewing Company',
    "Beers": ['Hop Riot', 'Conjugal Visit', 'Hard Time Barleywine', 'Slammer Wheat', 'Reprieve French-Style Ale', 'Midnight Special India-Style Black Ale', 'Mugshot IPA', 'Breakout Stout']
}, {
    "Brewery": 'Telegraph Brewing Company',
    "Beers": ['Robust Ale', 'Golden Wheat Ale', 'Gypsy Ale', 'White Ale', 'Obscura Arborea', 'California Ale', 'Petit Obscura', 'Stock Porter', 'Reserve Wheat Ale', 'Rhinoceros']
}, {
    "Brewery": 'Wandering Star Brewing Company',
    "Beers": ['Mild At Heart', 'Bert\'s Disqualified Imperial Stout']
}, {
    "Brewery": 'Pacific Brewing Laboratories',
    "Beers": ['Squid Ink']
}, {
    "Brewery": 'Willoughby Brewing',
    "Beers": ['Moonshadow', 'Willoughby Peanut Butter Cup Coffee Porter']
}, {
    "Brewery": 'Mantorville Brewing Company, LLC',
    "Beers": ['Stagecoach Smoked Porter']
}, {
    "Brewery": 'Prescott Brewing Company',
    "Beers": ['Petrified Porter', 'Liquid Amber', 'Ponderosa IPA']
}, {
    "Brewery": 'Valkyrie Brewing',
    "Beers": ['Dim Whit', 'Jule��l', 'Blonde', 'M��rketid', 'Copperhead', 'Invador Dopplebock', 'J.S. Helles Bock', 'Abby Normal', 'Honey Moon', 'Mj��d', 'Vienna Woods', 'Berserk', 'Big Swede', 'War Hammer']
}, {
    "Brewery": 'Milwaukee Brewing Company',
    "Beers": ['Hop Happy', 'Louie\'s Demise Immort-Ale', 'Pull Chain Pail Ale', 'Polish Moon Milk Stout']
}, {
    "Brewery": 'La Micro de Bromont',
    "Beers": ['Cobra India Pale Ale']
}, {
    "Brewery": 'Hockley Valley Brewing Co.',
    "Beers": ['Hockley Amber', 'Hockley Stout', 'Hockley Black &amp; Tan', 'Hockley Dark']
}, {
    "Brewery": 'Rubicon Brewing Company',
    "Beers": ['Monkey Knife Fight', 'Capricorn Black Ale', 'Irish Red', 'Hop Sauce (Hopsauce)', 'IPA', 'Rosebud']
}, {
    "Brewery": 'OPA-OPA Steakhouse &amp; "Brewery"',
    "Beers": ['Honesty 47 Pale Ale', 'King Oak Milk Stout', 'Southampton Porter', 'Opa Opa Light', 'Red Rock Amber Ale', 'Opa Opa IPA', 'A-10 Warthog Double IPA']
}, {
    "Brewery": 'Madison Brewing Co.',
    "Beers": ['Old 76 Strong Ale']
}, {
    "Brewery": 'Peters Brauhaus',
    "Beers": ['Peter\'s K�_lsch']
}, {
    "Brewery": 'Bootlegger\'s "Brewery"',
    "Beers": ['Plum Riot', 'Pumpkin Ale', 'Dr. Tongue', 'Old World Hefeweizen', 'Golden Chaos Golden Ale', 'Black Phoenix (Chipotle Coffee Ale)', 'Rustic Rye IPA', 'Palomino American Pale Ale', 'Knuckle Sandwich']
}, {
    "Brewery": 'Eagle Rock "Brewery"',
    "Beers": ['Manifesto', 'Revolution', 'Solidarity', 'Populist']
}, {
    "Brewery": 'Full Sail "Brewery" &amp; Tasting Room &amp; Pub',
    "Beers": ['Brewer\'s Share Vendell\'s Veizen (Weizen Bock)', 'Lupulin Fresh Hop Ale', 'Session Fest', 'Sanctuary (Brewmaster Reserve)', 'Chris\'s Summer Delight (Brewer\'s Share)', 'Vesuvius (Brewmaster Reserve)', 'Imperial Stout (Brewmaster Reserve)', 'Session Lager', 'Big Daddy J\'s Malt Liquor', 'Nut Brown Ale (Pub Series)', 'Full Sail Wassail', 'Full Sail IPA', 'Elevation', 'Session Black Lager', 'Imperial Porter (Brewmaster Reserve)', 'Top Sail Imperial Porter (Brewmaster Reserve)', 'Full Sail Amber', '"25" Anniversary Pale Doppelbock', 'Full Sail Pale Ale', 'Wreck The Halls', 'E.S.B. / Extra Special Barney (Brewer\'s Share)', 'Bump In The Night (Brewmaster Reserve 2011)', 'Full Sail Hop Pursuit (Brewmaster Reserve)', 'Slipknot Imperial IPA (Brewmaster Reserve)', 'Old Boardhead Barleywine Ale']
}, {
    "Brewery": 'Four Peaks Brewing Company',
    "Beers": ['Arizona Peach', 'Hopsquatch Barleywine', 'Oatmeal Stout', 'Pumpkin Porter', 'Kilt Lifter Scottish Style Ale', 'The Raj IPA', 'Sunbru K�_lsch-Style Ale', '8th Street Ale', 'Hop Knot']
}, {
    "Brewery": 'Birra Del Borgo',
    "Beers": ['T��', 'Duchessa', '25 Dodici', 'Genziana', 'Duchessic Ale', 'My Antonia (Birra Del Borgo &amp; Dogfish Head)', 'Re Ale Extra', 'Re Ale']
}, {
    "Brewery": 'The Porterhouse Brewing Company',
    "Beers": ['TSB', 'Hop Head', 'Celebration Stout', 'Wrasslers XXXX Stout', 'An Brain Bl��sta', 'Porterhouse Red', 'Oyster Stout', 'Plain Porter']
}, {
    "Brewery": 'Big Dog\'s Draft House',
    "Beers": ['Red Hydrant Ale', 'Holy Cow! Original Pale Ale', 'Black Lab Stout', 'War Dog Double IPA', 'Dirty Dog IPA']
}, {
    "Brewery": 'Blue Hills "Brewery"',
    "Beers": ['Dunkelweizen', 'Okto Bra�_', 'Watermelon Wampatuck Wheat', 'Wampatuck Wheat', 'Three Peak Milk Stout', 'Blue Hills Pub Draft IPA', 'Imperial Red I.P.A.', 'Black Hops Beer']
}, {
    "Brewery": 'Propeller "Brewery"',
    "Beers": ['Propeller Hefeweizen', 'Propeller Pumpkin Ale', 'Propeller Pilsener', 'Propeller Honey Wheat', 'Propeller London Style Porter', 'Propeller Revolution', 'Propeller Pale Ale', 'Propeller Extra Special Bitter (ESB)', 'Propeller IPA']
}, {
    "Brewery": 'Alley Kat Brewing Company',
    "Beers": ['Dragon Series Green Dragon Double IPA', 'Dragon Series Blue Dragon Double IPA', 'Dragon Series Orange Dragon Double IPA', 'Loaded Goat Maibock', 'Dragon Series Plaid Dragon Double IPA', 'Charlie Flint\'s Original Lager', 'Three Bears Oatmeal Stout', 'Aprikat', 'Sherbrooke Neapolean Neapolitan Stout', 'Pumpkin Pie Spiced Ale', 'Dragon Series Red Dragon Double IPA', 'Alley Kat Amber', 'Olde Deuteronomy', 'Full Moon Pale Ale', 'Sherbrooke Bad Hare Day']
}, {
    "Brewery": 'Draai Laag Brewing Company / Saints &amp; Turncoats Public House',
    "Beers": ['Aureus', 'Simon Girty']
}, {
    "Brewery": 'Legend Brewing Co.',
    "Beers": ['Quad', 'Tripel', 'Golden IPA', 'Pilsner', 'Chocolate Porter', 'Hopfest', 'Lager', 'Imperial Stout']
}, {
    "Brewery": 'Ladyface Ale Companie',
    "Beers": ['LadyFace IPA']
}, {
    "Brewery": 'Birrificio Troll',
    "Beers": ['Da�_', 'Shangrila']
}, {
    "Brewery": 'Diamond Bear Brewing Company',
    "Beers": ['Rocktoberfest', 'Irish Red', 'Two Term Double IPA', 'Southern Blonde', 'Paradise Porter', 'Presidential IPA']
}, {
    "Brewery": 'Moa Brewing Company',
    "Beers": ['Moa Pale Ale', 'Moa 5 Hop Ale', 'Moa Blanc', 'Moa Breakfast', 'Moa Imperial Stout (Aged In Pinot Noir Barrels)', 'Moa Methode', 'Moa St Josephs', 'Moa Noir']
}, {
    "Brewery": 'Night Shift Brewing',
    "Beers": ['Somer Weisse']
}, {
    "Brewery": 'Hale\'s Ales "Brewery" &amp; Pub',
    "Beers": ['Wee Heavy (Barrel Aged)', 'Hale\'s Cream Ale', 'Hale\'s Drawbridge Blonde', 'Hale\'s Wee Heavy Winter Ale', 'El Jefe Weizen Ale', 'Hale\'s Pale Ale', 'Pikop Andropov\'s Rushin\' Imperial Stout', 'Hale\'s Troll Porter', 'Rudyard\'s Rare Barley Wine', 'Hale\'s Red Menace Big Amber', 'Hale\'s Mongoose IPA', 'Hale\'s Supergoose DIPA', 'Hale\'s K�_lsch', 'Aftermath Imperial IPA', 'Hale\'s O\'Brien\'s Harvest Ale']
}, {
    "Brewery": 'New Orleans Lager &amp; Ale Brewing Company (NOLA)',
    "Beers": ['Flambeau Red', 'NOLA Brown Ale', 'Hopitoulas IPA', 'Irish Channel Stout', 'NOLA Blonde Ale']
}, {
    "Brewery": 'Feral Brewing Co.',
    "Beers": ['Karma Citra', 'Feral White', 'Hop Hog']
}, {
    "Brewery": 'Hops Grillhouse &amp; "Brewery"',
    "Beers": ['Hops Alligator Ale']
}, {
    "Brewery": 'Marston, Thompson &amp; Evershed, Plc.',
    "Beers": ['Burton Best Bitter', 'Double Drop', 'Owd Rodger', 'Strong Pale Ale', 'Oyster Stout', 'Pedigree', 'Old Empire']
}, {
    "Brewery": 'Brasserie Castelain',
    "Beers": ['Ch\'ti Triple', 'Grand Cru', 'Diversey &amp; Lill(e)', 'Ch\'ti Ambr��e', 'Jade (Biere Biologique)', 'Ch\'ti Blonde', 'St. Amand', 'Castelain Blond Biere De Garde']
}, {
    "Brewery": 'Elysian Brewing Company',
    "Beers": ['Wasteland Elderflower Saison', 'Ambrosia Maibock', 'Ruin Rosemary Agave IPA', 'Fallout Green Cardamom Pale', 'Saison Elysee', 'Rapture Heather Ale', 'Omen Belgian Raspberry Stout (Apocalypse Series)', 'Blight Pumpkin Ale', 'Peste Chocolate Chili Ale', 'Maelstrom Blood Orange Ale', 'DOOM Golden Treacle Pale', 'NIBIRU Yerba Mate Tripel', 'The Men\'s Room Ale', 'The Wise ESB', 'Avatar Jasmine IPA', 'Valhalla', 'Perseus Porter', 'Savant', 'The Immortal IPA', 'Night Owl Pumpkin Ale', 'Prometheus IPA', 'Bete Blanche Belgian-Style Tripel', 'BiFrost', 'Loser Pale Ale', 'The Great Pumpkin', 'Split Shot Espresso Milk Stout', 'Dragonstooth Oatmeal Stout', 'Dark O\' The Moon']
}, {
    "Brewery": 'Oak Creek Brewing Co.',
    "Beers": ['Oak Creek Hefeweizen', 'Oak Creek Nut Brown Ale']
}, {
    "Brewery": 'The Lost Abbey',
    "Beers": ['Road To Helles', 'Saison Blanc', 'Double Red Poppy', 'Judgment Day', 'Red Poppy Ale', '10 Commandments', 'Cuvee De Tomme', 'Amazing Grace Ale', 'Lost &amp; Found Abbey Ale', 'Inferno Ale', 'Mo\' Betta Bretta', 'Avant Garde', 'Framboise De Amorosa', 'Witch\'s Wit', 'Devotion Ale', 'Mayan Apocalypse Judgment Day', 'Gift Of The Magi', 'Red Barn Ale', 'Carnevale', 'Deliverance', 'Saints\' Devotion', 'Serpent\'s Stout', 'Cable Car', 'Duck Duck Gooze']
}, {
    "Brewery": 'Kuhnhenn Brewing Company',
    "Beers": ['Kuhnhenn Anneliese Ale', 'Kuhnhenn Rauch Double Bock', 'Kuhnhenn Metry\'s Winter Lager', 'Kuhnhenn Fluffer', 'Kuhnhenn Hefeweiss', 'Kuhnhenn Weiss Teufel (White Devil)', 'Kuhnhenn A Few Shillings Too Many', 'Kuhnhenn Penetration Porter', 'Kuhnhenn Prometheus', 'Kuhnhenn Cherry Olde Brune', 'Kuhnhenn Nine', 'Kuhnhenn Imperial Cr��me Br��l��e Java Stout', 'Kuhnhenn DRIPA (Double Rice IPA)', 'Kuhnhenn Solar Eclipse', 'Kuhnhenn Cr��me Br��l��e Java Stout', 'Kuhnhenn All Hallows Ale', 'Kuhnhenn Mayhem', 'Kuhnhenn Vintage Ale', 'Kuhnhenn Tenacious Cassis', 'Kuhnhenn Braggot', 'Kuhnhenn Extraneous Ale', 'Kuhnhenn Loonie Kuhnie Pale Ale', 'Kuhnhenn Winter Wonder Lager', 'Kuhnhenn Road Rash Imperial Stout', 'Kuhnhenn American Barley Wine', 'Kuhnhenn Raspberry Eisbock', 'Kuhnhenn American IPA', 'Kuhnhenn Aldebaran', 'Kuhnhenn Bourbon Barrel Barley Wine', 'Kuhnhenn Simcoe Silly', 'Kuhnhenn Dark Heathen Triple Bock', 'Kuhnhenn Bourbon Barrel Fourth Dementia', 'Kuhnhenn Fourth Dementia (4D)', 'Kuhnhenn American Imperial Stout']
}, {
    "Brewery": 'C.H. Evans Brewing Company',
    "Beers": ['Pump Station Pale Ale', 'Old Musty Barleywine', 'Kick-Ass Brown']
}, {
    "Brewery": 'Weasel Boy Brewing Company',
    "Beers": ['Bitter Sable Imperial Black IPA', 'Weasel Boy Dancing Ferret India Pale Ale', 'Weasel Boy Bourbon Barrel Anastasia Russian Imperial Stout']
}, {
    "Brewery": 'Bullfrog "Brewery"',
    "Beers": ['Diabolique', 'El Diablo', 'Saison Noire', 'BeeSting', 'French Kiss', 'Edgar IPA', 'Houblonium P38', 'Double Coffee Stout']
}, {
    "Brewery": 'Hofbrouwerijke',
    "Beers": ['Bosprotter', 'Hofblues']
}, {
    "Brewery": 'Harriet Brewing',
    "Beers": ['Divine Oculust', 'West Side Belgian-Style IPA']
}, {
    "Brewery": 'Fyne Ales Ltd',
    "Beers": ['Jarl', 'Avalanche']
}, {
    "Brewery": 'Quidi Vidi Brewing Company',
    "Beers": ['Eric\'s Cream Ale', '1892 Traditional Ale']
}, {
    "Brewery": 'Sebago Brewing Company',
    "Beers": ['Saddleback Ale', 'Bass Ackwards Berryblue Ale', 'Boathouse Brown', 'Midnight Porter', 'Runabout Red Ale', 'Frye\'s Leap IPA', 'Full Throttle Double IPA', 'Slick Nick Winter Ale', 'Bourbon Barrel Aged Lake Trout Stout', 'Lake Trout Stout', 'Local Harvest Ale']
}, {
    "Brewery": 'Half Moon Bay Brewing Company',
    "Beers": ['Old Soulstice Winter Ale', 'Harbor Lights Ale', 'Mavericks Amber Ale']
}, {
    "Brewery": '"Brewery" Budweiser Budvar / B.B.N.P.',
    "Beers": ['Budvar Super Strong', 'Budweiser Budvar', 'Budweiser Budvar Czech Dark Lager']
}, {
    "Brewery": 'Moorhouse\'s "Brewery" (Burnley) Ltd',
    "Beers": ['Moorhouse Blond Witch', 'Pendle Witches Brew', 'Black Cat']
}, {
    "Brewery": 'Cambridge Brewing Company',
    "Beers": ['Heather Ale', 'Bad Knees Blanton Barrel Aged Old Ale', 'Bitchin Bitter', 'EZ Ryeder', 'Cerise Cass��e American Sour Ale', 'Cambridge Amber', 'Benevolence', 'Sgt. Pepper', 'Regatta Golden', 'Charles River Porter', 'Weekapaug Gruit Ale', 'Arquebus', 'Tall Tale Pale Ale', 'YouEnjoyMyStout', 'Tripel Threat', 'Bannatyne\'s Scotch Ale', 'Blunderbuss Barleywine', 'Spring Training IPA', 'Great Pumpkin Ale', 'Red God', 'Big Man IPA', 'The Audacity Of Hops']
}, {
    "Brewery": 'Rabbit\'s Foot Meadery',
    "Beers": ['Biere De Miele', 'Diabhal']
}, {
    "Brewery": 'III Dachshunds/City Lounge',
    "Beers": ['Otto\'s Oatmeal Stout']
}, {
    "Brewery": 'Mill Street Brew Pub',
    "Beers": ['Mill Street Imperial Chocolate Stout', 'Mill Street Vanilla Porter', 'Mill Street Franconian Bock', 'Mill Street I.P.A. (India Pale Ale)', 'Mill Street Doppel Pils', 'Mill Street Lemon Tea Ale', 'Mill Street Cobblestone Stout', 'Mill Street Pilsner', 'Mill Street Nightmare On Mill Street', 'Mill Street Wit', 'Mill Street Tankhouse Ale', 'Mill Street Helles Bock', 'Mill Street E.S.B. (Extra Special Bitter)', 'Mill Street Coffee Porter', 'Mill Street Oktoberfest Lager', 'Mill Street Betelgeuse']
}, {
    "Brewery": 'Port Townsend Brewing Company',
    "Beers": ['Port Townsend Brown Porter', 'Peeping Peater Scotch Ale', 'Strait Stout', 'Hop Diggidy IPA']
}, {
    "Brewery": 'Fullsteam "Brewery"',
    "Beers": ['Carver', 'Rocket Science IPA', 'Fullsteam Southern Lager', 'First Frost']
}, {
    "Brewery": 'Better Bitters Brewing Co.',
    "Beers": ['Nickel Brook Bolshevik Bastard Russian Imperial Stout', 'Nickel Brook Maple Porter', 'Nickel Brook Premium Organic Lager', 'Nickel Brook Ale', 'Nickel Brook Headstock IPA']
}, {
    "Brewery": 'Columbus Brewing Company',
    "Beers": ['Columbus Rhapsody', 'Columbus Nut Brown Ale', 'Columbus Uncle Rusty', 'Columbus Festbier', 'Columbus Big Frank', 'Columbus Pale Ale', 'Columbus 1859 Porter', 'Columbus Creeper', 'Columbus Summer Teeth', 'Columbus Winter Warmer', 'Columbus IPA', 'Columbus Bodhi DIPA']
}, {
    "Brewery": 'Lake Louie "Brewery" Company',
    "Beers": ['Mosquito Beach', 'Belgian Prairie Moon Farmhouse Ale', 'Brother Tim\'s Triple', 'Kiss The Lips IPA', 'Louie\'s Reserve Scotch Ale', 'Arena Premium Pale Ale', 'Lake Louie Warped Speed Scotch Ale', 'Coon Rock Cream Ale', 'Mr. Mephisto\'s Imperial Stout', 'Dino\'s Dark', 'Lake Louie Tommys Porter']
}, {
    "Brewery": 'Spring House Brewing Company',
    "Beers": ['Satan\'s Bake Sale Mint Chocolate Chip Stout', 'Robot Surf Factory Pineapple Pale Ale', 'Cosmic Monster', 'Braaaiins!', 'The Astounding She Monster Mango IPA', 'Smoked Porter', 'Atomic Raygun', 'Two Front Teeth Holiday Ale', 'Big Gruesome', 'Seven Gates Pale Ale', 'Planet Bean Coffee Stout', 'Beyond The Gates AKA Seven Gates On Skates', 'Kerplunk Imperial Chocolate Stout']
}, {
    "Brewery": 'Butcombe "Brewery" Ltd.',
    "Beers": ['Butcombe Bitter']
}, {
    "Brewery": 'Fremont Brewing Company',
    "Beers": ['Homefront IPA', 'Seattle Beer Week 5th Anniversary Organic Pale Ale', 'Harvest Ale', 'UniversAle Pale', '77 Fremont Select Spring Session IPA', 'Cowiche Canyon Organic Hop Lab #1', 'Interurban IPA', 'Kentucky Dark Star', 'Abominable Ale', 'Bourbon Abominable Winter Ale', 'Cowiche Canyon Organic Fresh Hop Ale', 'Summer Ale']
}, {
    "Brewery": 'Masia Agullons',
    "Beers": ['RUNA']
}, {
    "Brewery": 'Prairie Artisan Ales',
    "Beers": ['Prairie Gold', 'Prairie \'Merica', 'Prairie Noir', 'Prairie Ale', 'Prairie Standard', 'Prairie Hop']
}, {
    "Brewery": 'Coors Brewing Company',
    "Beers": ['Blue Moon Proximity', 'Blue Moon Vintage Blonde Ale', 'George Killian\'s Irish Stout', 'Blue Moon Belgian White', 'Blue Moon Grand Cru', 'Blue Moon Spiced Amber Ale', 'Batch 19']
}, {
    "Brewery": 'De 3 Horne Bierbrouwerij',
    "Beers": ['Bananatana']
}, {
    "Brewery": 'Cumberland Brews',
    "Beers": ['Cream Ale', 'Matt\'s Red', 'Nitro Porter']
}, {
    "Brewery": 'Golden Road Brewing',
    "Beers": ['Burning Bush', 'Get Up Offa That Brown', 'Point The Way IPA']
}, {
    "Brewery": 'Isle Of Skye "Brewery"',
    "Beers": ['Red Cuillin', 'Black Cuillin', 'Wee Beast (Cuillin Beast)']
}, {
    "Brewery": 'Les Trois Mousquetaires',
    "Beers": ['Blanche', 'Blonde', 'S��rie Signature Festbier', 'Noire', 'S��rie Signature Oktoberfest', 'Imp��riale Weizen Grande Cuv��e', 'Serie Signature Maibock', 'Grande Cuv��e Porter Baltique', 'Doppelbock Grande Cuv��e Printemps', 'Weizenbock Grande Cuv��e', 'S��rie Signature Kellerbier', 'S��rie Signature Sticke Alt']
}, {
    "Brewery": 'BrewDog',
    "Beers": ['Avery Brown Dredge', 'International Arms Race', 'Hops Kill ?', 'Libertine Black Ale', 'Royal Virility Performance', 'Nelson Sauvin (IPA Is Dead)', 'There Is No Santa', 'Bramling X (IPA Is Dead)', 'Dead Pony Club', 'Black Tokyo Horizon', 'Citra (IPA Is Dead)', 'BrewDog / Three Floyds Bitch Please', 'Dogma', 'Hello, My Name Is Ingrid', 'Zeitgeist', 'Old World Russian Imperial Stout', '77 Lager', 'Tokyo*', '5 A.M. Saint', 'Alice Porter', 'Trashy Blonde', 'Old World India Pale Ale', 'Chaos Theory', 'Hardcore IPA (2nd Ed. 9.2%)', 'Rip Tide', 'Punk IPA']
}, {
    "Brewery": 'Birrificio Italiano',
    "Beers": ['Fleurette (Gioia Di Vivere)', 'Scires', 'Tipo Pils', 'Cassissona']
}, {
    "Brewery": 'Ice Axe Grill / Mt. Hood Brewing Co.',
    "Beers": ['Ice Axe India Pale Ale', 'Hogsback Oatmeal Stout']
}, {
    "Brewery": 'Real Ale Brewing Company',
    "Beers": ['Brewers\' Cut Signature Hop Pale Ale', 'Brewer\'s Cut Imperial Red Ale', 'Real Heavy', 'Brewers\' Cut Black Quadrupel', 'Devil\'s Backbone', 'Phoenixx Double ESB', 'Anniversary Ale XV', 'Hans\' Pils', 'Brewhouse Brown Ale', 'Full Moon Pale Rye Ale', 'Shade Grown Coffee Porter', 'Lost Gold IPA', 'Rio Blanco Pale Ale', 'Sisyphus', 'Fireman\'s #4']
}, {
    "Brewery": 'Oakshire Brewing',
    "Beers": ['Harvest Ale', 'Skookumchuck', 'Heart Shaped Box', 'Oakshire Amber', 'Perfect Storm Double IPA', 'Line Dry Rye', 'Watershed IPA', 'Ill-Tempered Gnome', 'Overcast Espresso Stout', 'O\'Dark:30 Cascadian Dark Ale']
}, {
    "Brewery": 'Three Heads Brewing',
    "Beers": ['Cobbs Hill Black Lager', 'Common Man Special Lager', 'Too Kind Double IPA', 'Ontario Coast IPA', 'Bromigo Smoked Maple Amber', 'Skunk Black IPA', 'Java Sutra Coffee Porter', 'The Kind IPA', 'Loopy Oatmeal Red Ale']
}, {
    "Brewery": 'Scheldebrouwerij',
    "Beers": ['The Perfect Crime Hollow Point', 'The Perfect Crime Smoking Gun', 'Mug Bitter', 'Lamme Goedzak', 'Oesterstout', 'Hansje Drinker', 'Zeezuiper']
}, {
    "Brewery": 'Watch City Brewing Co.',
    "Beers": ['Chocolate Thunder Porter', 'Moody Street Stout', 'Kingpin Imperial Stout', 'FNA IPA', 'Titan Ale', 'Hops Explosion IPA']
}, {
    "Brewery": 'Ice Harbor Brewing Company',
    "Beers": ['Runaway Red', 'Sternwheeler Stout', 'India Pale Ale']
}, {
    "Brewery": 'Harringtons "Brewery"',
    "Beers": ['Harringtons Big John Special Reserve']
}, {
    "Brewery": 'Abbaye De La Ram��e',
    "Beers": ['Ram��e Blonde']
}, {
    "Brewery": 'Bridge Road Brewers',
    "Beers": ['Dark Harvest', 'Australian Ale', 'Robust Porter', 'Harvest Pale Ale', 'N��gne �� / Bridge Road India Saison', 'Bridge Road Pale Ale', 'Galaxy Single Hop IPA', 'Chevalier Saison', 'Bling India Pale Ale']
}, {
    "Brewery": 'Barley\'s Smokehouse and Brewpub',
    "Beers": ['Barley\'s Pale Ale', 'Barley\'s Centennial India Pale Ale', 'Barley\'s Double Dog Dare Imperial IPA']
}, {
    "Brewery": 'Belmont Brewing Company',
    "Beers": ['Long Beach Crude']
}, {
    "Brewery": '2nd Shift "Brewery"',
    "Beers": ['El Gato Grande']
}, {
    "Brewery": 'Holgate Brewhouse / Keatings Hotel',
    "Beers": ['Holgate Brewhouse Woodend Pilsener', 'Double Trouble', 'Holgate ESB', 'Mt Macedon Ale', 'Temptress Chocolate Porter', 'Hopinator']
}, {
    "Brewery": 'Barley Days "Brewery"',
    "Beers": ['Yuletide Cherry Porter', 'Harvest Gold Pale Ale']
}, {
    "Brewery": 'Orlando Brewing Partners',
    "Beers": ['Pale Ale', 'Blackwater Porter']
}, {
    "Brewery": 'Red Hill "Brewery"',
    "Beers": ['Red Hill Scotch Ale', 'Red Hill Weizenbock', 'Red Hill Bohemian Pilsner', 'Red Hill Hop Harvest Ale', 'Red Hill Imperial Stout']
}, {
    "Brewery": 'Kaiser Br�_u GmbH &amp; Co KG',
    "Beers": ['Veldensteiner Original Lager', 'Veldensteiner Wei��bier', 'Veldensteiner Premium Pils', 'Veldensteiner Zwick\'l', 'Veldensteiner Landbier']
}, {
    "Brewery": 'South Street "Brewery"',
    "Beers": ['Satan\'s Pony Amber Ale', 'JP Ale']
}, {
    "Brewery": 'Mikkeller ApS',
    "Beers": ['Spontankoppi', 'Big Worst (Bourbon Edition)', 'Yeast Series 2.0: Brettanomyces Lambicus', 'Milk Stout', 'Big Worse (Red Wine Edition)', 'Belgian Tripel', 'Spontankriek', 'Monk\'s Brew (Bourbon Barrel Aged)', 'Spontangrape', 'Magnum Single Hop IPA', 'Santa\'s Little Helper 2012', 'Willamette Single Hop IPA', 'Mt. Hood Single Hop IPA', 'Ris A La M\'ale', 'Challenger Single Hop IPA', 'Columbus Single Hop IPA', 'Beer Geek Bacon', 'Galena Single Hop IPA', 'Black Hole (Tequila Edition)', 'Cluster Single Hop IPA', 'Palisade Single Hop IPA', 'Spontanframboos', 'Spontanale', 'Funky E Star', 'Monk\'s Brew (Red Wine Barrel Aged With Raspberries)', 'Hop Burn Double Imperial Pale Ale', 'Hop Burn Low', 'Sour Bitch', 'USAlive! (Alive)', 'Simcoe Single Hop IPA', 'Warrior Single Hop IPA', 'Invasion Farmhouse IPA', 'Tettnanger Single Hop IPA', 'Super Galena Single Hop IPA', 'Green Gold', 'Citra Single Hop IPA', 'I Beat YoU', 'Black (_��)', 'Amarillo Single Hop IPA', 'It\'s Alive!', 'Spontanwildstrawberry', 'Big Worse (Bourbon Edition)', 'Black Buffalo (_�_)', 'Chinook Single Hop IPA', 'Nelson Sauvignon (Nelson Sauvin Brut)', 'Swinging Harry Tropical Quad', 'Monk\'s Elixir (Monk\'s Brew)', 'Black Hole', 'Tomahawk Single Hop IPA', 'Cascade Single Hop IPA', 'Big Worst', 'Sort Gul', 'Big Worse', 'Stateside IPA', 'Draft Bear', 'Hoppy Lovin\' Christmas', 'Koppi Coffee IPA', '10', 'Drikkeriget GIPA', 'Not Just Another Wit', 'Beer Geek Breakfast', 'Centennial Single Hop IPA', 'Tiger Baby: Open Windows Open Hills', 'Beer Hop Breakfast', '19', 'Porter', 'Danish Dream', 'Red/White Christmas', 'Beer Geek Brunch Weasel', 'Hop Burn High', 'Invasion IPA', 'All Others Pale', '1000 IBU', 'Mikkeller / Grassroots Wheat Is The New Hops', 'Jackie Brown']
}, {
    "Brewery": 'Brasserie Du Bocq',
    "Beers": ['La Gauloise Ambr��e', 'Saison Regal', 'La Gauloise Brune', 'Waterloo Tripel 7 Blond', 'Blanche Des Moines', 'La Gauloise Blonde', 'Waterloo Double 8 Dark', 'Triple Moine / Deugniet', 'Blanche De Namur']
}, {
    "Brewery": 'Pivovar Herold B��eznice A.s.',
    "Beers": ['Herold Granat', 'Herold Traditional Premium Bohemian Lager', 'Herold Bohemian Wheat Lager', 'Herold Bohemian Black Lager']
}, {
    "Brewery": 'Bud�_jovick�_ M�_�_��ansk�_ Pivovar',
    "Beers": ['Samson Budweiser Bier ��ern�_', 'Samson Budweiser Bier Premium', 'B.B. B�_rgerbr�_u / B.B. Budweiser Bier']
}, {
    "Brewery": 'Lucid Brewing',
    "Beers": ['Summertide', 'Air', 'Foto', 'Dyno', 'Camo']
}, {
    "Brewery": 'F&amp;M "Brewery"',
    "Beers": ['MacLean\'s Pale Ale', 'Stone Hammer Oatmeal Coffee Stout', 'Stone Hammer Dark Ale', 'Stone Hammer Pilsner']
}, {
    "Brewery": 'Saltaire "Brewery" Limited',
    "Beers": ['Triple Chocoholic']
}, {
    "Brewery": 'Walking Man Brewing Co.',
    "Beers": ['Pale Strider', 'Walking Stick Stout', 'Old Stumblefoot', 'Black Cherry Stout', 'Homo Erectus', 'Knuckle Dragger', 'Jaywalker Imperial Stout', 'Walking Man IPA']
}, {
    "Brewery": 'Sherbrooke Liquor Store',
    "Beers": ['Ragutiene', 'Heartstopper']
}, {
    "Brewery": 'Schooner Exact Brewing Company',
    "Beers": ['Hoppy The Woodsman', '3-Grid IPA']
}, {
    "Brewery": 'Pisgah Brewing Co.',
    "Beers": ['Pisgah Red Devil', 'Pisgah Nitro Stout', 'Endless Summer Ale', 'Pisgah Equinox', 'Pisgah Porter', 'Pisgah Valdez', 'Pisgah American Style Pale Ale', 'Solstice', 'India Pale Ale', 'Pisgah Baptista', 'Vortex I', 'Hellbender Barleywine', 'Vortex II']
}, {
    "Brewery": 'Almanac Beer Co.',
    "Beers": ['Farmer\'s Reserve #2', 'Biere De Chocolat', 'Farmer\'s Reserve #1', 'Winter 2012 Winter Wit', 'Spring 2012 Bi��re De Mars', 'Barrel Noir', 'Autumn 2011 Farmhouse Ale']
}, {
    "Brewery": '16 Mile Brewing Company',
    "Beers": ['Responders Ale', 'Harvest Ale', 'Inlet IPA', 'Amber Sun Ale', 'Blues\' Golden Ale', 'Old Court Ale']
}, {
    "Brewery": 'Lazy Magnolia Brewing Company',
    "Beers": ['Ginger Jaque', 'Gulf Porter', 'Timber Beast', 'Southern Pecan', 'Jefferson Stout', 'Indian Summer', 'Deep South Pale Ale (Reb Ale)']
}, {
    "Brewery": 'Cold Spring Brewing Co.',
    "Beers": ['Cold Spring IPA', 'Olde Johnnie Ale', 'John Henry 3 Lick Spiker Ale']
}, {
    "Brewery": 'Depot Street Brewing',
    "Beers": ['Roundabout Rye Stout']
}, {
    "Brewery": 'Black Market Brewing Co.',
    "Beers": ['Anglo-American Style Brown Ale', 'Rye IPA']
}, {
    "Brewery": 'Red Hare Brewing Company',
    "Beers": ['Gangway IPA']
}, {
    "Brewery": 'Picaroons Brewing Co.',
    "Beers": ['Dooryard Summer Ale', 'Man\'s Best Friend', 'Winter Warmer', 'Dark And Stormy Night', 'Yippee IPA', 'Best Bitter']
}, {
    "Brewery": 'Laurelwood Public House &amp; "Brewery"',
    "Beers": ['Green Mammoth Organic Imperial IPA', 'Moose &amp; Squirrel Russian Imperial Stout', 'Wry Pale Ale', 'Imperial Workhorse Double India Pale Ale', 'Organic Free Range Red', 'Framboise', 'Hooligan Brown Ale', 'Workhorse IPA', 'Organic Portland Roast Espresso Stout']
}, {
    "Brewery": 'Iron Fist Brewing Company',
    "Beers": ['Spice Of Life', 'Golden Age', 'Dubbel Fisted', 'Hired Hand', 'The Resistance', 'Velvet Glove', 'The Gauntlet']
}, {
    "Brewery": 'Triple 7 Restaurant and "Brewery"',
    "Beers": ['Triple 7 Black Chip Porter', 'Triple 7 Marker Pale Ale']
}, {
    "Brewery": 'Mash House Restaurant &amp; "Brewery", The',
    "Beers": ['Brown Porter', 'Hoppy Hour IPA']
}, {
    "Brewery": 'Thornbridge "Brewery"',
    "Beers": ['Chiron', 'Wild Swan', 'Raven', 'Bracia', 'St Petersburg Imperial Stout', 'Jaipur IPA', 'Halcyon', 'Kipling']
}, {
    "Brewery": 'F��t De Ch��ne)',
    "Beers": ['MacKroken Flower Grande R��serve (Vieillie 4 Mois']
}, {
    "Brewery": 'Fredericksburg Brewing Company, Inc.',
    "Beers": ['Enchanted Rock Red Ale', 'Pioneer Porter']
}, {
    "Brewery": 'Flying Monkeys Craft "Brewery"',
    "Beers": ['Flying Monkeys Stereo Vision', 'Flying Monkeys Hoptical Illusion Almost Pale Ale', 'Flying Monkeys Smashbomb Atomic IPA', 'Flying Monkeys BNL Imperial Chocolate Stout', 'Flying Monkeys Netherworld Cascadian Dark Ale']
}, {
    "Brewery": 'Charleville Vineyard Micro"Brewery"',
    "Beers": ['Explicit APA', 'Half Wit Wheat', 'Tripel Wit', 'Tornado Alley Amber Ale', 'Ale Mucho Hoppo', 'Hoptimistic IPA', 'Box Of Chocolate']
}, {
    "Brewery": 'Nelson Brewing Company',
    "Beers": ['Wild Honey Authentic Ale', 'After Dark', 'Blackheart Oatmeal Stout', 'Faceplant Winter Ale', 'Paddywhack IPA']
}, {
    "Brewery": 'Epic Brewing Co.',
    "Beers": ['Intermountain Wheat', 'Straight Up Saison', 'Cross Fever', 'Utah Sage Saison', 'Pfeifferhorn Lager', 'Smoked Porter', 'Galloway Porter', 'Double Skull Doppelbock Lager', 'Capt\'n Crompton\'s Pale Ale', 'Mid Mountain Mild Ale', 'Smoked &amp; Oaked Belgian-Style Ale', 'Elder Brett: Saison-Brett Golden Ale', 'Brainless On Peaches Belgian-Style Ale', '825 State Stout', 'Brainless Belgian-Style Golden Ale', 'Santa Cruz Brown Ale', 'Big Bad Baptist', 'Imperial Stout', 'Barley Wine', 'Spiral Jetty', 'Sour Apple Saison', 'Imperial Red Ale', 'Hopulent IPA', 'Hop Syndrome Lager', 'Imperial IPA', 'Fermentation Without Representation', 'Copper Cone']
}, {
    "Brewery": 'Budelse Brouwerij B.V.',
    "Beers": ['Capucijn']
}, {
    "Brewery": 'Microbrasserie du Li��vre',
    "Beers": ['L\'IPA Du Li��vre']
}, {
    "Brewery": 'Brasseurs Illimit��s',
    "Beers": ['La Magouille', 'Simple Malt Golding Pale Ale', 'Simple Malt Fum��e Massive', 'Simple Malt Vin D\'Orge', 'Simple Malt Double Porter', 'Simple Malt Altbier', 'Simple Malt Imp��riale Stout', 'Simple Malt Cascade India Pale Ale', 'Simple Malt IPA']
}, {
    "Brewery": 'Tri-City Brewing Company',
    "Beers": ['Hell\'s Half Mile', 'Fortunato', 'Giant Slayer']
}, {
    "Brewery": 'Olde Hickory "Brewery"',
    "Beers": ['Bestway IPA, IPA Aged On Oak', 'Ruby Lager', 'Daniel Boone', 'Wilson Creek ESB', 'Dopplebock Lager', 'Piedmont Pilsner', 'Redeemer', 'Lindley Park', 'Table Rock Pale Ale', 'Eiraphiotes', 'Hickory Stick Stout', 'Black Raven IPA', 'The Event Horizon', 'Seven Devils', 'Imperial Stout', 'Death By Hops', 'Irish Walker']
}, {
    "Brewery": 'Rivertowne Pourhouse',
    "Beers": ['Hala Kahiki Pineapple Beer', 'Old Wylies IPA']
}, {
    "Brewery": 'John Harvard\'s "Brewery" &amp; Ale House',
    "Beers": ['Espresso Stout', 'Nut Brown Ale', 'Demon DPA', 'India Pale Ale (IPA)', 'Pilgrim\'s Porter', 'Old Willy India Pale Ale', 'Pale Ale']
}, {
    "Brewery": 'Maritime Pacific Brewing Company',
    "Beers": ['Decompression Ale', 'Old Seattle Lager', 'Flagship Red Alt Ale', 'Nightwatch Dark Amber Ale', 'Maritime Pacific Jolly Roger Christmas Ale', 'Islander Pale Ale', 'Imperial Pale Ale']
}, {
    "Brewery": 'Fat Heads "Brewery" &amp; Saloon',
    "Beers": ['Sunshine Daydream Session IPA', 'Holly Jolly Christmas Ale', 'Goggle Fogger Hefe Weizen', 'Alpen Glow Weizenbock', 'Sorcerer', 'Imperial Head Hunter', 'Pack-A-Wallop S.P.A.', 'Fat Head\'s Duke Of Lager Fest Bier', 'Gudenhoppy Pils', 'Bumble Berry Honey Blueberry Ale', 'Hop JuJu Imperial IPA', 'Oompa Loompa Chocolate Cream Stout', 'Fat Head\'s Head Hunter IPA']
}, {
    "Brewery": 'Minneapolis Town Hall "Brewery"',
    "Beers": ['Marmelade Sky', 'Barrel Monkey', 'Tank Monkey', 'Smoked Hefe', 'Russian Roulette', 'Town Hall Maibock', 'Tumaltuous Rare', 'Buffalo Bock', 'Hefe Weizen', 'Hope &amp; King Scotch Ale', 'Petunia\'s Pumpkin Ale', 'Dortmunder Local Export Lager', 'West Bank Pub Ale', 'Grand Cru', 'Three Hour Tour', 'India Brown Ale', 'Twisted Reality Barleywine', 'Wee Jack', 'Mango Mama', 'Black H2O Oatmeal Stout', 'Grinch\'s Grog', 'Ol\' Jack Frost Imperial Stout', 'Czar Jack Imperial Stout', 'Twisted Jim', '1800 Old English IPA', 'Masala Mama India Pale Ale']
}, {
    "Brewery": 'Taybeh Brewing Co.',
    "Beers": ['Taybeh Golden']
}, {
    "Brewery": 'Mt. Pleasant Brewing Company',
    "Beers": ['Gruit Ale', 'Train Wreck Ale', 'Steam Engine Stout', 'Cow Catcher Red Ale', 'Iron Horse I.P.A.']
}, {
    "Brewery": 'Carolina Brewing Company',
    "Beers": ['Carolina Summer Wheat', 'Carolina Oktoberfest Lager', 'Carolina Nut Brown Ale', 'Carolina Spring Bock', 'Carolina Pale Ale', 'Carolina Winter Porter', 'Carolina Holiday Imperial IPA', 'Carolina Old 392', 'Carolina India Pale Ale']
}, {
    "Brewery": 'Sly Fox Brewing Company',
    "Beers": ['Seamus\' Irish Red Ale', '2011 Christmas Ale', 'Helles Golden Lager', 'Abbey Extra', 'Seamus Irish Red Ale', 'Christmas Ale', '2012 Christmas Ale', 'Black Raspberry Reserve', 'Royal Weisse', 'Pughtown Porter', 'Gang Aft Agley', 'Incubus', 'Instigator', 'O\'Reilly\'s Irish Stout', 'Ichor', 'Odyssey Imperial IPA', 'Oktoberfest Lager', 'Saison VOS', 'Route 113 India Pale Ale', 'Pikeland Pils', 'Route 113 I.P.A.', 'Instigator Doppelbock', 'Phoenix Pale Ale']
}, {
    "Brewery": 'Brasseurs Du Monde',
    "Beers": ['Houblon Noir', 'L���Exploit��', 'L\'Interdite']
}, {
    "Brewery": 'Funkwerks',
    "Beers": ['Brett Dream', 'Deceit', 'Dark Prophet', 'Aurora', 'Tropic King', 'Tropic King (Mہori King)', 'White']
}, {
    "Brewery": 'Oxbow Brewing Company',
    "Beers": ['Space Cowboy Country Ale', 'Farmhouse Pale Ale']
}, {
    "Brewery": 'Wedge Brewing Company',
    "Beers": ['Wedge Paynes Pale Ale', 'Super Saison', 'Golem', 'Wedge Iron Rail IPA']
}, {
    "Brewery": 'Brouwerij Van Steenberge N.V.',
    "Beers": ['Over The Edge', 'Cherish Peach Lambic', 'Bios Vlaamse Bourgogne', 'Ertvelds Wit', 'Cherish Raspberry Lambic', 'Cherish Kriek Lambic', 'Tripel Van De Garre', 'Leute Bok', 'Celis White', 'Piraat Ale', 'Klokke Roeland', 'Monk\'s Caf�� Flemish Sour Ale', 'Bi��re Du Boucanier Golden', 'Bruegel Amber Ale', 'Bornem Dubbel', 'Gulden Draak (Dark Triple)', 'Bornem Triple', 'Augustijn Ale', 'Augustijn Blond', 'Augustijn Brune', 'Atomium Grand Cru', 'Bi��re Du Boucanier Red', 'Bi��re Du Boucanier Dark', 'Augustijn Grand Cru', 'Gulden Draak Vintage', 'St. Stefanus', 'Gulden Draak 9000 Quadruple', 'Witches\' Brew']
}, {
    "Brewery": 'Choc Beer Co. / Pete\'s Place',
    "Beers": ['Gr�_tzer', 'Winter Baltic-Style Porter', 'Spahnie 363', 'Spring India Pale Ale', 'Belgian-Style Quad', 'Belgian-Style Amber', 'Winter Stout', 'Choctoberfest', 'Summer Belgian-Style Blonde Ale', 'Waving Wheat', 'Super Saison', 'Last Laugh', '1919', 'Pietro Piegari', 'Belgian-Style Dubbel', 'Basement Batch', 'Miner Mishap', 'Bi��re De Garde']
}, {
    "Brewery": 'Boundary Bay "Brewery" &amp; Bistro',
    "Beers": ['ESB', 'Old Bounder', 'Boundary Bay Imperial Oatmeal Stout', 'Boundary Bay IPA', 'Scotch Style Ale', 'Cabin Fever Winter Ale', 'Inside Passage Ale', 'Imperial IPA']
}, {
    "Brewery": 'Renegade Brewing Company',
    "Beers": ['Elevation IPA3', 'Ryeteous Rye IPA']
}, {
    "Brewery": 'Brasserie Lancelot',
    "Beers": ['Cervoise Lancelot']
}, {
    "Brewery": 'DC Brau Brewing Co.',
    "Beers": ['El Hefe Speaks', 'For Others', 'Fermentation Without Representation', 'Penn Quarter Porter', 'The Citizen', 'The Public Ale', 'On The Wings Of Armageddon', 'The Corruption']
}, {
    "Brewery": 'The 11th Hour Anniversary Ale',
    "Beers": ['Pandamonium']
}, {
    "Brewery": 'Portsmouth "Brewery"',
    "Beers": ['Portsmouth 90 Shilling Scotch Ale', 'Portsmouth Biere De Miele', 'Portsmouth Holidaze Porter', 'Portsmouth Sour Brune', 'Portsmouth Oktoberfest', 'Portsmouth Dunkelweizen', 'Portsmouth Grand Cru', 'Portsmouth Belgian Golden (Abbey Ale)', 'Portsmouth Belgian Dubbel', 'Portsmouth Rye Not Pale Ale', 'Portsmouth Winter Rye', 'Portsmouth K�_lsch', 'Portsmouth Belgian Wit', 'Portsmouth Carlyle Cream Ale', 'Portsmouth St. Danmon Abbey Style Tripel', 'Portsmouth Thaizenheimer', 'Portsmouth Hefeweizen', 'Portsmouth Gose', 'Portsmouth Saison', 'Portsmouth Bluebeery', 'Portsmouth Weizenbock', 'Portsmouth Winter Weizen', 'Portsmouth D�_sseldorf Alt', 'Portsmouth Extra Special Bitter', 'Portsmouth Wheat Wine', 'Portsmouth Weizenheimer', 'Portsmouth Le Chat Noir', 'Portsmouth Bi��re De Garde', 'Portsmouth Wild Thang', 'Portsmouth Murphy\'s Law Red Ale', 'Portsmouth Imperial (Baltic) Porter', 'Portsmouth Imperial IPA', 'Portsmouth Oatmeal Stout', 'Portsmouth Dirty Blonde Ale', 'Portsmouth Hop Harvest #2', 'Portsmouth Black Cat Stout', 'Portsmouth Bottle Rocket IPA', 'Portsmouth Milk Stout', 'Portsmouth Hop Harvest #1', 'Portsmouth Barleywine', 'Portsmouth 5 C\'s IPA', 'Portsmouth Whipper Snapper American Mild']
}, {
    "Brewery": 'McLaren Vale Beer Company',
    "Beers": ['Vale Ale']
}, {
    "Brewery": 'Mother\'s Brewing Company',
    "Beers": ['Towhead', 'Winter Grind Coffee Stout', 'Lil\' Helper', 'Three Blind Mice']
}, {
    "Brewery": 'Catawba Valley Brewing Company',
    "Beers": ['Farmer Ted\'s Farmhouse Cream Ale', 'King Coconut Porter', 'White Zombie Ale', 'King Don\'s Original Pumpkin Ale', 'Blackwater Uber Pale Ale', 'Firewater IPA']
}, {
    "Brewery": 'El Toro Brewing Co.',
    "Beers": ['El Toro Oro Golden Ale', 'El Toro Poppy Jasper', 'El Toro Negro Oatmeal Stout', 'El Toro IPA', 'El Toro Deuce Imperial IPA']
}, {
    "Brewery": 'The Bruery',
    "Beers": ['Nottenroth', 'Oude Tart With Sour Cherries', 'BeRazzled', 'Bourbon Barrel Aged 4 Calling Birds', 'Humulus Wet', 'Smoking Wood Rye Barrel Aged', 'Grey Monday', 'Trade Winds Tripel', 'Saison De Lente', 'Rugbr��d', 'Filmishmish', 'Sans Pagaie', 'Hottenroth Berliner Weisse', 'Smoking Wood Bourbon Barrel Aged', 'Rueuze', 'Saison Rue', 'Oude Tart', 'White Oak', 'Tart Of Darkness', 'Otiose', 'Sour In The Rye', 'Mischief', 'Melange No. 1', 'Autumn Maple', 'White Chocolate', 'Loakal Red', 'Humulus Lager', 'Fruet', 'Chocolate Rain', 'Black Tuesday', '5 Golden Rings', 'Melange No. 3', 'Provisions Series: Old Richland']
}, {
    "Brewery": 'Micro-brasserie Saint-Arnould',
    "Beers": ['Vlimeuse']
}, {
    "Brewery": 'Aass "Brewery"',
    "Beers": ['Aass Jule��l', 'Aass Bock']
}, {
    "Brewery": 'Grand Lake Brewing Company',
    "Beers": ['Trail Ridge Red', 'Hoppy\'s One Ton Pale Ale', 'Wooly Booger Nut Brown', 'Shadow Mountain Stout', 'White Cap Wheat', 'Stumpjumper India Pale Ale', 'Plaid Bastard', 'Super Chicken Barley Wine']
}, {
    "Brewery": 'Sea Dog Brewing Company',
    "Beers": ['Sea Dog Old Gollywobbler Brown Ale', 'Sea Dog Windjammer Blonde Ale', 'Sea Dog Winter Ale (Cabin Fever)', 'Sea Dog Bluepaw Blueberry Wheat Ale', 'Sea Dog Riverdriver Hazelnut Porter', 'Sea Dog Old East India Pale Ale']
}, {
    "Brewery": 'Le Bilboquet, Brasseur Artisan',
    "Beers": ['Colonel Cornwallis', 'Le Bilboquet L\'Archange', 'L\'Affriolante', 'MacKroken Flower', 'La Corriveau']
}, {
    "Brewery": 'Potosi Brewing Company',
    "Beers": ['Potosi Pilsener', 'Gandy Dancer Porter', 'Fiddler Oatmeal Stout', 'Good Old Potosi', 'Pure Malt Cave Ale', 'Snake Hollow IPA']
}, {
    "Brewery": '2013 Extra Special Bitter',
    "Beers": ['Renewale']
}, {
    "Brewery": 'Starr Hill "Brewery"',
    "Beers": ['Cryptical Imperial Stout', 'Starr Pils', 'Monticello Reserve Ale', 'Starr Hill Amber Ale', 'The Gift (WinterBock Lager)', 'The Love', 'Dark Starr Stout', 'Northern Lights IPA', 'Boxcar Pumpkin Porter', 'Starr Hill Jomo Lager', 'Double Platinum']
}, {
    "Brewery": 'Outer Banks Brewing Station',
    "Beers": ['Stormy Roses Stout', 'Lemongrass Wheat Ale', '�_lsch']
}, {
    "Brewery": 'Bedele "Brewery"',
    "Beers": ['Bedele Beer', 'Bedele Gold Label Special Beer']
}, {
    "Brewery": 'The Brew Kettle Taproom &amp; Smokehouse / Production Works',
    "Beers": ['Ringneck Chief\'s Rye Ale', 'Summer Solstice', 'Ringneck Big Woody Lager', 'Erie Gold', 'Ruddy Rye', 'Copperhead Red', 'Ringneck Dark Helmet Imperial Schwarzbier', 'Tunguska', 'Winter Warmer (formerly Ringneck)', 'One Eyed Jack (Black Jack Porter)', 'Old 21 Imperial IPA', 'Red Eye PA', 'Four C\'s American Pale Ale', 'White Rajah']
}, {
    "Brewery": 'Strand Brewing Co.',
    "Beers": ['24th Street Pale Ale', 'Atticus']
}, {
    "Brewery": 'Sixpoint',
    "Beers": ['SMP', 'Old Krusher Barleywine', 'Mad Scientists #8: Ich Bin Kein', 'Black Market Porter', 'Eight Days O\' Wheat', 'Express', 'Belgian IPA', 'Harbinger Saison', 'Grand Cr�_e', 'Apollo', 'Otis', 'Bengali Tiger', 'Righteous Ale', 'Sweet Action', 'Gorilla Warfare Coffee Porter', 'Resin', 'Gemini', 'Brownstone', 'The Crisp', '3Beans', 'Autumnation', 'Diesel']
}, {
    "Brewery": 'Microbrasserie Le Naufrageur',
    "Beers": ['St-Barnab��', 'La Corte Real']
}, {
    "Brewery": 'Astoria Brewing Company / Wet Dog Cafe',
    "Beers": ['Bitter Bitch Imperial IPA']
}, {
    "Brewery": 'Paddock Wood Brewing Co.',
    "Beers": ['1000 Monkeys Imperial Stout', 'Barrel Full Of Monkeys Imperial Stout', 'Double Double', 'B��te Noire', 'Black Cat Lager', 'Loki', 'Czech Mate', '606 India Pale Ale']
}, {
    "Brewery": 'Trapp Family Lodge "Brewery"',
    "Beers": ['Trapp Vienna Lager', 'Trapp Golden Helles Lager']
}, {
    "Brewery": 'Spaten-Franziskaner-Br�_u',
    "Beers": ['Spaten Holiday Bock', 'Franziskaner Hefe-Weisse', 'Franziskaner Club-Weisse Kristalklar', 'Franziskaner Hefe-Weisse Dunkel', 'Spaten Dunkel', 'Franziskaner Weissbier', 'Spaten Maibock / Premium Bock', 'Spaten Pils', 'Spaten Oktoberfestbier Ur-M�_rzen', 'Spaten Optimator', 'Spaten M�_nchner Hell (Premium Lager)']
}, {
    "Brewery": 'Brouwerij Straffe Hendrik / Huisbrouwerij De Halve Maan',
    "Beers": ['Straffe Hendrik Heritage 2011', 'Straffe Hendrik Blonde', 'Straffe Hendrik Quadrupel', 'Brugse Zot Dubbel', 'Brugse Zot', 'Straffe Hendrik Brugse Tripel Bier 9��']
}, {
    "Brewery": 'Cavalry Brewing',
    "Beers": ['Dog Soldier Golden Ale', 'Big Wally Porter', 'Hatch Plug Ale']
}, {
    "Brewery": 'Dick\'s Brewing Company',
    "Beers": ['Rye Ale', 'Irish Style Ale', 'Working Man\'s Brown Ale', 'Dick\'s Bottleworks IPA', 'Dicks Pale Ale', 'Belgian-Style Tripel', 'Dick\'s Silk Lady', 'Lava Rock Porter', 'Cream Stout', 'Best Bitter', 'Dick Danger Ale', 'Dick\'s Barley Wine', 'Dick\'s IPA', 'Double Diamond Winter Ale']
}, {
    "Brewery": 'The Hartford Better Beer Co.',
    "Beers": ['Praying Mantis Porter', 'Arch Amber Ale']
}, {
    "Brewery": 'Twisted Pine Brewing Company',
    "Beers": ['Twisted Pine La Petite Saison', 'Billy\'s Chilies Beer (Timberline Series)', 'Twisted Pine Blonde', 'Twisted Pine Hoppy Knight India Black Ale', 'Twisted Pine Cream Style Stout', 'Twisted Pine Honey Brown Ale', 'Reilly\'s Oak Whiskey Red', 'Twisted Pine Hoppy Man IIPA', 'Twisted Pine Hoppy Boy IPA', 'Twisted Pine Amber Ale', 'Big Shot Espresso Stout (Timberline Series)', 'Twisted Pine Northstar Imperial Porter']
}, {
    "Brewery": 'Stillwater Artisanal Ales',
    "Beers": ['Kopstootje', 'Stillwater / Emelisse Holland Oats', 'Stillwater / Mikkeller Rauchstar', 'Debauched (Import Series Vol. 5)', 'Stillwater / Brewer\'s Art Debutante', 'Existent', 'Of Love &amp; Regret (Import Series Vol. 1)', 'Autumnal', 'Stillwater / Hof Ten Dormaal Bronze Age', 'Premium', 'Folklore', 'As Follows', 'Jaded (Import Series Vol. 3)', 'Cellar Door', 'Rule Of Thirds (Import Series Vol. 4)', 'Stateside Saison']
}, {
    "Brewery": 'Red Oak "Brewery"',
    "Beers": ['Battlefield Bock', 'Red Oak Amber']
}, {
    "Brewery": 'East End Brewing Company',
    "Beers": ['The Bitter End', 'East End Witte', 'Fat Gary\'s Nut Brown Ale', 'Monkey Boy', 'Smokestack Heritage Porter', 'Illustration Ale', 'Bigger Hop IPA', 'Big Hop IPA', 'Homewood Reserve', 'Pedal Pale Ale', 'Blackstrap Stout', 'Big Hop Harvest Ale', 'Snow Melt Winter Ale', 'Gratitude']
}, {
    "Brewery": 'Allagash Brewing Company',
    "Beers": ['Allagash Saison Mihm', 'Allagash Prince Tuesday', 'Allagash House Beer', 'Allagash Coolship Cerise', 'Allagash Yakuza', 'Allagash Coolship Red', 'Allagash Dubbel Ale', 'Allagash White', 'Allagash Victor Ale', 'Allagash Four', 'Allagash Interlude', 'Allagash Black', 'Allagash Victoria Ale', 'Allagash Tripel Ale', 'Allagash Grand Cru', 'Allagash Curieux (Bourbon Barrel-Aged Tripel)', 'Allagash Coolship Resurgam', 'Allagash Musette', 'Allagash FV 13', 'Allagash Odyssey', 'Allagash Fluxus 2012', 'Allagash Confluence Ale', 'Allagash Hugh Malone']
}, {
    "Brewery": 'COAST Brewing Company',
    "Beers": ['Single Hop Series: All Simcoe Pale Ale', 'Angry Mash Oatmeal Stout', 'Belafonte', 'Red Legs Scotch Ale', 'Bulls Bay Oyster Stout', 'Dead Arm Pale Ale', 'Porter, Smoked', 'Carnie Fire', 'ALTerior Motive', 'Single Hop Series: All Cascade Pale Ale', 'Blackbeerd Imperial Stout', 'Rye Knot Brown', 'HopArt IPA', 'Boy King Double IPA', '32��/50��', 'Event Horizon Cascadian Dark Ale']
}, {
    "Brewery": 'Central City Brewing',
    "Beers": ['Thor\'s Hammer Barley Wine', 'Red Racer Classic White Ale', 'Red Racer Classic Lager', 'Red Racer Pumpkin Ale', 'Red Racer ESB (Extra Special Bitter)', 'Red Racer Imperial IPA', 'Red Racer Winter Ale', 'Red Racer Classic Pale Ale', 'Red Racer IPA (India Pale Ale)']
}, {
    "Brewery": 'Stella Artois',
    "Beers": ['Stella Artois 4%']
}, {
    "Brewery": 'Xbeeriment I/S',
    "Beers": ['Xbeeriment Madraz IPA', 'XBeeriment Hoppenheimer Imperial IPA', 'Xbeeriment Barack (Xbeeriment #44)', 'Xbeeriment Black Force One']
}, {
    "Brewery": 'Black Bear "Brewery"',
    "Beers": ['Black Bear Pail Ale']
}, {
    "Brewery": 'Ellicottville Brewing Co.',
    "Beers": ['Winter Witte', 'Chocolate Cherry Bomb Imperial Stout', 'Blueberry Wheat', 'Blueberry Wheat Beer', 'Pantius Droppus', 'Mowmasters Ultra Pale Ale']
}, {
    "Brewery": 'Flensburger Brauerei GmbH Und Co. KG',
    "Beers": ['Flensburger Winterbock', 'Flensburger Weizen', 'Flensburger Dunkel', 'Flensburger Gold', 'Flensburger Pilsener']
}, {
    "Brewery": 'Karl Strauss Brewing Company',
    "Beers": ['2012 Symposium Double IPA (San Diego Pale Ale)', 'Two Tortugas', 'Windansea Wheat Hefeweizen', 'Fullsuit Belgian-Style Brown Ale', 'Karl Strauss Oktoberfest Beer', 'Red Trolley Ale', 'Karl Strauss Amber', 'Tower 10 IPA', 'Blackball Belgian IPA', 'Woodie Gold', '23rd Anniversary Bourbon Barrel Aged Old Ale', 'Whistler Imperial Pils', 'Wreck Alley Imperial Stout', 'Pintail Pale Ale', 'Boardwalk Black Rye', 'Tower 20 Double IPA', 'Big Barrel Double IPA']
}, {
    "Brewery": 'Abbaye Mont Des Cats',
    "Beers": ['Mont Des Cats Biere Trappiste']
}, {
    "Brewery": 'Wooden Shoe Brewing Company',
    "Beers": ['Wooden Shoe Bock', 'Wooden Shoe Lager']
}, {
    "Brewery": 'Les Brasseurs Du Temps',
    "Beers": ['Le Diable Au Corps']
}, {
    "Brewery": 'Brauerei Schloss Eggenberg',
    "Beers": ['Naturtr�_b', 'Samichlaus Classic Bier', 'Urbock 23��', 'Mac Queen\'s Nessie', 'Samichlaus Bier Helles', 'Doppelbock Dunkel', 'Hopfenk�_nig']
}, {
    "Brewery": 'Rivertown Brewing Co.',
    "Beers": ['Ville De Rivere Geuze', 'Wit Bier', 'Quaff Bros Hop Flood', 'Bock Beer', 'Ojos Negros', 'Lambic', 'Hop Bomber Pale Ale', 'Roebling Imperial Robust Porter', 'Helles Lager']
}, {
    "Brewery": 'Skinner\'s "Brewery"',
    "Beers": ['Skinner\'s Betty Stogs Bitter', 'Skinner\'s Cornish Knocker Ale']
}, {
    "Brewery": 'Beer Here',
    "Beers": ['Fat Cat Red Ale', 'Kama Citra (H��st Citra)', 'Nordic Rye Ale', 'Dark Hops']
}, {
    "Brewery": 'Mayflower Brewing Company',
    "Beers": ['5th Anniversary Ale', 'Mayflower Pale Ale', 'Mayflower IPA', 'Mayflower Summer Rye', 'Mayflower Golden Ale', 'Mayflower Porter', 'Mayflower Thanksgiving Ale', 'Winter Oatmeal Stout', 'Autumn Wheat Ale', 'Mayflower Spring Hop']
}, {
    "Brewery": 'The Liberal Cup Public House &amp; "Brewery"',
    "Beers": ['Tarbox Cream Stout']
}, {
    "Brewery": 'Black Oak Brewing Co.',
    "Beers": ['Black Oak Oaktoberfest', 'Black Oak Summer Saison', 'Black Oak Nut Brown Ale', 'Black Oak Nutcracker Porter', 'Black Oak Double Chocolate Cherry Stout', 'Black Oak Ten Bitter Years', 'Black Oak Pale Ale']
}, {
    "Brewery": 'Weyerbacher Brewing Co.',
    "Beers": ['Sierra', 'Oscar', 'Uniform', 'Romeo', 'Tango', 'Riserva', 'Slam Dunkel', 'Que��beck', 'Sour Black', 'Fireside Ale', 'Imperial Pumpkin Ale', 'Winter Ale', 'Blithering Idiot', 'Blasphemy', 'Quad', 'Old Heathen Imperial Stout', 'Merry Monks\' Ale', 'Whiskey Barrel Aged', 'Autumn Fest', 'Insanity', 'Tiny', 'Last Chance IPA', 'Heresy', 'White Sun Wit', 'Verboten', 'Seventeen', 'Unfiltered Double Simcoe IPA', 'Double Simcoe IPA']
}, {
    "Brewery": 'Firestone Walker Brewing Co.',
    "Beers": ['Bravo Brown', 'Saucerful O\' Secrets', '805 Blonde Ale', 'Lil\' Opal', 'Unfiltered Double Barrel Ale', 'Solace', 'Parabola', 'Double Barrel Ale', 'Oaktoberfest', 'Double Double Barrel Ale', 'Velvet Merlin', 'Union Jack India Pale Ale', '�_ucaba (Abacus)', 'Velvet Merkin (Bourbon Barrel Aged)', 'Pale 31', 'Double Jack', 'Wookey Jack']
}, {
    "Brewery": 'Wells &amp; Young\'s Ltd',
    "Beers": ['Courage Best Bitter', 'Wells Banana Bread Beer', 'Young\'s London Gold (Kew Gold)', 'Young\'s Special', 'Young\'s Oatmeal Stout', 'Young\'s Bitter', 'Young\'s Double Chocolate Stout', 'Young\'s Winter Warmer', 'Young\'s Ram Rod', 'Courage Directors Bitter', 'Courage Imperial Russian Stout', 'Young\'s Special London Ale', 'Wells Bombardier (English Premium Bitter)']
}, {
    "Brewery": 'Falls City Brewing Company',
    "Beers": ['Falls City Beer']
}, {
    "Brewery": 'Fort Collins Brewing',
    "Beers": ['The Incredible Hop Imperial Belgian Style IPA', 'Summer Fling Ale', 'Hellesbock', 'Big Shot', 'The Incredible Hop Imperial India Style Wheat Ale', 'Z Lager', '1900 Amber Lager', 'Wheat Wine Ale', 'Kidd Lager', 'The Incredible Hop Imperial India Red Ale', 'Double Chocolate Stout', 'Retro Red', 'The Incredible Hop #1', 'Chocolate Stout', 'Rocky Mountain IPA', 'Red Banshee', 'Common Ground']
}, {
    "Brewery": 'Boscos Restaurant &amp; Brewing Co.',
    "Beers": ['Boscos Famous Flaming Stone Beer (Nashville)', 'Boscos Bombay IPA (Nashville)']
}, {
    "Brewery": 'Brasserie de Silly S.A.',
    "Beers": ['Titje Blanche', 'Abbaye De Forest', 'Enghien No��l Triple Blonde', 'La Divine Blond', 'Double Enghien Brune', 'Double Enghien Blonde', 'Scotch De Silly', 'La Divine', 'Saison De Silly']
}, {
    "Brewery": 'Burleigh Brewing Co.',
    "Beers": ['Burleigh Hefeweizen']
}, {
    "Brewery": 'Brewboys',
    "Beers": ['Maiden Ale', 'Seeing Double', 'Ace Of Spades']
}, {
    "Brewery": 'Pivovar Klaster',
    "Beers": ['Klaster Premium', 'Dark Beer / Kl��ster Tmav�� 10%', 'Klaster Winter Beer', 'Premium Lager / Kl��ster Svetl�_ Special 14%']
}, {
    "Brewery": 'Kettle House Brewing Co.',
    "Beers": ['Eddy Out Pale Ale', 'Cold Smoke Scotch Ale', 'Double Haul IPA']
}, {
    "Brewery": 'Dark Horse Brewing Company',
    "Beers": ['King Of The Forest', 'Aigre (Sour) Plead The 5th', 'Monster29', 'Dark Horse Lambeak Wants Peachy', 'Bourbon Barrel Monster 29', 'Dark Horse Raspberry Ale', 'Dark Horse Rod', 'Dark Horse Scotty Karate Scotch Ale', 'Dark Horse Sapient Trip Ale', 'Dark Horse Fore Smoked Stout', 'Dark Horse Tres Blueberry Stout', 'Dark Horse Amber Ale', 'Dark Horse Perkulator Coffee Dopplebock', 'Plead The 5th Imperial Stout', 'Dark Horse 4 Elf', 'Dark Horse Boffo Brown Ale', 'Dark Horse Reserve Special Black Ale', 'Three Guy Off The Scale Barley Wine', 'Dark Horse Crooked Tree IPA', 'Dark Horse Bourbon Barrel Aged Plead The 5th', 'Dark Horse Double Crooked Tree IPA', 'Dark Corner (Black Cap)', 'Kmita Kolsch', 'Dark Horse Thirsty Trout Porter', 'Dark Horse One Oatmeal Stout Ale', 'Dark Horse Too Cream Stout']
}, {
    "Brewery": 'BFM Brasserie Des Franches-Montagnes',
    "Beers": ['La Mandragore', 'La Dragonne', 'La Torpille', 'La Meule', 'Spike &amp; J��r��me���s Cuv��e D��lirante (Collaboration Ale)', 'Douze', 'Abbaye De Saint Bon-Chien', 'Jurassian Imperial Stout (Cuv��e Alex Le Rouge)']
}, {
    "Brewery": 'Portland Brewing Company',
    "Beers": ['MacTarnahan\'s Lip Stinger', 'MacTarnahan\'s Full Bloom Craft Lager', 'MacTarnahan\'s Amber Ale', 'MacTarnahan\'s Summer Grifter', 'MacTarnahan\'s Winter Humbug\'r Ale', 'MacTarnahan\'s Spine Tingler', 'MacTarnahan\'s Sling Shot Extra Pale Ale', 'MacTarnahan\'s Goose Bump']
}, {
    "Brewery": 'Great Adirondack Steak And Seafood Co.',
    "Beers": ['Adirondack Abbey Ale', 'John Brown Pale Ale']
}, {
    "Brewery": 'Mother Earth Brew Co.',
    "Beers": ['Kismet', 'Primordial Imperial IPA']
}, {
    "Brewery": 'HaandBryggeriet',
    "Beers": ['Farewell Ale', 'Sur Megge', 'Norwegian Wood', 'Sweet &amp; Sour', 'R��yk Uten Ild (Smoke Without Fire)', 'Kr��kkebic', 'HaandBic', 'Hesje��l', 'India Pale Ale', 'Bestefar', 'Dark Force', 'Haandbakk', 'Nissefar', 'Porter', 'Akevitt Porter (Barrel-Aged Porter)', 'Odin\'s Tipple', 'Costa Rica (Coffee Porter)', 'Dobbel Dose (Dobbel Dram)']
}, {
    "Brewery": 'The Brewer\'s Art',
    "Beers": ['Brewer\'s Art St. Festivus Holiday Ale', 'Brewer\'s Art Cerberus Tripel', 'Brewer\'s Art Coup De Boule', 'Brewer\'s Art La Petroleuse', 'Brewer\'s Art Proletary Ale', 'Brewer\'s Art Resurrection', 'Brewer\'s Art Green Peppercorn Tripel', 'Brewer\'s Art Le Canard', 'Brewer\'s Art Ozzy Ale']
}, {
    "Brewery": 'Brasserie Dieu Du Ciel',
    "Beers": ['Pionni��re', 'Equinoxe Du Printemps (Vieillie En F��t De Ch��ne)', 'Charbonniere', 'D��CIBeL', 'Vaisseau Des Songes', 'Route Des ��pices (Ale Rousse Au Poivre)', 'Solstice D\'��t�� Aux Framboises', 'Ros��e D\'hibiscus', 'Mea Culpa', '6i��me Soir', 'Isseki Nicho', 'Grande Noirceur', 'Derni��re Volont�� R��serve Sp��ciale (Vieillie En F��t De Pinot Noir)', 'Paienne', 'Rigor Mortis ABT', 'Derni��re Volont��', '��lixir C��leste', 'D��esse Nocturne', 'Blanche Du Paradis', 'Penombre', '��quinoxe Du Printemps', 'Solstice D\'hiver R��serve Sp��ciale (Vieillie En F��t De Ch��ne)', 'Chaman', 'L\'Herbe �� D��tourne', 'Solstice D\'hiver', 'Blanche Neige', 'Aphrodisiaque', 'Corne Du Diable', 'P��ch�� Mortel (Bourbon Barrel)', 'Rescousse', 'P��ch�� Mortel (Imperial Stout Au Cafe)']
}, {
    "Brewery": 'Craftsman Brewing Co.',
    "Beers": ['Craftsman Heavenly Hefeweizen', 'Craftsman Cabernale', 'Craftsman Triple White Sage', 'Craftsman Honesty Ale', 'Craftsman Holiday Spruce', 'Craftsman IPA', 'Craftsman 1903', 'Craftsman Edgar\'s Ale']
}, {
    "Brewery": 'Boneyard Beer Company',
    "Beers": ['Suge Knite', 'Armored Fist Double CDA', 'Notorious Triple IPA', 'RPM IPA', 'Hop Venom Double IPA']
}, {
    "Brewery": 'Captain Lawrence Brewing Co.',
    "Beers": ['Barrel Select Gold', 'Drew\'s Brew', 'IPA', 'Ginger Man Ale', 'Mother Barrel Select', 'Rosso E Marrone', 'Barrel Select Black', 'Smoke From The Oak (Rum Barrel Imperial Version)', 'Pleasantville Smoked Porter', 'Brown Ale', 'Sun Block Witte', 'Smoke From The Oak (Wine Barrel Imperial Version)', 'St. Vincent\'s Dubbel', 'Hops N\' Roses', 'Smoke From The Oak (Apple Brandy Imperial Version)', 'Golden Delicious', 'Captain\'s K�_lsch', 'Cuvee De Castleton', 'Brown Bird Brown Ale', 'Freshchester Pale Ale', 'Liquid Gold', 'Captain\'s Reserve Imperial IPA', 'Nor\' Easter', 'Xtra Gold Tripel', '5 Years Later']
}, {
    "Brewery": 'Cherry Vanilla Infused',
    "Beers": ['Imperial Stout Trooper']
}, {
    "Brewery": 'Damm S. A.',
    "Beers": ['A.K. Damm', 'Voll Damm', 'Damm Barcelona', 'Estrella Damm Inedit', 'Estrella Damm Daura']
}, {
    "Brewery": 'La Barberie',
    "Beers": ['Brasse-Camarade', 'Rousse Bitter']
}, {
    "Brewery": 'Silver City Brewing Co.',
    "Beers": ['Bavarian Style Hefeweizen', 'Old Scrooge Ale', 'Panther Lake Porter', 'Ridgetop Red', 'Indianola IPA', 'Fat Scotch Ale', 'Whoop Pass IPA']
}, {
    "Brewery": 'Bayou Teche "Brewery"',
    "Beers": ['LA-31 Bi��re Noire', 'LA-31 Boucan��e', 'LA-31 Bi��re P��le', 'LA-31 Grenade']
}, {
    "Brewery": 'Capital "Brewery"',
    "Beers": ['Manoomator', 'William Brennan\'s Golden Pils', 'Kloster Weizen', 'Eternal Flame', 'Capital Pilsner', 'Bavarian Lager', 'Winter Sk��l', 'Weizen Doppelbock', 'Island Wheat', 'Hop Cream', 'Fest (Summer Fest)', 'Wild Rice', 'Supper Club Lager', 'Blonde Doppelbock', 'EisPhyre', 'Wisconsin Amber', 'Capital Dark', 'Autumnal Fire', 'U.S. Pale Ale', 'Dark Doppelbock']
}, {
    "Brewery": 'Brauerei Gilde',
    "Beers": ['Gilde Pilsener']
}, {
    "Brewery": 'Brand Bierbrouwerij',
    "Beers": ['Brand Dubbelbock']
}, {
    "Brewery": 'Picobrouwerij Alvinne / Den Bierzolder',
    "Beers": ['Kerasus', 'Melchior Oak Aged Calvados Barrel', 'Alvinne Mano Negra', 'Wild Undressed', 'Cuvee D\'Erpigny', 'Pipedream', 'Melchior', 'Cuvee Freddy', 'Podge Oak Aged Bourgogne Barrel (The Oak Podge)', 'Balthazar', 'Alvinne Extra Restyled', 'Gaspar Ale', 'Podge Belgian Imperial Stout']
}, {
    "Brewery": 'Brooklyn "Brewery"',
    "Beers": ['Blue Apron Ale', 'Shackmeister Ale', 'Brooklyner Weisse', 'Brooklyn East India Pale Ale', 'Brooklyn Black Chocolate Stout', 'Brooklyn Oktoberfest Beer', 'Brooklyn Manhattan Project', 'Brooklyn Monster Ale', 'Brooklyn Ale / Pennant Ale \'55', 'Blanche De Brooklyn', 'Brooklyn Fiat Lux', 'Brooklyn Pilsner', 'Companion Ale', 'Post Road Pumpkin Ale', 'Brooklyn Summer Ale', 'Brooklyn Winter Ale', 'Brooklyn Lager', 'Brooklyn Main Engine Start', 'Brooklyn Brown Ale', 'Brooklyn Sorachi Ace', 'There Will Be Black (Brewmaster\'s Reserve Winter 2012)', 'Brooklyn Local 1', 'Brooklyn Black OPS', 'Brooklyner-Schneider Hopfen-Weisse', 'Brooklyn Local 2', 'Brooklyn Blast Pale Ale', 'Gold Standard Export Kellerbier', 'Mary\'s Maple Porter (Brewmaster\'s Series)', 'Brooklyn Dry Irish Stout', 'Brooklyn Silver Anniversary Lager']
}, {
    "Brewery": 'Brouwerij De Horste',
    "Beers": ['Beatrix']
}, {
    "Brewery": 'Cortland Beer Company',
    "Beers": ['Flight Level 410 Bourbon Barrel Aged', 'Sunrise Coffee Stout']
}, {
    "Brewery": 'L�_wenbr�_u Buttenheim',
    "Beers": ['Ungespundetes Lagerbier']
}, {
    "Brewery": 'Toppling Goliath Brewing Company',
    "Beers": ['Naughty 90', 'ZeeLander', 'PseudoSue', 'Golden Nugget IPA']
}, {
    "Brewery": 'Kennebec River "Brewery"',
    "Beers": ['Kennebec River India Pale Ale', 'Let \'er Drift Summer Ale']
}, {
    "Brewery": 'Marin Brewing Company',
    "Beers": ['Raspberry Trail Ale', 'Bluebeery Flavored Ale', 'St. Brendan\'s Irish Red Ale', 'Albion Amber', 'Marin Hefe Weiss', 'Hefe Doppelweizen', 'Marin Tripel Dipsea Belgian Style Ale', 'Stinson Beach Peach', 'Brass Knuckle', 'Point Reyes Porter', 'Mt. Tam Pale Ale', 'Marin India Pale Ale', 'Marin Star Brew-Triple Wheat Ale', 'San Quentin Breakout Stout', 'Hoppy Holidaze', 'Bourbon Barrel-Aged Old Dipsea With Brett', 'Old Dipsea Barleywine Style Ale', 'White Knuckle Double IPA']
}, {
    "Brewery": 'Buffalo Bill\'s "Brewery"',
    "Beers": ['Strawberry Blonde Ale', 'Buffalo Bill\'s Blueberry Oatmeal Stout', 'Alimony Ale']
}, {
    "Brewery": 'Cerveza Jerome',
    "Beers": ['Cerveza Jerome Rubia', 'Cerveza Jerome Roja', 'Cerveza Jerome Diablo', 'Cerveza Jerome Negra']
}, {
    "Brewery": 'Lancaster "Brewery" Company Ltd',
    "Beers": ['Blonde', 'Black']
}, {
    "Brewery": 'Topvar "Brewery"',
    "Beers": ['Topvar Premium Lager']
}, {
    "Brewery": 'Pivovar Breznak',
    "Beers": ['Breznak Lager']
}, {
    "Brewery": 'Pyramid Breweries, Inc.',
    "Beers": ['Oatmeal Stout', 'Pale Ale', 'Audacious Apricot Ale', 'Oktoberfest', 'Fling Pale Ale', 'Snow Cap', 'Curve Ball Blonde Ale', 'Outburst Imperial IPA', 'Discord Dark IPA', 'Juggernaut Red Ale', 'Thunderhead IPA']
}, {
    "Brewery": 'Brouwerij Strubbe',
    "Beers": ['Keyte Dobbel Tripel', 'Dikke Mathile', 'Ichtegems Ale (Oud Bruin)', 'Flemish Red Ale Grand Cru', 'Ichtegem\'s Grand Cru']
}, {
    "Brewery": 'Hilliard\'s Beer',
    "Beers": ['Amber Ale', 'Saison']
}, {
    "Brewery": 'Kaimai Brewing Co.',
    "Beers": ['Porter\'s Rye Ale']
}, {
    "Brewery": 'Burnside Brewing Co.',
    "Beers": ['Sweet Heat', 'Burnside IPA', 'Burnside Oatmeal Pale Ale']
}, {
    "Brewery": 'Garrison Brewing Company',
    "Beers": ['3 Fields Harvest Ale', 'Tall Ship Amber Ale', 'Raspberry Wheat Ale', 'Martello Stout', 'Spruce Beer', 'Oktoberfest Brau', 'Sugar Moon Maple Ale', 'Winter Warmer', 'Grand Baltic Porter', 'Pils', 'Black IPA', 'Ol\' Fog Burner', 'Hopyard Pale']
}, {
    "Brewery": 'Mankato "Brewery"',
    "Beers": ['Stickum', 'Mankato Original']
}, {
    "Brewery": 'Whistler Brewing Company',
    "Beers": ['Paradise Valley Grapefruit Ale', 'Classic Pale Ale', 'Black Tusk Ale']
}, {
    "Brewery": 'Barley\'s Brewing Company',
    "Beers": ['Barley\'s Barleywine!', 'Barley\'s Mac Lenny\'s Scottish Ale', 'Barley\'s Pale Ale', 'Barley\'s Four Seas Imperial IPA', 'Barley\'s Ivan Porter', 'Barley\'s Centennial India Pale Ale', 'Barley\'s Alexander\'s Russian Imperial Stout']
}, {
    "Brewery": 'Hop Back "Brewery" plc',
    "Beers": ['Hopback Thunderstorm', 'Hop Back Pickled Santa', 'Hopback Entire Stout', 'Hopback Summer Lightning']
}, {
    "Brewery": 'Great Crescent "Brewery"',
    "Beers": ['Great Cresent IPA', 'Coconut Porter', 'Great Crescent Bourbon\'s Barrel Stout']
}, {
    "Brewery": 'White Birch Brewing',
    "Beers": ['White Birch Barrel Aged Night Falls', 'White Birch Barley Wine Ale', 'White Birch Crown Of Gold', 'White Birch Farmhouse Red', 'White Birch Tavern Ale', 'White Birch Berliner Weisse', 'White Birch Indulgence Ale', 'White Birch Belgian Style Pale Ale', 'White Birch Barrel Aged Tripel', 'White Birch Hooksett Ale', 'White Birch Tripel', 'White Birch Barrel Aged Barley Wine', 'White Birch Hop Session Ale', 'White Birch Nyx']
}, {
    "Brewery": 'Hopothesis Beer Company',
    "Beers": ['Hopothesis IPA']
}, {
    "Brewery": 'Emerald City Beer Company',
    "Beers": ['Dottie Seattle Lager']
}, {
    "Brewery": 'East Coast Beer Company',
    "Beers": ['Winter Rental Black Lager', 'Beach Haus Classic American Pilsner']
}, {
    "Brewery": 'Yazoo Brewing Company',
    "Beers": ['Gerst Amber', 'Fortuitous', 'Onward Stout', 'Hefeweizen', 'Sly Rye Porter', 'Rye Saison', 'Dos Perros', 'Sue']
}, {
    "Brewery": 'Texelse Bierbrouwerij',
    "Beers": ['Texels Skuumkoppe']
}, {
    "Brewery": 'Upslope Brewing Company',
    "Beers": ['Upslope Craft Lager', 'Upslope Pumpkin Ale', 'Upslope India Pale Ale', 'Foreign Style Stout', 'Upslope Pale Ale']
}, {
    "Brewery": 'Crabtree Brewing Company',
    "Beers": ['Eclipse Black IPA', 'Golden 8', 'Twisted Creek Wheat', 'Boxcar Brown', 'Ginger Bee Beer']
}, {
    "Brewery": 'Flying Dog "Brewery"',
    "Beers": ['Disobedience', 'Lucky S.O.B.', 'Secret Stash Harvest Ale', 'In-Heat Wheat', 'Single Hop Imperial (Chinook)', 'Old Scratch Amber Lager', 'Woody Creek White', 'Dogtoberfest', 'K-9 Cruiser Winter Ale', 'Pearl Necklace Oyster Stout', 'Doggie Style Classic Pale Ale', 'Wild Dog Barrel-Aged Gonzo Imperial Porter', 'Road Dog Porter', 'Snake Dog IPA', 'Gonzo Imperial Porter', 'Horn Dog Barley Wine Style Ale', 'Wild Dog Barrel-Aged Horn Dog', 'Single Hop Imperial IPA (Centennial)', 'Dog Schwarz', 'Table For Two', 'Garde Dog', 'Single Hop Imperial IPA (El Dorado)', 'UnderDog Atlantic Lager', 'Raging Bitch Belgian-Style IPA', 'Wildeman Farmhouse IPA', 'The Fear', 'Double Dog Double Pale Ale', 'Kujo Imperial Coffee Stout']
}, {
    "Brewery": 'Northampton "Brewery"',
    "Beers": ['Daniel Shay\'s Best Bitter']
}, {
    "Brewery": 'Hyouko Yashiki No Mori "Brewery"',
    "Beers": ['Samurai Barley Ale']
}, {
    "Brewery": 'Pivovarsk�_ D��m',
    "Beers": ['Coffee Beer']
}, {
    "Brewery": 'Knee Deep Brewing Company',
    "Beers": ['McCarthy\'s Bane', 'HopStar IPA', 'Immigration Red Ale (IRA)', 'Ryedentity Crisis', 'Imperial Tanilla Porter', 'Knee Deep IPA', 'Tanilla Porter', 'Hoptologist DIPA', 'Citra Extra Pale Ale', 'Simtra', 'Hop Shortage']
}, {
    "Brewery": 'Brasserie La Binchoise (Malterie des Remparts)',
    "Beers": ['La Binchoise Bi��re Des Ours (Berenbier)', 'Belgoo Magus', 'La Binchoise Blonde Tradition', 'La Binchoise Brune Tradition']
}, {
    "Brewery": 'Coop Ale Works',
    "Beers": ['Territorial Reserve Wild Wheat Wine Ale', 'Horny Toad Cerveza', 'DNR Belgian-Style Golden Ale', 'F5 IPA', 'Native Amber', 'Territorial Reserve Oak Aged Imperial Stout']
}, {
    "Brewery": 'Deschutes "Brewery"',
    "Beers": ['Super Jubel', 'The Dissident', 'The Stoic', 'Black Butte Porter', 'Bachelor ESB', 'Cascade Ale', 'Conflux No. 1 (Collage)', 'Quail Springs IPA', 'Obsidian Stout', 'Black Butte XXIV', 'Green Lakes Organic Ale', 'Cinder Cone Red', 'Mirror Pond Pale Ale', 'Conflux No. 2', 'Chainbreaker White IPA', 'Inversion IPA', 'Fresh Hop Mirror Pond', 'Jubelale', 'Red Chair NWPA', 'Deschutes River Ale', 'Twilight Summer Ale', 'Hop In The Dark Cascadian Dark Ale', 'The Abyss', 'Mirror Mirror', 'Hop Henge Experimental IPA', 'Hop Trip (Bond Street Series)', 'Chasin\' Freshies']
}, {
    "Brewery": 'L\'Am��re �� Boire',
    "Beers": ['Cerna Hora', 'Stout Imperial']
}, {
    "Brewery": 'Brouwerij Gaverhopke',
    "Beers": ['Bitter Sweet Symphony', 'Het Kerstbier (Green Cap)', 'Koerseklakske', 'Gaverhopke Extra', 'Gaverhopke Zingende Blondine']
}, {
    "Brewery": 'Snowy Mountains "Brewery"',
    "Beers": ['Razorback']
}, {
    "Brewery": 'Great Waters Brewing',
    "Beers": ['Saint Peter Pale Ale', 'Mad Hatter IPA', 'The Blackwatch Oat Stout']
}, {
    "Brewery": 'Appalachian Brewing Company',
    "Beers": ['Celtic Knot Irish Red Ale', 'Dom Blonde K�_lsch', 'Abbey Roade', 'Zoigl Star Lager', 'Hinterland Hefe Weizen', 'Volks Weizenbock', 'Anniversary Maibock', 'Jolly Scot Scottish Ale', 'Water Gap Wheat', 'Pennypacker Porter', 'Purist Pale Ale', 'Susquehanna Stout', 'Mountain Lager', 'Outta Focus Double IPA', 'Broad Street Barley Wine', 'Trailblaze Organic Brown Ale', 'Grinnin\' Grizzly Spiced Ale', 'Kipona Fest', 'Peregrine Pilsner', 'Hoppy Trails IPA', 'Batch 666']
}, {
    "Brewery": 'Mogollon Brewing Company',
    "Beers": ['Superstition Pale Ale', 'Apache Trout Stout', 'Wapiti Amber Ale']
}, {
    "Brewery": 'Cascade Brewing / Raccoon Lodge &amp; Brewpub',
    "Beers": ['Apple Pie', 'Cascade Blueberry Ale', 'Cascade Noyaux', 'Cascade Kriek Ale', 'Figaro', 'Cascade Sang Rouge', 'Cascade Sang Noir', 'Cascade Nightfall Blackberry', 'Cascade Sang Royal', 'Cascade Cuv��e Du Jongleur', 'Cascade Summer Gose', 'Cascade Apricot Ale', 'Cascade Strawberry', 'Cascade The Vine', 'Cascade Vlad The Imp Aler', 'Cascade Bourbonic Plague']
}, {
    "Brewery": 'McNeill\'s "Brewery"',
    "Beers": ['McNeill\'s Green Mountain Gold', 'McNeill\'s Oktoberfest', 'McNeill\'s Reagin\'s Stout', 'McNeill\'s Professor Brewhead\'s Brown Ale', 'McNeill\'s Summer IPA', 'McNeill\'s Firehouse Amber Ale', 'McNeill\'s Slop Bucket Double Brown', 'McNeill\'s Blond Bombshell (Big Nose Blond)', 'McNeill\'s Ruby Ale', 'McNeill\'s Pullman\'s Porter', 'McNeill\'s Extra Special Bitter', 'McNeill\'s Dark Angel Imperial Stout', 'McNeill\'s Dead Horse IPA', 'McNeill\'s Champ Ale', 'McNeill\'s Sunshine India Pale Ale', 'McNeill\'s Old Ringworm', 'McNeill\'s Warlord Imperial IPA', 'McNeill\'s Oatmeal Stout']
}, {
    "Brewery": 'Foothills Brewing Company',
    "Beers": ['Irish Red Ale', 'Cottonwood Pumpkin Spiced Ale', 'Salem Gold', 'Gruffmeister 8', 'Cottonwood ENDO India Pale Ale', 'Pilot Mountain Pale Ale', 'Hurricane Hefeweizen', 'Torch Pilsner', 'Barrel Aged People\'s Porter', 'Olde Rabbit\'s Foot', 'Sexual Chocolate', 'Jade', 'Carolina Blonde', 'Hoppyum IPA', 'Seeing Double IPA', 'India Style Brown Ale', 'Bourbon Barrel Aged Stout', 'People\'s Porter', 'Barrel Aged Sexual Chocolate']
}, {
    "Brewery": 'Granite "Brewery" &amp; Restaurant',
    "Beers": ['Keefe\'s Irish Stout', 'Gin Lane Ale', 'Peculiar', 'Hoppin\' Mad']
}, {
    "Brewery": 'Mammoth Brewing Company',
    "Beers": ['Devil\'s Post Pale Ale', 'Floating Rock Hefeweizen', 'Charley Wine', 'Hair Of The Bear', 'High Country Pilsner ("Golden Trout Pilsner")', 'Real McCoy Amber Ale', 'IPA 395', 'Double Nut Brown', 'Paranoid Pale Ale', 'Epic IPA']
}, {
    "Brewery": 'Sun King Brewing Company',
    "Beers": ['Timmie Imperial Stout', 'Chaka', 'Johan The Barleywine', 'Wee Mac Brown', 'Isis', 'Sunlight Cream Ale', 'Wee Muckle', 'Grapefruit Jungle IPA', 'Osiris Pale Ale']
}, {
    "Brewery": 'Brasserie De Brunehaut',
    "Beers": ['Abbaye De St Amand', 'St Martin Cuv��e De No��l', 'St Martin Brune', 'St Martin Blond Ale', 'St Martin Tripel']
}, {
    "Brewery": 'Cathedral Square "Brewery"',
    "Beers": ['Belgian-Style White Ale', 'Belgian-Style Abbey Ale', 'Hail Mary Belgian-Style IPA']
}, {
    "Brewery": 'Moon River Brewing Company',
    "Beers": ['Wild Wacky Wit', 'Savannah Fest Beer', 'The Captain\'s Porter', 'Swamp Fox IPA']
}, {
    "Brewery": 'Crown Valley Brewing &amp; Distilling Co.',
    "Beers": ['Gunslinger Double India Pale Ale', 'Worktruck Wheat', 'Antique Amber Lager', 'Barnwood Blonde', 'Big Bison Ale', 'Old School Pilsener', 'Plowboy Porter', 'Wooden Nickel India Pale Ale']
}, {
    "Brewery": 'Empyrean Brewing Company',
    "Beers": ['Aries M�_rzen Oktoberfest', 'Watch Man IPA', 'Chaco Canyon Gold', 'Burning Skye Scottish Style Ale', 'Third Stone Brown', 'Dark Side Vanilla Porter', 'LunaSea ESB']
}, {
    "Brewery": 'Whitewater Brewing Co',
    "Beers": ['Belfast Lager', 'Belfast Ale', 'Clotworthy Dobbin']
}, {
    "Brewery": 'Red Brick Station',
    "Beers": ['Something Red', 'Daily Crisis IPA']
}, {
    "Brewery": 'Black Isle "Brewery" Co Ltd',
    "Beers": ['Organic Blonde', 'Organic Yellowhammer', 'Red Kite Ale']
}, {
    "Brewery": 'Blue Point Brewing Company',
    "Beers": ['Blue Point Wet Hops Experiment', 'Surge Protector (Sandy Relief Ale)', 'Blue Point Blueberry', 'Blue Point Winter Ale', 'Blue Point (Sour) Cherry Imperial Stout', 'Blue Point Oatmeal Stout', 'Blue Point Extra Special Bitter', 'Blue Point Toasted Lager', 'Blue Point Old Howling Bastard', 'Blue Point Summer Ale', 'Blue Point Spring Fling', 'Blue Point Oktoberfest', 'Blue Point Pale Ale', 'Toxic Sludge Black IPA', 'Blue Point Rastafa Rye Ale', 'Hoptical Illusion', 'Blue Point White IPA']
}, {
    "Brewery": 'Zea Rotisserie &amp; "Brewery"',
    "Beers": ['Zea Category 5 American Pale Ale', 'Zea Pontchartrain Porter']
}, {
    "Brewery": 'Grand Ridge Brewing Co.',
    "Beers": ['Grand Ridge Supershine', 'Grand Ridge Natural Blonde', 'Grand Ridge Yarra Valley Gold', 'Grand Ridge Moonshine', 'Grand Ridge Gippsland Gold', 'Grand Ridge Hatlifter Stout']
}, {
    "Brewery": 'Emerson\'s "Brewery"',
    "Beers": ['Emersons Taieri George', 'London Porter', 'Old 95', '1812 India Pale Ale', 'Organic Pilsner']
}, {
    "Brewery": 'Monkey Paw Pub &amp; "Brewery"',
    "Beers": ['Rich Man\'s']
}, {
    "Brewery": 'Brasserie Dupont sprl',
    "Beers": ['Blanche De Hainaut Biologique', 'Redor Pils', 'Sp��ciale Belge', 'Foret Blanche', 'Bi��re De Miel Biologique', 'Moinette Blond', 'Monk\'s Stout Dupont', 'Foret', 'Saison Dupont Biologique', 'Avec Les Bons Voeux', 'Bi��re De Bel��il', 'Saison Dupont', 'Avril', 'Moinette Brune', 'Posca Rustica']
}, {
    "Brewery": 'Ipswich Ale "Brewery"',
    "Beers": ['Stone Cat Pumpkin Ale', 'Stone Cat I.P.A.', 'Stone Cat Blonde Ale', 'Ipswich 21st Anniversary Imperial Dark Ale', 'Ipswich 1722 Commemorative Porter', 'Stone Cat E.S.B.', 'Farmington River Brown Ale', 'Farmington River Blonde Ale', 'Ipswich Nut Brown Ale', 'Ipswich Winter Ale', 'Ipswich Original Pale Ale', 'Farmington River Hop River IPA', 'Farmington River Mahogany Ale', 'Ipswich Summer Ale', 'Ipswich Harvest Ale', 'Ipswich Oatmeal Stout', 'Ipswich India Pale Ale (I.P.A.)', 'Ipswich Dark Ale']
}, {
    "Brewery": 'Beau\'s All Natural Brewing Company',
    "Beers": ['Farm Table Beer', 'Beaver River I.P.Eh?', 'Lug Tread Lagered Ale', 'Night M�_rzen', 'Festivale', 'Bog Water']
}, {
    "Brewery": 'Kassik\'s Kenai Brew Stop',
    "Beers": ['Morning Wood IPA']
}, {
    "Brewery": 'LaConner Brewing Company',
    "Beers": ['Tannenbaum']
}, {
    "Brewery": 'Black Raven Brewing Co.',
    "Beers": ['Pour Les Oiseaux', 'Trickster IPA', 'Wisdom Seeker']
}, {
    "Brewery": 'Argus "Brewery"',
    "Beers": ['California Steam', 'Pegasus IPA']
}, {
    "Brewery": 'Magnotta "Brewery"',
    "Beers": ['True North Wunder Weisse', 'True North Strong Ale', 'True North Copper Altbier', 'True North India Pale Ale']
}, {
    "Brewery": 'Sonoran Brewing Company',
    "Beers": ['Old Saguaro Barleywine Style Ale', 'Sonoran Cordillera Blanca', 'Victorian I.P.A.']
}, {
    "Brewery": 'To ��l',
    "Beers": ['Walk On Water', 'Sans Fronti��re', 'Mochaccino Messiah', 'Final Frontier IIPA', 'First Frontier IPA', 'Ov-ral', 'Sleep Over Coffee IIPA', 'Black Ball Porter', 'Goliat']
}, {
    "Brewery": 'Brouwerij De Landtsheer NV',
    "Beers": ['Malheur 6��', 'Malheur Brut Noir (Black Chocolate)', 'Malheur 10��', 'Malheur Bi��re Brut (Brut Reserve)', 'Malheur 12��']
}, {
    "Brewery": 'Valley Brewing Company',
    "Beers": ['Decadence Pomegranate Saison', 'London Tavern Ale', 'Old Inventory Barley Wine', 'Cobra-Hood IPA', 'Uberhoppy IPA']
}, {
    "Brewery": 'Pelican Pub &amp; "Brewery"',
    "Beers": ['Surfer\'s Summer Ale', 'Ankle-Buster Ale', 'Le Pelican Brun', 'MacPelican\'s Scottish Style Ale', 'MacPelican\'s Wee Heavy', 'Bad Santa', 'Tsunami Stout', 'Saison Du Pelican', 'Grand Cru De Pelican', 'Doryman\'s Dark Ale', 'Kiwanda Cream Ale', 'Stormwatcher\'s Winterfest', 'Mother Of All Storms']
}, {
    "Brewery": 'North Peak Brewing Company',
    "Beers": ['Sinuous', 'Hooligan', 'Blitzen Festivus Ale', 'Majestic Wheat Ale', 'Archangel Summer Wheat', 'Hoodoo Midwest Wet Hop IPA', 'North Peak Darkangel', 'North Peak Siren Amber', 'Burly Belgo India Pale Ale', 'Vicious American Wheat IPA', 'Dubious Black Chocolate Stout', 'Wanderer Session India Pale Ale', 'Diabolical India Pale Ale', 'Furry Black India Pale Ale']
}, {
    "Brewery": 'Das Kleine Brauhaus Zu Bergedorf Luitbr�_u',
    "Beers": ['Konig Pilsener']
}, {
    "Brewery": 'Carton Brewing Company',
    "Beers": ['Monkey Chased The Weasel', '077XX', 'Boat Beer']
}, {
    "Brewery": 'Willimantic Brewing Co.',
    "Beers": ['Willimantic Pony Espresso Stout', 'Willimantic V.E.G. IPA', 'Willimantic Pushing The Envelope IPA', 'Willimantic Rail Mail Rye']
}, {
    "Brewery": 'Red Brick Brewing Company',
    "Beers": ['Red Brick Oktoberfest', 'Red Brick Dog Days Ale', 'Red Brick Smoked Vanilla Gorilla', 'Red Brick 17th Anniversary', 'Red Brick Brown Ale', 'Red Brick Old Stock', 'Laughing Skull Amber Ale', 'Red Brick Double IPA', 'Red Brick Double Chocolate Oatmeal Porter', 'Red Brick Blonde', 'Red Brick Porter', 'Hoplanta', '#\'s Ale']
}, {
    "Brewery": 'Santa Fe Brewing Company',
    "Beers": ['Hefeweizen Ale', 'Kickin\' Chicken Bourbon Barrel Barley Wine', 'Nut Brown Ale', 'State Pen Porter', 'Chicken Killer Barley Wine', 'Freestyle Pilsner', 'Pale Ale', 'Happy Camper IPA', 'Imperial Java Stout']
}, {
    "Brewery": 'Thirsty Bear Brewing Company',
    "Beers": ['Meyer ESB', 'Kozlov Stout', 'Howard Street IPA']
}, {
    "Brewery": 'Private Landbrauerei Sch�_nram',
    "Beers": ['Sch�_nramer Festweisse', 'Sch�_nramer Gold', 'Schonramer Pils']
}, {
    "Brewery": 'Mountain State Brewing Co.',
    "Beers": ['Seneca Indian Pale Ale', 'Miner��s Daughter Oatmeal Stout']
}, {
    "Brewery": 'St. Peter\'s "Brewery" Co Ltd',
    "Beers": ['St. Peter\'s Summer Ale', 'St. Peter\'s Honey Porter', 'St. Peter\'s Organic Ale', 'St. Peter\'s Organic English Ale', 'St. Peter\'s English Ale', 'St. Peter\'s Organic Best Bitter', 'St. Peter\'s India Pale Ale', 'St. Peter\'s Old-Style Porter', 'St. Peter\'s Best Bitter', 'St. Peter\'s Fruit Beer (Grapefruit)', 'St. Peter\'s Cream Stout', 'St. Peter\'s Ruby Red Ale', 'St. Peter\'s Golden Ale', 'St. Peter\'s Winter Ale']
}, {
    "Brewery": 'Dugges Ale- &amp; Porterbryggeri AB',
    "Beers": ['Rudolf Ren Ale (2010)', 'Kals Stout', 'Never Mind The Bollox!', 'Idjit!', 'High Five!', '�_ Idjit!']
}, {
    "Brewery": 'Buzzards Bay Brewing',
    "Beers": ['ThEgolDenFlounder', 'Moby D', 'Horseneck Golden IPA']
}, {
    "Brewery": 'Lost Coast "Brewery" and Cafe',
    "Beers": ['Chocolate Porter', 'Tangerine Wheat', 'Raspberry Brown', 'Double Trouble IPA', 'Great White', 'Alleycat Amber', 'Winterbraun', 'Downtown Brown', '8 Ball Stout', 'Lost Coast Pale Ale', 'Indica India Pale Ale']
}, {
    "Brewery": 'McGuire\'s Irish Pub',
    "Beers": ['McGuire\'s Irish Stout']
}, {
    "Brewery": 'La Voie Malt��e',
    "Beers": ['Polissonne', 'Criminelle', 'Graincheuse']
}, {
    "Brewery": 'Wild Rose "Brewery" &amp; Taproom',
    "Beers": ['Alberta Crude Oatmeal Stout', 'Barley Wine', 'WRed Wheat', 'S.O.B. (Special Old Bitter)', 'WRaspberry Ale', 'Velvet Fog', 'Cherry Porter', 'Brown Ale', 'IPA (India Pale Ale)']
}, {
    "Brewery": 'Fulton Beer',
    "Beers": ['The Libertine', 'Lonely Blonde', 'Sweet Child Of Vine', 'War And Peace', 'The Worthy Adversary']
}, {
    "Brewery": 'Berliner-Schultheiss-Brauerei GmbH',
    "Beers": ['Schultheiss Pilsner']
}, {
    "Brewery": 'Lumberyard Brewing Company',
    "Beers": ['Red Ale', 'Big Rapid Imperial Red Ale', 'Flagstaff IPA']
}, {
    "Brewery": 'Pivovar Zlatopramen',
    "Beers": ['Zlatopramen 11��']
}, {
    "Brewery": 'Moorilla Estate',
    "Beers": ['Moo Brew Dark Ale', 'Moo Brew Wheat Beer', 'Moo Brew Pale Ale']
}, {
    "Brewery": 'Brauerei Hirt GmbH',
    "Beers": ['Hirter 1270', 'Hirter Privat Pils', 'Hirter Morchl']
}, {
    "Brewery": 'Long Trail Brewing Co.',
    "Beers": ['Jay Peak Tram Ale', 'Double White (Brewmaster Series)', 'Long Trail Ale', 'Hit The Trail Ale', 'Hibernator', 'Harvest', 'Belgian White', 'Double Bag', 'Triple Bag', 'Pollenator', 'Double IPA (Brewmaster Series)', 'Pumpkin Ale', 'Traditional IPA', 'Imperial Pumpkin (Brewmaster Series)', 'Coffee Stout (Brewmaster Series)', 'Centennial Red (Brewmaster Series)', 'Imperial Porter (Brewmaster Series)']
}, {
    "Brewery": 'Back Road "Brewery"',
    "Beers": ['No. 9 Barleywine', 'American Pale Ale', 'Belle Gunnes Stout', 'Midwest IPA']
}, {
    "Brewery": 'The Blue Ridge Brewing Co.',
    "Beers": ['XXX Total Eclipse Stout']
}, {
    "Brewery": 'Klosterbrauerei Reutberg',
    "Beers": ['Reutberger Josefi Bock', 'Reutberger Export Dunkel', 'Reutberger Export Hell']
}, {
    "Brewery": 'Namibia Breweries Limited',
    "Beers": ['Urbock']
}, {
    "Brewery": 'Coopersmith\'s Pub &amp; Brewing',
    "Beers": ['Punjabi Pale Ale']
}, {
    "Brewery": 'Amherst Brewing Co.',
    "Beers": ['2 Sisters Stout', 'Cascade I.P.A.']
}, {
    "Brewery": 'Mad Fox Brewing Company',
    "Beers": ['Big Chimney Porter', 'Saison', 'Punkinator', 'Two Hemispheres Wet-Hop IPA', 'Molotov Hoptail Double IPA', 'Orange Whip IPA']
}, {
    "Brewery": 'Brewer\'s Blend',
    "Beers": ['AleSmith Speedway Stout']
}, {
    "Brewery": 'Ohio Brewing Company',
    "Beers": ['Cardinal Ale', 'Verich Gold']
}, {
    "Brewery": 'Cocoa Beach Brewing Company',
    "Beers": ['Cocoa Beach Pale Ale', 'Not Just Some Oatmeal Stout']
}, {
    "Brewery": 'Lake Superior Brewing Company',
    "Beers": ['Seven Bridges Brown Ale', 'Oktoberfest', 'Split Rock Bock', 'Kayak K�_lsch', 'Mesabi Red', 'Sir Duluth Oatmeal Stout', 'Special Ale', 'Old Man Winter Warmer']
}, {
    "Brewery": 'Pump House "Brewery"',
    "Beers": ['Scotch Ale', 'Fire Chief\'s Red Ale', 'Blueberry Ale', 'SOB (Special Old Bitter)']
}, {
    "Brewery": 'The People\'s Pint',
    "Beers": ['Natural Blonde', 'Tap And Die Malt Liquor', 'Sprocket Kolsch', 'The People\'s Pint Extra Special Bitter (ESB)', 'Slippery Slope', 'Our Oatmeal Stout', 'Pied Piper IPA', 'Farmer Brown', 'The People\'s Pint Imperial Stout']
}, {
    "Brewery": 'Bell\'s "Brewery", Inc.',
    "Beers": ['Bell\'s Raspberry Ale', 'Bell\'s Smoked Stout', 'Bell\'s Sweet Potato Stout', 'Bell\'s Poolside Ale', 'Bell\'s Harvest Ale', 'Bell\'s Winter White Ale', 'Wild One', 'Bell\'s Cherry Stout', 'Bell\'s Sparkling Ale', 'Bell\'s Oarsman', 'Bell\'s Consecrator Doppelbock', 'Bell\'s Deb\'s Red Ale', 'Bell\'s Kalamazoo Stout', 'Bell\'s Amber Ale', 'Third Coast Old Ale', 'Bell\'s Best Brown', 'Hell Hath No Fury Ale', 'Bell\'s Oberon Ale', 'Bell\'s Java Stout', 'Bell\'s Lager Of The Lakes', 'Bell\'s Big Porch Ale', 'Bell\'s Wedding Ale', 'Bell\'s Porter', 'Bell\'s Oatmeal Stout', 'Bell\'s Special Double Cream Stout', 'Two Hearted Ale', 'Bell\'s Bourbon Barrel Aged Cherry Stout', 'Bell\'s Rye Stout', 'Bell\'s Christmas Ale', 'Bell\'s Bourbon Barrel Aged Batch 9000', 'Bell\'s Pale Ale', 'Bell\'s Expedition Stout', 'Third Coast Beer', 'Bell\'s Octoberfest Beer', 'Midwestern Pale Ale', 'Kalamazoo Hopsoulution Ale', 'Bell\'s Smitten Golden Rye Ale', 'Bell\'s Black Note Stout', 'Bell\'s Hopslam Ale', 'This One Goes To 11 Ale', 'The Oracle']
}, {
    "Brewery": 'O\'Hanlon\'s Brewing Co. Ltd.',
    "Beers": ['O\'Hanlons Yellowhammer', 'O\'Hanlons Organic Rye', 'O\'Hanlon\'s Wheat Beer', 'Royal Oak Traditional Bitter', 'O\'Hanlons Original Port Stout', 'O\'Hanlon\'s The Original Ruby Stout', 'Royal Oak Pale Ale']
}, {
    "Brewery": 'Odin Brewing Company',
    "Beers": ['Freya\'s Gold', 'Odin\'s Gift']
}, {
    "Brewery": 'Brasserie la Botteresse de Sur-les-Bois',
    "Beers": ['La Botteresse Brune', 'La Botteresse Noire']
}, {
    "Brewery": 'Bushwakker Brewing Company',
    "Beers": ['Chico Pale Ale', 'Palliser Porter']
}, {
    "Brewery": 'Shipyard Brewing Co.',
    "Beers": ['Shipyard Bourbon Barrel Aged Smashed Pumpkin', 'Mystic Seaport Pale Ale', 'Shipyard Double Old Thumper Ale', 'Shipyard Monkey Fist IPA', 'Shipyard Smashed Blueberry (Pugsley\'s Signature Series)', 'Shipyard IPA', 'Shipyard Blue Fin Stout', 'Shipyard Export Ale', 'Shipyard Old Thumper', 'Shipyard Smashed Pumpkin (Pugsley\'s Signature Series)', 'Shipyard Chamberlain Pale Ale', 'Shipyard Brewer\'s Brown Ale', 'Shipyard Prelude Special Ale', 'Shipyard XXXX IPA (Pugsley\'s Signature Series)', 'Shipyard Imperial Porter (Pugsley\'s Signature Series)', 'Shipyard Barley Wine Style Ale (Pugsley\'s Signature Series)', 'Shipyard Longfellow Winter Ale']
}, {
    "Brewery": 'Ninkasi Brewing Company',
    "Beers": ['Vanilla Oatis', 'Babylon', 'Helles Belles', 'Nuptiale Cream Ale', 'Critical Hit', 'Radiant Summer Ale', 'Spring Reign', 'Maiden The Shade', 'Sleigh\'r Dark Do�_ble Alt Ale', 'Imperiale High Gravity Stout', 'Oatis', 'Total Domination IPA', 'Tricerahops Double IPA', 'Believer']
}, {
    "Brewery": 'Bent River Brewing Company',
    "Beers": ['Uncommon Stout']
}, {
    "Brewery": 'Jester King Craft "Brewery"',
    "Beers": ['RU-55', 'Das ��berkind Organic Vieille Saison', 'Buddha\'s Brew', 'El Cedro', 'Bonnie The Rare', 'Jester King / Mikkeller Beer Geek Rodeo', 'Jester King / Mikkeller Whiskey Barrel Rodeo', 'Commercial Suicide Oaked Farmhouse Mild', 'Boxer\'s Revenge', 'Gotlandsdricka', 'Das Wunderkind! Saison', 'Funk Metal Sour Barrel-Aged Stout', 'Jester King / Mikkeller Weasel Rodeo', 'Thrash Metal Farmhouse Strong Ale', 'Jester King / Mikkeller Drink\'in The Sunbelt', 'Mad Meg Farmhouse Provision Ale', 'Wytchmaker Farmhouse Rye IPA', 'Black Metal Farmhouse Imperial Stout', 'Le Petit Prince Farmhouse Table Beer', 'Noble King Hoppy Farmhouse Ale']
}, {
    "Brewery": 'Block 15 "Brewery" &amp; Restaurant',
    "Beers": ['Golden Canary', 'Belmont Station 15th Anniversary', 'Ferme De La\' Ville Provision', 'Super Nebula', 'Figgy Pudding', 'Pappy\'s Dark', 'Imagine']
}, {
    "Brewery": 'Antarctica (Companhia Brasileira De Bebidas)',
    "Beers": ['Bohemia Escura']
}, {
    "Brewery": 'New Zealand Breweries Limited',
    "Beers": ['Speight\'s Gold Medal Ale']
}, {
    "Brewery": 'Philadelphia Brewing Company',
    "Beers": ['Winter Wunder', 'Walt Wit', 'Fleur De Lehigh', 'Rowhouse Red', 'Kilty Pleasure', 'Joe Coffee Porter', 'Shackamaximum', 'Kenzinger', 'Newbold IPA', 'Pennsylvania Pale Ale', 'Harvest From The Hood']
}, {
    "Brewery": 'The Vermont Pub &amp; "Brewery"',
    "Beers": ['Dogbite Bitter', 'Forbidden Fruit', 'Vermont Smoked Porter', 'Bombay Grab IPA']
}, {
    "Brewery": 'D.L. Geary Brewing Company',
    "Beers": ['Geary\'s Cooledge Oatmeal Stout', 'Geary\'s IPA', 'Geary\'s London Porter', 'Geary\'s Pale Ale', 'Geary\'s Winter Ale', 'Geary\'s Hampshire Special Ale', 'Geary\'s Imperial IPA', 'Geary\'s Wee Heavy Scottish Ale', 'Geary\'s Autumn Ale', 'Geary\'s Summer Ale']
}, {
    "Brewery": 'Brasseurs De La Mauricie',
    "Beers": ['Sainte Source Stout']
}, {
    "Brewery": 'Brasserie Craig Allan',
    "Beers": ['Agent Provocateur']
}, {
    "Brewery": 'Live Oak Brewing Company',
    "Beers": ['Live Oak Roggenbier', 'Live Oak Big Bark Amber Lager', 'Live Oak Primus Weizenbock', 'Live Oak Pilz', 'Live Oak Oaktoberfest', 'Live Oak Old Tree Hugger Barleywine', 'Live Oak Liberation Ale', 'Live Oak HefeWeizen']
}, {
    "Brewery": 'Brouwerij De Dolle Brouwers',
    "Beers": ['De Dolle Stille Nacht Reserva 2010', 'De Dolle Lichtervelds Blond', 'De Dolle Oeral Bier', 'De Dolle Bos Keun', 'De Dolle Extra Export Stout', 'De Dolle Oerbier Special Reserva 2010 (Bottled 2011)', 'De Dolle Stille Nacht', 'De Dolle Oerbier', 'De Dolle Arabier', 'De Dolle Dulle Teve (Mad Bitch)']
}, {
    "Brewery": 'Andrew\'s Brewing Co.',
    "Beers": ['Andrew\'s Northern Brown Ale', 'Andrew\'s St. Nick Porter', 'Andrew\'s English Pale Ale']
}, {
    "Brewery": 'Amarcord Birra Artigianale (Spring Srl)',
    "Beers": ['Prima Donna', 'La Put��na', 'La Mi D�_na', 'La Tabach��ra']
}, {
    "Brewery": 'Antares',
    "Beers": ['Antares Barleywine', 'Simpatico']
}, {
    "Brewery": 'Wormtown Brewing Co.',
    "Beers": ['Seven Hills Pale Ale', 'Dark Day IPA', 'Hopulence American Double I.P.A.', 'Pro-Am Porter', 'Be Hoppy', 'Sweet Tat\'s Breakfast Stout']
}, {
    "Brewery": 'Brasserie Duyck',
    "Beers": ['Jenlain Or', 'No. Six Biere Blonde Speciale', 'Jenlain Ambr��e', 'Jenlain Blonde', 'Saint Druon De Sebourg (French Abbey Ale)', 'Jenlain Bi��re De No��l', 'Jenlain Bi��re De Printemps']
}, {
    "Brewery": 'Gray\'s Brewing Company',
    "Beers": ['Bower City Pale Ale', 'Gray\'s Irish Red Style Ale', 'Rathskeller Amber Ale']
}, {
    "Brewery": 'English Ales "Brewery"',
    "Beers": ['Black Prince Porter']
}, {
    "Brewery": 'Cody Brewing Company',
    "Beers": ['Original Amber Ale', 'Wheelers Brown', 'S.O.S.']
}, {
    "Brewery": 'Brasserie Lacu',
    "Beers": ['Biere D\'Abbaye Lacu']
}, {
    "Brewery": 'Big Rock Chop &amp; Brewhouse',
    "Beers": ['Big Rock Saison St. Clair', 'Sour Cherry Tripel', 'Bourbon Barrel Aged Flying Buffalo Imperial Stout']
}, {
    "Brewery": 'Union Barrel Works',
    "Beers": ['Mindblock Maibock', 'Wobblin Bob']
}, {
    "Brewery": 'Evolution Craft Brewing Company',
    "Beers": ['Morning Wood', 'Rum Barrel Golden Ale (Spring Migration)', 'Summer Session Ale', 'Menagerie #3 Redux', 'Chardonnay Barrel Belgian Ale (Fall Migration)', 'Jacques Au Lantern', 'Menagerie #5', 'Exile ESB', 'Lot No6 Double India Pale Ale', 'Lot No3 India Pale Ale', 'Lucky 7 Porter', 'Primal Pale Ale', 'Rise Up Stout']
}, {
    "Brewery": 'Mustang Brewing Company',
    "Beers": ['Mustang Golden Ale', 'Mustang Washita Wheat']
}, {
    "Brewery": 'Schmohz Brewing Company',
    "Beers": ['Bonecrusher Stout']
}, {
    "Brewery": 'Chicago Brewing Company',
    "Beers": ['Black Star Stout (Stout Of Order)']
}, {
    "Brewery": 'Pivovar N��chod a.s.',
    "Beers": ['Prim��tor 21% Ryt�_rsk�_ (Knight\'s Lager)', 'Prim��tor Maibock', 'Primator Premium Lager', 'Primator Dark Lager', 'Prim��tor Double Bock Beer']
}, {
    "Brewery": 'Middle Ages Brewing Co., Ltd.',
    "Beers": ['Ape Hanger Ale', 'Old Marcus', 'Wizard\'s Winter Ale', 'Grail Ale', 'Syracuse Pale Ale', 'Tripel Crown', 'Blackheart Stout', 'Duke Of Winship', 'Ye Olde Kilt Tilter', 'Swallow Wit', 'ImPaled Ale', 'Beast Bitter', '10th Anniversary Double India Pale Ale', 'Wailing Wench', 'Dragonslayer', 'Druid Fluid', '15th Anniversary Double Wench']
}, {
    "Brewery": 'Left Coast Brewing Company',
    "Beers": ['Left Coast IPA', 'Left Coast The Wedge', 'Voo Doo', 'Asylum', 'Trestles', 'Left Coast Black Magic Stout', 'Left Coast Hop Juice', 'Torrey Pines IPA']
}, {
    "Brewery": 'Carolina "Brewery"',
    "Beers": ['Firecracker Pale Ale', 'Oatmeal Porter', 'Flagship IPA']
}, {
    "Brewery": 'Six Row Brewing Company',
    "Beers": ['Whale Ale', 'DIPA']
}, {
    "Brewery": 'the Nils Oscar Company',
    "Beers": ['Nils Oscar God Lager', 'Nils Oscar Hop Yard IPA', 'Nils Oscar R�_kporter', 'Nils Oscar Barley Wine', 'Nils Oscar Kalas�_l', 'Nils Oscar Imperial Stout', 'Nils Oscar Coffee Stout', 'Nils Oscar India Pale Ale']
}, {
    "Brewery": 'Brouwerij Dilewyns',
    "Beers": ['Vicaris Tripel Gueuze', 'Vicaris Tripel', 'Vicaris Generaal', 'Vicardin']
}, {
    "Brewery": 'Patio Saison',
    "Beers": ['Wild Oats Series No. 19']
}, {
    "Brewery": 'Hop Valley Brewing Company',
    "Beers": ['Natty Red', 'Alphadelic IPA', 'Vanilla Infused Porter (V.I.P.)', 'Alpha Centauri Binary IPA']
}, {
    "Brewery": 'Brasserie Dunham',
    "Beers": ['IPA Belge', 'Black IPA']
}, {
    "Brewery": 'Piece "Brewery" &amp; Pizzeria',
    "Beers": ['Cap\'n Kickass', 'Dark \'n Curvy', 'Golden Arm', 'Top Heavy Hefeweizen', 'Full Frontal Pale Ale', 'Worryin\' Ale', 'Dysfunctionale', 'Camel Toe Egyptian Pale Ale']
}, {
    "Brewery": 'J�_mtlands Bryggeri AB',
    "Beers": ['Jul�_l', 'Hell']
}, {
    "Brewery": 'Drake\'s Brewing Co.',
    "Beers": ['Hop Salad', 'Drake\'s Jolly Rodger American Barleywine 2012', 'Drake\'s Black Robusto Porter', 'Aroma Prieta', 'Drake\'s Hefe-weizen', 'Drake\'s Blonde Ale', 'Drake\'s IPA', 'Drake\'s Denogginizer', 'Drake\'s Amber Ale', 'Drake\'s Drakonic Imperial Stout', 'Aroma Coma', 'Drake\'s 1500 Pale Ale', 'Alpha Session', 'Drake\'s Hopocalypse', 'Expedition Ale', 'Hopocalypse Black Label']
}, {
    "Brewery": 'Otro Mundo Brewing Company',
    "Beers": ['Otro Mundo Golden Ale', 'Otro Mundo Strong Red Ale']
}, {
    "Brewery": 'Turk Tuborg Brewing and Malting',
    "Beers": ['Tuborg Premium Biere De Luxe Gold']
}, {
    "Brewery": 'Blue Diamond Brewing Co.',
    "Beers": ['Brewer\'s Cave Roasted Black Barley Ale']
}, {
    "Brewery": 'High Water Brewing',
    "Beers": ['Pom Cherry Bomb', 'Aphotic Baltic Porter', 'Old And In The Way', 'Campfire Stout', 'No Boundary IPA', 'Hop Riot IPA', 'Retribution']
}, {
    "Brewery": 'Elegans Saison',
    "Beers": ['Single Batch Series']
}, {
    "Brewery": 'Williams Brothers Brewing Company',
    "Beers": ['Williams Ceilidh (Premium Scottish Lager)', 'Williams Red', 'Williams Black', 'Fraoch Heather Ale', 'Alba Scots Pine Ale', 'Grozet', 'Ebulum Elderberry Black Ale', 'Seven Giraffes', 'Kelpie Seaweed Ale', 'Williams Gold', 'Williams Joker', 'Midnight Sun']
}, {
    "Brewery": 'Buckeye Brewing Company',
    "Beers": ['Zatek 2011-A', 'Buckeye Brewing Yuppie ESB', 'Aquarius', 'Sasquatch Pale Ale', 'Ho Ho Ho Magic Dubbel', 'Martian Marzen Lager', 'Old Mammoth Stout', 'Bling Bling', 'Seventy-Six (\'76)', 'Hippie I.P.A.']
}, {
    "Brewery": 'Moat Mountain Smoke House &amp; Brewing Co.',
    "Beers": ['Moat Octoberfest / M�_rzen', 'Moat Hoffman Weiss', 'Moat Bone Shaker Brown', 'Moat Stout', 'Moat Iron Mike Pale Ale', 'Moat Imperial Stout']
}, {
    "Brewery": 'Tyskie Browary Ksiۃ�_ۻce (SABMiller)',
    "Beers": ['Debowe Mocne']
}, {
    "Brewery": 'Big Muddy Brewing',
    "Beers": ['Saluki Dunkeldog', 'Big Muddy Monster', 'Vanilla Stout']
}, {
    "Brewery": 'Keweenaw Brewing Company',
    "Beers": ['Olde Ore Dock Scottish Ale', 'Red Jacket Amber Ale', 'Pick Axe Blonde Ale', 'Widow Maker Black Ale', 'Lift Bridge Brown Ale']
}, {
    "Brewery": 'Big River Grille &amp; Brewing Works',
    "Beers": ['Gadzooks Pilsner', 'Sweet Magnolia Brown Ale', 'Rocket Red Ale']
}, {
    "Brewery": 'Boone Brewing Company, LLC',
    "Beers": ['Blowing Rock IPA', 'Blowing Rock High Country Ale']
}, {
    "Brewery": 'Gordon Biersch "Brewery" Restaurant',
    "Beers": ['Gordon Biersch K�_lsch', 'Gordon Biersch Braumeister Selekt IPB', 'Gordon Biersch Dunkelweizen', 'Gordon Biersch Pilsner', 'Gordon Biersch Hefeweizen', 'Gordon Biersch Maibock', 'Gordon Biersch Blonde Bock', 'Gordon Biersch SommerBrau', 'Gordon Biersch Golden Export', 'Gordon Biersch Schwarzbier', 'Gordon Biersch M�_rzen', 'Gordon Biersch FestBier', 'Gordon Biersch Winter Bock', 'Gordon Biersch Czech Style Pilsner']
}, {
    "Brewery": 'Old Yale Brewing Co.',
    "Beers": ['Old Yale Pale Ale', 'Sasquatch Stout', 'Sergeant\'s IPA']
}, {
    "Brewery": 'George Bateman and Son Ltd. / Batemans "Brewery"',
    "Beers": ['Mocha', 'Mr. George\'s Ruby Porter', 'Batemans XXXB', 'Victory Ale', 'Rosey Nosey', 'Bateman\'s Combined Harvest', 'Dark Lord']
}, {
    "Brewery": 'Winterbrewed',
    "Beers": ['Wild Oats Series No. 9']
}, {
    "Brewery": 'Fort George "Brewery" + Public House',
    "Beers": ['Roses On Roses', 'Sunrise OPA (Oatmeal Pale Ale)', 'Vortex IPA', 'Cavatica Stout', '1811 Pre-Prohibition Lager']
}, {
    "Brewery": 'Anacortes "Brewery" &amp; Rockfish Grill',
    "Beers": ['Anacortes IPA']
}, {
    "Brewery": 'Sound "Brewery"',
    "Beers": ['Ursus Spel�_us', 'Monk\'s Indiscretion', 'Humulo Nimbus']
}, {
    "Brewery": 'Green Flash Brewing Co.',
    "Beers": ['Retro Extra Pale Ale', 'Sleepin\' With Shaggy', 'Treasure Chest', 'Green Flash Trippel', 'Green Flash Summer Saison', 'Green Flash / St. Feuillien Friendship Brew', 'Green Flash West Coast I.P.A.', 'Green Flash Grand Cru', 'Green Flash Extra Pale Ale', 'Green Flash Hop Head Red Ale', 'Green Flash Le Freak', 'Green Flash Imperial India Pale Ale', 'Double Stout', 'Rayon Vert', 'Green Flash Palate Wrecker', 'Linchpin White IPA', 'Barleywine Style Ale', '30th Street Pale Ale', 'Green Flash Saison Diego', 'Silva Stout']
}, {
    "Brewery": 'Brauerei Leikeim',
    "Beers": ['Leikeim Premium-Weisse', 'Leikeim Schwarzbier', 'Leikeim Premium', 'Brauhaus Altenkunstadt Leikeim Steinbier Original']
}, {
    "Brewery": 'Bierbrier Brewing Inc',
    "Beers": ['Bierbrier Ale']
}, {
    "Brewery": 'Logsdon Farmhouse Ales',
    "Beers": ['Far West Vlaming', 'Fresh Hop Seizoen', 'Oak Aged Bretta', 'Cerasus', 'Peche \'n Brett', 'Kili Wit', 'Seizoen Bretta', 'Seizoen']
}, {
    "Brewery": 'Cape Ann Brewing Company',
    "Beers": ['Fisherman\'s Sunrise Saison', 'Fisherman\'s Greenhorn Double IPA', 'Fisherman\'s Brew', 'Fisherman\'s Bavarian Wheat', 'Fisherman\'s IPA', 'Fisherman\'s Ale', 'Fisherman\'s Navigator Doppel Bock', 'Fisherman\'s Pumpkin Stout', 'Fisherman\'s Imperial Pumpkin Stout']
}, {
    "Brewery": 'Old Schoolhouse "Brewery"',
    "Beers": ['Hooligan Stout', 'Brewers Reserve Imperial Stout', 'Brewers Reserve Imperial IPA', 'Ruud Awakening IPA']
}, {
    "Brewery": 'Big Time "Brewery" &amp; Alehouse',
    "Beers": ['Whiny The Complainer', 'Old Rip Oatmeal Stout', 'Coal Creek Porter', 'Old Sol Wheatwine Ale', 'Old Wooly Barleywine', 'Bhagwan\'s Best IPA', 'Scarlet Fire IPA']
}, {
    "Brewery": 'De Struise Brouwers',
    "Beers": ['5�_ (Five Squared)', 'Catso', 'Motuecha', 'Struise Tsjeeses Reserva (Bourbon Barrel Aged)', 'Dirty Horse', 'Struise Kloeke Blonde', 'Struise Tsjeeses', 'Red Haired Jeanne (Roste Jeanne)', 'Struise Rosse', 'Outblack', 'Struise Witte', 'Ignis Et Flamma', 'Svea IPA', 'Kabert', 'St. Amatus 12', 'Pannepot', 'Pannepot Grand Reserva', 'Cuvee Delphine', 'Struise / Mikkeller (Elliot Brew)', 'Pannepot Reserva', 'Black Albert', 'Shark Pants']
}, {
    "Brewery": 'Kosciuszko Brewing Company',
    "Beers": ['Kosciuszko Pale Ale']
}, {
    "Brewery": 'Sierra Blanca Brewing Company (Rio Grande)',
    "Beers": ['Rio Grande Outlaw Lager', 'Sierra Blanca Pale Ale', 'Rio Grande Pancho Verde Chile Cerveza', 'Sierra Blanca Nut Brown Beer']
}, {
    "Brewery": 'Thirsty Dog Brewing Company',
    "Beers": ['Stud Service Stout', 'Irish Setter Red', 'Whippet Wheat', 'Twisted Kilt Scotch Ale', 'Raspberry Ale', 'Cerberus Belgian Tripel', '12 Dogs Of Christmas Ale', 'Labrador Lager', 'Old Leghumper', 'Bourbon Barrel Aged Siberian Night', 'Spiced Pumpkin Ale', 'Siberian Night Imperial Stout', 'Barktoberfest', 'Hoppus Maximus']
}, {
    "Brewery": 'Hudepohl-Schoenling Brewing Co.',
    "Beers": ['Hudy 14-K', 'Amber Lager']
}, {
    "Brewery": 'Der HirschBrau/Privatbrauerei H�_ss',
    "Beers": ['Neuschwansteiner Das Echte', 'Neuschwansteiner Weihnachts-Bier', 'Weisser Hirsch Allg�_uer Weizen', 'Hirsch Bavarian-Weissbier Hefeweisse', 'Neuschwansteiner', 'Doppel-Hirsch', 'Holzar-Bier']
}, {
    "Brewery": 'Court Avenue Brewing Company',
    "Beers": ['BlackHawk Stout']
}, {
    "Brewery": 'The Br�_ Rm. at BAR',
    "Beers": ['BruRm Pale Ale', 'BruRm Damn Good Stout']
}, {
    "Brewery": 'Bayerische Staatsbrauerei Weihenstephan',
    "Beers": ['Weihenstephaner White Hoplosion', 'Weihenstephaner Hefeweissbier', 'Weihenstephaner Kristallweissbier', 'Weihenstephaner Tradition', 'Weihenstephaner Korbinian', 'Weihenstephaner Hefeweissbier Dunkel', 'Weihenstephaner Vitus', 'Weihenstephaner Original', 'Weihenstephaner Festbier', 'Weihenstephaner Pilsner']
}, {
    "Brewery": 'Brouwerij IJ',
    "Beers": ['Speciale Vlo', 'Plzen', 'IJ Wit (Scharrel Wit)', 'Natte', 'Struis', 'Zatte', 'Ijnde Jaars', 'Columbus']
}, {
    "Brewery": '7venth (Seventh) Sun "Brewery"',
    "Beers": ['Midnight Moonlight']
}, {
    "Brewery": 'Cricket Hill Brewing Co.',
    "Beers": ['Reserve Ale Russian Imperial Stout', 'Paymaster\'s Porter', 'American Ale', 'Jersey Summer Breakfast Ale', 'Fall Festivus', 'Colonel Blides Cask Ale', 'East Coast Lager', 'Cricket\'s Nocturne']
}, {
    "Brewery": 'Pearl Street Grill And "Brewery"',
    "Beers": ['Street Brawler', 'Lake Effect Pale Ale']
}, {
    "Brewery": 'Brugge Brasserie',
    "Beers": ['Harvey', 'White', 'Pooka', 'Black', 'Tripel De Ripple']
}, {
    "Brewery": 'AleSmith Brewing Company',
    "Beers": ['Alesmith Speedway Stout', 'Alesmith Decadence 2012 Belgian-Style Quadruple Ale', 'AleSmith Lil\' Devil', 'AleSmith Grand Cru Ale', 'AleSmith IPA', 'AleSmith Horny Devil', 'AleSmith Nut Brown Ale', 'Anvil Ale ESB', 'AleSmith Old Numbskull', 'AleSmith My Bloody Valentine', 'AleSmith Evil Dead Red', 'YuleSmith (Summer)', 'YuleSmith (Winter)', 'AleSmith X']
}, {
    "Brewery": 'Redbud Brewing Company',
    "Beers": ['Arbor Imperial Stout']
}, {
    "Brewery": 'Birrificio Pausa Cafe',
    "Beers": ['Chicca', 'Tosta']
}, {
    "Brewery": 'Harvest Moon "Brewery" &amp; Cafe',
    "Beers": ['Full Moon Pale Ale', 'Hops(2) Double IPA']
}, {
    "Brewery": 'Oppig��rds Bryggeri AB',
    "Beers": ['Oppig��rds Easter Ale', 'Oppig��rds Amarillo', 'Oppig��rds Golden Ale', 'Oppig��rds Winter Ale', 'Oppig��rds Bergsmans�_l']
}, {
    "Brewery": 'Ca L\'Arenys',
    "Beers": ['Guineu Riner']
}, {
    "Brewery": '"Brewery" Vivant',
    "Beers": ['Zaison "Super" Saison', 'Kludde Strong Ale', 'Zaison Imperial Saison Ale', 'Tart Side Of The Moon', 'Farm Hand French Style Farmhouse Ale', 'Escoffier Bretta Ale', 'Big Red Coq', 'Solitude', 'Triomphe Belgian IPA']
}, {
    "Brewery": 'Frankenmuth "Brewery"',
    "Beers": ['Frankenmuth Hefeweizen', 'Frankenmuth Cass River Blonde Ale', 'Frankenmuth Red Sky Ale', 'Frankenmuth Traditional German Pilsner', 'Frankenmuth Munich Style Dunkel Lager', 'Batch 69', 'Frankenmuth Oktoberfest']
}, {
    "Brewery": 'Black Husky Brewing',
    "Beers": ['Sproose Joose Double IPA']
}, {
    "Brewery": 'Saint Somewhere Brewing Company',
    "Beers": ['Serge', 'Cynthiana', 'Pays Du Soleil', 'Saison Athene', 'Lectio Divina']
}, {
    "Brewery": 'Brasserie Des Gabariers (L&amp;L Cognac SA)',
    "Beers": ['XO Beer']
}, {
    "Brewery": 'Lightning "Brewery"',
    "Beers": ['American Amber Ale', 'Thunderweizen', 'Ionizer Lager', 'Electrostatic', 'Elemental Pilsener', 'Old Tempestuous', 'Black Lightning Porter']
}, {
    "Brewery": 'Amstel Brouwerij B. V.',
    "Beers": ['Amstel Bock']
}, {
    "Brewery": 'Asheville Brewing Company',
    "Beers": ['Escape Artist Pale Ale', 'Old School Pale Ale', 'Ninja Porter', 'Shiva IPA']
}, {
    "Brewery": 'Iron Horse "Brewery"',
    "Beers": ['Double Rainbow Ale', 'India Pale Ale', 'Cozy Sweater', 'Mocha Death', 'Quilter\'s Irish Death']
}, {
    "Brewery": 'Mountain Sun Pub &amp; "Brewery"',
    "Beers": ['XXX Pale Ale', 'Illusion Dweller IPA', 'FYIPA', 'Colorado Kind Ale']
}, {
    "Brewery": 'L�_wenbr�_u AG',
    "Beers": ['L�_wenbr�_u Urtyp', 'L�_wenbr�_u Premium Dark', 'L�_wen Weisse', 'L�_wenbr�_u Original', 'L�_wenbr�_u Oktoberfestbier', 'L�_wenbr�_u Triumphator']
}, {
    "Brewery": 'Full Nelson',
    "Beers": ['Kooinda Black IPA']
}, {
    "Brewery": 'The Seven Barrel "Brewery"',
    "Beers": ['RIP Stout', 'Champion Reserve IPA']
}, {
    "Brewery": 'Long Ireland Beer Company',
    "Beers": ['Breakfast Stout']
}, {
    "Brewery": 'Brouwerij Contreras',
    "Beers": ['Valeir Donker', 'Valeir Divers', 'Valeir Blond', 'Valeir Extra']
}, {
    "Brewery": 'Square One "Brewery"',
    "Beers": ['Maple Stout', 'IPA']
}, {
    "Brewery": 'Mudshark Brewing Co.',
    "Beers": ['Dry Heat Hefeweizen']
}, {
    "Brewery": 'The Grizzly Paw Brewing Company',
    "Beers": ['Rutting Elk Red']
}, {
    "Brewery": 'Blue Star Brewing Company',
    "Beers": ['Pale Ale']
}, {
    "Brewery": 'Brouwerij Haacht NV',
    "Beers": ['Tongerlo 6 Dubbel Blond', 'Tongerlo 8 Tripel Blond', 'Charles Quint/Keizer Karel', 'Charles Quint Rouge/Keizer Karel Robijn', 'Charles Quint Blonde/Keizer Karel Blond', 'Tongerlo 6 Dubbel Bruin']
}, {
    "Brewery": 'Tun Tavern',
    "Beers": ['Tun Tavern Leather-Neck Stout', 'Tun Tavern All American IPA']
}, {
    "Brewery": 'Golden Lion Brewing Company / Pub &amp; Brasserie le Lion D\'Or',
    "Beers": ['Bishop\'s Best Bitter']
}, {
    "Brewery": 'Brouwerij De Molen',
    "Beers": ['Tsarina Esra Reserva', 'Weer &amp; Wind Bourbon B.A.', 'Mout &amp; Mocca', 'Heen &amp; Weer', 'Rook &amp; Vuur', 'Hemel &amp; Aarde Bruichladdich Barrel', 'Zomer Hop', 'Donder &amp; Bliksem', 'Hel &amp; Verdoemenis Misto B.A.', 'Bloed, Zweet &amp; Tranen', 'Hel &amp; Verdoemenis 666', 'Op &amp; Top', 'Pek &amp; Veren', 'Engels', 'Hemel &amp; Aarde', 'Hel &amp; Verdoemenis', 'Bed And Breakfast', 'Bommen &amp; Granaten', 'Tsarina Esra Imperial Porter', 'Amarillo', 'SSS', 'Hel &amp; Verdoemenis Wild Turkey B.A.', 'Storm &amp; Averij', 'Mooi &amp; Meedogenloos', 'Vuur &amp; Vlam', 'Kopi Loewak']
}, {
    "Brewery": 'Wolf Beer Company',
    "Beers": ['White Wolf Golden Ale']
}, {
    "Brewery": '5 Rabbit Cerveceria',
    "Beers": ['5 Lizard', '5 Rabbit', '5 Vulture']
}, {
    "Brewery": 'Odell Brewing Company',
    "Beers": ['Town Pump Pale Ale', 'Amuste', 'Hiveranno', 'Odell Easy Street Wheat', 'Odell 90 Shilling Ale', 'Odell Cutthroat Porter', 'Friek', 'Odell Levity Amber Ale', 'Odell Isolation Ale', 'Shenanigans', 'Lugene Chocolate Milk Stout', '5 Barrel Pale Ale', 'Odell Double Pilsner', 'Odell IPA', 'The Meddler', 'Footprint RegionAle', 'Red', 'Odell DeConstruction Golden Ale', 'Mountain Standard Double Black IPA', 'St. Lupulin', 'Pond Hopper Double Extra Pale Ale', 'Myrcenary Double IPA']
}, {
    "Brewery": 'Herzoglich Bayerisches Brauhaus Tegernsee',
    "Beers": ['Tegernsee Spezial', 'Tegernsee Hell']
}, {
    "Brewery": 'Empire Brewing Company',
    "Beers": ['Cream Ale', 'Empire Amber Ale', 'Empire India Pale Ale']
}, {
    "Brewery": 'Brauerei Forst AG',
    "Beers": ['Sixtus']
}, {
    "Brewery": 'Anchor Brewing Company',
    "Beers": ['Anchor California Lager', 'Anchor Our Barrel Ale', 'Anchor Liberty Ale', 'Anchor Steam Beer', 'Anchor Summer Beer', 'Our Special Ale 2012 (Anchor Christmas Ale)', 'Anchor Old Foghorn', 'Anchor Porter', 'Anchor Bock Beer', 'Anchor Humming Ale', 'Brekle\'s Brown']
}, {
    "Brewery": 'North by Northwest Restaurant &amp; "Brewery"',
    "Beers": ['Black Jack (Bourbon Barrel Aged)', 'Kodiak IPA', 'North By Northwest Py Jingo Pale Ale']
}, {
    "Brewery": 'Devils Backbone Brewing Company',
    "Beers": ['Schwartz Bier', 'Striped Bass Pale Ale', 'Azrael', 'Belgian Congo Pale Ale', 'Vienna Lager', 'Eight Point IPA']
}, {
    "Brewery": 'Sockeye Grill &amp; "Brewery"',
    "Beers": ['Old Devil\'s Tooth Barleywine', 'Dagger Falls IPA', 'Winterfest']
}, {
    "Brewery": 'Crann�_g Ales',
    "Beers": ['Back Hand Of God Stout']
}, {
    "Brewery": 'Gage Roads Brewing Company',
    "Beers": ['Atomic Pale Ale', 'London Best', 'Sleeping Giant IPA']
}, {
    "Brewery": 'Crazy Mountain Brewing Company',
    "Beers": ['Lava Lake Wit', 'Crazy Mountain Amber Ale', 'Mountain Livin\' Pale Ale']
}, {
    "Brewery": 'Belize Brewing Co., Ltd.',
    "Beers": ['Belikin Premium', 'Belikin Stout']
}, {
    "Brewery": 'The Little Brewing Company',
    "Beers": ['Wicked Elf Witbier', 'Wicked Elf Pale Ale']
}, {
    "Brewery": 'Birra Kor�_a',
    "Beers": ['Kor�_a Pils Blonde']
}, {
    "Brewery": 'Hargreaves Hill Brewing Company',
    "Beers": ['Hargreaves Hill Pale', 'ESB']
}, {
    "Brewery": 'Einst�_k �_lger��',
    "Beers": ['Icelandic Toasted Porter', 'Icelandic White Ale']
}, {
    "Brewery": 'White Wine Barrel Aged (Lychee Edition)',
    "Beers": ['It\'s Alive']
}, {
    "Brewery": 'Snowgoose Restaurant &amp; Pub / Sleeping Lady Brewing Company',
    "Beers": ['Urban Wilderness Pale Ale']
}, {
    "Brewery": 'Bellwoods "Brewery"',
    "Beers": ['Witchshark']
}, {
    "Brewery": 'New England Brewing Co.',
    "Beers": ['Ghost Pigeon Porter', 'Attempted RedRum', 'Coriolis', 'Supernaut IPA', 'Premeditated Murder Barleywine', 'Fuzzy Baby Ducks IPA', 'Elm City Lager', '668 Neighbor Of The Beast', 'Galaxy Pale Ale', 'Sea Hag IPA', 'Friar\'s Quad', 'Wet Willy Scotch Ale', 'Gold Stock Ale', 'Gandhi-Bot Double IPA', 'Imperial Stout Trooper']
}, {
    "Brewery": 'Sand Creek Brewing Company',
    "Beers": ['Lilja\'s Hell Hound Brown Ale', 'Pioneer Oderbolz Bock', 'Lilja\'s Heifer Weizen', 'Woody\'s Wheat', 'Groovy Brew', 'Sand Creek Golden Ale', 'English Style Special Ale', 'Oscar\'s Chocolate Oatmeal Stout', 'Sand Creek Imperial Porter', 'Oscar\'s Double Chocolate Oatmeal Stout', 'Badger Porter', 'Lilja\'s Pulling Boat Pale Ale', 'Lilja\'s Hop Nest Monster', 'Wild Ride IPA']
}, {
    "Brewery": 'Heartland "Brewery" Union Square',
    "Beers": ['Heartland "Brewery" Indian River Light', 'Heartland "Brewery" Rooster Red Ale', 'Heartland "Brewery" Smiling Pumpkin Ale', 'Heartland "Brewery" Farmer Jon\'s Oatmeal Stout', 'Heartland "Brewery" Indiana Pale Ale']
}, {
    "Brewery": '1795 Original Czech Lager',
    "Beers": ['B.B. Dark Bohemia Beer']
}, {
    "Brewery": 'High &amp; Mighty Beer Co.',
    "Beers": ['Fumata Bianca', 'Sono Distrutto', 'Pas De Dieux', 'Saint Hubbins Abbey', 'Two-Headed Beast', 'Home For The Holidays', 'XPA (Extra Pale Ale)', 'Purity Of Essence']
}, {
    "Brewery": 'Rockmill "Brewery"',
    "Beers": ['Witbier', 'Cask Aged Tripel', 'Saison']
}, {
    "Brewery": 'Brauerei Heller-Trum / Schlenkerla',
    "Beers": ['Aecht Schlenkerla Rauchbier M�_rzen', 'Aecht Schlenkerla Rauchbier Weizen', 'Aecht Schlenkerla Fastenbier', 'Aecht Schlenkerla Rauchbier Urbock', 'Aecht Schlenkerla Helles Lagerbier', 'Aecht Schlenkerla Eiche']
}, {
    "Brewery": 'Pivovar Regent Trebon',
    "Beers": ['Bohemia Regent', 'Bohemia Regent Lager Dark']
}, {
    "Brewery": 'Cascade Lakes Brewing Co.',
    "Beers": ['Pine Marten Pale Ale', 'Cyclops IPA', 'Rooster Tail Ale', '20" Brown', 'Santa\'s Little Helper', 'Cascade Lakes IPA', 'Monkey Face Porter']
}, {
    "Brewery": 'Steamworks Brewing Co.',
    "Beers": ['Spruce Goose', 'Ale Diablo', 'Steam Engine Lager', 'Lizard Head Red', 'Backside Stout', 'Colorado Kolsch', 'Third Eye P.A.', 'Conductor Imperial India Pale Ale']
}, {
    "Brewery": 'Williamsburg AleWerks',
    "Beers": ['Caledonia', 'White Ale', 'Red Marker Ale', 'Washington\'s Porter', 'Tavern Ale', 'Drake Tail India Pale Ale', 'Chesapeake Pale Ale', 'Springhouse Ale', 'Caf�� Royale', 'Coffeehouse Stout', 'Grand Illumination', 'Bourbon Barrel Porter', 'Bitter Valentine']
}, {
    "Brewery": 'Davidson Brothers Restaurant &amp; "Brewery"',
    "Beers": ['Dacker Authentic Adirondack Ale', 'India Pale Ale']
}, {
    "Brewery": 'Uncle Billy\'s Brew &amp; Que',
    "Beers": ['Uncle Billy\'s Ax Handle American Pale Ale', 'Hop Zombie']
}, {
    "Brewery": 'Moor Beer Company',
    "Beers": ['Old Freddy Walker']
}, {
    "Brewery": 'Dragonmead Micro"Brewery"',
    "Beers": ['Dragonmead Armageddon Grand Cru', 'Dragonmead Erik The Red', 'Dragonmead Russian Imperial Stout', 'Dragonmead Sir William\'s ESB', 'Dragonmead Final Absolution Trippel', 'Dragonmead Crown Jewels India Pale Ale', 'Dragonmead Under The Kilt Wee Heavy']
}, {
    "Brewery": 'Cascade "Brewery" Company Ltd.',
    "Beers": ['Cascade Export Stout', 'Cascade Special Stout', 'Cascade First Harvest Ale']
}, {
    "Brewery": 'Broughton Ales Ltd',
    "Beers": ['Scottish Oatmeal Stout', 'Kinmount Willie Oatmeal Stout', 'Black Douglas Ale', 'Merlin\'s Ale', 'Old Jock Ale']
}, {
    "Brewery": 'HopCat',
    "Beers": ['HopCat Hoppopotamus', 'HopCat Oil Rigger']
}, {
    "Brewery": 'Heretic Brewing Company',
    "Beers": ['Gramarye', 'Tartuffe', 'Shallow Grave', 'Worry', 'Evil Cousin', 'Evil Twin']
}, {
    "Brewery": 'Cape Cod Beer',
    "Beers": ['Cape Cod Summer', 'Cape Cod Red', 'Cape Cod IPA']
}, {
    "Brewery": 'Lagunitas Brewing Company',
    "Beers": ['Fillmore Fusion Ale', 'Farmhouse Gueuze', 'Saison Style Ale (Sonoma Farmhouse)', 'Censored', 'Lagunitas IPA', 'Maximus', 'Lagunitas Imperial Stout', 'Lagunitas Sneak Release Undercover Investigation Shut-Down Ale', 'Dogtown Pale Ale', 'Fusion VII', 'Cappuccino Stout', 'New Dogtown Pale Ale', 'Hairy Eyeball Ale', 'Lagunitas PILS (Czech Style Pilsner)', 'Brown Shugga\'', 'Lagunitas Imperial Red Ale', 'Lagunitas Sucks Brown Shugga Substitute Ale', 'Bavarian-Styled Doppel Weizen', 'Wilco Tango Foxtrot', 'Undercover Investigation Shut-down Ale', 'A Little Sumpin\' Sumpin\' Ale', 'A Little Sumpin\' Wild', 'Lucky 13.alt', 'Lagunitas Lucky 13 Mondo Large Red Ale', 'Olde GnarlyWine', 'Waldo\'s Special Ale', 'Hop Stoopid', 'DayTime']
}, {
    "Brewery": 'Brasserie d\'Orval S.A.',
    "Beers": ['Petite Orval', 'Orval Trappist Ale']
}, {
    "Brewery": 'Swamp Head "Brewery" &amp; Tasting Room',
    "Beers": ['Blackwater', 'Wild Night Honey Cream Ale', '10-10-10 IPA', 'Cottonmouth Wit', 'Stumpknocker Pale Ale', 'Saison Du Swamp', 'Cigar City / Swamp Head Roosevelt', 'Big Nose IPA', 'Midnight Oil Stout']
}, {
    "Brewery": 'F�_rstlich F�_rstenbergische Brauerei KG',
    "Beers": ['F�_rstenberg Weizen Hefe Dunkel', 'F�_rstenberg Premium Lager', 'F�_rstenberg Premium Pilsener']
}, {
    "Brewery": 'Oggi\'s Pizza &amp; Brewing Co.',
    "Beers": ['Sunset Amber Ale', 'Paradise Pale Ale', 'McGarvey\'s Scottish Ale', 'Black Magic Stout', 'Torrey Pines IPA', 'Hop Juice Double IPA']
}, {
    "Brewery": 'Wynkoop Brewing Company',
    "Beers": ['Two Guns Pilsner', 'St. Charles Extra Special Bitter', 'Rail Yard Ale', 'B3K Black Lager', 'Silverback Pale Ale']
}, {
    "Brewery": 'Coronado Brewing Company',
    "Beers": ['Four Brothers Pale Ale', 'Point Loma Porter', 'Coronado Island Pale Ale', 'Coronado Orange Avenue', 'Neptunes Nectar Strong Ale', 'Mermaid\'s Red Ale', 'Orange Avenue Wit', 'Brandy Barrel Aged Barleywine', 'Saison By The Sea', 'Red Devil', 'Idiot IPA', 'Blue Bridge Coffee Stout', 'Islander IPA', 'Hoppy Daze IPA']
}, {
    "Brewery": 'N��rrebro Bryghus',
    "Beers": ['New York Lager', 'N��rrebro Julebryg', 'Little Korkny Ale', 'V��rTripel', 'La Granja Stout', 'Bombay Pale Ale', 'North Bridge Extreme']
}, {
    "Brewery": '10 Barrel Brewing Co.',
    "Beers": ['ISA (India-Style Session Ale)', 'Oregon Brown Ale', 'Precursor', 'S1nist0r Black Ale', 'Apocalypse IPA']
}, {
    "Brewery": 'Oakland Brewing Company',
    "Beers": ['Sticky Zipper']
}, {
    "Brewery": 'Wadworth and Company Ltd.',
    "Beers": ['Bishop\'s Tipple', '6X']
}, {
    "Brewery": 'Microbrasserie de l\'ile d\'Orl��ans',
    "Beers": ['Jean Dit Laforge', 'Joseph Bellarmin', 'Monseigneur D\'Esgly']
}, {
    "Brewery": 'Clown Shoes',
    "Beers": ['Clementine 1.5', 'Let My People Go', 'Clementine', 'Brown Angel', 'Chocolate Sombrero', 'Lubrication', 'Tramp Stamp', 'Blaecorn Unidragon', 'Muffin Top', 'Vampire Slayer', 'Pimp', 'Angry Beast', 'Genghis Pecan', 'Eagle Claw Fist', 'Flight Of The Pimp', 'Miracle', 'Porcine Unidragon', 'Hoppy Feet 1.5', 'Luchador En Fuego', 'Hoppy Feet', 'Supa Hero', 'Third Party Candidate']
}, {
    "Brewery": 'Strong Patrick Irish Red Ale',
    "Beers": ['Wild Oats Series No. 18']
}, {
    "Brewery": 'Blackfoot River Brewing Company',
    "Beers": ['Single Malt IPA']
}, {
    "Brewery": 'Enlightenment Ales',
    "Beers": ['Illumination (Farmhouse IPA)']
}, {
    "Brewery": 'Against The Grain "Brewery" &amp; Smokehouse',
    "Beers": ['Against The Grain / De Molen Bo &amp; Luke']
}, {
    "Brewery": 'Sin City Brewing Co.',
    "Beers": ['Sin City Stout', 'Sin City Amber']
}, {
    "Brewery": 'Saltram of Barossa',
    "Beers": ['Pepperjack Hand Crafted Ale']
}, {
    "Brewery": 'Maple Pecan Porter',
    "Beers": ['Samuel Adams Sample B']
}, {
    "Brewery": 'Adelbert\'s "Brewery"',
    "Beers": ['Naked Nun', 'Scratchin\' Hippo']
}, {
    "Brewery": 'Moylan\'s "Brewery"',
    "Beers": ['Moylan\'s Special Bitter (MSB)', 'Hop Craic XXXXIPA', 'Kilt Lifter Scotch Ale', 'Danny\'s Irish Style Red Ale', 'Orange &amp; Black Congrats Ale!', 'White Christmas Belgian Style Wit', 'Chelsea Porter', 'White Christmas Spiced Winter Lager', 'Moylans Dragoons Dry Irish Stout', 'Moylander Double IPA', 'Ryan Sullivan\'s Imperial Stout', 'NorCal IPA', 'Tipperary Pale Ale', 'India Pale Ale', 'Old Blarney Barleywine', 'Hopsickle Imperial India Pale Ale']
}, {
    "Brewery": 'Bluegrass Brewing Co.',
    "Beers": ['Luna De Miel: Raspberry Meade', 'Sheltowee GloomSucker Black Ale', 'Mephistopheles\' Metamorphosis', 'Hell For Certain', 'Dark Star Porter', 'Jefferson\'s Reserve Bourbon Barrel Stout', 'Heine Brothers Coffee Stout', 'Homewrecker', 'American Pale Ale', 'Bearded Pat\'s Barleywine', 'Rye 75', 'Professor Gesser\'s Mind Numbing Ale', 'Sheltowee Hop-A-Lot IPA', 'Bourbon Barrel Stout (Clay Street Series)']
}, {
    "Brewery": 'The Original Basil T\'s',
    "Beers": ['Maxwell\'s Dry Stout']
}, {
    "Brewery": 'Old Harbor "Brewery" Steak &amp; Lobster House',
    "Beers": ['Cerveza Kofresi']
}, {
    "Brewery": 'Brasserie de Blaugies',
    "Beers": ['Brasserie De Blaugies / Hill Farmstead La Vermontoise', 'Bi��re Darbyste', 'La Moneuse', 'La Moneuse Sp��ciale No��l', 'Saison D\'Epeautre']
}, {
    "Brewery": 'St. John Brewers',
    "Beers": ['Virgin Islands Pale Ale', 'Island Hoppin\' IPA', 'Island Summer Ale']
}, {
    "Brewery": 'Brouwerij Palm NV',
    "Beers": ['Palm Export', 'Brugge Tripel', 'Palm / Palm Speciale', 'Steenbrugge Blond', 'Steenbrugge Dubbel Bruin', 'Steenbrugge Wit', 'Steenbrugge Tripel']
}, {
    "Brewery": 'Bayern Brewing, Inc.',
    "Beers": ['Bayern St. Wilbur Weizen', 'Bayern Dump Truck', 'Bayern Oktoberfest Lager', 'Bayern Killarney Red Lager', 'Bayern Amber', 'Bayern Dragon\'s Breath', 'Bayern Face Plant Doppel Weizen', 'Bayern Dancing Trout Ale', 'Bayern Doppelbock', 'Bayern Pilsener']
}, {
    "Brewery": 'Three Creeks Brewing Co.',
    "Beers": ['Hoodoo Voodoo IPA']
}, {
    "Brewery": 'Maine Beer Company',
    "Beers": ['Thank You Allan', 'Mean Old Tom', 'Zoe', 'Peeper Ale', 'King Titus', 'Lunch', 'MO', 'Lil One', 'Maine Beer Company / Lawson\'s Finest Liquids Collaboration Time I']
}, {
    "Brewery": 'Erzquell Brauerei Bielstein Haas &amp; Co. KG',
    "Beers": ['Zunft K�_lsch']
}, {
    "Brewery": 'Kutztown Tavern',
    "Beers": ['Black Onyx Stout']
}, {
    "Brewery": 'Brasserie De L��Abbaye Du Cateau',
    "Beers": ['Vivat Triple']
}, {
    "Brewery": 'Ruby Mountain Brewing',
    "Beers": ['Bristlecone Brown Porter', 'Angel Creek Amber Ale']
}, {
    "Brewery": 'Silver Moon Brewing',
    "Beers": ['HOP-Tagon X-Series: Imperial IPA', 'Snake Bite Porter', 'Hop Knob IPA']
}, {
    "Brewery": 'Emmett\'s Brewing Company',
    "Beers": ['Victory Pale Ale']
}, {
    "Brewery": 'The Livery',
    "Beers": ['5th Dimension']
}, {
    "Brewery": 'French Broad Brewing Co.',
    "Beers": ['Zepptemberfest', 'Anvil Porter', 'Dunkle Witte (Dark &amp; White)', 'French Broad IPA', 'Gateway Kolsch', 'Wee Heavy-er Scotch Style Ale', '13 Rebels ESB', 'Rye Hopper']
}, {
    "Brewery": 'RJ Rockers Brewing Company',
    "Beers": ['Star Spangled Stout Ale', 'Honey Amber Ale', 'Gruntled Pumpkin', 'Light Rock Ale', 'Son Of A Peach', 'Buckwheat After Dark (BAD) Ale', 'Rockhopper IPA', 'Fish Paralyzer Belgian-Style Pale Ale', 'Bell Ringer', 'The First Snow Ale', 'Bald Eagle Brown Ale', 'Patriot Pale Ale', 'Black Perle Dark IPA']
}, {
    "Brewery": 'Driftwood "Brewery"',
    "Beers": ['Twenty Pounder', 'Driftwood Ale', 'Blackstone Porter', 'White Bark Ale', 'Farmhand Ale', 'Crooked Coast Altbier', 'Naughty Hildegard ESB', 'Singularity', 'Old Cellar Dweller', 'Fat Tug IPA', 'Sartori Harvest IPA']
}, {
    "Brewery": 'Brauerei Spezial',
    "Beers": ['Spezial Rauchbier M�_rzen', 'Spezial Rauchbier Lager']
}, {
    "Brewery": '18th Street "Brewery"',
    "Beers": ['Sinister']
}, {
    "Brewery": 'Nodding Head "Brewery" and Restaurant',
    "Beers": ['60 Shilling Ale', 'Monkey Knife Fight', '3C Extreme Ale', 'Grog', 'B.P.A.']
}, {
    "Brewery": 'Two Brothers Brewing Company',
    "Beers": ['Pہhoehoe', 'Take Two', '91 Shilling', 'Bare Tree Weiss Wine Vintage 2011', 'Hop Juice Black', 'SideKick Extra Pale Ale', 'Dark Mild', 'Monarch White Beer', 'Old 1713', 'Hoodwink', 'Ebel\'s Weiss Beer', 'Brown Fox Session Ale', 'Philosopher\'s Stone', 'Long Haul Session Ale', 'Domaine DuPage French Style Country Ale', 'Northwind Imperial Stout', 'Bonfire Dunkle Weiss', 'Prairie Path Ale', 'Outlaw IPA', 'Askew', 'Victor\'s MemoriAle Altbier', 'Dog Days Dortmunder Style Lager', 'Red Eye Coffee Porter', 'The Bitter End Pale Ale', 'Reprieve', 'Resistance IPA', 'Cane &amp; Ebel', 'Circus Penguin', 'Heavy Handed IPA', 'Hop Juice Double India Pale Ale', 'Heavier Handed IPA', 'Revelry']
}, {
    "Brewery": 'Desnoes &amp; Geddes Limited',
    "Beers": ['Guinness Foreign Extra Stout (Jamaica)', 'Dragon Stout']
}, {
    "Brewery": 'Angry Minnow Brewpub',
    "Beers": ['River Pig Pale Ale']
}, {
    "Brewery": 'Cervejarias Reunidas Skol-Caracu',
    "Beers": ['Caracu']
}, {
    "Brewery": 'Shoreline "Brewery" And Restaurant',
    "Beers": ['Big Bourbon Series Big Bella Scotch Ale', 'Big Bourbon Series Lost Sailor Imperial Stout', 'Big Bourbon Series Discombobulation Celebration Ale']
}, {
    "Brewery": 'Rush River Brewing Company',
    "Beers": ['Small Axe Golden Ale', 'Lost Arrow Porter', 'Winter Warmer', 'Nevermore Chocolate Oatmeal Stout', 'Double Bubble', 'The Unforgiven Amber Ale', 'Bubblejack India Pale Ale']
}, {
    "Brewery": 'Blue &amp; Gray Brewing Co.',
    "Beers": ['Chocolate Raspberry Stout', 'Temporary Insanity Imperial Stout', 'Borman\'s Belgian Ale', 'Classic Lager', 'Fred Red Ale', 'Falmouth American Pale Ale', 'Stonewall Stout', 'Minor Dementia Bourbon Barrel Imperial Stout']
}, {
    "Brewery": 'Winter Ale',
    "Beers": ['Moa 5 Hop']
}, {
    "Brewery": 'Greenport Harbor Brewing Company',
    "Beers": ['Citrus IPA', 'Greenport Harbor Spring Turning Rye Saison', 'Leaf Pile Ale', 'Harbor Ale', 'Hopnami DIPA', 'Black Duck Porter']
}, {
    "Brewery": 'Saku "Brewery" LTD',
    "Beers": ['Saku Porter', 'Saku Tume', 'Saku Estonian Porter']
}, {
    "Brewery": 'New Jersey Beer Company',
    "Beers": ['Garden State Stout', 'Hudson Pale Ale']
}, {
    "Brewery": 'The Kernel "Brewery"',
    "Beers": ['IPA Citra', 'Imperial Brown Stout London 1856', 'Export Stout']
}, {
    "Brewery": 'Birrificio Le Baladin',
    "Beers": ['Xyauy�_ Etichetta Argento (Silver)', 'Elixir', 'Xyauy�_ Etichetta Oro (Gold)', 'No��l Baladin', 'Super Baladin', 'Isaac', 'Baladin Nora', 'Xyauy�_ Etichetta Rame (Copper)', 'Wayan']
}, {
    "Brewery": 'Mad Anthony Brewing Company',
    "Beers": ['Gabby Blonde Lager', 'Auburn Lager', 'Old Fort Porter', 'Ol Woody Pale Ale', 'Mad Anthony IPA']
}, {
    "Brewery": 'Inveralmond "Brewery" Ltd., The',
    "Beers": ['Santa\'s Swallie', 'Ossian', 'Blackfriar', 'Lia Fail']
}, {
    "Brewery": 'Mickey Finn\'s "Brewery"',
    "Beers": ['Mickey Finn\'s Amber Ale']
}, {
    "Brewery": 'Backcountry "Brewery" (Brewpub &amp; Pizzeria)',
    "Beers": ['Switchback Amber', 'Peak One Porter', 'Telemark India Pale Ale (I.P.A.)']
}, {
    "Brewery": 'Ranger Creek Brewing &amp; Distilling',
    "Beers": ['Small Batch Series No. 2: Texas Farmhouse Ale', 'Small Batch Series No. 1: Oak-Aged Rye OPA', 'La Bestia Aimable']
}, {
    "Brewery": 'Privatbrauerei Eichbaum GmbH &amp; Co. KG',
    "Beers": ['Gerstel Non Alcoholic', 'Eichbaum Ureich Premium Pils']
}, {
    "Brewery": 'Rinku��kiai Alaus Darykloje',
    "Beers": ['Aiko Pale']
}, {
    "Brewery": 'Mildura Theatre "Brewery" Pty Ltd',
    "Beers": ['Storm Cloudy Ale']
}, {
    "Brewery": 'Brasserie Dubuisson Fr��res sprl',
    "Beers": ['Bush Blonde', 'Scaldis Blond Ale Triple', 'Bush De No��l', 'Bush De Nuits', 'Cuv��e Des Trolls', 'P��che Mel', 'Bush Ambr��e', 'Bush Prestige', 'Bush De No��l Premium']
}, {
    "Brewery": 'Great Dane Pub &amp; Brewing Company (Downtown)',
    "Beers": ['Stone of Scone Scotch Ale', 'Crop Circle Wheat', 'Black Earth Porter', 'Old Glory American Pale Ale', 'Texas Speedbump IPA']
}, {
    "Brewery": 'Crouch Vale "Brewery" Limited',
    "Beers": ['Crouch Vale Brewers Gold']
}, {
    "Brewery": 'Piccolo Birrificio',
    "Beers": ['Seson', 'Chiostro']
}, {
    "Brewery": 'The Grumpy Troll Restaurant and "Brewery"',
    "Beers": ['Spetsnaz', 'Maggie']
}, {
    "Brewery": 'Thunderhead Brewing Company',
    "Beers": ['Cornstalker Espresso Stout', 'Cornstalker Dark Wheat', 'Golden Fra�_ Honey Wheat']
}, {
    "Brewery": 'Stone Brewing Co.',
    "Beers": ['SoCal Hop Salute Black Double IPA', 'Espresso Imperial Russian Stout', 'Levitation Ale', 'Barrel Aged Ken Schmidt / Maui / Stone Kona Coffee Macadamia Coconut Porter', 'Oaked Arrogant Bastard Ale', 'Belgo Anise Imperial Russian Stout', 'Ruination IPA', 'The Bruery / Elysian / Stone La Citrueille Celeste De Citracado', 'Arrogant Bastard Ale', 'Stone 12.12.12 Vertical Epic Ale', 'Jason Fields &amp; Kevin Sheppard / Tr�_egs / Stone Cherry Chocolate Stout', 'Stone Pale Ale', 'Stone Cali-Belgique', 'Ken Schmidt / Iron Fist / Stone Mint Chocolate Imperial Stout', 'Sawyer\'s Triple', 'Imperial Russian Stout', 'Old Guardian BELGO Barleywine', 'Baird / Ishii / Stone Japanese Green Tea IPA', '16th Anniversary IPA', 'Old Guardian Barley Wine Style Ale', 'Double Bastard Ale', 'Lukcy Basartd Ale', 'Ruination Tenth Anniversary IPA', 'Enjoy By IPA', 'Bear Republic / Fat Head\'s / Stone TBA', 'Sublimely Self-Righteous Ale']
}, {
    "Brewery": 'Baltika Breweries',
    "Beers": ['Yarpivo Amber (Yantarnoye)', 'Baltika #6 Porter', 'Baltika #8 Wheat', 'Baltika #4 Original (Dark)']
}, {
    "Brewery": 'Boak Beverage',
    "Beers": ['Boaks Double BW', 'Boaks Two Blind Monks Ale', 'Boaks Monster Mash Imperial Stout']
}, {
    "Brewery": 'Arcobr�_u Gr�_fliches Brauhaus',
    "Beers": ['Arcobr�_u Bavarian Wheat Beer', 'Arcobr�_u Zwickl Lager']
}, {
    "Brewery": 'St. George Brewing Company, The',
    "Beers": ['Winter Scotch Ale', 'Lager', 'India Pale Ale', 'Winter Stout (Russian Imperial Stout)', 'Summer Ale', 'Pilsner', 'American Brown Ale', 'Porter', 'Golden Ale']
}, {
    "Brewery": 'Birra Tenute Collesi SRL',
    "Beers": ['Imper Ale Main Nera', 'Imper Ale Ubi Rossa']
}, {
    "Brewery": 'Ale Asylum',
    "Beers": ['Happy Ending', 'Gold Digger Blonde Ale', 'Tripel Nova', 'Mad Town Nut Brown', 'Big Slick Stout', 'Sticky McDoogle', 'Contorter', 'Mercy', 'Satisfaction Jacksin', 'Hopalicious', 'Ballistic IPA', 'Bedlam', 'Ambergeddon']
}, {
    "Brewery": 'Brauerei Michael Plank',
    "Beers": ['Pilserl', 'Plank Bavarian Hefeweizen', 'Plank Bavarian Dunkler Weizenbock', 'Plank Bavarian Heller Weizenbock', 'Bavarian Heller Doppelbock']
}, {
    "Brewery": 'Innstadt Brauerei',
    "Beers": ['Innstadt Neues Helles', 'D\' Inn\'Staade', 'Passauer Weisse', 'Innstadt Doppelbock Extra']
}, {
    "Brewery": 'Publican House "Brewery"',
    "Beers": ['Square Nail Pale Ale']
}, {
    "Brewery": 'Dry Dock Brewing Co.',
    "Beers": ['Three Heavy Wee Heavy', 'Apricot Ale', 'Hop Abomination', 'Dry Dock Hefeweizen', 'Urca Vanilla Porter', 'Bligh\'s Barleywine Ale', 'Dry Dock\'s Double IPA']
}, {
    "Brewery": 'Nashoba Valley Winery',
    "Beers": ['Oaktoberfest', 'Summer Stout', 'IPA', 'Bolt 117 Lager', 'Heron Ale', 'Imperial Stout']
}, {
    "Brewery": 'Beer Valley Brewing Co.',
    "Beers": ['Delta 9', 'Owyhee Amber Ale', 'Leafer Madness', 'Highway To Ale Barleywine', 'Pigskin Pale Ale', 'Leafer Madness (Hop Harvest Edition)', 'Black Flag Imperial Stout', 'Black Flag Imperial Stout (Hop Harvest Edition)']
}, {
    "Brewery": 'Bethlehem Brew Works',
    "Beers": ['Monkey Wrench Saison', 'Valley Golden Ale', 'CH-47', 'Fegley\'s ESB', 'Bourbon Barrel Aged Insidious', 'Steelworker\'s Oatmeal Stout', 'Rude Elf\'s Reserve (formerly Rudolph\'s Reserve)', 'Insidious Imperial Stout', 'Hop Explosion', 'Devious Imperial Pumpkin', 'Hop\'solutely']
}, {
    "Brewery": 'Harmon Restaurant &amp; "Brewery"',
    "Beers": ['Brown\'s Point ESB', 'Rajah\'s Royal IPA', 'Puget Sound Porter', 'Point Defiance IPA']
}, {
    "Brewery": 'Brouwerij Hof Ten Dormaal',
    "Beers": ['Wit Goud', 'Dark', 'Blond', 'Amber']
}, {
    "Brewery": 'Southern Star Brewing Company',
    "Beers": ['Walloon', 'Le Mort Vivant', 'Bombshell Blonde', 'Pro-AM 2012 (Imperial IPA)', 'Pine Belt Pale Ale', 'Buried Hatchet Stout']
}, {
    "Brewery": 'Triton Brewing Company',
    "Beers": ['Railsplitter IPA']
}, {
    "Brewery": 'Triple Rock "Brewery" &amp; Alehouse',
    "Beers": ['IPAX India Pale Ale', 'Dragon\'s Milk']
}, {
    "Brewery": 'Mordue "Brewery"',
    "Beers": ['Workie Ticket']
}, {
    "Brewery": 'Griesedieck Brothers "Brewery" Co.',
    "Beers": ['Premium Golden Pilsner']
}, {
    "Brewery": 'Einhorn Beer Company',
    "Beers": ['Unikator Doppelbock', 'Spezial Pilsner']
}, {
    "Brewery": 'Lunar Brewing',
    "Beers": ['Moondance IPA']
}, {
    "Brewery": 'Lost Rhino Brewing Company',
    "Beers": ['Face Plant', 'New River Pale Ale']
}, {
    "Brewery": '�� l���abri de la Temp��te',
    "Beers": ['��cume', 'TerreFerme', 'Corps Mort', 'Corne De Brume']
}, {
    "Brewery": 'Brouwerij Sint-Jozef',
    "Beers": ['Brussels White', 'Limburgse Witte']
}, {
    "Brewery": 'Lake of Bays Brewing Company',
    "Beers": ['10 Point India Pale Ale', 'Crosswind Pale Ale', 'Spark House Red Ale']
}, {
    "Brewery": 'Nebraska Brewing Company',
    "Beers": ['Cardinal Pale Ale', 'EOS Hefeweizen', 'Hop God']
}, {
    "Brewery": 'The Cambridge House Brewpub',
    "Beers": ['Cambridge House Three Steve Stout', 'Cambridge House Copper Hill K�_lsch', 'Cambridge House Abijah Rowe IPA']
}, {
    "Brewery": 'Community Beer Works',
    "Beers": ['Frank']
}, {
    "Brewery": 'Panil',
    "Beers": ['Panil Barriqu��e Riserva', 'Panil Barriqu��e (Sour Version)', 'Panil Barriqu��e  (Italy Version)']
}, {
    "Brewery": 'Brasserie Thiriez',
    "Beers": ['La Maline', 'Bi��re De No��l', 'L��Ambr��e D��Esquelbecq / Thiriez Amber', 'La Blonde D\'��Esquelbecq / Thiriez Blonde', 'Flandre-Kent Les Fr��res De La Bi��re / Thiriez XXtra']
}, {
    "Brewery": 'Firehouse Brewing Co.',
    "Beers": ['Smoke Jumper Stout']
}, {
    "Brewery": 'Ale Amber Ale',
    "Beers": ['Blue Point Crop Circle Extraterrestri']
}, {
    "Brewery": 'Laurelwood Pizza Co. (CLOSED)',
    "Beers": ['Organic Tree Hugger Porter', 'Free Range Red', 'Deranger Imperial Red', 'Vinter Varmer']
}, {
    "Brewery": 'Brouwerij Van Eecke N.V.',
    "Beers": ['Kapittel Dubbel', 'Watou\'s Wit Beer', 'Kapittel Prior', 'Kapittel Blond', 'Kapittel Abt', 'Poperings Hommel Bier', 'Kapittel Pater']
}, {
    "Brewery": 'Melbourn Bros.',
    "Beers": ['Melbourn Bros. Cherry', 'Melbourn Bros. Strawberry', 'Melbourn Bros. Apricot']
}, {
    "Brewery": 'Abita Brewing Co.',
    "Beers": ['Abita Select Imperial Louisiana Oyster Stout', 'Spring IPA', 'Pecan Harvest Ale', 'Amber', 'Abbey Ale', 'Satsuma Harvest Wit', 'Turbodog', 'Christmas Ale 2012', 'Wheat', 'Mardi Gras Bock', 'Restoration Pale Ale', 'Jockamo IPA', 'Andygator', 'Strawberry Harvest Lager', '25th Anniversary Vanilla Doubledog', 'SOS (Save Our Shore)']
}, {
    "Brewery": 'Hantverksbryggeriet AB',
    "Beers": ['Baronen', 'Kosacken']
}, {
    "Brewery": 'Great Lakes "Brewery"',
    "Beers": ['Great Lakes Karma Citra IPA', 'Great Lakes 25th Anniversary Robust Porter', 'Great Lakes 25th Anniversary Belgian Saison', 'Great Lakes 25th Anniversary Imperial Black IPA', 'Great Lakes Green Tea Ale', 'Great Lakes Orange Peel Ale', 'Great Lakes Winter Ale', 'Great Lakes Miami Weiss', 'Great Lakes Devil\'s Pale Ale', 'Great Lakes Crazy Canuck Pale Ale']
}, {
    "Brewery": 'Brauerei Gusswerk GmbH',
    "Beers": ['Meinklang Ancient Grains Ale']
}, {
    "Brewery": 'Zion Canyon Brewing Company',
    "Beers": ['Springdale Amber Ale', 'Hop Valley India Pale Ale', 'Jamaican Style Lager']
}, {
    "Brewery": 'Fireman\'s Brew, Inc.',
    "Beers": ['Fireman\'s Brew Brunette Beer']
}, {
    "Brewery": 'Grebbestad Bryggeri',
    "Beers": ['Lunator']
}, {
    "Brewery": 'Mount Shasta Brewing',
    "Beers": ['Weed Lemurian Golden Lager', 'Abner Weed Amber Ale', 'Shastafarian Porter', 'Mountain High IPA']
}, {
    "Brewery": 'Brauerei zur Malzm�_hle Schwartz KG',
    "Beers": ['M�_hlen K�_lsch']
}, {
    "Brewery": 'Shipwrecked Brew Pub, Restaurant and Inn',
    "Beers": ['Captain\'s Copper', 'Peninsula Porter']
}, {
    "Brewery": 'Penobscot Bay "Brewery"',
    "Beers": ['Old Factory Whistle Scottish Ale']
}, {
    "Brewery": 'Brouwerij De Troch',
    "Beers": ['Chapeau Kriek Lambic', 'Chapeau Framboise Lambic', 'Chapeau Mirabelle Lambic', 'Chapeau Lemon Lambic', 'Chapeau Apricot Lambic', 'Chapeau Fraise Lambic', 'Chapeau Faro Lambic']
}, {
    "Brewery": 'Unibroue',
    "Beers": ['La Gaillarde', 'Quelque Chose', '��phem��re (Framboise)', 'La Bolduc', '��ph��m��re (Cassis / Black Currant)', 'Blanche De Chambly', 'Don De Dieu', '1837', 'Maudite', 'Noire De Chambly / Chambly Noire', 'Raftman', 'La Fin Du Monde', 'La Fringante', 'Trois Pistoles', 'La Terrible', '��ph��m��re (Apple)', 'Quatre-Centi��me Brassin Comm��moratif', 'Blonde De Chambly', 'La Seigneuriale', 'Eau Benite', 'Unibroue 17 Grande R��serve']
}, {
    "Brewery": 'Black Creek Historic "Brewery"',
    "Beers": ['Black Creek Dray Horse Ale', 'Black Creek Stout', 'Black Creek Pumpkin Ale', 'Black Creek Rifleman\'s Ration', 'Black Creek Porter']
}, {
    "Brewery": 'The Celt Experience "Brewery"',
    "Beers": ['Native Storm', 'Bronze Ale', 'Golden Ale']
}, {
    "Brewery": 'O\'Dempsey\'s',
    "Beers": ['Big Red Ale', 'Inukshuk IPA', 'Your Black Heart Russian Imperial Stout']
}, {
    "Brewery": 'Epic Ales',
    "Beers": ['Terra Saurus']
}, {
    "Brewery": 'Brouwerij Van den Bossche',
    "Beers": ['Lamoral Degmont', 'Pater Lieven Bruin', 'Buffalo Belgian Bitter', 'Pater Lieven Tripel', 'Pater Lieven (Kerst Pater Special) Christmas', 'Buffalo Belgian Stout']
}, {
    "Brewery": 'The Olde Mecklenburg "Brewery"',
    "Beers": ['Yule Bock', 'Fruehbock (Fr�_h Bock)', 'Captain James Jack Pilsner', 'Dunkel Lager', 'Bauern Bock', 'OMB Copper', 'Mecktoberfest']
}, {
    "Brewery": 'Moskovskaya Pivovarennaya Kompaniya',
    "Beers": ['Moskvas Klassicheskiy']
}, {
    "Brewery": 'Redoak Boutique Beer Caf��',
    "Beers": ['Organic Hefeweizen']
}, {
    "Brewery": 'Yellowstone Valley Brewing Co.',
    "Beers": ['Huckle-weizen', 'Renegade Red Ale', 'Wild Fly Ale', 'Black Widow Oatmeal Stout']
}, {
    "Brewery": 'Buffalo Water Brewing Co',
    "Beers": ['Bison Blonde']
}, {
    "Brewery": 'Shepherd Neame Ltd',
    "Beers": ['Late Red', 'Early Bird', 'Master Brew Kentish Ale', 'Shepherd Neame 1698 Celebration Ale', 'Spitfire (Premium Ale Export)', 'Bishops Finger', 'Goldings']
}, {
    "Brewery": 'Malmg��rdin Panimo',
    "Beers": ['Huvila X-Porter', 'Huvila John Golding E.S.B.', 'Arctic Circle Ale']
}, {
    "Brewery": 'Element Brewing Company',
    "Beers": ['Summer Pilsner Fusion', 'Brix', 'Altoberfest', 'Vernal', 'Red Giant', 'Extra Special Oak (ESO)', 'Dark Element']
}, {
    "Brewery": 'Olvalde Farm &amp; Brewing Company',
    "Beers": ['Brynhildr\'s Gift', 'Ode To A Russian Shipwright', 'The Auroch\'s Horn']
}, {
    "Brewery": 'Whiskey Oak Barrel Aged',
    "Beers": ['Penn Quarter Porter']
}, {
    "Brewery": 'Amber\'s Brewing Co.',
    "Beers": ['Lunch Pail Ale', 'Australian Mountain Pepper Berry', 'Kenmount Road Chocolate Stout', 'Sap Vampire Maple Lager']
}, {
    "Brewery": 'Pivovar Rakovnik',
    "Beers": ['Bakalar Svetl�_ Le�_��k']
}, {
    "Brewery": 'Hopfenstark',
    "Beers": ['Ostalgia Rousse', 'Boson De Higgs', 'Baltic Porter De L\'Ancrier', 'Saison Station 7', 'Saison Station 55', 'Saison Station 16', 'Post Coloniale', 'Ostalgia Blonde']
}, {
    "Brewery": 'Hanseatische Getr�_nke-Industrie (HGI) Holsten-Brauerei AG',
    "Beers": ['Duckstein Rotblondes Original', 'Holsten Festbock', 'Duckstein Copper-Gold Premium']
}, {
    "Brewery": 'Ska Brewing Co.',
    "Beers": ['The Toasters 30th Anniversary', 'True Blonde Dubbel', 'Mole Stout', 'Ten Pin Porter!', 'Buster Nut Brown Ale', 'Hibernal Vinifera Stout', 'ESB Special Ale', 'Mexican Logger', 'Nefarious Ten Pin Imperial Porter', 'Pinstripe Red Ale', 'True Blonde Ale', 'Decadent Imperial IPA', 'Steel Toe Stout', 'Modus Hoperandi', 'Euphoria Pale Ale']
}, {
    "Brewery": 'Whiskey Barrel Aged)',
    "Beers": ['Chubourbon (Old Chub']
}, {
    "Brewery": 'De Cam Geuzestekerij',
    "Beers": ['Kriekenlambiek De Cam', 'Oude Kriek De Cam', 'Oude Lambiek De Cam', 'Oude Geuze De Cam']
}, {
    "Brewery": 'Dale Bros. "Brewery"',
    "Beers": ['California Black Beer']
}, {
    "Brewery": 'Figueroa Mountain Brewing Co.',
    "Beers": ['Davy Brown Ale', 'Hoppy Poppy IPA', 'Hurricane Deck IPA']
}, {
    "Brewery": 'Lighthouse Brewing Company',
    "Beers": ['Deckhand Belgian Saison', 'Switchback IPA', 'Uncharted Belgian IPA', 'Race Rocks Ale', 'Beacon IPA', 'Keepers Stout']
}, {
    "Brewery": 'Grimm Brothers Brewhouse',
    "Beers": ['The Count']
}, {
    "Brewery": 'Greenpoint Beerworks / Kelso of Brooklyn',
    "Beers": ['Kelso Industrial Pale Ale', 'Kelso Pilsner', 'Kelso IPA', 'Kelso Nut Brown Lager']
}, {
    "Brewery": 'Atlantic Brewing Company',
    "Beers": ['Manly Men Beer Club El Hefe', 'Bar Harbor Summer Ale', 'Bar Harbor Blueberry Ale', 'Brother Adam\'s Bragget Ale', 'New Guy IPA', 'Mount Desert Island Ginger', 'Manly Men Beer Club Sea Smoke', 'S.O.B. (Special Old Bitter Ale)', 'Bar Harbor Real Ale', 'Coal Porter']
}, {
    "Brewery": 'Big Rock "Brewery"',
    "Beers": ['Big Rock Black Amber Ale', 'Big Rock McNally\'s Extra Ale', 'Big Rock Traditional Ale']
}, {
    "Brewery": 'Rohrbach Brewing Company (Brewpub)',
    "Beers": ['Highland Lager', 'Vanilla Porter']
}, {
    "Brewery": 'Grand Teton Brewing Co.',
    "Beers": ['Fest Bier M�_rzen Lager', 'Howling Wolf Weisse Bier', 'Snarling Badger Berliner Weisse', 'The Grand Saison', 'Black Cauldron Imperial Stout', 'Old Faithful Ale', 'Teton Ale', 'Sweetgrass American Pale Ale (APA)', 'Wake Up Call Imperial Coffee Porter', 'XX Bitch Creek', 'Lost Continent Double IPA', '5 O\'clock Shadow Double Black Lager', 'Bitch Creek ESB (Extra Special Brown)', 'Double Vision Doppelbock', 'Pursuit Of Hoppiness']
}, {
    "Brewery": 'Big Wood "Brewery"',
    "Beers": ['Morning Wood']
}, {
    "Brewery": 'Neustadt Springs "Brewery"',
    "Beers": ['Neustadt Big Dog Beaujolais Porter', 'Neustadt Texas Tea Honey Stout', 'Neustadt Scottish Pale Ale', 'Neustadt 10w30', 'Neustadt Lager']
}, {
    "Brewery": 'BJ\'s Chicago Pizza &amp; "Brewery" Inc.',
    "Beers": ['Harvest Hefeweizen', 'Brewhouse Blonde', 'PM Porter', 'Pirhana Pale Ale']
}, {
    "Brewery": 'Weiss O\'Lantern',
    "Beers": ['Wild Oats Series No. 13']
}, {
    "Brewery": 'The Caledonian "Brewery" Company Limited',
    "Beers": ['Gordon Highland Scotch Ale (John Martin N.V.)', 'McEwan\'s Export', 'John Courage Amber', 'Newcastle Brown Ale', 'McEwan\'s Scotch Ale', 'Newcastle Founders\' Ale', 'McEwan\'s No.1 Champion']
}, {
    "Brewery": 'Brew Brothers "Brewery"',
    "Beers": ['Black Pilsner']
}, {
    "Brewery": 'Summit Brewing Company',
    "Beers": ['Summit 100% Organic Ale', 'Summit Hefe Weizen', 'Summit Winter Ale', 'Summit Oktoberfest Marzen', 'Summit Belgian Style Abbey Ale', 'Summit Oatmeal Stout', 'Summit Great Northern Porter', 'Summit Dunkel Weizen', 'Summit Extra Pale Ale', 'Summit Maibock', 'Summit India Pale Ale', 'Old 152', 'Summit Summer Ale', 'Summit Pilsener', 'Saga', 'Summit Horizon Red Ale']
}, {
    "Brewery": 'Half Pints Brewing Company',
    "Beers": ['Black Galaxy', 'St. James Pale Ale', 'Demeter\'s Harvest', 'Bulldog Amber Ale', 'Stir Stick Stout', 'Humulus Ludicrous', 'Pothole Porter', 'Phil\'s Pils', 'Little Scrapper IPA', 'Sweet Nikki Brown']
}, {
    "Brewery": 'Scuttlebutt Brewing Company',
    "Beers": ['Weizen Bock', 'Homeport Blonde', 'Hoptopia', 'Old No. 1 Barleywine', 'Scuttlebutt Amber', '10 Degrees Below', 'Tripel 7 Belgian Style Ale', 'Gale Force India Style Pale Ale']
}, {
    "Brewery": 'Rapscallion',
    "Beers": ['Rapscallion Honey', 'Rapscallion Premier', 'Rapscallion Blessing']
}, {
    "Brewery": 'Third Street Brewhouse',
    "Beers": ['Rise To The Top', 'Lost Trout', 'Sugar Shack', 'Bitter Neighbor']
}, {
    "Brewery": 'Free Will Brewing Company',
    "Beers": ['Citra Pale Ale']
}, {
    "Brewery": 'Thurn Und Taxis Regensburg Gmbh F�_rstliche Brauerei',
    "Beers": ['Thurn Und Taxis Roggen']
}, {
    "Brewery": 'Benelux Brewpub &amp; Caf��',
    "Beers": ['Grande Armada R��serve']
}, {
    "Brewery": 'Lower Dens',
    "Beers": ['Sensory Series V.1']
}, {
    "Brewery": 'Pioneer Brewing Co.',
    "Beers": ['Pioneer Doublebock', 'Pioneer Stout']
}, {
    "Brewery": 'Peg\'s Cantina &amp; Brewpub',
    "Beers": ['Peg\'s G.O.O.D. Dancing Cody IPA', 'Peg\'s G.O.O.D. RareR D.O.S.', 'Peg\'s G.O.O.D. Rare D.O.S.']
}, {
    "Brewery": 'Flyers Restaurant And "Brewery"',
    "Beers": ['Afterburner IPA']
}, {
    "Brewery": 'Brasserie de Saverne',
    "Beers": ['Boris Organic']
}, {
    "Brewery": 'Zywiec Breweries PLC (Heineken)',
    "Beers": ['Tatra Mocne', 'Zywiec Porter']
}, {
    "Brewery": 'Brasserie D\'Ecaussinnes',
    "Beers": ['Cookie Beer', 'Ultra Blonde', 'Ultra Brune']
}, {
    "Brewery": 'Amsterdam Brewing Company',
    "Beers": ['Amsterdam Framboise', 'KLB Raspberry Wheat Beer', 'Amsterdam Oranje Weisse', 'Amsterdam Nut Brown Ale', 'Amsterdam Boneshaker IPA', 'Amsterdam Tempest Imperial Stout', 'Amsterdam Spring Bock']
}, {
    "Brewery": 'Triangle Brewing Company',
    "Beers": ['Triangle White Ale', 'India Pale Ale', 'Triangle Belgian Golden Ale']
}, {
    "Brewery": 'Brouwerij Mort Subite',
    "Beers": ['Mort Subite Oude Gueuze', 'Mort Subite Kriek', 'Mort Subite Framboise', 'Mort Subite Gueuze', 'Mort Subite Blanche']
}, {
    "Brewery": 'Gasthaus-Brauerei Braustelle',
    "Beers": ['Freigeist Ottekolong', 'Freigeist Hoppeditz', 'Freigeist Abraxxxas']
}, {
    "Brewery": 'Brasserie de la Senne',
    "Beers": ['Jambe De Bois', 'Very Sp��ciale Belge (Allagash Collaboration)', 'Stouterik', 'Zinnebir', 'X-Mas Zinnebir', 'Taras Boulba']
}, {
    "Brewery": 'Somerville Brewing Company (Slumbrew)',
    "Beers": ['Slumbrew Trekker Tripel', 'Slumbrew Happy Sol', 'Slumbrew My Better Half', 'Slumbrew Porter Square Porter', 'Slumbrew Flagraiser IPA']
}, {
    "Brewery": 'Moonlight Brewing Company',
    "Beers": ['Toast (Slightly Burnt)', 'Misspent Youth', 'Bony Fingers', 'Tipple', 'Working For Tips', 'Death &amp; Taxes Black Beer', 'Lunatic Lager', 'Reality Czeck', 'Twist Of Fate Bitter Ale', 'Bombay By Boat IPA', 'Homegrown Fresh Hop Ale']
}, {
    "Brewery": 'Kern River Brewing Company',
    "Beers": ['6th Anniversary Ale (Dirty Hippie Imperial Red Ale)', 'Winter (Rye) Ale', 'Class X (Bourbon Barrel Aged Class V)', 'Holiday Ale', 'Winter Ale (2012) / 5th Anniversary Ale', 'Isabella Blonde', 'Just Outstanding IPA', 'Class V Stout', 'Citra DIPA']
}, {
    "Brewery": 'Brouwerij Bavik',
    "Beers": ['Bavik Witte Ezel (White Donkey)', 'Wittekerke Winter Wit', 'Petrus Speciale', 'Petrus Gouden Tripel', 'Wittekerke', 'Pilaarbijter (Tripel Ale) Bruin (Red Cap)', 'Petrus Winterbier', 'Petrus Oud Bruin', 'Petrus Blond', 'Camaraderie', 'Pilaarbijter (Tripel Ale) Blond (Brass Cap)', 'Bavik Pils / Lager', 'Petrus Dubbel', 'Petrus Aged Pale', 'Petrus Speciale Ale', 'Petrus Winter #9']
}, {
    "Brewery": '(512) Brewing Company',
    "Beers": ['(512) Pale', '(512) Bruin', '(512) Wit', '(512) TWO', '(512) Black IPA', '(512) Whiskey Barrel Aged Double Pecan Porter', '(512) Pecan Porter', '(512) IPA']
}, {
    "Brewery": 'Brouwerij Slaapmutske',
    "Beers": ['Slaapmutske Dry-Hopped Lager', 'Slaapmutske Triple Nightcap', 'Kerstmutske Christmas Nightcap']
}, {
    "Brewery": 'Brasserie La Choulette',
    "Beers": ['La Choulette Framboise', 'La Choulette Blonde', 'La Choulette De No��l', 'La Choulette Ambr��e', 'Les Bi��re Des Sans Culottes']
}, {
    "Brewery": 'Wind River Brewing Company',
    "Beers": ['Blonde Ale']
}, {
    "Brewery": 'Cisco Brewers Inc.',
    "Beers": ['Island Reserve: Wet Hopped Very Brown India Pale Ale', 'Monomoy Kriek', 'Dark Woods', 'Moor Porter', 'Lady Of The Woods', 'Celebration Libation', 'Grey Lady', 'Baggywrinkle Barleywine', 'Summer Of Lager', 'Indie Pale Ale', 'Island Reserve: Saison Farmhouse Ale', 'Whale\'s Tale Pale Ale', 'Winter Shredder', 'Bailey\'s Blonde Ale', 'Sankaty Light', 'Island Reserve: Russian Imperial Stout', 'Captain Swain\'s Extra Stout', 'Pumple Drumkin Spiced Ale']
}, {
    "Brewery": 'Climax Brewing Company',
    "Beers": ['Golden Ale', 'Hoffmann Doppel Bock', 'Hoffmann Oktoberfest', 'India Pale Ale', 'Nut Brown Ale', 'Hoffmann Helles', 'Extra Special Bitter Ale']
}, {
    "Brewery": 'De Leyerth Brouwerijen (Urthel)',
    "Beers": ['Urthel Parlus Magnificum', 'Urthel Samaranth', 'Urthel Hibernus Quentum', 'Urthel Saisonni��re', 'Urthel Hop-It']
}, {
    "Brewery": 'Chelsea Brewing Company',
    "Beers": ['Hoppy Holidays', 'Tsar\'s Imperial Stout', 'Checker Cab Blonde Ale', 'Chelsea Hop Angel IPA', 'Black Hole XXX Stout']
}, {
    "Brewery": 'Nelson Sauvin',
    "Beers": ['Spice Of Life']
}, {
    "Brewery": 'Hardywood Park Craft "Brewery"',
    "Beers": ['Farmhouse Pumpkin', 'Mocha Belgique', 'Hoplar Imperial IPA', 'Bourbon Cru', 'Bourbon GBS (Gingerbread Stout)', 'Singel', 'Gingerbread Stout']
}, {
    "Brewery": 'Slavutych "Brewery"',
    "Beers": ['Lvivske Premium']
}, {
    "Brewery": 'Bison Brewing Co.',
    "Beers": ['Bison Organic Pumpkin Ale', 'Bison Organic Imperial Brown Ale', 'Bison Winter Warmer', 'Bison Organic Honey Basil', 'Bison Organic Golden Bock', 'Bison Organic Red Ale', 'Bison Organic Barleywine Ale', 'Bison Organic Gingerbread Ale', 'Bison Organic Belgian Ale', 'Bison Organic Chocolate Stout']
}, {
    "Brewery": 'Brasserie Belle-Vue',
    "Beers": ['Belle Vue Kriek']
}, {
    "Brewery": 'Stralsunder Brauerei',
    "Beers": ['St�_rtebeker Schwarzbier']
}, {
    "Brewery": 'Caldera Brewing Company',
    "Beers": ['Caldera Ginger Beer', 'Rauch ��r Bock', 'Old Growth Imperial Stout', 'Vas Deferens Ale', 'Hopportunity Knocks', 'Hop Hash', 'Ashland Amber', 'Mogli', 'Caldera IPA', 'Caldera Pale Ale']
}, {
    "Brewery": 'McMenamins',
    "Beers": ['Sunflower IPA', 'Ruby Ale', 'Hammerhead Ale', 'Terminator Stout']
}, {
    "Brewery": 'Hepworth &amp; Co. (Brewers) Ltd.',
    "Beers": ['Iron Horse']
}, {
    "Brewery": 'People\'s Brewing Company',
    "Beers": ['People\'s Pilsner', 'Mound Builder IPA']
}, {
    "Brewery": 'Brown\'s Brewing Company',
    "Beers": ['Brown Ale', 'Tomhannock Pilsner', 'Brown\'s Imperial Stout', 'Brown\'s IPA', 'Brown\'s Whiskey Porter', 'Brown\'s Oatmeal Stout', 'Brown\'s Pale Ale']
}, {
    "Brewery": 'Hochstiftliches Brauhaus',
    "Beers": ['Will-Brau Ur-Bock']
}, {
    "Brewery": 'Epic Brewing Company',
    "Beers": ['Epicurean Fig And Coffee', 'Epic Larger', 'Epic Lager', 'Epic / Dogfish Head Portamarillo', 'Epic Pale Ale', 'Mash Up New Zealand Collaboration Ale 2011', 'Epic Armageddon', 'Epic Hop Zombie']
}, {
    "Brewery": 'Cascade',
    "Beers": ['Double Dry Hop IPX']
}, {
    "Brewery": 'Woodforde\'s Norfolk Ales',
    "Beers": ['Norfolk Nog']
}, {
    "Brewery": 'Jack Daniels Barrel Aged',
    "Beers": ['Emelisse Imperial Russian Stout']
}, {
    "Brewery": 'Syndicate Restaurant &amp; "Brewery"',
    "Beers": ['Niagara\'s Best Blonde Ale']
}, {
    "Brewery": 'Casco Bay Brewing Co.',
    "Beers": ['Casco Bay Pale Ale', 'Casco Bay Oktoberfest', 'Casco Bay Brown Ale', 'Casco Bay Riptide Red Ale', 'Carrabassett Pale Ale', 'Casco Bay Summer Ale', 'Casco Bay Winter Ale (Old Port Ale)']
}, {
    "Brewery": 'Brasserie Caulier',
    "Beers": ['Blonde De No��l', 'Bon-Secours Ambr��e', 'Bon-Secours Blonde', 'Bon-Secours Brune']
}, {
    "Brewery": 'Coastal Extreme Brewing Co.',
    "Beers": ['Newport Storm India Point Ale', 'Newport Storm Rhode Island Blueberry', 'Newport Storm Blizzard Porter', 'Newport Storm Oktoberfest Marzen Lager', 'Newport Storm Spring Irish Red Ale']
}, {
    "Brewery": 'Tettnang',
    "Beers": ['Braumeister Pils']
}, {
    "Brewery": 'Rochester Mills Beer Co.',
    "Beers": ['Rochester Mills Milk Shake Stout', 'Rochester Mills Cornerstone IPA']
}, {
    "Brewery": 'Great South Bay "Brewery"',
    "Beers": ['Massive IPA']
}, {
    "Brewery": 'Gilded Otter Brewing Company',
    "Beers": ['Dusseldorf Alt']
}, {
    "Brewery": 'Cellar Rats "Brewery"',
    "Beers": ['The Piper\'s IPA', 'Black Rat Imperial Stout']
}, {
    "Brewery": 'Brasseurs De Montr��al',
    "Beers": ['Coeur Bris��']
}, {
    "Brewery": 'Grand Canyon "Brewery"',
    "Beers": ['Sunset Amber Ale', 'Black Iron India Pale Ale']
}, {
    "Brewery": 'Almond \'22',
    "Beers": ['Pink IPA']
}, {
    "Brewery": 'Pratt Street Ale House',
    "Beers": ['Oliver\'s Pagan Porter', 'Oliver\'s 3 Lions Ale', 'Oliver\'s Ironman Pale Ale', 'Oliver\'s ESB', 'Oliver\'s Best Bitter', 'Oliver\'s Bishop\'s Breakfast']
}, {
    "Brewery": '#NAME?',
    "Beers": ['Belhaven 80 +/-', 'Caledonian 80/-']
}, {
    "Brewery": 'Durham "Brewery" Ltd',
    "Beers": ['Evensong', 'Temptation', 'Benedictus']
}, {
    "Brewery": 'Hinterland "Brewery" Restaurant',
    "Beers": ['Bourbon Barrel Doppelbock', 'Winterland', 'Maple Bock', 'Pale Ale', 'Luna Coffee Stout']
}, {
    "Brewery": 'AC Golden Brewing Company',
    "Beers": ['Herman Joseph\'s Private Reserve', 'Winterfest', 'Colorado Native Lager']
}, {
    "Brewery": 'City Steam "Brewery" Caf��',
    "Beers": ['City Steam Careless Love', 'City Steam Innocence Ale (IPA)', 'City Steam The Naughty Nurse', 'City Steam Blonde On Blonde']
}, {
    "Brewery": '8 Wired Brewing Co.',
    "Beers": ['Super Conductor', 'The Sultan', '�� For Awesome', 'Tall Poppy', 'The Big Smoke', 'Fresh Hopwired IPA', 'IStout', 'Batch 31 Barrel Aged Imperial Stout With Coffee', 'Saison Sauvin', 'Rewired Brown Ale', 'Hopwired IPA']
}, {
    "Brewery": 'Asia Pacific Breweries Ltd.',
    "Beers": ['ABC Extra Stout']
}, {
    "Brewery": 'Speakeasy Ales &amp; Lagers',
    "Beers": ['Vendetta', 'Scarlett Red Rye', 'White Lightning', 'Double Daddy', 'Payback Porter', 'Untouchable Pale Ale', 'Scarface Imperial Stout', 'Betrayal Imperial Red', 'Prohibition Ale', 'Old Godfather', 'Butchertown Black Ale', 'Big Daddy IPA']
}, {
    "Brewery": 'Brauhaus Faust-Miltenberger',
    "Beers": ['Faust Hefeweizen Hell']
}, {
    "Brewery": 'Napa Smith "Brewery"',
    "Beers": ['Crush Beer', 'Cool Brew', 'Amber Ale', 'Pale Ale', 'Hopageddon Imperial IPA', 'Lost Dog', 'Organic IPA']
}, {
    "Brewery": 'Atlas "Brewery" Ltd',
    "Beers": ['Three Sisters']
}, {
    "Brewery": 'Brouwerij Van Honsebrouck N.V.',
    "Beers": ['Kasteel Kriek', 'St. Louis Kriek', 'St. Louis Premium Framboise', 'St. Louis Premium Kriek', 'St. Louis Framboise', 'St. Louis P��che', 'Kasteel Rouge', 'St. Louis Gueuze Lambic', 'Kasteel Blond', 'Bacchus', 'Brigand', 'Kasteel Donker', 'Kasteel Triple', 'St. Louis Gueuze Fond Tradition', 'Kasteel Cuv��e Du Chateau']
}, {
    "Brewery": 'Notch Brewing',
    "Beers": ['BSA Harvest', 'Notch ��ern�� Pivo', 'Notch Saison', 'Notch Session Pils', 'Notch Session Ale']
}, {
    "Brewery": 'Marble "Brewery"',
    "Beers": ['Bourbon Barrel Imperial Stout', 'Double White Ale', 'Imperial Red Ale', 'Wildflower Wheat', 'Marble Reserve Ale', 'Double IPA', 'Marble Red Ale', 'Marble IPA']
}, {
    "Brewery": 'Micro-Brasserie L\'Alchimiste',
    "Beers": ['Bock De Joliette', 'L\'Ecossaise', 'Eisbock (Congelator)']
}, {
    "Brewery": 'Intercourse Brewing Company, LLC',
    "Beers": ['Mount Joy Light Pilsner']
}, {
    "Brewery": 'Straight To Ale',
    "Beers": ['Lily Flagg Milk Stout', 'Monkeynaut IPA']
}, {
    "Brewery": 'Guinness Ltd.',
    "Beers": ['Guinness Draught  Extra Cold', 'Guinness Draught', 'Harp Lager', 'Guinness Extra Stout (Original)', 'Guinness Generous Ale', 'Guinness Foreign Extra Stout', 'Guinness Extra Stout (Canada)', 'Smithwick\'s']
}, {
    "Brewery": 'Brouwerij Oud "Beers"el',
    "Beers": ['Oud "Beers"el Kriek', 'Oud "Beers"el Oude Kriek Vieille', 'Oud "Beers"el Framboise', 'Oud "Beers"el Bersalis Tripel', 'Oud "Beers"el Oude Geuze Vieille']
}, {
    "Brewery": 'Purrumbete Brewing Company',
    "Beers": ['Red Duck The Ox', 'Red Duck Bengal IPA']
}, {
    "Brewery": 'Flat 12 Bierwerks',
    "Beers": ['Walkabout Pale Ale', 'Hello My Name Is Amber', 'Half Cycle IPA', 'Pogue\'s Run Porter']
}, {
    "Brewery": 'Societe Brewing Co.',
    "Beers": ['The Butcher', 'The Pupil']
}, {
    "Brewery": 'Black Diamond Brewing Co.',
    "Beers": ['Steep Trail Amber Ale', 'Black Diamond Brandy Barrel Grand Cru', 'Black Diamond Bourbon Barrel Grand Cru', 'Black Diamond Free Style Belgian Blonde Ale', 'Jagged Edge IPA', 'Rampage Imperial IPA']
}, {
    "Brewery": 'Woodstock Inn "Brewery"',
    "Beers": ['White Mountain Raspberry Weasel Wheat', 'Red Rack Ale', 'Pig\'s Ear Brown Ale', 'Loon Golden Ale', 'Kanc Country Maple Porter', 'Autumn Ale Brew', 'Pemi Pale Ale', 'Wassail Ale']
}, {
    "Brewery": 'The Olde Burnside Brewing Company',
    "Beers": ['Amazing Grace', 'Penny Weiz Ale', 'Ten Penny Ale', 'Father Christmas Highland Ale', 'Dirty Penny Ale', 'Highland Wild Ale', 'Ten Penny Ale Reserve']
}, {
    "Brewery": 'Bernard Family "Brewery"',
    "Beers": ['Bernard Svetly Lezak', 'Bernard Cerne']
}, {
    "Brewery": 'Perennial Artisan Ales',
    "Beers": ['Aria', 'Peace Offering', 'Black Walnut Dunkel', 'Heart Of Gold', 'Fantastic Voyage', 'Saison De Lis', 'Peach Berliner Weisse', 'Abraxas', 'Barrel-Aged Abraxas', 'Hommel Bier']
}, {
    "Brewery": 'Barrington "Brewery" &amp; Restaurant',
    "Beers": ['Barrington Brown Ale', 'Barrington India Pale Ale', 'Black Bear Stout']
}, {
    "Brewery": 'Burton Bridge "Brewery"',
    "Beers": ['Burton Bridge Bramble Stout', 'Burton Porter', 'Burton Bridge Empire India Pale Ale']
}, {
    "Brewery": 'NoDa Brewing Company',
    "Beers": ['Coco Loco']
}, {
    "Brewery": 'White Rabbit',
    "Beers": ['White Rabbit White Ale', 'White Rabbit Dark Ale']
}, {
    "Brewery": 'Cold Storage Craft "Brewery"',
    "Beers": ['Florida Avenue India Pale Ale']
}, {
    "Brewery": 'Beer of Yerevan JSC',
    "Beers": ['Kilikia Dark']
}, {
    "Brewery": 'Lake Placid Craft Brewing Company',
    "Beers": ['Nippletop', 'Winter Lager', 'Lake Placid Hefeweizen', 'Honey Rye', '46\'er Pale Ale', 'UBU Ale', 'Lake Placid India Pale Ale']
}, {
    "Brewery": 'Kaltenberg International / K�_nig Ludwig International GmbH &amp; Co.KG',
    "Beers": ['Prinzregent Luitpold Weissbier', 'K�_nig Ludwig Weiss (Royal Bavarian Hefe-Weizen)', 'K�_nig Ludwig Dunkel']
}, {
    "Brewery": 'F�_rst Wallerstein Brauhaus',
    "Beers": ['Landsknecht Bier']
}, {
    "Brewery": 'Bull &amp; Bush Pub &amp; "Brewery"',
    "Beers": ['Royal Oil', 'Legend Of The Liquid Brain', 'Man Beer']
}, {
    "Brewery": 'M�_�_��ansk�_ Pivovar Havl�_ۍk��v Brod, A.S.',
    "Beers": ['Havlicek', 'Lev Lion Lager', 'Lev Black Lion', 'Rebel']
}, {
    "Brewery": 'Hop City Brewing Co.',
    "Beers": ['Happy Hour / Big Mouth Pale Ale', 'Barking Squirrel Lager']
}, {
    "Brewery": 'Heineken Nederland B.V.',
    "Beers": ['Heineken Tarwebok']
}, {
    "Brewery": 'Elevator "Brewery" &amp; Draught Haus',
    "Beers": ['Elevator Procrastinator Dopplebock', 'Elevator 1810 Oktoberfest', 'Elevator Horny Goat', 'Elevator Bleeding Buckeye Red Ale', 'Elevator Dark Horse Lager', 'Elevator Three Frogs IPA']
}, {
    "Brewery": 'Sierra Nevada Brewing Co.',
    "Beers": ['Ovila Abbey Barrel Aged Dubbel', 'Exportation', 'Sierra Nevada Barrel Aged Life And Limb', 'FOAM Pilsner', 'Sierra Nevada Kellerweis Hefeweizen', 'Imperial Smoked Porter', 'Schwarzbier', 'Brux Domesticated Wild Ale', 'Sierra Nevada Porter', 'Sierra Nevada Best Bitter Ale', 'Old Chico Crystal Wheat', 'Sierra Nevada Pale Ale', 'Sierra Nevada Stout', 'Ovila Quad', 'Sierra Nevada Summerfest Lager', 'Ovila Abbey Saison', 'Ovila Abbey Dubbel', 'Sierra Nevada Celebration Ale', 'Life &amp; Limb', 'Sierra Nevada Tumbler Autumn Brown Ale', 'Sierra Nevada Glissade Golden Bock', 'Sierra Nevada Ruthless Rye IPA', 'Northern Hemisphere Harvest Wet Hop Ale', 'Sierra Nevada Hoptimum Imperial IPA', 'Sierra Nevada Torpedo Extra IPA', 'Sierra Nevada Southern Hemisphere Harvest Fresh Hop Ale', 'Narwhal Imperial Stout', 'Ovila Belgian-Style Abbey Quad: Ale Brewed With Plums', 'Ovila Belgian Style Golden']
}, {
    "Brewery": 'The Funky Buddha Lounge &amp; "Brewery"',
    "Beers": ['No Crusts', 'Nib Smuggler', 'Passionfruit Berliner Weisse', 'Floridian Hefeweizen', 'Bonita Applebaum', 'Berliner Raspberry', 'Last Snow', 'Piiti Porter', 'Wide Awake It\'s Morning', 'Hop Gun', 'Maple Bacon Coffee Porter']
}, {
    "Brewery": 'Walnut Creek Alehouse (Pyramid)',
    "Beers": ['Pyramid Hefeweizen', 'MacTarnahan\'s Blackwatch Porter', 'Pyramid Thunderhead IPA']
}, {
    "Brewery": 'Little Creatures Brewing Company',
    "Beers": ['Little Creatures Original Pilsner', 'Rogers Beer', 'Little Creatures Bright Ale', 'Little Creatures Pale Ale']
}, {
    "Brewery": 'Papago Brewing',
    "Beers": ['Elsie\'s Irish Coffee Milk Stout', 'Oude Zuipers Tripel', 'Orange Blossom Wheat Beer', 'El Robusto Porter']
}, {
    "Brewery": 'Motor City Brewing Works',
    "Beers": ['Motor City Brewing Nut Brown Ale', 'Motor City Brewing Ghettoblaster']
}, {
    "Brewery": 'Macedonian Thrace "Brewery"',
    "Beers": ['Hillas']
}, {
    "Brewery": 'Brasserie Val De Sambre',
    "Beers": ['Abbaye D\'Aulne Brune Des P��res (Sur Lie) 6��', 'Abbaye D\'Aulne Triple Brune 9��', 'Abbaye D\'Aulne Blonde Des P��res (Sur Lie) 6��', 'Abbaye D\'Aulne Triple Blonde 9��']
}, {
    "Brewery": 'Bischoff Premium Black Lager',
    "Beers": ['Donnersberger']
}, {
    "Brewery": 'Brash Brewing Company',
    "Beers": ['Item Nine', 'Texas Exile', 'The Bollocks']
}, {
    "Brewery": 'Hops &amp; Grain',
    "Beers": ['Pale Dog']
}, {
    "Brewery": 'Glacier Brewhouse',
    "Beers": ['Big Woody Barley Wine']
}, {
    "Brewery": 'Santa Cruz Mountain Brewing',
    "Beers": ['Organic Dread Brown Ale', 'People\'s Porter', 'Pale Ale', 'Devout Stout']
}, {
    "Brewery": 'UNICER Uni��o Cervejeira S.A.',
    "Beers": ['Super Bock Stout']
}, {
    "Brewery": 'Huisbrouwerij Klein Duimpje',
    "Beers": ['Kerstbier', 'Porter', 'Erik De Noorman', 'Imperial Russian Stout']
}, {
    "Brewery": 'Castle Rock "Brewery"',
    "Beers": ['Harvest Pale']
}, {
    "Brewery": 'Brutopia',
    "Beers": ['IPA']
}, {
    "Brewery": 'Aviator Brewing Company',
    "Beers": ['Devils Tramping Ground Tripel', 'HotRod Red', 'HogWild IPA']
}, {
    "Brewery": 'Brouwerij De Graal',
    "Beers": ['Triverius', 'De Graal Gember', 'De Graal Tripel']
}, {
    "Brewery": 'Spinnakers Gastro Brewpub &amp; Guesthouse',
    "Beers": ['Mitchell\'s Extra Special Bitter', 'Blue Bridge Double Pale Ale']
}, {
    "Brewery": 'Hoppin\' Frog "Brewery"',
    "Beers": ['Hoppin��� Frog / Fan�� Natasha R��cks America Chocolate Rye Imperial Stout', 'Hoppin��� Frog / De Molen Super-Charged Saison IPA', 'Caf�� Silk Porter', 'Barrel Aged Frog\'s Hollow Double Pumpkin Ale', 'Sweet Evil Barley Wine', 'Wild Frog Wheat Ale', 'Outta Kilter', 'Barrel Aged Outta Kilter', 'B.O.R.I.S. #100', 'Frog\'s Hollow Double Pumpkin Ale', 'B.O.R.I.S. The Crusher Oatmeal-Imperial Stout', 'Mean Manalishi Double I.P.A.', 'BORIS Royale', 'Hopped-Up Goose Juice', 'Silk Porter', 'Turbo Shandy', 'Barrel Aged B.O.R.I.S. Oatmeal Imperial Stout', 'Frosted Frog Christmas Ale', 'Hoppin\' To Heaven IPA', 'Barrel Aged Naked Evil', 'Hop Master\'s Abbey Belgian-Style Double IPA', 'Hop Dam Triple IPA', 'Bodacious Black &amp; Tan', 'Fresh Frog Raw Hop Imperial Pale Ale', 'D.O.R.I.S. The Destroyer Double Imperial Stout', 'Hop Heathen']
}, {
    "Brewery": 'Brouwerij De Cock',
    "Beers": ['Mea Culpa (Beer Mania)']
}, {
    "Brewery": 'Browar Namys���_w Sp. z o.o.',
    "Beers": ['Zamkowe Dark', 'Rycerskie']
}, {
    "Brewery": 'Big Bay Brewing Co.',
    "Beers": ['Long Weekend India Pale Ale', 'Wavehopper']
}, {
    "Brewery": 'Brauerei Tucher Brau',
    "Beers": ['Tucher Pilsener', 'Tucher Helles Hefe Weizen', 'Tucher Kristall Weizen', 'Tucher Dunkles Hefe Weizen', 'Tucher Bajuvator Doppelbock']
}, {
    "Brewery": 'Brauerei F�_ssla',
    "Beers": ['F�_ssla Gold-Pils']
}, {
    "Brewery": 'Two Roads Brewing Company',
    "Beers": ['Ol\' Factory Pils', 'Worker\'s Comp', 'Honeyspot Road White IPA', 'Road 2 Ruin']
}, {
    "Brewery": 'Bierbrouwerij De Koningshoeven B.V.',
    "Beers": ['La Trappe Isid���or Oak Aged Trappist Ale', 'La Trappe Puur', 'La Trappe Tripel (Koningshoeven / Dominus)', 'La Trappe Bockbier', 'La Trappe Dubbel (Koningshoeven / Dominus)', 'La Trappe Blond (Koningshoeven / Dominus)', 'Tilburg\'s Dutch Brown Ale', 'La Trappe Witte Trappist', 'La Trappe Quadrupel (Koningshoeven / Dominus)', 'La Trappe Quadrupel (Oak Aged)', 'La Trappe Isid\'or']
}, {
    "Brewery": 'Malt Shovel "Brewery"',
    "Beers": ['Mad Brewers Hoppy Hefe', 'James Squire Sundown Lager', 'New Norcia Abbey Ale', 'James Squire Porter', 'James Squire Amber Ale', 'James Squire Original Pilsener', 'James Squire India Pale Ale', 'Hop Thief Ale', 'James Squire The Chancer Golden Ale']
}, {
    "Brewery": 'Pabst Brewing Company',
    "Beers": ['Olympia 95% Malt', 'McSorley\'s Ale', 'McSorley\'s Irish Black Lager']
}, {
    "Brewery": 'Churchkey Can Co.',
    "Beers": ['Pilsner Style Beer']
}, {
    "Brewery": 'Church-Key Brewing Company',
    "Beers": ['Church-Key Holy Smoke Scotch Ale', 'Church-Key West Coast Pale Ale']
}, {
    "Brewery": 'Beacon Hotel (Sarah Hughes "Brewery")',
    "Beers": ['Original Sarah Hughes Dark Ruby Mild']
}, {
    "Brewery": 'Hofbr�_uhaus Newport',
    "Beers": ['Hofbr�_u Munich Weizen']
}, {
    "Brewery": 'Brouwerij Smisje',
    "Beers": ['De Regenboog Speciale', 'Smisje Fiori', 'Wostyntje', 'Smisje Blond', 'Smisje Dubbel', 'Smisje Grande Reserva', 'Smisje BBBourgondier', 'Smisje IPA+', 'Vuuve', 'Smisje Calva Reserva', 'Guido', 'Smisje Kerst', 'Catherine The Great']
}, {
    "Brewery": 'Rittenhouse Rye',
    "Beers": ['BART']
}, {
    "Brewery": 'Kompania Piwowarska',
    "Beers": ['Lech Premium']
}, {
    "Brewery": 'Endurance Brewing Company',
    "Beers": ['Endurance Glacier Gold', 'Arctica Pale Ale (Endurance Pale Ale / Tom Crean\'s Ale)']
}, {
    "Brewery": 'Central Waters Brewing Company',
    "Beers": ['Honey Blonde', 'Exodus', 'Ouisconsing Red Ale', 'Whitewater Weizen', 'Belgian Style Blonde Ale', 'Octoberfest', 'Shine On', 'Fifteen', 'Brewer\'s Reserve Bourbon Cherry Stout', 'Happy Heron Pale Ale', 'Sl��inte Scottish Style Ale', 'Mudpuppy Porter', 'Hop Harvest', 'Glacial Trail IPA', 'Satin Solstice Imperial Stout', 'Peruvian Morning', 'Bourbon Barrel Barleywine', 'Brewhouse Coffee Stout', 'Illumination Double IPA', 'Brewer\'s Reserve Bourbon Barrel Stout', 'Kosmyk Charlie Y2K Catastrophe Ale']
}, {
    "Brewery": 'Badger "Brewery", Hall and Woodhouse',
    "Beers": ['Poacher\'s Choice', 'First Gold', 'Tanglefoot Premium Ale', 'Golden Champion']
}, {
    "Brewery": 'Fuller Smith &amp; Turner PLC',
    "Beers": ['Jack Frost', 'Fuller\'s Summer Ale', 'Fuller\'s London Porter', 'Fuller\'s Vintage Ale', 'Organic Honeydew', 'Fuller\'s Mr Harry', 'Black Cab', 'Fuller\'s London Pride', 'Fuller\'s ESB', 'Past Masters XX Strong Ale', 'Fuller\'s Old Winter Ale', 'Discovery Blonde Beer', 'Fuller\'s India Pale Ale (Bottle-Conditioned)', 'Fuller\'s Chiswick Bitter', 'Golden Pride', 'Fuller\'s 1845', 'Bengal Lancer', 'Fuller\'s India Pale Ale', 'Fuller\'s Bengal Lancer (Bottle-Conditioned)']
}, {
    "Brewery": 'Grado Plato',
    "Beers": ['Strada S. Felice', 'Chocarrubica']
}, {
    "Brewery": 'Bold City "Brewery"',
    "Beers": ['Duke\'s Cold Nose Brown Ale', 'Mad Manatee IPA']
}, {
    "Brewery": 'Phantom Canyon Brewing Company',
    "Beers": ['Zebulon\'s Peated Porter', 'Phantom IPA']
}, {
    "Brewery": '2012 (Belgian Style Triple)',
    "Beers": ['Scratch Beer 82']
}, {
    "Brewery": 'Oaken Barrel Brewing Company',
    "Beers": ['Alabaster Belgian White', 'Snake Pit Porter', 'Epiphany Tripel', 'Superfly I.P.A.', 'Indiana Amber', 'Gnaw Bone Pale Ale']
}, {
    "Brewery": 'New Old Lompoc "Brewery"',
    "Beers": ['Monster Mash Porter', 'Proletariat Red', 'LSD (Lompoc Strong Draft)', 'C-Son\'s Greetings', 'C-Note Imperial Pale Ale']
}, {
    "Brewery": 'Omnipollo',
    "Beers": ['Mazarin', 'Leon', 'Nebuchadnezzar']
}, {
    "Brewery": 'Upstream Brewing Company',
    "Beers": ['Grand Cru', 'Flagship IPA']
}, {
    "Brewery": 'Local Option',
    "Beers": ['Dampf Loc']
}, {
    "Brewery": 'Manayunk "Brewery" and Restaurant',
    "Beers": ['Krook\'s Mill', 'Dreamin\' Double IPA']
}, {
    "Brewery": 'Madhouse Brewing Company',
    "Beers": ['Coffee Stout', 'Pastime Pale Ale', 'Hopburst IPA']
}, {
    "Brewery": 'Iron Springs Pub &amp; "Brewery"',
    "Beers": ['JC Flyer IPA', 'Epiphany Ale', 'Sless\' Oatmeal Stout', 'Casey Jones Imperial IPA']
}, {
    "Brewery": 'New Ulm Brewing &amp; Beverage Company',
    "Beers": ['Hauenstein']
}, {
    "Brewery": 'Lohrer Bier/Privatbrauerei Stumpf GmbH',
    "Beers": ['Urtyp 1878']
}, {
    "Brewery": 'Russian River Brewing Company',
    "Beers": ['Dead Leaf Green', 'HUGE Large "Sound Czech" Pilsner', 'Janet\'s Brown Ale', 'Toronado 25th Anniversary Ale', 'Little White Lie', 'Compunction', 'Benediction', 'Symposium Sour Brown Ale', 'Framboise For A Cure', 'Supplication', 'Publication', 'Mortification', 'Redemption', 'Don The Younger', 'Consecration', 'Russian River IPA', 'Salvation', 'Temptation', 'Erudition', 'Perdition', 'O.V.L. Stout', 'Porter', 'Gaffers', 'Rejection', 'Damnation', 'Damnation Batch 23 (Oak Aged)', 'Sanctification', 'Hopfather', 'Aud Blonde', 'Beatification', 'Defenestration', 'Segal Select', 'It Takes A Lot Of Great Beer To Make Great Wine', 'Pliny The Elder', 'Blind Pig IPA', 'Happy Hops', 'Row 2/Hill 56', 'Pliny The Younger', 'HopTime Harvest Ale']
}, {
    "Brewery": 'The Commons "Brewery"',
    "Beers": ['Flemish Kiss']
}, {
    "Brewery": 'S��gaards Bryghus',
    "Beers": ['Julebuk']
}, {
    "Brewery": 'Nantahala Brewing Company',
    "Beers": ['Noon Day IPA']
}, {
    "Brewery": 'Browar Belgia',
    "Beers": ['King Cobra']
}, {
    "Brewery": 'Fordham Brewing Company',
    "Beers": ['Spiced Harvest Ale', 'Doppelbock', 'Copperhead Ale', 'Scotch Ale', 'Queen Anne K�_lsch', 'Close Encounter Harvest Ale', 'Tavern Ale']
}, {
    "Brewery": 'Magic Hat Brewing Company',
    "Beers": ['Humdinger Series: Burn Pile', 'Elder Betty', '#9', 'Ticket To Rye IPA', 'Hocus Pocus', 'Plus / Minus', 'Circus Boy', 'Ravell', 'Hex', 'Pistil', 'Single Chair Ale', 'Hi.P.A.', 'Blind Faith', 'Howl', 'Feast Of Fools', 'Heart Of Darkness', 'Encore', 'Humdinger Series: Over The Pils']
}, {
    "Brewery": 'Cotleigh "Brewery"',
    "Beers": ['Tawny Owl', 'Golden Seahawk', 'Barn Owl Premium Bitter']
}, {
    "Brewery": 'Spider Bite Beer Company',
    "Beers": ['First Bite Pale Ale', 'Boris The Spider']
}, {
    "Brewery": 'Brauerei-Gastst�_tte Klosterbr�_u',
    "Beers": ['Klosterbr�_u Braunbier', 'Klosterbr�_u Schw�_rzla']
}, {
    "Brewery": 'Barley John\'s Brew Pub',
    "Beers": ['Wild Brunette', 'Stockyard IPA', 'Old Eight Porter', 'Dark Knight']
}, {
    "Brewery": 'Metric 10/10/10',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Traquair House "Brewery" Lld',
    "Beers": ['Traquair Bear Ale', 'Traquair House Ale', 'The Lairds Liquor', 'Traquair 900', 'Traquair Jacobite']
}, {
    "Brewery": 'New South Brewing Co.',
    "Beers": ['New South India Pale Ale', 'New South White Ale']
}, {
    "Brewery": 'County Durham Brewing Company',
    "Beers": ['Durham Triple X IPA', 'Durham Black Katt', 'Durham Hop Head', 'Durham Hop Addict', 'Durham Signature Ale']
}, {
    "Brewery": 'Badische Staatsbrauerei Rothaus AG',
    "Beers": ['Rothaus Eis Z�_pfle', 'Rothaus Hefeweizen', 'Rothaus Pils Tannen Z�_pfle', 'Tannenz�_pfle']
}, {
    "Brewery": 'Vancouver Island "Brewery"',
    "Beers": ['Hermann\'s Dark Lager', 'Hermannator Ice Bock']
}, {
    "Brewery": 'Great Beer Company, The',
    "Beers": ['Hollywood Blonde']
}, {
    "Brewery": 'Brouwerij De Bie / D\'Hellekappelle',
    "Beers": ['Hellekapelle', 'Helleketelbier', 'Zatte Bie']
}, {
    "Brewery": 'Karbach Brewing Co.',
    "Beers": ['Yule Shoot Your Eye Out', 'Sympathy For The Lager', 'Weisse Versa Wheat', 'Bourbon Barrel Aged Hellfighter', 'Hopadillo IPA', 'Rodeo Clown']
}, {
    "Brewery": 'Brauerei Schumacher',
    "Beers": ['Schumacher Alt']
}, {
    "Brewery": 'Jupiter',
    "Beers": ['Quasar Double IPA']
}, {
    "Brewery": '"Brewery" Ommegang',
    "Beers": ['Belgian Independence Day Triple (2012)', 'Three Philosophers Belgian Style Blend (Quadrupel)', 'Ommegang (Abbey Ale)', 'Hennepin (Farmhouse Saison)', 'Ommegang Witte', '2011 Belgian Independence Day Saison', 'Ommegang Aphrodite', 'Seduction', 'Scythe &amp; Sickle', 'Rare Vos (Amber Ale)', 'Chocolate Indulgence Stout', 'Ommegeddon', 'Gnomegang', 'Biere D\'Hougoumont', 'Ommegang Duvel Rustica', 'Ommegang BPA (Belgian-style Pale Ale)', 'Art Of Darkness', 'Iron Throne']
}, {
    "Brewery": 'Terrapin Beer Company',
    "Beers": ['Terrapin Spike &amp; J��r��me���s Collaboration Ale', 'Terrapin Reunion Beer 2012', 'Terrapin Midnight Project Peaotch', 'Liquid Bliss', 'Terrapin 10th Anniversary Ale', 'Terrapin Mosaic', 'Terrapin Indiana Krunkles', 'Terrapin Rye Pale Ale', 'Terrapin Oak Aged Wake-n-Bake Coffee Oatmeal Imperial Stout', 'Terrapin So Fresh &amp; So Green Green 2012', 'Terrapin Golden Ale', 'Terrapin Pumpkinfest', 'Terrapin Coffee Oatmeal Imperial Stout', 'Terrapin Moo-Hoo Chocolate Milk Stout', 'Terrapin Monk\'s Revenge', 'Terrapin Samurai Krunkles', 'Terrapin Phlux Capacitor', 'Terrapin Easy Rider', 'Terrapin Hopsecutioner', 'Terrapin Hopzilla', 'Terrapin Hop Karma IPA', 'Terrapin Oaked Big Hoppy Monster']
}, {
    "Brewery": 'Squam Brewing',
    "Beers": ['Golden IPA']
}, {
    "Brewery": 'Upper Canada Brewing Company',
    "Beers": ['Lager', 'Dark Ale']
}, {
    "Brewery": 'Abbaye de Leffe S.A.',
    "Beers": ['Leffe De No��l', 'Leffe Vieille Cuv��e', 'Leffe 9', 'Leffe Brune / Brown', 'Leffe Tripel', 'Leffe Radieuse', 'Leffe Blonde']
}, {
    "Brewery": 'Magnolia Pub &amp; "Brewery"',
    "Beers": ['Blue Bell Bitter', 'Kalifornia Kolsch', 'Proving Ground IPA']
}, {
    "Brewery": 'Brouwerij Sterkens N.V.',
    "Beers": ['St. Sebastiaan Grand Cru', 'Sterkens White Ale', 'St. Sebastiaan Dark', 'St. Paul Triple', 'Sterkens Dubbel Ale', 'St. Sebastiaan Grande Reserve', 'Hoogstraten Poorter', 'Bokrijks Kruikenbier', 'St. Paul Double', 'St. Sebastiaan Golden']
}, {
    "Brewery": 'Brau Brothers Brewing Co. LLC',
    "Beers": ['Barrel Aged Belgian Style Quad Ale', 'Ivan The Great', 'Bancreagie Peated Scotch Ale', 'Forgotten Flem Farmhouse Ale', 'Ring Neck Braun Ale', 'Rye Wyne Ale', 'Cherry Bean Coffee Stout', 'Hundred Yard Dash Fresh Hop Ale', 'Hopsession Super Pale Ale', 'Sheephead Ale', 'Moo Joos']
}, {
    "Brewery": 'Lift Bridge "Brewery"',
    "Beers": ['Biscotti', 'MN Tan', 'Farm Girl Saison', 'Commander', 'Chestnut Hill', 'Hop Dish IPA', 'Crosscut Pale Ale', 'Irish Coffee Stout']
}, {
    "Brewery": 'Dad &amp; Dude\'s Breweria',
    "Beers": ['Dank IPA']
}, {
    "Brewery": 'Crown Brewing',
    "Beers": ['Special Forces American IPA']
}, {
    "Brewery": 'Cannery Brewing Company',
    "Beers": ['Wildfire IPA', 'Squire Scotch Ale', 'Blackberry Porter', 'Naramata Nut Brown Ale', 'Anarchist Amber Ale', 'IPA', 'Maple Stout']
}, {
    "Brewery": 'Amos Howard\'s Brew Pub',
    "Beers": ['Hickory Stick Stout']
}, {
    "Brewery": 'Arcadia Brewing Company',
    "Beers": ['Arcadia Bourbon Barrel Aged Cereal Killer Barleywine', 'Arcadia Lake Superior ESB', 'Arcadia Whitsun Ale', 'Arcadia Loch Down Scotch Ale', 'Arcadia Big Dick\'s Olde Ale', 'Arcadia Nut Brown Ale', 'Arcadia Starboard Stout', 'Arcadia Jaw-Jacker', 'Arcadia IPA', 'Bourbon Barrel Aged Shipwreck Porter', 'Arcadia Bourbon Barrel Aged Imperial Stout', 'Arcadia Angler\'s Ale', 'Arcadia Cereal Killer Barley Wine', 'Arcadia Hop Rocket', 'Arcadia Cocoa Loco', 'Arcadia London Porter', 'Arcadia Imperial Stout', 'Arcadia HopMouth Double IPA', 'Arcadia B-Craft Black IPA', 'Arcadia Sky High Rye']
}, {
    "Brewery": 'John Martin\'s (John Martin SA)',
    "Beers": ['John Martin\'s Pale Ale', 'Gordon Finest Scotch', 'Gordon Xmas']
}, {
    "Brewery": 'Cervecer�_a Cuauht��moc Moctezuma, S.A. de C.V.',
    "Beers": ['Bohemia Obscura', 'Noche Buena', 'Indio', 'Bohemia']
}, {
    "Brewery": 'Two "Beers" Brewing Co.',
    "Beers": ['Heart Of Darkness CDA', 'Trailhead ISA (India Session Ale)', 'Evolutionary IPA']
}, {
    "Brewery": 'Brouwerij De Block bvba',
    "Beers": ['Tripel Abdijbier Dendermonde', 'Special Block 6', 'Kastaar', 'Satan Gold', 'Satan Red']
}, {
    "Brewery": 'Free State Brewing Co.',
    "Beers": ['Winterfest', 'Josiah Miller IPA', 'Ad Astra Ale', 'Wheat State Golden', 'Ironman Imperial Stout', 'Oatmeal Stout', 'Copperhead Pale Ale', 'Owd Mac\'s Imperial Stout', 'Old Backus Barleywine']
}, {
    "Brewery": 'Southern Tier Brewing Company',
    "Beers": ['Bourbon Barrel Backburner', 'Porter', 'Mokah', 'Old Man (Winter Ale)', 'Krampus (Imperial Helles Lager)', '2XMAS', '2X Stout', 'Creme Brulee (Imperial Milk Stout)', '422 Pale Wheat Ale', 'Oat (Imperial Oatmeal Stout)', 'Hop Sun (Summer Wheat Beer)', 'Pumking', 'Phin &amp; Matt\'s Extraordinary Ale', 'Eurotrash Pilz', '2XIPA', 'Choklat', 'Unearthly (Imperial India Pale Ale)', 'Iniquity (Imperial Black Ale)', 'IPA (India Pale Ale)', 'Backburner (Imperial Barley Wine Style Ale)', 'Live', 'Oak-Aged Backburner (Imperial Barley Wine Style Ale)', 'Jahva (Imperial Coffee Stout)', 'Oak Aged Unearthly (Imperial India Pale Ale)']
}, {
    "Brewery": 'Matt Brewing Company',
    "Beers": ['Saranac Marzenbier', 'Saranac Pomegranate Wheat', 'Saranac Pilsener', 'Saranac Roggen Bock', 'Saranac Scotch Ale', 'Saranac Blueberry Blonde Ale', 'Saranac Oatmeal Stout', 'Saranac High Peaks Series Wet Hop IPA', 'Saranac Rauchbier', 'Saranac Hefeweizen', 'Saranac Single Malt', 'Saranac Belgian White', 'Saranac Adirondack Lager', 'Saranac Black Forest', 'Saranac ESB', 'Saranac Lake Effect Lager', 'Saranac Chocolate Amber Lager', 'Saranac High Peaks Lemon Ginger', 'Saranac Belgian Ale', 'Saranac Winter Lager', 'Saranac Irish Red Ale', 'Saranac Black Diamond Bock', 'Saranac Amber Ale', 'Saranac Bock', 'Saranac 4059\' Porter', 'Saranac Black Lager', 'Saranac Pale Ale', 'Saranac India Pale Ale', 'Saranac Stout', 'Saranac Chocolate Lager', 'Saranac Mocha Stout', 'Saranac Bohemian Pilsener', 'Saranac Black &amp; Tan', 'Saranac Session IPA', 'Saranac Irish Stout', 'Saranac India Copper Ale', 'Saranac Vanilla Stout', 'Saranac Imperial Stout', 'Saranac White IPA', 'Saranac India Brown Ale', 'Saranac Pumpkin Ale', 'Saranac Pale Pale Ale', 'Saranac Maple Porter', 'Saranac Brown Ale', 'Saranac Black Bear Bock', 'Saranac Octoberfest', 'Saranac Rye IPA', 'Saranac Belgian Pale Ale', 'Saranac Big Moose Ale', 'Saranac Helles', 'Saranac Red IPA', 'Saranac High Peaks Series Chocolate Orange', 'Saranac High Peaks Series Imperial IPA']
}, {
    "Brewery": 'Wachusett Brewing Company',
    "Beers": ['Wachusett Pumpkan', 'Wachusett Blueberry Ale', 'Wachusett Black Shack Porter', 'Wachusett Imperial Black IPA', 'Quinn\'s Amber Ale', 'Wachusett Nut Brown Ale', 'Wachusett Country Pale Ale', 'Wachusett Winter Ale', 'Wachusett Summer', 'Wachusett Octoberfest Ale', 'Wachusett IPA (India Pale Ale)', 'Wachusett Ryde', 'Green Monsta IPA', 'Wachusett Imperial Pumpkin Ale', 'Wachusett Milk Stout', 'Wachusett Larry']
}, {
    "Brewery": 'Baron Brewing',
    "Beers": ['Schwarzbier', '��ber Weisse']
}, {
    "Brewery": 'Hopworks Urban "Brewery"',
    "Beers": ['Noggin Floggin', 'HUB Lager', 'Crosstown Pale Ale', 'Secession Black India Pale Ale (CDA)', 'Deluxe Organic Ale (DOA)', 'Survival "7-Grain" Stout', 'Rise Up Red', 'Hopworks IPA', 'Ace Of Spades', 'Abominable Winter Ale']
}, {
    "Brewery": 'The Blind Bat "Brewery" LLC',
    "Beers": ['Hellsmoke Porter']
}, {
    "Brewery": 'Long Valley Pub &amp; "Brewery"',
    "Beers": ['Lazy Jake Porter']
}, {
    "Brewery": 'High Noon Saloon &amp; "Brewery"',
    "Beers": ['Annie\'s Amber Ale']
}, {
    "Brewery": 'Peace Tree Brewing Co.',
    "Beers": ['Black River Gumbo Stout', 'Red Rambler Ale', 'Blonde Fatale', 'Imperial Stout', 'Hop Wrangler', 'Rye Porter', 'Hop Sutra', 'Cornucopia']
}, {
    "Brewery": 'Privatbrauerei Bischoff',
    "Beers": ['Bischoff Premium Pilsener', 'Falkensteiner Ur-Weisse']
}, {
    "Brewery": 'Woodstock Brewing Company (Beer Brands)',
    "Beers": ['Woodstock India Pale Ale']
}, {
    "Brewery": 'White Winter Winery, Inc.',
    "Beers": ['Premium Oak Brackett']
}, {
    "Brewery": 'Lakewood Brewing Company',
    "Beers": ['Lakewood The Temptress']
}, {
    "Brewery": 'Durty',
    "Beers": ['Smuttynose Short Batch #18']
}, {
    "Brewery": 'Stiftsbrauerei Schl�_gl',
    "Beers": ['Schlagl Doppel Bock', 'Schl�_gl Bio-Roggen']
}, {
    "Brewery": 'Fire Island Beer Company',
    "Beers": ['Pumpkin Barrel Ale', 'Lighthouse Ale', 'Red Wagon IPA']
}, {
    "Brewery": 'Brasserie Heineken',
    "Beers": ['Pelforth Blonde', 'Pelforth Brune']
}, {
    "Brewery": 'Raasted &amp; Randers Bryghus A/S',
    "Beers": ['Raasted Imperial Stout']
}, {
    "Brewery": 'Franconia Brewing Company',
    "Beers": ['Franconia Dunkel']
}, {
    "Brewery": 'Trinity Brewhouse',
    "Beers": ['Decadence', 'Rhode Island IPA', 'Russian Imperial Stout', 'Trinity IPA']
}, {
    "Brewery": 'Grassroots Brewing',
    "Beers": ['Grassroots Brewing Convivial Suar��z', 'Grassroots Sankt Hans Amber Saison']
}, {
    "Brewery": 'Over The Top India Pale Ale',
    "Beers": ['Beerguy']
}, {
    "Brewery": 'BOSS Browar Witnica S.A.',
    "Beers": ['Boss Kozlak (Bock)', 'Black Boss Porter']
}, {
    "Brewery": 'Pivovary Staropramen',
    "Beers": ['Staropramen Granat Beer', 'Staropramen Lager (Le�_��k)', 'Staropramen Dark', 'Staropramen Lager']
}, {
    "Brewery": 'Brouwerij Girardin',
    "Beers": ['Girardin Framboise', 'Girardin Kriek 1882', 'Girardin Gueuze 1882 (Black Label)', 'Girardin Faro 1882', 'Girardin Gueuze 1882 (White Label)']
}, {
    "Brewery": 'Natty Greene\'s Pub &amp; Brewing Co.',
    "Beers": ['Elm Street IPA', 'Buckshot Amber Ale', 'Wildflower Witbier', 'Old Town Brown', 'Red Nose Winter Ale', 'Cannonball Double IPA', 'Southern Pale Ale', 'Black Powder Imperial Stout']
}, {
    "Brewery": 'Jack Russell\'s Steak House / Maine Coast Brewing Co.',
    "Beers": ['Eden Porter', 'Jack Russell\'s Best Brown Ale']
}, {
    "Brewery": 'The Bronx "Brewery"',
    "Beers": ['Pale Ale']
}, {
    "Brewery": 'Peak Organic Brewing Company',
    "Beers": ['Peak Organic Local Series MA', 'Peak Organic Amber Ale', 'Peak Organic Nut Brown Ale', 'Peak Organic Winter Session Ale', 'Peak Organic Hop Noir', 'Peak Organic Weiss Principal Imperial Hefe', 'Peak Organic IPA', 'Peak Organic The Maple Collaboration', 'Peak Organic Fall Summit Ale', 'Peak Organic Pale Ale', 'Peak Organic Espresso Amber Ale', 'Peak Organic Simcoe Spring Ale', 'Peak Organic King Crimson', 'Peak Organic Summer Session Ale', 'Peak Organic Oak Aged Mocha Stout']
}, {
    "Brewery": 'Baird Brewing Company / Fishmarket Taproom',
    "Beers": ['Shimaguni Stout', 'West Coast Wheat Wine', 'The Carpenter��s Mikan Ale', 'Kurofune Porter', 'Teikoku IPA', 'Jubilation Ale', 'Dark Sky Imperial Stout', 'Suruga Bay Imperial IPA', 'Natsumikan Ale', 'Red Rose Amber Ale', 'Rising Sun Pale Ale', 'Baird Angry Boy Brown Ale']
}, {
    "Brewery": 'Coastal Fog Brewing',
    "Beers": ['Amber Ale']
}, {
    "Brewery": 'Brouwerij Liefmans',
    "Beers": ['Gl�_hkriek', 'Jan Van Gent', 'Frambozenbier', 'Cuvee-Brut', 'Kriekbier', 'Liefmans Fruitesse (Fruitbier)', 'Oud Bruin', 'Goudenband']
}, {
    "Brewery": 'Haymarket Pub &amp; "Brewery"',
    "Beers": ['Indignant Bourbon Imperial Stout', 'Mathias Imperial IPA']
}, {
    "Brewery": 'Rogue Ales',
    "Beers": ['Chipotle Ale', 'Rogue Farms Roguenbier Rye', 'Smoke Ale', 'Issaquah M��nage �� Frog', 'Mocha Porter', 'Buckwheat Ale', 'Dead Guy Ale', 'Morimoto Soba Ale', 'XS McRogue Scotch Ale', 'Hazelnut Brown Nectar', 'John John Juniper', 'Shakespeare Oatmeal Stout', 'Glen Ale ( JLS Release #27)', 'Rogue Creamery 75th Anniversary Ale', 'American Amber Ale', 'Santa\'s Private Reserve Ale', 'XS Imperial India Pale Ale', 'Morimoto Imperial Pilsner', 'Younger\'s Special Bitter', 'Brutal Bitter Ale', 'Maierfest Lager', 'Somer Orange Honey Wheat', 'Double Dead Guy Ale', 'John John Dead Guy Ale', 'Dad\'s Little Helper Malt Liquor', 'XS Old Crustacean', 'Red Fox Amber Ale', 'Juniper Pale Ale', 'Oregon Golden Ale', 'Morimoto Black Obi Soba Ale', 'Half-E-Weizen', 'St. Rogue Red', 'Dad\'s Little Helper Black IPA', 'Rogue Farms Good Chit Pilsner', 'Double Chocolate Stout', 'XS Imperial Porter', 'Mogul Madness (JLS Release #2)', 'Kells Irish Style Lager', 'Rogue Farms Dirtoir Black Lager', 'XS Imperial Red', 'XS Imperial Younger\'s Special Bitter', 'Rogue Farms Wet Hop Ale', 'Mogul Madness Ale', '��ber Pils', 'Rogue Farms Single Malt Ale', 'Yellow Snow IPA', 'Rogue Farms Pumpkin Patch Ale', 'Captain Sig\'s Northwestern Ale', 'Rogue Farms OREgasmic Ale']
}, {
    "Brewery": 'Dunedin "Brewery"',
    "Beers": ['Leonard Croon\'s Old Mean Stout', 'Celtic Gold Ale', 'Beach Tale Brown Ale', 'Dunedin Apricot Peach Ale', 'Red Head Red Ale', 'Pipers Pale Ale']
}, {
    "Brewery": 'Upland Brewing Company',
    "Beers": ['Preservation Pilsner', 'Upland Harvest Ale', 'Upland Valley Hefe-weizen', 'Blueberry Lambic', 'Peach Lambic', 'Maibock', 'Wheat Ale', 'Strawberry Lambic', 'Schwarz', 'Nut Hugger Brown', 'Raspberry Lambic', 'Sour Reserve', 'Teddy Bear Kisses', 'Blackberry Lambic', 'Ard Ri', 'Bad Elmer\'s Porter', 'Infinite Wisdom Tripel', 'Persimmon Lambic', 'Helios Pale Ale', 'Rad Red Amber Ale', 'Gilgamesh', 'Kiwi Lambic', 'Winter Warmer', 'Double Dragonfly Imperial IPA', 'Dragonfly IPA', 'Komodo Dragon Fly Black IPA']
}, {
    "Brewery": 'Brouwerij Lindemans',
    "Beers": ['Lindemans Kriek', 'Lindemans Framboise', 'Lindemans Gueuze Cuv��e Ren��', 'Lindemans Kriek Cuv��e Ren��', 'Pecheresse', 'Lindemans Cassis', 'Lindemans P��che', 'Lindemans Gueuze', 'Lindemans Faro Lambic', 'Lindemans Apple', 'De Heeren Van Liedekercke 20th Anniversary Blend']
}, {
    "Brewery": 'Birra Amiata',
    "Beers": ['Contessa']
}, {
    "Brewery": 'Brasserie Cantillon',
    "Beers": ['Cantillon Ros�� De Gambrinus', 'Cantillon Bruocsella (1900) Grand Cru', 'Cantillon Mamouche', 'Cantillon Kriek 100% Lambic', 'Cantillon Saint Lamvinus', 'Cantillon Faro', 'Cantillon Lambic', 'Cantillon Gueuze 100% Lambic', 'Cantillon Bl��b�_r Lambik', 'Cantillon Vigneronne', 'Cantillon 50 Degrees North-4 Degrees East', 'Monk\'s Cafe Cuvee De Monk\'s Gueuze', 'Cantillon Fou\' Foune', 'Cantillon Zwanze 2008', 'Cantillon Cuv��e Des Champions', 'Cantillon Iris']
}, {
    "Brewery": 'O\'Fallon "Brewery"',
    "Beers": ['Kite Tail Summer Ale', 'Wheach', 'B.D.S. Belgian-Style Dark Ale', 'Smoke (Smoked Porter)', 'Goats Breath Bock', 'Barrel Aged Smoke (Smoked Porter)', 'Blackberry Scottish-Style', 'Sticke It To The Man', 'Black Hemp', 'Hemp Hop Rye Amber Ale', '5 Day IPA']
}, {
    "Brewery": 'Mongozo B.V.',
    "Beers": ['Mongozo (Banana)', 'Mongozo (Palmnut)']
}, {
    "Brewery": 'Black Sheep "Brewery" PLC',
    "Beers": ['Imperial Russian Stout', 'Monty Python\'s Holy Grail Ale Black Knight\'s Reserve', 'Monty Python\'s Holy Grail Ale', 'Black Sheep Ale (Special)', 'Riggwelter Yorkshire Ale', 'Golden Sheep Pale Ale']
}, {
    "Brewery": 'Brasserie Theillier',
    "Beers": ['La Bavaisienne Blonde Ale', 'La Bavaisienne']
}, {
    "Brewery": 'Brauerei Kapsreiter GmbH',
    "Beers": ['Landbier Hell', 'Landbier']
}, {
    "Brewery": 'Brouwerij Verhaeghe',
    "Beers": ['Verhaeghe Echte Kriek / Echte Kriekenbier', 'Vichtenaar', 'Duchesse De Bourgogne']
}, {
    "Brewery": 'Tailgate Beer',
    "Beers": ['Blacktop Blonde']
}, {
    "Brewery": 'Rock Art "Brewery"',
    "Beers": ['Vermont Maple Wheat Ale', 'Midnight Madness Smoked Porter', 'American Red Ale', 'IPA', 'Jasmine Pale Ale', 'Double Porter Smoked', '? The Riddler ?', 'Infusco', 'Belvidere Big IPA', 'Ridge Runner', 'Sunny And 75', 'Whitetail Ale', 'Magnumus Ete Tomahawkus ESB�_', 'Stump Jumper Gnarly Stout', 'Pumpkin Imperial Spruce Stout', 'American-Belgo Style IPA', 'IPA (II)', 'The Vermonster', 'Golden Tripple', 'Mountain Holidays In Vermont Rich Creamy Bock Lager', 'Hells Bock', 'Black Moon IPA']
}, {
    "Brewery": 'Jopen Bier BV Haarlem',
    "Beers": ['Jopen Hoppenbier', 'Jopen Extra Stout', 'Jopen Bokbier', 'Jopen Adriaan', 'Jopen Koyt']
}, {
    "Brewery": 'Sapporo Breweries Ltd.',
    "Beers": ['Yebisu The Hop', 'Yebisu Black Beer', 'Yebisu (Premium)', 'Sapporo Reserve']
}, {
    "Brewery": 'Brouwerij Alken-Maes',
    "Beers": ['Brugs', 'Grimbergen Tripel', 'Grimbergen Cuv��e de l\'Ermitage', 'Judas', 'Grimbergen Dubbel', 'Grimbergen Blonde', 'Grimbergen Optimo Bruno']
}, {
    "Brewery": 'O\'so Brewing Company',
    "Beers": ['Black Scotch Ale', 'Picnic Ants', 'Night Train', 'The Big O', 'Hopdinger', 'Dank Imperial Red', 'Lupulin Maximus Imperial IPA', 'Hop Whoopin']
}, {
    "Brewery": 'Springfield Brewing Company',
    "Beers": ['Paul\'s Pale Ale']
}, {
    "Brewery": '4 Pines Brewing Company',
    "Beers": ['4 Pines Pale Ale', '4 Pines Dry Stout', '4 Pines Kolsch']
}, {
    "Brewery": 'Trout River Brewing Company',
    "Beers": ['Knight Slayer', 'Boneyard Barley Wine']
}, {
    "Brewery": 'Covington Brewhouse',
    "Beers": ['Strawberry Ale', 'Bayou Bock', 'Pontchartrain Pilsner']
}, {
    "Brewery": 'Adirondack Pub &amp; "Brewery"',
    "Beers": ['Dirty Blonde', 'Bear Naked Ale']
}, {
    "Brewery": 'Dogfish Head "Brewery"',
    "Beers": ['Fort', 'DFH Ale', 'Midas Touch', 'Black &amp; Blue', 'Raison D\'�_tre', 'Birra Etrusca', 'Olde School Barleywine', 'Immort Ale', 'Black &amp; Red', 'Sah\'tea', 'Saison Du BUFF', 'Theobroma', 'Zeno', 'Ta Henket', 'Festina P��che', 'ApriHop', 'Shelter Pale Ale', 'Red &amp; White', 'Chicory Stout', 'Miles Davis\' Bitches Brew', 'World Wide Stout', 'Urkontinent', 'Chateau Jiahu', 'Punkin Ale', 'Johnny Rawton Pils', '120 Minute IPA', '60 Minute IPA', 'Namaste', 'Positive Contact', 'Faithfull Ale', 'Burton Baton', '90 Minute IPA', 'Indian Brown Ale', 'Noble Rot', 'Sixty-One (61)', 'Palo Santo Marron', '75 Minute IPA', '61', 'My Antonia', 'Robert Johnson\'s Hellhound On My Ale', 'Rhizing Bines']
}, {
    "Brewery": 'Beer Camp #73',
    "Beers": ['Blindfold']
}, {
    "Brewery": 'Dead Frog Brewing',
    "Beers": ['Citra IPA']
}, {
    "Brewery": 'No-Li Brewhouse',
    "Beers": ['Silent Treatment Pale Ale', 'Winter Warmer Ale', 'Crystal Bitter Ale', 'Born &amp; Raised IPA']
}, {
    "Brewery": 'Brasserie �� Vapeur',
    "Beers": ['Vapeur Cochonne', 'Saison De Pipaix', 'Vapeur En Folie']
}, {
    "Brewery": 'Consorcio Cervecero De Baja California ( La Taberna TJ )',
    "Beers": ['Tijuana Morena', 'Tijuana G�_era']
}, {
    "Brewery": 'Single Black',
    "Beers": ['Black Damnation VII']
}, {
    "Brewery": 'Hood Canal Brewing',
    "Beers": ['Dabob Bay India Pale Ale']
}, {
    "Brewery": 'Chicago Beer Company',
    "Beers": ['Windy City Wheat']
}, {
    "Brewery": 'Wagner Valley "Brewery"',
    "Beers": ['Dockside Amber Lager', 'Grace House Honey Wheat', 'Caywood Station Oatmeal Stout', 'Sled Dog Dopplebock', 'Sugar House Maple Porter', 'Sled Dog Trippel Bock', 'India Pale Ale']
}, {
    "Brewery": 'Oettinger International Getr�_nke-Vertriebs GmbH',
    "Beers": ['Original Oettinger Hefeweissbier']
}, {
    "Brewery": 'Widmer Brothers Brewing Company',
    "Beers": ['Oatmeal Porter', 'Marionberry Hibiscus Gose', 'Old Embalmer', 'KGB Imperial Stout', 'Okto Festival Ale', 'Widmer Hefeweizen', 'SXNW (Brothers\' Reserve Series)', 'Columbia Common', 'Barrel Aged Brrrbon (Brothers\' Reserve Series)', 'Drop Top Amber', 'Galaxy Hopped Barleywine Ale (Brothers\' Reserve Series)', 'Raspberry Russian Imperial Stout', 'Falconer\'s IPA', 'Deadlift Imperial IPA', 'Spiced IPA (Rotator Series #4)', 'W\'12 Dark Saison', 'Omission Pale Ale (Gluten-Free)', 'Kill Devil Brown Ale (Brothers\' Reserve Series)', 'Nelson Imperial IPA', 'Brrr', 'Drifter Pale Ale', 'Milk Stout', 'X-114 IPA', 'O\'Ryely IPA', 'Pitch Black IPA', 'Shaddock IPA', 'Citra Blonde Summer Brew']
}, {
    "Brewery": 'Mythos Breweries S.A.',
    "Beers": ['Mythos Red']
}, {
    "Brewery": 'Red Lodge Ales',
    "Beers": ['Bent Nail IPA']
}, {
    "Brewery": 'Brasseurs Du Nord Inc.',
    "Beers": ['Bor��ale Blanche', 'Bor��ale Doree', 'Bor��ale Cuivr��e', 'Bor��ale Noire', 'Bor��ale Blonde', 'Bor��ale Rousse']
}, {
    "Brewery": 'Oxfordshire Ales',
    "Beers": ['Triple B', 'Marshmellow', 'Pride Of Oxford']
}, {
    "Brewery": 'Orkney "Brewery"',
    "Beers": ['Orkney Raven Ale', 'Skull Splitter', 'Dark Island Reserve', 'Dark Island', 'Dragonhead Stout', 'The Red MacGregor']
}, {
    "Brewery": 'Broue Pub Brouhaha',
    "Beers": ['Gaz De Course']
}, {
    "Brewery": 'Jolly Pumpkin Artisan Ales',
    "Beers": ['Collababeire Special Holiday Ale', 'La Roja', 'Baudelaire IO', 'Bambic', 'Bam Bi��re', 'Sobrehumano Palena\'ole', 'Bam Noire', 'De Viento', 'Fuego Del Otono, Autumn Fire', 'Luci��rnaga, The Firefly', 'Oro De Calabaza', 'Maracaibo Especial', 'Weizen Bam Bi��re', 'La Parcela', 'Madrugada Obscura, Dark Dawn Stout', 'Noel De Calabaza', 'Calabaza Blanca', 'E. S. Bam']
}, {
    "Brewery": 'Dom-Brauerei GmbH',
    "Beers": ['Dom K�_lsch']
}, {
    "Brewery": 'LoverBeer',
    "Beers": ['D\'uva Beer', 'Madamin']
}, {
    "Brewery": 'Birrificio Montegioco',
    "Beers": ['Dolii Raptor', 'Quarta Runa', 'Bran Reserva', 'Draco', 'Demon Hunter']
}, {
    "Brewery": 'Companyia Cervesera del Montseny',
    "Beers": ['Cervesa Del Montseny + Lupulus', 'Cervesa Del Montseny + Negra']
}, {
    "Brewery": 'Fire Station 5 Brewing Company',
    "Beers": ['Golden Brigade Blonde Ale', 'Steam Pumper IPA']
}, {
    "Brewery": 'Cervecera Mexicana S.A. De C.V.',
    "Beers": ['Mexicali Special Dark Beer', 'Red Pig Mexican Ale']
}, {
    "Brewery": 'Brauerei Locher AG',
    "Beers": ['Qu�_llfrisch Naturtr�_b', 'Qu�_llfrisch Hell', 'Appenzeller Holzfass Bier']
}, {
    "Brewery": 'De Ridder "Brewery"',
    "Beers": ['Wieckse Witte']
}, {
    "Brewery": 'Candela',
    "Beers": ['Green Flash / Cigar City']
}, {
    "Brewery": 'BluCreek Brewing',
    "Beers": ['AltBier']
}, {
    "Brewery": 'Okell &amp; Son',
    "Beers": ['Dr. Okell\'s IPA']
}, {
    "Brewery": 'High Point Brewing Company',
    "Beers": ['Ramstein Blonde Wheat Beer', 'Ramstein Classic', 'Ramstein Double Platinum Blonde', 'Ramstein Winter Wheat Eisbock', 'Ramstein Oktoberfest', 'Ramstein Winter Wheat', 'Ramstein Maibock']
}, {
    "Brewery": 'Lord Nelson "Brewery" Hotel',
    "Beers": ['Three Sheets', 'Old Admiral']
}, {
    "Brewery": 'Pearl Street "Brewery"',
    "Beers": ['Pearl Street Pale Ale', 'Dankenstein IIPA']
}, {
    "Brewery": 'Mystery Hop',
    "Beers": ['La Vache Folle Double IPA']
}, {
    "Brewery": 'Titanic "Brewery"',
    "Beers": ['Titanic Stout']
}, {
    "Brewery": 'Brouwerij De Musketiers',
    "Beers": ['Troubadour Imperial Stout', 'Troubadour Magma', 'Troubadour Obscura', 'Troubadour Blond Ale', 'Antigoon By Robert Wiedmaier']
}, {
    "Brewery": 'Avery Brewing Company',
    "Beers": ['Odio Equum', 'Muscat D\'Amour', 'Piglet Purgatory', 'Rumpkin', 'The Beast Grand Cru', 'Salvation', 'The Reverend', 'Out Of Bounds Stout', 'Karma', 'Ellie\'s Brown Ale', 'Oud Floris', 'White Rascal', 'Mephistopheles\' Stout', 'The Kaiser', 'The Czar', 'Old Jubilation', 'Collaboration Not Litigation Ale', 'Samael\'s Ale', 'Uncle Jacob\'s Stout', 'Avery India Pale Ale (IPA)', 'Tweak', 'Maharaja', 'DuganA IPA', 'Ale To The Chief', 'Joe\'s Premium American Pilsner', 'New World Porter', 'Hog Heaven Barley Wine']
}, {
    "Brewery": 'Tree House Brewing Company',
    "Beers": ['Julius']
}, {
    "Brewery": 'Durango Brewing',
    "Beers": ['Amber Ale', 'Durango Brewing Derail Ale', 'Dark Lager']
}, {
    "Brewery": 'Brauerei Max Leibinger GmbH',
    "Beers": ['Zeppelin Bier']
}, {
    "Brewery": 'Harpoon "Brewery"',
    "Beers": ['UFO Raspberry Hefeweizen', 'Harpoon Celtic Ale', 'Harpoon Grateful Harvest Cranberry Ale', 'UFO Hefeweizen', 'Harpoon Dark', 'Harpoon IPA', 'UFO White', 'Harpoon Ale', 'Harpoon Belgian Pale Ale', 'UFO Pale Ale', 'Harpoon Chocolate Stout', 'UFO Pumpkin', 'Harpoon Summer Beer', 'Harpoon Octoberfest Beer', 'Harpoon Bohemian Pilsner', 'Harpoon Rich &amp; Dan\'s Rye IPA', 'Harpoon White IPA', 'Harpoon Black IPA']
}, {
    "Brewery": 'Madison River Brewing Company',
    "Beers": ['Copper John Scotch Ale', 'Salmon Fly Honey Rye', 'Hopper Pale Ale']
}, {
    "Brewery": 'Bierbrouwerij Grand-Caf��  Emelisse',
    "Beers": ['Emelisse Rauchbier', 'Emelisse Barley Wine Ale', 'Emelisse Black IPA', 'Emelisse Imperial Russian Stout', 'Emelisse Triple IPA', 'Emelisse Espresso Stout', 'Emelisse Double IPA']
}, {
    "Brewery": 'Jack Russell Brewing Company',
    "Beers": ['Jack Russell Jack\'s Farmhouse Ale']
}, {
    "Brewery": 'Brasserie Lebbe',
    "Beers": ['L\'Amalth��e']
}, {
    "Brewery": 'Pretty Things Beer &amp; Ale Project',
    "Beers": ['Once Upon A Time 1879 East India Pale Ale', 'Saint Botolph\'s Town', 'Babayaga', 'Jack D\'or', 'Baby Tree', 'X Ale, 22nd February 1945', 'Our Finest Regards', 'Field Mouse\'s Farewell', 'Hedgerow Bitter', 'December 6th, 1855 EIP', 'Magnifico', 'Lovely Saint Winefride', 'Once Upon A Time 1901 KK', 'American Darling', 'Fluffy White Rabbits', 'X Ale, 22nd November 1838', 'Meadowlark IPA']
}, {
    "Brewery": 'American Mellow Corn Whiskey',
    "Beers": ['Imperial Eclipse Stout']
}, {
    "Brewery": 'Seven Brides Brewing',
    "Beers": ['Frankenlou\'s IPA']
}, {
    "Brewery": 'Hasser�_der Brauerei GmbH',
    "Beers": ['Hasser�_der Premium Pils']
}, {
    "Brewery": 'Brewer\'s Alley Restaurant &amp; "Brewery"',
    "Beers": ['Brewer\'s Alley 1634 Ale', 'Brewer\'s Alley K�_lsch', 'Brewer\'s Alley India Pale Ale']
}, {
    "Brewery": 'Brasserie St. Feuillien',
    "Beers": ['St. Feuillien Speciale', 'St. Feuillien Triple', 'St. Feuillien Blonde', 'St. Feuillien Brune', 'St. Feuillien Cuv��e De No��l', 'St. Feuillien Saison', 'St. Feuillien Grand Cru']
}, {
    "Brewery": 'Denison\'s Brewing Company',
    "Beers": ['Denison\'s Dunkel', 'Denison\'s Weissbier']
}, {
    "Brewery": 'Trafalgar Ales &amp; Meads',
    "Beers": ['Trafalgar India Ink Black Pale Ale', 'Elora Special Bitter', 'Elora Irish Ale']
}, {
    "Brewery": 'Flat Earth Brewing Company',
    "Beers": ['Mummy Train Pumpkin Ale', 'Bermuda Triangle', 'Cygnus X-1', 'Angry Planet Organic Pale Ale', 'Flat Earth Belgian-Style Pale Ale', 'Black Helicopter', 'Northwest Passage', 'Element 115', 'Ovni Ale', 'Winter Warlock']
}, {
    "Brewery": 'Boulder Beer / Wilderness Pub',
    "Beers": ['Sundance Amber Ale', 'Sweaty Betty Blonde', 'Buffalo Gold Premium Ale', 'Hazed &amp; Infused', 'Planet Porter', 'Never Summer Ale', 'Obovoid Oak-Aged Oatmeal Stout', 'Singletrack Copper Ale', 'Mojo IPA', 'Killer Penguin Barleywine', 'Cold Hop British-Style Ale', 'Mojo Risin\' Double IPA', 'Hoopla Pale Ale', 'Flashback Ale']
}, {
    "Brewery": 'Offshore Ale Company',
    "Beers": ['Menemsha Creek Pale Ale', 'Offshore Amber Ale', 'Offshore India Pale Ale']
}, {
    "Brewery": 'Dillon Dam "Brewery"',
    "Beers": ['Extra Pale Ale', 'Sweet George\'s Brown']
}, {
    "Brewery": 'Voodoo Brewing Company',
    "Beers": ['Headless Horseman', 'Trapped Under Eisbock', 'White Magick Of The Sun', 'Gran Met', 'Voodoo Love Child', 'Cowbell Imperial Oatmeal Milk Stout', 'Wynona\'s Big Brown Ale', 'Black Magick', 'Big Black Voodoo Daddy', '4 Seasons IPA', 'PILZILLA']
}, {
    "Brewery": 'Baxter Brewing Co.',
    "Beers": ['Celsius Summer Ale', 'Hayride Autumn Ale', 'Stowaway I.P.A.', 'Pamola Xtra Pale Ale', 'Amber Road Amber Ale', 'Phantom Punch Winter Stout']
}, {
    "Brewery": 'Rising Tide Brewing Company',
    "Beers": ['Polaris', 'Tempest', 'Zephyr', 'Ishmael', 'Ursa Minor', 'Daymark', 'Atlantis']
}, {
    "Brewery": 'Browar Dojlidy S.A.',
    "Beers": ['Dojlidy Zubr']
}, {
    "Brewery": 'Brasserie d\'Achouffe',
    "Beers": ['Chouffe Biere Du Soleil', 'N\'Ice Chouffe', 'La Chouffe', 'McChouffe', 'Chouffe-Bok', 'Houblon Chouffe Dobbelen IPA Tripel']
}, {
    "Brewery": 'Privatbrauerei Franz Inselkammer KG / Brauerei Aying',
    "Beers": ['Ayinger Kirta-Halbe', 'Ayinger Liebhard\'s Kellerbier', 'Ayinger Br�_u Weisse', 'Ayinger Oktober Fest-M�_rzen', 'Ayinger Ur-Weisse', 'Ayinger Weizenbock', 'Ayinger Celebrator Doppelbock', 'Ayinger Altbairisch Dunkel', 'Ayinger Jahrhundert Bier']
}, {
    "Brewery": 'New Glarus Brewing Company',
    "Beers": ['Raspberry Tart', 'Wisconsin Belgian Red', 'Serendipity', 'R&amp;D Sour Ale', 'Cabin Fever', 'Staghorn Octoberfest', 'Laughing Fox', 'Back Forty Bock', 'Thumbprint Saison', 'Thumbprint Cherry Stout', 'Thumbprint Winter Warmer', 'Road Slush Stout', 'Dancing Man Wheat', 'Thumbprint Chocolate Abbey', 'Thumbprint Enigma', 'Spotted Cow', 'Snowshoe Red Ale', 'Hop Hearty Ale', 'Edel-Pils', 'Unplugged Imperial Weizen', 'Fat Squirrel Ale', 'Totally Naked', 'Hometown Blonde', 'Coffee Stout', 'Thumbprint IIPA', 'Two Women Lager', 'Thumbprint Barley Wine', 'Apple Ale', 'Black Top', 'Moon Man']
}, {
    "Brewery": 'Christian Moerlein Brewing Company',
    "Beers": ['Saengerfest Maibock', 'Northern Liberties IPA', 'Friend Of An Irishman Stout', 'Christian Moerlein Christkindl Winter Warmer', 'Christian Moerlein Lager House Original Golden Helles', 'Christian Moerlein Fifth &amp; Vine Oktoberfest Marzen', 'Barbarossa Double Dark Lager', 'Christian Moerlein Emancipator Doppelbock', 'Christian Moerlein Over-The-Rhine Ale']
}, {
    "Brewery": 'Oatmeal Pale Ale',
    "Beers": ['OPA']
}, {
    "Brewery": 'Sackets Harbor Brewing Co.',
    "Beers": ['War Of 1812 Ale', 'Thousand Islands Pale Ale']
}, {
    "Brewery": 'Diamond Knot "Brewery"',
    "Beers": ['Slane\'s Irish Ale', 'Diamond Knot Ho! Ho! Winter Ale', 'Diamond Knot India Pale Ale', 'Diamond Knot Brown Ale', 'Industrial IPA']
}, {
    "Brewery": 'Okanagan Spring "Brewery"',
    "Beers": ['Hopped Lager', 'Pale Ale', '1516 Bavarian Lager', 'Brewmaster\'s Black Lager']
}, {
    "Brewery": 'W�_rzburger Hofbr�_u AG',
    "Beers": ['W�_rzburger Oktoberfest', 'Julius Echter Hefe-Weissbier Dunkel', 'W�_rzburger Hofbr�_u Premium Pilsner', 'Julius Echter Hefe-Weissbier Hell']
}, {
    "Brewery": 'Daniel Thwaites "Brewery" PLC',
    "Beers": ['Flying Shuttle', 'Double Century', 'Wainwright', 'Lancaster Bomber']
}, {
    "Brewery": 'Samuel Smith Old "Brewery" (Tadcaster)',
    "Beers": ['Samuel Smith\'s Old "Brewery" Extra Stout', 'Samuel Smith\'s Organic Cherry Fruit Beer', 'Samuel Smith\'s Organic Raspberry Fruit Beer', 'Samuel Smith\'s Old "Brewery" Bitter', 'Samuel Smith\'s Nut Brown Ale', 'Samuel Smith\'s Tadcaster Bitter', 'Samuel Smith Strong Golden Barley Wine', 'Samuel Smith\'s Winter Welcome Ale', 'Samuel Smith\'s The Famous Taddy Porter', 'Samuel Smith\'s Oatmeal Stout', 'Samuel Smith\'s Imperial Stout', 'Samuel Smith\'s Organic Apricot Ale', 'Samuel Smith\'s Organically Produced Lager Beer', 'Samuel Smith\'s Pure Brewed Lager Beer', 'Samuel Smith\'s Old "Brewery" Pale Ale', 'Samuel Smith\'s India Ale', 'Samuel Smith\'s Organic Chocolate Stout', 'Samuel Smith\'s Organic Strawberry Fruit Beer', 'Samuel Smith\'s Yorkshire Stingo', 'Samuel Smith\'s Organic Best Ale']
}, {
    "Brewery": 'Transatlantique Kriek',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Saugatuck Brewing Company',
    "Beers": ['Bonfire Brown', 'Oval Beach Blonde Ale', 'ESB Amber', 'Pier Cove Porter', 'Singapore IPA', 'Neapolitan Milk Stout']
}, {
    "Brewery": 'Thomas Hardy Burtonwood Limited',
    "Beers": ['Mann\'s Brown Ale']
}, {
    "Brewery": 'Microbrasserie Charlevoix',
    "Beers": ['Dominus Vobiscum Saison', 'Flacatoune', 'Charlevoix Vache Folle RyePA', 'Dominus Vobiscum Double', 'Dominus Vobiscum Blanche', 'Dominus Vobiscum Brut', 'Dominus Vobiscum Triple', 'Dominus Vobiscum Hibernus', 'Dominus Vobiscum Lupulus']
}, {
    "Brewery": 'Barrel Aged',
    "Beers": ['The Hammer', 'AleSmith Speedway Stout', 'AleSmith Old Numbskull', 'AleSmith Wee Heavy']
}, {
    "Brewery": 'Brouwerij Riva S.A.',
    "Beers": ['Dentergems Witbier', 'Vondel']
}, {
    "Brewery": 'Lonerider Brewing',
    "Beers": ['Shotgun Betty', 'DeadEye Jack', 'Sweet Josie Brown Ale', 'Peacemaker Pale Ale']
}, {
    "Brewery": 'Green Man "Brewery"',
    "Beers": ['Green Man Porter', 'Green Man ESB', 'Green Man India Pale Ale']
}, {
    "Brewery": 'Jasper Murdock���s Alehouse, Dining Room &amp; Micro"Brewery"',
    "Beers": ['Whistling Pig Red Ale']
}, {
    "Brewery": 'Lewis &amp; Clark Brewing Company',
    "Beers": ['Tumbleweed IPA']
}, {
    "Brewery": 'Firehouse Grill &amp; "Brewery"',
    "Beers": ['Palo Alto Brewing Hoppy Ending Pale Ale', 'Hops On Rye']
}, {
    "Brewery": 'Hoptown Brewing Company',
    "Beers": ['Golden Ale', 'Paint The Town Red', '"Old Yeltsin" Imperial Stout', 'IPA', 'Oatmeal Breakfast Stout']
}, {
    "Brewery": 'Pivovar Podkov�灚',
    "Beers": ['Podkovan Dark', 'Podkovan Lager']
}, {
    "Brewery": 'Einbecker Brauhaus AG',
    "Beers": ['Einbecker Ur-Bock Hell', 'Einbecker Schwarzbier', 'Einbecker Ur-Bock Dunkel', 'Einbecker Brauherren Premium Pils', 'Einbecker Mai-Ur-Bock', 'Einbecker Winter-Bock']
}, {
    "Brewery": 'American Brewing Company',
    "Beers": ['Caboose Oatmeal Stout', 'Breakaway IPA']
}, {
    "Brewery": 'Weeping Radish Eco Farm &amp; "Brewery"',
    "Beers": ['OBX Beer', 'Black Radish Dark Lager']
}, {
    "Brewery": 'Nimbus Brewing Company',
    "Beers": ['Nimbus A-1 Pilsner', 'Nimbus Dirty G�_era (Blonde) Ale', 'Nimbus Old Monkeyshine', 'Nimbus Nut Brown Ale', 'Nimbus Oatmeal Stout', 'Nimbus Rillito Red Ale', 'Nimbus Pale Ale']
}, {
    "Brewery": 'Sharp\'s "Brewery"',
    "Beers": ['Doom Bar Bitter']
}, {
    "Brewery": 'Oak Creek "Brewery" And Grill',
    "Beers": ['Village Nut Brown Ale', 'Oak Creek Amber Ale']
}, {
    "Brewery": 'Alaskan Brewing Co.',
    "Beers": ['Alaskan Freeride APA (Rough Draft Series)', 'Alaskan Smoked Porter', 'Alaskan Raspberry Wheat (Pilot Series)', 'Alaskan Winter Ale', 'Alaskan White', 'Alaskan Summer Ale', 'Alaskan Amber', 'Alaskan Stout', 'Alaskan Imperial Red Ale (Pilot Series)', 'Alaskan Perseverance Ale (Pilot Series)', 'Alaskan Imperial IPA (Pilot Series)', 'Alaskan Black IPA', 'Alaskan Baltic Porter (Pilot Series)', 'Alaskan Birch Bock (Pilot Series)', 'Alaskan Pale', 'Alaskan Barley Wine (Pilot Series)', 'Alaskan IPA']
}, {
    "Brewery": 'Cascade Hop',
    "Beers": ['Troubadour Magma Special Edition 2011']
}, {
    "Brewery": 'Hanssens Artisanaal bvba',
    "Beers": ['Scarenbecca Kriek', 'Oude Kriek', 'Hanssens Experimental Cassis', 'Hanssens Experimental Raspberry', 'Oude Gueuze', 'Oudbeitje Lambic']
}, {
    "Brewery": 'Bridge Of Allan "Brewery" Ltd',
    "Beers": ['Bridge Of Allan Glencoe Organic Wild Oat Stout']
}, {
    "Brewery": 'Elevation Beer Co.',
    "Beers": ['Apis IV']
}, {
    "Brewery": 'Beachwood BBQ &amp; Brewing',
    "Beers": ['Melrose IPA', 'Thrillseeker IPA']
}, {
    "Brewery": 'Pivovar Litovel',
    "Beers": ['Original Litovel Premium']
}, {
    "Brewery": 'C\'est What?',
    "Beers": ['Homegrown Hemp Ale', 'Al\'s Cask Ale', 'Coffee Porter']
}, {
    "Brewery": 'Half Acre Beer Company',
    "Beers": ['Mr. Ouroboros', 'Canyon Of Heroes', 'Cipher', 'Quakerbridge Barley Wine', 'Akari Shogun', 'Meat Wave', 'Big Hugs', 'Galactic Double Daisy Cutter', 'Over Ale', 'Half Acre Lager', 'Space (Daly Double)', 'Sticky Fat', 'Double Daisy Cutter', 'Callow Knife', 'Baum��', 'Gossamer Golden Ale', 'Shewolf', 'Ginger Twin', 'Daisy Cutter Pale Ale', 'Chocolate Camaro']
}, {
    "Brewery": 'Matilda Bay Brewing Co.',
    "Beers": ['Matilda Bay Redback Original', 'Matilda Bay Bohemian Pilsner', 'Fat Yak Pale Ale', 'Matilda Bay Dogbolter', 'Alpha Pale Ale']
}, {
    "Brewery": 'Anheuser-Busch',
    "Beers": ['Michelob Dunkel Weisse', 'Michelob Bavarian Style Wheat', 'Shock Top Honeycrisp Apple Wheat']
}, {
    "Brewery": 'Licher Privatbrauerei',
    "Beers": ['Licher Hefeweizen', 'Licher Pils']
}, {
    "Brewery": 'Ale Industries',
    "Beers": ['Rye\'d Piper']
}, {
    "Brewery": 'Gigantic Brewing Company',
    "Beers": ['The City Never Sleeps', 'Gigantic IPA', 'Axes Of Evil']
}, {
    "Brewery": 'Hawai\'i Nui Brewing / Mehana Brewing Company',
    "Beers": ['Mehana Hawai���i Lager', 'Mehana Volcano Red Ale', 'Mehana Mauna Kea Pale Ale']
}, {
    "Brewery": 'Spanish Peaks Brewing Co.',
    "Beers": ['Summer White (Seasonal)', 'Crystal Weiss', 'Spanish Peaks Black Dog Ale', 'Winter Cheer Ale', 'Black Dog Ale', 'American Pale Ale']
}, {
    "Brewery": 'Klosterbrauerei Ettal / Ettaler Klosterbetriebe GmbH',
    "Beers": ['Ettaler Curator Doppelbock (Original German Version)', 'Ettaler Kloster Edelhell', 'Ettaler Benediktiner Weizen', 'Ettaler Kloster Dunkel', 'Ettaler Curator Doppelbock (US Import Version)']
}, {
    "Brewery": 'Oakham Ales / The "Brewery" Tap',
    "Beers": ['Bishop\'s Farewell', 'Citra', 'Jeffrey Hudson Bitter']
}, {
    "Brewery": 'Grolsch Bierbrouwerij N.V.',
    "Beers": ['Grolsch Amber Ale', 'Grolsch  Premium Weizen']
}, {
    "Brewery": 'Smoky Mountain "Brewery" &amp; Restaurant',
    "Beers": ['Old Thunder Road', 'Tuckaleechee Porter', 'Black Bear Ale', 'Velas Helles', 'Appalachian Pale Ale']
}, {
    "Brewery": 'Florida Beer Company',
    "Beers": ['Key West Southernmost Wheat', 'Ybor Gold Brown Ale', 'Ybor Gold Amber Lager', 'Ybor Gold Gaspars Porter']
}, {
    "Brewery": 'Great Divide Brewing Company',
    "Beers": ['Wild Raspberry Ale', 'Dunkel Weiss', 'Saint Bridget\'s Porter', 'Samurai Ale', 'Grand Cru', 'Double Wit', 'Barrel Aged Hibernation Ale', 'Hoss Rye Lager', 'Hibernation Ale', 'Smoked Baltic Porter', 'Orabelle', 'Denver Pale Ale', 'Wolfgang Doppelbock Lager', 'Hercules Double IPA', 'Barrel Aged Old Ruffian', 'Titan IPA', 'Chocolate Oak Aged Yeti', 'Oak Aged Yeti Imperial Stout', 'Claymore Scotch Ale', 'Hades Ale', 'Barrel Aged Yeti', 'Colette Farmhouse Ale', 'Old Ruffian Barley Wine', 'Nomad', 'Rumble IPA', '18th Anniversary Wood Aged Double IPA', 'Belgian Style Yeti', 'Espresso Oak Aged Yeti Imperial Stout', 'Fresh Hop Pale Ale', 'Yeti Imperial Stout']
}, {
    "Brewery": 'Tin Mill Brewing',
    "Beers": ['Skyscraper']
}, {
    "Brewery": 'Brauerei Gebr�_der Maisel GmbH &amp; Co.',
    "Beers": ['Maisel\'s Weisse Kristall', 'Maisel\'s Weisse Dunkel', 'Maisel\'s Weisse Original']
}, {
    "Brewery": 'Brasserie Des G��ants',
    "Beers": ['Urchon', 'Gouyasse Tradition', 'Saison Voisin', 'Gouyasse Triple', 'No��l Des G��ants']
}, {
    "Brewery": 'Brasserie Artisanale De Rull��s SPRL',
    "Beers": ['La Rull��s La Grande 10', 'La Rull��s Triple (Bi��re De Gaume)', 'La Rull��s Cuv��e Meilleurs Voeux (Bi��re De Gaume)', 'La Rull��s Estivale (Bi��re De Gaume)']
}, {
    "Brewery": 'Grand River Brewing',
    "Beers": ['Town Hall Lager', 'Mill Race Mild', 'Hannenberg Pils', 'Galt Knife Old Style Lager', 'Curmudgeon IPA', 'Plowman\'s Ale', 'Highballer Pumpkin Ale', 'Russian Gun Imperial Stout', 'Pugnacious Pale Ale']
}, {
    "Brewery": 'Pike Pub &amp; "Brewery"',
    "Beers": ['Space Needle Golden Anniversary 2012 Vintage IPA', 'Pike Kilt Lifter Scotch Style Ale', 'Pike Tandem', 'Monk\'s Uncle Tripel', 'Pike India Pale Ale', 'Pike Pale Ale', 'Pike Pale Heirloom Amber Ale', 'Naughty Nellie', 'Pike Dry Wit', 'Pike Auld Acquaintance Hoppy Holiday Ale', 'Pike Old Bawdy Barley Wine', 'Pike Street XXXXX Stout', 'Pike Doubble Troubble DIPA']
}, {
    "Brewery": 'Harvest Moon "Brewery"',
    "Beers": ['Beltian White', 'Pigs Ass Porter']
}, {
    "Brewery": 'Fiddlehead Brewing Company',
    "Beers": ['Fiddlehead IPA']
}, {
    "Brewery": 'Amnesia Brewing',
    "Beers": ['Desolation IPA']
}, {
    "Brewery": 'Brouwerij Drie Fonteinen',
    "Beers": ['Drie Fonteinen Oude Kriek', 'Drie Fonteinen Doesjel', 'Drie Fonteinen Schaerbeekse Kriek', 'Zwet.Be', 'Drie Fonteinen Oude Geuze', 'Drie Fonteinen Oude Geuze Vintage', '"Beers"el Lager']
}, {
    "Brewery": 'Tullibardine Distillery',
    "Beers": ['1488 Whisky Beer']
}, {
    "Brewery": 'Roslyn Brewing',
    "Beers": ['Roslyn Beer (Dark Lager)']
}, {
    "Brewery": 'Tomos Watkin "Brewery"',
    "Beers": ['Cwrw Braf', 'Watkin OSB Old Style Bitter']
}, {
    "Brewery": 'Dinkelacker-Schwabenbraeu AG',
    "Beers": ['Das Schwarze', 'Dinkel Acker Dark', 'Das Echte Maerzen', 'Dinkel Acker Cd-Pils']
}, {
    "Brewery": 'Fire Mountain Brew House',
    "Beers": ['Steam Fired Stout', 'Bogart Northwest IPA']
}, {
    "Brewery": 'Old Credit Brewing Co.',
    "Beers": ['Old Credit Amber Ale', 'Old Credit Pale Pilsner']
}, {
    "Brewery": 'Snowshoe Brewing Company',
    "Beers": ['Thompson Pale Ale', 'Grizzly Brown Ale']
}, {
    "Brewery": 'All Stars Bakery',
    "Beers": ['Kvas']
}, {
    "Brewery": 'Taps Fish House &amp; "Brewery"',
    "Beers": ['Barley Wine']
}, {
    "Brewery": 'Bat Out Of Hell',
    "Beers": ['Box Set Track #10']
}, {
    "Brewery": 'North Country Brewing',
    "Beers": ['Paleo IPA']
}, {
    "Brewery": 'Erdinger Weissbr�_u',
    "Beers": ['Urweisse', 'Erdinger Schneeweisse', 'Erdinger Weissbier Dunkel', 'Erdinger Weissbier', 'Erdinger Oktoberfest Weissbier', 'Erdinger Weissbier Kristallklar', 'Erdinger Weissbier Pikantus']
}, {
    "Brewery": 'Figure 8 Brewing',
    "Beers": ['Ro Shampo Imperial Red Ale', 'Snake Pro Double IPA']
}, {
    "Brewery": 'Brauerei Keesmann',
    "Beers": ['Bamberger Herren Pils']
}, {
    "Brewery": 'Brouwerij Boon',
    "Beers": ['Boon Oude Kriek', 'Boon Framboise', 'Boon Kriek', 'Boon Oude Kriek Mariage Parfait', 'Boon Geuze', 'HORALs Oude Geuze Mega Blend', 'Boon Oude Geuze Mariage Parfait', 'Boon Oude Geuze']
}, {
    "Brewery": 'Sprecher Brewing Company',
    "Beers": ['Generation Porter', 'Micro-Light Ale', 'Hefe Weiss', 'Abbey Triple', 'Dopple Bock', 'Irish Style Stout', 'Special Amber', 'Pipers Scotch-Style Ale', 'Mai Bock', 'Scotch Style Ale Aged In  Oak Bourbon Barrels', 'Brewmaster\'s Premium Reserve Dopple Bock Aged In Oak Bourbon Barrels', 'Brewmaster\'s Premium Reserve Dopple Bock', 'Brewmaster\'s Premium Reserve Russian Imperial Stout', 'Pub Brown Ale', 'Black Bavarian', 'Winter Brew', 'Barleywine', 'IPA2 (Double India Pale Ale)']
}, {
    "Brewery": 'Ezo Beer KK',
    "Beers": ['White Crane Ale (Rogue\'s Oregon Golden Ale)', 'Red Fox  (Rogue\'s American Amber)']
}, {
    "Brewery": 'Bar Harbor Brewing Company',
    "Beers": ['True Blue Blueberry Ale', 'Lighthouse Ale', 'Thunder Hole Ale', 'Cadillac Mountain Stout']
}, {
    "Brewery": 'Augustiner-Br�_u Wagner KG',
    "Beers": ['Augustiner Br�_u Weissbier', 'Augustiner Br�_u Munchen Light Export Beer', 'Augustiner Br�_u Oktoberfestbier', 'Augustiner Br�_u Dunkel', 'Augustiner Br�_u Maximator', 'Augustiner Br�_u Lagerbier Hell', 'Augustiner Br�_u Edelstoff']
}, {
    "Brewery": 'Red Car "Brewery" and Restaurant',
    "Beers": ['South Bay IPA']
}, {
    "Brewery": 'Olde Richmond Beer Company',
    "Beers": ['Olde Richmond Batch No. 4 Brown Ale', 'Olde Richmond Batch No. 11 India Pale Ale']
}, {
    "Brewery": 'Right Brain "Brewery"',
    "Beers": ['CEO Stout']
}, {
    "Brewery": 'Round Guys Brewing Company',
    "Beers": ['BerlinerWeisster-WeissterBerliner']
}, {
    "Brewery": 'U Fleku Pub Restaurant &amp; "Brewery"',
    "Beers": ['U Fleku Dark Lager']
}, {
    "Brewery": 'Peach',
    "Beers": ['Jai Alai IPA']
}, {
    "Brewery": 'Fiddler\'s Green Brewing Company',
    "Beers": ['Fiddler\'s Green Amber', 'Fiddler\'s Green India Pale Ale']
}, {
    "Brewery": 'Island Brewing Company',
    "Beers": ['Jubilee Ale']
}, {
    "Brewery": 'Full Pint Brewing Company',
    "Beers": ['Hobnobber', 'Night Of The Living Stout', 'RumpelPilsen', 'Festivus', 'All-In Amber', 'White Lightning Wit', 'Perc E Bust', 'Rye Rebellion', 'Chinookie IPA', 'TRI-PA']
}, {
    "Brewery": 'Great Basin Brewing Co.',
    "Beers": ['Icky IPA']
}, {
    "Brewery": 'Ch��u Ti��n USA',
    "Beers": ['Ch��u Ti��n Pale Ale']
}, {
    "Brewery": 'Austin Beerworks',
    "Beers": ['Black Thunder', 'Peacemaker Extra Pale Ale', 'Pearl Snap Pils', 'Fire Eagle IPA']
}, {
    "Brewery": 'Harvey &amp; Son Ltd.',
    "Beers": ['Harveys Tom Paine Original Old Porter', 'Harveys Porter', 'Le Coq Imperial Extra Double Stout', 'Harveys Tom Paine Original Ale', 'Harveys Christmas Ale']
}, {
    "Brewery": 'Trader Joe\'s Brewing Company',
    "Beers": ['Trader Joe\'s Bavarian Style Hefeweizen', 'Josephs Brau Dunkelweizen', 'Trader Jose\'s Dark Lager', 'Trader Joe\'s Vienna Style Lager', 'Trader Joe\'s Hofbrau Bock', 'Josephs Brau Winterfest', 'Trader Joe\'s Stockyard Oatmeal Stout', 'Josephs Brau PLZNR Czech-Style Lager', 'Trader Joe\'s 2012 Vintage Ale', 'Josephs Brau Hopfest German Style Pilsner', 'Trader Joe\'s Providential Belgian Style Golden Ale']
}, {
    "Brewery": 'Stieglbrauerei zu Salzburg GmbH',
    "Beers": ['Stiegl Weizen Gold Hefefein', 'Stiegl Goldbr�_u', 'Columbus Pils', 'Original Stieglbock', 'Paracelsus Zwickl', 'Stiegl Gaudi Radler Shandy (Lemon)', 'Stiegl Pils', 'Stiegl Radler (Grapefruit)']
}, {
    "Brewery": 'Tr�_egs Brewing Company',
    "Beers": ['Tr�_egs Mad Elf', 'DreamWeaver Wheat', 'Troegenator Double Bock', 'Tr�_egs Hopback Amber Ale', 'Splinter Gold', 'Tr�_egs Sunshine Pils', 'Tr�_egs Java Head Stout', 'Tr�_egs Nugget Nectar', 'Flying Mouflan', 'Tr�_egs Dead Reckoning Porter', 'Tr�_egs Pale Ale', 'Tr�_egs Perpetual IPA']
}, {
    "Brewery": 'Fort Garry Brewing Company Ltd.',
    "Beers": ['Dark Ale', 'Pale Ale']
}, {
    "Brewery": 'The Fat Cat Beer Company',
    "Beers": ['Fat Cat Lager']
}, {
    "Brewery": 'Onion Pub &amp; "Brewery" / Wild Onion Brewing Co.',
    "Beers": ['Summer Wit', 'Jack Stout', 'Paddy Pale Ale', 'Hop Slayer']
}, {
    "Brewery": 'Russell Brewing Company',
    "Beers": ['Russell Blood Alley Bitter', 'Russell Angry Scotch Ale', 'Russell IP\'eh!']
}, {
    "Brewery": 'Independence Brewing Co.',
    "Beers": ['Freestyle Wheat Beer', 'Austin Amber Ale', 'Bootlegger Brown Ale', 'Jasperilla Old Ale', 'Stash IPA', 'Independence Pale Ale', 'Convict Hill Oatmeal Stout']
}, {
    "Brewery": 'Allentown Brew Works',
    "Beers": ['Always Sunny', 'Space Monkey', 'Bagpiper\'s Scotch Ale', 'Rude Elf\'s Reserve', 'Fegley\'s Insidious Imperial Stout', 'Devious', 'Hop Explosion', 'Fegley\'s Bourbon Barrel Aged Insidious', 'Hop\'solutely']
}, {
    "Brewery": 'Southampton Publick House',
    "Beers": ['Southampton Abbey Single', 'Southampton May Bock', 'Southampton Abbot 12', 'Southampton Cuvee Des Fleurs', 'Southampton Imperial Porter', 'Southampton Biere De Mars', 'Southampton Altbier', 'Double White Ale', 'Southampton Imperial Baltic Porter', 'Double Ice Bock', 'Southampton Burton IPA', 'Southampton Pumpkin Ale', 'Southampton IPA', 'Southampton Imperial Russian Stout', 'Southampton Biere De Garde', 'Southampton Triple Abbey Style Ale', 'Saison Deluxe', 'French Country Christmas Ale (Biere De Garde)', 'Southampton Grand Cru', 'Southampton Keller Pils', 'Southampton Peconic County Reserve Ale', 'Old Herb Barleywine']
}, {
    "Brewery": 'Ghost River Brewing',
    "Beers": ['Ghost River Golden Ale']
}, {
    "Brewery": 'Maumee Bay Brewing Company',
    "Beers": ['IPA', 'Blitzen Holiday Ale']
}, {
    "Brewery": 'Midnight Sun Brewing Co.',
    "Beers": ['Obliteration IX', 'Pride', 'Mammoth Extra Stout', 'Moscow', 'Fallen Angel', 'Panty Peeler', 'Oak Aged Monk\'s Mistress Dark Strong Ale', 'Sockeye Red IPA', 'Meltdown Double IPA', 'Arctic Rhino Coffee Porter', 'Cohoho Imperial IPA', 'Hop Dog Double Wheat IPA', 'TREAT (Imperial Chocolate Pumpkin Porter)', 'Kodiak Brown Ale', 'Oak-Aged TREAT (Imperial Chocolate Pumpkin Porter)', 'Monk\'s Mistress', 'Arctic Devil Barley Wine', 'Specialty Beer XXX Black Double IPA', 'Berserker Imperial Stout']
}, {
    "Brewery": 'South Australia Brewing Co.',
    "Beers": ['Southwark Old Stout']
}, {
    "Brewery": 'Chameleon Brewing',
    "Beers": ['Witty', 'Ryediculous IPA']
}, {
    "Brewery": 'Marshall Brewing Company',
    "Beers": ['Arrowhead Pale Ale', 'Revival Red Ale', 'Sundown Wheat', 'Atlas India Pale Ale', 'Old Pavilion Pilsner', 'McNellie\'s Pub Ale', 'Big Jamoke', 'El CuCuy']
}, {
    "Brewery": 'Eugene City "Brewery"',
    "Beers": ['Honey Orange Wheat Ale', 'Triple Jump Pale Ale', '200 Meter Ale', '100 Meter Ale']
}, {
    "Brewery": 'Lammin Sahti Oy',
    "Beers": ['Lammin Sahtia', 'Lammin Kataja Olut']
}, {
    "Brewery": 'Greene King / Morland "Brewery"',
    "Beers": ['Old Golden Hen', 'Greene King IPA', 'Old Speckled Hen', 'The Tanner\'s Jack', 'Hop', 'Abbot Ale', 'Wexford Irish Cream Ale', 'Ruddles County', 'Greene King IPA Draught Bitter', 'Olde Suffolk English (Strong Suffolk Vintage) Ale', 'Greene King IPA Export Strength', 'Old Crafty Hen', 'Hen\'s Tooth']
}, {
    "Brewery": 'Brauerei Bischofshof',
    "Beers": ['Original 1649 Jubil�_umsbier']
}, {
    "Brewery": 'Ginga Kogen Beer',
    "Beers": ['Ginga Kogen Weizen']
}, {
    "Brewery": 'City Brewing Company, LLC',
    "Beers": ['Winter Porter', 'City Pale Ale']
}, {
    "Brewery": 'Mt. Begbie Brewing Co.',
    "Beers": ['Begbie Cream Ale', 'Tall Timber Ale', 'Nasty Habit IPA', 'High Country K�_lsch']
}, {
    "Brewery": 'Brouwerij Rodenbach N.V.',
    "Beers": ['2010 Vintage Oak Aged Ale (Barrel No. 144)', 'Rodenbach Grand Cru', 'Rodenbach Caract��re Rouge', 'Rodenbach Classic (Red)']
}, {
    "Brewery": 'Smithwick\'s "Brewery" / Irish Ale Breweries Ltd',
    "Beers": ['Smithwick\'s Ale', 'Kilkenny Irish Cream Ale']
}, {
    "Brewery": 'Bohemian "Brewery"',
    "Beers": ['Viennese Lager', 'Cherny Bock', 'Czech Pilsener']
}, {
    "Brewery": 'Sheepscot Valley Brewing Company',
    "Beers": ['Bold Coast Pemaquid Ale']
}, {
    "Brewery": 'Cucap�� Brewing Company',
    "Beers": ['Cucap�� Runaway', 'Cucap�� Honey', 'Cucap�� Obscura', 'Cucap�� Barleywine', 'Cucap�� La Migra Imperial Stout', 'Cucap�� Chupacabras Pale Ale']
}, {
    "Brewery": 'Framboise',
    "Beers": ['Cantillon Lou Pepe']
}, {
    "Brewery": 'Heiner Brau',
    "Beers": ['Maerzen', 'Mardi Gras Festbier', 'K�_lsch']
}, {
    "Brewery": 'Le Cheval Blanc',
    "Beers": ['Blanche']
}, {
    "Brewery": 'Ooh La La!',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Spiteful Brewing',
    "Beers": ['G.F.Y. Stout']
}, {
    "Brewery": 'Brasserie de Rochefort',
    "Beers": ['Trappistes Rochefort 6', 'Trappistes Rochefort 8', 'Trappistes Rochefort 10']
}, {
    "Brewery": 'Paulaner Brauerei GmbH &amp; Co. KG',
    "Beers": ['Paulaner Weissbier Kristallklar', 'Paulaner Original M�_nchner Dunkel', 'Paulaner Oktoberfest-M�_rzen', 'Salvator Doppel Bock', 'Paulaner Hefe-Weissbier Naturtr�_b', 'Paulaner Hefe-Weissbier Dunkel', 'Paulaner Original M�_nchner', 'Paulaner Premium Pils']
}, {
    "Brewery": 'Cerveza Artesanal BarbaRoja',
    "Beers": ['Barrel-Aged Red Ale']
}, {
    "Brewery": 'Butte Creek Brewing Company',
    "Beers": ['Butte Creek Organic Pale Ale', 'Butte Creek Organic Porter', 'Butte Creek Organic Pilsner', 'Butte Creek Organic India Pale Ale', 'Trainwreck Organic Barleywine Style Ale']
}, {
    "Brewery": 'Hofbr�_u Kaltenhausen (Brau Union)',
    "Beers": ['Edelweiss Dunkel Weissbier', 'Edelweiss Weissbier Snowfresh', 'Edelweiss Hefetrub', 'Edelweiss Weissbier']
}, {
    "Brewery": 'Privatbrauerei Schwelm',
    "Beers": ['Schwelmer Weizen', 'Schwelmer Bernstein', 'Schwelmer Alt', 'Schwelmer Pils']
}, {
    "Brewery": 'Weisses Br�_uhaus G. Schneider &amp; Sohn GmbH',
    "Beers": ['Schneider Weisse Tap 7 Unser Original', 'Schneider Aventinus Weizen-Eisbock', 'Schneider Weisse Tap 1 Mein Blondes', 'Schneider Weisse Tap 6 Unser Aventinus', 'Schneider Weisse Tap 4 Mein Gr�_nes', 'Schneider Weisse Tap X Mein Nelson Sauvin', 'Schneider Weisse Tap 5 Schneider &amp; Brooklyner Hopfen-Weisse']
}, {
    "Brewery": 'SweetWater Brewing Company',
    "Beers": ['Sweetwater Dank Tank The Gimp', 'Sweetwater Dank Tank Danktoberfest', 'Sweetwater Blue', 'Sweetwater Georgia Brown', 'Sweetwater Exodus Porter', 'Sweetwater Road Trip Ale', 'Sweetwater 420 Extra Pale Ale', 'Sweetwater Waterkeeper Hefeweizen', 'Sweetwater Motor Boat', 'Sweetwater Dank Tank 420 India Pale Ale', 'Sweetwater Crank Tank Rye\'d Ale', 'Sweetwater LowRYEder IPA', 'Sweetwater IPA', 'Sweetwater Festive Ale', 'Sweetwater Happy Ending Imperial Stout', 'Sweetwater Dank Tank Ghoulash']
}, {
    "Brewery": 'San Diego Brewing Co.',
    "Beers": ['Hopnotic']
}, {
    "Brewery": 'Cross Plains Beer Company',
    "Beers": ['Esser\'s Cross Plains Special', 'Esser\'s Best Original']
}, {
    "Brewery": 'Maude',
    "Beers": ['Portsmouth Flanders Red']
}, {
    "Brewery": 'Demarche "Brewery"',
    "Beers": ['Ciney Blonde', 'Ciney Brune']
}, {
    "Brewery": 'Berwick Brewing Company',
    "Beers": ['Berwick IPA']
}, {
    "Brewery": 'FiftyFifty Brewing Co.',
    "Beers": ['BART', 'Totality Imperial Stout']
}, {
    "Brewery": 'J.W. Lees &amp; Co (Brewers) Ltd',
    "Beers": ['J.W. Lees Harvest Ale (Lagavulin Whisky Cask)', 'J.W. Lees Harvest Ale (Sherry Cask)', 'J.W. Lees Harvest Ale (Port Cask)', 'J.W. Lees Harvest Ale (Calvados Cask)', 'Moonraker Ale', 'J.W. Lees Vintage Harvest Ale', 'Manchester Star Ale']
}, {
    "Brewery": 'Bernheim Wheat Whiskey',
    "Beers": ['Imperial Eclipse Stout']
}, {
    "Brewery": 'Cooperstown Brewing Company',
    "Beers": ['Old Slugger', 'Pride Of Milford Special Ale', 'Back Yard India Pale Ale', 'Strike Out Stout', 'Nine Man Ale Golden Ale', 'Benchwarmer Porter']
}, {
    "Brewery": 'Binding-Brauerei AG',
    "Beers": ['Sch�_fferhofer Dunkles Hefeweizen', 'Sch�_fferhofer Hefeweizen', 'Sch�_fferhofer Kristallweizen', 'Clausthaler Golden Amber', 'Schofferhofer Grapefruit Hefeweizen']
}, {
    "Brewery": 'August Schell Brewing Company',
    "Beers": ['Schell\'s Snowstorm 2012', 'Schell\'s Stag Series: Czech-Style Dark Lager', 'Schell\'s Hefeweizen', 'Schell\'s Stag Series: Barleywine', 'Schell\'s Schmaltz\'s Alt', 'Schell\'s Oktoberfest', 'Schell\'s Dark', 'Grain Belt Premium', 'Schell\'s FireBrick', 'Grain Belt Nordeast', 'Schell\'s Chimney Sweep', 'Schell\'s Emerald Rye', 'Lakemaid Beer', 'Schell\'s Maifest', 'Schell\'s Hopfenmalz', 'Schell\'s Bock', 'Schell\'s Pils', 'Schell\'s Zommerfest', 'Schell\'s Stag Series: Fresh Hop Citra Pils']
}, {
    "Brewery": 'Gageleer CVBA',
    "Beers": ['Gageleer']
}, {
    "Brewery": 'Carlow Brewing Company',
    "Beers": ['O\'Hara\'s Irish Stout', 'O\'Hara\'s Leann Foll��in', 'O\'Hara\'s Irish Red']
}, {
    "Brewery": 'Stevens Point "Brewery"',
    "Beers": ['Whole Hog Raspberry Saison', 'Point Classic Amber', 'Horizon Wheat', 'Point Honey Light', 'Whole Hog Barley Wine Style Ale', 'Point Belgian White', 'Einbock', 'Whole Hog Imperial Pilsner', 'Nude Beach Summer Wheat', 'Burly Brown', 'Whole Hog Pumpkin Ale', 'St. Benedict\'s Winter Ale', 'Whole Hog Six Hop IPA', 'Point Oktoberfest', 'Whole Hog Russian Imperial Stout', '2012 Black Ale', 'Point Cascade Pale Ale']
}, {
    "Brewery": 'Le Trou Du Diable',
    "Beers": ['Dulcis Succubus', 'La Buteuse', 'La Buteuse Brassin Sp��cial (Barrel Aged)', 'La Grivoise De Noel']
}, {
    "Brewery": 'Private Landbrauerei Scheuerer',
    "Beers": ['Moosbacher Schwarze Weisse', 'Moosbacher Kellerbier', 'Moosbacher Weissbier', 'Moosbacher Lager']
}, {
    "Brewery": 'Spoetzl "Brewery"',
    "Beers": ['Shiner Holiday Cheer', 'Shiner FM 966', 'Shiner Old-Time Alt', 'Shiner Hefeweizen', 'Shiner Prickly Pear', 'Shiner Ryes &amp; Shine', 'Shiner Kosmos Reserve', 'Shiner Oktoberfest', 'Shiner Fr�_st', 'Shiner 101 Czech Style Pilsner', 'Shiner Dortmunder (Spring Ale)', 'Shiner Wild Hare Pale Ale', 'Bohemian Black Lager']
}, {
    "Brewery": 'Millstream Brewing Company',
    "Beers": ['Millstream Hefe "R" Weissen', 'Millstream Schild Brau Amber', 'Millstream Windmill Wheat', 'Millstream Back Road Stout', 'John\'s Generations White Ale', 'Millstream Schokolade Bock', 'Millstream Oktoberfest', 'Millstream Iowa Pale Ale']
}, {
    "Brewery": 'Oak Aged',
    "Beers": ['Bender', 'Dominion Millennium']
}, {
    "Brewery": 'Chocolate Mint Porter',
    "Beers": ['Winter Ale']
}, {
    "Brewery": 'HogsBack Brewing Company',
    "Beers": ['HogsBack Vintage Lager']
}, {
    "Brewery": 'Augusta Brewing Company',
    "Beers": ['Augusta Saison']
}, {
    "Brewery": 'Left Hand Brewing Company',
    "Beers": ['Haystack Wheat', 'TNT', 'Smoked Goosinator Doppelbock', 'Sawtooth Ale', 'Ambidextrous', 'Smoke Jumper Smoked Imperial Porter', 'Good Juju (Ginger Ale)', 'Left Hand Oktoberfest', 'Left Hand Milk Stout', 'Left Hand Imperial Stout', 'Wake Up Dead', 'Week Sauce Coffee Porter', 'Black Jack Porter', 'St. Vrain Tripel', 'Widdershins', 'Warrior IPA', 'Barrel-Aged Wake Up Dead', 'Polestar Pilsner', 'Stranger', '400 Pound Monkey', 'Twin Sisters Double IPA', 'Chainsaw Ale', 'Oak Aged Widdershins']
}, {
    "Brewery": 'Birra Moretti (Heineken)',
    "Beers": ['Moretti La Rossa Birra Doppio Malto']
}, {
    "Brewery": 'Obolon "Brewery"',
    "Beers": ['Obolon Oksamytove (Deep Velvet)', 'Obolon Porter', 'Obolon Lager']
}, {
    "Brewery": 'Yuengling "Brewery" ',
    "Beers": ['Yuengling Bock', 'Yuengling Traditional Lager', 'Yuengling Porter (Dark Brewed)']
}, {
    "Brewery": 'Bath Ales Ltd',
    "Beers": ['Barnsey', 'Gem']
}, {
    "Brewery": 'Matt\'s Sleepy Time Belgian Imperial Stout',
    "Beers": ['Wild Oats Series No. 1']
}, {
    "Brewery": '2012 Porter',
    "Beers": ['Renewale']
}, {
    "Brewery": 'William Bull "Brewery"',
    "Beers": ['Red Angus Pilsener']
}, {
    "Brewery": 'Cottrell Brewing Co.',
    "Beers": ['Perry\'s Revenge Ale', 'Old Yankee Ale', 'Mystic Bridge IPA']
}, {
    "Brewery": 'Jack\'s Abby Brewing',
    "Beers": ['Brett Bi��re De Garde', 'Fire In The Ham', 'Maibock Hurts Like Helles', 'Pumpkin Crop Lager', 'Saxonator Dunkles Doppelbock', 'Copper Legend', 'Private Rye Bi��re De Garde', 'Hoponius Union', 'Lashes Hopbock Lager', 'Leisure Time Lager', 'Mom &amp; Pop\'s Wet Hop Lager', 'Cascadian Schwarzbier', 'Jabby Brau', 'R.I.P.L. Effect (Rye India Pale Lager)', 'Ginger &amp; Juice', 'The ABCS']
}, {
    "Brewery": 'Privatbrauerei Frankenheim',
    "Beers": ['Frankenheim Alt']
}, {
    "Brewery": 'Nuts',
    "Beers": ['Dark Apparition']
}, {
    "Brewery": 'Tooheys Brewing',
    "Beers": ['Tooheys Old']
}, {
    "Brewery": 'Mahou S.A.',
    "Beers": ['Negra']
}, {
    "Brewery": 'Browar Amber',
    "Beers": ['Kozlak', 'Grand Imperial Porter']
}, {
    "Brewery": 'Dreher "Brewery"',
    "Beers": ['Dreher Bak']
}, {
    "Brewery": 'Carib "Brewery" Limited',
    "Beers": ['Mackeson Triple XXX Stout', 'Royal Extra Stout']
}, {
    "Brewery": 'Harar Beer Factory',
    "Beers": ['Harar Beer', 'Hakim Stout']
}, {
    "Brewery": 'White Ale',
    "Beers": ['Special Edition']
}, {
    "Brewery": 'Brouwerij De Koninck NV',
    "Beers": ['De Koninck', 'De Koninck Tripel', 'De Koninck Blond', 'Winter Koninck']
}, {
    "Brewery": 'Unertl Weissbier GmbH',
    "Beers": ['Unertl Weissbier']
}, {
    "Brewery": 'Red Squared',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Flying Monkey Brewing Company',
    "Beers": ['Flying Monkey Amber Ale', 'Flying Monkey Four Finger Stout']
}, {
    "Brewery": 'Eel River Brewing Co.',
    "Beers": ['California Blonde Ale', 'Certified Organic I.P.A.', 'Earth Thirst Double IPA', 'Certified Organic Porter', 'Raven\'s Eye Imperial Stout', 'Certified Organic Amber Ale', 'Triple Exultation']
}, {
    "Brewery": 'George Gale &amp; Company Ltd',
    "Beers": ['Gale\'s Christmas Ale', 'Gale\'s Festival Mild', 'Gale\'s Prize Old Ale', 'HSB (Horndean Special Bitter)']
}, {
    "Brewery": 'Abbey Beverage Company (Monastery of Christ in the Desert)',
    "Beers": ['Monks\' Wit', 'Monks\' Ale']
}, {
    "Brewery": 'Plzensky Prazdroj, a. s.',
    "Beers": ['Gambrinus', 'Pilsner Urquell']
}, {
    "Brewery": 'Park &amp; Bellheimer AG',
    "Beers": ['Valentins Wei��bier']
}, {
    "Brewery": 'T.D.Ridley &amp; Sons Limited',
    "Beers": ['Old Bob']
}, {
    "Brewery": 'Mother Earth Brewing',
    "Beers": ['Sunny Haze', 'Tripel Overhead (Bourbon Barrel-aged)', 'Tripel Overhead', 'Silent Night', 'Old Neighborhood Oatmeal Porter', 'Endless River', 'Dark Cloud', 'Weeping Willow Wit', 'Second Wind Pale Ale', 'Sisters Of The Moon']
}, {
    "Brewery": 'Brauhaus Hartmannsdorf GmbH',
    "Beers": ['D�_llnitzer Ritterguts Gose']
}, {
    "Brewery": 'Wychwood "Brewery" Company Ltd',
    "Beers": ['Circle Master', 'Hobgoblin', 'Duchy Originals Organic English Ale', 'Goliath', 'Fiddler\'s Elbow', 'Bah Humbug', 'WychCraft', 'Duchy Originals Organic Old Ruby Ale 1905', 'King Goblin']
}, {
    "Brewery": 'Guangdong Blue Ribbon Group',
    "Beers": ['Pabst Blue Ribbon 1844']
}, {
    "Brewery": 'Yards Brewing Co.',
    "Beers": ['Poor Richard\'s Tavern Spruce Ale', 'General Washington\'s Tavern Porter', 'Love Stout', 'Yards Saison', 'Trubbel De Yards', 'Extra Special Ale (ESA)', 'Thomas Jefferson\'s Tavern Ale', 'Brawler Pugilist Style Ale', 'Philadelphia Pale Ale', 'Olde Bartholomew', 'Cape Of Good Hope IPA']
}, {
    "Brewery": 'Nikenjayamochi Kadoya Honten Co. / Ise Kadoya "Brewery"',
    "Beers": ['Ise Kadoya IPA', 'Ise Kadoya Genmai Ale', 'Isekadoya Triple Hop']
}, {
    "Brewery": 'Brauerei Grieskirchen AG',
    "Beers": ['Grieskirchner J�_rger Weisse', 'Grieskirchner Pils']
}, {
    "Brewery": 'Brasserie Ellezelloise',
    "Beers": ['Saison', 'Quintine Blonde', 'Quintine Ambr��e / Quintine Biere De No��l', 'Blanche De Saisis', 'Hercule Stout']
}, {
    "Brewery": 'Brauerei Pinkus Mueller',
    "Beers": ['Organic Hefe-Weizen', 'Organic M�_nster Alt', 'Organic Pinkus Jubilate', 'Organic Ur Pils']
}, {
    "Brewery": 'Galway Hooker "Brewery"',
    "Beers": ['Galway Hooker Irish Pale Ale']
}, {
    "Brewery": 'Redhook Ale "Brewery"',
    "Beers": ['Redhook Blonde', 'Redhook Wit', 'Redhook Nut Brown', 'Redhook Long Hammer IPA', 'Redhook Eisbock 28', 'Redhook Winterhook', 'Redhook ESB', 'Redhook Copperhook', 'Redhook Tripel', 'Redhook Big Ballard Imperial IPA', 'Redhook Late Harvest Autumn Ale', 'Redhook Pilsner', 'Redhook Mudslinger Spring Ale', 'Redhook 8-4-1 Expedition', 'Redhook Treblehook', 'Redhook Double Black Stout']
}, {
    "Brewery": 'Genesee Brewing Co. / Dundee Brewing Co.',
    "Beers": ['Dundee Summer Wheat Beer', 'Dundee Pale Bock Lager', 'Dundee Pale Ale', 'Dundee Oktoberfest', 'Genesee Bock', 'Dundee Festive Ale', 'Dundee India Pale Ale', 'Dundee Nut Brown Ale', 'Dundee Irish Red Lager', 'Genesee Red Lager', 'Dundee Porter', 'Dundee Stout', 'Dundee Kolsch Style Ale']
}, {
    "Brewery": 'Brasserie Artisanale des Vosges',
    "Beers": ['La B��te Des Vosges']
}, {
    "Brewery": 'Big Boss Brewing',
    "Beers": ['Blanco Diablo', 'Hell\'s Belle', 'High Roller IPA', 'Bad Penny Brown Ale', 'Big Operator', 'Aces &amp; Ates', 'Harvest Time Pumpkin Ale', 'Angry Angel Kolsch']
}, {
    "Brewery": 'Cascara Quad',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Chipotle',
    "Beers": ['Smoked Porter']
}, {
    "Brewery": 'Hausbrauerei Zum Schl�_ssel',
    "Beers": ['Original Schl�_ssel Alt']
}, {
    "Brewery": 'Brouwerij St. Bernardus NV',
    "Beers": ['St. Bernardus Tripel', 'St. Bernardus Pater 6', 'Grottenbier', 'St. Bernardus Prior 8', 'St. Bernardus Witbier', 'Watou Tripel', 'Grotten Flemish Ale', 'St. Bernardus Abt 12', 'Christmas Ale', 'Tokyo']
}, {
    "Brewery": 'Rex Beverage Holdings',
    "Beers": ['William Penn Colonial Style Lager']
}, {
    "Brewery": 'Purity Brewing Co',
    "Beers": ['Pure UBU']
}, {
    "Brewery": 'Sudwerk Restaurant and "Brewery"',
    "Beers": ['Sudwerk Hefe-Weizen', 'Sudwerk Helles', 'Sudwerk Mai Bock', 'Marzen', 'Sudwerk Doppel Bock', 'Sudwerk Pilsner']
}, {
    "Brewery": 'Big Sky Brewing Company',
    "Beers": ['Buckin\' Monk Tripel Ale', 'Stone Thrower Scotch Ale', 'Biere De No��l', 'Moose Drool Brown Ale', 'Summer Honey Ale', 'Powder Hound Winter Ale', 'Slow Elk Oatmeal Stout', 'Big Sky IPA', 'Montana Trout Slayer Wheat Ale', 'Bobo\'s Robust Porter', 'Cowboy Coffee Porter', 'Olde Bluehair Barley Wine', 'Scape Goat Pale Ale', 'Ivan The Terrible Imperial Stout']
}, {
    "Brewery": 'Browar Okocim S.A. (Carlsberg)',
    "Beers": ['Okocim (Zagloba) Premium Beer', 'O.K. Beer', 'Palone', 'Okocim Porter']
}, {
    "Brewery": 'McAuslan Brewing',
    "Beers": ['Griffon Rousse', 'St-Ambroise Framboise', 'Griffon Extra Blonde', 'St-Ambroise Apricot Wheat Ale', 'St-Ambroise Scotch Ale', 'McAuslan Cream Ale', 'St-Ambroise Oatmeal Stout', 'St-Ambroise Pale Ale', 'St-Ambroise Citrouille (Pumpkin Ale)', 'St-Ambroise India Pale Ale', 'St-Ambroise Stout Imp��riale Russe']
}, {
    "Brewery": 'Boulevard Brewing Co.',
    "Beers": ['Dry Stout', 'Love Child No. 2', 'Z��N', 'Unfiltered Wheat', 'Irish Ale', 'Nommo Dubbel', 'Bully! Porter', 'Coffee Ale', 'The Sixth Glass', 'Rye-on-Rye', 'Grainstorm Black Rye IPA', 'Pale Ale', 'Bob\'s \'47 Oktoberfest', 'Amber Ale', 'Pilsner', 'Reverb Imperial Pilsner', 'Bourbon Barrel Quad (BBQ)', 'Dark Truth Stout', 'Long Strange Tripel', 'Saison-Brett', 'Nutcracker Ale', 'Boss Tom\'s Golden Bock', 'Single-Wide I.P.A.', '80 Acre Hoppy Wheat', 'Double-Wide I.P.A.', 'Tank 7 Farmhouse Ale', 'Harvest Dance']
}, {
    "Brewery": 'Mac\'s "Brewery"',
    "Beers": ['Sassy Red', 'Mac\'s Hop Rocker Pilsener']
}, {
    "Brewery": 'Dark Heather Saison',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Neumarkter Lammsbr�_u',
    "Beers": ['Organic Pilsner', 'Neumarkter Lammsbr�_u Pilsner', 'Neumarkter Lammsbr�_u Dunkel (Lammsbr�_u Organic Dunkel)']
}, {
    "Brewery": 'Cognac Barrel Aged',
    "Beers": ['Cigar City / Swamp Head Church On A Hill', 'Imperial Sweet Stout']
}, {
    "Brewery": 'Browar ��om�_a Sp. z o.o.',
    "Beers": ['Lomza Wyborowe', 'Lomza Export', 'Lomza Pelne (Premium Beer)']
}, {
    "Brewery": 'Top of the Hill Restaurant and "Brewery"',
    "Beers": ['Leaderboard Trophy Lager', 'Ram\'s Head India Pale Ale']
}, {
    "Brewery": 'The Tale Of Van Winkle',
    "Beers": ['Folklore']
}, {
    "Brewery": 'Brasserie De Saint-Sylvestre',
    "Beers": ['Bi��re Nouvelle', 'Gavroche', '3 Monts Amber Ale On Lees', '3 Monts Flanders Golden Ale']
}, {
    "Brewery": 'T &amp; R Theakston Ltd.',
    "Beers": ['Theakston Old Peculier', 'Theakston XB']
}, {
    "Brewery": 'Klosterbrauerei Andechs',
    "Beers": ['Andechser Weissbier Hefetr�_b', 'Andechser Dunkel', 'Andechser  Dunkles Weissbier', 'Andechser Hell', 'Andechser Bergbock Hell', 'Andechser Doppelbock Dunkel', 'Andechser Spezial Hell']
}, {
    "Brewery": 'Bass Brewers Limited',
    "Beers": ['Bass Pale Ale']
}, {
    "Brewery": 'Kind "Beers" Brewing',
    "Beers": ['Belgian Red Ale']
}, {
    "Brewery": 'North Coast Brewing Co.',
    "Beers": ['Black Hart', 'Pranqster', 'Blue Star Great American Wheat Beer', 'Wintertime Ale', 'ACME California Pale Ale', 'Otsuchi Old Stock Ale  2012', 'Ruedrich\'s Red Seal Ale', 'Scrimshaw Pilsner', 'Old #38 Stout', 'Old Stock Ale', 'Old Plowshare Stout', 'ACME California IPA', 'Brother Thelonious', 'Old Rasputin Russian Imperial Stout', 'Le Merle', 'Grand Cru', 'Old Rasputin XV Anniversary Barrel Aged Stout']
}, {
    "Brewery": 'King "Brewery"',
    "Beers": ['King Dark Lager', 'King Pilsner', 'King Vienna Lager']
}, {
    "Brewery": 'Brauerei Diebels GmbH &amp; Co KG',
    "Beers": ['Diebels Alt']
}, {
    "Brewery": 'Northwest Brewing Company',
    "Beers": ['Hoppy Bitch IPA', 'Pandan Brown Ale', 'Mango Weizen', 'Ginger Pale Ale']
}, {
    "Brewery": 'Grupo Modelo S.A. de C.V.',
    "Beers": ['Negra Modelo']
}, {
    "Brewery": 'Switchback Brewing Company',
    "Beers": ['Switchback Ale']
}, {
    "Brewery": 'N��gne ��/Jolly Pumpkin Artisan Ales/Stone Brewing Co.',
    "Beers": ['Special Holiday Ale']
}, {
    "Brewery": 'James Page Brewing Company',
    "Beers": ['Iron Range Amber Lager', 'Voyageur Extra Pale Ale']
}, {
    "Brewery": 'Moosejaw Pizza &amp; Dells Brewing Co.',
    "Beers": ['Kilbourn Hop Ale']
}, {
    "Brewery": 'Brouwerij Kerkom',
    "Beers": ['Bink Bloesem (Bloesembink)', 'Bink Bruin', 'Bink Blond', 'Bink Tripel', 'Bink (Winterkoninkske) Grand Cru', 'Bink Winterkoninkske']
}, {
    "Brewery": 'Brouwerij De Ranke',
    "Beers": ['Kriek De Ranke', 'De Ranke Guldenberg', 'De Ranke XX Bitter', 'De Ranke P��re No��l', 'Saison De Dottignies', 'Noir De Dottignies', 'Cuv��e De Ranke']
}, {
    "Brewery": 'Hog\'s Back "Brewery"',
    "Beers": ['T.E.A. (Traditional English Ale)']
}, {
    "Brewery": 'Dixie Brewing Co.',
    "Beers": ['Dixie Blackened Voodoo Lager']
}, {
    "Brewery": 'Krombacher Brauerei',
    "Beers": ['Krombacher Weizen', 'Krombacher Pils', 'Krombacher Dark']
}, {
    "Brewery": 'Rahr &amp; Sons Brewing Company',
    "Beers": ['Ugly Pug Black Lager', 'Buffalo Butt', 'Rare Breed: Blind Salamander', 'Summertime Wheat', 'Rahr\'s Red Amber Lager', 'Blonde Lager', 'Iron Thistle', 'Pecker Wrecker', 'La Grange', 'Gravel Road', 'Snowmageddon', 'Bucking Bock', 'Winter Warmer', 'Bourbon Barrel Aged Winter Warmer', 'Stormcloud IPA']
}, {
    "Brewery": 'Brasserie de l\'Abbaye des Rocs s.a.',
    "Beers": ['Nounnette [Brasserie Des Rocs Blonde]', 'Abbaye Des Rocs [Brasserie Des Rocs Brune]', 'Brasserie Des Rocs Triple Imp��riale', 'Abbaye Des Rocs Grand Cru Belgian Special Brown', 'La Montagnarde [Brasserie Des Rocs Ambree]', 'Abbaye Des Rocs Sp��ciale No��l', 'Blanche Des Honnelles [Brasserie Des Rocs Blanche Double]']
}, {
    "Brewery": 'Bi��res de Chimay S.A.',
    "Beers": ['Chimay Premi��re (Red)', 'Chimay Tripel (White)', 'Chimay Grande R��serve (Blue)', 'Dor��e', 'Chimay Sp��ciale Cent Cinquante']
}, {
    "Brewery": 'Good People Brewing Company',
    "Beers": ['Fatso', 'Snake Handler Double IPA', 'Brown', 'Coffee Oatmeal Stout']
}, {
    "Brewery": 'Brauerei Beck &amp; Co.',
    "Beers": ['Beck\'s Oktoberfest']
}, {
    "Brewery": 'Santa Cruz Ale Works',
    "Beers": ['Dark Night Oatmeal Stout', 'IPA']
}, {
    "Brewery": 'Back Forty Beer Co.',
    "Beers": ['Truck Stop Honey Brown Ale', 'Naked Pig Pale Ale']
}, {
    "Brewery": 'Lafayette Brewing Co.',
    "Beers": ['Black Angus Oatmeal Stout']
}, {
    "Brewery": 'Brouwerij Slaghmuylder',
    "Beers": ['Witkap Pater Singel / Stimulo', 'Witkap Pater Tripel', 'Witkap Pater Dubbel']
}, {
    "Brewery": 'Brett &amp; I',
    "Beers": ['Smuttynose Short Batch #2']
}, {
    "Brewery": 'Skull Coast Brewing Company',
    "Beers": ['Gallows Point Dead Man\'s Porter', 'Maelstrom IPA']
}, {
    "Brewery": 'Uinta Brewing Company',
    "Beers": ['Birthday Suit', 'Bristlecone Brown Ale', 'King\'s Peak Porter', 'Detour Double India Pale Ale', 'HooDoo K�_lsch Style Ale', 'Cockeyed Cooper', 'Trader Session IPA', 'Tilted Smile Imperial Pilsner', 'Blue Sky Pilsner', 'Baba Black Lager', 'Hop Notch IPA', 'Yard Sale Winter Lager', 'Monkshine Belgian Style Blonde Ale', 'Angler\'s Pale Ale', 'Labyrinth Black Ale', 'Sum\'r Summer Ale', 'Punk\'n Harvest Pumpkin Ale', 'Sea Legs Baltic Porter', 'Wyld Extra Pale Ale', 'Dubhe Imperial Black IPA', 'Oak Jacked Imperial Pumpkin Ale', 'Anniversary Barley Wine Ale']
}, {
    "Brewery": 'Tyranena Brewing Company',
    "Beers": ['Three Beaches Honey Blonde', 'Sheep Shagger Scotch Ale', 'Fargo Brothers Hefeweizen', 'Benji\'s Chipotle Smoked Imperial Porter', 'Gemuetlichkeit Oktoberfest', 'Headless Man Amber Alt', 'Dirty Old Man Imperial Rye Porter', 'Painted Ladies Pumpkin Spice Ale', 'Stone Tepee Pale Ale', 'Hop Whore', 'Shaggin\' In The Wood', 'Down \'N Dirty Chocolate Oatmeal Stout', 'Chief BlackHawk Porter', 'Rocky\'s Revenge Bourbon Brown', 'Who\'s Your Daddy? Bourbon Barrel-Aged Imperial Porter', 'The Devil Made Me Do It! Coffee Imperial Oatmeal Porter', 'Bitter Woman India Pale Ale', 'Doubly Down \'N Even Dirtier', 'Scurvy']
}, {
    "Brewery": 'Breckenridge "Brewery"',
    "Beers": ['Porter Porter (471 Series)', 'Agave Wheat', 'Christmas Ale', 'Trademark Pale Ale', 'Pandora\'s Bock', 'Vanilla Porter', 'Autumn Ale', '471 ESB', '72 Imperial Chocolate Cream Stout', 'Regal Pilsner', 'Lucky U IPA', '471 IPA']
}, {
    "Brewery": 'Quad',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Ridgeway Brewing',
    "Beers": ['Querkus Smoked Oaked Porter', 'Reindeer Droppings', 'Blue', 'Criminally Bad Elf', 'Insanely Bad Elf', 'Santa\'s Butt', 'Bad Elf', 'Very Bad Elf', 'Reindeer\'s Revolt', 'Bad King John', 'Warm Welcome', 'Pickled Santa', 'Seriously Bad Elf', 'Lump Of Coal', 'Foreign Export Stout', 'Ivanhoe', 'Ridgeway Bitter', 'IPA']
}, {
    "Brewery": 'Klosterbrauerei Weltenburg',
    "Beers": ['Weltenburger Hefe-Weissbier Hell', 'Weltenburger Hefe-Weissbier Dunkel', 'Weltenburger Kloster Urtyp Hell', 'Weltenburger Kloster Anno 1050', 'Weltenburger Kloster Winter-Traum', 'Weltenburger Kloster Barock-Hell', 'Weltenburger Kloster Barock Dunkel', 'Weltenburger Pils', 'Weltenburger Kloster Asam-Bock']
}, {
    "Brewery": 'Brauerei G�_ss (Brau Union)',
    "Beers": ['G�_sser Dark Beer']
}, {
    "Brewery": 'Steinhaus Brewing Co.',
    "Beers": ['Jumping Cow Amber Ale', 'Mission St. Hefeweizen', 'Mission St. India Pale Ale', 'Gila Monster Amber Lager', 'Mission St. Blonde Ale', 'Mission St. Brown Ale', 'Mission St. Anniversary Ale 2012', 'Mission St. Pale Ale']
}, {
    "Brewery": 'Otter Creek Brewing / Wolaver\'s',
    "Beers": ['Wolaver\'s Wildflower Wheat', 'Otter Creek Copper Ale', 'Otter Creek Stovepipe Porter', 'Wolaver\'s Brown Ale', 'Otter Creek Spring Bock', 'Wolaver\'s (Organic) Pumpkin Ale', 'Wolaver\'s Oatmeal Stout', 'Wolaver\'s India Pale Ale', 'Otter Creek Black IPA', 'Otter Creek Hop Session Ale', 'Wolaver\'s Alta Gracia Coffee Porter', 'Otter Creek Winter Red Ale', 'Otter Creek Russian Imperial Stout']
}, {
    "Brewery": 'Brouwerij Duvel Moortgat NV',
    "Beers": ['Vedett Extra White', 'Duvel Gefilterd', 'Vedett', 'Duvel Single', 'Duvel', 'Duvel Tripel Hop', 'Duvel Tripel Hop 2012 (Citra Hops)']
}, {
    "Brewery": 'Sunday River Brewing Co.',
    "Beers": ['Black Bear Porter']
}, {
    "Brewery": 'Triple Voodoo Brewing',
    "Beers": ['Triple Voodoo Inception Belgian Style Ale']
}, {
    "Brewery": 'River Horse Brewing Co.',
    "Beers": ['River Horse Tripel Horse', 'River Horse Belgian Freeze Belgian Style Winter Ale', 'Imperial Cherry Amber Ale', 'River Horse Double Wit', 'River Horse Special Ale Amber', 'River Horse Summer Blonde', 'Hipp-O-Lantern', 'River Horse Oatmeal Milk Stout', 'River Horse Hop Hazard Pale Ale', 'Hop-a-lot-amus']
}, {
    "Brewery": 'Pardubick�_ pivovar a.s.',
    "Beers": ['Porter Boom', 'Porter']
}, {
    "Brewery": 'Brouwerij Westmalle',
    "Beers": ['Westmalle Trappist Tripel', 'Westmalle Trappist Dubbel', 'Westmalle Trappist Extra']
}, {
    "Brewery": 'Six Rivers "Brewery"',
    "Beers": ['Kona Moon Porter']
}, {
    "Brewery": 'Hambleton Ales',
    "Beers": ['Hambleton Nightmare (Yorkshire Porter)', 'Hambleton Nightmare (Extra Stout  Porter)']
}, {
    "Brewery": 'UAB ��vyturys',
    "Beers": ['Baltas', 'Baltijos']
}, {
    "Brewery": 'Mission "Brewery"',
    "Beers": ['Mission Hefeweizen', 'Mission Amber', 'Mission IPA', 'Mission Blonde', 'Dark Seas', 'Shipwrecked']
}, {
    "Brewery": 'Isle of Arran "Brewery" Company Ltd.',
    "Beers": ['Arran Blonde', 'Arran Dark']
}, {
    "Brewery": 'Flying Fish Brewing Company',
    "Beers": ['Belgian Style Dubbel', 'OktoberFish', 'Grand Cru Winter Reserve', 'ESB Amber Ale', 'Farmhouse Summer Ale', 'HopFish IPA', 'Red Fish', 'Exit 8', 'Imperial Espresso Porter', 'Extra Pale Ale', 'Exit 4', 'Exit 9', 'Exit 16']
}, {
    "Brewery": 'Greenbush Brewing Company',
    "Beers": ['Distorter', 'Brother Benjamin', 'Closure', 'Anger', 'Dunegr�_s']
}, {
    "Brewery": 'Blackberry',
    "Beers": ['Summer 2010 Vintage']
}, {
    "Brewery": 'Brauerei Im F�_chschen',
    "Beers": ['Im F�_chschen Alt']
}, {
    "Brewery": 'Browary Warka Sp. z o.o.',
    "Beers": ['Warka', 'Warka Strong']
}, {
    "Brewery": 'Sweetwater Tavern &amp; "Brewery"',
    "Beers": ['High Desert Imperial Stout']
}, {
    "Brewery": 'Cervecer�_a Minerva',
    "Beers": ['Minerva Stout']
}, {
    "Brewery": 'Minhas Craft "Brewery"',
    "Beers": ['Huber Bock Beer', 'Berghoff Winter Ale', 'Boatswain H.L.V. Ale (Heavy Lift Vessel)', 'Boatswain Chocolate Stout', 'Berghoff Pale Ale']
}, {
    "Brewery": 'Granite City Food &amp; "Brewery"',
    "Beers": ['Duke Of Wellington India Pale Ale', 'Broad Axe Stout', 'Brother Benedict\'s Bock']
}, {
    "Brewery": 'Thomas Hooker Brewing Company',
    "Beers": ['Thomas Hooker Nor\'Easter Lager', 'Thomas Hooker Irish Red Ale', 'Thomas Hooker Blonde Ale', 'Thomas Hooker Munich-Style Lager', 'Thomas Hooker American Pale Ale', 'Thomas Hooker Old Marley Barleywine', 'Thomas Hooker Octoberfest Lager', 'Thomas Hooker Hop Meadow IPA', 'Thomas Hooker Imperial Porter', 'Thomas Hooker Chocolate Truffle Stout', 'Thomas Hooker Liberator Doppelbock']
}, {
    "Brewery": 'Gentse Stadsbrouwerij',
    "Beers": ['Gruut Belgian Amber Ale', 'Gruut Belgian Wit Bier']
}, {
    "Brewery": 'Reserve Series Aged In Chardonnay Barrels',
    "Beers": ['Apricot Au Poivre Saison']
}, {
    "Brewery": 'Marshall Wharf Brewing Company / Three Tides Restaurant',
    "Beers": ['Sexy Chaos', 'Big Twitch IPA', 'Cant Dog Imperial IPA']
}, {
    "Brewery": 'Barley Island Brewing Company',
    "Beers": ['Sheet Metal Blonde', 'Barfly India Pale Ale', 'Brass Knuckles Oatmeal Stout', 'Blind Tiger Pale Ale', 'Dirty Helen Brown Ale', 'Beastie Barrel Stout', 'Black Majic Java Stout', 'Beastie Barrel Porter']
}, {
    "Brewery": 'Brasserie De Silenrieux S.A. (Chez L\'P��re Sarrasin)',
    "Beers": ['Joseph Spelt Ale', 'Sara Buckwheat Ale']
}, {
    "Brewery": 'Murphy "Brewery" Ireland Limited',
    "Beers": ['Murphy\'s Irish Stout']
}, {
    "Brewery": 'Asahi Breweries Ltd',
    "Beers": ['Asahi Black (Kuronama)']
}, {
    "Brewery": 'Coniston Brewing Co. Ltd',
    "Beers": ['Old Man Ale', 'Bluebird Bitter', 'XB Bluebird Bitter']
}, {
    "Brewery": 'Fearless Brewing Company',
    "Beers": ['Scottish Ale']
}, {
    "Brewery": 'Palmetto Brewing Company',
    "Beers": ['Palmetto Espresso Porter', 'Palmetto Amber', 'Palmetto Lager', 'Palmetto Pale Ale']
}, {
    "Brewery": 'Brouwerij Het Anker',
    "Beers": ['Gouden Carolus Classic', 'Gouden Carolus Ambrio', 'Lucifer', 'Gouden Carolus Tripel', 'Gouden Carolus No��l / Christmas', 'Cuv��e Van De Keizer Blauw (Blue)', 'Anker Blond', 'Gouden Carolus Easter Beer', 'Gouden Carolus Hopsinjoor', 'Cuv��e Van De Keizer Rood (Red)']
}, {
    "Brewery": 'Sequoia Brewing Company',
    "Beers": ['General Sherman IPA']
}, {
    "Brewery": 'SLO Brewing Company',
    "Beers": ['Extra Pale Ale']
}, {
    "Brewery": 'Ass Kisser Ales',
    "Beers": ['Ass Kisser Porter Pounder Smoked Porter', 'Ass Kisser Double IPA']
}, {
    "Brewery": 'Darwin "Brewery" Ltd.',
    "Beers": ['Original Flag Porter']
}, {
    "Brewery": 'Erie Brewing Co.',
    "Beers": ['Heritage Alt', 'Ol\' Red Cease And Desist', 'Drake\'s Crude', 'Fallenbock', 'Railbender Ale', 'Misery Bay IPA', 'Golden Fleece Maibock', 'Mad Anthony\'s APA']
}, {
    "Brewery": 'Brasserie Caracole',
    "Beers": ['Caracole Ambr��e', 'Nostradamus', 'Troublette', 'Saxo']
}, {
    "Brewery": 'Carlsberg Danmark A/S',
    "Beers": ['Jacobsen Dark Lager', 'Jacobsen Saaz Blonde']
}, {
    "Brewery": 'Cedar Aged',
    "Beers": ['Dos Costas Oeste']
}, {
    "Brewery": 'Oak Aged American Ale',
    "Beers": ['Woodcut No. 6']
}, {
    "Brewery": 'Brasserie Grain d\' Orge (Brasserie Jeanne d\'Arc SA)',
    "Beers": ['Belzebuth']
}, {
    "Brewery": 'Moab "Brewery"',
    "Beers": ['Dead Horse Amber Ale', 'Scorpion Pale Ale']
}, {
    "Brewery": 'Pivovar Starbrno, A.S.',
    "Beers": ['Starobrno']
}, {
    "Brewery": 'Holy Sheet (��ber Abbey Ale)',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Belhaven "Brewery" Company Ltd.',
    "Beers": ['St. Andrew\'s Ale', 'Wee Heavy', 'Belhaven Scottish Ale', 'Belhaven Best', 'Belhaven Twisted Thistle IPA', 'Belhaven Scottish Stout']
}, {
    "Brewery": 'Brewster\'s Brewing Co Ltd',
    "Beers": ['Mata Hari (Wicked Women Series)']
}, {
    "Brewery": 'Warsteiner Brauerei',
    "Beers": ['Warsteiner Premium Dunkel', 'Warsteiner Premium Verum', 'Warsteiner Premium Oktoberfest']
}, {
    "Brewery": 'Brouwerij Deca Services NV',
    "Beers": ['Westoek XX', 'Westoek X']
}, {
    "Brewery": 'Brouwerij Corsendonk',
    "Beers": ['Corsendonk Apple White', 'Corsendonk Agnus / Abbey Pale Ale', 'Corsendonk Pater / Abbey Brown Ale', 'Corsendonk Christmas Ale']
}, {
    "Brewery": 'MSP',
    "Beers": ['Mesquite Smoked Porter']
}, {
    "Brewery": 'Leelanau Brewing Company',
    "Beers": ['Petoskey Pale Ale', 'Whaleback White', 'Good Harbor Golden Ale']
}, {
    "Brewery": 'Inlet Brewing Co.',
    "Beers": ['Monk In The Trunk']
}, {
    "Brewery": 'El"Brewery" Co. Ltd. Sp. z o.o.',
    "Beers": ['E B Natural Premium Quality Beer', 'Hevelius Kaper']
}, {
    "Brewery": 'Brasserie de l\'Abbaye du Val-Dieu',
    "Beers": ['Val-Dieu Winter', 'Val-Dieu Brune', 'Val-Dieu Grand Cru', 'Rader Ambr��e', 'Val-Dieu Blond', 'Val-Dieu Triple', 'Val-Dieu Bi��re De No��l']
}, {
    "Brewery": 'Pivovarna La��ko',
    "Beers": ['Zlatorog']
}, {
    "Brewery": 'Grupo Cervezas Alhambra, SL',
    "Beers": ['Reserva 1925', 'Alhambra Negra']
}, {
    "Brewery": 'Gentleman Scholar Brewing Co.',
    "Beers": ['Requiem Espresso Stout']
}, {
    "Brewery": 'Laird\'s Apple Brandy Barrel Aged',
    "Beers": ['Warmer Winter Winter Warmer']
}, {
    "Brewery": 'French Oak',
    "Beers": ['Jos�� Mart�_ India Porter']
}, {
    "Brewery": 'Detroit Beer Co.',
    "Beers": ['Detroit Beer Co. The Detroit Dwarf']
}, {
    "Brewery": 'Brasserie De Cazeau',
    "Beers": ['Cazeau Tournay Noire', 'Cazeau Tournay Blond', 'Cazeau Saison']
}, {
    "Brewery": 'W.H. Brakspear &amp; Sons plc',
    "Beers": ['Live Organic', 'Brakspear Bitter', 'Brakspear Oxford Gold', 'Triple']
}, {
    "Brewery": 'Beer Camp #53 (Best Of Beer Camp)',
    "Beers": ['Floral IPA']
}, {
    "Brewery": 'Furthermore Beer',
    "Beers": ['Knot Stock', 'Three Feet Deep', 'Fatty Boombalatty', 'Proper', 'Makeweight', 'Fallen Apple', 'Oscura']
}, {
    "Brewery": 'Terminal Gravity Brewing Company',
    "Beers": ['ESG (Extra Special Golden)', 'Festivale', 'Terminal Gravity IPA']
}, {
    "Brewery": 'Auburn Alehouse "Brewery" &amp; Restaurant',
    "Beers": ['Gold Digger IPA']
}, {
    "Brewery": 'South Shore "Brewery"',
    "Beers": ['Northern Lights Ale', 'Inland Sea Pilsner (Honey Pils)', 'Rhoades Scholar Stout', 'Bourbon Barrel Coffee Mint Stout']
}, {
    "Brewery": 'Klosterbrauerei Neuzelle GmbH',
    "Beers": ['Bathbeer', 'Original Badebier', 'Neuzeller Kloster-Brau Porter']
}, {
    "Brewery": 'Dortmunder Actien Brauerei / DAB',
    "Beers": ['Hansa Export', 'DAB Original']
}, {
    "Brewery": 'The Caledonian Brewing Company',
    "Beers": ['Organic Great Scot Pale Ale', 'Golden Promise Organic Ale', 'Deuchars IPA']
}, {
    "Brewery": 'Butternuts Beer &amp; Ale',
    "Beers": ['Heinnieweisse Weissebier', 'Moo Thunder Stout']
}, {
    "Brewery": 'Saint Andr��',
    "Beers": ['Saint Andr�� Vienna Lager']
}, {
    "Brewery": 'Imperial Red Ale',
    "Beers": ['Climax Noel', 'Tongue Buckler']
}, {
    "Brewery": 'Yo-Ho Brewing Company',
    "Beers": ['Tokyo Black', 'Yona Yona Ale', 'Aooni India Pale Ale']
}, {
    "Brewery": 'Non-Saccharin Version)',
    "Beers": ['Mestreechs Aajt (US']
}, {
    "Brewery": 'Gasthaus &amp; Gosebrauerei Bayerischer Bahnhof',
    "Beers": ['Leipziger Gose', 'Brettanomyces Lambicus Berliner Style Weisse', 'Berliner Style Weisse', 'Porticus']
}, {
    "Brewery": 'Zhukov\'s Final Push',
    "Beers": ['Marshal Zhukov\'s Imperial Stout']
}, {
    "Brewery": 'Felinfoel "Brewery" Company, Ltd.',
    "Beers": ['Double Dragon', 'Thames Welsh ESB']
}, {
    "Brewery": 'Pivovar Radegast a.s.',
    "Beers": ['Radegast Premium']
}, {
    "Brewery": 'Brouwerij Bosteels',
    "Beers": ['Pauwel Kwak', 'Tripel Karmeliet', 'DeuS (Brut Des Flandres)']
}, {
    "Brewery": 'Wellington County "Brewery"',
    "Beers": ['Iron Duke', 'Imperial Russian Stout', 'Special Pale Ale', 'County Dark Ale', 'Arkell Best Bitter']
}, {
    "Brewery": 'Reserve Series Aged In Whiskey Barrels',
    "Beers": ['Black Betty Imperial Stout', 'Fathead Barleywine']
}, {
    "Brewery": 'Brouwerij Bockor N.V.',
    "Beers": ['Cuvee Des Jacobins Rouge', 'Omer Traditional Blond', 'Bellegems Bruin']
}, {
    "Brewery": 'Jacob Leinenkugel Brewing Company',
    "Beers": ['Leinenkugel\'s Limited Golden Lager', 'Leinenkugel\'s Creamy Dark', 'Leinenkugel\'s Sunset Wheat', 'Snowdrift Vanilla Porter', 'Big Eddy Wee Heavy Scotch Ale', 'Big Eddy Russian Imperial Stout', 'Big Eddy Baltic Porter', 'Big Eddy Imperial IPA']
}, {
    "Brewery": 'Big Hole Brewing Company',
    "Beers": ['Mythical White', 'Headstrong Pale Ale', 'Diablo Dark Ale']
}, {
    "Brewery": 'Smuttynose Brewing Company',
    "Beers": ['Smuttynose Summer Weizen', 'Smuttynose Wheat Wine (Big Beer Series)', 'Smuttynose Gravitation (Big Beer Series)', 'Smuttynose Maibock (Big Beer Series)', 'Smuttynose Winter Ale', 'Smuttynose Farmhouse Ale (Big Beer Series)', 'Smuttynose Scotch Style Ale (Big Beer Series)', 'Smuttynose Old Brown Dog Ale', 'Smuttynose Star Island Single', 'Smuttynose Zinneke', 'Smuttynose Robust Porter', 'Smuttynose S\'muttonator (Big Beer Series)', 'Smuttynose Pumpkin Ale', 'Smuttynose Imperial Stout (Big Beer Series)', 'Smuttynose Shoals Pale Ale', 'Smuttynose Baltic Porter (Big Beer Series)', 'Smuttynose Really Old Brown Dog Ale (Big Beer Series)', 'Smuttynose Barleywine Style Ale (Big Beer Series)', 'Smuttynose Ry(e)an Ale', 'Smuttynose Homunculus (Big Beer Series)', 'Smuttynose Big A IPA', 'Smuttynose IPA "Finest Kind"', 'Smuttynose Noonan Black IPA']
}, {
    "Brewery": 'Steam Whistle Brewing',
    "Beers": ['Steam Whistle Pilsner']
}, {
    "Brewery": 'Brauerei Hofstetten Krammer GmbH &amp; Co. KG',
    "Beers": ['Barleywine Ale', 'Kubelbier', 'Original Munchner Hochzeitsbier Von 1810', 'Granitbock', 'Saphir Bock']
}, {
    "Brewery": '"The Perfect Crime"',
    "Beers": ['Evil Twin / Stillwater / Stone']
}, {
    "Brewery": 'Suntory',
    "Beers": ['Suntory The Premium Malt\'s']
}, {
    "Brewery": 'Heavenly Feijoa Tripel',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Ceres "Brewery" (Royal Unibrew)',
    "Beers": ['Ceres Royal Stout (Ceres Extra Strong Stout)']
}, {
    "Brewery": 'Thisted Bryghus',
    "Beers": ['Limfjordsporter']
}, {
    "Brewery": 'Nut Brown Lager',
    "Beers": ['Saranac Season\'s Best']
}, {
    "Brewery": 'Old Dominion Brewing Company',
    "Beers": ['Dominion Ale', 'Dominion Beach House Golden Pilsner', 'Dominion Lager', 'Dominion Oak Barrel Stout', 'Dominion Big Thaw Bock', 'Dominion Octoberfest Maerzen', 'Dominion Baltic Porter', 'Dominion Double D IPA', 'Dominion Millennium Ale', 'Dominion Hop Mountain Pale Ale']
}, {
    "Brewery": 'Highland Brewing',
    "Beers": ['Highland Razor Wit', 'Highland Cattail Peak Wheat', 'Highland Devil���s Britches IPA', 'Highland Seven Sisters Abbey Style Ale', 'Highland Gaelic Ale', 'Highland Thunderstruck Coffee Porter', 'Highland Black Mocha Stout', 'Highland Oatmeal Porter', 'Highland Black Mountain Bitter', 'Highland Clawhammer Oktoberfest', 'Highland Cold Mountain Winter Ale', 'Highland St. Terese\'s Pale Ale', 'Highland Tasgall Ale', 'Highland Kashmir IPA', 'Highland Little Hump Spring Ale']
}, {
    "Brewery": 'Huisbrouwerij Sint Canarus',
    "Beers": ['Sint Canarus Tripel', 'Potteloereke']
}, {
    "Brewery": 'Le Fleur Misseur?',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'York "Brewery" Company Limited',
    "Beers": ['Centurion\'s Ghost Ale']
}, {
    "Brewery": 'Lazy Boy Brewing',
    "Beers": ['Lazy Boy Porter', 'Belgian Style Golden Ale', 'Mistletoe Bliss', 'Lazy Boy IPA']
}, {
    "Brewery": 'Pivovar Zlaty Bazant a.s.',
    "Beers": ['Golden Pheasant']
}, {
    "Brewery": 'Belfast Bay Brewing Co.',
    "Beers": ['Lobster Ale', 'McGovern\'s Oatmeal Stout']
}, {
    "Brewery": 'San Miguel Corporation',
    "Beers": ['San Miguel Dark Lager']
}, {
    "Brewery": '�_lvisholt Bruggh�_s',
    "Beers": ['Lava', 'Skj��lfti']
}, {
    "Brewery": 'Hofbrauhaus Wolters GmbH',
    "Beers": ['Wolters Fest-Bier', 'Wolters Pilsener Premium']
}, {
    "Brewery": 'Huisbrouwerij Boelens',
    "Beers": ['Bieken']
}, {
    "Brewery": 'Snake River Brewing Company &amp; Brewpub',
    "Beers": ['Snake River Lager', 'OB-1 Certified Organic Ale', 'Zonker Stout', 'Snake River Pale Ale', 'Pako\'s IPA']
}, {
    "Brewery": 'Brasserie Meteor',
    "Beers": ['Wendelinus']
}, {
    "Brewery": 'Cervejaria Sul Brasileira',
    "Beers": ['Xingu Black Beer']
}, {
    "Brewery": 'Professor Fritz Briem',
    "Beers": ['Professor Fritz Briem 1809 Berliner Weisse', 'Professor Fritz Briem 13th Century Grut Bier', 'Professor Fritz Briem Grodziskie']
}, {
    "Brewery": 'Frosty Knuckle Brewing Company',
    "Beers": ['Frosty Knuckle Ale']
}, {
    "Brewery": 'Royal Unibrew A/S',
    "Beers": ['Faxe Fest Bock']
}, {
    "Brewery": 'Beach Brewing Company',
    "Beers": ['Hoptopus']
}, {
    "Brewery": 'Red Sky At Night (Saison Ale)',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Brouwerij Het Alternatief',
    "Beers": ['Bitter Truth', 'Piet-Agoras', 'Eerwaarde Pater']
}, {
    "Brewery": 'Landmark Beer Company',
    "Beers": ['Vanilla Bean Brown Ale', 'Landmark IPA']
}, {
    "Brewery": 'Whitbread PLC',
    "Beers": ['Whitbread Pale Ale', 'Mackeson Stout']
}, {
    "Brewery": 'Prism Brewing Company',
    "Beers": ['Bitto Honey IPA']
}, {
    "Brewery": 'Red Wine Barrel Aged',
    "Beers": ['Cellar Door', 'Old Guardian Barley Wine Style Ale']
}, {
    "Brewery": 'Mad River Brewing Company',
    "Beers": ['Mad Belgian', 'Double Dread Imperial Red Ale', 'Jamaica Red Ale', 'Jamaica Sunset India Pale Ale', 'Steelhead Scotch Porter', 'John Barleycorn Barleywine Ale', 'Steelhead Extra Stout', 'Steelhead Extra Pale Ale', 'Steelhead Double India Pale Ale', 'Serious Madness']
}, {
    "Brewery": 'Surly Brewing Company',
    "Beers": ['Mild', 'Smoke', 'Schadenfreude', 'Moe\'s Bender', 'CynicAle', 'SurlyFest', 'Coffee Bender', 'Overrated West Coast IPA', 'Damien', 'Bender', 'Hell', 'Furious', 'Bitter Brewer', 'Abrasive Ale', 'Wet', 'Darkness']
}, {
    "Brewery": 'Brouwerij der St. Benedictusabdij de Achelse',
    "Beers": ['Trappist Achel 8�� Bruin', 'Achel Trappist Extra', 'Trappist Achel 8�� Blond']
}, {
    "Brewery": 'Klosterbrauerei Weissenohe / Klosterbrauerei Wei��enohe Wirtshaus',
    "Beers": ['Monk\'s Christmas', 'Bonator', 'Weissenohe Monk\'s Fest']
}, {
    "Brewery": 'Frederic Robinson Limited',
    "Beers": ['Old Tom', 'Ginger Tom', 'Chocolate Tom (Old Tom With Chocolate)']
}, {
    "Brewery": 'Bierbrouwerij Sint Christoffel B.V',
    "Beers": ['Christoffel Robertus', 'Christoffel Bier', 'Christoffel Bokbier', 'Christoffel Nobel']
}, {
    "Brewery": 'Hook &amp; Ladder Brewing Company (No. 2)',
    "Beers": ['Hook &amp; Ladder Pipe &amp; Drum Irish Ale', 'Hook &amp; Ladder Ember Amber', 'Hook &amp; Ladder Backdraft Brown']
}, {
    "Brewery": 'Mosaic',
    "Beers": ['Samuel Adams Latitude 48 IPA 2013']
}, {
    "Brewery": 'Stift Engelszell',
    "Beers": ['Gregorius']
}, {
    "Brewery": 'Tallgrass Brewing Company',
    "Beers": ['Tallgrass Velvet Rooster', 'Tallgrass Ale', 'Tallgrass Halcyon Unfiltered Wheat', 'Tallgrass Vanilla Bean Buffalo Sweat', 'Tallgrass Buffalo Sweat', 'Tallgrass Oasis', 'Tallgrass IPA', 'Tallgrass 8-Bit Pale Ale']
}, {
    "Brewery": 'Beer Camp #45 (Best Of Beer Camp: Oatmeal Stout)',
    "Beers": ['Snowed In Stout']
}, {
    "Brewery": 'Lao "Brewery" Co.',
    "Beers": ['Beerlao Dark']
}, {
    "Brewery": 'Bayreuther Bierbrauerei',
    "Beers": ['Aktien Zwick\'l Kellerbier']
}, {
    "Brewery": '15th Anniversary Ale',
    "Beers": ['Ommegang XV']
}, {
    "Brewery": 'Taps Brewing Co. Inc.',
    "Beers": ['Taps Red Cream Ale']
}, {
    "Brewery": 'Cameron\'s Brewing Co.',
    "Beers": ['Lager', 'RPA (Rye Pale Ale)', 'Auburn Ale', 'Dark 266']
}, {
    "Brewery": 'Brauerei C. &amp; A. Veltins GmbH &amp; Co.',
    "Beers": ['Veltins Pilsner']
}, {
    "Brewery": 'Fall Wild Ale',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'WinterCoat',
    "Beers": ['WinterCoat Double Hop']
}, {
    "Brewery": 'Uerige Oberg�_rige Hausbrauerei GmbH / Zum Uerige',
    "Beers": ['Uerige Sticke', 'Uerige Doppelsticke', 'Uerige Altbier (Classic)']
}, {
    "Brewery": 'Ithaca Beer Company',
    "Beers": ['LeBleu', 'Outdoor Harvest Ale', 'Gorges Smoked Porter', 'Partly Sunny', 'Ground Break', 'Cold Front', 'Old Habit', 'Pale Ale', 'Brute', 'Hop  Stash', 'Flower Power India Pale Ale', 'Alphalpha', 'White Gold', 'Cascazilla', 'Country Pumpkin', 'Fourteen']
}, {
    "Brewery": 'La Folie',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Wye Valley "Brewery"',
    "Beers": ['Dorothy Goodbody\'s Our Glass', 'Butty Bach', 'Dorothy Goodbody\'s Wholesome Stout']
}, {
    "Brewery": 'Gueuzerie Tilquin',
    "Beers": ['Gueuze Tilquin (Draught Version)', 'Oude Gueuze Tilquin �� L\'Ancienne']
}, {
    "Brewery": 'Speyside Barrel Aged',
    "Beers": ['Texas Ranger (Chipotle Porter)']
}, {
    "Brewery": 'Brouwerij De Smedt / Brouwerij Affligem',
    "Beers": ['Affligem Tripel', 'Affligem Dubbel', 'Affligem No��l', 'Affligem Blond']
}, {
    "Brewery": 'JOS. Schlitz Brewing Co. (Pabst)',
    "Beers": ['Schlitz Gusto (Classic 1960\'s Formula)']
}, {
    "Brewery": 'Rum Barrel Aged',
    "Beers": ['Oil Of Aphrodite']
}, {
    "Brewery": 'Finch\'s Beer Co.',
    "Beers": ['Golden Wing', 'Threadless IPA', 'Fascist Pig Ale', 'Cut Throat', 'Secret Stache Stout']
}, {
    "Brewery": 'Super Cru',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'K�_stritzer Schwarzbierbrauerei GmbH &amp; Co.',
    "Beers": ['K�_stritzer Schwarzbier', 'K�_stritzer Oktoberfest']
}, {
    "Brewery": 'Carlsberg-Tetley Brewing Ltd',
    "Beers": ['Tetley\'s Smoothflow', 'Tetley\'s English Ale']
}, {
    "Brewery": '7 Seas "Brewery" and Taproom',
    "Beers": ['Ballz Deep Double IPA']
}, {
    "Brewery": 'Bitburger Brauerei',
    "Beers": ['Bitburger Premium Pils']
}, {
    "Brewery": 'Radeberger Exportbierbrauerei',
    "Beers": ['Radeberger Pilsner']
}, {
    "Brewery": 'Screaming Beaver',
    "Beers": ['Wild Oats Series No. 3']
}, {
    "Brewery": 'Tuckerman Brewing Co.',
    "Beers": ['Headwall Alt', 'Tuckerman\'s Pale Ale', '6288 Stout']
}, {
    "Brewery": 'Whim Ales',
    "Beers": ['Old Izaak']
}, {
    "Brewery": 'Bluetongue "Brewery" Pty Ltd',
    "Beers": ['Bluetongue Traditional Pilsner']
}, {
    "Brewery": 'Tibet Lhasa "Brewery" Co.',
    "Beers": ['Lhasa Beer']
}, {
    "Brewery": 'Directors\' Cut',
    "Beers": ['Harpoon 100 Barrel Series #45']
}, {
    "Brewery": '21st Amendment "Brewery"',
    "Beers": ['Sneak Attack Saison', 'Marooned On Hog Island', 'Fireside Chat', 'Monk\'s Blood', '21st Amendment IPA', 'Bitter American', 'Hop Crisis', 'Back In Black', 'Lower De Boom Barleywine', 'Allies Win The War!']
}, {
    "Brewery": 'Asheville Pizza and Brewing Co.',
    "Beers": ['Shiva IPA']
}, {
    "Brewery": 'The Duck-Rabbit Craft "Brewery"',
    "Beers": ['Duck-Rabbit Amber Ale', 'Duck-Rabbit Duck-Rabbator', 'Duck-Rabbit Rabid Duck', 'Duck-Rabbit M�_rzen', 'Duck-Rabbit Milk Stout', 'Duck-Rabbit Wee Heavy Scotch Style Ale', 'Duck-Rabbit Baltic Porter', 'Duck-Rabbit Schwarzbier', 'Duck-Rabbit Barleywine Ale', 'Duck-Rabbit Porter', 'Duck-Rabbit Brown Ale', 'Duck-Rabbit Hoppy Bunny American Black Ale']
}, {
    "Brewery": 'Muskoka "Brewery"',
    "Beers": ['Muskoka Dark Ale', 'Muskoka Summer Weiss', 'Muskoka Legendary Muskoka Oddity', 'Muskoka Winter Beard (Double Chocolate Cranberry Stout)', 'Muskoka Cream Ale', 'Muskoka Craft Lager', 'Muskoka Harvest Ale', 'Muskoka Mad Tom IPA', 'Muskoka Twice As Mad Tom IPA']
}, {
    "Brewery": 'Berliner Kindl Brauerei',
    "Beers": ['Berliner Kindl Weisse']
}, {
    "Brewery": 'Renaissance Brewing',
    "Beers": ['Stonecutter', 'Elemental', 'M.P.A']
}, {
    "Brewery": 'Eric\'s Ale',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Uehara Shuzou Co. Ltd. / Echigo Beer Pub',
    "Beers": ['Koshihikari Echigo Beer', 'Echigo Stout']
}, {
    "Brewery": 'Pivovar Vy�_kov',
    "Beers": ['Vyskovske Pivo']
}, {
    "Brewery": 'Grand Reserve',
    "Beers": ['La Roja', 'Bi��re De Mars', 'Luci��rnaga, The Firefly']
}, {
    "Brewery": 'Joseph James Brewing Inc.',
    "Beers": ['Hop Box', 'Red Fox', 'Tahoe Blue']
}, {
    "Brewery": 'Meckatzer L�_wenbr�_u Benedikt Weiss KG',
    "Beers": ['Meckatzer Weiss-Gold']
}, {
    "Brewery": 'Aldaris',
    "Beers": ['Porteris']
}, {
    "Brewery": 'MillKing It Productions',
    "Beers": ['AXL Pale Ale']
}, {
    "Brewery": 'Alameda Brewhouse',
    "Beers": ['Klickitat Pale Ale', 'Papa Noel\'s Olde Ale', 'El Torero Organic IPA', 'Yellow Wolf Imperial IPA', 'Black Bear XX Stout']
}, {
    "Brewery": 'Shmaltz Brewing Company',
    "Beers": ['He\'Brew Origin Pomegranate Ale', 'Coney Island Mermaid Pilsener', 'He\'Brew Messiah Bold', 'Coney Island Barrel-Aged Human Blockhead', 'He\'Brew Genesis Ale', 'He\'Brew Messiah Nut Brown Ale', 'He\'Brew Rejewvenator (Year Of The Fig) 2008', 'He\'Brew Bittersweet Lenny\'s R.I.P.A. On Rye', 'He\'Brew Hop Manna Test Batch #4', 'Coney Island Lager', 'Hop Manna', 'Coney Island Sword Swallower', 'He\'Brew Bittersweet Lenny\'s R.I.P.A.', 'He\'Brew Jewbelation Fifteen', 'Coney Island Albino Python', 'He\'Brew Genesis Dry-Hopped Session Ale', 'He\'Brew Miraculous Jewbelation (8)', 'Coney Island Human Blockhead', 'Reunion Ale \'12', 'He\'Brew Funky Jewbelation', 'He\'Brew Monumental Jewbelation (10)', 'He\'Brew Jewbelation Sweet 16 Anniversary Ale']
}, {
    "Brewery": 'Coopers "Brewery" Limited',
    "Beers": ['Coopers Sparkling Ale', 'Coopers Best Extra Stout', 'Coopers Dark Ale', 'Premium Lager', 'Coopers Extra Strong Vintage Ale']
}, {
    "Brewery": 'Brouwerij Roman N.V.',
    "Beers": ['Sloeber', 'Rince Cochon', 'Adriaen Brouwer Dark Gold Ale', 'Ename Tripel']
}, {
    "Brewery": 'Baltic Porter',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Daleside "Brewery"',
    "Beers": ['Morocco Ale', 'Old Leg Over', 'Monkey Wrench Strong Ale', 'Ripon Jewel Ale']
}, {
    "Brewery": 'Americaine Pale Ale',
    "Beers": ['Serie Signature']
}, {
    "Brewery": 'ESB',
    "Beers": ['La Vache Folle']
}, {
    "Brewery": 'General Lafayette Inn &amp; "Brewery"',
    "Beers": ['Chocolate Thunder Porter']
}, {
    "Brewery": 'Bend Brewing Company',
    "Beers": ['Hophead Imperial IPA']
}, {
    "Brewery": 'Below Decks (Barley Wine Style Ale)',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'True Style Barley Wine Ale',
    "Beers": ['Talon']
}, {
    "Brewery": 'Dansk Mj��d A/S',
    "Beers": ['Old Danish Braggot']
}, {
    "Brewery": 'Sociedade Central de Cervejas',
    "Beers": ['Bohemia']
}, {
    "Brewery": 'Robinsons Family Brewers',
    "Beers": ['Robinson\'s Old Tom Strong Ale']
}, {
    "Brewery": 'K�_nig-Brauerei GmbH',
    "Beers": ['K�_nig Pilsener']
}, {
    "Brewery": 'Vanberg &amp; DeWulf',
    "Beers": ['Lambrucha', 'Lambickx']
}, {
    "Brewery": 'Listermann Brewing Supply &amp; Mfg',
    "Beers": ['Listermann\'s Enter The Beagle India Pale Ale', 'Cincinnatus 2011']
}, {
    "Brewery": 'Brune',
    "Beers": ['Maredsous 8']
}, {
    "Brewery": 'Dunkel Weiss',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Reserve Series Aged In French Oak Chardonnay Barrels',
    "Beers": ['Melange A Trois']
}, {
    "Brewery": 'Narragansett Brewing Co.',
    "Beers": ['Narragansett Light', 'Narragansett Lager', 'Private Stock Imperial India Pale Ale', 'Narragansett Porter', 'Narragansett Fest', 'Narragansett Bock', 'Narragansett Summer Ale', 'Narragansett Cream Ale']
}, {
    "Brewery": 'Cervecer�_a de MateVeza',
    "Beers": ['Mateveza Yerba Mate IPA', 'MateVeza Organic Golden Ale']
}, {
    "Brewery": 'Hoppy Brewing Co.',
    "Beers": ['Stony Face Red Ale', 'Hoppy Claus Holiday Ale', 'Hoppy Face Amber Ale', 'Liquid Sunshine Blonde Ale', 'Total Eclipse Black Ale']
}, {
    "Brewery": 'Peach Porch Lounger',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Great River "Brewery"',
    "Beers": ['Organic Farmer Brown Ale', 'Roller Dam Red Ale', '483 Pale Ale', 'Big Cock IPA', 'Hop*A*Potamus', 'Redband Stout']
}, {
    "Brewery": 'Classic Lager',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Cedar Aged (Humidor Series)',
    "Beers": ['Marshal Zhukov\'s Imperial Stout']
}, {
    "Brewery": 'BottleTree Beer Co.',
    "Beers": ['BottleTree Belgian Blonde']
}, {
    "Brewery": 'Triple',
    "Beers": ['Maredsous 10']
}, {
    "Brewery": 'Printemps',
    "Beers": ['Fant��me Saison D\'Erez��e']
}, {
    "Brewery": 'John Smith\'s Limited',
    "Beers": ['John Smith\'s Extra Smooth']
}, {
    "Brewery": 'Brasserie de Jandrain-Jandrenouille',
    "Beers": ['V Cense', 'IV']
}, {
    "Brewery": 'Laverstoke Park Farm',
    "Beers": ['Organic Real Ale', 'Organic Real Lager']
}, {
    "Brewery": 'Uncommon Brewers',
    "Beers": ['Siamese Twin Ale', 'Baltic Porter', 'Golden State Ale']
}, {
    "Brewery": 'Trumer Brauerei Berkeley',
    "Beers": ['Trumer Pils']
}, {
    "Brewery": 'Indigo Imp "Brewery"',
    "Beers": ['Gatekeeper', 'Blonde Bombshell']
}, {
    "Brewery": 'Beamish &amp; Crawford Plc.',
    "Beers": ['Beamish Irish Stout']
}, {
    "Brewery": 'Dave\'s BrewFarm',
    "Beers": ['Matacabras', 'BrewFarm Select']
}, {
    "Brewery": 'McShagger\'s Double Ewe',
    "Beers": ['The People\'s Pint Scotch Ale']
}, {
    "Brewery": 'Crow Peak Brewing',
    "Beers": ['11th Hour IPA', 'Pile O\' Dirt Porter']
}, {
    "Brewery": 'Utenos Alus',
    "Beers": ['Porter']
}, {
    "Brewery": 'Issaquah Brewhouse',
    "Beers": ['M��nage �� Frog']
}, {
    "Brewery": 'Virgin Islands Brewing Co.',
    "Beers": ['Blackbeard Ale']
}, {
    "Brewery": 'Kr��lovsk�_ Pivovar Kru��ovice a.s.',
    "Beers": ['Kru��ovice Cerne', 'Kru��ovice Imperial']
}, {
    "Brewery": 'Wolnzacher B�_rgerbra�_ AG',
    "Beers": ['Wolnzacher Roggenbier', 'Wolnzacher Hell Naturtr�_b']
}, {
    "Brewery": 'Strawberry Short Weisse',
    "Beers": ['Smuttynose Short Batch #7']
}, {
    "Brewery": 'Cocoa Mol��',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Hop Toddy',
    "Beers": ['Schlafly #20, Volume 2']
}, {
    "Brewery": 'Small Craft Warning (��ber Pils)',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": '2012 (Special HOPS)',
    "Beers": ['Scratch Beer 76']
}, {
    "Brewery": 'Ruckus Brewing',
    "Beers": ['Old Reading Beer', 'Euphoria', 'Hoptimus Prime']
}, {
    "Brewery": 'Blond Ale',
    "Beers": ['Railway City Iron Spike']
}, {
    "Brewery": 'Blatant Beer',
    "Beers": ['Blatant Session Ale', 'Blatant IPA']
}, {
    "Brewery": 'Box Steam "Brewery"',
    "Beers": ['Funnel Blower', 'Dark &amp; Handsome']
}, {
    "Brewery": 'Anchorage Brewing Company',
    "Beers": ['Love Buzz Saison', 'The Tide And Its Takers', 'Whiteout Wit', 'Bitter Monk', 'Galaxy White IPA']
}, {
    "Brewery": 'South African Breweries plc',
    "Beers": ['Castle Milk Stout']
}, {
    "Brewery": '�_�_ateck�_ Pivovar',
    "Beers": ['�_�_atec Dark Lager', '�_�_�_atec']
}, {
    "Brewery": 'St. Georgenbr�_u',
    "Beers": ['St. Georgenbr�_u  Keller Bier']
}, {
    "Brewery": 'Russian Imperial Porter',
    "Beers": ['RIP']
}, {
    "Brewery": '(Eighty Shilling)',
    "Beers": ['80/- (Eighty Shilling)']
}, {
    "Brewery": 'Creemore Springs "Brewery" Limited',
    "Beers": ['Creemore Springs Kellerbier', 'Creemore Springs UrBock', 'Creemore Springs Premium Lager', 'Creemore Springs Traditional Pilsner', 'Creemore Springs Collaboration Altbier']
}, {
    "Brewery": 'Triticus',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Gamla Slottsk�_llans Bryggeri AB',
    "Beers": ['Imperial Stout']
}, {
    "Brewery": 'Oy Sinebrychoff Ab',
    "Beers": ['Sinebrychoff Porter']
}, {
    "Brewery": 'Davy Jones Lager (Imperial Cream Ale)',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Pale Horse Brewing Company',
    "Beers": ['Hopyard Dog']
}, {
    "Brewery": 'Siren Noire Imperial Chocolate Stout',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Russian Imperial Stout Aged In Oak Bourbon Barrels',
    "Beers": ['Czar Brew']
}, {
    "Brewery": 'Gueuze',
    "Beers": ['Cantillon Lou Pepe']
}, {
    "Brewery": 'Brandy Barrel Aged',
    "Beers": ['Marshal Zhukov\'s Imperial Stout']
}, {
    "Brewery": 'Special Kay',
    "Beers": ['Black Damnation XI']
}, {
    "Brewery": 'Bryggeriet Dj�_vlebryg ApS',
    "Beers": ['Old Mephisto', 'Gudel��s']
}, {
    "Brewery": 'Castle Eden &amp; Camerons Brewing Company Ltd',
    "Beers": ['Camerons Strongarm', 'Longleg']
}, {
    "Brewery": 'Brasserie Des Cimes',
    "Beers": ['Yeti']
}, {
    "Brewery": 'Amager Bryghus',
    "Beers": ['Sundby Stout', 'Rugporter', 'Hr. Frederiksen']
}, {
    "Brewery": 'Metropolitan Brewing',
    "Beers": ['Iron Works Alt', 'Dynamo Copper Lager', 'Krankshaft K�_lsch', 'Flywheel Bright Lager']
}, {
    "Brewery": 'Wild Heaven Craft "Beers"',
    "Beers": ['Eschaton', 'Ode To Mercy', 'Invocation']
}, {
    "Brewery": 'Gordash Brewing Company',
    "Beers": ['Holy Mackerel Mack In Black', 'Panic Attack', 'Holy Mackerel Special Golden Ale']
}, {
    "Brewery": 'Double Cream Ale',
    "Beers": ['Batch #69']
}, {
    "Brewery": 'Tin Roof Brewing Company',
    "Beers": ['Perfect Tin Amber']
}, {
    "Brewery": 'Peg Leg Imperial Stout',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Midtfyns Bryghus',
    "Beers": ['Midtfyns Imperial Stout']
}, {
    "Brewery": 'Gold Ale',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Arcense Stoombierbouwerij (Hertog Jan Brouwerij)',
    "Beers": ['Hertog Jan Grand Prestige']
}, {
    "Brewery": 'Privat Brauerei Z�_tler',
    "Beers": ['Z�_tler Korbinian Dunkel']
}, {
    "Brewery": 'Brouwerij De Ryck',
    "Beers": ['Arend Tripel']
}, {
    "Brewery": 'Imperial Rye',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Stone &amp; Wood',
    "Beers": ['Pacific Ale']
}, {
    "Brewery": 'Grand Cru Abbey Ale',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Harlem Brewing Company',
    "Beers": ['Sugar Hill Golden Ale']
}, {
    "Brewery": 'Ceylon / Lion "Brewery" Limited',
    "Beers": ['Lion Stout']
}, {
    "Brewery": 'District ChopHouse &amp; "Brewery"',
    "Beers": ['Bourbon Stout']
}, {
    "Brewery": 'ReaperAle',
    "Beers": ['Redemption Red Ale', 'Deathly Pale Ale', 'Inevitable Ale', 'Mortality Stout', 'Ritual Dark Ale', 'Sleighor Double IPA']
}, {
    "Brewery": 'Robert Cain &amp; Company Limited',
    "Beers": ['Cain\'s Best Bitter', 'Cains Dark Mild']
}, {
    "Brewery": 'Lucky Bucket Brewing Co.',
    "Beers": ['Certified Evil', 'Pre-Prohibition Style Lager', 'IPA']
}, {
    "Brewery": 'Brouwerij Westvleteren (Sint-Sixtusabdij van Westvleteren)',
    "Beers": ['Trappist Westvleteren 12 (XII)', 'Trappist Westvleteren 8 (VIII)', 'Trappist Westvleteren Blonde']
}, {
    "Brewery": 'Privatbrauerei Gaffel Becker &amp; Co.',
    "Beers": ['Gaffel K�_lsch']
}, {
    "Brewery": 'Brasseries Kronenbourg',
    "Beers": ['Kronenbourg Blanc']
}, {
    "Brewery": 'Smoke On The Water',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'KleinBrouwerij De Glazen Toren',
    "Beers": ['Canaster Winterscotch Ale', 'Saison D\'Erpe-Mere', 'Jan De Lichte', 'Cuvee Angelique', 'Ondineke Oilsjtersen Tripel']
}, {
    "Brewery": 'Black Toad Brewing Co.',
    "Beers": ['Black Toad Dark Ale']
}, {
    "Brewery": 'Nethergate "Brewery" Co. Ltd.',
    "Beers": ['Old Growler', 'Augustinian Ale']
}, {
    "Brewery": 'Rust Belt Brewing Company',
    "Beers": ['Old Man Hopper\'s India Pale Ale', 'Coke Oven Stout']
}, {
    "Brewery": 'Prickly Passion Saison',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Belgian-Style Imperial Stout',
    "Beers": ['Sloth']
}, {
    "Brewery": 'Strangford Lough Brewing Company Ltd',
    "Beers": ['Legbiter', 'St. Patrick\'s Best']
}, {
    "Brewery": 'Imperial Coffee Chocolate Stout',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Vanilla',
    "Beers": ['Maduro Oatmeal Brown Ale']
}, {
    "Brewery": 'Vunderbar',
    "Beers": ['Smuttynose Short Batch #11']
}, {
    "Brewery": 'Yeoman',
    "Beers": ['La Vache Folle Double IPA']
}, {
    "Brewery": 'Laughing Dog Brewing',
    "Beers": ['Anubis Imperial Coffee Porter', 'Cold Nose Winter Ale', 'Sneaky Pete Imperial IPA', 'Laughing Dog Huckleberry Cream Ale', 'Laughing Dog India Pale Ale', 'Laughing Dog Rocket Dog Rye IPA', 'Laughing Dog Cream Ale', 'Laughing Dog CSB', 'Alpha Dog Imperial IPA', 'The Dogfather', 'Devil Dog Imperial IPA', 'Laughing Dog Pale Ale', 'DogZilla Black IPA', 'The Dogfather (Bourbon Barrel Aged)']
}, {
    "Brewery": 'Vanilla Bean Rum Barrel',
    "Beers": ['Dark Apparition']
}, {
    "Brewery": 'Roosterfish Brewing Co.',
    "Beers": ['Hop Warrior Imperial IPA']
}, {
    "Brewery": ')',
    "Beers": ['Equinox / Zwarte Piet (2012- )']
}, {
    "Brewery": 'Barleywine Style Ale',
    "Beers": ['Harpoon Leviathan', 'Schlafly Reserve']
}, {
    "Brewery": 'La Cumbre Brewing Co.',
    "Beers": ['Elevated IPA']
}, {
    "Brewery": 'Brauerei Schl�_sser GmbH',
    "Beers": ['Schl�_sser Alt']
}, {
    "Brewery": 'Oktoberfest Lager',
    "Beers": ['Special Edition']
}, {
    "Brewery": 'Nectar Ales',
    "Beers": ['Red Nectar', 'Humboldt Brown (Hemp Ale)', 'Black Xantus', 'IPA Nectar']
}, {
    "Brewery": 'Caf��-Brouwerij Loterbol',
    "Beers": ['Loterbol Blond', 'Loterbol Bruin']
}, {
    "Brewery": 'Duquesne Bottling Company',
    "Beers": ['Duquesne Pilsener Beer']
}, {
    "Brewery": 'Keegan Ales',
    "Beers": ['Joe Mama\'s Milk Stout', 'Mothers Milk Stout', 'Old Capital', 'Super Kitty', 'Hurricane Kitty']
}, {
    "Brewery": 'USA)',
    "Beers": ['La Binchoise Sp��ciale No��l (Reserve Special']
}, {
    "Brewery": 'Stanley Stawski Distributing',
    "Beers": ['Stawski Premium Lager']
}, {
    "Brewery": 'Perla Browary Lubelskie S.A.',
    "Beers": ['Perla Chmielowa (Hop Pearl)']
}, {
    "Brewery": 'Freeminer "Brewery" Ltd.',
    "Beers": ['Trafalgar India Pale Ale']
}, {
    "Brewery": 'Hook Norton "Brewery" Co. Ltd.',
    "Beers": ['Double Stout', 'Twelve Days', 'Hooky  Bitter', 'Old Hooky', 'Haymaker', 'Hooky Gold']
}, {
    "Brewery": 'Baltimore Washington Beer Works',
    "Beers": ['The Raven Special Lager']
}, {
    "Brewery": 'The Shed "Brewery"',
    "Beers": ['Shed IPA', 'Mountain Ale']
}, {
    "Brewery": 'Barleywine',
    "Beers": ['Single Batch Series']
}, {
    "Brewery": '��t��',
    "Beers": ['Fant��me Saison D\'Erez��e']
}, {
    "Brewery": 'Elijah Craig (12 Year)',
    "Beers": ['Imperial Eclipse Stout']
}, {
    "Brewery": 'Bourbon Barrel Aged (Brewmaster Reserve 2012)',
    "Beers": ['Top Sail Imperial Porter']
}, {
    "Brewery": 'Alltech���s Lexington Brewing and Distilling Co.',
    "Beers": ['Kentucky Bourbon Barrel Stout', 'Kentucky Bourbon Barrel Ale', 'Kentucky Light', 'Kentucky Ale']
}, {
    "Brewery": 'The Tap Brewing Company',
    "Beers": ['Snowbound English Old Ale', 'Joshua Norton Imperial Stout', 'Leather Lips IPA']
}, {
    "Brewery": 'Blonde',
    "Beers": ['Maredsous 6']
}, {
    "Brewery": 'Jamieson "Brewery"',
    "Beers": ['Jamieson Beast IPA']
}, {
    "Brewery": 'Brouwerij Louwaege',
    "Beers": ['Hapkin']
}, {
    "Brewery": 'Scottish Style Ale',
    "Beers": ['Old Chub']
}, {
    "Brewery": 'Brau Union �_sterreich AG',
    "Beers": ['G�_sser Dark']
}, {
    "Brewery": 'Porter',
    "Beers": ['Walker\'s Reserve']
}, {
    "Brewery": 'Brauerei Zehendner GmbH',
    "Beers": ['M�_nchsambacher Lager']
}, {
    "Brewery": 'H�_vels Hausbrauerei',
    "Beers": ['H�_vels Original']
}, {
    "Brewery": 'Heavy Seas Beer',
    "Beers": ['Land Ho! Black Pilsner Style Lager (Devil\'s Backbone Collaboration)', 'Plank II', 'Dubbel Cannon', 'Heavy Seas Cabernet Barrel Aged Below Decks', 'Heavy Seas Bourbon Barrel Aged Below Decks', 'Heavy Seas Black Cannon']
}, {
    "Brewery": 'Red Rock Brewing Company',
    "Beers": ['Red Rock R��ve', 'Red Rock Elephino']
}, {
    "Brewery": '��lfabrikken',
    "Beers": ['��lfabrikken Jule Ale']
}, {
    "Brewery": 'Brewer\'s Reserve',
    "Beers": ['St. Nikolaus Bock Bier']
}, {
    "Brewery": 'Alamo Beer Co.',
    "Beers": ['Alamo Golden Ale']
}, {
    "Brewery": 'Guinness Nigeria PLC',
    "Beers": ['Guinness Foreign Extra Stout (Africa)']
}, {
    "Brewery": 'Old Chimneys "Brewery"',
    "Beers": ['Old Chimneys Good King Henry Special Reserve']
}, {
    "Brewery": 'Imperial IPA',
    "Beers": ['Special Edition', 'Harpoon Leviathan']
}, {
    "Brewery": 'Belgium)',
    "Beers": ['Guinness Special Export Stout (John Martin']
}, {
    "Brewery": 'Tuppers\' Hop Pocket Brewing Company',
    "Beers": ['Tuppers\' Hop Pocket Pils (Keller Pils)', 'Tuppers\' Hop Pocket Ale']
}, {
    "Brewery": 'Great Scott',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Winter Storm ("Category 5" Ale)',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'RCH "Brewery"',
    "Beers": ['Ale Mary', 'Old Slug Porter', 'Pitchfork Rebellious Bitter']
}, {
    "Brewery": 'Pumpernickel Porter',
    "Beers": ['M��rke']
}, {
    "Brewery": 'Wood Aged Stout',
    "Beers": ['Pike Entire']
}, {
    "Brewery": 'Oregon Trail "Brewery"',
    "Beers": ['Bourbon Barrel Porter']
}, {
    "Brewery": 'Brandy Barrel-Aged',
    "Beers": ['The Angel\'s Share']
}, {
    "Brewery": 'Four Roses Bourbon',
    "Beers": ['Imperial Eclipse Stout']
}, {
    "Brewery": 'Kensington Brewing Company',
    "Beers": ['Augusta Ale']
}, {
    "Brewery": 'Biere De Garde',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Imperial Porter',
    "Beers": ['Bonfire']
}, {
    "Brewery": 'Plank I',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'American Hop3 Ale',
    "Beers": ['Heavy Seas Loose Cannon']
}, {
    "Brewery": 'Cropton "Brewery"',
    "Beers": ['Monkman\'s Slaughter Ale']
}, {
    "Brewery": 'Enterprise "Brewery" (Knappstein Wines)',
    "Beers": ['Knappstein Reserve Lager']
}, {
    "Brewery": 'Birra Peroni Industriale S.p.A.',
    "Beers": ['Gran Riserva']
}, {
    "Brewery": 'Brasserie Bailleux',
    "Beers": ['Cuv��e Des Jonquilles']
}, {
    "Brewery": 'Beer Camp #36',
    "Beers": ['Hopsichord']
}, {
    "Brewery": 'Sea Nymph Summer Ale',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Belgian Farmhouse Ale',
    "Beers": ['Saison Imperiale']
}, {
    "Brewery": 'Strong Pale Ale',
    "Beers": ['Landlord']
}, {
    "Brewery": 'Spilker Ales',
    "Beers": ['Hopluia']
}, {
    "Brewery": 'Espresso Black Bier',
    "Beers": ['BREWtality']
}, {
    "Brewery": 'Super India Pale Ale (Alpine Collaboration)',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'Wernesgr�_ner Brauerei AG',
    "Beers": ['Wernesgruner']
}, {
    "Brewery": 'Chardonnay Barrel Aged',
    "Beers": ['Stateside Saison']
}, {
    "Brewery": 'Railway City Brewing Company',
    "Beers": ['Railway City Dead Elephant Ale']
}, {
    "Brewery": 'Beer Camp #43 (Best Of Beer Camp: Imperial Pilsner)',
    "Beers": ['Sticke Pilsner']
}, {
    "Brewery": 'Dust Bowl Brewing Company',
    "Beers": ['Hops Of Wrath']
}, {
    "Brewery": 'Laird\'s Apple Brandy Barrel',
    "Beers": ['Hunahpu\'s Imperial Stout']
}, {
    "Brewery": 'Bourbon Barrel Aged Siren Noire Imperial Chocolate Stout',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Uber-Bock',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Aarsh Imperial Red Ale',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Deep Ellum Brewing Company',
    "Beers": ['Deep Ellum IPA']
}, {
    "Brewery": 'Bock Beer',
    "Beers": ['Special Edition']
}, {
    "Brewery": 'Imperial Stout',
    "Beers": ['Schlafly Reserve']
}, {
    "Brewery": 'Odd Side Ales',
    "Beers": ['CPA: Citra Pale Ale']
}, {
    "Brewery": 'Round Barn "Brewery"',
    "Beers": ['Oaked IPA', 'Cocoa Stout']
}, {
    "Brewery": 'Beer Camp #65 (Best Of Beer Camp: Imperial Red Ale)',
    "Beers": ['Red-oric']
}, {
    "Brewery": 'Brauerei Fr�_h Am Dom',
    "Beers": ['Fr�_h Kolsch']
}, {
    "Brewery": 'Double Dry Hopped',
    "Beers": ['Sublimely Self-Righteous Ale', 'Ruination IPA']
}, {
    "Brewery": 'Papaya',
    "Beers": ['Jai Alai IPA']
}, {
    "Brewery": 'Double Black',
    "Beers": ['Black Damnation V']
}, {
    "Brewery": 'GoodLife Brewing Company &amp; Bier Hall',
    "Beers": ['Descender IPA']
}, {
    "Brewery": '2012 (Fresh Hop Ale)',
    "Beers": ['Scratch Beer 78']
}, {
    "Brewery": 'SMOKED Barleywine',
    "Beers": ['Old Guardian OAK']
}, {
    "Brewery": 'Brouwerij Van Viven',
    "Beers": ['Viven Imperial IPA']
}, {
    "Brewery": 'Hoppy Bock Lager',
    "Beers": ['Hop Kitchen']
}, {
    "Brewery": 'Big DIPA',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Salopian Brewing Company Ltd',
    "Beers": ['Entire Butt English Porter']
}, {
    "Brewery": 'Czernobog',
    "Beers": ['Harpoon Leviathan']
}, {
    "Brewery": 'Limone Luppolo',
    "Beers": ['Birra DeCicco']
}, {
    "Brewery": 'Nineteen',
    "Beers": ['Avery Anniversary Ale']
}, {
    "Brewery": 'Table Beer',
    "Beers": ['Beer Table']
}, {
    "Brewery": 'East Kent Goldings',
    "Beers": ['Samuel Adams Latitude 48 Deconstructed IPA']
}, {
    "Brewery": 'Red IPA',
    "Beers": ['Green Flash Hop Head Red']
}, {
    "Brewery": 'Ahtanum',
    "Beers": ['Samuel Adams Latitude 48 Deconstructed IPA']
}, {
    "Brewery": 'Bayhawk Ales',
    "Beers": ['California Pale Ale']
}, {
    "Brewery": 'Museum Brewing Company / White Shield "Brewery"',
    "Beers": ['Worthington\'s White Shield']
}, {
    "Brewery": 'Cobra Beer Partnership Limited',
    "Beers": ['Krait Prestige']
}, {
    "Brewery": 'Bourbon Barrel Aged Porter',
    "Beers": ['Reserve Ale']
}, {
    "Brewery": 'Calvados Edition',
    "Beers": ['Beer Geek Brunch Weasel']
}, {
    "Brewery": 'Gebr. S�_nner GmbH &amp; Co. KG',
    "Beers": ['S�_nner K�_lsch']
}, {
    "Brewery": 'Dayman Coffee IPA',
    "Beers": ['Aleman / Two Brothers / Stone']
}, {
    "Brewery": 'Stingo',
    "Beers": ['Collaboration No. 3']
}, {
    "Brewery": 'Indeed Brewing Company',
    "Beers": ['Midnight Ryder', 'Day Tripper']
}, {
    "Brewery": '2012 (Fest Lager)',
    "Beers": ['Scratch Beer 73']
}, {
    "Brewery": 'Yeastie Boys',
    "Beers": ['Pot Kettle Black', 'Digital IPA']
}, {
    "Brewery": 'West Sixth Brewing Company',
    "Beers": ['West Sixth IPA']
}, {
    "Brewery": 'Kopi Luwak',
    "Beers": ['AleSmith Speedway Stout']
}, {
    "Brewery": 'Great Northern Brewing Co. / Black Star Draught House',
    "Beers": ['Black Star Double Hopped Golden Lager']
}, {
    "Brewery": 'Otter "Brewery" Ltd',
    "Beers": ['Otter Head', 'Hoppy Otter IPA']
}, {
    "Brewery": 'Prosit!',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Milk Stout',
    "Beers": ['La Vache Folle']
}, {
    "Brewery": 'Whiskey Barrel-Aged',
    "Beers": ['Sierra Nevada Bigfoot Barleywine Style Ale']
}, {
    "Brewery": 'Lightly Oaked Beer',
    "Beers": ['Innis &amp; Gunn Blonde']
}, {
    "Brewery": 'Grapefruit Wood Aged',
    "Beers": ['Dos Costas Oeste']
}, {
    "Brewery": 'Old Monk\'s Ale',
    "Beers": ['Pannep��t']
}, {
    "Brewery": 'Tap It Brewing Co.',
    "Beers": ['Tap It IPA']
}, {
    "Brewery": 'Fresh Hop India Pale Ale',
    "Beers": ['Lips Of Faith']
}, {
    "Brewery": 'The Great\'er Pumpkin',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Earthmonk',
    "Beers": ['Aardmonnik']
}, {
    "Brewery": 'Carlsberg Sverige AB',
    "Beers": ['Carnegie Porter 5,5%']
}, {
    "Brewery": 'Saison Ale',
    "Beers": ['Brother Levonian']
}, {
    "Brewery": 'Pale Ale',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Kysela Pere Et Fils, Ltd.',
    "Beers": ['Sneaky Pete Imperial IPA']
}, {
    "Brewery": 'Columbus',
    "Beers": ['La Vache Folle Double IPA']
}, {
    "Brewery": 'Twin Lakes Brewing Co.',
    "Beers": ['Greenville Pale Ale']
}, {
    "Brewery": 'More Brown Than Black IPA',
    "Beers": ['The Alchemist / Ninkasi / Stone']
}, {
    "Brewery": 'Anniversary Ale',
    "Beers": ['Firestone 16']
}, {
    "Brewery": 'Rocky Mountain Black Ale)',
    "Beers": ['Fade To Black (Volume 4']
}, {
    "Brewery": 'Brauerei Heinrich Reissdorf',
    "Beers": ['Reissdorf K�_lsch']
}, {
    "Brewery": 'El Triunfo Coffee Porter',
    "Beers": ['Harpoon 100 Barrel Series #44']
}, {
    "Brewery": '2012 (��Impending Descent?)',
    "Beers": ['Scratch Beer 83']
}, {
    "Brewery": 'Hop Harvest Ale',
    "Beers": ['Heavy Seas']
}, {
    "Brewery": 'Double Trouble Brewing Co.',
    "Beers": ['Hops &amp; Robbers']
}, {
    "Brewery": 'Spearhead Brewing Company',
    "Beers": ['Hawaiian Style Pale Ale']
}, {
    "Brewery": 'White Oak',
    "Beers": ['Jai Alai IPA']
}, {
    "Brewery": 'Belgian-Style Double IPA',
    "Beers": ['Mayhem']
}, {
    "Brewery": 'Bourbon Barrel Aged (Brewmaster Reserve)',
    "Beers": ['Black Gold Imperial Stout']
}, {
    "Brewery": 'Beer Camp #6',
    "Beers": ['Empire Strikes Black Imperial Stout']
}, {
    "Brewery": 'Russian Imperial Stout',
    "Beers": ['Disputin']
}, {
    "Brewery": 'The Alchemist',
    "Beers": ['Heady Topper']
}, {
    "Brewery": 'Double IPL',
    "Beers": ['Kiwi Rising']
}]