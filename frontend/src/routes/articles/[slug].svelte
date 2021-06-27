<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    // const url = `/articles/${page.params.slug}.json`;
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query{article(id:"${page.params.id}"){title\ncontent\ndescription\nslug}}`,
      }),
    });
    const {data:{article}} = await res.json();
    console.log(article);
    if (res) {
      return {
        props: {
          article: article,
        },
      };
    }
  }
</script>

<script>
  export let article;
</script>

<ion-card>
  <ion-card-header>
    <ion-card-subtitle>{article.slug}</ion-card-subtitle>
    <ion-card-title>{article.title}</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    Awesome content
    {article.content}
  </ion-card-content>
</ion-card>

<!-- markup (zero or more items) goes here -->

<style>
  /* your styles go here */
</style>
