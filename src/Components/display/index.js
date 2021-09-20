

function Display({ isAllowed }) {
  return ( <>
    {isAllowed ? (<p className="success">Requisição Completa!</p>) : (<p className="fail">Requisição Falhou!</p>)}
    </>
  );
}

export default Display;
