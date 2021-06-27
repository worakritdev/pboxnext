<script>
	let cheatCode = []
  let unlock = false
	
  document.onkeypress = function (event) {
		let char = (typeof event !== 'undefined') ? event.keyCode : event.which

		// queue structure: keep latest 5 key presses
		if (cheatCode.length > 4) {
			[, ...cheatCode] = cheatCode
		}
		
		cheatCode = [...cheatCode, String.fromCharCode(char)]
    
		// check cheat
    if (cheatCode.toString() === 'w,o,r,r,r') {
      unlock = true
    }
	}
</script>

<h1>Cheat Code Test</h1>

{#if unlock}
	<p>Cheat code accepted!</p>
{/if}