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

document.getElementById('downloadBtn').addEventListener('click', function() {
    const img = document.querySelector('.qr-body img');

    if (img !== null) {
        const imgSrc = img.getAttribute('src');

        // Create a temporary anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = imgSrc;
        downloadLink.download = 'QR_Code.png'; // Set the filename for the downloaded image
        downloadLink.style.display = 'none'; // Hide the anchor element

        // Append the anchor element to the body
        document.body.appendChild(downloadLink);

        // Simulate a click event on the anchor element
        downloadLink.click();

        // Remove the anchor element from the DOM
        document.body.removeChild(downloadLink);
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
