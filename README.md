# Installation

```sh
> npm i @nechlophomeriaa/ytdl
```

# Usage

```js
const { ytmp3, ytmp3v2, ytmp4, ytmp4v2 } = require("@nechlophomeriaa/ytdl")
```

# Version

Version 1 is for Indonesian Country
Version 2 is for Global Using

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
