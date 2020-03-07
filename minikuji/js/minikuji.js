function init(){
var numbers = [1,2,3,4,5,6,7,8,9];

for(var i = numbers.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = numbers[i];
    numbers[i] = numbers[r];
    numbers[r] = tmp;
}

var minikuji = document.getElementById('minikuji');

minikuji.innerHTML = '';

var count = 1;
while(count <= 9){
 minikuji.innerHTML += '<img src=\'img/unselected.png\' id =' + numbers[count - 1] + ' onclick=select(this)>';
 if(count % 3 == 0){
   minikuji.innerHTML += '<br>';
 }
 count++;
}

//�ŏ��ɊJ���Ă��邢��}�X��ݒ�
 var initOpen = String(getRandomIntInclusive(1, 9));
 var initOpenCircle = document.getElementById(initOpen);
 select(initOpenCircle);

 minikuji.innerHTML += '<br><br><img src="img/Retry.png" onClick="init()">'

}

//�I�������}�X�̉摜��؂�ւ���
function select(img){
  img.src = 'img/' + img.id + '.png';
}

//min�`max���܂ރ����_���Ȑ��l���擾
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}