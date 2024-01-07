chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.type === "extractReference") {
    const author =
      document.querySelector('meta[name="author"]')?.content ||
      "Unknown Author";

    const title = document.title;
    const url = window.location.href;
    const accessDate = new Date().toLocaleDateString();

    console.log(author, title, url, accessDate);

    const formattedReference = `${author}, ${title}, url{${url}}, 閲覧日: ${accessDate}`;

    copyToClipboard(formattedReference);
    alert("Reference copied to clipboard!" + "\n" + formattedReference);
  }
});

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}
