'use strict';
{

const menuItems = document.querySelectorAll('.menu li a');
const contents = document.querySelectorAll('.content');

menuItems.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    //item は a 要素になりますが、リンク先にページ遷移するという規定の動作はキャンセルしたいので、こちらの引数を e として Event オブジェクトを受け取ってから e.preventDefault() としてあげれば OK。
    e.preventDefault();

    menuItems.forEach(item => {
    item.classList.remove('active');　// メニュータブの activeを削除
    });

    clickedItem.classList.add('active'); //クリックされたメニュータブに activeを追加

    contents.forEach(content => {
      content.classList.remove('active'); //コンテントの activeを削除
    });

    // クリックされたメニュー項目に対応する要素を取得
    // id はクリックされたメニュー項目の dataset.id を使い、クリックされたメニュー項目に対応する content 要素が取得。
    // あとは classList を使って active クラスを付けてあげれば OK。
    document.getElementById(clickedItem.dataset.id).classList.add ('active');
    //data-id=xxx(クリックされたタブ)され、そのidと同じ要素(該当コンテント))を取得し、'active'を追加。

  });

});

}

