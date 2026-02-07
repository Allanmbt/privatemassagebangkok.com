# 🎨 Obsidian Minimalism UI — Design System

**Private Massage Bangkok | 2026**

---

## ✨ Design Philosophy

**Obsidian Minimalism** 融合了 **Tesla 极简主义**、**暗黑奢华美学** 和 **情感温度**。  
目标：营造私密、高级、有温度的视觉体验，适合高端私密服务品牌。

**本文档基于 Lovable 原型（https://privatemassagebangkok.lovable.app/）100% 还原提取。**

**关键词：** 暗黑 · 金色 · 极简 · 奢华 · 私密 · 情感温度

**核心原则：**
1. **100% 还原 Lovable 原型** — 颜色、字体、间距、动画完全一致
2. 暗黑为主，金色点缀 — 低调奢华
3. 极简但富有表现力 — Tesla 式设计
4. 充足留白 — 让每个元素"呼吸"
5. 情感温度 — 不是冷冰冰的科技感
6. 私密感 — 所有设计传达"绝对隐私"

**设计灵感来源：**
- Tesla 官网的极简主义
- 高端酒店的暗黑奢华
- 日本侘寂美学的留白
- 泰国兰纳文化的金色装饰

**UI 还原标准：**
- ✅ 颜色误差 < 5%
- ✅ 字体必须完全一致（Playfair Display + Cormorant Garamond）
- ✅ 间距误差 < 2px
- ✅ 动画时长误差 < 50ms
- ✅ 布局结构完全一致

---

## 🌑 Dark Mode Only（仅暗色模式 - 100% 还原 Lovable）

本项目**仅使用暗色模式**，不提供明亮模式。

### 精确颜色值（从 Lovable 原型提取）

| Role | Hex | HSL | CSS Variable | Usage |
|------|-----|-----|--------------|-------|
| **Obsidian (主背景)** | `#0D0D0D` | `hsl(240, 10%, 5%)` | `--background` | 页面主背景 |
| **Obsidian Light (卡片)** | `#1A1A1A` | `hsl(240, 8%, 10%)` | `--card` | 卡片、模态框背景 |
| **Charcoal (次要背景)** | `#262626` | `hsl(240, 6%, 15%)` | `--secondary` | 次要区块背景 |
| **Luxury Gold (主金色)** | `#C9A962` | `hsl(43, 52%, 58%)` | `--primary` | 主强调色（按钮、高亮、图标） |
| **Gold Light (浅金色)** | `#E0C78A` | `hsl(43, 60%, 70%)` | `--gold-light` | 渐变起始、悬停效果 |
| **Gold Dark (深金色)** | `#A68B47` | `hsl(43, 45%, 40%)` | `--gold-dark` | 渐变结束、阴影 |
| **Foreground (主文本)** | `#E8E8E8` | `hsl(43, 20%, 90%)` | `--foreground` | 主文本颜色 |
| **Twilight (次要文本)** | `#b9bdc6` | `hsl(220, 12%, 76%)` | `--twilight` | 次要文本、描述 |
| **Muted (禁用文本)** | `#8A8A8A` | `hsl(220, 10%, 55%)` | `--muted-foreground` | 占位符、禁用文本 |
| **Border** | `#2E2E2E` | `hsl(43, 15%, 18%)` | `--border` | 边框、分割线 |

### CSS Variables 定义（必须在 globals.css 中）

