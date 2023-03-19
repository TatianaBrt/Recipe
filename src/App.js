import { useEffect,useState } from 'react';
import video from './food.mp4';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const MY_ID="ef3d3949";
  const MY_KEY="f9f79987232baca4f925698b2baaa0f18";

  const [mySearch,setMySearch]=useState("");
  const [myRecipes,setMyRecipes]=useState([]);

  useEffect(()=>{
    getKey();
    
  },[])
  const getKey=async()=>{
  const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
  console.log(response)
  const data=await response.json();
  setMyRecipes(data.hits);
  }

  const myRecipeSearch=(e)=>{
  setMySearch(e.target.value)
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
<form>
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
