# Restaurant List

這是一個利用 Express.js、Bootstrap、Handlebars 所製作的網站，在這份專案中會了解到如何設定路由、製作 Handlebars 樣板、發送及接受 Handlebars 參數顯示動態資料、Handlebars 的迴圈應用等技巧。

![restaurantList](https://github.com/chris1085/AC-restaurantList/blob/main/restaurantList.png)

## Installation

```bash
#移動並創建本地資料夾
mkdir -p /installation/path && cd /installation/path

#從GitHub複製專案至本地資料夾
git clone https://github.com/chris1085/AC-restaurantList.git
cd AC-restaurantList

#從package.json中安裝express、express-handlebars套件
npm install

#確認nodemon版本並測試專案
nodemon -v
nodemon app.js
```

## Features

- 利用 Bootstrap 製作 RWD 網站樣式
- 使用 Express.js、Handlebars 製作網站及路由設定
- 把 JSON 資料帶入 Handlebars 樣板中動態呈現
- 用 Query String 打造搜尋功能
- 將網頁依照 Layouts 拆成多個部分樣版的 hadlebars 方便維護

## Tools

- Express - 應用程式框架
- Handlebars - web 模板系統
- Bootstrap - 開源前端框架

## Contribute

感謝[Alpha Camp](https://tw.alphacamp.co/)提供此次專案素材及資源
