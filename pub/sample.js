"use strict";
function interest() {
    const p = document.getElementById('num1');
    const r = document.getElementById('num2');
    const s = document.getElementById('num3');
    const si = (parseFloat(p.value) * parseFloat(r.value) * parseFloat(s.value)) / 100;
    console.log(si);
}
