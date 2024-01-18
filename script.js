function heateorSsspCallAjax(e){if(typeof jQuery!="undefined"){e()}else{heateorSsspGetScript("https://code.jquery.com/jquery-latest.min.js",e)}}
function heateorSsspGetScript(e,t){var n=document.createElement("script");n.src=e;var r=document.getElementsByTagName("head")[0],i=false;n.onload=n.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){i=true;t();n.onload=n.onreadystatechange=null;r.removeChild(n)}};r.appendChild(n)}
function heateorSsspDetermineWhatsappShareAPI(a){if(a)return-1!=navigator.userAgent.indexOf("Mobi")?"api.whatsapp.com":"web.whatsapp.com";var p=jQuery("i.heateorSsspWhatsappBackground a").attr("href");return void 0!==p?-1!=navigator.userAgent.indexOf("Mobi")?(jQuery("i.heateorSsspWhatsappBackground a").attr("href",p.replace("web.whatsapp.com","api.whatsapp.com")),"api.whatsapp.com"):(jQuery("i.heateorSsspWhatsappBackground a").attr("href",p.replace("api.whatsapp.com","web.whatsapp.com")),"web.whatsapp.com"):""}
/**
 * Show more sharing services popup
 */
function heateorSsspMoreSharingPopup(elem, postUrl, postTitle, twitterTitle){
		var heateorSsspMoreSharingServicesHtml = '<button id="heateor_sssp_sharing_popup_close" class="close-button"><img src="'+ heateorSsspCloseIconPath +'" /></button><div id="heateor_sssp_sharing_more_content" data-href="'+ decodeURIComponent(postUrl) +'"><div class="filter"><input type="text" onkeyup="heateorSsspFilterSharing(this.value.trim())" placeholder="Search" class="search"></div><div class="all-services"><ul class="mini">';
	for(var i in heateorSsspMoreSharingServices){
		var tempTitle = heateorSsspCapitaliseFirstLetter(heateorSsspMoreSharingServices[i].title.replace(/[_. ]/g, ""));
		heateorSsspMoreSharingServicesHtml += '<li><a rel="nofollow" title="'+ heateorSsspMoreSharingServices[i].title +'" alt="'+ heateorSsspMoreSharingServices[i].title +'" ';
		if(heateorSsspMoreSharingServices[i].bookmarklet_url){
			heateorSsspMoreSharingServicesHtml += 'href="' + heateorSsspMoreSharingServices[i].bookmarklet_url + '" ';
		}else if(heateorSsspMoreSharingServices[i].redirect_url){
			heateorSsspMoreSharingServicesHtml += 'onclick="heateorSsspPopup(\'' + heateorSsspMoreSharingServices[i].redirect_url + '\')" href="javascript:void(0)" ';
		}else{
			heateorSsspMoreSharingServicesHtml += 'href="javascript:void(0)" ';
		}
		heateorSsspMoreSharingServicesHtml += '"><span class="heateor_sssp_svg heateor_sssp_s__default heateor_sssp_s_' + heateorSsspMoreSharingServices[i].title.replace(' ', '_').toLowerCase() + '" style="background-color:' + heateorSsspMoreSharingServices[i].background_color + ';width:22px;height:22px;display:block;float:left;" title="'+ heateorSsspMoreSharingServices[i].title +'">'+ heateorSsspMoreSharingServices[i].svg +'</span><span style="display:block;float:left;margin-left:3px;line-height:24px;" class="heateor_sssp_more_label_'+ heateorSsspMoreSharingServices[i].title.replace(' ', '_').toLowerCase() +'">' + heateorSsspMoreSharingServices[i].title + '</span></a></li>';
	}
	heateorSsspMoreSharingServicesHtml += concate;
	
	var mainDiv = document.createElement('div');
	mainDiv.innerHTML = heateorSsspMoreSharingServicesHtml;
	mainDiv.setAttribute('id', 'heateor_sssp_sharing_more_providers');
	var bgDiv = document.createElement('div');
	bgDiv.setAttribute('id', 'heateor_sssp_popup_bg');
	jQuery('body').append(mainDiv).append(bgDiv);
	document.getElementById('heateor_sssp_popup_bg').onclick = document.getElementById('heateor_sssp_sharing_popup_close').onclick = function(){
		mainDiv.parentNode.removeChild(mainDiv);
		bgDiv.parentNode.removeChild(bgDiv);
	}
	jQuery('#heateor_sssp_sharing_more_content a[alt=Mastodon]').removeAttr('onclick');
	jQuery('#heateor_sssp_sharing_more_content a[alt=Mastodon]').click(function(){
		event.preventDefault();
		heateorSsspMastodonPopup();
	});
}

function heateorSsspMastodonPopup() {
	var heateorSsspMoreSharingServicesHtml = '<button id="heateor_sssp_mastodon_popup_close" class="close-button separated"><img src="'+ heateorSsspCloseIconPath +'" /></button><div id="heateor_sssp_sharing_more_content"><div class="all-services" style="height:auto"><div class="filter"><center>Your Mastodon Instance</center><input type="text" id="heateor_sssp_mastodon_instance" placeholder="https://mastodon.social" class="search"><center><input type="button" class="heateor_sssp_mastodon_popup_button" value="Submit" onclick="var heateorMastodonInstance = jQuery(\'#heateor_sssp_mastodon_instance\').val().trim(), heateorMastodonAnchor = jQuery(\'a.heateor_sssp_button_mastodon\').length > 0 ? jQuery(\'a.heateor_sssp_button_mastodon\').attr(\'href\') : jQuery(\'#heateor_sssp_sharing_more_content a[alt=Mastodon]\').attr(\'href\'); heateorMastShareURL = heateorMastodonInstance ? heateorMastodonAnchor.replace(\'https://mastodon.social\', heateorMastodonInstance) : heateorMastodonAnchor;window.open(heateorMastShareURL,\'_blank\',\'height=520,width=770,left=315,top=80,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status\');" /></center></div></div><div class="footer-panel"></div></div>';
	var mainDiv = document.createElement('div');
	mainDiv.innerHTML = heateorSsspMoreSharingServicesHtml;
	mainDiv.setAttribute('id', 'heateor_sssp_sharing_more_providers');
	mainDiv.style.height = 'auto';
	var bgDiv = document.createElement('div');
	bgDiv.setAttribute('id', 'heateor_sssp_mastodon_popup_bg');
	jQuery('body').append(mainDiv).append(bgDiv);
	document.getElementById('heateor_sssp_mastodon_popup_bg').onclick = document.getElementById('heateor_sssp_mastodon_popup_close').onclick = function(){
		mainDiv.parentNode.removeChild(mainDiv);
		bgDiv.parentNode.removeChild(bgDiv);
	}
}


	
/**
 * Search sharing services
 */
function heateorSsspFilterSharing(val) {
	jQuery('ul.mini li a').each(function(){
		if (jQuery(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
			jQuery(this).parent().css('display', 'block');
		} else {
			jQuery(this).parent().css('display', 'none');
		}
	});
};


