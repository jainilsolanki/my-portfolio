export function downloadPdf() {
  var link = document.createElement("a");
  link.href = "/JAINIL SOLANKI.pdf";
  link.download = "JAINIL SOLANKI.pdf";
  link.click();
  // window.open("/resume.pdf", "_blank");
}

export function detectMobile() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
