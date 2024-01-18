
function heateorSsspMastodonPopup1() {
	var heateorSsspMoreSharingServicesHtml = '<button id="heateor_sssp_mastodon_popup_close" class="close-button separated"><img src="' + heateorSsspCloseIconPath + '" /></button><div id="heateor_sssp_sharing_more_content"><div class="all-services" style="height:auto"><div class="filter"><center>Your Mastodon Instance</center><input type="text" id="heateor_sssp_mastodon_instance" placeholder="https://mastodon.social" class="search"><center><input type="button" class="heateor_sssp_mastodon_popup_button" value="Submit" onclick="var heateorMastodonInstance = jQuery(\'#heateor_sssp_mastodon_instance\').val().trim(), heateorMastodonAnchor = jQuery(\'a.heateor_sssp_button_mastodon\').length > 0 ? jQuery(\'a.heateor_sssp_button_mastodon\').attr(\'href\') : jQuery(\'#heateor_sssp_sharing_more_content a[alt=Mastodon]\').attr(\'href\'); heateorMastShareURL = heateorMastodonInstance ? heateorMastodonAnchor.replace(\'https://mastodon.social\', heateorMastodonInstance) : heateorMastodonAnchor;window.open(heateorMastShareURL,\'_blank\',\'height=520,width=770,left=315,top=80,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status\');" /></center></div></div><div class="footer-panel"></div></div>';
	var mainDiv = document.createElement('div');
	mainDiv.innerHTML = heateorSsspMoreSharingServicesHtml;
	mainDiv.setAttribute('id', 'heateor_sssp_sharing_more_providers');
	mainDiv.style.height = 'auto';
	var bgDiv = document.createElement('div');
	bgDiv.setAttribute('id', 'heateor_sssp_mastodon_popup_bg');
	jQuery('body').append(mainDiv).append(bgDiv);
	document.getElementById('heateor_sssp_mastodon_popup_bg').onclick = document.getElementById('heateor_sssp_mastodon_popup_close').onclick = function() {
		mainDiv.parentNode.removeChild(mainDiv);
		bgDiv.parentNode.removeChild(bgDiv);
	}
}



/**
 * Search sharing services
 */
function heateorSsspFilterSharing(val) {
	jQuery('ul.mini li a').each(function() {
		if (jQuery(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
			jQuery(this).parent().css('display', 'block');
		} else {
			jQuery(this).parent().css('display', 'none');
		}
	});
};