const QRCode = require('qrcode');

const QrGenerate = async text => {
    try {
        console.log(await QRCode.toDataURL(text));
    } catch(error){
        console.error(error);
    }
}
link = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // test link
QrGenerate(link); // create qr code