window.onload = function(){
    document.getElementById('form-preview-url').onkeyup = formPreview;
    document.getElementById('form-preview-hl').onchange = formPreview;
    document.getElementById('form-preview-result').onclick = formPreviewCopyResult;
};


function formPreview() {
    var url = document.getElementById('form-preview-url').value;
    var hl = document.getElementById('form-preview-hl').value;

    var result = formPreviewWithGoogleviewer(url, hl);

    document.getElementById('form-preview-result').value = result;
}

function formPreviewWithGoogleviewer(url, hl) {
    var server_url = 'https://docs.google.com/viewer?';

    var params = {};
    params.url = url;
    params.hl = hl;
    params.embedded = true;

    var esc = encodeURIComponent;
    var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

    return server_url += query;
}
function formPreviewCopyResult() {
    document.getElementById('form-preview-result').select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
}