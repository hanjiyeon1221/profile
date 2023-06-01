$(document).ready(function(){
    //변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});



    //메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1000);
	});
	$(".pagecheck li").on("click",function(e){
		e.preventDefault();
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i = $(this).index();
		console.log(i);
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1000);
	});



    $(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		
		/*
		if(scroll>=ht*0 && scroll< ht*1){
			$("#menu li").removeClass();
			$("#menu li").eq(0).addClass("on");
		}
		if(scroll>=ht*1 && scroll< ht*2){
			$("#menu li").removeClass();
			$("#menu li").eq(1).addClass("on");
		}
		if(scroll>=ht*2 && scroll< ht*3){
			$("#menu li").removeClass();
			$("#menu li").eq(2).addClass("on");
		}
		if(scroll>=ht*3 && scroll< ht*4){
			$("#menu li").removeClass();
			$("#menu li").eq(3).addClass("on");
		}
		*/
		
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");

				$(".pagecheck li").removeClass();
				$(".pagecheck li").eq(i).addClass("on");

				if(i < 7){
					$(".pagecheck li").css('background','#111');
					$(".zerosoda").css('background-color','#333');
					$(".zerosoda .sec_info .ttl").css('color','#fff');
					$(".zerosoda .sec_info ul li").css('color','#fff');
					$(".zerosoda .sec_info .visit").css('color','#fff');
				}
				if(i < 6){
					$(".pagecheck li").css('background','#712681');
					$(".zerosoda").css('background-color','#fff');
					$(".zerosoda .sec_info .ttl").css('color','#333');
					$(".zerosoda .sec_info ul li").css('color','#333');
					$(".zerosoda .sec_info .visit").css('color','#333');
				}
				if(i < 5){
					$(".pagecheck li").css('background','#f8a5ac');
				}
				if(i < 4){
					$(".pagecheck li").css('background','#0381ff');
				}

				if(i < 2){
					$(".pagecheck li").css('background','#ffd503');
					$('.profile_wrap').addClass('on');
				}
				
				if(i < 1){
					$(".pagecheck li").css('background','transparent');
				}

				function pageChange(section, page){
					if(i == page){
						$(`${section} .img_box`).addClass('on');
						$(`${section} .sec_info`).addClass('on');
					}
				}
				pageChange('.pc', 2);
				pageChange('.mobile', 3);
				pageChange('.responsive', 4);
				pageChange('.wordpress', 5);
				pageChange('.zerosoda', 6);
			};
		}
	});


    //section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
            //마우스휠을 올렸을 때  -> delta=1
            //마우스휠을 내렸을 때  -> delta=-1
            //console.log(delta);

            //마우스 휠을 올렸을때	
              if (delta > 0) {  
                //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
                if($(this).index()!=2){ 
				var prev = $(this).prev().offset().top;
                 //문서 전체를 prev에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":prev},1200);
                 return false;
                } 
            //마우스 휠을 내렸을때	 
              }else if (delta < 0) {  
                //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
				if($(this).index()!=8){ 
				var next = $(this).next().offset().top;
                 //문서 전체를 next에 저장된 위치로 이동
                 $("html,body").stop().animate({"scrollTop":next},1200);  
                 return false;       
              }
			}
              
         });
    
    // 첫 페이지 이미지 무빙
	$(".home").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
		//첫 번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p01").css({"right":20-(posX/30) , "bottom":20-(posY/30) });		

	});
	

	//타이핑 효과
	const content = "안녕하세요? 끝없이 달려나가는 웹퍼블리셔 한지연입니다 :)".split("");
	//let typingBool = false;
	let typingIdx = 0;
	var slogan = $(".main_box div p");
	$(slogan).empty();

	function typing () {
		if (typingIdx < content.length) {
			$(slogan).append(content[typingIdx]);
			typingIdx++; 
		} 
		else{ 
			clearInterval(clear1);  //한번 모두 타이핑 처리 후 멈춤
			//typingIdx = 0;
			//$(slogan).empty();  // 다시 계속해서 loop
			
		} 
	}
	let clear1 =  setInterval(typing, 100);

});









