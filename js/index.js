//$('#zimo>div').children();
//console.log($('#zimo>div'))
//$('.childs')
$(document).ready(function(){
  // 在这里写你的代码...
});

$('.zimo_list>li').not('.small-box').click(function(){
	console.log('====')
})

$('.zimo_list>li:gt(2)')
console.log($('.zimo_list>li:gt(3)').html())

var num = $('.zimo_list>li>img').attr('src','images/lb1.jpg')
console.log(num)

var html = $('.zimo_list>li').html();
console.log(html);

$('.box').hover(function(){
	$(this).css({background:'red'})
},function(){
	$(this).css({background:'pink'})
})






