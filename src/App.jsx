import data from "./assets/tv-programs.json";
import logoM6 from "./assets/Logo_M6.png";
import "./App.css";
import Section from "./Section";

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logoM6} alt="Logo de la marque M6" />
        </div>
      </header>
      <main>
        {data.map((element) => {
          /*           console.log(element);
          direct: true;
          duration: "1h";
          image: "https://tel.img.pmdstatic.net/fit/https.3A.2F.2Fprd2-tel-epg-img.2Es3-eu-west-1.2Eamazonaws.2Ecom.2Fprogram.2F353861bb593e22e7.2Ejpg/64x90/quality/80/tous-en-cuisine-en-direct-avec-cyril-lignac.jpg";
          isUnseen: false;
          time: "18h45";
          title: "Tous en cuisine, en direct avec Cyril Lignac";
          type: "Magazine culinaire"; */
          return (
            <Section
              key={element.time}
              time={element.time}
              image={element.image}
              titre={element.title}
              type={element.type}
              duration={element.duration}
              isUnseen={element.isUnseen}
              direct={element.direct}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
