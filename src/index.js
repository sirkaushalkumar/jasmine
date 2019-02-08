//confirm('Yay!! You made it!!')
const txtTrollName = document.getElementById('txtTrollName');
const txtTrollMsg = document.getElementById('txtTrollMsg');
const btnNewTrollMsg = document.getElementById('btnNewTrollMsg');
var trollbox = new Trollbox();

function updateTrollbox(trollPost){
    var trollData = trollbox.createTrollDataString(trollPost);
    var currentTrollbox = document.getElementById('trollbox').innerHTML;
    document.getElementById('trollbox').innerHTML = currentTrollbox + trollData;
}

btnNewTrollMsg.addEventListener('click', e => { 
    var now = new Date();
    var trollPost = trollbox.createTrollPost(txtTrollName.value, txtTrollMsg.value, now);
    updateTrollbox(trollPost);

    document.getElementById('txtTrollName').value = ''
    document.getElementById('txtTrollMsg').value = ''

})



/* confirm('Yay!! You made it!!')
const txtTrollName = document.getElementById('txtTrollName');
const txtTrollMsg = document.getElementById('txtTrollMsg');
const btnNewTrollMsg = document.getElementById('btnNewTrollMsg');

function updateTrollbox(trollPost){
    var trollData = '<p><b>' + trollPost.troll;
    trollData += '</b> said: ' + trollPost.message;
    trollData += ' - <small>' + trollPost.date + '</small></p>';

    var currentTrollbox = document.getElementById('trollbox').innerHTML;
    document.getElementById('trollbox').innerHTML = currentTrollbox + trollData;
}

btnNewTrollMsg.addEventListener('click', e => { 
    const troll = txtTrollName.value;
    const msg = txtTrollMsg.value;
    const now = new Date();
    const trollPost = {
        troll: troll,
        message: msg,
        date: now.toUTCString()
    }
    updateTrollbox(trollPost);

    document.getElementById('txtTrollName').value = ''
    document.getElementById('txtTrollMsg').value = ''

}) */