const elemento = document.getElementById("abot");
const abot = "Olá! Meu nome é João, tenho 17 anos, sou de Belo Horizonte e um estudante de TI. Minha paixão por tecnologia começou desde cedo, e desde então venho aprimorando minhas habilidades em diversas linguagens de programação,bancos de dados, ferramentas de desenvolvimento e outras tecnologias relacionadas a desenvolvimento web e banco de dados.";
const delay = 27; // 100 milissegundos de atraso entre cada caractere
digitarTexto(abot, elemento, delay);



function digitarTexto(abot, elemento, delay) {
    let i = 0;
    setInterval(() => {
      if (i <= abot.length) {
        elemento.innerHTML = abot.substring(0, i);
        i++;
      }
    }, delay);
}


const tecn = document.getElementById("tec");
const mytec = "Meus Conhecimentos";
const atraso = 50;

escreverTitle(mytec, tecn, atraso);


function escreverTitle(mytec, tecn, atraso) {
  let i = 0;
  setInterval(() => {
    if (i <= abot.length) {
      tecn.innerHTML = mytec.substring(0, i);
      i++;
    }
  }, delay);
}