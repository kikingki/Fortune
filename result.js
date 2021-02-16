
// 뒤로가기
const back = () => {
  let url = window.location.href;
  // result.html을 지우고 index.html을 붙여 url 이동
  let new_url = url.split("result.html")[0] + "index.html";
  window.location.href = new_url;
};


// 공유하기
const share = () => {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = window.location.href;

  // select 메서드는 input text나 textarea 요소를 드래그한 듯이 선택하기 위해 사용하는 함수
  t.select();

  // execCommand() 메서드는 드래그된 텍스트를 인자로 받은 값을 통해 변환한다.
  // 'copy'는 텍스트를 클립보드로 복사하는 인자
  // 'paste', 'cut'도 가능
  document.execCommand("copy");

  document.body.removeChild(t);
  alert("복사 완료!");
};
