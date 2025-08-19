// Selecionar elementos
const tipoBemSelect = document.getElementById('tipoBem');
const valorSelect = document.getElementById('valor');
const nomeInput = document.getElementById('nome');
const whatsappInput = document.getElementById('whatsapp');
const investimentoInput = document.getElementById('investimento');
const simuladorForm = document.getElementById('simuladorForm');
const botao = document.getElementById('simularBtn');

// ======= FILTRAR VALORES POR TIPO =======
tipoBemSelect.addEventListener('change', () => {
  const tipo = tipoBemSelect.value === 'auto' ? 'auto' : 'imovel';
  for (let i = 0; i < valorSelect.options.length; i++) {
    const option = valorSelect.options[i];
    option.style.display = option.className === tipo || option.value === "" ? '' : 'none';
  }
  valorSelect.value = "";
});

// ======= MÁSCARA WHATSAPP =======
whatsappInput.addEventListener('input', function(e){
  let x = e.target.value.replace(/\D/g,'').slice(0,11);
  if(x.length > 2) x = '('+x.slice(0,2)+') '+x.slice(2);
  if(x.length > 9) x = x.slice(0,10)+'-'+x.slice(10);
  e.target.value = x;
});

// ======= PISCAR VERDE =======
function piscaVerdeCampo(campo) {
  campo.classList.add('campo-verde');
  setTimeout(() => campo.classList.remove('campo-verde'), 800);
}

nomeInput.addEventListener('blur', () => {
  if(nomeInput.value.trim() !== '') piscaVerdeCampo(nomeInput);
});
whatsappInput.addEventListener('blur', () => {
  if(whatsappInput.value.trim() !== '') piscaVerdeCampo(whatsappInput);
});

// ======= CONFIGURAÇÃO DO WHATSAPP =======
const numeroWhatsApp = "554196513348"; // sem "+" nem espaços

// ======= ENVIO AUTOMÁTICO PARA WHATSAPP =======
simuladorForm.addEventListener('submit', function(e){
  e.preventDefault();

  let nome = nomeInput.value.trim();
  let tipoBem = tipoBemSelect.options[tipoBemSelect.selectedIndex].text;
  let valor = valorSelect.value;
  let investimento = investimentoInput.value;

  // Mensagem personalizada
  let mensagem = `Olá! Meu nome é ${nome}, Quero simular um consórcio de ${tipoBem} no valor de ${valor}, Pretendo investir R$ ${investimento} por mês.`;

  // Cria link seguro
  let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp
  window.open(url, '_blank');
});

// ======= ESTILOS DO BOTÃO =======
botao.style.color = 'white';
botao.style.padding = '15px 30px';
botao.style.fontSize = '18px';
botao.style.border = 'none';
botao.style.borderRadius = '10px';
botao.style.cursor = 'pointer';
botao.style.transition = 'background 2s ease, transform 0.3s ease';

// ======= ANIMAÇÃO SUAVE =======
const cores = ["#e60000", "#ff3333", "#2c2c2c", "#000000"];

// Função para embaralhar cores
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Aplica gradiente aleatório
function aplicarGradiente() {
  const coresAleatorias = shuffle([...cores]).slice(0, 2);
  botao.style.background = `linear-gradient(270deg, ${coresAleatorias[0]}, ${coresAleatorias[1]})`;
  botao.style.backgroundSize = "200% 200%";
}

// Inicial
aplicarGradiente();

// Aplica ao clicar
botao.addEventListener("click", aplicarGradiente);