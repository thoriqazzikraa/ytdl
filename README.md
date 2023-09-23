# Installation

```sh
> npm i @nechlophomeriaa/ytdl
```

# Usage

```js
const { ytmp3, ytmp4 } = require("@nechlophomeriaa/ytdl")
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
;async () => {
  const yt = await ytmp4("https://youtu.be/R95ILhksGt8", 1080) //If quality is undefined, it will resolve with 360p quality
  console.log(yt)
}
```

<p>Thanks for using this module</p>
