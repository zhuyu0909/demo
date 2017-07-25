/**
 * Created by Administrator on 2017/7/20.
 */
$(function () {
    // 下拉；
    $(' .leftNav .select').mouseover(function (){

        $(this).find($(".showList")).css("display","block");
        // $(this).next().css("display","block");
    });

    $('.leftNav .select').mouseout(function (){

        $(this).find($(".showList")).css("display","none");
        // $(this).next().css("display","block");
    });




//    搜索框
$('.scarchBox>.searchTxt').click(function (ev) {

     $('.list').css("display",'block');

    ev.stopPropagation();
});
    $('.scarchBox >.list>li').click(function (ev){
        console.log($(this).parent());
        $('.list').css("display","none");
        $(' .searchTxt').html($(this).find("a").html());
        ev.stopPropagation();
    })
    
//全选
    $('.check>.check_box>li>input').eq(0).click(function () {

      $('input[name="subBox"]').prop("checked",this.checked)

    });

//  反选

    $('.check>.check_box>li>input').eq(1).click(function () {

        $('input[name="subBox"]').each(function () {

          $(this).prop('checked',!$(this).prop("checked"))
        })
    });


    //选项卡；
    $(".tab_title li").click(function () {

    tab('.tab_title li div','.smList .item','show',this)
})


    $(".tab_news  .comTitle .comTitle_tabs li").click(function () {
        tab2('.tab_news .comTitle .comTitle_tabs li','.tab_news .tabs >div','show',this)

    });
    //视频综艺
    $('.newsBox .comTitle .left_111 li').click(function () {
        tab2('.newsBox .comTitle .left_111 li','','',this)
    })

    $(".leftBox >.left_1 >.comTitle_tabs>li").click(function () {

        $('.leftBox >.left_1 >.comTitle_tabs>li').removeClass('active');
        $(this).addClass('active');
    });
    $(".leftBox >.left_2 >.comTitle_tabs>li").click(function () {

        tab2('.leftBox >.left_2 >.comTitle_tabs>li','.leftBox .tabs_11 .tabs_item','show',this)
        // $('.leftBox >.left_2 >.comTitle_tabs>li').removeClass('active');
        // $('.leftBox .tabs_11 .tabs_item').removeClass('show');
        // $(this).addClass('active');
        // $('.leftBox .tabs_11 .tabs_item').eq($(this).index()).addClass('show');
    });
    $(".leftBox >.comTitle   >.left_200>li").click(function () {
        tab2('.leftBox >.comTitle   >.left_200>li','.leftBox .left_201 .tabs_item','show',this)
    });
    $(".leftBox >.comTitle>.left_300>li").click(function () {
        tab2('.leftBox >.comTitle>.left_300>li','.leftBox .left_301 .tabs_item','show',this)
    });
    $(".leftBox >.comTitle>.left_400>li").click(function () {
        tab2('.leftBox >.comTitle>.left_400>li','','',this)
    });
    $(".leftBox >.comTitle>.left_500>li").click(function () {
        tab2('.leftBox >.comTitle>.left_500>li','.leftBox .tabs .left_501','show',this)
    });
    $('.rightArea .leftBox .youxi>span').click(function () {
        tab2('.rightArea .leftBox .youxi>span','.leftBox .youxi_box .tabs_item','show',this)
    })
    $('.rightArea .leftBox .youxi2>span').click(function () {
        tab2('.rightArea .leftBox .youxi2>span','.leftBox .youxi_box2 .tabs_item','show',this)
    })
    //今日明日；

    $(".day  a").click(function (){
        tab2('.day  a','.sina_video>.tabs .tabs_item','show',this);
    });




    $(".leftBox >.left_3 >.comTitle_tabs>li").click(function () {
        tab2('.leftBox >.left_3 >.comTitle_tabs>li','.rightArea>.leftBox .left_12 .tabs_item','show',this)
        // $('.leftBox >.left_3 >.comTitle_tabs>li').removeClass('active');
        // $('.rightArea>.leftBox .left_12 .tabs_item').removeClass('show');
        // $(this).addClass('active');
        // $('.rightArea>.leftBox .left_12 .tabs_item').eq($(this).index()).addClass('show');
    });






    $(".comWidth >.left_5 >.comTitle_tabs>li").click(function () {

        tab2('.comWidth>.left_5 >.comTitle_tabs>li','.leftBox .tabs_14 .tabs_item','show',this)

    });


    function tab(obj,obj2,obj3,obj4) {
        $(obj).removeClass('active');
        $(obj2).removeClass(obj3);
        $(obj4).find('div').addClass('active');
        $(obj2).eq($(obj4).index()).addClass(obj3);
    };

    function tab2(obj,obj2,obj3,obj4) {
         $(obj).removeClass('active');
        $(obj2).removeClass(obj3);
        $(obj4).addClass('active');
        $(obj2).eq($(obj4).index()).addClass(obj3)
    }
});
