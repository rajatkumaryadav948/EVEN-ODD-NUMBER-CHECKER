function check() {
    var num = parseInt(document.getElementById("R1").value);
    if (num % 2 === 0) {
        document.getElementById("R2").textContent = `${num} is even`;
        document.getElementById("R2").style.fontWeight = "bolder";
        document.getElementById("R2").style.color = "yellow";
    }
    else {
        document.getElementById("R2").textContent = `${num} is odd`;
        document.getElementById("R2").style.color = "yellow";

    }
}