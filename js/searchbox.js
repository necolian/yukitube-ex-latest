//jQuery読み込み
const urls = ["https://code.jquery.com/jquery-3.5.1.js","https://code.jquery.com/ui/1.12.1/jquery-ui.js"]
urls.forEach(function (value, index, array) {
  const scriptElement = document.createElement('script');
  scriptElement.src = value;
  document.body.appendChild(scriptElement);
});

$('#searchbox').autocomplete({
  source: function (request, response) {
    {
      var url = "/suggest?keyword="+ request.term
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function() {
        response(JSON.parse(xhr.responseText));
      }
      xhr.send();
    }
  },
    select: function(event, ui) {
    // 候補が選択されたときの処理
    $("#searchbox").val(ui.item.value);
    // フォームを送信
    $("#searchForm").submit(); // フォームを送信
    return false; // jQuery UIのデフォルトの動作をキャンセル
    },
   delay: 300
});
