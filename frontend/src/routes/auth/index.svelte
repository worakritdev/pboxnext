<script>
  import Register from "$lib/components/Register.svelte";

  import Box from "$lib/components/Box.svelte";
  import { jwt, user } from "$lib/utils/userStores";
  import Login from "$lib/components/Login.svelte";


  let hvAccount = false;
</script>

<section>
  {#if $jwt}
    <Box>
      {$user}
    </Box>
  {:else}
    {hvAccount ? "signup" : "login"}

    {#if hvAccount}
      <Login />
    {/if}
    <Register />
  {/if}
</section>
