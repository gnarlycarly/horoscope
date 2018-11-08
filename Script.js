var zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

var horoscope = ["test your luck today, good things are coming",
    "stand up for yourself, there are some mean people in this world",
    "don't be a loser, be a winner", "check yourself before you wreck yourself",
    "you don't want to look back and known you could've done better",
    "everyday is a day to get one day better at what you love",
    "always remember: mind over matter",
    "be on Mr.Albinson's good side", "live your life to the fullest",
    "computer science is like life, you have no idea what's going on most of the time, " +
    "but in the end, you start to figure it all out",
    "when life gives you lemons, question why it was lemons and not chocolate," +
    " go make hot chocolate", "believe in yourself" ];

var images = ["images/aries.jpg", "images/taurus.jpg", "images/gemini.jpg", "images/cancer.jpg",
"images/leo.jpg", "images/virgo.jpg", "images/libra.jpg", "images/scorpio.jpg", "images/sagittarius.jpg", "images/capricorn.jpg",
"images/aquarius.jpg", "images/pisces.jpg"];

function onSubmit() {

    document.getElementById("birthday").innerHTML="";
    document.getElementById("sign").innerHTML="";
    document.getElementById("message").innerHTML= "";
    document.getElementById("images").src="";


    var name = document.getElementById("name").value;
    var month = document.getElementById ("month").value;
    var day = document.getElementById ("day").value;


    if(badDates(month,day) == false) {

        //write something to the page in the error div
        document.getElementById("error").innerHTML= "That's impossible!"
        return false;

    }

    var now = new Date();


    if(birthday(month,day,now)==true){
        document.getElementById("birthday").innerHTML="Hapy birthday! This year will be filled with lots of excitement!";
        return true;
    }


    var sign = determineSign(month,day);


    document.getElementById("sign").innerHTML=zodiac[sign];
    document.getElementById("message").innerHTML= name + ", " + horoscope[sign];
    document.getElementById("images").src=images[sign];


    console.log(month);
    console.log(day);
    console.log(name);

}
function determineSign(month,day){
    if(month==3 && day>=21){
        return 0
    }
    if(month==4 && day<=19){
        return 0
    }
    if(month==4 && day>=20){
        return 1
    }
    if(month==5 && day<=20){
        return 1
    }
    if(month==5 && day>=21){
        return 2
    }
    if(month==6 && day<=20){
        return 2
    }
    if(month==6 && day>=21){
        return 3
    }
    if(month==7 && day<=22){
        return 3
    }
    if(month==7 && day>=23){
        return 4
    }
    if(month==8 && day<=22){
        return 4
    }
    if(month==8 && day>=23){
        return 5
    }
    if(month==9 && day<=22){
        return 5
    }
    if(month==9 && day>=23){
        return 6
    }
    if(month==10 && day<=22){
        return 6
    }
    if(month==10 && day>=23){
        return 7
    }
    if(month==11 && day<=21){
        return 7
    }
    if(month==11 && day>=22){
        return 8
    }
    if(month==12 && day<=21){
        return 8
    }
    if(month==12 && day>=22){
        return 9
    }
    if(month==1 && day<=19){
        return 9
    }
    if(month==1 && day>=20){
        return 10
    }
    if(month==2 && day<=18){
        return 10
    }
    if(month==2 && day>=19){
        return 11
    }
    if(month==3 && day<=20){
        return 11
    }
}


function badDates(month,day){
    if(month==2 && day>28){
        return false
    }
    if(month==4 && day==31){
        return false
    }
    if(month==6 && day==31){
        return false
    }
    if(month==9 && day==31){
        return false
    }
    if(month==11 && day==31){
        return false
    }
    return true;
}

function birthday(month, day,now){
    if(month == now.getMonth()+1 && day == now.getDate()){
        return true
    }


}