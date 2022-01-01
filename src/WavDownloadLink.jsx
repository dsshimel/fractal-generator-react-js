import React from 'react';

// Constants
const AUDIO_BIT_RATE = 16; // 16 bit audio
const AUDIO_BYTE_RATE = AUDIO_BIT_RATE / 8;
const NUM_CHANNELS = 1
const SAMPLE_RATE = 44100
const WAV_HEADER_LENGTH = 44;
const WAVEFORM_LENGTH = 44100 // 1 second of audio

class WavDownloadLink extends React.Component {
  constructor(props) {
    super(props);
  }

  convertFractalToAudioBuffer(X, Y) {
    const audioContext = new AudioContext();

    // Create an empty audio buffer within the context that has the 
    // desired properties.
    /* AudioBuffer */ const fractalWaveformBuffer = audioContext.createBuffer(/*numOfChannels*/ 1, WAVEFORM_LENGTH, SAMPLE_RATE);

    /* Float32Array */ const audioBuffer = fractalWaveformBuffer.getChannelData(0);
    var currentMaxFractalXIndex = 1;
    for (var i = 0; i < WAVEFORM_LENGTH; i++) {
      var sampleXPoint = i / WAVEFORM_LENGTH;
      while (X[currentMaxFractalXIndex] < sampleXPoint) {
        currentMaxFractalXIndex++;
      }

      var fractalXLeft = X[currentMaxFractalXIndex - 1];
      var fractalXRight = X[currentMaxFractalXIndex];
      var fractalYLeft = Y[currentMaxFractalXIndex - 1];
      var fractalYRight = Y[currentMaxFractalXIndex];
      var fractalDeltaX = fractalXRight - fractalXLeft;

      if (fractalDeltaX == 0) {
        var sampleYPoint = fractalYLeft + fractalYRight;
        audioBuffer[i] = sampleYPoint;
      } else {
        // If the sample point is closer to one side, we subtract the distance to the _other_ side to get the interpolation fraction
        // fraction because distance is inversely proportional.
        var interpolationFractionLeft = fractalXRight - sampleXPoint;
        var sampleYLeft = 2 * fractalYLeft * ((interpolationFractionLeft) / fractalDeltaX);
        if (isNaN(sampleYLeft)) {
          sampleYLeft = 0;
        }
        var interpolationFractionRight = sampleXPoint - fractalXLeft;
        var sampleYRight = 2 * fractalYRight * ((interpolationFractionRight) / fractalDeltaX);
        if (isNaN(sampleYRight)) {
          sampleYRight = 0;
        }

        var sampleYPoint = sampleYLeft + sampleYRight;
        audioBuffer[i] = sampleYPoint;
      }
    }

    return audioBuffer;
  }

  createWavBlobFromAudioBuffer(audioBuffer) {
    const wavLength = WAV_HEADER_LENGTH + audioBuffer.length * AUDIO_BYTE_RATE * NUM_CHANNELS; // bytes
    const wavBuffer = new ArrayBuffer(wavLength);
    const wavDataView = new DataView(wavBuffer);
    wavDataView.setUint32(0, 0x46464952, true); // "RIFF"
    wavDataView.setUint32(4, wavLength - 8, true);
    wavDataView.setUint32(8, 0x45564157, true); // "WAVE"
    wavDataView.setUint32(12, 0x20746d66, true); // "fmt"
    wavDataView.setUint32(16, 16, true); // length of format data
    wavDataView.setUint16(20, 1, true); // format type 1, PCM uncompressed
    wavDataView.setUint16(22, NUM_CHANNELS, true);
    wavDataView.setUint32(24, SAMPLE_RATE, true);
    wavDataView.setUint32(28, SAMPLE_RATE * AUDIO_BYTE_RATE * NUM_CHANNELS, true);
    wavDataView.setUint16(32, AUDIO_BYTE_RATE * NUM_CHANNELS, true);
    wavDataView.setUint16(34, AUDIO_BIT_RATE, true);
    wavDataView.setUint32(36, 0x61746164, true); // "data"
    wavDataView.setUint32(40, wavLength - 44, true); // length of the data in bytes

    var waveBytePosition = 44;
    for (var i = 0; i < audioBuffer.length; i++) {
      var value = audioBuffer[i]; // 32 bit float
      if (value < 0) {
        value = Math.floor(value * 32767);
      } else {
        value = Math.floor(value * 32768);
      }
      wavDataView.setInt16(waveBytePosition, value, true);
      waveBytePosition += 2;
    }

    return new Blob([wavBuffer], {type: 'audio/wave'});
  }

  render() {
    const X = this.props.X;
    const Y = this.props.Y;
    // here's where I make the WAV blob
    // Convert the data into an AudioBuffer.
    const audioBuffer = this.convertFractalToAudioBuffer(X, Y);

    // Convert the AudioBuffer into a WAV file.
    const wavBlob = this.createWavBlobFromAudioBuffer(audioBuffer);

    const wavBlobUrl = URL.createObjectURL(wavBlob);
    // TODO: do something other than genNumber to name the file
    const filename = "fractal_wav_file" + this.props.genNumber + ".wav";
    return (
      <p>
        {this.props.seriesName + " "}
        <a href={wavBlobUrl} download={filename}>(.wav)</a>
      </p>
    );
  }
}

export default WavDownloadLink;