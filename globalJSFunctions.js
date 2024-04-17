/**
 * Checks if the inputed value is null, undefined of empty
 * @param {*} variable 
 * @returns boolean
 */
function isEmpty(variable) {
    return variable === null || variable === undefined || variable === '';
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