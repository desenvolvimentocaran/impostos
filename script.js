function calcularImpostos() {
    var valorNota = parseFloat(document.getElementById("valorNota").value);
    
    // Taxas dos impostos em porcentagem
    var PIS = 0.0065; // 0,65% de PIS sobre o valor da nota fiscal
    var COFINS = 0.03; // 3,00% de COFINS sobre o valor da nota fiscal
    var IRPJ = 0.015; // 1,5% de IRPJ sobre o valor da nota fiscal
    var CSLL = 0.01; // 1,00% de CSLL sobre o valor da nota fiscal

    // Cálculos dos impostos
    var impostoPIS = valorNota * PIS;
    var impostoCOFINS = valorNota * COFINS;
    var impostoIRPJ = valorNota * IRPJ;
    var impostoCSLL = valorNota * CSLL;
    var Valorliquido = valorNota - impostoPIS - impostoCOFINS - impostoIRPJ - impostoCSLL; // Pega o valor bruto da nota fiscal e diminui as retenções

    // Exibição dos resultados
    var resultado = "Impostos:<br>";
    resultado += "PIS: R$ " + impostoPIS.toFixed(2) + "<br>";
    resultado += "COFINS: R$ " + impostoCOFINS.toFixed(2) + "<br>";
    resultado += "IRPJ: R$ " + impostoIRPJ.toFixed(2) + "<br>";
    resultado += "CSLL: R$ " + impostoCSLL.toFixed(2) + "<br>";
    resultado += "Valor liquido: R$" + Valorliquido.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
}
