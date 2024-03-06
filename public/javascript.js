// Кнопка сообщение


/* При клике показываем или скрываем кнопки мессенджеров */

var menuBtn = $('.messenger-btn'),
menu = $('.messenger-links');
menuBtn.on('click', function() {
if ( menu.hasClass('show') ) {
menu.removeClass('show');
} else {
menu.addClass('show');
}
});

/*  Скрыть div при клике в любом месте сайта кроме самого div */

$(document).mouseup(function (e){
var div = $('.messenger');
if (!div.is(e.target)
&& div.has(e.target).length === 0) {
$('.messenger-links').removeClass('show');
}
});












$(".pulse").on("click", function (event) {
  event.preventDefault();


  // $(".grey-back").addClass("d-pos");
  // $(".grey-back").css('display', 'flex');
  $(".new-pos").addClass("d-pos");
});

$("#ref").on("click", function (event) {
  event.preventDefault();


  // $(".grey-back").addClass("d-pos");
  // $(".grey-back").css('display', 'flex');
  $(".new-pos").toggleClass("d-pos");
});



$("#accia, .grey-back").on("click", function (event) {
  event.preventDefault();

  $(".grey-back").toggleClass("d-no");
});

// let m12 = document.querySelector(".grey-back");

// m12.addEventListener("click", function(){
//   // document.getElementById("demo").innerHTML = "Hello World";
//   console.log(3434);
// });


$(".grey-back").on("click", function (event) {
  event.preventDefault();
//  $(".grey-back").css('display', 'block');
  $(".grey-back").removeClass("d-no");
});





// Обработка выбора города в хедере сайта

// let arrSity = [
// "/", "/volgograd/"
// ];
// let select = document.querySelector('#cars');

// if (localStorage.getItem("sityNow")) {

// select.value = localStorage.getItem("sityNow");
// } else {

// }

// select.addEventListener('focus',function(){

//   select.value = null;
  
//   });

// select.addEventListener('change',function(){

// // window.location.href = arrSity[select.value] ;
// localStorage.setItem("sityNow", select.value);

// });











// ФУНКЦИИ САЙТА ДО МЕНЯ

$(window).scroll(function () {
  if ($(this).scrollTop() > 190) {
    $(".js-fixed-menu2").addClass("b-sevice__fixed2");
  } else {
    $(".js-fixed-menu2").removeClass("b-sevice__fixed2");
  }
});


// $(function () {
//     $(".js-fancybox").fancybox();
//     $(".js-fancyvideo").fancybox({
//       maxWidth: 1000,
//       maxHeight: 800,
//       fitToView: true,
//       width: "100%",
//       height: "50%",
//       autoSize: false,
//       closeClick: false,
//       openEffect: "none",
//       closeEffect: "none",
//     });




    function showScrollTop() {
      if ($(document).scrollTop() >= $(window).height()) {
        $(".js-scrolltop").addClass("b-scrolltop_show");
      } else {
        $(".js-scrolltop").removeClass("b-scrolltop_show");
      }
    }

    showScrollTop();
    $(window).on("scroll", function (event) {
      event.preventDefault();
      showScrollTop();
    });



    $(".js-scrolltop").on("click", function (event) {
      event.preventDefault();
      $("html,body").animate({ scrollTop: 0 }, "slow");
    });
    $(".js-mybusines-btn").on("click", function (event) {
      event.preventDefault();
      $(".js-mybusines-content").stop(true, false).slideToggle("slow");
      $(this).find("span").stop(true, false).toggle();
    });






    

    function showSidebar() {
      $(".js-sidebar-inner").addClass("l-sidebar_inner_open");
      $(".js-sidebar").fadeIn("1000");
      $("html, body").css("overflow", "hidden");
    }
    function hideSidebar() {
      $(".js-sidebar-inner").removeClass("l-sidebar_inner_open");
      $(".js-sidebar").fadeOut("1000");
      $("html, body").css("overflow", "visible");
    }
    $(".js-sidebar-show").on("click", function (event) {
      event.preventDefault();
      showSidebar();
    });
    $(".js-sidebar-hide").on("click", function (event) {
      event.preventDefault();
      hideSidebar();
    });






  

  function getFaqAccordion() {
    $(".faq__answer").hide();
    $(".faq__question").on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle();
    });
  }

  getFaqAccordion();



