function switchVideos() {

    let video1 = document.getElementById("video1");
  
    let video2 = document.getElementById("video2");
  
  
  
    video1.style.display = "none"; 
  
    video2.style.display = "block";
  
  }


  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});