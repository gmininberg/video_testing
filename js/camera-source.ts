import VideoSink from './video-sink.js';
import { MediaProcessorConnectorInterface } from '@vonage/media-processor';

class CameraSource {
  stream_: MediaStream;
  mediaProcessorConnector_: MediaProcessorConnectorInterface
  sink_: VideoSink
  videoTrack_: MediaStreamTrack
  audioTrack_: MediaStreamTrack

  constructor() {
    this.stream_ = null;
    this.sink_ = new VideoSink();
    this.videoTrack_ = null;
    this.audioTrack_ = null;
  }

  async init() {
    this.stream_ = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
    this.videoTrack_ = this.stream_.getVideoTracks()[0]
  }

  setMediaProcessorConnector(mediaProcessorConnector: MediaProcessorConnectorInterface): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      this.mediaProcessorConnector_ = mediaProcessorConnector;
      if (!this.stream_) 
      {
        console.log('[CameraSource] Requesting camera.');
        reject("no stream")
      }
      this.mediaProcessorConnector_.setTrack(this.videoTrack_).then( newTrack => {
        let processedStream = new MediaStream();
        processedStream.addTrack(newTrack);
        this.sink_.setMediaStream(processedStream);
        resolve();
      })
      .catch(e => {
        reject(e)
      })
    });
  }

  async stopMediaProcessorConnector() {
    if(this.mediaProcessorConnector_){
      this.mediaProcessorConnector_.destroy().then(() => {
        this.sink_.destroy()
      })
      .catch(e => {
        console.log(e);
      });      
    }
  }

  destroy() {
    console.log('[CameraSource] Stopping camera');
    if (this.stream_) {
      this.stream_.getTracks().forEach(t => t.stop());
    }
  }
}

export default CameraSource;
