// Script that adds css attributes for PE, if this doesn't work, the pinpadnumbers will be hidden.
document.addEventListener('DOMContentLoaded', function() {
    const pinPadNumbersBox = document.querySelector('.pin-pad-numbers-box');
    const pinDisplay = document.querySelector('.pin-display');
    
    pinDisplay.setAttribute('readonly', 'true');

    pinPadNumbersBox.removeAttribute('hidden');

    pinPadNumbersBox.style.display = 'grid';
    
    pinPadNumbersBox.addEventListener('click', function(e) {
        const button = e.target.closest('.pinpad-btn');
        if (!button) return;
        
        const value = button.value;
        
        if (value === 'del') {
            pinDisplay.value = '';
        } else if (value === 'ok') {
            return;
        } else {
            pinDisplay.value += value;
        }
    });
});