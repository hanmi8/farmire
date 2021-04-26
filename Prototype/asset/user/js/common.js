$(function(){

    $('a').click(function(e){
        if($(e.target).attr('href') === '#' || $(e.target).parent().attr('href') === '#'){
            e.preventDefault()
        }
    })

    // menu folding
    $('.nav-folding a').click(function(){
        $('.nav').toggleClass('on');
        $('.container').toggleClass('on');
    })

    $('.search-folding').click(function(){
        $('.toggleFolding').slideToggle(200);
        $(this).children('i').toggleClass('fa-chevron-circle-up fa-chevron-circle-down');
    })

    if($(window).width() > 768){
        // goTop
        $('.container').append('<div class="goTop"><i class="fa fa-arrow-up"></i>GO TOP</div>');
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('.goTop').fadeIn();
            } else {
                $('.goTop').fadeOut();
            }
        });
        $('.goTop').click(function() {
            $('body,html').animate({scrollTop:0},300);
        });

        // copyright
        if($(window).width() > 768){
            $('.nav').append('<div class="copyright">Copyright ⓒ IREIS Crop.<br>All right reserved.</div>');
        }


    }

    // tabs
    $('.tabs').find('a').click(function(e){
        e.preventDefault();
        $(this).parent('li').siblings().removeClass('on');
        $(this).parent('li').addClass('on');
        $(this).parents('.tabs').parent().children('.tab-contents').removeClass('on');
        var tabID = $(this).attr('href');
        // console.log(tabID);
        $(tabID).addClass('on');
    });

    $('.faq-list').find('a').click(function(){
        $(this).children('i').toggleClass('fa-caret-up fa-caret-down');
        $(this).next('div').slideToggle(200);
    })
    // $('.notice-list').find('a').click(function(){
    //     $(this).next('div').slideToggle(200);
    //     $(this).children('i').toggleClass('fa fa-caret-down fa-caret-up');
    // })


    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown-menu').slideToggle(200);
    })
    $(document).on('click',function(e){
        if(!$(e.target).parents().hasClass('dropdown')){
            $('.dropdown-menu').slideUp(200);
        }
    })



    $('.user').find('.compress').click(function(){
        // $('.farm-group').slideUp(200);
        $('.card').slideUp(200);
        $('.card-folding').children('i').toggleClass('fa-chevron-circle-up fa-chevron-circle-down');
        // $('.farm-folding').children('i').toggleClass('fa-chevron-up fa-chevron-down');
    })
    $('.user').find('.expand').click(function(){
        // $('.farm-group').slideDown(200);
        $('.card').slideDown(200);
        $('.card-folding').children('i').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
        // $('.farm-folding').children('i').toggleClass('fa-chevron-down fa-chevron-up');
    })

    // modal
    $('.modalCall').click(function(){
        var modalID = $(this).attr('data-target');
        $(modalID).show();
        $('body').css('overflow','hidden');
    })
    $('.modal-close').click(function(){
        $('.modal').hide();
        $('body').css('overflow','');
    })



})
