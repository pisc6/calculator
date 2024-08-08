var symbol = "+-×÷";
var last = "";
function set_var(e) {
    last = e;
    globalThis.main_output = document.getElementById("maino");
    globalThis.output2 = document.getElementById("output2");
    globalThis.buttons = document.querySelectorAll("button");
}

function display_sign() {
    set_var('+-');
    let e = main_output.innerText
    main_output.innerText = -e
    if (main_output.innerText == 'NaN') {
        main_output.innerText = e
    }
}
function display(num) {
    set_var(num);
    if (main_output.innerText == "0" && num != ".") {
        main_output.innerText = num;
    } else {
        if (!(main_output.innerText.split(".").length - 1 > 0 && num == ".")) {
            if (!symbol.includes(num)) {
                main_output.innerText += num;
            } else if (symbol.includes(main_output.innerText.slice(-1))) {
                main_output.innerText = main_output.innerText.slice(0, -1) + num;
            } else {
                main_output.innerText += num;
            }
        }
    }
}
function display_answer() {
    set_var(last)
    if (last != '=') {
        let e = eval(main_output.innerText.replace("×", "*").replace("÷", "/"));
        output2.innerText = main_output.innerText;
        main_output.innerText = Math.round(eval(output2.innerText.replace("×", "*").replace("÷", "/")) * 10000) / 10000;
    }
    set_var('=');

}
function display_remove(count) {
    set_var('del');
    main_output.innerText = main_output.innerText.slice(0, -count);
    if (main_output.innerText == "" || main_output.innerText == "undefined") {
        main_output.innerText = "0";
    }
}
function display_set(num) {
    main_output.innerText = num;
}
function display_set2(num) {
    output2.innerText = num;
}