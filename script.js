function switchVideos() {

    let video1 = document.getElementById("video1");
  
    let video2 = document.getElementById("video2");
  
    let activateButton = document.getElementById("activate-button");

    let resumeButton = document.getElementById("resume-button");
  
    video1.style.display = "none"; 
  
    video2.style.display = "block";

    activateButton.style.display = "none"

    resumeButton.style.display = "block"
  
  }


  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

function showButton() {
    document.getElementById('img-full-1')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
}

function showButton2() {
    document.getElementById('img-full-2')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
}

function showButton3() {
    document.getElementById('img-full-3')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
     document.getElementById('switch')
        .style.display = "none";    
}

function showButton4() {
    document.getElementById('img-full-4')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";    
}

function showButton5() {
    document.getElementById('img-full-5')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";    
}
function showButton6() {
    document.getElementById('img-full-6')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
}
function showButton7() {
    document.getElementById('img-full-7')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
}
function showButton8() {
    document.getElementById('img-full-8')
        .style.visibility = "visible";
    document.getElementById('hide-button')
        .style.display = "block";
    document.getElementById('switch')
        .style.display = "none";
}

function hideButton() {
    document.getElementById('img-full-1')
        .style.visibility = "hidden";
    document.getElementById('img-full-2')
        .style.visibility = "hidden";
    document.getElementById('img-full-3')
        .style.visibility = "hidden";
    document.getElementById('img-full-4')
        .style.visibility = "hidden";
    document.getElementById('img-full-5')
        .style.visibility = "hidden";
    document.getElementById('img-full-6')
        .style.visibility = "hidden";
    document.getElementById('img-full-7')
        .style.visibility = "hidden";
    document.getElementById('img-full-8')
        .style.visibility = "hidden";
    document.getElementById('hide-button')
    .style.display = "none";
    document.getElementById('switch')
        .style.display = "block";
}