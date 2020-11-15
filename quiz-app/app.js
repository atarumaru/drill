const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
    answers:[
      'スーパーファミコン',
      'プレステーション',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  },{
    question: '',
    answers:[]

  },{

  }
];

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) =>{
  if(correct === e.target.textContent ){
    window.alert('正解！');
  }else{
    window.alert('不正解！');
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handleIndex++;
};