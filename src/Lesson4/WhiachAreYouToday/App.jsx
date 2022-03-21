import React from 'react'
import './App.css';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

function App () {
    let first = ['Хмельная', 'Магнетическая', 'Ночная', 'Странно пахнущая', 'Огнеопасная', 'Адская', 'Шаловливая', 'Мармеладная'];
    let second = ['Мозоль', 'Бочка', 'Бандероль', 'Наида', 'Вуаль', 'Чаша', 'Свиноматка', 'Течь', 'Самса'] 

    let [words, addWord] = React.useState([]);

    function GenerateWord() {
        let firstWord = first[Math.floor(Math.random() * first.length)];
        let secondWord = second[Math.floor(Math.random() * second.length)];
        addWord([...words,[firstWord,secondWord]]);
    }

    return(
        <>
        <h1>Какой ты сегодня</h1>
        <div className="buttons">
            <button onClick={() => {GenerateWord()}}>Узнать</button>
            <button onClick={() => {addWord([])}}>Забыть обо всем</button>
        </div>
        {words.length ? <div className='phrases'>{words.map((words, index) => {return (<Phrase key={index} first={words[0]} second={words[1]}>{}</Phrase>)})}</div> : <EmptyBlock/>}
        </>
    )
}

export default App;