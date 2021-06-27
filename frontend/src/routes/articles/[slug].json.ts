export async function get(req) {

    const {slug} = req.params

    console.log(slug);
    
    const res = await fetch("http://localhost:1337/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query{
  article(id:"${slug}"){
    id
    title
    content
  }
}`,
      }),
    });


    return { status: 200, body:await res.json() }  }