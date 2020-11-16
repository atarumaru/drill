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
    question: '記念日は？',
    answers:[
      '2/14',
      '8/6',
      '1/12',
      '2/5'
    ],
    correct: '2/5'
  },{
    question: 'こてつの正式な犬種名は？',
    answers: [
      'メキシカンホワイトチワワ',
      'ブラックホワイトタンロングコートチワワ',
      'ナニワブラックホワイトロングチワワ',
      'アチチウワチチモンチッチ',
    ],
  correct: 'ブラックホワイトタンロングコートチワワ',
  }
];

const quizLength = quiz.length;
let quizIndex= 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }
  quizIndex ++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です！')
  }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handleIndex++;
};