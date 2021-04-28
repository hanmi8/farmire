$(function(){

    $('a').click(function(e){
        if($(e.target).attr('href') === '#' || $(e.target).parent().attr('href') === '#'){
            e.preventDefault()
        }
    })

    // index
    $('.faq-list').find('a').click(function(){
        $(this).children('i').toggleClass('fa-caret-up fa-caret-down');
        $(this).next('div').slideToggle(200);
    })

    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown-menu').slideToggle(200);
    })
    $(document).on('click',function(e){
        if(!$(e.target).parents().hasClass('dropdown')){
            $('.dropdown-menu').slideUp(200);
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

        // copyright
        if($(window).width() > 768){
            $('.nav').append('<div class="copyright">Copyright ⓒ IREIS Crop.<br>All right reserved.</div>');
        }

    }

    $('.goTop').click(function() {
        $('body,html').animate({scrollTop:0},300);
    });



    $('.compress').click(function(){
        if($(this).parents('.container').hasClass('admin') && $(this).parents('.container').hasClass('rmfarm')){
            $('.farm-group').slideUp(200);
            if($('.farm-folding').children('i').hasClass('fa-chevron-down')){
                $('.farm-folding').children('i').removeClass('fa-chevron-down');
                $('.farm-folding').children('i').addClass('fa-chevron-up');
            }
            if($('.farm-folding').children('i').hasClass('fa-chevron-up')){
                $('.farm-folding').children('i').removeClass('fa-chevron-up');
                $('.farm-folding').children('i').addClass('fa-chevron-down');
            }
        }
        $('.card').slideUp(200);
        if($('.card-folding').children('i').hasClass('fa-chevron-down')){
            $('.card-folding').children('i').removeClass('fa-chevron-down');
            $('.card-folding').children('i').addClass('fa-chevron-up');
        }
        if($('.card-folding').children('i').hasClass('fa-chevron-up')){
            $('.card-folding').children('i').removeClass('fa-chevron-up');
            $('.card-folding').children('i').addClass('fa-chevron-down');
        }
    })
    $('.expand').click(function(){
        if($(this).parents('.container').hasClass('admin') && $(this).parents('.container').hasClass('rmfarm')){
            $('.farm-group').slideDown(200);
            if($('.farm-folding').children('i').hasClass('fa-chevron-down')){
                $('.farm-folding').children('i').removeClass('fa-chevron-down');
                $('.farm-folding').children('i').addClass('fa-chevron-up');
            }
            if($('.farm-folding').children('i').hasClass('fa-chevron-up')){
                $('.farm-folding').children('i').removeClass('fa-chevron-up');
                $('.farm-folding').children('i').addClass('fa-chevron-down');
            }
        }
        $('.card').slideDown(200);
        if($('.card-folding').children('i').hasClass('fa-chevron-down')){
            $('.card-folding').children('i').removeClass('fa-chevron-down');
            $('.card-folding').children('i').addClass('fa-chevron-up');
        }
        if($('.card-folding').children('i').hasClass('fa-chevron-up')){
            $('.card-folding').children('i').removeClass('fa-chevron-up');
            $('.card-folding').children('i').addClass('fa-chevron-down');
        }
    })
    $('.farm-folding').click(function(){
        $(this).parents('.user-group').find('.farm-group').slideToggle(400);
        $(this).children('i').toggleClass('fa-chevron-up fa-chevron-down');
    });
    $('.card-folding').click(function(){
        $(this).parents('.farm-group').find('.card').slideToggle(200);
        $(this).children('i').toggleClass('fa-chevron-circle-up fa-chevron-circle-down');
    });

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

    // modal
    $('.modalCall').click(function(e){
        e.stopPropagation();
        console.log(e)
        var modalID = $(this).attr('data-target');
        $('body').css('overflow', 'hidden');
        $(modalID).show();
        // if($(window).height() < 768) {
        // }
        $(modalID + ' .modal-body').css('max-height',
            $(window).height()
            - $(modalID + ' .modal-header').outerHeight()
            // - $('#' + modalID + ' .modal-footer').outerHeight()
            - 200);
        return false;
    })
    $('.modal-close').click(function(){
        $('body').css('overflow', '');
        $(this).parents('.modal').hide();
    })

    $('.listTitle').click(function(){
        $(this).next('.table-responsive').slideToggle(200);
        $(this).find('a').children('i').toggleClass('fa-caret-up fa-caret-down');
    })
    deviceTab();
    function deviceTab(){
        var card = $('.farm-group.on').children('.farm-group-body').find('.card');
        var measure = $('.threshold').find('.measure');
        var tabs = $('.device-tab').find('li');
        var cardLabel;
        card.each(function(i){
            cardLabel = $(card[i]).find('.card-header').find('label').text();
            $('.device-tab').find('ul').append('<li><a href="#">' + cardLabel + '</a></li>');
            $('.device-tab').children('.indicator').append('<span></span>');
        })
        tabs.each(function(){
            $('.device-tab').children('.indicator').append('<span></span>');
        })

        $('.device-tab').find('ul').find('li:first-child').addClass('on')
        $('.device-tab').children('.indicator').find('span:first-child').addClass('on');


        $('.device-tab').find('ul').find('li').click(function(){
            var tabindex = $(this).index()
            var cardScrollLeft = $(card).outerWidth(true) * tabindex;
            var measureScrollLeft = $(measure).outerWidth(true) * tabindex;
            $('.device-tab').find('ul').find('li').removeClass('on');
            $(this).addClass('on');
            $('.indicator').children('span').removeClass('on');
            $('.indicator').children('span').eq(tabindex).addClass('on');
            $('.device-tab ul').animate({scrollLeft:$(this).outerWidth()*tabindex},300);
            $('.farm-group-body').animate({scrollLeft:cardScrollLeft},300);
            $('.measure-wrap').animate({scrollLeft:measureScrollLeft},300);

        })
    }
    $('.zone').children('li').click(function(){
        $('.zone').children('li').removeClass('on');
        $(this).addClass('on');
    })

    // on-off
    $('.on-off').click(function(){
        $(this).toggleClass('on')
        if($(this).hasClass('on')){
            $(this).children('span').text('ON')
        }else{
            $(this).children('span').text('OFF')
        }
        $(this).children('i').toggleClass('fa-toggle-on fa-toggle-off')
    })

    // Hidden Top
    $('.app-header.mobile').find('label').click(function(){
        $('.hiddenTop').css('top',0);
    })

    $(document).on('click',function(e){
        if(!$(e.target).parent('div').hasClass('app-header')){
            $('.hiddenTop').css('top' , '');
        }
    })

    // history.pushState(null, null, '');
    // window.onpopstate = function(event) {
    //     history.back();
    //     console.log('뒤로가기 체크');
    // }


})
