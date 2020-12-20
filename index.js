function plus(n1,n2){
    result= n1+n2;
    document.getElementById("add").innerHTML=result;
    {
        console.log(result);
    }
}

function minus(n1,n2){
    result= n1-n2;
    document.getElementById("minus").innerHTML=result;
    {
        console.log(result);
    }
}

function multiply(n1,n2){
    result= n1*n2;
    document.getElementById("multiply").innerHTML=result;
    {
        console.log(result);
    }
}

function division(n1,n2){
    result= n1/n2;
    document.getElementById("division").innerHTML= result;
    {
        console.log(result);
    }
}

function substract(p1,p2){
     if(p1 !== p2){
        result = p2-p1;
        document.getElementById("sub").innerHTML=result;
    }else{
        result = p1-p2;
        document.getElementById("sub").innerHTML=result;
    }
}


function Hum(p){
    document.getElementById("Desh").innerHTML=p;
    console.log(p);
}

function greeting(p){
    document.getElementById("greet").innerHTML=p;
    console.log(p);
}

function Hello(p){
    document.getElementById("hello").innerHTML=p;
    console.log(p);
}

function subst(n1,n2){
    if(n1 !== n2){
        result=n2-n1;
        document.getElementById("cut").innerHTML=result;
    }else{
        result= n1-n2;
        document.getElementById("cut").innerHTML=result;
    }
    console.log(result);
}

function multi(n1,n2){
    if( n2 == 0){
        result = 0;
        document.getElementById("multi").innerHTML=result;
    }else{
        result=n1*n2;
        document.getElementById("multi").innerHTML=result;
    }
    console.log(result);
}


function big(p1,p2){
    if(p2 === 0){
        result= "Invalidnumber";
        document.getElementById("game").innerHTML=result;
    }else{
        result = p1/p2;
        document.getElementById("game").innerHTML=result;
    }
    console.log(result);
}


function mygirl(p){
    document.getElementById("learn").innerHTML=p;
    console.log(p);
}

function greeting1(p1,p2){
    document.getElementById("greeting1").innerHTML="hello"+p1+p2;
    console.log("Hello " + p1 + " " + p2)
}

function say(p1,p2){
    document.getElementById("earth").innerHTML="my "+p1+" "+p2;
    console.log("my "+ p1 + " " +p2);
}

function hii(p1,p2){
    document.getElementById("hii").innerHTML= "my "+p1+" "+p2;
    console.log("my "+p1+" "+p2);
    alert("my "+p1+" "+p2);
}

function cal(n1,n2){
    if(n2 === 0){
        result = 0;
        document.getElementById("cali").innerHTML = result;
    }else{
        result = n1*n2;
        document.getElementById("cali").innerHTML = result;
    }
    console.log(result);
}

function square(a,b){
    result = a*a+2*a*b+b*b;
    document.getElementById("squa").innerHTML = result;
    console.log(result);
}

 function factorial(num){
     var fact = 1;
     for(i = 1; i<=num; i++){
         fact *=i;
         result= fact;
         document.getElementById("fact").innerHTML=result
     }
     console.log(result);
 }

function factorial1(numb){
    var fact1 = 1;
    for(i = 1;i<=numb; i++){
        fact1 *= i;
        result = fact1;
        document.getElementById("fact1").innerHTML = result
    }
    console.log(result);
}

function world(fname,lname){
    document.getElementById("you").innerHTML = "I " + fname + " " +lname;
    console.log("I "+fname+" "+lname);
    alert("I "+fname+" "+lname);

}

function zindagi(p1){
    var fact = 1
    for( a = 1; a<=4; a++){
        fact *=a;
        document.getElementById("z").innerHTML= p1;
        console.log(p1);
}
  
}

for(var a = 1; a<=3;a++){
    console.log("zindagi");
}

function factorial2(numb){
    var fact2 = 1;
    for(i = 1;i<=numb; i++){
        fact2 *= i;
        result = fact2;
        document.getElementById("numb1").innerHTML = result
        console.log(result);
    }
    
}

function factorial3(value){
      var fac = 1;
      for(a = 1; a<=5; a++){
          fac *=a;
          result =fac;
          document.getElementById("numb2").innerHTML = result;
          console.log(result);
      }
}

function frl(digit){
    var flr = 1;
    for(a = 1; a<=digit;a++){
        flr *= a;
        document.getElementById("flrl").innerHTML = flr;
        console.log(flr);
    }
}

