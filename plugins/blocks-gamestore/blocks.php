<?php
function view_block_games_line($attributes = array(), $content = '')
{
    $html = '<div class="wp-block-gamestore-games-line">';
    if (! empty($content)) {
        $html .= $content;
    } else {
        $html .= '<p>Block Games Line rendu côté serveur.</p>';
    }
    $html .= '</div>';

    return $html;
}
