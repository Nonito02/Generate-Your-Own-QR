const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');



let size = sizes.value;

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener('change', (e) => {
  size = e.target.value;
  isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    let qrImage = document.querySelector('.qr-body img');

    if (qrImage !== null) {
        let imgSrc = qrImage.src;
        downloadBtn.href = imgSrc;
    } else {
        let qrCanvas = document.querySelector('canvas');
        if (qrCanvas !== null) {
            let imgDataUrl = qrCanvas.toDataURL("image/png");
            downloadBtn.href = imgDataUrl;
        } else {
            alert("No QR code to download.");
        }
    }
});



function isEmptyInput() {
//   if (qrText.value.length > 0) {
//     generateQRCode();
//   } else {
//     alert("Enter the text or URL to generate");
//   }
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
