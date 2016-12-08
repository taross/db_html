import { Component } from '@angular/core';

@Component({
    selector:"how-to-install",
    template:`
        <h2>このマニュアルでは、Ubuntu14.04.5へのMySQL Ver 14.14のインストールについて解説します。</h2>
        <br/>
        <h3>とっても簡単！</h3>
        <p>Linuxのコマンドラインに<br>
            sudo apt-get install -y mysql-server<br>
        と入力してください。<br>
        そのまま待つとMySQLインストール画面に遷移するので、rootユーザーに設定したいパスワードを入力し、Enterを押下します。<br>
        再確認の為にもう一度パスワードを入力すると、元のコマンドラインの画面に戻るはずです。<br>
            mysql --version<br>
        と打って、無事インストールされているか確認しましょう。お疲れ様でした。<br>
        </p>

    `
})
export class HowToInstallComponent{

}
