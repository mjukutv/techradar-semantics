//This is the title for your window tab, and your Radar
var radar_title = document.title;

//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                  ,{'r':500,'name':'Out Of Scope'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1200;
var w = 1000;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
			{"name":"Concept: Linked Data (LD)", "pc":{"r":210,"t":110},"movement":"c"},

			{"name":/*"Concept: Web Ontology Language (OWL)"*/ "Concept: OWL", "pc":{"r":445,"t":102},"movement":"c"},
			{"name":/*"Concept: Vocabulary of Interlinked Datasets (VoID)"*/ "Concept: VoID", "pc":{"r":445,"t":110},"movement":"c"},
			{"name":/*"Concept: RDF Database (Big Data/Region, Semantic Data Lake)"*/ "Concept: RDF DB", "pc":{"r":465,"t":106},"movement":"c"},
			
			{"name":"LD Query: Tripple Pattern Fragments", "pc":{"r":220,"t":130},"movement":"c"},
			{"name":"LD Query: Data Dump", "pc":{"r":355,"t":125},"movement":"c"},
			{"name":"LD Query: Subject Page", "pc":{"r":355,"t":130},"movement":"c"},
			{"name":"LD Query: SPARQL", "pc":{"r":335,"t":127},"movement":"c"},
			

			{"name":"LD Struct: Hydra", "pc":{"r":240,"t":150},"movement":"c"},
			{"name":"LD Struct: RDF", "pc":{"r":310,"t":150},"movement":"c"},
			
			
		]
    },
	{ "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
		"items" : [ 
			{"name":"lodlive.it", "pc":{"r":280,"t":85},"movement":"c"},
			{"name":"SPARQLGraph", "pc":{"r":280,"t":80},"movement":"c"},
			{"name":"CKAN", "pc":{"r":280,"t":75},"movement":"c"},
			{"name":"LODStats", "pc":{"r":280,"t":70},"movement":"c"},
			{"name":"Linda Project", "pc":{"r":280,"t":65},"movement":"c"},
			{"name":"Swirrl", "pc":{"r":280,"t":60},"movement":"c"},
			{"name":"SADI framework", "pc":{"r":320,"t":85},"movement":"c"},

			{"name":"RDF DB: Neo4j", "pc":{"r":420,"t":6},"movement":"c"},
			{"name":"RDF DB: Virtuoso", "pc":{"r":420,"t":9},"movement":"c"},
			{"name":"RDF DB: MarkLogic", "pc":{"r":420,"t":12},"movement":"c"},
			{"name":"RDF DB: InfiniteGraph", "pc":{"r":440,"t":8},"movement":"c"},
			{"name":"RDF DB: Ontotext", "pc":{"r":440,"t":11},"movement":"c"},
			{"name":"RDF DB: AllegroGraph", "pc":{"r":460,"t":6},"movement":"c"},
			{"name":"RDF DB: Stardog", "pc":{"r":460,"t":9},"movement":"c"},
			{"name":"RDF DB: Titan", "pc":{"r":460,"t":12},"movement":"c"},

			/*
			{"name":"http://vivoweb.org/", "pc":{"r":295,"t":145},"movement":"c"},
			{"name":"http://ontologydesignpatterns.org/", "pc":{"r":245,"t":155},"movement":"c"},
			{"name":"http://nomisma.org/", "pc":{"r":420,"t":85},"movement":"c"},
			*/
		]
	},
	{ "quadrant": "Platforms ",
        "left" :45,
        "top" : (h/2 + 18),
        "color" : "#DC6F1D",
		"items" : [
			{"name":"LOD Laundromat", "pc":{"r":220,"t":190},"movement":"c"},
			{"name":"Linked Data Fragments", "pc":{"r":220,"t":200},"movement":"c"},
			
			{"name":"Schema.org", "pc":{"r":280,"t":190},"movement":"c"},
			{"name":"Web Data Commons", "pc":{"r":280,"t":195},"movement":"c"},
			{"name":"Datahub", "pc":{"r":280,"t":200},"movement":"c"},
			{"name":"Linked Open Vocabularies", "pc":{"r":280,"t":205},"movement":"c"},
			{"name":"UMBEL", "pc":{"r":280,"t":185},"movement":"c"},

			{"name":"Open Semantic Framework", "pc":{"r":320,"t":185},"movement":"c"},
		]
	},
	{ "quadrant": "Formats",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
		"items" : [ 
			{"name":"JSON-LD", "pc":{"r":220,"t":310},"movement":"c"},

			{"name":"Microformats", "pc":{"r":310,"t":305},"movement":"c"},
			{"name":"HDT", "pc":{"r":310,"t":315},"movement":"c"},
			{"name":/*"Xml-like (RDFa, RDF/XML)"*/"Xml-like", "pc":{"r":345,"t":300},"movement":"c"},
			{"name":/*"Turtle-like (Turtle, TriG, N-Triples, N-Quads)"*/ "Turtle-like", "pc":{"r":365,"t":310},"movement":"c"},
			{"name":"Notation3", "pc":{"r":350,"t":320},"movement":"c"},
		]
	}
];