document
  .getElementById("quadraticForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
      document.getElementById("result").innerText = "Nhập sai";
      return;
    }

    let result;

    if (a === 0) {
      if (b === 0) {
        result = "Phương trình có vô số nghiệm.";
      } else {
        result = "Phương trình vô nghiệm.";
      }
    } else {
      const x = -b / a;
      result = "Nghiệm của phương trình là: x = " + x;
    }

    document.getElementById("result").innerText = result;
  });
