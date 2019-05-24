//nav
var option = document.getElementById('list');
var options = option.getElementsByTagName('li');
var imgs0 = document.getElementsByClassName('imgs0');
var imgs1 = document.getElementsByClassName('imgs1');
for (var i = 0; i < options.length; i++) {
  options[i].index = i;
  options[i].onmouseover = function() {
    for (var i = 0; i < options.length; i++) {
      options[i].className = '';
      imgs0[i].style.display = 'inline-block'
      imgs1[i].style.display = 'none'
    }
    imgs1[this.index].style.display = 'inline-block'
    imgs0[this.index].style.display = 'none'
    this.className = 'font_color';
  }
}
for (var i = 0; i < options.length; i++) {
  options[i].onmouseout = function() {
    for (var i = 0; i < options.length; i++) {
      options[i].className = '';
      imgs0[i].style.display = 'inline-block'
      imgs1[i].style.display = 'none'
    }
    imgs1[0].style.display = 'inline-block'
    imgs0[0].style.display = 'none'
    options[0].className = 'font_color';
  }
}
//滑动条
var lists1 = document.getElementsByClassName('list_1')[0];
var lis = lists1.getElementsByTagName('li');
var lists = document.getElementsByClassName('list_2');
var spans = document.getElementById('huadong');
for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onmouseover = function() {
    for (var i = 0; i < lis.length; i++) {
      lists[i].style.display = 'none';
    }
    lists[this.index].style.display = 'block'
    var speed1 = 86;
    spans.style.left = speed1*this.index+'px';
  }
}
//手风琴
var sfq_img = document.getElementsByClassName('sfq_img')[0];
var sfq_imgs = sfq_img.getElementsByTagName('img')
for (var i = 0; i < sfq_imgs.length; i++) {
  sfq_imgs[i].index = i;
  sfq_imgs[i].onmouseover = function() {
    if (this.index == 0) {
      sfq_imgs[0].style.left = 0+'px';
      sfq_imgs[1].style.left = 500+'px';
      sfq_imgs[2].style.left = 730+'px';
      sfq_imgs[3].style.left = 950+'px';
    } else if (this.index == 1) {
      sfq_imgs[1].style.left = 230+'px';
      sfq_imgs[2].style.left = 730+'px';
      sfq_imgs[3].style.left = 950+'px';
    } else if (this.index == 2) {
      sfq_imgs[1].style.left = 230+'px';
      sfq_imgs[2].style.left = 460+'px';
      sfq_imgs[3].style.left = 950+'px';
    } else if (this.index == 3) {
      sfq_imgs[1].style.left = 230+'px';
      sfq_imgs[2].style.left = 460+'px';
      sfq_imgs[3].style.left = 670+'px';
    }
  }
}
//二级联动菜单 动画效果
var box = document.getElementsByClassName('box');
var spot = document.getElementsByClassName('dian');
var second = document.getElementsByClassName('second');
var inner = document.getElementsByClassName('inner');
var hdt = document.getElementsByClassName('hdt');

var indexes;

for (var i = 0; i < inner.length; i++) {
  inner[i].index = i;
  inner[i].onmouseenter = function() {
      var ulh = second[this.index].offsetHeight;
      var a = this.index;
      box[this.index].style.height = ulh+'px';
      spot[this.index].style.display = 'block';
      box[this.index].style.top = 55+'px';
      setTimeout(function(){
        box[a].style.top = 35+'px';
      },200)

      indexes = this.index;
      var second1 = document.getElementsByClassName('second');
      var linbr = second1[indexes].getElementsByTagName('li');
      var slider = document.getElementsByClassName('slide');
      hdt[indexes].height = ulh+'px';
      for (var i = 0; i < linbr.length; i++) {
        linbr[i].index = i;
        linbr[i].onmouseover = function() {
          var speed = 30;
          slider[indexes].style.top = (speed*this.index+20)+'px';
        }
      }


  }
    inner[i].onmouseleave = function() {
      box[this.index].style.top = 55+'px';
      box[this.index].style.height = 0+'px';
      spot[this.index].style.display = 'none';
    }
  }

  function onenter() {
    document.getElementById('list_3').style.height = 174+'px';
  }
  function oneleave() {
    document.getElementById('list_3').style.height = 0+'px';
  }
