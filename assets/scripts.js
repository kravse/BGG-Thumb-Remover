function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  chrome.storage.sync.get(['disabled'], (result) => {
    chrome.storage.sync.set({ 'disabled': !result.disabled });
    document.getElementById('toggle').classList.toggle('disabled');
    chrome.tabs.reload();
  })
  return false;
}

var form = document.getElementById('form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}