function tocelssius(f){
    result = (5/9)*(f-32);
    document.getElementById("faren").innerHTML = result; 
    console.log(result);
}

function carr(p){
    var carName = "volvo";
    document.getElementById("car").innerHTML = carName;
    console.log(carName);

}

function connect(s){
    var puri = "ismart shankar";
    document.getElementById("puri").innerHTML = puri;
    console.log(puri);
}

function help(w){
    var country = "Ethopia";
    document.getElementById("country").innerHTML = country;
    console.log(country);
}


function addd(h){
    var x = 10;
    var y = 20;
    result = eval('x+y');
    document.getElementById("aa").innerHTML = result;
    console.log(result);
}

 
function both(h){
    var a = 20;
    var b = 30;
    var c = 40;
    result = (a+b+c);
    document.getElementById("bb").innerHTML = result;
    console.log(result);
}
 
function val(w){
    x = 30;
    y = 20;
    z = x+y;
    document.getElementById("qw").innerHTML= "The value off z is: " + z; 
    console.log( "The value off z is: " + z);
}  

function wish(a){
    var a = "Are you";
    var b = "Michale Douglas,";
    var c = "Yes iam!";
    document.getElementById("y").innerHTML = a+ " "+b+" "+c;
    console.log(a+ " "+b+" "+c);
}

function amo(d){
    var person = "John",car = "volswagon", price1 = "20lakhs";
    document.getElementById("k").innerHTML = car;
    console.log(car);
}
 

function hen(oo){
    var a ={
        House : 'simple',
        Members : 5,
        Bike : 'Yamaha',
        Fridge : 'Whirpool',
        living : {
            city : 'chandigarh',
            country : 'India'
        },
        mining : {
            coal : "costly",
            Helmet : "safety"
        },
        Cinema : ['Badri', 'idiot', 'pokiri','ismart shankar'],
        INDIA : ['j&k',"Delhi",'M.P','Hyderabad','Kerala'],
        salary : function(){
            return 90000;
        },
         full : function(){
             return this.House+ " " +this.Bike;
         },
         hii : function(){
             return this.INDIA[3] + " "+this.Fridge;
         }

   };
    document.getElementById("demo").innerHTML = a.mining.Helmet;
    console.log(a.mining.Helmet)
}

  function q(b){
    var baa = {
        firstname : "joe",
        lastname  : "Dong",
        age       : "500",
        eye       : "green"
    };
    document.getElementById("demo1").innerHTML = baa.firstname + " "+ baa.lastname;
    console.log(baa["age"]+ " "+ baa["eye"]);

    }


function Business(p){
    var c = {
        Reliance : "Ambani",
       Adanigreen: "Adani",
             TCS : "RathanTata",
          Infosys: "N.R",
         Ardeshir: ["Godrejcp","Godrejprop","GodrejIND"],
          Banks  : ['SBI','ICICI','RBL','AXIS'],
          Airtel : function(){
            return 530;
          },
           JIO   : function(){
               return 199;
           },
          Galaxy : function(){
              return this.Reliance+ " "+ this.Adanigreen;
          },
          Remote : function(){
              return this.TCS+ " "+this.Infosys;
          },
           BOOKS : {
               LEEPAKSHI : "SINGLE RULE",
               APSARA    : "DOUBLE RULE",
               NIRMALA   : "ROUGH NOTES"
           }
 

    };
   // document.getElementById("demo2").innerHTML = c.BOOKS.APSARA;
    //console.log(c.BOOKS.APSARA);
    
    }    

var ee = {
    color : "brown",
    weight: 10,
    height:5.5,
    non : function(){
        return this.color+" "+this.weight;
    }
};
{
    console.log(ee.non());
}

var shape = {
    name : "sri",
    color: "wtever",
    height : 3.4,
    wgt : 500,
    line: {
    ashokleyand : 68,
        godrej  : 23,
        canara  : 101  
    } 
};

    console.log(shape.line.godrej);
    console.log(shape.line.canara);


    //let one = 1;
    //let two = 2;
    //let three = 3;
    
    //let numbers = {
      //one: one,
      //two: two,
      //three: three
    //};
    //console.log(numbers);
    

let one = 11;
let two = 22;
let three = 33;

let numbers = {one,two,three};

//console.log(numbers.two);

