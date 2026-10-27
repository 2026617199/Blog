# 星屿 StarIsle

让陪伴，发生在每一个桌面。

一个治愈系多人联机互动桌宠的响应式产品官网，直接建立在仓库根目录。**桌面软件和手机 APP 仍在开发中**；站内的桌宠、房间、在线状态和设备界面均为原创概念示意，不代表已上线功能。

## 本地开发

环境：Node.js 22.12+（推荐使用受支持的 LTS 版本），pnpm 10.30.3。仓库包含 `pnpm-lock.yaml`。

```powershell
pnpm install
pnpm dev
```

打开终端输出的本地地址。开发脚本默认监听所有网卡，方便同一网络的手机检查；仅需本机访问时使用：

```powershell
pnpm dev --host 127.0.0.1
```

## 检查与构建

```powershell
pnpm typecheck
pnpm test
pnpm build
pnpm preview
```

- `typecheck`：严格 TypeScript 检查。
- `test`：运行 Vitest 下载状态与 URL 校验测试。
- `build`：先检查类型，再产生可部署的 `dist` 静态文件。
- `preview`：本地预览生产产物，不是生产服务器。

已进行 Chromium 浏览器验收：1440、1024、768、390、320px 布局；聊天自动演示、暂停、输入和发送、角色选择、气泡消失；四平台 Dialog、Tab 焦点限制、Escape、遮罩关闭和焦点返回；系统减少动画设置。支持现代浏览器，不针对已停止维护的旧版浏览器提供 polyfill。

## 内容与交互

- 原创 SVG 浮空小岛、三只原创桌宠、分层云朵、柔光与星迹；无外部字体或付费图片请求。
- 透明/毛玻璃导航、平滑锚点滚动、手机折叠菜单。
- 四种独立特色场景；点击互动区角色切换情绪。
- 纯前端互动房间：自动气泡、暂停/恢复、切换角色、点击跳跃、发送文字与快捷消息。消息最多 80 字，不会通过网络发送，也不会持久化；约 5.5 秒后消失。用户操作后暂停自动聊天，避免覆盖输入内容。
- 页面或演示不在可视范围时暂停自动聊天；尊重 `prefers-reduced-motion`，此时关闭自动演示与漂浮动画，手动交互仍可使用。
- 桌面与手机概念展示，可切换手机好友；手机明确仅承载轻社交，不复刻桌宠交互。
- 四个平台当前均弹出开发中提示，没有虚假安装包、账号、服务端或真实多人房间。
- 无障碍 Dialog、键盘焦点样式、跳到正文链接、语义化结构。
- 中文 SEO 元信息、Open Graph 分享图和原创 favicon。

## 项目结构

```text
.
├── public/
│   ├── favicon.svg
│   └── og-image.png          # 从原创官网场景生成的分享图片
├── src/
│   ├── assets/              # 原创星迹 SVG
│   ├── components/
│   │   ├── ui/              # shadcn/ui Button、Dialog
│   │   ├── Brand.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Island.tsx        # 原创浮空岛
│   │   ├── Pet.tsx           # 原创角色、表情、待机动画
│   │   ├── Features.tsx
│   │   ├── InteractionDemo.tsx
│   │   ├── CrossPlatform.tsx
│   │   ├── Downloads.tsx
│   │   ├── Footer.tsx
│   │   ├── Reveal.tsx
│   │   └── experience.css
│   ├── config/
│   │   ├── site.ts          # 品牌、导航、首页、演示与下载提示文案、备案配置
│   │   ├── experience.ts    # 特色与跨端展示文案、示意好友数据
│   │   ├── downloads.ts     # 唯一下载平台配置与 URL 校验
│   │   └── downloads.test.ts
│   ├── lib/utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json          # shadcn/ui 配置
├── index.html               # 页面入口与 SEO
├── vite.config.ts
├── tsconfig*.json
├── package.json
└── pnpm-lock.yaml
```

技术栈：React、TypeScript、Vite、Tailwind CSS、shadcn/ui（Radix Dialog）、Lucide React、Motion。没有数据库、身份认证或后端依赖。

## 正式下载地址

只在 `src/config/downloads.ts` 中维护平台、名称、状态和下载 URL：

```ts
{
  platform: 'windows',
  label: 'Windows 桌面版',
  subtitle: '把小小的陪伴，放在桌面上',
  status: 'developing',
  downloadUrl: '',
}
```

真正发布某个平台后：

