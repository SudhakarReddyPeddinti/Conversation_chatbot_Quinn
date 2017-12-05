// Buttons? #65 - https://github.com/watson-developer-cloud/conversation-simple/issues/65
// exit chat 'yes' or 'no' buttons
function yesBye() {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  var btn_yes = document.getElementsByClassName('btn-yes');
  var btn_no = document.getElementsByClassName('btn-no');
  for (var i = 0; i < btn_yes.length; i++) {
    btn_yes[i].disabled = true;
    btn_no[i].disabled = true;
    btn_yes[i].className = 'btn-yes-grade-out';
    btn_no[i].className = 'btn-no-grade-out';
  }
  Api.sendRequest("yes", context);
}
function noBye() {
  var latestResponse = Api.getResponsePayload();
  var context = latestResponse.context;
  var btn_yes = document.getElementsByClassName('btn-yes');
  var btn_no = document.getElementsByClassName('btn-no');
  for (var i = 0; i < btn_yes.length; i++) {
    btn_yes[i].disabled = true;
    btn_no[i].disabled = true;
    btn_yes[i].className = 'btn-yes-grade-out';
    btn_no[i].className = 'btn-no-grade-out';
  }
  Api.sendRequest("no", context);
}