import { GIFEncoder } from "../lib/GIFEncoder.js";

const encoder = new GIFEncoder(320, 240);
encoder.start();
encoder.setRepeat(0); // 0 for repeat, -1 for no-repeat
encoder.setDelay(500); // frame delay in ms
encoder.setQuality(10); // image quality. 10 is default.

class ImageData {
  constructor(data, w, h) {
    this.data = data;
    this.width = w;
    this.height = h;
  }
}

const makePanel = (w, h, rgba) => {
  const d = new Uint8ClampedArray(w * h * 4);
  for (let i = 0; i < d.length; i += 4) {
    d[i] = rgba[0];
    d[i + 1] = rgba[1];
    d[i + 2] = rgba[2];
    d[i + 3] = rgba[3];
  }
  return new ImageData(d, w, h);
};

// use node-canvas
const [w, h] = [320, 240];

{
  // red rectangle
  const frame = makePanel(w, h, [0xff, 0, 0, 0xff]);
  encoder.addFrame(frame.data);
}

{
  // green rectangle
  const frame = makePanel(w, h, [0x0, 0xff, 0, 0xff]);
  encoder.addFrame(frame.data);
}

{
  // blue rectangle
  const frame = makePanel(w, h, [0x0, 0, 0xff, 0xff]);
  encoder.addFrame(frame.data);
}
encoder.finish();

const buf = encoder.out.getData();
Deno.writeFile("myanimated2.gif", buf);
