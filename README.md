<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
   
   ![blogの一覧リスト](/screenshots/blogsc3.png)
   ![blogの詳細と編集➀](/screenshots/blogsc2.png)
   ![blogの詳細と編集➁](/screenshots/blogsc.png)

6. テクノロジースタック:
    React
    TypeScript
    JavaScript
    Material-UI
>>>>>>> 6a3f428caec8ac1584fdea31f258637677614473
