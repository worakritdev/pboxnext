import { browser } from "$app/env";
import { writable } from "svelte/store";


export const user = writable('')

export const jwt = writable("")

export const profile = writable("")
if (browser) {


    user.set(JSON.parse(localStorage.getItem("user")));
    user.subscribe((value) => {
        localStorage.setItem("user", JSON.stringify(value) || '')
    })

    jwt.set(JSON.parse(localStorage.getItem("jwt")))
    jwt.subscribe((value) => { localStorage.setItem("jwt", JSON.stringify(value) || '') })

}