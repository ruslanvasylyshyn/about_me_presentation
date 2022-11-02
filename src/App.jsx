import "./App.css";
import ruslan from "./user.json";
import my_photo from "./img/my_photo.jpg";
import mem from "./img/mem.jpg";

function App() {
  return (
    <main className="App">
      <header className="header">
        <div className="header__title">
          <h1>Вітаю</h1>
          <h2>Мене звати {ruslan.name}</h2>
        </div>
        <img src={my_photo} alt={ruslan.name} />
      </header>
      <main className="main">
        <section className="about_me">
          <p>{ruslan.about_me[0]}</p>
          <p>{ruslan.about_me[1]}</p>
          <p>
            {ruslan.about_me[2]}
            <img src={mem} alt="мем" />
            {ruslan.about_me[3]}
          </p>
        </section>

        <section className="experience">
          <h4>{ruslan.experience[0]}</h4>
          <p>{ruslan.experience[1]}</p>
          <p>{ruslan.experience[2]}</p>
          <p>{ruslan.experience[3]}</p>
        </section>

        <section className="hobby">
          <h4>{ruslan.hobby[0]}</h4>
          <p>{ruslan.hobby[1]}</p>
        </section>
      </main>
    </main>
  );
}

export default App;
