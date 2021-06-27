<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("http://localhost:5000/blogs");

    const blogs = await res.json();
    return { props: { blogs: blogs } };
  }
</script>

<script>
  import { filterStore } from "$lib/utils/userStores";

  let q = "";
  import Fuse from "fuse.js";
  export let blogs = [];
  const fuse = new Fuse(blogs, {
    keys: ["title", "content"],
    includeScore: true,
  });

  $: $filterStore = fuse.search(q).map((x) => x.item);
</script>

<!-- markup (zero or more items) goes here -->
<div class="m-4">
  <input
    pattern="{q}"
    type="search"
    placeholder="Search . .  ."
    bind:value="{q}"
    list="q"
    class=" ring-indigo-700 ring-2 shadow-md border-2 outline-none"
  /><select class="appearance-none m-4 p-2" bind:value="{q}">
    {#each blogs as blog}
      <!-- content here -->
      <option value="{blog.title}">{blog.title}</option>
    {/each}
  </select>
  <div class="flex flex-col ">
    {#each $filterStore as route}
      <div
        class="bg-indigo-200  gap-5 hover:border-l-4 border-purple-600 pb-4 shadow-sm"
      >
        <details>
          <summary class="list-none  flex justify-between">
            <p>
              {route.title}
            </p>
            <a href="{route.url}" class="underline">Link</a>
          </summary>
          <div class="bg-indigo-100">
            {route.content}
          </div>
        </details>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