```css
:root {
  /* 深色基调 */
  --background: 240 10% 5%;        /* #0D0D0D */
  --foreground: 43 20% 90%;        /* #E8E8E8 */
  
  /* 卡片 */
  --card: 240 8% 8%;               /* #141414 */
  --card-foreground: 43 20% 90%;   /* #E8E8E8 */
  
  /* 金色系统 */
  --primary: 43 52% 58%;           /* #C9A962 */
  --primary-foreground: 240 10% 5%; /* #0D0D0D */
  
  /* 次要背景 */
  --secondary: 240 6% 12%;         /* #1F1F1F */
  --secondary-foreground: 43 15% 80%; /* #D4C5A8 */
  
  /* 柔和元素 */
  --muted: 240 5% 18%;             /* #2E2E2E */
  --muted-foreground: 220 10% 55%; /* #8A8A8A */
  
  /* 强调色 */
  --accent: 43 60% 45%;            /* #B89A4F */
  --accent-foreground: 240 10% 5%; /* #0D0D0D */
  
  /* 边框 */
  --border: 43 15% 18%;            /* #2E2E2E */
  --input: 240 6% 15%;             /* #262626 */
  --ring: 43 52% 58%;              /* #C9A962 */
  
  /* 自定义金色 */
  --gold: 43 52% 58%;              /* #C9A962 */
  --gold-light: 43 60% 70%;        /* #E0C78A */
  --gold-dark: 43 45% 40%;         /* #A68B47 */
  --obsidian: 240 10% 5%;          /* #0D0D0D */
  --obsidian-light: 240 8% 10%;    /* #1A1A1A */
  --charcoal: 240 6% 15%;          /* #262626 */
  --twilight: 220 12% 76%;         /* #b9bdc6 */
}
```

### Tailwind 颜色配置

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // 自定义金色
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        // 自定义暗色
        obsidian: {
          DEFAULT: "hsl(var(--obsidian))",
          light: "hsl(var(--obsidian-light))",
        },
        charcoal: "hsl(var(--charcoal))",
        twilight: "hsl(var(--twilight))",
      },
    },
  },
};
```

**视觉调性：**  
深邃 · 奢华 · 神秘 · 温暖（金色） · 私密

---

## 📐 Layout & Spacing

| Token | Value | Usage |
|--------|--------|-------|
| **XS** | 8px | 小元素间距 |
| **SM** | 12px | 默认间距 |
| **MD** | 16px | 区块间距 |
| **LG** | 24px | 大块容器 |
| **XL** | 32px | 主要布局间距 |
| **2XL** | 48px | Section 间距 |
| **3XL** | 64px | 首屏/全页留白 |

**容器与内边距：**
- 页面水平内边距：`24px`（移动端）、`48px`（桌面端）
- 卡片内边距：`24px`
- Section 垂直间距：`80px`（移动端）、`128px`（桌面端）
- 最小触摸目标：`44×44px`

**圆角：**
- 按钮/输入框：`4px`（极简风格）
- 标签/芯片：`8px`
- 卡片：`12px`
- 大卡片：`16px`
- 头像：`50%`

---

## 🖋 Typography（100% 还原 Lovable 原型）

### 字体家族

**Playfair Display（标题专用）**
- 用途：Hero 标题、Section 标题、卡片标题、按钮文字
- 特点：优雅、经典、高级感、衬线字体
- 权重：400（Regular）、500（Medium）、600（SemiBold）、700（Bold）
- CSS: `font-family: 'Playfair Display', Georgia, serif;`
- Tailwind: `font-display`

**Cormorant Garamond（正文专用）**
- 用途：正文、描述、导航链接、次要文本
- 特点：易读、温暖、文学感、衬线字体
- 权重：300（Light）、400（Regular）、500（Medium）、600（SemiBold）
- CSS: `font-family: 'Cormorant Garamond', Georgia, serif;`
- Tailwind: `font-body`

**降级方案**: Georgia, serif

### 字体大小与权重

| Type | Size (Desktop) | Size (Mobile) | Weight | Font | Usage |
|------|----------------|---------------|--------|------|-------|
| **Hero Title** | 56-72px | 32-40px | 500-700 | Playfair Display | 首屏大标题 |
| **Section Title** | 40-48px | 28-32px | 500-600 | Playfair Display | 区块标题 |
| **Card Title** | 20-24px | 18-20px | 500 | Playfair Display | 卡片标题 |
| **Navigation** | 14px | 14px | 400 | Cormorant Garamond | 导航链接（全大写） |
| **Body Large** | 18px | 16px | 400 | Cormorant Garamond | 重要正文 |
| **Body Text** | 16px | 15px | 400 | Cormorant Garamond | 默认文本 |
| **Body Small** | 14px | 13px | 400 | Cormorant Garamond | 次要文本 |
| **Caption** | 12-13px | 12px | 400 | Cormorant Garamond | 标签、提示 |

### 字间距（Letter Spacing）

```css
/* Playfair Display（标题） */
.font-display {
  letter-spacing: 0.04em;  /* 4% 字间距 */
}

