/*
 * jQuery Simple Instagram Fancybox
 * Version: 1.0
 *
 * Author: Chris Rivers
 * http://chrisriversdesign.com
 *
 *
 * Changelog: 
 * Version: 1.0
 *
 */
function cmd(a,b,c){var d="";if(b.mode=="user"){d="https://api.instagram.com/v1/users/"+c+"/media/recent/?callback=?"}else{d="https://api.instagram.com/v1/media/popular?callback=?"}$.getJSON(d,a,function(a){onPhotoLoaded(a,b)})}function onPhotoLoaded(a,b){if(a.meta.code==200){var c=a.data;if(c.length>0){for(var d in c){var e=true;if(b.numberOfImages!=0){var f=parseInt(d)+1;if(f>b.numberOfImages){e=false}}var g=c[d];var h="";var i=b.tags;i=i.split(",");var j=false;if(i[0]){$.each(i,function(a){$.each(g["tags"],function(b){if(i[a]==g["tags"][b]){j=true}})})}else{j=true}if(j==true&&e==true){if(b.captionOn){var k="";if(g.caption){k=g.caption.text}else{k="Instagram Photo"}h='<a class="instagram-photo" id="p'+g.id+'" href="'+g.images.standard_resolution.url+'" title="'+k+" ("+g.likes.count+' Likes)" rel="groupGallery">'}else{h='<a class="instagram-photo" id="p'+g.id+'" href="'+g.images.standard_resolution.url+'" rel="groupGallery">'}var l="None";if(g.tags[0]){l=g.tags[0]}h+='<img src="'+g.images.thumbnail.url+'" width="100%" rel="'+l+'">';h+="</a>";$(h).appendTo(".insta")}}$(".instagram-photo").hide().each(function(a){currentPhoto=$(this);if(b.appearEffect=="slide"){currentPhoto.delay(b.delayInterval*a).slideDown(b.speed)}else if(b.appearEffect=="motion"){currentPhoto.delay(b.delayInterval*a).animate({width:["toggle","swing"],height:["toggle","swing"]},b.speed,function(){})}else{currentPhoto.delay(b.delayInterval*a).fadeIn(b.speed)}})}else{alert("empty")}}else{alert(a.meta.error_message)}}function instagramFetch(a){var b=a.accessToken;var c={access_token:b};if(a.mode=="user"){var d=a.userID;var e=d.split(",");for(var f=0;f<e.length;f++){cmd(c,a,e[f])}}else{cmd(c,a,"No User")}}function startFancybox(){$(".insta a.instagram-photo").live("hover",function(){$(".insta a.instagram-photo").fancybox({nextEffect:"elastic",prevEffect:"elastic",overlayOpacity:.8,overlayColor:"#000000",arrows:true,titlePosition:"outside"});return false})}$.fn.simpleInstagramFancybox=function(a){var b={mode:"popular",accessToken:"3794301.f59def8.e08bcd8b10614074882b2d1b787e2b6f",userID:"1138644",speed:700,delayInterval:80,appearEffect:"fade",captionOn:false,tags:"",numberOfImages:0};$.extend(b,a);return this.each(function(){$(document).ready(function(){instagramFetch(b);startFancybox()});$(".instagram-photo").live({mouseenter:function(){var a=$(this);var b=a.height();var c=a.width();a.append('<div class="instagram-hover-cover"></div>');a.find(".instagram-hover-cover").hide().css({height:b,width:c});$(".instagram-hover-cover").hide().fadeTo("fast",.6)},mouseleave:function(){var a=$(this);a.find(".instagram-hover-cover").remove();a.find(".instagram-hover-icon").remove()}})})}


	