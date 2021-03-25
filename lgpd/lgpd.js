/**
 * Cookies LGPD
 */

// Cria o cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Recupera o Cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function openLgpd() {
  // Inicia após o carregamente da página
  window.onload = function () {
    // Adiciona os estilos ao body
    document.body.innerHTML +=
      "<style>" +
      css_lgpd +
      css_lgpd_show +
      css_lgpd_btn +
      css_lgpd_a +
      css_lgpd_p +
      "</style>";

    // Adiciona o elemento lgpd ao body
    document.body.innerHTML +=
      "<lgpd><div><p>" +
      texto_lgpd +
      "<a href='#!'>Politica de Privacidade</a></p></div><button>Aceitar</button></lgpd>";

    // Seleciona o elemento lgpd
    const el_lgpd = document.querySelector("lgpd");

    // Seleciona o elemento button
    const el_lgpd_btn = document.querySelector("lgpd > button");

    // Recupera a url atual que esta sendo acessada
    const loc = window.location;
    const urlinsereFiial = loc.protocol + "//" + loc.hostname + "/";
    // Seleciona o elemento a
    const el_lgpd_a = document.querySelector("lgpd > div > p > a");
    // Formata o link de destino para o elemento a
    el_lgpd_a.href = urlinsereFiial + destino_politica_lgpd;

    // Adiciona a classe lgpd_show ao banner para o efeito de entrada
    // inicia 2 segudos após o carregamento da página
    setTimeout(function () {
      el_lgpd.classList.add("lgpd_show");
    }, 2000);

    // Ação do botão "Aceito" do banner
    el_lgpd_btn.addEventListener("click", function (e) {
      e.preventDefault();
      // Cria o cookie
      setCookie(cname_lgpd, cvalue_lgpd, 30);
      // Remove a classe lgpd_show do banner para o efeito de saída
      el_lgpd.classList.remove("lgpd_show");
    });
  };
}

// Verifica se o Cookie existe e abre o Banner
function checkCookie() {
  const lgpd = getCookie(cname_lgpd);
  if (lgpd === null) {
    openLgpd();
  }
}

// Informe o nome do cookie quee será gerado
const cname_lgpd = "lgpd_cookie";

// Informe o valor para o cookie gerado
const cvalue_lgpd = "confirmado";

// Informe o texto que irá aparecer no banner
const texto_lgpd = "<strong>Nome da Empresa:</strong> a gente usa cookies para melhorar a sua experiência no site. Ao continuar navegando, você concorda com a nossa ";

// link para a política de privacidade
// A url absoluta do dominio acessado será preenchida automaticamente
// informe apenas o caminho de desitino
const destino_politica_lgpd = "politica-de-privacidade";

/**
 * Estilos que serão atribuidos ao banner
 */
//===========================================================
const css_lgpd =
  "\
lgpd{\
    position: fixed;\
    z-index: 99999999;\
    max-width: 1230px;\
    transition: .3s ease-in-out;\
    background: #fff;\
    bottom: 25px;\
    left: 10px;\
    right: 10px;\
    padding: 20px;\
    box-shadow: 0 0 10px #aaa;\
    border-radius: 12px;\
    display: -webkit-flex;\
    display: -ms-flexbox;\
    display: flex;\
    -webkit-align-items: center;\
    -ms-flex-align: center;\
    justify-content: space-between;\
    align-items: center;\
    -webkit-transform: translateY(300px);\
    -ms-transform: translateY(300px);\
    transform: translateY(300px);\
    margin: 0 auto;\
    font-family: Hind Madurai,Arial,sans-serif;\
}\
";
//===========================================================
const css_lgpd_show =
  "\
.lgpd_show{\
    transition: .3s ease-in-out;\
    -webkit-transform: translateY(0px);\
    -ms-transform: translateY(0px);\
    transform: translateY(0px);\
}\
";
//===========================================================
const css_lgpd_btn =
  "\
  lgpd > button{\
    background: #1e1e1e 0 0 no-repeat padding-box;\
    color: #fff;\
    border: 1px solid #c3121c;\
    border-radius: 8px;\
    text-align: center;\
    font-size: 16px;\
    padding: 10px 20px;\
    letter-spacing: 0;\
    margin-left: 15px;\
    cursor: pointer;\
    transition: .3s ease-in-out !important;\
}\
lgpd > button:hover{\
    background: #483c3c 0 0 no-repeat padding-box;\
    transition: .3s ease-in-out !important;\
}\
";
//===========================================================
const css_lgpd_p =
  "\
  lgpd > div > p{\
    color: #292929 !important;\
    transition: .3s ease-in-out !important;\
}\
";
//===========================================================
const css_lgpd_a =
  "\
lgpd > div > p > a{\
    color: #af3939 !important;\
    font-weight: 600;\
    transition: .3s ease-in-out !important;\
}\
lgpd > div > p > a:hover{\
    color: #7f1515 !important;\
    transition: .3s ease-in-out !important;\
}\
";
//===========================================================
// Inicia a função de verificação do cookie
checkCookie();