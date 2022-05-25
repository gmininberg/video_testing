import CameraSource from './js/camera-source';
import { isSupported, MediaProcessorConfig, BlurRadius, setTrackExpectedRate, createVonageMediaProcessorConnector } from '@vonage/ml-transformers';
import {setVonageMetadata, MediaProcessorConnector, MediaProcessor, ErrorData, WarnData} from '@vonage/media-processor'

async function main() {
  try {
    await isSupported();
  } catch(e) {
    console.error(e);
    return;
  }

  const sourceSelector: any = document.getElementById('sourceSelector');
  const numberOfVideosSelector: any = document.getElementById('numberOfVideos')
  const sendStatsSelector: any = document.getElementById('sendStats')
  
  navigator.mediaDevices.getUserMedia({audio: false, video: true});
  let sourceArray_: Array<CameraSource> = new Array()

  async function updatePipelineSource() {
    
    const sourceType = sourceSelector.options[sourceSelector.selectedIndex].value
    const numberOfVideosValue = numberOfVideosSelector.value
    const sendStatsValue = sendStatsSelector[sendStatsSelector.selectedIndex].value

    console.log(sourceType, numberOfVideosValue, sendStatsValue)

    if(sourceType === 'stop'){
      for(let camera of sourceArray_){
        await camera.stopMediaProcessorConnector()
      }
      numberOfVideosSelector.disabled = false
        sendStatsSelector.disabled = false
      return;
    }

    if(sendStatsValue === 'yes'){
      setVonageMetadata({appId: '123', sourceType: 'test'})
    }

    let config: MediaProcessorConfig = {
        wasmAssetUriPath: location.href,
        tfliteAssetUriPath: location.href + "/models/",
        transformerType: 'BackgroundBlur',
        radius: BlurRadius.Low
    }

    setTrackExpectedRate(35)
    for(let i = 0; i < numberOfVideosValue; i++){
      let camera = new CameraSource()
      await camera.init()
      createVonageMediaProcessorConnector(config).then( ([connector, emity]) => {
        emity.on('error', ( eventData => {
          console.error("error", eventData);
        }))
        emity.on('warn', (eventData => {
          console.warn("warn", eventData);
        }))
        camera.setMediaProcessorConnector(connector);
        sourceArray_.push(camera)
        numberOfVideosSelector.disabled = true
        sendStatsSelector.disabled = true
      })
      .catch(e => {
        throw(e)
      });
    }
  }
  sourceSelector.oninput = updatePipelineSource;
  sourceSelector.disabled = false;
}

window.onload = main;

