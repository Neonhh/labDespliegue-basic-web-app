import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <p>Inserte su consulta en la siguiente barra:</p>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <div>
        {QueryProcessor(query) == "" ? "Respuesta no encontrada." : QueryProcessor(query)}
      </div>
    </div>
  );
}
