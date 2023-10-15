# offbeat-eats-blog
React学習のアウトプットとして制作されたシンプルなグルメブログアプリ。

## インストールと起動方法

1. リポジトリをクローンします。
   git clone https://github.com/ohkubo8810/offbeat-eats.git

2. プロジェクトディレクトリに移動します。
   cd offbeat-eats

3. 環境の構築
   1. Node.jsのインストール:  
      https://nodejs.org/
      
   2. Yarnをインストールします。ターミナルで以下のコマンドを実行します:　
      npm install -g yarn
      
   3. Create React Appのインストール:
      グローバルにCreate React Appをインストールします。ターミナルで以下のコマンドを実行します
      yarn global add create-react-app
      
   4. 新しいReactプロジェクトの作成:
      npx create-react-app my-app
      cd my-app
      
   5. TypeScriptの追加:
      yarn add typescript @types/node @types/react @types/react-dom @types/jest
      
   6. Material-UIの追加:
      yarn add @mui/material @mui/icons-material

   7. 設定ファイルの調整:
     - tsconfig.jsonの設定
       {
         "compilerOptions": {
         },
           "include": ["src/**/*.ts", "src/**/*.tsx"],
           "exclude": ["node_modules"]
       }
       
   8. 依存関係を解決する
      1. @babel/plugin-proposal-private-property-in-object の依存関係
        yarn add @babel/plugin-proposal-private-property-in-object
      
      2. @mui/styled-engine の依存関係
        yarn add @emotion/react @emotion/styled
      
      3. Material-UIの依存関係
        yarn add @mui/material @mui/icons-material

   9. サーバの設定と起動
      サーバの設定と起動するには、プロジェクトディレクトリで次のコマンドを実行します
      
      **jsonサーバの設定と起動**
        yarn add json-server
        yarn json-server --watch data/db.json --port 8000
      
      **webサーバの設定と起動**
        yarn add react-router-dom
        yarn start

4. プロジェクトの概要
   Eats" プロジェクトは、Reactの学習アウトプットとして制作されたシンプルなグルメブログアプリケーションです。
   このアプリケーションの主な目的は、ユーザーが簡単にグルメ店を投稿し、閲覧することができるプラットフォームを提供することです。
   
   アプリケーションには以下の主要な機能が含まれています:
   
     シンプルな店のリスト:
       ユーザーは画像とタイトルと店の基本情報を含む店のリストを閲覧できます。これにより、ユーザーは簡単に興味のある店を見つけることができます。
   
     編集中にプレビュー:
       投稿を編集する際、ユーザーはリアルタイムでプレビューを確認できます。これにより、投稿内容の外観を確認しながら編集することができます。
   
     画像、タイトル、基本情報、感想の投稿:
       ユーザーは店の画像、タイトル、基本情報、お店への感想などを投稿できます。シンプルなインターフェースを通じて、情報を簡単に入力できます。

5. テクノロジースタック:
    React
    TypeScript
    JavaScript
    Material-UI
