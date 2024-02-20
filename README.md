# Installation

```sh
> npm i @nechlophomeriaa/ytdl
```

# Usage

```js
const { ytmp3, ytmp3v2, ytmp4, ytmp4v2 } = require("@nechlophomeriaa/ytdl")
```

# Version 2

Use ytmp3v2 and ytmp4v2 if first version not works

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
