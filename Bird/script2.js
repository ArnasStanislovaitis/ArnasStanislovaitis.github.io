var kliutis = document.getElementById("kliutis");
var tarpas = document.getElementById("tarpas");
var veikejas = document.getElementById("veikejas");
var jumping = 0;
var counter = 0;


tarpas.addEventListener('animationiteration', () => {
    var random = -((Math.random()*150)+350);
    tarpas.style.top = random + "px";
    counter++;
});



setInterval(function(){
    var veikejoVirsus = parseInt(window.getComputedStyle(veikejas).getPropertyValue("top"));
    if(jumping==0){
        veikejas.style.top = (veikejoVirsus+3)+"px";
    }
    var kliutiesKaire = parseInt(window.getComputedStyle(kliutis).getPropertyValue("left"));
    var tarpoVirsus = parseInt(window.getComputedStyle(tarpas).getPropertyValue("top"));
    var vVirsus = -(500-veikejoVirsus);
    if((veikejoVirsus>480)||((kliutiesKaire<32)&&(kliutiesKaire>-50)&&((vVirsus<tarpoVirsus+15)||(vVirsus>tarpoVirsus+150)))){
        alert("Game over. Score: "+(counter-1));
        veikejas.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var veikejoVirsus = parseInt(window.getComputedStyle(veikejas).getPropertyValue("top"));
        if((veikejoVirsus>6)&&(jumpCount<15)){
            veikejas.style.top = (veikejoVirsus-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}    


function veikejoPasirinkimas1(){
    document.getElementById("veikejas").style.backgroundImage="url('https://flappycreator.com/default/bird_sing.png')";
}
function veikejoPasirinkimas2(){
    document.getElementById("veikejas").style.backgroundImage="url('mario.png' )";
}
function veikejoPasirinkimas3(){    
    document.getElementById("veikejas").style.backgroundImage="url(' https://images.pngnice.com/download/2007/Nyan-Cat-PNG-Transparent.png   ')";
}



