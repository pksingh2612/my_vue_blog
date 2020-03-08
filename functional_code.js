// Functional Programming 

//Not functional:
  var name ="Anjana";
  var greeting = "Hi, I'm";
  console.log(greeting+name);

// that is functional 
function greet(name){
    return "Hi, I'm"+name;
}

greet("Anjana")

//Not pure:

var name="Anjana"

function greet(){
    console.log("Hi, I'm "+ name);
}

// this is pure
function greet(name){
    return "Hi, I'm "+ name;
}

//Use higher-order functions
// functions can be inputs/outputs

function makeAdjectifier(adjective){
    return function(string){
        return adjective+" "+ string;
    };
}

var coolifier = makeAdjectifier("cool");
coolifier("conference")

//Don't iterate
//use map, reduce, filter

//Avoid mutablility
// use immutable data

//Mutation (bad!):
 var rooms = ["H1","H2","H3"];
 rooms[2]="H4";
 rooms;
// output => ["H1","H2","H4"]

//No mutation(good!):
var rooms = ["H1","H2","H3"];
var newRooms = rooms.map(function(rm){
    if(rm=="H3"){
        return "H4";
    }
    else{
        return rm;
    }
});

// newRooms; => ["H1","H2","H4"]
// rooms; => ["H1","H2","H3"]

// https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming
// http://swannodette.github.io/mori/
// http://underscorejs.org/
// https://lodash.com/
// https://ramdajs.com/