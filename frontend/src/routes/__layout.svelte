<script>
  import { page } from "$app/stores";
import { user } from "$lib/userStores";

  import "../app.postcss";
  let routes = [
    { name: "home", path: "/", icon: "home" },
    { name: "articles", path: "/articles", icon: "articles" },
    { name: "auth", path: "/auth", icon: "auth" },
  ];
  $: section = $page.path.split("/")[1];
</script>

<body>
  <ion-app>
    <ion-split-pane when="sm" content-id="main-content">
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>{$user.username}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            {#each routes as route}
              <!-- content here -->
              <a href="{route.path}">
                <ion-menu-toggle auto-hide="false">
                  <ion-item button>
                    <ion-icon slot="start" name="{route.icon}"></ion-icon>
                    <ion-label> {route.name} </ion-label>
                  </ion-item>
                </ion-menu-toggle>
              </a>
            {/each}
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-toggle>
                <ion-button>
                  <ion-icon slot="icon-only" name="menu"></ion-icon>
                </ion-button>
              </ion-menu-toggle>
            </ion-buttons>
            <ion-title>{section}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <slot><!-- optional fallback --></slot>
        </ion-content>
      </div>
    </ion-split-pane>
  </ion-app>
</body>
