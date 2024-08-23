<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="EUC-KR" />
    <title>Insert title here</title>

    <link rel="stylesheet" type="text/css" href="./main.css" />

    <script
      src="https://kit.fontawesome.com/62f0a6b856.js"
      crossorigin="anonymous"
    ></script>

    <!-- slick css cdn -->
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    />
    <!-- slick css-theme cdn -->
    <link
      rel="stylesheet"
      type="text/css"
      href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
    />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- jQuery cdn -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- slick js cdn -->
    <script
      type="text/javascript"
      src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    ></script>

    <style>
      /* 6. 슬릭 슬라이드 버튼 */
      .slick-prev:before,
      .slick-next:before {
        color: black;
        border: 1px solid gray;
        flex-grow: 1;
        height: 500px;
      }
    </style>
  </head>

  <body>
    <!-- 1. 사이드 바 -->
    <div class="sideBar">
      <div class="wellcomeMsg"><p>${param.id}님 환영합니다.</p></div>
      <br /><br /><br /><br />

      <div class="menu"><p>메인화면</p></div>
      <br /><br />

      <ul class="menu">
        <p>여행가이드</p>
        <li class="travelGuide" id="loction"><p>지역별</p></li>
        <li class="travelGuide" id="price"><p>가격별</p></li>
        <li class="travelGuide" id="score"><p>만족도별</p></li>
      </ul>
      <br /><br />

      <div class="menu"><a href="./mypage.html">마이페이지</a></div>
      <br /><br /><br /><br /><br /><br /><br /><br />

      <div class="menu"><p>고객센터</p></div>
    </div>

    <!-- 2. 콘텐츠 페이지 -->
    <div class="page">
      <!-- 2-1. 헤더 -->
      <div class="header">
        <h1 class="title">Nestly</h1>
        <!-- <div class="search">
          <input type="search" />
          <input type="button" />
        </div> -->
        <form class="search-box" action="" method="">
          <input class="search-txt" type="text" name="" placeholder="search" />
          <button
            class="search-btn fa-solid fa-magnifying-glass"
            type="submit"
          ></button>
        </form>
      </div>

      <!-- 2-2. 컨테이너 -->
      <!-- span을 이미지 파일로 변경 필요 -->
      <div class="container">
        <div class="recommend">
          <div class="recomTitle">
            <h3>Most Nestly</h3>
            <span></span>
            <p>한 달간 많은 방문자가 다녀간 게스트하우스</p>
          </div>

          <div class="autoplay">
            <div class="item">
              <img src="./img/most_nestly.jpg" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>

            <div class="item">
              <img src="./img/most_nestly1.jfif" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>

            <div class="item">
              <img src="./img/most_nestly2.png" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>

            <div class="item">
              <img src="./img/most_nestly3.jfif" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>
          </div>
        </div>

        <hr />

        <div class="recommend">
          <div class="recomTitle">
            <h3>Top Scores</h3>
            <span></span>
            <p>한 달간 높은 평점을 받은 게스트하우스</p>
          </div>

          <div class="autoplay">
            <div class="item">
              <img src="./img/most_reser.png" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>

            <div class="item">
              <img src="./img/most_reser1.jpg" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>

            <div class="item">
              <img src="./img/most_reser2.jpg" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>

            <div class="item">
              <img src="./img/most_reser1.jpg" />
              <p>농담스테이</p>
              <p>30,000</p>
              <p>경주</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

<script>
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    //이미지 슬라이드 애니메이션
  });

  alert("환영합니다!");
</script>
