// Issue 2
function validateInput(inputElement) {
}

function validateInputOnSearch(zipcode) {
  return true;
}

/*
# テスト方法 validateInput
1. index.htmlをLive Serverで開く
2. まだ他の機能が実装されていないので、単体でテストを行う
3. フォームに数字が入力できることを確認する
4. フォームに数字以外が入力できないことを確認する

# テスト方法 validateInputOnSearch
1. index.htmlをLive Serverで開く
2. まだ他の機能が実装されていないので、単体でテストを行う
3. 単体でテストする際は、ブラウザの開発者ツールを開き、Consoleタブを開く
4. ConsoleにはJavaScriptが入力できるため、まずコピペできるように allow paste と入力してEnterキーを押す（ブラウザによっては要否が異なる）
6. validateInputOnSearch("1234567")と入力してEnterキーを押す
7. Consoleにtrueが表示されることを確認する
8. validateInputOnSearch("123456")と入力してEnterキーを押す
9. Consoleにfalseが表示されることを確認する
*/