//Duplicated property names
let Head= {
    name1 : "Yashu papa",
    name1 : "Anitha",
    name1  : "chiku" 
};
//console.log(Head);


//new Keyword

//let movies = new Object();
//console.log(movies);
//new keyword 2

//let movies1 = new Object();
//console.log(movies1);


    var Body = new Object();
Body.face    = "cheek";
Body.chest   = "lungs";
Body.legs    = "Knees";
Body.gender  = ["Drama","Teen"];
Body.ratings ={
        IMdb  :"8/10",
   metacritic : "80%"
}
//console.log(Body);

var series = new Object();
series.jl = 50;
series.Av = "AVRODH";
series.sg = "Sacred";
series.Breathe = "shadow";
series.English = ['DARK','Boys','Twilight'];
series.corona = {
    INDIA : "10 lakhs",
    ISRAEL : "dont no"

}
//console.log(series.corona.INDIA);


function movies(name,releaseyear,genre,ratings){
    this.name  = name;
    this.releaseyear = releaseyear;
    this.genre = genre;
    this.ratings = ratings;
}


let DPS = new movies("Dead poet",1989,["Drama","Teen"],{
    IMDB : "8/10",
    Meta : "80%"
});

//console.log(DPS.name);


let amar  = {
 hero   : "jadu,wtever",
 heroine : "Srav$",
 frnd    : "Nik",
 frnd2   : "hemu",
 cinema  : {
     pellichoopulu : "tharun",
ENAGARANEKEEMAINDE : "VISHWAK",
               MMC : "ABHINAV"
 },
 college : {
     Girls   : 'yashu',
     canteen : "puffs",
     classmentor : "yagnasri", 
 },
  HIT    : ["NANI","RAHUL","SHARMA"],
  CAREof : ["venkya maha","SP",],
  smile : function(){
    return "unlimited";
},
pain : function(){
    return "Heartstroke";
},
puriconnects : function(){
    return this.hero +" "+this.heroine;
},
charmi : function(){
    return this.frnd+ " "+this.frnd2;
}
 
};

//console.log(amar.hero);

//object-2 new keyword...
var person = new Object();

person.fName = "sunny";
person.lName = "sunruthi";
person.age   = "uncountable";
person.fear  = ["society","family","community"];
//console.log(person.fear[1]);



   frnds  = new Object();
frnds.sc  = "NIKHIL";
frnds.Dclg= "Falthu";
frnds.Eclg="yashu, anitha";
//console.log(frnds.Eclg);

     school = new Object();
school.sir  ="James francis Sir, Raju sir";
school.maam = "sister Thomas,Jaya,merry,darling rose";
school.bus  = "mohammeduncle,vijayuncle,chinnauncle";
//console.log(school);


//varaiables inside an object.............
var aaa = 5;
var bbb = 0;
var ccc = 3;


var nur = {
    aaa,
    bbb,
    ccc 
};
//console.log(nur);

//Let's do constructor function

function metal(){
    this.wgt   = 25;
    this.hgt   = 3.34;
    this.Round = "cap";
    this.color = "black";
    this.stand = function(){
        console.log(this.color + this.Round);
    };
 
}

var Bottle =  new metal();
var lav    = new metal();
//Bottle.stand();
//console.log(lav.hgt);

//function object constructor...
function movies(){
    this.call =["mera babu ne khana khaya","nai khaya","chal hut"];
    this.name  = "amar";
    this.birth = 1996;
    this.mole  = "cheek";
    this.boosting = "girls";
    this.loves = function(){
       //console.log (this.name+ " love "+ this.boosting);
    }
    this.happy = function(){
       // console.log("Mole on Right"+ this.mole);
    }
}
 //let watch = new movies();
 //watch.loves();
 //let cant = new movies();
 //cant.happy();
 //let c = new movies();
 //console.log(c.call[0]);




 //Now try with parameters....

function company(name,founder,foundedyear,location,Services){
         this.name   = name;
         this.founder= founder;
    this.foundedyear = foundedyear;
    this.location    = location;
    this.Services    = Services;
    this.Power       = function(){
       // console.log(this.name+ " "+ this.founder);
    }
} 


let GOAL = new company("Tata","Jamsetji tata","1868",["Mumbai","pune","Hydearbad"],{
    Automobiles : "Tata motors",
    steels : "Tata steels",
    IT : "Tata consultancy services",

});
GOAL.Power();
//console.log(GOAL);

