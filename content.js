let isModalProcessed = false;

function closeModal() {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (chrome.runtime.lastError || !enabled || isModalProcessed) return;

    const modal = document.querySelector("#myModal");
    if (!modal || getComputedStyle(modal).display === "none") return;

    const checkbox = document.querySelector("#Confirmation");
    const button = document.querySelector("#Submit");

    if (checkbox && button) {
      if (!checkbox.checked) {
        checkbox.checked = true;
        button.disabled = false;
      }

      if (!button.disabled) {
        button.click();
        setTimeout(() => {
          if (getComputedStyle(modal).display === "none") {
            clearInterval(intervalId);
            isModalProcessed = true;
          }
        }, 1000);
      }
    }
  });
}
const intervalId = setInterval(closeModal, 1000);
