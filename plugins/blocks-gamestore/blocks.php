<?php
function view_block_games_line($attributes = array(), $content = '')
{


    $args = array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => $attributes['count'],
        'orderby'        => 'date',
        'order'          => 'DESC',
    );

    $products = new WP_Query($args);

    $html = '<div ' . get_block_wrapper_attributes() . '">';
    if ($products->have_posts()) {
        $html .= '<div class="games-line-container"><div class="swiper-wrapper">';

        while ($products->have_posts()) {
            $products->the_post();
            $product_id = get_the_ID();
            $html .= '<div class="game-item swiper-slide">';
            if (has_post_thumbnail($product_id)) {
                $permalink = get_permalink($product_id);
                $img = get_the_post_thumbnail($product_id, 'medium', array('class' => 'gamestore-product-image'));
                $html .= '<a class="gamestore-product-link" href="' . esc_url($permalink) . '">' . $img . '</a>';
            }
            $html .= '</div>';
        }
        wp_reset_postdata();
        $html .= '</div></div>';
    } else {
        $html .= '<p>Aucun produit trouvé.</p>';
    }

    $html .= '</div>';

    return $html;
}
