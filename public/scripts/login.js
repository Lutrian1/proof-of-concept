// Script that adds css attributes for PE, if this doesn't work, the pinpadnumbers will be hidden.
document.addEventListener('DOMContentLoaded', function() {
    const pinPadNumbersBox = document.querySelector('.pin-pad-numbers-box');
    const pinDisplay = document.querySelector('.pin-display');
    
    pinDisplay.setAttribute('readonly', 'true');

    pinPadNumbersBox.removeAttribute('hidden');

    pinPadNumbersBox.style.display = 'grid';
});