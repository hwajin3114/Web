$(document).ready(function() {
    let page = window.location.pathname;
    let jspage = page.substring(page.lastIndexOf('.') + 1);
    page = page.substring(page.lastIndexOf('/') + 1, page.lastIndexOf('.'));

    $('.nav-item').on('click', function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    if(jspage == 'jsp') {
        $('#carouselExampleIndicators').css('display', 'none');
        $('#carouselExampleIndicators').after($('<div />').css('height', '23px'));
        // 내가 선택한 항목만 출력
        $(data).each(function(idx, obj) {
            if(obj.item_no == localStorage.getItem('itemNo')) {
                createContentItem(obj);
            }
        });
    } else {
        $('#carouselExampleIndicators').css('display', 'display');
        // html
        let grepData = $.grep(data, function(a, b) { 
            return a.category == page;
        });
    
        // 카테고리 별 데이터 출력
        $(grepData).each(function(idx, obj) {
            createRowItem(obj);
        });
    }

    // $(data).each(function(idx, obj) {
    //     createRowItem(obj);
    // });
});

function createContentItem(obj) {
    let div1 = $('<div />').addClass('col-lg-12 col-md-12 mb-4');
    let div2 = $('<div />').addClass('card h-100');

    // data.link : data.js의 link 값을 읽어오겠다.
    let a1 = $('<a />').attr('href', obj.link + '?item_no=' + obj.item_no);
    let img1 = $('<img />').addClass('card-img-top').attr({'src': obj.image, 'alt': obj.alt});

    let div3 = $('<div />').addClass('card-body');
    let h_4 = $('<h4 />').addClass('card-title');
    let a2 = $('<a />').attr('href', obj.link + '?item_no=' + obj.item_no).html(obj.item + "(" + obj.item_no + ")");
    // 금액을 원화 표시로 format
    let h_5 = $('<h5 />').html(new Intl.NumberFormat('ko-KR', {style:'currency', currency: 'KRW'}).format(obj.price));
    let p1 = $('<p />').addClass('card-text').html(obj.content);

    let div4 = $('<div />').addClass('card-footer');
    let star = '';
    // floor : 낮은 점수값을 가져온다. ex) 3.5 -> 3
    // 소수점 무시. ★
    let cnt = Math.floor(obj.star);
    for(let i=0; i<cnt; i++) {
        star += '&#9733;';
    }
    let half = obj.star - cnt;
    if(half == 0.5) {
        star += '&#9734;';
    }

    let small = $('<small />').addClass('text-muted').html(star);

    a1.append(img1);
    h_4.append(a2);
    div3.append(h_4, h_5, p1);
    div4.append(small);
    div2.append(a1, div3, div4);
    div1.append(div2);

    $('.container .row .row').append(div1);
}
    
function createRowItem(obj) {
    let div1 = $('<div />').addClass('col-lg-4 col-md-6 mb-4');
    let div2 = $('<div />').addClass('card h-100');

    // data.link : data.js의 link 값을 읽어오겠다.
    let a1 = $('<a />').attr('href', obj.link + '?item_no=' + obj.item_no);
    let img1 = $('<img />').addClass('card-img-top').attr({'src': obj.image, 'alt': obj.alt});

    let div3 = $('<div />').addClass('card-body');
    let h_4 = $('<h4 />').addClass('card-title');
    let a2 = $('<a />').attr('href', obj.link + '?item_no=' + obj.item_no).html(obj.item + "(" + obj.item_no + ")");
    // 금액을 원화 표시로 format
    let h_5 = $('<h5 />').html(new Intl.NumberFormat('ko-KR', {style:'currency', currency: 'KRW'}).format(obj.price));
    let p1 = $('<p />').addClass('card-text').html(obj.content);

    let div4 = $('<div />').addClass('card-footer');
    let star = '';
    // floor : 낮은 점수값을 가져온다. ex) 3.5 -> 3
    // 소수점 무시. ★
    let cnt = Math.floor(obj.star);
    for(let i=0; i<cnt; i++) {
        star += '&#9733;';
    }
    let half = obj.star - cnt;
    if(half == 0.5) {
        star += '&#9734;';
    }

    let small = $('<small />').addClass('text-muted').html(star);

    a1.append(img1);
    h_4.append(a2);
    div3.append(h_4, h_5, p1);
    div4.append(small);
    div2.append(a1, div3, div4);
    div1.append(div2);

    $('.container .row .row').append(div1);
}