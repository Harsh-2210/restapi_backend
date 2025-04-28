

const fetchData = async()=>{
    const response = await fetch('http://localhost:8000/players/all')
    const data = await response.json()
    console.log(data);  
}
fetchData()