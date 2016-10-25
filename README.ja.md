# A collection of prh rules

## フォルダ構成

* language
    * 各自然言語固有のルール
* technical-term
    * 技術用語のルール
* medium
    * 各媒体固有のルール
* trademark
    * 商標やツールの正式名称などのルール
* tool
    * 各種ツール固有のルール

## ルール

* yaml内でimportを使ってはならない
    * rootディレクトリのprh.ymlとmediumの中は除く
* 原則として、medium内のルールを他のファイルから参照しない（組み合わせて運用する前提のものではないため）
* mediumには原則として、各団体・出版社別ルールを置く
    * 作品別ルールは作品のリポジトリにて個別に管理するのを推奨する
