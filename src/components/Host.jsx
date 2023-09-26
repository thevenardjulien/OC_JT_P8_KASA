const Host = ({ host }) => {
  return (
    <div className="host">
      <p>{host.name}</p>
      <img className="host__img" src={host.picture} alt={host.name} />
    </div>
  );
};

export default Host;
