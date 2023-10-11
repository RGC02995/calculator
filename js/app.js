addEventListener("DOMContentLoaded", (e) => {
    let num0 = document.querySelector("#num0");
    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let num3 = document.querySelector("#num3");
    let num4 = document.querySelector("#num4");
    let num5 = document.querySelector("#num5");
    let num6 = document.querySelector("#num6");
    let num7 = document.querySelector("#num7");
    let num8 = document.querySelector("#num8");
    let num9 = document.querySelector("#num9");
    let percentaje = document.querySelector("#percentaje");
    let divide = document.querySelector("#divide");
    let multiply = document.querySelector("#multiply");
    let subtract = document.querySelector("#subtract");
    let adittion = document.querySelector("#adittion");
    let coma = document.querySelector("#coma");
    let resolve = document.querySelector("#calc");
    
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
    let signal = "";

    //SOLUCION

    resolve.addEventListener('click', (e) => {
        resultado.innerHTML = eval(resultado.innerHTML);
        console.log(resultado.innerHTML);
    });

    //NUMEROS CON COMA

    coma.addEventListener('click', (e) => {
        signal = ",";
        resultado.innerHTML = `${resultado.innerHTML},`;
    });


    //OPERACIONES MATEMATICAS

    adittion.addEventListener('click', (e) => {
        signal = '+';
        resultado.innerHTML = `${Number(resultado.innerHTML)} ${signal} `;
    });

    subtract.addEventListener('click', (e) => {
        signal = '-';
        resultado.innerHTML = `${Number(resultado.innerHTML)} ${signal} `;
    });

    multiply.addEventListener('click', (e) => {
        signal = '*';
        resultado.innerHTML = `${Number(resultado.innerHTML)} ${signal} `;
    });

    divide.addEventListener('click', (e) => {
        signal = '/';
        resultado.innerHTML = `${Number(resultado.innerHTML)} ${signal} `;
    });
    
    percentaje.addEventListener('click', (e) => {
        signal = '%';
        resultado.innerHTML = `${Number(resultado.innerHTML)} ${signal} `;

    });



    //BORRAR

    erase.addEventListener('click', (e) => {
        resultado.innerHTML = "";
    });
    


    //NUMEROS

    num1.addEventListener('click', (e) => {
        resultado.innerHTML  += 1;
    });    

    num2.addEventListener('click', (e) => {
        resultado.innerHTML  += 2;
    }); 

    num3.addEventListener('click', (e) => {
        resultado.innerHTML  += 3;
    }); 

    num4.addEventListener('click', (e) => {
        resultado.innerHTML  += 4;
    }); 

    num5.addEventListener('click', (e) => {
        resultado.innerHTML  += 5;
    }); 

    num6.addEventListener('click', (e) => {
        resultado.innerHTML  += 6;
    }); 

    num7.addEventListener('click', (e) => {
        resultado.innerHTML  += 7;
    }); 

    num8.addEventListener('click', (e) => {
        resultado.innerHTML  += 8;
    }); 

    num9.addEventListener('click', (e) => {
        resultado.innerHTML  += 9;
    }); 

    num0.addEventListener('click', (e) => {
        resultado.innerHTML  += 0;
    }); 
});
