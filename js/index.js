$(function(){
    
    // first

    setTimeout(function(){
        $('#first span').fadeIn(1500);
    },1000);
    // 1秒後に1.5秒かけて文字をフェードイン
    setTimeout(function(){
        $('#first').fadeOut(1500);
    },4000);
    // 4秒後に1.5秒かけてfirstの要素をフェードアウト
    setTimeout(() => {
        $('#navbar').slideDown(1200);
        $('.profile').fadeIn(1200);
    },6500);
    // 6.5秒後に1.2秒かけてnavbarをスライドダウン
    // 6.5秒後に1.2秒かけてprofileをフェードイン

    $('#menu-bar').click(() => {
        $('#menu').css( 'right', '-40%' );
        $('#menu-content').css( 'right', '0' );
        $('#menu2').css( 'left', '-50%' );
    });
    // メニューアイコンを押すと表示
    $('#menu-content i').click(() => {
        $('#menu').css( 'right', '-140%' );
        $('#menu-content').css( 'right', '-100%' );
        $('#menu2').css( 'left', '-140%' );
    });

    // メミューバー内の処理.各地点に自動スクロース

    $('#toHome').on( 'click', function(){

        $('#menu').css( 'right', '-140%' );
        $('#menu-content').css( 'right', '-100%' );
        $('#menu2').css( 'left', '-140%' );
        // メニュー画面を閉じる
        
        var home = $('#header').offset().top;
        // workまでのスクロール距離取得
        setTimeout(() => {
            $("html,body").animate({scrollTop: home}, 500, 'swing');
        }, 300);
        // workまでスクロール  

    });

    $('#toWork').on( 'click', function(){

        $('#menu').css( 'right', '-140%' );
        $('#menu-content').css( 'right', '-100%' );
        $('#menu2').css( 'left', '-140%' );
        // メニュー画面を閉じる
        
        var work = $('#work').offset().top;
        var navbar = $('#navbar').height();
        var toWork = work - navbar;
        // workまでのスクロール距離取得
        setTimeout(() => {
            $("html,body").animate({scrollTop: toWork}, 500, 'swing');
        }, 300);
        // workまでスクロール  

    });

    $('#toAbout').on( 'click', function(){

        $('#menu').css( 'right', '-140%' );
        $('#menu-content').css( 'right', '-100%' );
        $('#menu2').css( 'left', '-140%' );
        // メニュー画面を閉じる
        
        var about = $('#about').offset().top;
        var navbar = $('#navbar').height();
        var toAbout = about - navbar;
        // workまでのスクロール距離取得
        setTimeout(() => {
            $("html,body").animate({scrollTop: toAbout}, 500, 'swing');
        }, 300);
        // workまでスクロール  

    });

    $('#toService').on( 'click', function(){

        $('#menu').css( 'right', '-140%' );
        $('#menu-content').css( 'right', '-100%' );
        $('#menu2').css( 'left', '-140%' );
        // メニュー画面を閉じる
        
        var service = $('#service').offset().top;
        var navbar = $('#navbar').height();
        var toService = service - navbar;
        // workまでのスクロール距離取得
        setTimeout(() => {
            $("html,body").animate({scrollTop: toService}, 500, 'swing');
        }, 300);
        // workまでスクロール  

    });

    $('#toContact').on( 'click', function(){

        $('#menu').css( 'right', '-140%' );
        $('#menu-content').css( 'right', '-100%' );
        $('#menu2').css( 'left', '-140%' );
        // メニュー画面を閉じる
        
        var contact = $('#contact').offset().top;
        var navbar = $('#navbar').height();
        var toContact = contact - navbar;
        // workまでのスクロール距離取得
        setTimeout(() => {
            $("html,body").animate({scrollTop: toContact}, 500, 'swing');
        }, 300);
        // workまでスクロール  

    });

    // workまでスクロールするとnavbarのbgcolorを透明に

    var work = $('#work').offset().top;
    var navbar = $('#navbar').height();
    var border = work - navbar;

    $(window).scroll(function(){ // スクロールが発生したら開始.
        if( $(window).scrollTop() >= border ){
            $('#navbar').css( 'background-color', 'transparent' );
        }else{
            $('#navbar').css( 'background-color', '#fff' );
        }
    });

    // header

    // work
    $('.work').on( 'click', function(){
        $(this).prev().fadeIn(300);
    });
    $('.work-detail i').on('click', function(){
        $(this).parent().fadeOut(300);
    });

});