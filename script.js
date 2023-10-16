const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
const imgSrc = 'https://example.com/path/to/qrcode.png';


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
    const img = document.querySelector('.qr-body img');

    if (img !== null) {
        const imgSrc = img.getAttribute('src');

        // Create an anchor element for downloading the image
        const downloadLink = document.createElement('a');
        downloadLink.href = imgSrc;
        downloadLink.download = 'qrcode.png'; // Set the filename for the downloaded image
        downloadLink.click();
    } else {
        const canvas = document.querySelector('canvas');
        const canvasDataUrl = canvas.toDataURL("image/png");

        // Create an anchor element for downloading the image
        const downloadLink = document.createElement('a');
        downloadLink.href = canvasDataUrl;
        downloadLink.download = 'qrcode.png'; // Set the filename for the downloaded image
        downloadLink.click();
    }
});



function isEmptyInput() {
  if (qrText.value.length > 0) {
    generateQRCode();
  } else {
    alert("Enter the text or URL to generate");
  }
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
