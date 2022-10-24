document.getElementById("menu").onclick = function (c) {
    const elems = document.getElementsByClassName("caption");
    for (const x of elems) {
      if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }
    }
  };
