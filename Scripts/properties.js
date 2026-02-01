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
  const viewportWidth = window.innerWidth;
  
  // Fixed font sizes in pixels - MUCH more predictable and stable
  let fontSizes;
  
  if (viewportWidth <= 360) {
    // Very small mobile phones
    fontSizes = [
      28,   // fs1 - very large headings
      24,   // fs2 - large headings  
      20,   // fs3 - medium headings
      16,   // fs4 - small headings
      14,   // fs5 - subheadings
      12,   // fs6 - body text
      10,   // fs7 - small text
    ];
  } else if (viewportWidth <= 480) {
    // Mobile phones
    fontSizes = [
      32,   // fs1
      28,   // fs2
      24,   // fs3
      18,   // fs4
      15,   // fs5
      13,   // fs6
      11,   // fs7
    ];
  } else if (viewportWidth <= 768) {
    // Tablets
    fontSizes = [
      48,   // fs1
      36,   // fs2
      30,   // fs3
      22,   // fs4
      18,   // fs5
      15,   // fs6
      13,   // fs7
    ];
  } else if (viewportWidth <= 1024) {
    // Small laptops
    fontSizes = [
      56,   // fs1
      42,   // fs2
      36,   // fs3
      26,   // fs4
      20,   // fs5
      16,   // fs6
      14,   // fs7
    ];
  } else if (viewportWidth <= 1440) {
    // Standard laptops
    fontSizes = [
      64,   // fs1
      48,   // fs2
      42,   // fs3
      28,   // fs4
      22,   // fs5
      17,   // fs6
      14,   // fs7
    ];
  } else {
    // Desktop and larger (1440px+) - CAPPED to prevent huge text
    fontSizes = [
      72,   // fs1 - max
      54,   // fs2 - max
      48,   // fs3 - max
      32,   // fs4 - max
      24,   // fs5 - max
      18,   // fs6 - max
      15,   // fs7 - max
    ];
  }
  
  for (let i = 0; i < fontSizes.length; i++) {
    var id = "--fs" + (i + 1);
    document.documentElement.style.setProperty(
      id,
      fontSizes[i] + "px"
    );
  }
}
updateFontSizes();
window.addEventListener("resize", function () {
  updateFontSizes();
  updateSizeProp();
});
