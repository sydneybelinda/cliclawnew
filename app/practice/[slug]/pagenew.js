export default async function Page() {
  const data = await fetch('http://localhost:3000/api/practice')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>{post.link}</li>
      ))}
    </ul>
  )
}