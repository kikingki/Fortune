# 2021년 띠별 신년운세 페이지 by SpartaCodingClub
=============
## 완성 페이지
<img src="/image/index페이지.png" width="80%" height="40%" alt="index 페이지"></img><br/>
<img src="/image/result페이지.png" width="80%" height="40%" alt="result 페이지"></img><br/>

+ msg 태그의 display:none으로 설정해 숨긴 후, 사용자가 클릭한 띠의 메세지만 display:block로 변경해 운세 메세지를 띄운다.
+ 뒤로가기와 공유하기 기능을 구현했다. 이 과정에서 url을 수정하는 방법과 select(), execCommand() 메서드 사용법을 알게 됐다.
```
// 뒤로가기
const back = () => {
  let url = window.location.href;
  let new_url = url.split("result.html")[0] + "index.html";
  window.location.href = new_url;
};
```
```
// 공유
const share = () => {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = window.location.href;

  t.select();
  document.execCommand("copy");

  document.body.removeChild(t);
  alert("복사 완료!");
};
```

<img src="/image/모바일반응형.png" width="30%" height="60%" alt="모바일반응형"></img><br/>

+ @media를 사용해 미디어쿼리를 지정했다. width가 780px이하일 경우, 배경의 패턴을 위로 옮기고 rtan 태그들을 크기에 맞춰 2~4개로 정렬하고 글씨색을 변경했다.
```
@media screen and (max-width: 780px)  {

    body {
        background-position: 70px -70px;
        background-size: 500px;
    }

    .rtans {
        width: 100%;
        height: 50%;
    }

    .rtans > a {
        color: darkred;
    }

}
```


<img src="/image/og태그.png" width="40%" height="40%" alt="og 태그"></img><br/>

+ 링크의 미리보기 부분을 지정해 띄워주는 og태그를 사용했다. 
```
<meta property="og:title" content="신년운세 by 르탄!"/>
<meta property="og:description" content="2021년 띠 별 운세를 알려드립니다"/>
<meta property="og:image" content="https://new-year.spartacodingclub.kr/images/ogimage.png"/>

```
