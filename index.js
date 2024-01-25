const axios = require("axios")
const convertSec = require("./function")
const fetch = require("node-fetch")

async function ytv2(url) {
  const { data } = await axios(`https://tomp3.cc/api/ajax/search`, {
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

async function yt(url) {
  const { data } = await axios(`https://www.y2mate.com/mates/analyzeV2/ajax`, {
    method: "post",
    data: { k_query: url, k_page: "home", hl: "id", q_auto: 0 },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": "WhatsApp/2.5.3"
    }
  })
  return data
}

async function ytmp3v2(url) {
  try {
    const info = await ytv2(url)
    const { data } = await axios(`https://tomp3.cc/api/ajax/convert/`, {
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

async function ytmp3(url) {
  try {
    const info = await yt(url)
    const { data } = await axios(`https://www.y2mate.com/mates/convertV2/index`, {
      method: "post",
      data: {
        vid: info.vid,
        k: info.links.mp3.mp3128.k
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": "WhatsApp/2.5.3"
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

async function ytmp4v2(url, quality) {
  try {
    const info = await ytv2(url)
    if (!info.links.mp4["137"]) {
      var qualityHD = 299
    } else {
      var qualityHD = 137
    }
    if (quality === 1080) {
      var res = qualityHD
    } else if (quality === 720) {
      var res = 22
    } else if (quality === 480) {
      var res = 135
    } else if (quality === 360 || quality === undefined || quality === 0) {
      var res = 18
    }
    const { data } = await axios(`https://tomp3.cc/api/ajax/convert`, {
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

async function ytmp4(url, quality) {
  try {
    const info = await yt(url)
    if (!info.links.mp4["137"]) {
      var qualityHD = 299
    } else {
      var qualityHD = 137
    }
    if (quality === 1080) {
      var res = qualityHD
    } else if (quality === 720) {
      var res = 22
    } else if (quality === 480) {
      var res = 135
    } else if (quality === 360 || quality === undefined || quality === 0) {
      var res = 18
    }
    const { data } = await axios(`https://www.y2mate.com/mates/convertV2/index`, {
      method: "post",
      data: {
        vid: info.vid,
        k: info.links.mp4[`${res}`].k
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "user-agent": "WhatsApp/2.5.3"
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

module.exports = { yt, ytv2, ytmp3, ytmp3v2, ytmp4, ytmp4v2 }
