let fonts = [
    "ArialEmbroidery",
    "Courier New",
    "Gill Sans",
    "Lucida Sans",
    "Segoe UI",
    "Times New Roman",
    "Trebuchet MS",
    "Helvetica",
    "Times New Roman",
    "Verdana",
    "Arial"
]

document.addEventListener("DOMContentLoaded", ()=>{
    const select = document.getElementById("typefont");
    for (let i = 0; i < fonts.length; i++) {
        let opt = document.createElement("option");
        opt.innerHTML = fonts[i];
        opt.value = fonts[i];
        select.appendChild(opt);
    }
    document.getElementById("typefont").childNodes.forEach((c)=>{
        if (c.nodeType === 1) {
            c.style.fontFamily = c.value;
        }
    })
    const newtypefont = document.getElementById("typefont").value;
    document.getElementById("typefont").style.fontFamily = newtypefont;
    const text = document.getElementById("name").value;
    if (text.length == 0) {
        document.querySelector(".namevisualized").innerHTML = newtypefont;
    }
    document.querySelector(".namevisualized").style.fontFamily = newtypefont;
})

document.getElementById("name").addEventListener("keyup", (e)=>{
    const val = document.getElementById("name").value;
    document.querySelector(".namevisualized").innerHTML = val;

    let text = document.getElementById("name").value;
    if (text.length == 0) {
        document.getElementById("typefont").childNodes.forEach((c)=>{
            if (c.nodeType === 1) {
                c.style.fontFamily = c.value;
                c.innerHTML = c.value;
            }
        })
        const newtypefont = document.getElementById("typefont").value;
        document.querySelector(".namevisualized").innerHTML = newtypefont;
    } else {
        document.getElementById("typefont").childNodes.forEach((c)=>{
            if (c.nodeType === 1) {
                c.innerHTML = text;
                if (c.value != 'regular') {
                    c.style.fontStyle = c.value;
                }
            }
        })
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    const element = document.querySelector(".colorpickertapis");
    const color = getComputedStyle(element).getPropertyValue("--color");
    document.querySelector(".namevisualizedcontainer").style.backgroundColor = color;
})

document.querySelectorAll(".colorpicker").forEach((c, i) => {
    c.addEventListener("click", ()=>{
        document.querySelectorAll(".colorpicker").forEach((z, e)=>{
            z.classList.remove("clickedcolor");
        })
        c.classList.add("clickedcolor");
        let color = getComputedStyle(c).getPropertyValue("--color");
        document.querySelector(".namevisualized").style.color = color;
    })
})

document.querySelectorAll(".colorpickertapis").forEach((c, i) => {
    c.addEventListener("click", ()=>{
        document.querySelectorAll(".colorpickertapis").forEach((z, e)=>{
            z.classList.remove("clickedcolor");
        })
        c.classList.add("clickedcolor");
        let color = getComputedStyle(c).getPropertyValue("--color");
        document.querySelector(".namevisualizedcontainer").style.backgroundColor = color;
    })
})

document.getElementById("typefont").addEventListener("change", (e)=>{
    const newtypefont = document.getElementById("typefont").value;
    document.getElementById("typefont").style.fontFamily = newtypefont;
    const text = document.getElementById("name").value;
    if (text.length == 0) {
        document.querySelector(".namevisualized").innerHTML = newtypefont;
    }
    document.querySelector(".namevisualized").style.fontFamily = newtypefont;
})

function getReadableBackgroundColor(textColor) {
    textColor = normalizeHex(textColor);

    const luminance = calculateLuminance(textColor);

    if (luminance > 0.5) {
        return '#FFFFFF';
    } else {
        return '#333333';
    }
}

function normalizeHex(color) {
    return color.replace('#', '').padEnd(6, '0').substring(0, 6);
}

function calculateLuminance(hexColor) {
    const r = parseInt(hexColor.substring(0, 2), 16) / 255;
    const g = parseInt(hexColor.substring(2, 4), 16) / 255;
    const b = parseInt(hexColor.substring(4, 6), 16) / 255;

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminance;
}