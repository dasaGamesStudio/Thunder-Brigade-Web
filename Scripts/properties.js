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
  
  if (refLength <= 480) {
    // Mobile phones
    fontSizes = [
      0.10,    // fs1 - very large headings
      0.08,    // fs2 - large headings
      0.06,    // fs3 - medium headings
      0.05,    // fs4 - small headings
      0.04,    // fs5 - subheadings
      0.035,   // fs6 - body text
      0.03,    // fs7 - small text
    ];
  } else if (refLength <= 768) {
    // Tablets
    fontSizes = [
      0.12,
      0.09,
      0.07,
      0.055,
      0.045,
      0.038,
      0.032,
    ];
  } else if (refLength <= 1024) {
    // Small laptops
    fontSizes = [
      0.14,
      0.10,
      0.08,
      0.06,
      0.048,
      0.04,
      0.034,
    ];
  } else {
    // Desktop and larger
    fontSizes = [
      0.16,
      0.12,
      0.10,
      0.065,
      0.05,
      0.04,
      0.035,
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
