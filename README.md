# 小逻 - 指哪打哪图片编辑器 (XiaoLuo Image Editor)

一个专为高效率、高精准度图片批注（Annotation）设计的轻量级 React 组件库。支持各种形状、箭头、数字序号、画笔、文本层，并且拥有完全符合直觉的撤销（Undo）、重做（Redo）与本地高保真 PNG 导出能力。

现在，它已经完美支持**打包封装成标准的 npm 包**，可在任意 React 项目中直接引入使用！

---

## 📸 效果预览

请在项目的 `assets/` 目录下放置您的演示截图，并命名为 `editor_preview.png`。它将在此处完美显示：

![小逻-指哪打哪图片编辑器](<img width="1746" height="1176" alt="image" src="https://github.com/user-attachments/assets/805b66e9-c25f-4296-ac61-698e29e3031d" />
)

---

## ✨ 特色功能

- **🎨 丰富而精准的批注工具 (Precision Tools)**
  - **选择 (Select)**: 拖拽、缩放、精细化调整标注位置。
  - **矩形 (Rectangle)**: 快速框选重点区域。
  - **画笔 (Brush)**: 自由书写与标记。
  - **箭头 (Arrow)**: 直观指向核心指标。
  - **序号 (Marker)**: 点击即生成带数字序号的圆圈（如 `①`、`②`、`③`），便于多点步骤说明。
  - **橡皮擦 (Eraser)**: 擦除特定标注。
  - **多色调色盘**: 支持多种经典亮眼配色，支持自定义线宽。

- **✍️ 极致贴合用户习惯的文字编辑 (Natural Text Tool)**
  - **竖条光标 (I-Beam Cursor)**: 使用文本工具或悬停在文本上方时，光标会自动变为最符合打字直觉的竖条光标（`text` 游标），拒绝杂乱的十字标。
  - **便捷二次编辑 (Double-Click Re-edit)**: 随时对画布上已有的文字进行双击，或者在使用文本工具时直接点击文字，即可无缝重新唤起输入框进行二次修改。
  - **回车即换行 (Natural Wrap)**: 输入文字时按下 `Enter` 键直接换行，完全符合普通用户的日常习惯。
  - **失焦自动保存 (Auto-save on Blur)**: 无需手动点击保存按钮！当你在输入过程中点击画布空白处、切换其他工具、或做任意其他操作时，当前输入的文本都将被**自动保存并渲染**，确保数据不丢失。

- **🚀 撤销重做 & 高清无损导出**
  - 内置基于时光机历史栈（History Stack）的设计，支持 `Ctrl+Z` / `Ctrl+Y` 或工具栏按钮完美撤销与重做。
  - 支持将标注层以 SVG 矢量高保真渲染并合成至原图上，一键导出为标准的 PNG 图片。

---

## 📦 库安装与快速上手

由于项目已完成了 npm 模块封装，你可以很方便地在你的 React / Vite 项目中引入它。

### 1. 安装

在你的目标项目根目录下执行：

```bash
npm install xiaoluo-image-editor
# 或者使用 yarn / pnpm / bun
pnpm add xiaoluo-image-editor
```

### 2. 引入组件与样式

在你的 React 代码中直接使用：

```tsx
import React from 'react';
import { ImageEditor } from 'xiaoluo-image-editor';
import 'xiaoluo-image-editor/style.css'; // 引入打包后的 Tailwind 样式

export default function App() {
  const handleSave = (dataUrl: string, annotations: any[]) => {
    console.log('保存成功！图片 Base64 地址为:', dataUrl);
    console.log('所有的批注数据为:', annotations);
  };

  const handleCancel = () => {
    console.log('用户取消了编辑');
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-[1200px] h-[800px] bg-slate-800 rounded-2xl shadow-2xl p-6">
        <ImageEditor
          initialImageSrc="https://your-domain.com/path-to-image.jpg"
          initialFileName="my-plan.jpg"
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
```

---

## 🛠️ 构建与发布 NPM 包

本项目的 `package.json` 已经完成了 UMD、ES Module 以及 TypeScript 类型定义（`.d.ts`）的打包配置。你可以通过以下步骤自行打包并发布至内部私有 npm 仓库或公共 npm 平台。

### 1. 编译打包 (Build)

运行专为 Library 构建定制的 Vite + `vite-plugin-dts` 流程：

```bash
npm run build:lib
```

该命令将使用 `/vite.config.lib.ts` 配置文件，并在根目录下生成一个 `dist-lib` 文件夹。其中包含：
- `index.es.js` — 面向现代打包器（Vite、Webpack 5）的 ES Module 产物。
- `index.umd.js` — 兼容传统 Node / 浏览器直接引入的 UMD 产物。
- `index.d.ts` — 包含完整强类型的声明文件，提供极致的 IDE 代码补全提示。
- `style.css` — 独立抽离的批注组件 Tailwind 精简样式文件。

### 2. 检查 package.json 属性

打包后，发布的入口属性已定义如下：

```json
{
  "name": "xiaoluo-image-editor",
  "version": "1.0.0",
  "main": "./dist-lib/index.umd.js",
  "module": "./dist-lib/index.es.js",
  "types": "./dist-lib/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist-lib/index.d.ts",
      "import": "./dist-lib/index.es.js",
      "require": "./dist-lib/index.umd.js"
    },
    "./style.css": "./dist-lib/style.css"
  },
  "files": [
    "dist-lib"
  ]
}
```

### 3. 发布到 NPM (Publish)

1. **登录你的 npm 账号** (如果是首次发布)：
   ```bash
   npm login
   ```
2. **测试包的本地链接 (可选)**：
   在组件库根目录运行：
   ```bash
   npm link
   ```
   在你的测试 React 项目根目录运行：
   ```bash
   npm link xiaoluo-image-editor
   ```
3. **正式发布**：
   ```bash
   npm publish --access public
   ```

---

## 🎛️ API 说明 (Props API)

`ImageEditor` 组件支持以下属性传入：

| 属性名 (Prop) | 类型 (Type) | 默认值 (Default) | 说明 (Description) |
| :--- | :--- | :--- | :--- |
| `initialImageSrc` | `string \| null` | `null` | 初始载入编辑的图片 URL 地址（支持本地 Base64 或跨域允许的 CROS 链接） |
| `initialFileName` | `string` | `""` | 默认导出的文件名后缀 |
| `onSave` | `(dataUrl: string, annotations: Annotation[]) => void` | `undefined` | 点击保存/下载时触发的回调，返回合成后的 Base64 dataUrl 和所有批注的 JSON 结构 |
| `onCancel` | `() => void` | `undefined` | 取消按钮的点击事件回调 |
| `className` | `string` | `""` | 传递给组件最外层容器的额外类名样式 |

---

## 📝 贡献与支持

有任何关于指哪打哪图片编辑器的建议、Bug 反馈或定制功能，欢迎提 issue 或进行 PR 贡献！

*Made with ❤️ by 小逻 Team*
