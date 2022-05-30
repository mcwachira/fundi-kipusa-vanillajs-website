

jQuery(document).ready(function ($) {
    $('.nav-tabs .btn_styles').click(function () {
        if (!$(this).hasClass('active')) {
            let active, parent, tab;
            active = $(this);
            parent = $(this).closest('.nav-tabs').first();
            parent.find('.btn_styles').each(function () {
                tab = $($(this).attr('href'));
                if ($(this).is(active)) {
                    $(this).addClass('active');
                    if (tab.length > 0) tab.show();
                } else {
                    $(this).removeClass('active');
                    if (tab.length > 0) tab.hide();
                }
            });
        }

        return false;
    });
    $('.donate_form form .btn_styles').click(function () {
        let parent = $(this).closest('form').first();
        parent.find('input[type="number"]').val($(this).data('value'));
    });
});