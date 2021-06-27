<script>
  import Register from "$lib/components/Register.svelte";

  let username, password, email;
  import Box from "$lib/components/Box.svelte";
  import { jwt, profile, user } from "$lib/userStores";
  import Login from "$lib/components/Login.svelte";

  async function Resigter() {
    const API = import.meta.env.VITE_AUTH_DMSX;
    const res = await fetch(
      `${API}?username=${username}&&password=${password}`
    );

    $profile = await res.json();
    console.log($profile);
    if ($profile !== undefined || "NOUSER") {
      const regis = await fetch("http://localhost:1337/auth/local/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: `${username}@pea.co.th`,
          password: `${password}`,
        }),
      });
      const token = await regis.json();
      $user = token.user;
      $jwt = token.jwt;
    }
  }

  let hvAccount = false;
</script>

<section>
  {#if $jwt}
    <Box>
      {$user.username}
    </Box>
  {:else}
    {hvAccount ? "signup" : "login"}

    {#if hvAccount}
      <Login />
    {/if}
    <Register />
  {/if}
</section>
