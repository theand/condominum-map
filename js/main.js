"use strict";
(function() {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new daum.maps.LatLng(37.4020589, 127.1064401), // 지도의 중심좌표
            level: 12 // 지도의 확대 레벨
        };

    var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도 타입 변경 컨트롤을 생성한다
    var mapTypeControl = new daum.maps.MapTypeControl();

    // 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

    // 지도에 확대 축소 컨트롤을 생성한다
    var zoomControl = new daum.maps.ZoomControl();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

    var locs = [
        ['대명 비발디파크(홍천)', 'http://www.daemyungresort.com/vp/', 'http://place.map.daum.net/11700350', 37.6462109, 127.6798098],
        ['대명 소노펠리체(홍천)', 'http://www.daemyungresort.com/sn/', 'http://place.map.daum.net/17580291', 37.6519539, 127.6800656],
        ['대명 델피노(설악)', 'http://www.daemyungresort.com/dp/', 'http://place.map.daum.net/7822925', 38.2120109, 128.4919002],
        ['대명 솔비치 양양', 'http://www.daemyungresort.com/sb/yy/', 'http://place.map.daum.net/26953215', 38.087024, 128.6634546],
        ['대명 솔비치 삼척', 'http://www.daemyungresort.com/sb/sc/', 'http://place.map.daum.net/25657306', 37.4723264, 129.1625543],
        // ['대명 양평', 'http://www.daemyungresort.com/yp/', 'http://place.map.daum.net/7825452', 37.4691956, 127.5304188],
        // ['대명 단양', 'http://www.daemyungresort.com/dy/', 'http://place.map.daum.net/8300177', 36.9777429, 128.360214],
        // ['대명 경주', 'http://www.daemyungresort.com/gj/', 'http://place.map.daum.net/7823984', 35.8465349, 129.2794373],
        // ['대명 변산', 'http://www.daemyungresort.com/bs/', 'http://place.map.daum.net/7823151', 35.6320103, 126.4682649],
        // ['대명 거제 마리나', 'http://www.daemyungresort.com/go/', 'http://place.map.daum.net/19807174', 34.8430593, 128.7005069],
        // ['대명 제주', 'http://www.daemyungresort.com/jj/', 'http://place.map.daum.net/11379388', 33.541178, 126.669603],

        ['한화 설악 쏘라노', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0101', 'http://place.map.daum.net/27025531', 38.2072319, 128.5278665],
        // ['한화 설악 별관', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0100', 'http://place.map.daum.net/25547613', 38.2038748, 128.5339935],
        // ['한화 백암 온천', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0200', 'http://place.map.daum.net/25040750', 36.7226016, 129.3360729],
        // ['한화 지리산', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0300', 'http://place.map.daum.net/10927243', 35.2485501, 127.4912079],
        ['한화 용인 베잔송', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0400', 'http://place.map.daum.net/8137417', 37.1316464, 127.141966],
        // ['한화 양평', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0500', 'http://place.map.daum.net/26020286', 37.5670146, 127.4547495],
        // ['한화 수안보 온천', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0600', 'http://place.map.daum.net/25037788', 36.849557, 127.9832261],
        // ['한화 산정호수 안시', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0700', 'http://place.map.daum.net/25022032', 38.0655631, 127.3122838],
        // ['한화 해운대 티볼리', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0800', 'http://place.map.daum.net/10928789', 35.1544931, 129.142908],
        // ['한화 대천 파로스', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=0900', 'http://place.map.daum.net/25050021', 36.3045691, 126.5176875],
        // ['한화 경주', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=1000', 'http://place.map.daum.net/26507510', 35.8598109, 129.2680491],
        // ['한화 제주', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=1100', 'http://place.map.daum.net/8016361', 33.4489935, 126.635218],
        // ['한화 평창 휘닉스파크', 'http://www.hanwharesort.co.kr/irsweb/resort3/resort/rs_room.asp?bp_cd=1600', 'http://place.map.daum.net/16528524', 37.5786503, 128.3294975],
        //TODO 한화 거제 르시엘

        ['용평 리조트', 'http://www.yongpyong.co.kr/', 'http://place.map.daum.net/8026700', 37.645009, 128.680778],
        ['비체 팰리스(무창포)', 'http://www.beachepalace.co.kr/bp/kor/index.do', 'http://place.map.daum.net/17344020', 36.2392716, 126.5292158],
        //TODO 용평 여수 디오션

        ['휘닉스 제주(휘닉스 아일랜드)', 'http://phoenixhnr.co.kr/jeju/index', 'http://place.map.daum.net/8177478', 33.4305281, 126.9282465]
        //TODO 휘닉스 평창
    ];

    // 마커를 표시할 위치와 title 객체 배열입니다

    var positions = locs.map(function(e) {
        return {
            title: e[0],
            officialLink: e[1],
            daumLink: e[2],
            latlng: new daum.maps.LatLng(e[3], e[4])
        };
    });

    // 마커 이미지의 이미지 주소입니다
    // var imageSrc = "./img/markerStar.svg";
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    var imageSize = new daum.maps.Size(24, 35);
    var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize);
    var markers = positions.map(function(e) {
        var m = new daum.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: e.latlng, // 마커를 표시할 위치
            title: e.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage // 마커 이미지
        });

        var info = new daum.maps.InfoWindow({
            content: `
        <div style="padding: 20px;">
          ${e.title} <br />
          <a href="${e.officialLink}" target=_blank>officialLink</a> <br />
          <a href="${e.daumLink}" target=_blank>daumLink</a>
        </div>`, // 인포윈도우에 표시할 내용
            removable: true
        });

        // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
        // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        (function(marker, infowindow) {
            // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
            daum.maps.event.addListener(marker, 'mouseover', function() {
                infowindow.open(map, marker);
            });
        })(m, info);

        return m;
    });
}());
