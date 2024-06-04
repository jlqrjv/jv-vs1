document.addEventListener("DOMContentLoaded", function() {
    const cpfInput = document.getElementById("cpf");
    const whatsappInput = document.getElementById("whatsapp");
    const errorMessage = document.getElementById("error-message");
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
  
    cpfInput.addEventListener("input", function() {
    let cpf = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.slice(0, 11); // Limita o CPF a 11 dígitos

    // Formata o CPF com pontos e hífen
    cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
    cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o hífen

    cpfInput.value = cpf;

    // Verifica se o CPF possui exatamente 11 dígitos numéricos
    const cpfNumber = cpf.replace(/\D/g, '');
    const cpfValid = cpfNumber.length === 11;

    // Ativa o botão de envio se o CPF estiver completo e válido
    checkValidity();
});

    
  
    whatsappInput.addEventListener("input", function() {
      // Verifica se o número de celular possui 11 dígitos
      checkValidity();
    });
  
    function checkValidity() {
      const cpfValid = cpfInput.value.replace(/\D/g, '').length === 11;
      const whatsappValid = whatsappInput.value.replace(/\D/g, '').length === 11;
  
      // Ativa o botão de envio se ambos os campos estiverem válidos
      submitBtn.disabled = !(cpfValid && whatsappValid);
    }
  
    form.addEventListener("submit", function(event) {
      if (!form.checkValidity()) {
        // Se o formulário não for válido, exibe a mensagem de erro
        errorMessage.style.display = "block";
        event.preventDefault(); // Evita o envio do formulário
      } else {
        // Se o formulário for válido, esconde a mensagem de erro
        errorMessage.style.display = "none";
      }
    });
  });

  <!--BLOQUEIO DE ENVIO SEM PREENCHER-->
      
      document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");
  const nomeInput = document.getElementById("nome");
  const whatsappInput = document.getElementById("whatsapp");
  const cpfInput = document.getElementById("cpf");

  form.addEventListener("input", function() {
    if (nomeInput.validity.valid && whatsappInput.validity.valid && cpfInput.validity.valid) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "disabled");
    }
  });

 
  // BLOQUEIO DE ENVIO SEM PREENCHER

  form.addEventListener("submit", function(event) {
    // Aqui você pode adicionar lógica adicional de envio do formulário, se necessário
    event.preventDefault(); // Evita o envio padrão do formulário
    alert("Formulário enviado!"); // Exemplo de ação após envio do formulário
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('whatsapp');
  input.addEventListener('input', function() {
    var value = input.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
    }
    if (value.length > 6) {
      if (value.length <= 10) {
        value = value.substring(0, 9) + '-' + value.substring(9);
      } else if (value.length <= 11) {
        value = value.substring(0, 10) + '-' + value.substring(10);
      }
    }
    input.value = value;
  });

  // Adicionando evento ao botão de envio
  document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var whatsapp = document.getElementById('whatsapp').value;

    // URL do webhook do n8n
    var webhookUrl = 'https://webhook.empreendimentosonfire.win/webhook/roletaleads';

    // Enviando dados via webhook
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        cpf: cpf,
        whatsapp: whatsapp
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Se a resposta for JSON, parseia o JSON
      } else {
        throw new Error(`Erro ao enviar os dados. Status: ${response.status}`);
      }
    })
    .then(data => {
      console.log("Resposta do servidor:", data); // Log para depuração

      // Ocultar o formulário com transição de fade out
      document.getElementById('texto-personalizado').style.display = 'none';

      // Mostrar barra de carregamento
      var depoisDoForm = document.getElementById('depoisdoform');
      depoisDoForm.style.display = 'block';

      var loadingBar = document.getElementById('loading-bar');
      setTimeout(function() {
        loadingBar.style.width = '100%';
      }, 100); // Adicionando um pequeno atraso para garantir que o elemento está visível antes de iniciar a animação

      // Abrir uma nova aba após a barra de carregamento completar
      setTimeout(function() {
        window.open('https://oficialseuvivasortte.vercel.app/', '_blank');
      }, 3000);
    })
    .catch(error => {
      // Lidar com o erro da requisição
      console.error('Erro capturado:', error);
      alert(`Falha ao enviar os dados: ${error.message}`);
    });
  });
});
 var data = [
      { id: '', type: 'allin', color: '#1062eb', text: 'Perdeu' },
      { id: '', type: 'quiz', color: '#0a3c90', text: '20 Títulos' },
      { id: '', type: 'allin', color: '#1062eb', text: 'Viajem' },
      { id: '', type: 'allin', color: '#0a3c90', text: 'R$1.000' },
      { id: '', color: '#1062eb', text: 'HB20' },
      { id: '', color: '#0a3c90', text: 'Casa' },
      { id: '', color: '#1062eb', text: 'R$500' },
      { id: '', type: 'allin', color: '#0a3c90', text: 'R$15.00' },
      { id: '', type: 'question', color: '#1062eb', text: 'R$200' },
      { id: '', color: '#0a3c90', text: 'R$50' },
      { id: '', color: '#1062eb', text: 'R$100' },
      { id: '', type: 'allin', color: '#0a3c90', text: 'Porsche' }
    ];

    var RouletteWheel = function(el, items){
      this.$el = $(el);
      this.items = items || [];
      this._bis = false;
      this._angle = 0;
      this._index = 0;
      this.options = {
        angleOffset: -90
      }
    }

    _.extend(RouletteWheel.prototype, Backbone.Events);

    RouletteWheel.prototype.render = function(){
      var $spinner = $(this.$el.find('.spinner'));
      var D = this.$el.width();
      var R = D * 0.5;
      var count = this.items.length;
      var delta = 360 / count;

      for(var i = 0; i < count; i++){
        var item = this.items[i];
        var color = item.color;
        var text = item.text;

        var html = [];
        html.push('<div class="item" data-index="' + i + '" data-type="' + item.type + '">');
        html.push('<span class="label"><span class="text">' + text + '</span></span>');
        html.push('</div>');

        var $item = $(html.join(''));

        var borderTopWidth = D + D * 0.0025;
        var deltaInRadians = delta * Math.PI / 180;
        var borderRightWidth = D / (1 / Math.tan(deltaInRadians));

        var r = delta * (count - i) + this.options.angleOffset - delta * 0.5;

        $item.css({
          borderTopWidth: borderTopWidth,
          borderRightWidth: borderRightWidth,
          transform: 'scale(2) rotate(' + r + 'deg)',
          borderTopColor: color
        });

        var textHeight = parseInt((2 * Math.PI * R / count) * 0.5);

        $item.find('.label').css({
          transform: 'translateY(' + (D * -0.25) + 'px) translateX(' + (textHeight * 1.03) + 'px) rotateZ(' + (90 + delta * 0.5) + 'deg)',
          height: textHeight + 'px',
          lineHeight: textHeight + 'px',
          textIndent: (R * 0.1) + 'px'
        });

        $spinner.append($item);
      }

      $spinner.css({
        fontSize: parseInt(R * 0.06) + 'px'
      });
    }

    RouletteWheel.prototype.bindEvents = function(){
      this.$el.find('.button').on('click', $.proxy(this.spin, this));
    }

    var spinner;
    $(window).ready(function(){
      spinner = new RouletteWheel($('.roulette'), data);
      spinner.render();
      spinner.bindEvents();
      
      spinner.on('spin:start', function(r){ console.log('spin start!') });
      spinner.on('spin:end', function(r){
        console.log('spin end! -->' + r._index);
        $('.roulette').fadeOut(1000, function() {
          $('#texto-personalizado').removeClass('hidden');
          
          var confettiScript = document.createElement('script');
          confettiScript.src = "https://www.napoleon.com.br/codigos/confetti.min.js";
          document.body.appendChild(confettiScript);
          
          confettiScript.onload = function() {
            confetti.start();
            setTimeout(function() {
              confetti.stop();
            }, 3000);
          };
        });
      });
    });

    RouletteWheel.prototype.spin = function(){
      var index = this.items.findIndex(item => item.type === 'quiz');
      var count = this.items.length;
      var delta = 360 / count;
      var a = index * delta + ((this._bis) ? 1440 : -1440);

      this._bis = !this._bis;
      this._angle = a;
      this._index = index;

      var $spinner = $(this.$el.find('.spinner'));

      var _onAnimationBegin = function(){
        this.$el.addClass('busy');
        this.trigger('spin:start', this);
      }

      var _onAnimationComplete = function(){
        this.$el.removeClass('busy');
        this.trigger('spin:end', this);
      }

      $spinner.velocity('stop').velocity({
        rotateZ: a + 'deg'
      }, {
        easing: 'easeOutQuint',
        duration: 10700,
        begin: $.proxy(_onAnimationBegin, this),
        complete: $.proxy(_onAnimationComplete, this)
      });
    }
