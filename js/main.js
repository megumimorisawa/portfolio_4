$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('#feature_inner_ttl, #feature_inner_ttl_sub, .feature_container_box_ttl, .feature_container_box_inner_a_img, .feature_container_box_inner_b_img, .feature_container_box_inner_a_content, .feature_container_box_inner_b_content, #price_inner_ttl, #price_inner_ttl_sub, #price_inner_table, #price_disclaimer, #faq_inner_ttl, #faq_inner_ttl_sub').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("scrollin");
            }
        });
    });
});