<script>
  let username, password;
  import { jwt, profile, user } from "$lib/utils/userStores";

  async function Login() {
    const API = import.meta.env.VITE_AUTH_DMSX;
    const res = await fetch(
      `${API}?username=${username}&&password=${password}`
    );

    $profile = await res.json();
    console.log($profile);
    if ($profile !== undefined || "NOUSER") {
      const regis = await fetch("http://localhost:1337/auth/local/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: `${password}`,
        }),
      });
      const token = await regis.json();
      $user = token.user;
      $jwt = token.jwt;
    }
  }
</script>

<fieldset class="shadow-md border-2 border-solid flex flex-col p-4 m-4">
  <form on:submit|preventDefault="{Login}">
    <legend class="text-2xl"> Login </legend>
    <input
      type="text"
      bind:value="{username}"
      class="ring-4 ring-inset p-2 outline-none"
      placeholder="Username"
      name="username"
    />
    <input
      name="password"
      type="password"
      bind:value="{password}"
      class="ring-4 ring-inset p-2 outline-none"
      placeholder="Password"
    />
    <button class="p-2 bg-indigo-200 hover:bg-indigo-400 rounded-lg">
      Login
    </button>
  </form>
</fieldset>

<style>
</style>
