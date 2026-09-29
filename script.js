// Sari Laundry Coin Express 24 Jam - Balanced Script

document.addEventListener("DOMContentLoaded", () => {
  // Copy Address Functionality
  const copyAddressBtn = document.getElementById("copyAddressBtn");
  const fullAddressText = document.getElementById("fullAddressText");
  const copyIcon = document.getElementById("copyIcon");
  const copyText = document.getElementById("copyText");
  const toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove(
      "-translate-y-16",
      "opacity-0",
      "pointer-events-none",
    );
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
      toast.classList.remove("translate-y-0", "opacity-100");
      toast.classList.add(
        "-translate-y-16",
        "opacity-0",
        "pointer-events-none",
      );
    }, 2500);
  }

  if (copyAddressBtn && fullAddressText) {
    copyAddressBtn.addEventListener("click", async () => {
      const textToCopy = fullAddressText.textContent.trim();
      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch (err) {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      copyIcon.textContent = "✅";
      copyText.textContent = "Tersalin!";
      showToast("✓ Alamat berhasil disalin ke clipboard");

      setTimeout(() => {
        copyIcon.textContent = "📋";
        copyText.textContent = "Salin Alamat";
      }, 2000);
    });
  }
});
