# gifencoder ES module ver.

animated (and non-animated) gif generation for browsers and Deno

## Usage

``` js
import { GIF } from "https://taisukef.github.io/gifencoder/GIF.js";

// prepare imagedata (RGBA)
const [w, h] = [320, 240];
const frames = [];
frames.push(imagedata1);
frames.push(imagedata2);
frames.push(imagedata3);
const gifbin = GIF.encode(frames, 500, 0);
console.log(gifbin);
```

NB: The chunks that get emitted by your read stream must either by a 1-dimensional bitmap of RGBA
data (either an array), or a canvas 2D `context`.

The above code will generate the following animated GIF:

![Animated GIF](https://raw.github.com/eugeneware/gifencoder/master/examples/myanimated.gif)

## Contributing

gifencoder is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/eugeneware/gifencoder/blob/master/CONTRIBUTING.md) file for more details.

### Contributors

gifencoder is only possible due to the excellent work of the following contributors:

<table><tbody>
<tr><th align="left">Kevin Weiner</th><td><a href="mailto:kweiner@fmsware.com">kweiner@fmsware.com</a></td></tr>
<tr><th align="left">Thibault Imbert</th><td><a href="http://www.bytearray.org/">http://www.bytearray.org/</a></td></tr>
<tr><th align="left">Eugene Ware</th><td><a href="https://github.com/eugeneware">GitHub/eugeneware</a></td></tr>
<tr><th align="left">Raine Virta</th><td><a href="https://github.com/raine">GitHub/raine</a></td></tr>
<tr><th align="left">Paul Ochoa</th><td><a href="https://github.com/rochoa">GitHub/rochoa</a></td></tr>
<tr><th align="left">Heikki Pora</th><td><a href="https://github.com/heikkipora">GitHub/heikkipora</a></td></tr>
</tbody></table>
