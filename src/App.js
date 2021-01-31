import './App.css';


function App() {
  return (
    <div className="App">
      <main className="main">
      <div className="circle c1"></div>
      <div className="circle c2"></div>
          
        <section className="sec">
          <div className="dashboard">
            <div className="user">
              <h3>Soumik Laik</h3>
              <p>Subscribe to my Channel.</p>
            </div>
            <div className="links">
              <p>Streams</p>
              <p>Streams</p>
              <p>Streams</p>
              <p>Streams</p>
            </div>
            <div className="promode">
              <h3>Get Premium Membership.</h3>
              <img src="./images/library.png" alt=""/>
            </div>
          </div>
          <div className="games">
            <div className="search">
              <div className="empty"></div>
              <div className="search-bar">
                <h1>Active Search</h1>
                <input className="inp" type="text"></input>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <h3>Assassins Creed</h3>
              </div>
              <div className="card">
              <h3>Call of Duty</h3>
              </div>
              <div className="card">
              <h3>Need for Speed</h3>
              </div>
            </div>
          </div>
        </section>
      
      </main>
    </div>
  );
}

export default App;