//Try simple ARROW Functions....
var sayhello = function(name){
    return "Hey there,"+name+"!";
}

//console.log(sayhello('ROCKY'));

var saybye = (word) => word+ " are"+" High!";

//console.log(saybye('Expectations'));


function pppp(qq,ww,ee,rr){
    this.qq  = qq;
    this.ww  = ww;
    this.ee  = ee;
    this.rr  = rr;

}
const info = new pppp('zz','yy','xx','ww');
const inf = new pppp('vv','uu','tt','ss');
const ine = new pppp('nn','pp','qqq','rr');
const i   = new pppp('jj','kk','ll','mm');

//console.log(inf);

class forest{
    constructor(plants,animals,birds,fruits){
        this.plants  = plants;
        this.animals = animals;
        this.birds   = birds;
        this.fruits  = fruits;
    }
}


let kabini = new forest('cotton tree','black panther','woodpecker','Banana')
//console.log(kabini.plants);
let Nalamala = new forest('kadamba','Honey badger','crow','water-melon')
//console.log(Nalamala.animals);


class filmmaking{
    constructor(captain,producer,lightmen,spotboys){
        this.captain = captain;
        this.producer = producer;
        this.lightmen = lightmen;
        this.spotboys = spotboys;

    }

}

let onsets = new filmmaking('Puri jagganath','Raju','ramesh','raju')
//console.log(onsets.captain);


class fame{
    constructor(Farmers,Celebrities,cricketers,Politician){
        this.Farmers     = Farmers;
        this.Celebrities = Celebrities;
        this.cricketers  = cricketers;
        this.Politician  = Politician;

    }
}

 let kinds = new fame('Mangthya','vijay','Sachin kulashekara sree','KTR')
 //console.log(kinds.Farmers);



//class constructor...

class wildlife{
    constructor(Bagheera,Akela,Baloo,Hathi,Remaining,){
        this.Bagheera = Bagheera;
        this.Akela    = Akela;
        this.Baloo    = Baloo;
        this.Hathi    = Hathi;
      this.Remaining  = Remaining; 
      this.Junglebook = function(){
          return this.Bagheera + " and "+ this.Akela + " are best frnds";
      }
         this.Ferao  = ()=> this.Hathi + " is Heaviest than "+ this.Baloo;
         
        }
}
let Mowgli = new wildlife('Leapord','wolf','Bear','Elephant',['Monkeys','springrat','crocodile','python']);
//console.log(Mowgli.Ferao());


var ages = [32,12,30,16];

function checkAdult(age){
    return age >=18;
}
let adult = ages.filter(checkAdult);
//console.log(adult);

const count = [0,-2,-56,-32,56,34];
function counting(qqqq){
    return qqqq <=0;
}
const cc = count.filter(counting);
//console.log(cc);


var greater = [1,33,77,99,100,5,22];

function digits(mm){
    return mm >= 50;
}

var great = greater.filter(digits);
//console.log(great);

const num = ['a','b','c','d','e','f'];
const filtered = num.filter(function(value) {
    return value >= 'c';
});

//console.log(filtered);


var numerical = [0,1,3,5,-2-5-7-9];
var numeric = numerical.filter(val => val >=0);
//console.log(numeric);



var primary = [32,12,18,19,20,14,13,15,23,34,45,56,56,2,3,4,5];
var school  = primary.filter(value => value >= 18);

 //console.log(school);

const tiger = ['A','B','C','D','E','F','G','H','I','J'];
const butterfly = tiger.filter(va => va <= "E");
//console.log(butterfly);

 //Prepare Objects.........

 var BB = {
     colorchanges : 'Sujatha',
     Dustbin      : 'Abhijith',
     Thop         : 'Gangava',
     JOker        : 'Ammarajashekar',
     Proper       :['Devi','Akhil','SR','Devi'],
     Proper1      :['King','shoel','Aryana'],
     Bbset        :function(){
         return this.colorchanges + " " + this.Dustbin;
     },
     Bset         : function(){
         return this.Thop+ " "+this.JOker;
     },
     Bswim         :{
         AA : 'BBB',
         CC : 'DDD',
         EE : 'FFF'
     },
     Bkitchen  :{
         xx : 'xxx',
         yy : 'yyy',
         zz : 'zzz'
     }
      };

//console.log(BB);


