const infoItems = document.querySelectorAll('.tab-item');
const infoContentItems = document.querySelectorAll('.info-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const infoContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	infoContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	infoItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	infoContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
infoItems.forEach(item => {
	item.addEventListener('click', selectItem);
});