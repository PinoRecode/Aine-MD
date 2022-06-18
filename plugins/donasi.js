let handler = async m => m.reply(`
╭─「 Gopay • Pulsa 」
│ •  [Scan QR = https://telegra.ph/file/6439ec9f133065305dde2.jpg]
│ •  [0889-5377-665]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
