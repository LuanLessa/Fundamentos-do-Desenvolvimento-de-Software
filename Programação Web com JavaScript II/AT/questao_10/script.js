let frase = "Nesse momento, o BitCoin está em R$ 530.085,52. Loucura, né?";
// Loucura ta esse AT, não precisava disso 530->.<-085->,<-52 :'(

let precoBitcoin = parseFloat(frase.match(/[\d.]+,[\d]+/)[0].replace('.', '').replace(',', '.'));

let precoDividido = (precoBitcoin / 3).toFixed(2);

console.log(precoDividido);
