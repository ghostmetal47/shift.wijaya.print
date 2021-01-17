var static = $('.noise');
TweenMax.to('.noise', .03, {repeat:-1, onRepeat: repeatStatic,	ease:SteppedEase.config(1)});
function repeatStatic(){
	TweenMax.set('.noise', {backgroundPosition: Math.floor(Math.random() * 100) + 1 + "% " + Math.floor(Math.random() * 10) + 1 + "%"});
}     

$(window).load( function(){
    $('.killer').click( function () {
        tl.kill();
    });
});