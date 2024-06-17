const axios = require("axios")
const convertSec = require("../function")
const fetch = require("node-fetch")

async function yt(url) {
  const { data } = await axios(`https://tomp3.cc/api/ajax/search?hl=en`, {
    method: "post",
    data: { query: url, vt: "downloader" },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      accept: "*/*",
      "x-requested-with": "XMLHttpRequest"
    }
  })
  return data
}

/**
 *
 * @param {String} url
 */
async function ytmp3(url) {
  try {
    const info = await yt(url)
    const { data } = await axios(`https://tomp3.cc/api/ajax/convert?hl=en`, {
      method: "post",
      data: {
        vid: info.vid,
        k: info.links.mp3.mp3128.k
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "*/*"
      }
    })
    const thumb = `https://i.ytimg.com/vi/${info.vid}/maxresdefault.jpg`
    const { status } = await fetch(thumb)
    if (status !== 200) {
      var thumbImg = `https://i.ytimg.com/vi/${info.vid}/hqdefault.jpg`
    } else {
      var thumbImg = thumb
    }
    const result = {
      status: true,
      title: data.title,
      channel: info.a,
      duration: convertSec(info.t),
      durationMs: info.t,
      size: info.links.mp3.mp3128.size,
      type: data.ftype,
      quality: `${data.fquality}Kbps`,
      id: info.vid,
      thumbnail: thumbImg,
      url: data.dlink
    }
    return result
  } catch {
    const result = {
      status: false,
      message: "Can't get metadata"
    }
    console.log(result)
    return result
  }
}

/**
 *
 * @param {String} url
 * @param {String | Number} quality
 */
async function ytmp4(url, quality) {
  try {
    const info = await yt(url)
    if (!info.links.mp4["137"]) {
      var qualityHD = 299
    } else {
      var qualityHD = 137
    }
    if (!info.links.mp4["22"]) {
      var qualityMedium = 136
    } else {
      var qualityMedium = 22
    }
    if (quality == 1080) {
      var res = qualityHD
    } else if (quality == 720) {
      var res = qualityMedium
    } else if (quality == 480) {
      var res = 135
    } else if (quality == 360 || quality == undefined || quality == 0) {
      var res = 18
    }
    const { data } = await axios(`https://tomp3.cc/api/ajax/convert?hl=en`, {
      method: "post",
      data: {
        vid: info.vid,
        k: info.links.mp4[`${res}`].k
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "*/*"
      }
    })
    const thumb = `https://i.ytimg.com/vi/${info.vid}/maxresdefault.jpg`
    const { status } = await fetch(thumb)
    if (status !== 200) {
      var thumbImg = `https://i.ytimg.com/vi/${info.vid}/hqdefault.jpg`
    } else {
      var thumbImg = thumb
    }
    const result = {
      status: true,
      title: data.title,
      channel: info.a,
      duration: convertSec(info.t),
      durationMs: info.t,
      size: info.links.mp4[`${res}`].size,
      type: data.ftype,
      quality: data.fquality,
      id: info.vid,
      thumbnail: thumbImg,
      url: decodeURIComponent(data.dlink)
    }
    return result
  } catch {
    const result = {
      status: false,
      message: "Can't get metadata"
    }
    console.log(result)
    return result
  }
}

module.exports = { yt, ytmp3, ytmp4 }
