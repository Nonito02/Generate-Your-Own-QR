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
        const link = document.createElement('a');
        link.href = imgSrc;
        link.download = 'qrcode.png';
        link.target = '_blank'; // Add this line for mobile compatibility
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        const canvas = document.querySelector('canvas');
        const canvasDataUrl = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = canvasDataUrl;
        link.download = 'qrcode.png';
        link.target = '_blank'; // Add this line for mobile compatibility
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
