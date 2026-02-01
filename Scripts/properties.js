function updateSizeProp() {
  const referLength =
    window.innerHeight > window.innerWidth
      ? window.innerHeight
      : window.innerWidth;

  const sizeprop = [
    0.15,
    0.02
  ];
  for (let i = 0; i < sizeprop.length; i++) {
    var ids = "--sp" + (i + 1);
    document.documentElement.style.setProperty(
      ids,
      sizeprop[i] * referLength + "px"
    );
  }
}
updateSizeProp();

function updateFontSizes() {
  const refLength = window.innerWidth;
  
  // Responsive font sizes with mobile-first approach
  let fontSizes;
  
  if (refLength <= 360) {
    // Very small mobile phones
    fontSizes = [
      0.08,    // fs1 - very large headings
      0.065,   // fs2 - large headings
      0.055,   // fs3 - medium headings
      0.045,   // fs4 - small headings
      0.038,   // fs5 - subheadings
      0.033,   // fs6 - body text
      0.028,   // fs7 - small text
    ];
  } else if (refLength <= 480) {
    // Mobile phones
    fontSizes = [
      0.09,    // fs1 - very large headings
      0.075,   // fs2 - large headings
      0.06,    // fs3 - medium headings
      0.05,    // fs4 - small headings
      0.042,   // fs5 - subheadings
      0.036,   // fs6 - body text
      0.03,    // fs7 - small text
    ];
  } else if (refLength <= 768) {
    // Tablets
    fontSizes = [
      0.11,
      0.088,
      0.07,
      0.055,
      0.046,
      0.039,
      0.032,
    ];
  } else if (refLength <= 1024) {
    // Small laptops
    fontSizes = [
      0.13,
      0.10,
      0.08,
      0.06,
      0.049,
      0.041,
      0.034,
    ];
  } else if (refLength <= 1440) {
    // Standard laptops
    fontSizes = [
      0.15,
      0.11,
      0.09,
      0.065,
      0.051,
      0.042,
      0.035,
    ];
  } else {
    // Desktop and larger (1440px+)
    fontSizes = [
      0.16,
      0.12,
      0.10,
      0.068,
      0.053,
      0.043,
      0.036,
    ];
  }
  
  for (let i = 0; i < fontSizes.length; i++) {
    var id = "--fs" + (i + 1);
    document.documentElement.style.setProperty(
      id,
      fontSizes[i] * refLength + "px"
    );
  }
}
updateFontSizes();
window.addEventListener("resize", function () {
  updateFontSizes();
  updateSizeProp();
});
