const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
	event.preventDefault();
	console.log('👍', 'beforeinstallprompt', event);
	window.deferredPrompt = event;
	butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
	console.log('👍', 'butInstall-clicked');
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
		// The deferred prompt isn't available.
		return;
	}
	// Show the install prompt.
	promptEvent.prompt();
	// Log the result
	const result = await promptEvent.userChoice;
	console.log('👍', 'userChoice', result);
	// Reset the deferred prompt variable, since
	// prompt() can only be called once.
	window.deferredPrompt = null;
	// Hide the install button.
	butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
	console.log('👍', 'appinstalled', event);
	// Clear the deferredPrompt so it can be garbage collected
	window.deferredPrompt = null;
});
