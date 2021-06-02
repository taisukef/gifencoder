import { GIFEncoder } from "./GIFEncoder.js";

const GIF = {
  // repeat n: times, 0: forever, -1: no-repeat(default)
  encode(frames, delaymsec = 500, repeat = 0) {
    if (Array.isArray(frames)) {
      const encoder = new GIFEncoder(frames[0].width, frames[0].height);
      encoder.setRepeat(repeat); // 0 for repeat, -1 for no-repeat
      encoder.setDelay(delaymsec); // frame delay in ms
      encoder.setQuality(10); // image quality. 10 is default.
      encoder.start();
      for (const frame of frames) {
        encoder.addFrame(frame.data);
      }
      encoder.finish();
      const buf = encoder.out.getData();
      return buf;
    } else {
      const frame = frames;
      const encoder = new GIFEncoder(frame.width, frame.height);
      encoder.start();
      encoder.addFrame(frame.data);
      encoder.finish();
      const buf = encoder.out.getData();
      return buf;
    }
  }
};

export { GIF };
