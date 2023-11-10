function Card(props) {
    const { restaurant_name, cuisine_type } = props.data
    return (
      <div
        onClick={props.onClick}
        style={{ color: 'black', height: 300, width: 300, border: '1px solid black', background: 'white', boxShadow: 'black 7px 13px 17px -2px', margin: 5 }}>
        
        <img width='80' src='https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg' />
  
        <h3>{restaurant_name}</h3>
        <h5>{cuisine_type}</h5>
      </div>
    )
  }
  
  export default Card