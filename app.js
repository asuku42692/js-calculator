
function print(value) {

    let input = document.getElementById("input");
    
    input.value += value;

    if (input.value.includes("c")) {
        input.value = " ";
    }

}


function compute() {
    let v = document.getElementById("input").value;
    let result = eval(v);
    document.getElementById("input").value = result;
}
