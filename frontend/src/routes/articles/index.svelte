<script context="module">
  //import { post } from "$lib/api";
  //import { API } from "$lib/Env";

  export async function load({ fetch }) {
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query{
  articles(where:{}){
    id
    title
    content
    slug
  }
}`,
      }),
    });
    const {
      data: { articles },
    } = await res.json();
    return { props: { articles: articles } };
  }


  function refCtrl(){
    
  }
</script>

<script>
  export let articles;
</script>

{#each articles as article}
  <a href="/articles/{article.slug}" on:click={refCtrl}>
    <p>
      {article.title}
    </p>
  </a>
{/each}

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>
