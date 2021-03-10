# Restaurant List

這是一個利用 Express.js、Bootstrap、handlebars 所製作的網站，在這份專案中會學到如何設定路由、製作 handlebars 樣板、發送及接受 handlebars 參數顯示動態資料、handlebars 的迴圈應用等技巧。

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
- 使用 Express.js、handlebars 製作網站及路由設定
- 把 JSON 資料帶入 handlebars 樣板中動態呈現
- 用 Query String 打造搜尋功能
- 將網頁依照 Layouts 拆成多個部分樣版的 hadlebars 方便維護

## Screenshot

![restaurantList](https://github.com/chris1085/AC-restaurantList/blob/master/restaurantList.png)

## Copyright and license

Copyright (c) DoubleC. All rights reserved.
