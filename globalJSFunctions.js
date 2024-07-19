/**
 * Checks if the inputed value is null, undefined of empty
 * @param {*} variable 
 * @returns boolean
 */
function isEmpty(variable) {
    return variable === null || variable === undefined || variable === '' || variable === 0;
}

/**
 * 
 * @returns Checks if the user is using a mobile screen or not
 */
function isMobileDevice() {
    return window.innerWidth < 600;
}

function isIpadDevice(){
    return window.innerWidth < 850
}

/**
 * scrolls to top of screen
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//scrolls to an element with the passed in id
function scrollToId(id) {
    const cardElement = document.getElementById(id);
    
    // Use JavaScript to scroll to the About Us section/component
    if (!isEmpty(cardElement)) {
        cardElement.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'nearest'
        });
    }
}