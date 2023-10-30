document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("read").addEventListener("click", function() {
      chrome.tabs.executeScript({
        code: "document.body.innerText"
      }, function(selection) {
        if (chrome.runtime.lastError) {
          alert("An error occurred: " + chrome.runtime.lastError.message);
        } else {
          var textContent = selection[0];
          if (textContent.includes("Clearance") || textContent.includes("Sponsorship")) {
            alert("No sponsorship");
          } else if (textContent.includes("Contract")) { 
            alert("Contract Position, No H1B Sponsorship");
          } else {
            alert("Sponsorship Available");
          }
        }
      });
    });
  });
  