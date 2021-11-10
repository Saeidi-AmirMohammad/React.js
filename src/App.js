import logo from './logo.svg';
import './App.css';
import Card from './Card';
import React, { useState } from 'react';

function App() {

  const [stateArticles, setArticlesState] = useState({
    articles: [
      { id: 1, title: "article", text: "welcome To ReactApp_1", footer: "footerText_1" },
      { id: 2, title: "article", text: "welcome To ReactApp_2", footer: "footerText_2" },
      { id: 3, title: "article", text: "welcome To ReactApp_3", footer: "footerText_3" },
    ]
  })

  const loadMore = (e) => {
   let articles= [
      { id: 4, title: "article", text: "welcome To ReactApp_4", footer: "footerText_4" },
      { id: 5, title: "article", text: "welcome To ReactApp_5", footer: "footerText_5" },
      { id: 6, title: "article", text: "welcome To ReactApp_6", footer: "footerText_6" }
    ] 
    
    setArticlesState({
      articles : [...stateArticles.articles , ...articles]
    })
  }

  

  return (
    <div className="app">
      {
        stateArticles.articles.map(article => <Card headTitle={article.title} body={article.text} footerText={article.footer} />)
      }

      <button onClick={loadMore}>LoadMore</button>
    </div>
  )

}



// class App extends React.Component {
//   state = {
//     articles: [
//       { id: 1, title: "oneTitle", text: "welcome To ReactApp_1" , footer: "footerText_1"},
//       { id: 2, title: "twoTitle", text: "welcome To ReactApp_2" , footer: "footerText_2"},
//       { id: 3, title: "threeTitle", text: "welcome To ReactApp_3" , footer: "footerText_3"}

//     ]
//   }

//   constructor(){
//     super()
//     setTimeout(() => {
//       this.setState ({
//         articles: [
//           { id: 4, title: "oneTitle", text: "welcome To ReactApp_4" , footer: "footerText_4"},
//           { id: 5, title: "twoTitle", text: "welcome To ReactApp_5" , footer: "footerText_5"},
//           { id: 6, title: "threeTitle", text: "welcome To ReactApp_6" , footer: "footerText_6"}

//         ]
//       })
//     }, 2000);
//   }

//   render() {
//     return (
//       <div className="app">
//         <Card headTitle={this.state.articles[0].title} body={this.state.articles[0].text} footerText={this.state.articles[0].footer} />
//         <Card headTitle={this.state.articles[1].title} body={this.state.articles[1].text} footerText={this.state.articles[1].footer}/>
//         <Card headTitle={this.state.articles[2].title} body={this.state.articles[2].text} footerText={this.state.articles[2].footer}/>
//       </div>
//     )
//   }
// }

export default App;