/* Cormorant Garamond（正文） */
.font-body {
  letter-spacing: 0.02em;  /* 2% 字间距 */
}

/* 导航链接（全大写） */
.nav-link {
  letter-spacing: 0.2em;   /* 20% 字间距 */
  text-transform: uppercase;
}

/* 按钮文字（全大写） */
.btn-text {
  letter-spacing: 0.15em;  /* 15% 字间距 */
  text-transform: uppercase;
}
```

### 行高（Line Height）

```css
/* 标题 */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;  /* 紧凑，强调视觉冲击 */
}

/* 正文 */
p, span, div {
  line-height: 1.6;  /* 舒适阅读 */
}

/* 长文本 */
article p {
  line-height: 1.8;  /* 更宽松，适合长文 */
}
```

### 字体引入（必须在 CSS 顶部）

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
```

### Tailwind 配置

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
};
```

### 使用示例

```tsx
// Hero 标题
<h1 className="font-display text-6xl md:text-7xl tracking-wider">
  Private Massage Bangkok
</h1>

// Section 标题
<h2 className="font-display text-4xl md:text-5xl tracking-wider">
  Our <span className="text-gradient-gold">Massages</span>
</h2>

// 导航链接
<a className="font-body text-sm tracking-[0.2em] uppercase">
  HOME
</a>

// 正文
<p className="font-body text-base leading-relaxed">
  Not just a massage, but an intimate journey of the senses.
</p>

// 按钮
<button className="font-display text-sm tracking-[0.15em] uppercase">
  Begin Your Journey
</button>
```

### 字体加载优化

```tsx
// app/layout.tsx
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🎨 Color System

### 主色调（Primary）
```css
--gold: hsl(43, 52%, 58%);           /* #C9A962 */
--gold-light: hsl(43, 60%, 70%);     /* #E0C78A */
--gold-dark: hsl(43, 45%, 40%);      /* #A68B47 */
```

### 背景色（Background）
```css
--obsidian: hsl(240, 10%, 5%);       /* #0D0D0D */
--obsidian-light: hsl(240, 8%, 10%); /* #1A1A1A */
--charcoal: hsl(240, 6%, 15%);       /* #262626 */
```

### 文本色（Text）
```css
--foreground: hsl(43, 20%, 90%);     /* #E8E8E8 */
--twilight: hsl(220, 10%, 75%);      /* #B8B8B8 */
--muted: hsl(220, 10%, 55%);         /* #8A8A8A */
```

### 边框色（Border）
```css
--border: hsl(43, 15%, 18%);         /* #2E2E2E */
--input: hsl(240, 6%, 15%);          /* #262626 */
```

---

## 🌊 Gradients

| Name | CSS | Usage |
|------|-----|-------|
| **Gold Gradient** | `linear-gradient(135deg, hsl(43 60% 70%), hsl(43 52% 58%), hsl(43 45% 40%))` | 按钮、标题强调 |
| **Dark Gradient** | `linear-gradient(180deg, hsl(240 10% 5%), hsl(240 8% 8%))` | 背景渐变 |
| **Radial Gold** | `radial-gradient(ellipse at center, hsl(43 52% 58% / 0.15), transparent 70%)` | 光晕效果 |
| **Hero Overlay** | `linear-gradient(180deg, hsl(240 10% 5% / 0.3), hsl(240 10% 5% / 0.95))` | Hero 图片遮罩 |

---

## 🌟 Shadows & Effects

| Level | Use Case | Shadow |
|--------|-----------|--------|
| **Gold Glow** | 按钮、重要元素 | `0 0 60px -15px hsl(43 52% 58% / 0.4)` |
| **Elegant Shadow** | 卡片、模态框 | `0 25px 50px -12px hsl(0 0% 0% / 0.5)` |
| **Soft Shadow** | 轻微悬停 | `0 10px 30px -10px hsl(0 0% 0% / 0.3)` |
| **Card Hover** | 卡片悬停 | `0 0 60px -20px hsl(43 52% 58% / 0.3)` |

