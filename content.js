/*
 reddit jump : reddit plugin to quickly jump between subreddits

 Copyright (C) 2011 Mounier Florian aka paradoxxxzero

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see http://www.gnu.org/licenses/.
 */


$(
    function () {

	$('body').keydown (
	    function (e) {
		if(e.keyCode == 82 && e.altKey) {
		    $('<div>')
			.attr('id', 'reddit-jump')
			.append(
			    "<span id='rjump'>/r/</span><input id='jump-input' type='text' />"
			)
			.appendTo(
			    $("body")
			);
		    $('#jump-input')
			.focus()
			.keydown (
			    function (e) {
				if(e.keyCode == 13) {
				    $(location).attr('href', 'http://www.reddit.com/r/' + $('#jump-input').val());
				    $('#reddit-jump').fadeOut(3000);
				    $('body').focus();
				    e.stopPropagation();
				}
				if(e.keyCode == 27) {
				    $('#reddit-jump').remove();
				    $('body').focus();
				}
			    }
			);
		}
	    }
	);
    }
);
