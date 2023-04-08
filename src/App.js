import { useEffect,useState } from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';


function App() {

  const API_ID="00947413";
  const API_KEY="b1f1ca4b77c93d3d86ee32ee3f3af277	";
  
  
  const [mySearch,setMySearch]=useState("");
  const [myRecipes, setMyRecipes]=useState([]);
  const [wordSubmitted,setWordSubmitted]=useState("avocado");

  useEffect(async()=>{
    const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data= await response.json();
    setMyRecipes(data.hits);
    },[wordSubmitted])

  const myRecipeSearch=(e)=>{
  setMySearch(e.target.value)
  }

  const finalSearch=(e)=>{
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return(
  <div className="App">
  <div className="container">
  <video autoPlay muted loop>
   <source src={video} type="video/mp4" />
   </video>
  <h1>Find a Recipe</h1>
  </div>

<div className='container'>
<form onSubmit={finalSearch}>
  <input className='search' placeholder='search' onChange={myRecipeSearch} value={mySearch}>
  </input>
</form>
</div>
<div className='container'>
<button>
  <img src="https://img.icons8.com/fluency/48/000000/fry.png" className='icons' alt="icon"/>
</button>
</div>

<div>
{myRecipes.map(element=>(
  <MyRecipesComponent
  label={element.recipe.label}
  image={element.recipe.image}
  calories={element.recipe.calories}
  />
  
))}
</div>
</div>
  


  )}
  
export default App;