**毛玻璃效果（Glassmorphism）**
```css
.glass-nav {
  background: hsl(240 10% 5% / 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid hsl(43 15% 20% / 0.3);
}
```

---

## 🧩 Components（100% 还原 Lovable 原型）

### Navigation（导航栏）

**Desktop 布局：**
- 居中 Logo（圆形，14×14，金色光晕）
- 左侧菜单：HOME | ABOUT | MASSAGES
- 右侧菜单：OUR GODDESSES | BLOG | CONTACT
- 背景：透明 → 滚动后毛玻璃效果
- 字体：Cormorant Garamond, 14px, 全大写, letter-spacing: 0.2em

```tsx
// 导航栏组件（精确还原）
<motion.header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
  }`}
>
  <nav className="hidden lg:flex items-center justify-center">
    {/* 左侧菜单 */}
    <div className="flex items-center gap-8 pr-10">
      <a className="text-sm tracking-[0.2em] text-twilight hover:text-primary transition-colors duration-300 font-body">
        HOME
      </a>
    </div>
    
    {/* 居中 Logo */}
    <Link to="/" className="flex items-center justify-center mx-6">
      <img
        src={logo}
        alt="Private Massage Bangkok"
        className="h-14 w-14 rounded-full object-cover"
        style={{ boxShadow: "0 0 30px -10px hsl(43 52% 58% / 0.5)" }}
      />
    </Link>
    
    {/* 右侧菜单 */}
    <div className="flex items-center gap-8 pl-10">
      <a className="text-sm tracking-[0.2em] text-twilight hover:text-primary transition-colors duration-300 font-body">
        BLOG
      </a>
    </div>
  </nav>