//new keyword.....
  
 var Gharshana     = new Object();
 Gharshana.chandu  = 'victory';
 Gharshana.maya    = 'Asin';
Gharshana.srikanth = 'Daniel';
Gharshana.ghar     = ['Gautham menon','Harris jayraj'];
Gharshana.mov      =['cameraman','production','spotboys'];
Gharshana.jun      =function(){
    return this.chandu+ " "+this.maya+ " are frnds !";
}
//console.log(Gharshana.jun());

var pp = new Object();
pp.mm = "MMM";
pp.nn = "NNN";
pp.bb = "vvv";
pp.cc = ['xx','zz','ll','kk'];
pp.jj = function(){
  return  this.bb+ " "+ this.nn;
}

//console.log(pp.jj());

//function object constructor...

function sss(){
    this.Rajini     = 'chai',
    this.lela       = 'Manjima',
    this.prashaanth = 'Rakendu',
    this.police     = 'Baba',
    this.gautham    =['writer','director','producer'],
    this.kona       =['Dialogues','prodution'],
    
    this.cinema  = {
       pellichoopulu : 'tharun',
   ENAGARANEKEEMAINDE : 'VISHWAK',
                  MMC : 'ABHINAV'
    },
    ymc    ={
        karthik : 'chaitanya',
        jessie  : 'samantha',
        musicdirector: 'A.R Rahman'

    }

     this.music      =function(){
        return 'Velipomake';
    },
    this.tune       = function(){
        return 'shokila';
    }
      
};

let sagipo = new sss();
//console.log(sagipo.cinema.MMC);

//function object constructor foe shortcodes....

function employee(name,prof,vilg){
    this.name = name;
    this.prof = prof;
    this.vilg = vilg;
}

const chanduinfo = new employee('chandu','nthg','gutta');
const nar        = new employee('Naresh','web developer','nzb'); 
//console.log(nar.vilg);

//lengthy function constructor codes..
function smthg(wtsthat,explain,can){
    this.wtsthat = wtsthat;
    this.explain = explain;
    this.can     = can;
}

const thg = new smthg(
    wtsthat = 'nthgmuch',
    explain = 'what shoulf i',
    can = 'i cant',
);
//console.log(thg.can);

function movies(name,releaseyear,allowed,collection,technician,workteam,rating,charming){
           this.name = name;
    this.releaseyear = releaseyear;
        this.allowed = allowed;
     this.collection = collection;
     this.technician = technician;
     this.workteam   = workteam;
     this.rating     = rating;
        this. RAPO   = function(){
             return this.name+" "+this.allowed;
              },
        this.charme  = function(){
            return this.technician + " "+this.workteam;
        
        },
        this.charming = charming;

     
}


//const Puri = new movies('ismartshankar',2019,'16+','80cr',['mani sharama','sham'],['spotboys','directionteam'],{
            // imdb : '8/10',
    //hindustantimes: '4.5/5'
//},{
//heart : 'Adha',
//feel  : 'nabha'});
//const puri = new movies('Heartattack',2013,'12+','60cr');
//console.log(Puri.charming.feel);

//class constructor.......
class masala{
    constructor(name,releaseyear,genre,ratings){
        this.name = name;
        this.releaseyear = releaseyear;
        this.genre  = genre;
        this.ratings = ratings;
    }
}

let rocky = new masala('rocky','1976',['Drama,sports'],{
    imdb : "8/10",
    meta : '70'
});
//console.log(rocky);

class upstox{
    constructor(steel1,steel2,steel3,steel4,televisions,book,){
        this.steel1 = steel1;
        this.steel2 = steel2;
        this.steel3 = steel3;
        this.steel4 = steel4;
   this.televisions = televisions;
   this.book        = book;
         this. stel = () => this.steel1+ ", "+this.steel2+ "are developed companies !";
         this.stels = () =>  this.steel3+ ","+ this.steel4; 
          this.book = book;
        }
};
const steels = new upstox('Jindalsteel','Jswsteel','Tatasteel','Essar steel',['zee','suntv','maa'],{
    boo : 'bo',
    goo : 'ono'
});
//console.log(steels);

//Array functions......................
(p1,p2) => (p1*p2);
let pl = (4,2);
//console.log(pl);

//filter.......... 

//var ABC = ['a','b','c','d','e','f','g','i','j','k','l','m','n'];
 
//function check(AB){
    //return AB <= 'f';
