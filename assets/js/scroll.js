 // sidebar

   $(document).ready(function () {
                $("#sidebar").mCustomScrollbar({
                    theme: "minimal"
                });

                $('#dismiss, .overlay, #sidebar a').on('click', function () {
                    $('#sidebar').removeClass('active');
                    $('.navbar').show();
                });

                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar').addClass('active');
                    $('.overlay').fadeIn();
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                    $('.navbar').hide();
                });
            });

   // smooth scroll to id 

       (function($){
            $(window).on("load",function(){
                
                /* Page Scroll to id fn call */
                $("#sidebar a,a[href='#wedo'],a[href='#home'],a [rel='m_PageScroll2id']").mPageScroll2id({
                    layout:"auto",
                    offset:0,
                    highlightSelector:"#sidebar"
                });
                
                /* demo functions */
                $("a[rel='next']").click(function(e){
                    e.preventDefault();
                    var to=$(this).parent().parent("section").next().attr("id");
                    $.mPageScroll2id("scrollTo",to);
                });
                
            });
        })(jQuery);