</motion.header>
```

**毛玻璃效果（Glassmorphism）：**
```css
.glass-nav {
  background: hsl(240 10% 5% / 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid hsl(43 15% 20% / 0.3);
}
```

### Buttons

**Primary Button (Gold Gradient)**
```tsx
<button className="btn-gold px-10 py-4 text-sm rounded">
  Begin Your Journey
</button>
```

```css
.btn-gold {
  background: linear-gradient(135deg, hsl(43 52% 58%), hsl(43 45% 45%));
  color: hsl(240 10% 5%);
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 16px 40px;
  box-shadow: 0 0 30px -10px hsl(43 52% 58% / 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-gold:hover {
  box-shadow: 0 0 50px -10px hsl(43 52% 58% / 0.8);
  transform: translateY(-2px);
}
```

**Outline Button**
```tsx
<button className="btn-gold-outline px-10 py-4 text-sm rounded">
  Meet Our Goddesses
</button>
```

```css
.btn-gold-outline {
  background: transparent;
  border: 1px solid hsl(43 52% 58% / 0.5);
  color: hsl(43 52% 58%);
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 4px;
  padding: 16px 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-gold-outline:hover {
  background: hsl(43 52% 58% / 0.1);
  border-color: hsl(43 52% 58%);
  box-shadow: 0 0 30px -10px hsl(43 52% 58% / 0.4);
}
```

### Cards

**Luxury Card（卡片组件）**
```tsx
<div className="card-luxury rounded-lg p-8">
  {/* 卡片内容 */}
</div>
```

```css
.card-luxury {
  background: hsl(240 8% 8%);
  border: 1px solid hsl(43 15% 15% / 0.3);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-luxury:hover {
  border-color: hsl(43 52% 58% / 0.3);
  box-shadow: 0 0 60px -20px hsl(43 52% 58% / 0.3);
  transform: translateY(-4px);
}
```

### Text Gradient（金色文字渐变）

```tsx
<h1 className="text-gradient-gold">
  Private Massage Bangkok
</h1>
```

```css
.text-gradient-gold {
  background: linear-gradient(135deg, hsl(43 60% 70%), hsl(43 52% 58%), hsl(43 45% 45%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Divider（金色分割线）

```tsx
<div className="divider-gold" />
```

```css
.divider-gold {
  height: 1px;
  background: linear-gradient(90deg, transparent, hsl(43 52% 58% / 0.5), transparent);
}
```

### Section Title（区块标题装饰）

```tsx
<h2 className="section-title">
  Our <span className="text-gradient-gold">Massages</span>
</h2>
```

```css
.section-title {
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, hsl(43 52% 58%), transparent);
}
```

---

## 🎞 Animation & Interaction（100% 还原 Lovable 原型）

### Framer Motion 动画参数（精确还原）

| Action | Duration | Delay | Easing | Effect |
|--------|----------|-------|--------|--------|
| Hero 标题淡入 | 800ms | 300ms | ease-out | `opacity: 0 → 1, y: 30 → 0` |
| Hero 副标题淡入 | 800ms | 500ms | ease-out | `opacity: 0 → 1, y: 20 → 0` |
| Hero 按钮淡入 | 800ms | 900ms | ease-out | `opacity: 0 → 1, y: 20 → 0` |
| Section 标题淡入 | 800ms | 0ms | ease-out | `opacity: 0 → 1, y: 30 → 0` |
| 卡片淡入（stagger） | 600ms | 200ms + index×150ms | ease-out | `opacity: 0 → 1, y: 40 → 0` |
| 按钮悬停 | 400ms | 0ms | cubic-bezier(0.4, 0, 0.2, 1) | `translateY(-2px)` + 金色光晕增强 |
| 卡片悬停 | 500ms | 0ms | cubic-bezier(0.4, 0, 0.2, 1) | `translateY(-4px)` + 边框金色发光 |
| 图片缩放 | 800ms | 0ms | cubic-bezier(0.4, 0, 0.2, 1) | `scale(1 → 1.08)` |
| 导航栏淡入 | 800ms | 0ms | ease-out | `y: -100 → 0, opacity: 0 → 1` |

### 关键动画代码（精确还原）

**Hero Section 动画：**
```tsx
// Hero 标题
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient-gold"
>
  Private Massage Bangkok
</motion.h1>

// Hero 副标题
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="font-body text-xl md:text-2xl text-twilight"
>
  Not just a massage, but an intimate journey of the senses.
</motion.p>

// Hero 按钮
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  className="flex flex-col sm:flex-row gap-4 justify-center"
>
  <button className="btn-gold">Begin Your Journey</button>
</motion.div>
```

**Section 滚动动画（useInView）：**
```tsx
import { useInView } from "framer-motion";
import { useRef } from "react";

const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

// Section 标题
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
>
  <h2 className="section-title">Our Massages</h2>
</motion.div>

// 卡片 Stagger 动画
{services.map((service, index) => (
  <motion.div
    key={service.id}
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
    className="card-luxury"
  >
    {/* 卡片内容 */}
  </motion.div>
))}
```

**导航栏动画：**
```tsx
<motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
  }`}
>
  {/* 导航内容 */}
</motion.header>
```

**图片缩放动画（CSS）：**
```css
.zoom-on-scroll {
  overflow: hidden;
}

.zoom-on-scroll img {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.zoom-on-scroll:hover img {
  transform: scale(1.08);
}
```

**呼吸动画（Hero 背景图）：**
```css
.breathe {
  animation: breathe 8s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
}
```

### 触摸反馈（精确还原）

```css
/* 按钮点击 */
.btn-gold:active {
  transform: translateY(-2px) scale(0.98);
}

/* 卡片点击 */
.card-luxury:active {
  transform: translateY(-2px);
}
```

### 滚动指示器动画

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2"
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="w-6 h-10 border border-primary/30 rounded-full flex justify-center"
  >
    <motion.div
      animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-1 h-2 bg-primary rounded-full mt-2"
    />
  </motion.div>
</motion.div>
```

---

## 🩰 Visual Language

### 核心视觉元素

1. **金色光晕（Gold Glow）**
   - 用于按钮、重要元素
   - 传达"奢华"和"温暖"

2. **毛玻璃效果（Glassmorphism）**
   - 用于导航栏、模态框
   - 传达"现代"和"轻盈"

3. **极简留白（Minimalist Spacing）**
   - Tesla 式大量留白
   - 传达"高级"和"呼吸感"

4. **暗黑渐变（Dark Gradients）**
   - 背景使用微妙渐变
   - 传达"深邃"和"神秘"

5. **金色文字渐变（Gold Text Gradient）**
   - 用于标题、重要文案
   - 传达"奢华"和"独特"

### 设计原则

- **留白** — 每个区块应有清晰内边距（≥24px）
- **对比** — 暗黑背景 + 金色点缀 = 强烈视觉冲击
- **层次** — 使用阴影和渐变表达深度
- **一致性** — 所有平台保持相同的间距节奏
- **温暖感** — 金色光晕让暗黑不冷冰冰

---

## 🌈 Pattern Library

### Lanna Pattern（兰纳图案）

```css
.lanna-pattern {
  position: relative;
}

.lanna-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%23c9a96220' stroke-width='0.5'/%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}
```

### Hero Overlay（Hero 遮罩）

```css
.hero-overlay {
  background: linear-gradient(
    180deg,
    hsl(240 10% 5% / 0.3) 0%,
    hsl(240 10% 5% / 0.6) 50%,
    hsl(240 10% 5% / 0.95) 100%
  );
}
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 响应式规则

**移动端（< 768px）**
- Hero Title: 32-40px
- Section Title: 28-32px
- 内边距: 24px
- Section 间距: 80px

**桌面端（≥ 768px）**
- Hero Title: 56-72px
- Section Title: 40-48px
- 内边距: 48px
- Section 间距: 128px

---

## 🧠 Design Guidelines Summary

### 必须遵守
- ✅ 暗黑背景为主，金色点缀
- ✅ 使用 Playfair Display（标题）+ Cormorant Garamond（正文）
- ✅ 大量留白，呼吸感强
- ✅ 金色光晕效果
- ✅ 毛玻璃导航栏
- ✅ 柔和动画（400-800ms）
- ✅ 移动端优先

### 禁止使用
- ❌ 明亮背景或白色为主
- ❌ 廉价字体（Arial、Helvetica）
- ❌ 纯黑 (#000000) 背景
- ❌ 过度装饰、花哨效果
- ❌ 生硬的动画
- ❌ 忽略移动端

---

## 🎯 Brand Alignment

### 三大核心价值在 UI 中的体现

1. **Privacy（私密性）**
   - 暗黑色调 → 隐秘、低调
   - 毛玻璃效果 → 朦胧、神秘
   - 极简设计 → 不张扬

2. **Elite Esthetics（高颜值）**
   - 金色点缀 → 奢华、高级
   - 优雅字体 → 品味、格调
   - 精致动画 → 细节、品质

3. **Emotional Connection（情绪价值）**
   - 温暖金色 → 不冷冰冰
   - 柔和渐变 → 有温度
   - 呼吸动画 → 有生命力

---

## 📦 Component Checklist（组件开发检查清单）

创建新组件时，确保 100% 还原 Lovable 原型：

### 颜色检查
- [ ] 背景色使用 Obsidian (`#0D0D0D`) 或 Obsidian Light (`#1A1A1A`)
- [ ] 金色使用精确值 `#C9A962` / `hsl(43, 52%, 58%)`
- [ ] 文本色使用 Foreground (`#E8E8E8`) 或 Twilight (`#B8B8B8`)
- [ ] 边框色使用 `#2E2E2E` / `hsl(43, 15%, 18%)`
- [ ] 渐变使用精确的 HSL 值

### 字体检查
- [ ] 标题使用 Playfair Display（500-700 weight）
- [ ] 正文使用 Cormorant Garamond（300-400 weight）
- [ ] 导航链接：14px, 全大写, letter-spacing: 0.2em
- [ ] 按钮文字：全大写, letter-spacing: 0.15em
- [ ] 标题 letter-spacing: 0.04em
- [ ] 正文 letter-spacing: 0.02em

### 间距检查
- [ ] 使用 Tailwind 间距单位（4px 倍数）
- [ ] 卡片内边距：32px (p-8)
- [ ] Section 间距：80px (移动端) / 128px (桌面端)
- [ ] 按钮内边距：16px 40px
- [ ] 误差 < 2px

### 圆角检查
- [ ] 按钮：4px (rounded)
- [ ] 标签：8px (rounded-lg)
- [ ] 卡片：12px (rounded-lg)
- [ ] Logo：50% (rounded-full)

### 动画检查
- [ ] 使用 Framer Motion
- [ ] 淡入动画：duration: 0.8s, delay: 按需
- [ ] 悬停动画：duration: 0.4-0.5s
- [ ] Easing: cubic-bezier(0.4, 0, 0.2, 1) 或 ease-out
- [ ] 误差 < 50ms

### 阴影检查
- [ ] 金色光晕：`0 0 30px -10px hsl(43 52% 58% / 0.5)`
- [ ] 悬停增强：`0 0 50px -10px hsl(43 52% 58% / 0.8)`
- [ ] 卡片阴影：`0 0 60px -20px hsl(43 52% 58% / 0.3)`

### 响应式检查
- [ ] 移动端优先设计
- [ ] 断点：sm(640px), md(768px), lg(1024px), xl(1280px)
- [ ] 字体大小响应式调整
- [ ] 间距响应式调整
- [ ] 导航栏移动端汉堡菜单

### SEO 检查
- [ ] 语义化 HTML 标签
- [ ] 图片包含 alt 属性
- [ ] 标题层级正确（H1 → H2 → H3）
- [ ] 内部链接使用描述性锚文本

### 性能检查
- [ ] 图片使用 WebP 格式
- [ ] 图片懒加载 (loading="lazy")
- [ ] 避免布局偏移 (CLS)
- [ ] 优化动画性能 (will-change)

---

## 🔗 Reference Links

- **Lovable 原型（100% 还原）**: https://privatemassagebangkok.lovable.app/
- **Lovable 源码**: `privatemassagebangkok/src/`
- **品牌白皮书**: `docs/brand-cn.md`
- **项目规则**: `.cursorrules`
- **Google Fonts**: 
  - Playfair Display: https://fonts.google.com/specimen/Playfair+Display
  - Cormorant Garamond: https://fonts.google.com/specimen/Cormorant+Garamond

---

**版本：** 2.0  
**设计主题：** _Obsidian Minimalism (Black Gold Luxury)_  
**适用：** Private Massage Bangkok 官网  
**平台：** Web (Next.js 15+)  
**调性：** 暗黑 · 奢华 · 极简 · 私密 · 情感温度  
**原型来源：** Lovable (https://privatemassagebangkok.lovable.app/)  
**还原标准：** 100% 精确还原（颜色、字体、间距、动画）  
**字体：** Playfair Display + Cormorant Garamond（不可更改）  
**SEO 目标：** Google 友好优化（Lighthouse SEO = 100）  
**性能目标：** Core Web Vitals 达标（LCP < 2.5s, FID < 100ms, CLS < 0.1）

---

**核心口号**: "不只是按摩，是一场关于感官的私密修行"

**UI 还原检查清单：**
- [ ] 颜色：使用精确的 HSL/Hex 值（误差 < 5%）
- [ ] 字体：Playfair Display + Cormorant Garamond
- [ ] 间距：与原型一致（误差 < 2px）
- [ ] 动画：Framer Motion 参数一致（误差 < 50ms）
- [ ] 阴影：金色光晕效果一致
- [ ] 布局：结构层级完全一致
- [ ] 导航：居中 Logo，左右对称菜单
- [ ] 按钮：金色渐变 + 全大写 + 金色光晕
- [ ] 卡片：暗色背景 + 悬停金色边框发光

**Google SEO 检查清单：**
- [ ] Lighthouse SEO 评分 = 100
- [ ] Lighthouse Performance 评分 ≥ 90
- [ ] 所有图片包含 alt 属性（描述性 + 关键词）
- [ ] JSON-LD 结构化数据完整（LocalBusiness, WebPage, Service, FAQPage）
- [ ] Core Web Vitals 达标
- [ ] 移动端响应式完美
- [ ] 内部链接 3-5 个/页
- [ ] 关键词密度 0.5-1.5%
