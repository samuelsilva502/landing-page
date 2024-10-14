import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa o Axios
import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [recipes, setRecipes] = useState([]); // Estado para armazenar as receitas
  const [filter, setFilter] = useState({ tipo: '', tempo: '', ingredientes: '' });
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar as receitas da API usando Axios
  useEffect(() => {
    const fetchRecipes = async () => {
      setRecipes([]); // Limpa as receitas antes de cada nova requisição
      setError(null); // Limpa erros

      try {
        // Verifica cada filtro e faz a requisição apropriada
        if (filter.tipo) {
          const response = await axios.get(`http://localhost:3000/api/receitas/tipo`, {
            params: { tipo: filter.tipo },
          });
          setRecipes(response.data);
        } else if (filter.tempo) {
          const response = await axios.get(`http://localhost:3000/api/receitas/tempo`, {
            params: { tempo: filter.tempo },
          });
          setRecipes(response.data);
        } else if (filter.ingredientes) {
          const response = await axios.get(`http://localhost:3000/api/receitas/ingredientes`, {
            params: { ingredientes: filter.ingredientes },
          });
          setRecipes(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRecipes();
  }, [filter]); // O useEffect será acionado quando o filtro mudar

  // Handlers para alterar os filtros
  const handleTipoChange = (e) => setFilter({ ...filter, tipo: e.target.value });
  const handleTempoChange = (e) => setFilter({ ...filter, tempo: e.target.value });
  const handleIngredientesChange = (e) => setFilter({ ...filter, ingredientes: e.target.value });

  // Exibe uma mensagem de erro, caso ocorra
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="App">
      <Header />

      <div>
        <label>
          Tipo:
          <input type="text" value={filter.tipo} onChange={handleTipoChange} placeholder="sobremesas" />
        </label>
        <label>
          Tempo:
          <input type="number" value={filter.tempo} onChange={handleTempoChange} placeholder="30" />
        </label>
        <label>
          Ingredientes:
          <input type="text" value={filter.ingredientes} onChange={handleIngredientesChange} placeholder="tomate" />
        </label>
      </div>

      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Renderiza um card para cada receita */}
        {recipes.map((recipe) => (
          <Card
            key={recipe.id} // Usamos o ID único da receita como chave
            title={recipe.title}
            description={`Tipo: ${recipe.type}, Tempo: ${recipe.time}`}
            ingredients={recipe.ingredients} // Passa a lista de ingredientes
          />
        ))}
      </div>
    </div>
  );
}

export default App;
