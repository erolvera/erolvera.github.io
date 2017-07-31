/**
 * Created by JiaHao on 19/9/15.
 */

var WAIT_INTERVAL = 2000;

/**
 * Delayed appearance of text
 */

setTimeout(function () {
    var paragraph = document.createElement('div');
    paragraph.setAttribute('id', 'setTimeoutContent');
    // BUBBLES HI is not contained in the dom initially, used to test to check if the
    // dom contains the string
    var text = document.createTextNode('BUBBLES HI');
    paragraph.appendChild(text);

    document.getElementById('interval-test').appendChild(paragraph);
}, WAIT_INTERVAL);

/**
 * Showing the result of the dropdown box
 */

function showDropdownResult() {
    document.querySelector('#dropdown-selected-result').innerHTML = document.querySelector('#dropdown').value;
}

// show dropdown result immediately
showDropdownResult();

// set listener
document.querySelector('#dropdown').addEventListener('change', function(){
    showDropdownResult();
});
