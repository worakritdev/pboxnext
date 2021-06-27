<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page, fetch, session, context }) {
        const url = `/articles/${page.params.slug}.json`;
        const res = await fetch(url);
        const {data:{article}}=await res.json()
        if (res.ok) {
            return {
                props: {
                    article: article
                },
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`),
        };
    }
</script>
<script>
    export let article;
</script>
<ion-card>
    <ion-card-header>
        <ion-card-subtitle></ion-card-subtitle>
        <ion-card-title>{article.title}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        Awesome content
        {article.content}
    </ion-card-content>
</ion-card>
<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->