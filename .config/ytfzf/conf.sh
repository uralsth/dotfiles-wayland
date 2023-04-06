#!/bin/sh

sub_link_count=40

external_menu () {
    #use rofi instead of dmenu
    rofi -dmenu -i -theme "$HOME/.config/ytfzf/rofi/style.rasi"  -p "$1"
}
