import "./App.css";
import ruslan from "./user.json";
import my_photo from "./img/my_photo.jpg";
import mem from "./img/mem.jpg";

function App() {
  const aboutList = ruslan.about_me.filter((about, i) => i < 3);
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
          <ul>
            {aboutList.map((about) => {
              return <li key={about}>{about}</li>;
            })}
            <img src={mem} alt="мем" />
            {ruslan.about_me[3]}
          </ul>
        </section>

        <section className="experience">
          <ul>
            {ruslan.experience.map((exp) => (
              <li key={exp}>{exp}</li>
            ))}
          </ul>
        </section>

        <section className="hobby">
          <ul>
            {ruslan.hobby.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </section>
      </main>
    </main>
  );
}

export default App;
