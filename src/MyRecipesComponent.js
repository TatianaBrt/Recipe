function MyRecipesComponent({label, image,calories,ingredients}){
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img src={image} alt="plates"/>
            </div>

<div className="container">
    <ul>
        {ingredients.map((ingredient,index)=>( 
           
            <li key={index}>
            {ingredient}</li>
        ))}
    </ul>


</div>


            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>

            </div>
    )
}


export default MyRecipesComponent;