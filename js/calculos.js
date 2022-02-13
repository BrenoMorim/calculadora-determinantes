function matriz2x2(a11, a12, a21, a22) {
    return (a11 * a22) - (a21 * a12);
};

const botao2 = document.querySelector("#calcular2");
botao2.addEventListener("click", (event) => {
    event.preventDefault();
    const matriz2 = document.querySelector("#matriz2");
    
    let a11 = matriz2.a11.value;
    let a12 = matriz2.a12.value;
    let a21 = matriz2.a21.value;
    let a22 = matriz2.a22.value;
    matriz2.querySelector("span#det")
    .textContent = matriz2x2(a11, a12, a21, a22);
});

function matriz3x3(a11, a12, a13, a21, a22, a23, a31, a32, a33) {
return (a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32) - (a13 * a22 * a31 + a12 * a21 * a33 + a11 * a23 * a32)
};

const botao3 = document.querySelector("#calcular3");
botao3.addEventListener("click", (event) => {
    event.preventDefault();
    const matriz3 = document.querySelector("#matriz3");
    
    let a11 = matriz3.a11.value;
    let a12 = matriz3.a12.value;
    let a13 = matriz3.a13.value;
    let a21 = matriz3.a21.value;
    let a22 = matriz3.a22.value;
    let a23 = matriz3.a23.value;
    let a31 = matriz3.a31.value;
    let a32 = matriz3.a32.value;
    let a33 = matriz3.a33.value;

    matriz3.querySelector("span#det")
        .textContent = matriz3x3(
            a11, a12, a13, 
            a21, a22, a23, 
            a31, a32, a33
        );
});

function matriz4x4(a11, a12, a13, a14, a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44) {
    let cof11 = a11 * (matriz3x3(a22, a23, a24, a32, a33, a34, a42, a43, a44));
    let cof12 = a12 * (-1) * (matriz3x3(a21, a23, a24, a31, a33, a34, a41, a43, a44));
    let cof13 = a13 * (matriz3x3(a21, a22, a24, a31, a32, a34, a41, a42, a44));
    let cof14 = a14 * (-1) * (matriz3x3(a21, a22, a23, a31, a32, a33, a41, a42, a43));
    return cof11 + cof12 + cof13 + cof14;
}

const botao4 = document.querySelector("#calcular4");
botao4.addEventListener("click", (event) => {
    event.preventDefault();
    const matriz4 = document.querySelector("#matriz4");
    
    let a11 = matriz4.a11.value;
    let a12 = matriz4.a12.value;
    let a13 = matriz4.a13.value;
    let a14 = matriz4.a14.value;
    let a21 = matriz4.a21.value;
    let a22 = matriz4.a22.value;
    let a23 = matriz4.a23.value;
    let a24 = matriz4.a24.value;
    let a31 = matriz4.a31.value;
    let a32 = matriz4.a32.value;
    let a33 = matriz4.a33.value;
    let a34 = matriz4.a34.value;
    let a41 = matriz4.a41.value;
    let a42 = matriz4.a42.value;
    let a43 = matriz4.a43.value;
    let a44 = matriz4.a44.value;

    matriz4.querySelector("span#det")
        .textContent = matriz4x4(
            a11, a12, a13, a14, 
            a21, a22, a23, a24, 
            a31, a32, a33, a34, 
            a41, a42, a43, a44);
        });

function matriz5x5(a11, a12, a13, a14, a15, a21, a22, a23, a24, a25, a31, a32, a33, a34, a35, a41, a42, a43, a44, a45, a51,
a52, a53, a54, a55) {
    let cof11 = a11 * (matriz4x4(a22, a23, a24, a25, a32, a33, a34, a35, a42, a43, a44, a45, a52, a53, a54, a55))
    let cof12 = a12 * (-1) * (matriz4x4(a21, a23, a24, a25, a31, a33, a34, a35, a41, a43, a44, a45, a51, a53, a54, a55))
    let cof13 = a13 * (matriz4x4(a21, a22, a24, a25, a31, a32, a34, a35, a41, a42, a44, a45, a51, a52, a54, a55))
    let cof14 = a14 * (-1) * (matriz4x4(a21, a22, a23, a25, a31, a32, a33, a35, a41, a42, a43, a45, a51, a52, a53, a55))
    let cof15 = a15 * (matriz4x4(a21, a22, a23, a24, a31, a32, a33, a34, a41, a42, a43, a44, a51, a52, a53, a54))
    return cof11 + cof12 + cof13 + cof14 + cof15;
}

