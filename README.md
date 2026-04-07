# Dry Bridge Market Official Website

## 项目说明
这是第比利斯市政府官方管理的 Dry Bridge Market (მშრალი ხიდის ბაზარი) 官方网站项目。

## 开发环境设置

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 运行测试
```bash
npm run lint
```

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # 国际化路由
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Hero.tsx          # 首页横幅
│   ├── About.tsx         # 关于市场
│   ├── Gallery.tsx       # 照片画廊
│   ├── Reviews.tsx       # 游客评价
│   ├── MapSection.tsx    # 地图与交通
│   └── Footer.tsx        # 页脚
├── messages/             # 国际化翻译文件
│   ├── en.json          # 英语
│   ├── ka.json          # 格鲁吉亚语
│   └── zh-hant.json     # 繁体中文
└── middleware.ts         # 国际化中间件
```

## 官方声明

本网站由 Tbilisi 市市政厅管理和运营，是 Dry Bridge Market 的官方信息平台。

## 版权信息

© Tbilisi City Hall. 所有权利保留。

## 最后更新

2026年4月