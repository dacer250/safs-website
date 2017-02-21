$(document).ready(function(){
    
    // 侧边栏滑动模块
    (function(){
        var sidebar=$('.sidebar');
        var mask=$('.mask');
        var sidebar_trigger=$('.sidebar_trigger');
        var showSidebar=function(){
            mask.fadeIn();
            sidebar.animate({'right':0});
        }
        var hideSidebar=function(){
            mask.fadeOut();
            sidebar.css('right',-sidebar.width());
        }
        sidebar_trigger.bind('click',showSidebar);
        mask.bind('click',hideSidebar);
    })();
    //返回顶部模块
    (function(){
        var backtotop=$('.back-to-top');
        backtotop.bind('click', function(){
            $('html,body').animate({scrollTop:0},800)
        });
        $(window).on('scroll',function(){
            if($(window).scrollTop()>400){
                backtotop.fadeIn();
            }else{
                backtotop.fadeOut();
            }
        });
    })();
    // 下拉手风琴效果
    $(function(){
    $(".bellows__content-wrapper").hide();
    $(".bellows__header").click(function(){
        $(this).next().slideDown()
        $(this).parent(".bellows__item").addClass("bellows--is-open")
        $(".bellows__header").not(this).next().slideUp()
        $(".bellows__header").not(this).parent(".bellows__item").removeClass("bellows--is-open")
    })
})
});
