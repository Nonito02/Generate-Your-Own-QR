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
  const qrCodeImage = document.querySelector('.qr-body img');
  
  if (qrCodeImage) {
    const imgSrc = qrCodeImage.getAttribute('src');
    downloadQRCode(imgSrc);
  } else {
    alert("QR code image not found.");
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

function downloadQRCode(imgSrc) {
  // Create a blob from the image source
  fetch(imgSrc)
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'qrcode.png';
      link.click();

      alert('QR code downloaded successfully!');
    })
    .catch((error) => {
      console.error("Error while creating blob:", error);
      alert('Failed to download QR code.');
    });
}
