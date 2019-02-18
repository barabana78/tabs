'use strict';
var tab;// заголовок вкладки
var tabContent;// блок содержащий контент вкладки

window.onload=function() {
    tab = document.getElementsByClassName('tab');
    tabContent = document.getElementsByClassName('tabContent');
    hideTabsContent(1);
};

function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('active');
    }
}
//выясняем номер вкладки на которой совершили клик
document.getElementById('container').onclick = function (event) {
    var target = event.target;//ссылка на объект который отправил событие
    if (target.className === 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
};

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {//
        hideTabsContent(0);//сначала закрыли все вкладки
        tab[b].classList.add('active');//табу по которому был клик класс актив
        tabContent[b].classList.remove('hide');//контент для таба где был клик убираем скрытый реж
    }
}