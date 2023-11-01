// 보그 PJ 카테고리 페이지 JA - category.js

import dFn from "./dom.js";

// 카테고리 데이터 불러오기 : assert type JASON
import catData from './data/category_data.json' assert{type:'json'};
console.log(catData);


// 카테고리 페이지 기능 구현하기
// 요구사항: url로 전달된 키값을 읽어서 
// 페이지의 데이터를 셋팅한다

// 1. url 전달된 전체 url 읽기  => 현재 주소를 읽어옴
let pm = location.href;
console.log(pm)

// 값처리함수 호출하기
setValue();


// 값셋팅하기 함수
function setValue(){
  
  // 2. url에서 키값 분리하기
  // ? 물음표가 Get방식의 시그널이므로
  // 이것의 존재여부로 문자자르기를 실행한다
  // = 기호도 같이 확인함
  try{
    if(pm.indexOf('?')==-1 || pm.indexOf('=')==-1){
      throw '잘못된 접근입니다';
    }// if//
  } /// try ///

  catch(err){ //err 메시지 받기
    alert(err);
    //메인으로 보내기
    location.href='index.html'
  } /// catch ///

  // 3. url키값 추출하기
  pm = pm.split('?')[1].split('=')[1];
  // 특수문자 변환하기
  pm = decodeURIComponent(pm);

  console.log('최종키값',pm);


  // 4. 카테고리 데이터 매칭하기
  // 제이슨 파일 객체 데이터에서 속성으로 선택함
  const selData = catData[pm];
  console.log('선택데이타',selData);
  
  // 5. 데이터 바인딩하기
  // 5-1. 배경이미지 셋팅을 위한 main 요소에 클래스 넣기
  // pm에 담아놓은 이름으로 넣어준다
  // 대상 : .main-area

  $('.main-area').addClass(pm.replace(' & ','-'));
  // '&' -> '-'로 변경하기 :time-gem 로 변경
 

  // 5-2. 카테고리 타이틀 변경하기
  $('.cat-tit').text(selData.제목);
  
  // 5-3. 메뉴변경하기
  // 대상: .lnb
  let lnb = $('.lnb');
  // 메뉴데이터: selData.메뉴
  let mData = selData.메뉴;
  // 5-3-3. 메뉴 리턴함수
  const retMenu = () => mData.map(v=>`<li><a href="#">${v}</a></li>`).join('');

  // 메뉴 없음에 따라 분기하기
  if(mData=='없음'){ // lnb없애기
    lnb.remove();
  } /// if ////

  else{ // 메뉴만들기
    lnb.html(`<ul>${retMenu()}</ul>`);
  } /// else ///


  // 5-4. 서브섹션 타이틀 넣기
  // $(선택자).each((순번,요소)=>{구현부})
  $('.cat-cont-area h2').each((idx,ele)=>{
    $(ele).html(selData.타이틀[idx]);
  }); /// each ////


  // 5-5. 탭메뉴 타이틀 변경 
  // 형식 : 카테고리명 | 보그 코리아 (Vogue Korea) 2023
  // 제이쿼리 prepend() 메서드 사용
  // -> 자식요소 또는 내용의 맨앞에 넣기
  $('title').prepend(pm.toUpperCase() + ' | ');



} //// setValue 함수 ////