1. 上传并验证真实安装程序。
2. 将该平台的 `status` 改为 `available`。
3. 将 `downloadUrl` 设置为真实、可访问的**绝对 HTTPS 地址**。
4. 更新发布相关的文案和对应测试，再重新构建部署。

仅当状态为 `available` 且 URL 合法时执行跳转。开发中、空地址、相对路径、HTTP、脚本/data/file URL 或含账号密码的地址均不会触发下载，而是显示提示弹窗。当前项目没有 EXE、DMG、APK 或 IPA 文件。

## 备案与站点信息

`src/config/site.ts` 的 `icp.label` / `icp.url` 默认留空，不显示虚假备案信息。实际备案后填入真实编号与备案查询地址。

`index.html` 包含 title、description、Open Graph 与图片元信息。绑定真实生产域名后建议补充 canonical 与 `og:url`，并把 `og:image` 地址设置为该域名下分享图的绝对 HTTPS 地址；当前不编造域名。

## Docker 部署

需要安装并启动 Docker，使用 Linux 容器。在仓库根目录执行：

```powershell
docker build -t starisle-website .
docker run -d --name starisle-website --restart unless-stopped -p 8080:80 starisle-website
```

浏览器访问 `http://localhost:8080`；远程部署时将 `localhost` 替换为服务器地址，并按需开放端口。可修改 `-p` 左侧的 `8080`，容器内部端口保持 `80`。

- `Dockerfile` 使用 Node.js 24 Alpine 和固定的 pnpm 10.30.3，通过锁文件安装依赖并运行 `pnpm build`；最终镜像使用 Nginx，仅复制构建产物，不包含源码或 Node.js 构建依赖。
- `nginx.conf` 提供页面回退、带哈希资源的长期缓存和 HTML 缓存校验。默认部署在域名根路径 `/`，无需挂载本地 `dist`。
- `.dockerignore` 排除本地依赖、构建产物、Git 历史及环境/包管理器凭据文件；不要将密钥写入源码或构建参数。
- 修改页面内容或站点配置后，需重新构建镜像并替换容器：

```powershell
docker build -t starisle-website .
docker stop starisle-website
docker rm starisle-website
docker run -d --name starisle-website --restart unless-stopped -p 8080:80 starisle-website
```

查看日志：`docker logs starisle-website`。生产环境建议由服务器反向代理或负载均衡器提供 HTTPS，再转发到此容器。

## Nginx 部署

执行 `pnpm build`，将 **`dist` 的内容**上传到服务器站点目录，例如 `/var/www/starisle`。不要将源码目录或开发服务器用作线上服务。

示例 Nginx `server` 配置，域名和证书请按实际环境配置：

```nginx
server {
    listen 80;
    server_name _; # 替换为你自己的真实域名
    root /var/www/starisle;
    index index.html;

    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        try_files $uri =404;
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Content-Type-Options nosniff always;
    }

    location = /index.html {
        add_header Cache-Control "no-cache";
        add_header X-Content-Type-Options nosniff always;
    }
}
```

上线时配置 HTTPS，并在服务器上校验和重新加载实际 Nginx 配置。当前站点使用单页面锚点，不需要 API 代理。

## 静态托管部署

Vercel、Netlify、Cloudflare Pages 等静态托管平台可使用以下设置：

| 选项 | 值 |
| --- | --- |
| 工程根目录 | 当前仓库根目录 |
| 安装命令 | `pnpm install --frozen-lockfile` |
| 构建命令 | `pnpm build` |
| 输出目录 | `dist` |
| Node.js | 满足 `package.json` 的 engines 要求 |

也可把现有 `dist` 直接上传到支持静态文件的服务。此项目不会自动 push、创建部署、改动远程配置或申请域名。

### 部署到子路径（例如 GitHub Pages）

默认部署路径为 `/`。若使用仓库子路径，构建前设置 `VITE_BASE_PATH`，必须以 `/` 开始和结束。例如本仓库使用 `/Blog/`：

```powershell
$env:VITE_BASE_PATH = '/Blog/'
pnpm build
Remove-Item Env:VITE_BASE_PATH
```

将产物发布在相应子路径；CI 中同样设置该构建环境变量。切回根域名部署时重新执行默认构建。Vite 会同步调整打包资源、favicon 和分享图路径。

## 美术与边界

小岛、树木、角色及星光均为本项目原创 SVG/CSS 设计；设备界面是原创前端概念稿。Lucide 与 shadcn/ui/Radix 按各自依赖许可证使用。没有使用《光·遇》的角色、素材或界面，没有虚构公司、用户评价、用户量或社交账号。
