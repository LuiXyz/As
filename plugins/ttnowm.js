//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai teks \n\nContoh : ${usedPrefix + command} https://vm.tiktok.com/ZSd4HKgSw/?k=1`
    let res = await fetch(`https://api-kaysa.herokuapp.com/api/tiktok?url=${text}&apikey=KaysaS`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.medias[1].url, 'tt.mp4', `Title : ${json.title}`, m)
}
handler.help = ['tiktoknowm *link*']
handler.tags = ['downloader']
handler.command = /^tiktoknowm$/i

handler.register = true
handler.limit = 2

module.exports = handler