<script>
    // your script goes here
</script>

<div
    class="border border-blue-600 shadow rounded-md p-4 max-w-sm w-full mx-auto"
>
    <div class="flex space-x-4">
        <div class="rounded-full bg-blue-400 h-12 w-12"></div>
        <div class="flex-1 space-y-4">
            <slot><!-- optional fallback --></slot>
        </div>
    </div>
</div>

<style>
    /* your styles go here */
</style>
