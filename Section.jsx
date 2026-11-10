// Récupération des props envoyées par App.jsx :
const Section = (props) => {
  /*return console.log(props); retourne un object contenant toutes les données*/
  return (
    <article>
      <div>
        <h3>{props.time}</h3>
        <img src={props.image} alt="Affiche du programme TV" />
      </div>
      <div>
        <h2>{props.titre}</h2>
        <span>{props.type}</span>
        <span>{props.duration}</span>
        {props.isUnseen ? <span className="badge-red">Inédit</span> : null}
        {props.direct ? <span className="badge-red">Direct</span> : null}
      </div>
    </article>
  );
};

export default Section;
