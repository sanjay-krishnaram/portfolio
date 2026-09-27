// Click-to-copy for the email and phone chips in the contact row.
// Falls back silently to normal link behavior if the Clipboard API is unavailable.
document.addEventListener('DOMContentLoaded', function () {
  var copyable = document.querySelectorAll('.contact-row a[href^="mailto:"], .contact-row a[href^="tel:"]');

  copyable.forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (!navigator.clipboard) return; // let the mailto:/tel: link behave normally

      e.preventDefault();
      var value = link.textContent.trim();

      navigator.clipboard.writeText(value).then(function () {
        var original = link.textContent;
        link.textContent = 'Copied ✓';
        setTimeout(function () {
          link.textContent = original;
        }, 1200);
      });
    });
  });
});
