let yourAudio = document.getElementById('videoElement'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    let pause = ctrl.innerHTML === 'Pause';
    ctrl.innerHTML = pause ? 'Play' : 'Pause';

    let method = pause ? 'pause' : 'play';
    yourAudio[method]();

    return false;
};

let HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        let anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

window.onload = function qtqt(){
    let client = new HttpClient();
    client.get('http://64.190.90.143:9090/getSongData', function(res) {
        let obj = JSON.parse(res)
        document.getElementById("nowPlaying").innerText = obj.message.nowPlaying;
    });
}

setTimeout(function qtqt() {
    let client = new HttpClient();
    client.get('http://64.190.90.143:9090/getSongData', function(res) {
        let obj = JSON.parse(res)
        document.getElementById("nowPlaying").innerText = obj.message.nowPlaying;
    });   
}, 3000)