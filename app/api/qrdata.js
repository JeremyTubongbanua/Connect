const QRCode = require('qrcode');

link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";  // test link but needs to link to the app
const QrGenerate = async text => { // async function to generate qr
    try {
        const qrFileName = 'qrcode'; // filename variable for associated link
        const qr = await QRCode.toFile('../assets/'+ qrFileName + '.png',text) // creates a png file to app/assets directory
        console.log(qr); // returns log
    } catch(error){
        console.error(error); // returns error
    }
}

QrGenerate(link); // create qr code