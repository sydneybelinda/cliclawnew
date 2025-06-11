const data = await fetch('http://127.0.0.1:3000/api/practice')
const practices = await data.json()

export default practices

