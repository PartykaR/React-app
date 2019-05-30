import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "111111111111111Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem, non magni delectus odit est ipsum distinctio reprehenderit maxime rem soluta fuga et vel totam pariatur, natus dolorum officia. Neque?"
  },
  {
    id: 2,
    title: "Czym jest paradoks farmiego",
    author: "Janusz Mądry",
    text: "222222222222222Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem, non magni delectus odit est ipsum distinctio reprehenderit maxime rem soluta fuga et vel totam pariatur, natus dolorum officia. Neque?"
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Beata Qqlka",
    text: "333333333333333Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem, non magni delectus odit est ipsum distinctio reprehenderit maxime rem soluta fuga et vel totam pariatur, natus dolorum officia. Neque?"
  },
]

const HomePage = () => {

    const artList = articles.map(article => (
      <Article key={article.id} {...article} />
    ))
    return (
      <div className='home'>
          {artList}
      </div>
    );
}

export default HomePage;