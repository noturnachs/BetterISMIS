document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("enableAutomation");

  chrome.storage.sync.get(["enabled"], (result) => {
    checkbox.checked = result.enabled || false;
  });

  checkbox.addEventListener("change", () => {
    const isEnabled = checkbox.checked;
    chrome.storage.sync.set({ enabled: isEnabled });
  });
});
