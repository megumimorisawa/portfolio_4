$(window).on('load', function () {
    $('#fv').animate({paddingRight:1},{
	//1秒かけてアニメーション
	duration:500,
	//stepは、アニメーションが進むたびに呼ばれる
	step:function(now){
		//nowに現在のpadding-rightの値が渡してもらえる
		//0から1に向かって変化していくnowを利用してscaleさせてみる
		$(this).css({transform:'scale(' + now  + ')'});
	},
	//終わったら
	complete:function(){
		//次のために、元に戻しておく
		$('#fv').css('paddingRight', 0);
	}
})
})

$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('#feature_inner_ttl, #feature_inner_ttl_sub, .feature_container_box_ttl, .feature_container_box_inner_a_img, .feature_container_box_inner_b_img, .feature_container_box_inner_a_content, .feature_container_box_inner_b_content, #price_inner_ttl, #price_inner_ttl_sub, #price_inner_table, #price_disclaimer, #faq_inner_ttl, #faq_inner_ttl_sub, #faq_list').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("scrollin");
            }
        });
    });
});

$(function () {
    $('#faq_list_question1').click(function(){
        $('#faq_list_answer1').slideToggle(200);
    })
})

$(function () {
    $('#faq_list_question2').click(function(){
        $('#faq_list_answer2').slideToggle(200);
    })
})

$(function () {
    $('#faq_list_question3').click(function(){
        $('#faq_list_answer3').slideToggle(200);
    })
})