//}
//let A = ABC.filter(check);
//console.log(A);
//var ages = [32,12,30,16];

//function checkAdult(age){
   // return age >=18;
//}
//let adult = ages.filter(checkAdult);
//console.log(adult);

//const count = [0,-2,-56,-32,56,34];
//function counting(qqqq){
  //  return qqqq <=0;
//}
//const cc = count.filter(counting);
//console.log(cc);

var ZZ = [0,1,2,3,4,5,6,-1,-2,-3,-4,-5];
function bottle(pen){
    return pen >= 5;
}
let YY = ZZ.filter(bottle);
//console.log(YY);

let roman = [-1,3,5,-3,-2,-5,4,-4,2,1];
function Roman(rom){
    return rom <=1;
}

let ro = roman.filter(Roman);
//console.log(ro);

//const N = [0,9,8,7,6,5-1,-2,-3,-4];
  //   c = N.filter(function(value){
    //     return value >=0;
     ///});

//console.log(c);

const N = [0,9,8,7,6,5-1,-2,-3,-4];
     c = N.filter(v => v <=0);
     //console.log(c)

//var nep = ["R",'A','W'];
//nep.forEach(function(value,index){
    //console.log(index+ ":"+value);
//})
var wtever = ['mon','tue','wed','thr']
wtever.forEach(function(index){
    //console.log(index+ ":" + "lets have some fun");

})
var tooo = ['mon','tue','wed','thur','fri','sat','sun'];
tooo.forEach(function(value,index){
    //console.log(index+ ":"+value +" gud mrng !");
})

// var human = {
// firstName = "Virat",
// lastName: "Kohli",
// 	age: 30,
// 	fullName: function(){
// 		return this.firstName + " " + this.lastName		
// 	}
// }

// console.log(human);

// var Gharshana     = new Object();
//   Gharshana.chandu  = 'victory';
//  Gharshana.maya    = 'Asin';
// Gharshana.srikanth = 'Daniel';
// Gharshana.ghar     = ['Gautham menon','Harris jayraj'];
// Gharshana.mov      =['cameraman','production','spotboys'];
// Gharshana.jun      =function(){
//     return this.chandu+ " "+this.maya+ " are frnds !";
// }
// console.log(Gharshana);


var person = new Object ();
person.name = "Vaibhav";
person.greeting = function () {
  return "Good morning " + this.name
}

//console.log(person.greeting());

function mona(name,age, mobile,qualities){
    this.name  = name;
    this.age   = age;
    this.mobile = mobile;
    this.qualities = qualities;
} 

const moo = new mona('niha',24,9000934572,['annoying','arrogant','hot']);
//console.log(moo.qualities[1]);

//here v r taking out the values..
const user1 = {
    age : 23,
    mob : 903499433,
    name : 'nisha',
}

const user = Object.values(user1);
//console.log(user);

//now take out the keys....
const user2 = {
    age : 25,
    mob : 9776372531,
    name:'komal',
}
const use = Object.keys(user2);
//console.log(use);

//Take object to Array entries, contains both key/values pairs .....
const make = {
    age : 32,
 mobile : 9834523434,
 name   : 'harathi'
}
const maker = Object.entries(make);
//console.log(maker);

//combining two objects................

const doing = {
    birthyear : 1996,
    name      :'AMAR',
}

const dng = {
    age : 24,
}

const combine = Object.assign(doing,dng);
//console.log(combine);

// freeze's the object(keys and values)....
const member = {
          name : 'naman',
    profession : 'gym tainer',
    height     : '5.3',
    email      : ['naman420@gmail.com'],
}

member['weight'] = '63kgs',
member['personality'] = 'fit'
//console.log(member);
let unknown = Object.freeze(member);
unknown.email.push= ['chanduindia1996@gmail.com']
//console.log(unknown);

//it determines isFrozen(),returns Bolean Value...
const funky = {
    fashion : 'girl',
    stud    : 'boy',
    lust    : 'girl boy'
}
Object.freeze(funky)
//console.log(Object.isFrozen(funky));


const lesson = {
    chapter  : 'ration killer',
    chapter2 : 'comedy man jindal',
    chapter3 : ['jindal567@gmail.com']
}
Object.freeze(lesson)
//console.log(Object.isFrozen(lesson));

  
const o = {
    name: 'DOM',
    sub : 'yagnasri'

}

