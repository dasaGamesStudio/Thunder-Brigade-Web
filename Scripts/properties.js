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

  const fontSizes = [
    0.25 / 1.55,
    0.2 / 1.55,
    0.15 / 1.55,
    0.1 / 1.55,
    0.05 / 1.55,
    0.03 / 1.55,
    0.02 / 1.55,
  ];
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
