
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import News from './News';

function App() {

  let [articles, setArticles] = useState([]);
  let [category, setcategory] = useState("india");
  let [date, setDate] = useState("2024-03-29");

  useEffect(() => {
    const formattedDate = date.split("-").splice(0, 2).join("-");
    fetch(`https://newsapi.org/v2/everything?q=${category}&language=en&from=${formattedDate}-${new Date().getFullYear()}&apiKey=7711c1b7156b4de0a3fef4f0bce77520`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [category, date])

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container-fluid navbar">
          <Link to='/' className="navbar-brand">TAZA KHABAR</Link>
          <form className="d-flex search-date" role="search">
            <input className="form-control" type="search" name='search' placeholder="Search News" aria-label="Search" onChange={(event) => {
              if (event.target.value !== "") {
                setcategory(event.target.value);
              }
              else {
                setcategory("india");
              }

            }} />
            <input className='form-control date' type='date' name='date' placeholder='select date'
              onChange={(event) => {
                if (event.target.value !== "") {
                  setcategory(event.target.value);
                  setDate(event.target.value);
                } else {
                  setcategory("india");
                  setDate("2024-03-29");
                }
              }} ></input>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
        </div>
      </nav>

      <section className='news-articles'>
        {
          articles.length !== 0
            ?
            articles.map((article) => {
              return (
                <News article={article} />
              )
            })
            :
            <h2 className='nonewsmsg'>NO NEWS FOUND FOR SEARCH TEXT!!!!</h2>

        }




      </section>

      <div className="d-flex flex-sm-row footer">
        <p>BY. HARSH CHOUDHARY</p>
        <p>Cont. 8219776278</p>
       
      </div>




    </div>
  );
}

export default App;
