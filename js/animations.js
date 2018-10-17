var width = window.innerWidth

function getSize(){
    width = window.innerWidth
    console.log(width)
}

function initialize(){
    if(width>=930){
    console.log(width)
    $('.cameraFundo').animate({left: "30px",opacity: "0.8"},1200)
    }
}

