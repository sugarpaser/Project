/*
totaPage : 총 게시글 수
page_num : 한 페이지 당 출력되는 게시글 갯수
block_num : 한번에 출력될 수 있는 최대 블록 수
current_block : 현재 블록 위치
data : 게시글 데이터를 담고 있는 객체 배열
post_data_print(block) : 게시글 데이터 출력하기 / 매개변수 : 선택 블럭
block_print(front_block) : 블럭 출력하기 / 매개변수 : 가장 앞에 오는 블럭
*/

// 총 게시글 수
let totalPage = 1000;
// 한 페이지 당 출력되는 게시글 갯수
let page_num = 20;
// 한번에 출력력될 수 있는 최대 블록 수
// ex) [1][2][3][4][5] -> 블록
let block_num = 10;
// 블록의 총 수를 계산한다.
let total_block = totalPage%20 == 0 ? totalPage/20 : totalPage/20+1 ;
// 현재 블록 위치를 알려준다
let current_block = 1;

/*
게시글 데이터를 담고 있는 객체 배열
번호 : data[게시글 번호].notice_num
제목 : data[게시글 번호].title
작성자 : data[게시글번호].writer
작성일 : data[게시글번호].date_created
조회 : data[게시글번호].Lookkup_num
좋아요 : data[게시글번호].like
*/
let data = new Array();

// 게시글 데이터를 담고 있는 객체를 1000개 추가한다.
for(let i=1; i<=totalPage; i++){
    data[i] = {
        notice_num : i,
        title:"제목"+i,

    }
}