Object.seal(o);
delete o.name
o.eyes = 'blue';

//console.log(o);



//  sealtopic and isSealed(returns true or false).....

// const charge ={
//     phn : 'usb',
//     net : 'wifi',
//     call : 'sim'

// }
// console.log(Object.isSealed(charge));        


// Object.seal(charge)
// //charge.extension = 't.v' .....u cant add
// //delete charge.phn   .....cant delete
// console.log(Object.isSealed(charge));        

// console.log(charge);

function student(name,age,marks1,marks2,marks3){
    this.name = name;
    this.age  = age;
  this.marks1 = marks1;
  this.marks2 = marks2;
  this.marks3 = marks3;
this.sumtotal = function(){
    return this.marks1 + this.marks2 + this.marks3;
}

};

const student1 = new student('Amar','23',35,55,63);
//console.log(student1.sumtotal());

// function std(name,age,marks1,marks2,marks3){
//     this.name   = name;
//     this.age    = age;
//     this.marks1 = marks1;
//     this.marks2 = marks2;
//     this.marks3 = marks3;
//   this.sumtotal = function(){
//       let sumMarks = this.marks1+this.marks2+this.marks3;
//       return sumMarks;
//   }
// }

// const student3 = new std('Arjun','23',32,23,45);
// const student2 = new std('vaibhav', '22', 55, 65, 73);

// console.log(`student name: ${student3.name}, student age: ${student3.age}, TotalMarks: ${student3.sumtotal()}`);
// console.log(`student name: ${student2.name}, student age: ${student2.age}, TotalMarks: ${student2.sumtotal()}`);


//OBJECT CONSTRUCTOR Function...............

// function unit1(name,clas,age,Moral,sense,Humour){
//     this.name  = name;
//     this.clas  = clas;
//     this.age   = age;
//     this.Moral = Moral;
//     this.sense = sense;
//     this.Humour = Humour;
//     this.total = function(){
//         let marks = this.Moral+this.sense+this.Humour;
//         return marks;
//    }
// }

// const std1 = new unit1('Sunny','Ten','16',35,36,12);
// const std2 = new unit1('Manisha','Third','7',53,46,82)
// console.log(`Name of Student: ${std1.name}, Class:${std1.clas}, Marks:${std1.total()}`);
// console.log(`Name of Student: ${std2.name}, Class:${std2.clas}, Marks:${std2.total()}`);

//Different ways of creating an Object.....
//1. Object Literal Way..............in this trailing comma after every line, this is optional for the last last element.
var sony = {
    comic : 'kapil sharma show',
    crime : 'crime patrol',
investigation : 'C.I.D',
shows    : ['KBC','Dhoom','love stories']
}
//console.log(sony.comic);

///2. Factory function
function createcircle(radius,location){
    return{
        radius,
        location,
        draw(){
            console.log('Hope');
        }
    };
}

const circle1 = createcircle(1,'forestarea');
//console.log(circle1.draw());

function quote(wishing,greeting){
    return{
        wishing,
        greeting,
        making(){
            return 'fcuk';
        }
    };
} 

const circle2 = quote('great heck','stop wishing start doing');
//console.log(circle2.making());

//2. Factory function with parameter.....
function mobile(modeln_no){
    return{
        model : modeln_no,
        price : function(){
            return 'price is Rs.3000';
        }
    };
}

var samsung = mobile('galaxy');
//console.log(samsung.model+" "+samsung.price());


function machines(type,type2){
    return{
        Refrigerator : type,
        washing : type2,
        price : function(){
            return "Price is Rs.28,5000.";
        },
        cost : function(){
            return 'weight is 6.5kg with 1000RPM.';
        }
    };
}

const cooling = machines('whirpool Double Door','Wahing machine');
// console.log(cooling.Refrigerator+ " "+cooling.price());
// console.log(cooling.washing+ " "+cooling.cost());


const face = {
    see : 'Eyes',
    Smell : 'Nose',
    Taste : 'Tongue',
    chew : 'Teeths'

}
delete face.Taste;
//console.log(face);

//Data Types.............
var z = 'Hero Chandu';
    y = 23;
    x = true;
    w = ['ass','dick','wtever'];
    v = null;

    T ={
        s : 'd',
        e : 'g'
    };

console.log(typeof z);
console.log(typeof y);
console.log(typeof x);
console.log(typeof w);
console.log(typeof v);
console.log(typeof T);























