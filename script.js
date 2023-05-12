function delta(a, b, c) {
    return Math.pow(b, 2) - 4*a*c
}

function bhaskara(a, b, c) {
    let arr = [(-b + Math.sqrt(delta(a, b, c)))/2*a, (-b - Math.sqrt(delta(a, b, c)))/2*a];
    return arr;
}

function calcular() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let x1 = document.getElementById("x1");
    let x2 = document.getElementById("x2");
    let arr = bhaskara(a, b, c);
    if(delta(a, b, c) < 0){
        alert("Delta precisa ser positivo! ");
    }
    else{
        document.getElementById("resultado").style.display="block";
        x1.innerHTML = "X' = "+arr[0].toFixed(2);
        x2.innerHTML = "X'' = "+arr[1].toFixed(2);
    }
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
}