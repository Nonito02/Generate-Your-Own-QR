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
        downloadBtn.setAttribute("href", imgSrc);
        downloadBtn.setAttribute("download", "qrcode.png"); // Set a filename for the downloaded image
    } else {
        const canvas = document.querySelector('canvas');
        const canvasDataUrl = canvas.toDataURL("image/png");
        downloadBtn.setAttribute("href", canvasDataUrl);
        downloadBtn.setAttribute("download", "qrcode.png"); // Set a filename for the downloaded image
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
