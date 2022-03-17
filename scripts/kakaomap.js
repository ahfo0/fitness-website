// 카카오 지도 실행
var container = document.getElementById('map');
		var options = {
            // 을지로 2가
			center: new kakao.maps.LatLng(37.5659, 126.9851),
			level: 3
		};
		var map = new kakao.maps.Map(container, options);