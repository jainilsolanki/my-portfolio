export function downloadPdf() {
  var link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "JAINIL SOLANKI.pdf";
  link.click();
  // window.open("/resume.pdf", "_blank");
}
