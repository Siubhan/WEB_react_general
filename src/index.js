import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const listProf = [
  {
    prof: "Web-разработчиков",
    discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
пользователям было быстро и удобно.`},
  {
    prof: "Гейм-девелоперов",
    discr: `Создают видеоигры. Погружают всех нас в новые миры.`
  },
  {
    prof: "AI/ML-cпециалистов",
    discr: `Используют в деле искусственный интеллект и машинное
обучение. Фактами и прогнозами делает бизнесу хорошо.`},
  {
    prof: "Аналитиков данных",
    discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
бизнесу получать еще больше денег.`},
  {
    prof: "Мобильных разработчиков",
    discr: `Создают мобильные приложения, которые найдут тебя везде.
Умещают на маленьких экранах максимальный функционал.`}
];

const listImg = ["logo_dvfu.png", "logo_imct.png"]

const listNapravleniya = [
  {
    dir: "Технология программирования",
    discr: `Студенты учатся полному циклу разработки программных систем — от работы с заказчиком, анализа предметной области и разработки требований до разработки архитектуры программного средства, написания программных кодов, верификации и тестирования программ.`,
    limit: "25",
    passScore: "199"
  },
  {
    dir: "Сквозные цифровые технологии",
    discr: `Подойдет для тех, кто хочет одними из первых в России работать в области сквозных цифровых технологий — технологии виртуальной и дополненной реальности, систем распределенного реестра (блокчейн), больших данных, облачных технологий, компонент робототехники, искусственного интеллекта и машинного обучения.`,
    limit: "50",
    passScore: "204"
  },
  {
    dir: "Программная инженерия",
    discr: `Направление подготовки «Программная инженерия» появилось в нашей стране сравнительно недавно. Оно отвечает сложившейся в настоящее время мировой практике в области разработки программного обеспечения и представлениям о перспективах развития этой отрасли.`,
    limit: "125",
    passScore: "206"
  },
]

function Head(props) {

  const logoImages = listImg.map((img, index) =>
    <img key={index} src={img} />
  );
  return (
    <div className="head">
      {logoImages}
    </div>
  )
}

function Tagline() {

  return (
    <h1>
      Хватит уже игр, <br /> пора <br /> разрабатывать и зарабатывать
    </h1>
  )
}

function Button(props) {

  return (
    <a href="#Anchor" >
      <input className="button" type="button" value={props.val} />
    </a>
  )
}

function Professions(props) {
  const listProf = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );
  return (
    <div className="prof">
      <h2>{props.title} </h2>
      <ul>
        {listProf}
      </ul>
    </div>
  )
}

function ProfItem(props) {

  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return (
    <li onClick={press}>
      <span className="left">{props.prof}</span>
      <span className="right">{isOpen ? "×" : "+"}</span>
      {isOpen &&
        <p> {props.discr}</p>
      }
    </li>
  )
}

function Napravleniya(props) {
  const listDirs = props.list.map((item, index) =>
    <Napravlenie key={index} dir={item.dir} limit={item.limit} passScore={item.passScore} discr={item.discr} />
  );
  return (
    <a id="Anchor">
      <div className="napr-block">
        <h2>{props.title} </h2>
        <ul>
          {listDirs}
        </ul>
      </div>
    </a>
  )
}

function Napravlenie(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return (
    <li onClick={press}>
      <span className="left"><span>{props.dir}</span><span> Бюджетных мест: {props.limit}</span><span> Проходной балл: {props.passScore}</span></span>
      <span className="right">{isOpen ? "×" : "+"}</span>
      {isOpen &&
        <p> {props.discr}</p>
      }
    </li>
  )
}

function Content() {

  return (
    <>
      <Head listImg={listImg} />
      <Tagline />
      <Button val="Хочу учиться!" />
      <Professions title="Обучаем на:" list={listProf} />
      <Napravleniya title="Направления подготовки:" list={listNapravleniya} />
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Content />);


reportWebVitals();
