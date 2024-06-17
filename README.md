# Installation

```sh
> npm i @nechlophomeriaa/ytdl
```

# Usage

```js
// Common JS
const { yt, ytmp3, ytmp4 } = require("@nechlophomeriaa/ytdl")
```

```js
// ESM
import { yt, ytmp3, ytmp4 } from "@nechlophomeriaa/ytdl"
```

# Example Audio Downloader

```js
;async () => {
  const yt = await ytmp3("https://youtu.be/R95ILhksGt8")
  console.log(yt)
}
```

# Example Video Downloader

```js
/**
 * @param { String } url
 * @param { String | Number } quality
 */

;async () => {
  const yt = await ytmp4("https://youtu.be/R95ILhksGt8", 1080) //If quality is undefined, it will resolve with 360p quality
  console.log(yt)
}
```

<p>Thanks for using this module</p>
