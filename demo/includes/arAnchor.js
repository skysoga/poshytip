/*
 * base on jQuery - arAnchor v1.0
 * Copyright(c) 2015 by RJCMS-chp 
 * Date: 2015-07-21
 */
;
$(function(){
	var $arContent = $('#arContent'),
        $articleBox = $('#content'),
        ot = $('#arAnchorBar').offset().top,
	    $arContentAnchor = $arContent.find('.arContent-anchor');
         
    //create an anchorbar
    var $arCatalog = $('<div class="arCatalog">' + 
    	               '<div class="arCatalog-line"></div>' +
    	               '<div class="arCatalog-list"><dl></dl></div>');

	$arContentAnchor.each(function(i){
		var $this = $(this),
		    acIndex = '',
		    $dd = $('<dd><span class="arCatalog-index"></span><a></a><span class="arCatalog-dot"></span></dd>');
		if($arContentAnchor.eq(i).hasClass('headline-1')){
            acIndex = /\d/.exec($this.find('.arContent-index').text())[0];
            $dd.addClass('arCatalog-tack1');
		}else{
            acIndex = /\d.\d/.exec($this.find('.arContent-index').text())[0];
            $dd.addClass('arCatalog-tack2');
		}
        $dd.find('.arCatalog-index').text(acIndex);
        $dd.find('a').attr('href','#');
		$dd.find('a').text($this.find('.arContent-title').text());
        
        $dd.appendTo($arCatalog.find('dl')[0]);
	});

    $arCatalog.appendTo($('#arAnchorBar')[0]);
	
	//set height of the line
	var listH = $arCatalog.find('.arCatalog-list').height(),
		ddH = $arCatalog.find('dd').height();
	
	$arCatalog.find('.arCatalog-line').height(listH - ddH + 'px');;
    
    initPosition();
    isShow();

    $(window).scroll(function(){
        isShow();
        isHighlight();
        initPosition();
    });

    $(window).resize(function(){
    	isShow();
    	initPosition();
    });

    //bind event for arCatalogtacks
    $arCatalog.find('a').each(function(i){
    	var $this = $(this);
    	$this.click(function(e){
    		e.preventDefault();
            $('html,body').animate({ scrollTop: $arContentAnchor.eq(i).offset().top - 20},300,'swing');
    	});
    });

    //initialize position of the anchorbar
    function initPosition(){
    	var bH = sHeight() + cHeight() - $articleBox.height() - $articleBox.offset().top;
		if (isIE6()) {
			$arCatalog.css({'position':'absolute','left':($articleBox.outerWidth() + $articleBox.offset().left + 20)});
		} else {
			$arCatalog.css({'position':'fixed','left':($articleBox.outerWidth() + $articleBox.offset().left + 20)});
		}
        
        if (isIE6()) {
			if(bH < 0){
				$arCatalog.css('top', ot - sHeight() > 0 ? Math.abs(sHeight() - ot) + (cHeight() - Math.abs(sHeight() - ot) - $arCatalog.height())/2 - 20 + sHeight() : (cHeight() - $arCatalog.height())/2 + sHeight()); 
			}else{
				$arCatalog.css('top',(cHeight() - bH - $arCatalog.height())/2 + sHeight());
			}
		} else {
			 if(bH < 0){
				$arCatalog.css('top', ot - sHeight() > 0 ? Math.abs(sHeight() - ot) + (cHeight() - Math.abs(sHeight() - ot) - $arCatalog.height())/2 - 20  : (cHeight() - $arCatalog.height())/2 ); 
			}else{
				$arCatalog.css('top',(cHeight() - bH - $arCatalog.height())/2);
			}
		}
    }
    
    //show or hide the anchorbar
    function isShow(){
        if(sHeight() - ot <= 0 ){
            cHeight() - Math.abs(sHeight() - ot) - $arCatalog.outerHeight() > 40 ? $arCatalog.css('visibility','visible'): $arCatalog.css('visibility','hidden'); 
        }else if($articleBox.height() + $articleBox.offset().top - sHeight() - $arCatalog.height() > 40){
            $arCatalog.css('visibility','visible');
        }else{
            $arCatalog.css('visibility','hidden');
        }
    }
    
    //highlight an arCatalogtack
    function isHighlight(){
        $arContentAnchor.each(function(i){
        	var $this = $(this);
        	if($this.offset().top - 80 <= sHeight()){
        		$arCatalog.find('dd').removeClass('on');
        		$arCatalog.find('dd').eq(i).addClass('on');
        	}
        });
    }

    //get browser's viewHeight
    function cHeight(){
        if(document.all){
            return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
        }else{
            return self.innerHeight;
        }
    }

    //get scrollbar's scrollHeight
    function sHeight(){
    	return document.body.scrollTop + document.documentElement.scrollTop;
    }
	
	//isIE6
	function isIE6(){
		return /msie 6.0/.test(navigator.userAgent.toLowerCase()) ? true : false;
	}
});