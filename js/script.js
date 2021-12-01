const nav = document.getElementById('site-nav')
const header = document.getElementsByClassName('header')
const btnToggle = document.getElementById('toggle')
const clickMenu = document.querySelectorAll('.nav-ti li')
const conteudoTi = document.querySelectorAll('.conteudo-ti-container')

function abreFechaMenu(){
    nav.classList.toggle('abre-fecha')
    header[0].classList.toggle('bg-menu')
    // btnToggle.classList.remove('fa-bars')
    btnToggle.classList.toggle('fa-times')
    console.log(btnToggle)
}
// scroll suave na tela
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
	abreFechaMenu();		
	$('html, body').animate({ 
		scrollTop: targetOffset -90
	}, 500);
});

// seção T.I, varre os links para deixar ativo o link clicado
clickMenu.forEach((e, i)=>{
    e.addEventListener('click', ev=>{
        ev.preventDefault()
        clickMenu.forEach(e => e.classList.remove('link-ativo'))
        conteudoTi.forEach(e=> e.classList.add('oculto'))
        e.classList.toggle('link-ativo')
        conteudoTi[i].classList.toggle('oculto')
        console.log(i)
    })
})


console.log(conteudoTi)
