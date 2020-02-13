if (flvjs.isSupported()) {
    let videoElement = document.getElementById('videoElement');
    let flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: 'ws://64.190.90.143:8888/live/STREAM_NAME.flv'
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
}