const botao5 = document.querySelector("#calcular5");
botao5.addEventListener("click", (event) => {
    event.preventDefault();
    const matriz5 = document.querySelector("#matriz5");
    
    let a11 = matriz5.a11.value;
    let a12 = matriz5.a12.value;
    let a13 = matriz5.a13.value;
    let a14 = matriz5.a14.value;
    let a15 = matriz5.a15.value;
    let a21 = matriz5.a21.value;
    let a22 = matriz5.a22.value;
    let a23 = matriz5.a23.value;
    let a24 = matriz5.a24.value;
    let a25 = matriz5.a25.value;
    let a31 = matriz5.a31.value;
    let a32 = matriz5.a32.value;
    let a33 = matriz5.a33.value;
    let a34 = matriz5.a34.value;
    let a35 = matriz5.a35.value;
    let a41 = matriz5.a41.value;
    let a42 = matriz5.a42.value;
    let a43 = matriz5.a43.value;
    let a44 = matriz5.a44.value;
    let a45 = matriz5.a45.value;
    let a51 = matriz5.a51.value;
    let a52 = matriz5.a52.value;
    let a53 = matriz5.a53.value;
    let a54 = matriz5.a54.value;
    let a55 = matriz5.a55.value;

    matriz5.querySelector("span#det")
    .textContent = matriz5x5(
        a11, a12, a13, a14, a15, 
        a21, a22, a23, a24, a25, 
        a31, a32, a33, a34, a35, 
        a41, a42, a43, a44, a45, 
        a51, a52, a53, a54, a55);
    });

function matriz6x6(a11, a12, a13, a14, a15, a16, a21, a22, a23, a24, a25, a26, a31, a32, a33, a34, a35, a36, a41, a42, a43,
a44, a45, a46, a51, a52, a53, a54, a55, a56, a61, a62, a63, a64, a65, a66) {
    
    let cof11 = a11 * (
        matriz5x5(a22, a23, a24, a25, a26, a32, a33, a34, a35, a36, a42, a43, a44, a45, a46, a52, a53, a54, a55, a56,
                                a62, a63, a64, a65, a66));
    let cof12 = a12 * (-1) * (
        matriz5x5(a21, a23, a24, a25, a26, a31, a33, a34, a35, a36, a41, a43, a44, a45, a46, a51, a53, a54, a55, a56,
                                a61, a63, a64, a65, a66));
    let cof13 = a13 * (
        matriz5x5(a21, a22, a24, a25, a26, a31, a32, a34, a35, a36, a41, a42, a44, a45, a46, a51, a52, a54, a55, a56,
                                a61, a62, a64, a65, a66));
    let cof14 = a14 * (-1) * (
        matriz5x5(a21, a22, a23, a25, a26, a31, a32, a33, a35, a36, a41, a42, a43, a45, a46, a51, a52, a53, a55, a56,
                                a61, a62, a63, a65, a66));
    let cof15 = a15 * (
        matriz5x5(a21, a22, a23, a24, a26, a31, a32, a33, a34, a36, a41, a42, a43, a44, a46, a51, a52, a53, a54, a56,
                                a61, a62, a63, a64, a66));
    let cof16 = a16 * (-1) * (
        matriz5x5(a21, a22, a23, a24, a25, a31, a32, a33, a34, a35, a41, a42, a43, a44, a45, a51, a52, a53, a54, a55,
                                a61, a62, a63, a64, a65));
    return cof11 + cof12 + cof13 + cof14 + cof15 + cof16;
}

const botao6 = document.querySelector("#calcular6");
botao6.addEventListener("click", (event) => {
    event.preventDefault();
    const matriz6 = document.querySelector("#matriz6");
    
    let a11 = matriz6.a11.value;
    let a12 = matriz6.a12.value;
    let a13 = matriz6.a13.value;
    let a14 = matriz6.a14.value;
    let a15 = matriz6.a15.value;
    let a16 = matriz6.a16.value;
    let a21 = matriz6.a21.value;
    let a22 = matriz6.a22.value;
    let a23 = matriz6.a23.value;
    let a24 = matriz6.a24.value;
    let a25 = matriz6.a25.value;
    let a26 = matriz6.a26.value;
    let a31 = matriz6.a31.value;
    let a32 = matriz6.a32.value;
    let a33 = matriz6.a33.value;
    let a34 = matriz6.a34.value;
    let a35 = matriz6.a35.value;
    let a36 = matriz6.a36.value;
    let a41 = matriz6.a41.value;
    let a42 = matriz6.a42.value;
    let a43 = matriz6.a43.value;
    let a44 = matriz6.a44.value;
    let a45 = matriz6.a45.value;
    let a46 = matriz6.a46.value;
    let a51 = matriz6.a51.value;
    let a52 = matriz6.a52.value;
    let a53 = matriz6.a53.value;
    let a54 = matriz6.a54.value;
    let a55 = matriz6.a55.value;
    let a56 = matriz6.a56.value;
    let a61 = matriz6.a61.value;
    let a62 = matriz6.a62.value;
    let a63 = matriz6.a63.value;
    let a64 = matriz6.a64.value;
    let a65 = matriz6.a65.value;
    let a66 = matriz6.a66.value;

    matriz6.querySelector("span#det")
        .textContent = matriz6x6(
            a11, a12, a13, a14, a15, a16, 
            a21, a22, a23, a24, a25, a26, 
            a31, a32, a33, a34, a35, a36, 
            a41, a42, a43, a44, a45, a46, 
            a51, a52, a53, a54, a55, a56, 
            a61, a62, a63, a64, a65, a66);
        });
