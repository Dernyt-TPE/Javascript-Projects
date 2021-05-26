// Character Count
let textbox = document.getElementById("textarea");
textbox.addEventListener('input', function () {
    var text = this.value;
    let char = text.length;
    document.getElementById("character").innerHTML = char;

    // Word Count

    text = text.trim();

    //passing regex in split to split for both - whitespace and new line
    let words = text.split(/[\s\n]/);


    let list = words.filter(function (elm) {
        return elm != "";
    });


    document.getElementById("word").innerHTML = words.length;

    // Paragraph Count

    let para = text.split("\n");

    document.getElementById("para").innerHTML = para.length;

});