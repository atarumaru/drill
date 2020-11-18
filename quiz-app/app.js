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
  },
  {
    question: '長野県の県歌の名前は？',
    answers: [
      '信濃の国',
      '信州讃歌',
      'ジンギスカン',
      '小さな恋の歌',
    ],
  correct: '信濃の国',
  }
];
const quizLngth = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const setupQuiz = () => {
  document.getElementById('js-question').textContent =  quiz[quizIndex].question;
  let buttonLength = $button.length;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength ){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  };
};
setupQuiz();
const clickHandler = (e) => {
  if (e.target.textContent === quiz[quizIndex].correct){
    window.alert ('正解')
    score ++;
   }else{
   window.alert ('不正解')
   }
   quizIndex++;
   if (quizIndex < quizLngth){
    setupQuiz();
   }else{
    window.alert('終了'+'あなたのスコアは'+ score + 'です')
   }
};
let handleIndex = 0;
const buttonLength = $button.length
while (handleIndex < buttonLength){
$button[handleIndex].addEventListener('click', (e) => {
  clickHandler (e);
});
 handleIndex++;
};