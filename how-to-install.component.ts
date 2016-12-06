import { Component } from '@angular/core';

@Component({
    selector:"how-to-install",
    template:`
        <h2>このマニュアルでは、Ubuntu14.04.5へのMySQL Ver 14.14のインストールについて解説します。</h2>
        <p>Linuxのコンソールで sudo apt-get install mysql-server と入力してください。あとはパスワード打って終了お疲れ様でした。</p>
    `
})
export class HowToInstallComponent{

}
