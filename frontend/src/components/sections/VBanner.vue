<template lang='pug'>  
div.home
    div.home_slider_container
        <!-- Home Slider -->
        div(class="owl-carousel owl-theme home_slider")

            <!-- Slider Item -->
            div(class="owl-item home_slider_item")
                div.home_slider_background
                    div.home_slider_content_container
                        div.container
                            div.row
                                div.col
                                    div(
                                        class="home_slider_content" 
                                        data-animation-in="fadeIn"
                                        data-animation-out="animate-out fadeOut"
                                        )

                                        div.home_slider_title A new Online Shop experience.
                                        div.home_slider_subtitle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus. Sed nec molestie eros. Sed viverra velit venenatis fermentum luctus.
                                        div(class="button button_light home_button")
                                            a(href="#") Shop Now


        <!-- Home Slider Dots -->
        div.home_slider_dots_container
            div.container
                div.row
                    div.col
                        div.home_slider_dots
                            ul#home_slider_custom_dots.home_slider_custom_dots
                                li(class='home_slider_custom_dot active') 01.
                                li.home_slider_custom_dot 02.
                                li.home_slider_custom_dot 03.


</template>

<script>
export default {
    name: 'VBanner'
}
</script>

<style lan='scss'>
.home_slider_container, .home { padding-top: 0px;}
.home { height: 700px; }

.home_slider_content_container { top: 150px; }
.home_slider_background {
    /* background-image: url('images/home_slider_1.jpg'); */
    background-color: orange;
}

</style>
