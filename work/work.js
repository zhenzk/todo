const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Tab</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>⭐</text></svg>">
    <style>
    /* 全局样式 */
    body {
        font-family: "楷体", KaiTi, serif;
        margin: 0;
        padding: 0;
        background: url('https://pub-c46e2e4444364478952be3c5ec9230fa.r2.dev/v2-1d7cd6f3fafa29ea96685faf0fe8ba00_r.jpg') no-repeat center center fixed; //替换背景图的URL
        background-size: cover;
        min-height: 100vh;
        color: #4a4a4a;
        cursor: url('data:image/svg+xml,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960.4 172.2c-21.6 27.4-371.3 548.5-371.3 548.5s11.4 45.6 4 75.7c-17.7 72.3-63.6 101-113.2 127-129.5 67.9-273 32-415.7-38.7 8.3 4.1 36.4-5.8 45.4-8 14.2-3.5 28.2-7.8 41.7-13.3 25-10 48.3-23.6 69.3-40.3 43.2-34.4 75.2-80.4 102.7-127.4 13.5-23.1 26-44.6 48.5-60.6 23.4-16.7 55.5-15.3 82.9-17.5 0 0 43.5-67.1 65-101.3 94.4-150.7 188.7-301.5 283.1-452.2h15.8c47.3 30.9 94.5 61.9 141.8 92.8v15.3zM165.6 893.5c139.5 27.8 178.8 22.3 258.7 2 31.2-7.9 68.3-36.1 87.9-57.8 29.6-32.7 42.4-60.4 26.6-110-9.3-29.3-53.7-63.4-85.1-66-26.2-2.1-65.6 31-83.4 60.7-41 68.8-87.9 137.4-204.7 171.1z m658-758.6C743.1 255 664.7 371.9 583.5 493c25.7 16.7 48.6 31.7 76.6 49.9 81.9-122.2 161-240.3 241.8-360.8-29.6-17.8-51.3-30.9-78.3-47.2zM564.3 540.2c-17.1 27.3-30.1 48-45.1 71.9 23.8 13.4 42.8 24.1 64.3 36.2 15.2-24.1 27.3-43.3 40.8-64.7-18.9-13.7-35.4-25.6-60-43.4z"></path></svg>') 0 32, auto;
    }
    a, button,.card,.round-btn {
        cursor: url('data:image/svg+xml,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960.4 172.2c-21.6 27.4-371.3 548.5-371.3 548.5s11.4 45.6 4 75.7c-17.7 72.3-63.6 101-113.2 127-129.5 67.9-273 32-415.7-38.7 8.3 4.1 36.4-5.8 45.4-8 14.2-3.5 28.2-7.8 41.7-13.3 25-10 48.3-23.6 69.3-40.3 43.2-34.4 75.2-80.4 102.7-127.4 13.5-23.1 26-44.6 48.5-60.6 23.4-16.7 55.5-15.3 82.9-17.5 0 0 43.5-67.1 65-101.3 94.4-150.7 188.7-301.5 283.1-452.2h15.8c47.3 30.9 94.5 61.9 141.8 92.8v15.3zM165.6 893.5c139.5 27.8 178.8 22.3 258.7 2 31.2-7.9 68.3-36.1 87.9-57.8 29.6-32.7 42.4-60.4 26.6-110-9.3-29.3-53.7-63.4-85.1-66-26.2-2.1-65.6 31-83.4 60.7-41 68.8-87.9 137.4-204.7 171.1z m658-758.6C743.1 255 664.7 371.9 583.5 493c25.7 16.7 48.6 31.7 76.6 49.9 81.9-122.2 161-240.3 241.8-360.8-29.6-17.8-51.3-30.9-78.3-47.2zM564.3 540.2c-17.1 27.3-30.1 48-45.1 71.9 23.8 13.4 42.8 24.1 64.3 36.2 15.2-24.1 27.3-43.3 40.8-64.7-18.9-13.7-35.4-25.6-60-43.4z" fill="#0000FF"></path></svg>') 0 32, pointer;
    }
        /* 添加背景遮罩 */
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5); /* 降低白色遮罩的不透明度，0.3比原来的0.1更淡 */
        /* backdrop-filter: blur(1px); */
        z-index: -1;
    }
    
    /* 固定元素样式 */
    .fixed-elements {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /* background-color: #e8f4ea; */
        z-index: 1000;
        padding: 10px;
        transition: background-color 0.3s ease;
        height: 130px;
        /* background: rgba(255, 252, 242, 0.85); */
        /* border-bottom: 2px solid #d4a017; */
        /* box-shadow: 0 2px 15px rgba(212, 160, 23, 0.2); */
    }
    
    .fixed-elements h3 {
        position: absolute;
        top: 10px;
        left: 20px;
        margin: 0;
        font-size: 28px;
        color: #8b4513;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        font-weight: bold;
        letter-spacing: 3px;
    }
    
    /* 中心内容样式 */
    .center-content {
        position: absolute;
        padding-top: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 600px;
        text-align: center;
    }
    
    /* 管理员控制面板样式 */
    .admin-controls {
        position: fixed;
        top: 10px;
        right: 10px;
        font-size: 0.9em; /* 调整字体大小 */
        border: 1px solid #ccc; /* 边框 */
        border-radius: 8px; /* 圆角 */
        padding: 10px; /* 内边距 */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
        backdrop-filter: blur(10px); /* 背景模糊 */
    }
    
    /* 添加/删除控制按钮样式 */
    .add-remove-controls {
        display: none;
        flex-direction: column;
        position: fixed;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        align-items: center;
        gap: 10px;
    }
    
    .round-btn {
        background: linear-gradient(135deg, #d4a017, #8b4513);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        text-align: center;
        font-size: 24px;
        line-height: 40px;
        cursor: pointer;
        margin: 5px 0;
        background: linear-gradient(135deg, #d4a017, #8b4513);
        border: 2px solid #fff;
        box-shadow: 0 0 10px rgba(212, 160, 23, 0.3);
        transition: all 0.3s ease;
    }
    .round-btn:hover {
        transform: rotate(90deg) scale(1.1);
        box-shadow: 0 0 15px rgba(212, 160, 23, 0.5);
    }
    
    .add-btn { order: 1; }
    .remove-btn { order: 2; }
    .category-btn { order: 3; }
    .remove-category-btn { order: 4; }
    
    /* 主要内容区域样式 */
    .content {
        margin-top: 140px;
        padding: 20px;
    }

    /* 对话框样式 */
    #dialog-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
    }
    
    #dialog-box {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        width: 300px;
    }
    
    #dialog-box input, #dialog-box select {
        width: 100%;
        margin-bottom: 10px;
        padding: 5px;
    }
    
    /* 分类和卡片样式 */
    .section {
        margin-bottom: 20px;
    }
    
    .section-title-container {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .section-title {
        font-size: 18px;
        font-weight: bold;
    }
    
    .delete-category-btn {
        background-color: #ff9800;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .card {
        background-color: #b8c9d9;
        border-radius: 5px;
        padding: 10px;
        width: 150px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s;
        position: relative;
        user-select: none;
    }
    
    .card:hover {
        transform: translateY(-5px);
    }
    
    .card-top {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }
    
    .card-icon {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
    
    .card-title {
        font-size: 14px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .card-url {
        font-size: 12px;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .private-tag {
        background-color: #ff9800;
        color: white;
        font-size: 10px;
        padding: 2px 5px;
        border-radius: 3px;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    
    .delete-btn {
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: red;
        color: white;
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        display: none;
    }
        /* 修改标题样式 */
    .title {
        color: #8b4513;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin: 20px 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
       /* 添加古风装饰元素 */
    .decoration {
        position: absolute;
        width: 50px;
        height: 50px;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#d4a017"/></svg>');
        opacity: 0.1;
    }
        /* 添加古风装饰元素 */
        .decoration-corner {
        position: fixed;
        width: 100px;
        height: 100px;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="%23d4a017" opacity="0.2"/></svg>');
    }
        
    .decoration-top-right {
        top: 0;
        right: 0;
        transform: rotate(90deg);
    }
    
    .decoration-bottom-left {
        bottom: 0;
        left: 0;
        transform: rotate(-90deg);
    }
        /* 添加水墨效果 */
        .ink-effect {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: radial-gradient(circle at 50% 50%, rgba(0,0,0,0.05) 0%, transparent 70%);
    }
    /* 响应式设计 */
    @media (max-width: 480px) {
        .fixed-elements {
            position: relative;
            padding: 5px;
        }
        .content {
            margin-top: 10px;
        }

        .admin-controls input,
        .admin-controls button {
            height: 30%;
            margin: 5px 0; /* 增加上下间距 */
            padding: 0 10px; /* 内边距 */
            border: 1px solid #ccc; /* 边框 */
            border-radius: 4px; /* 圆角 */
            transition: border-color 0.3s; /* 过渡效果 */
        }

        .card-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        .card {
            width: 80%;
            max-width: 100%;
            padding: 5px;
        }
        .card-title {
            font-size: 12px;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            max-width: 130px; 
        }
        .card-url {
            font-size: 10px;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            max-width: 130px;
        }
        
        .add-remove-controls {
            right: 2px;
          }

        .round-btn, 
        #theme-toggle {
            right: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            font-size: 24px;
        }
    }
        /* 修改配色方案为水墨风格 */
        :root {
        --ink-black: #2c3e50;
        --ink-gray: #34495e;
        --paper-white: #f9f6f2;
        --ink-light: rgba(44, 62, 80, 0.1);
        --ink-accent: #8b4513;
    }
        
    /* 修改一言模式 */
    #hitokoto {
        font-family: "楷体", KaiTi, serif;
        color: var(--ink-black);
        font-size: 1.2em;
        line-height: 1.8;
        padding: 15px;
        background: linear-gradient(to right, transparent, var(--ink-light), transparent);
        border-radius: 4px;
    }
        
    /* 添加水墨轨迹效果样式 */
    .ink-trail {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: opacity 2s ease;
    }

    .ink-dot {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(44, 62, 80, 0.3);
        border-radius: 50%;
        transform-origin: center center;
        animation: inkFade 2s ease-out forwards;
    }
    </style>
</head>

<body>
    <div class="ink-effect"></div>
    <!-- 添加装饰元素 -->
    <div class="decoration-corner decoration-top-right"></div>
    <div class="decoration-corner decoration-bottom-left"></div>
    <div class="ink-effect"></div>
    
    <div class="fixed-elements">
        <h3>我的导航</h3>
        <div class="center-content">
            <!-- 一言模块 -->
            <p id="hitokoto">
                <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
            </p>
        </div>
        <!-- 管理员控制面板 -->
        <div class="admin-controls">
            <input type="password" id="admin-password" placeholder="输入密码">
            <button id="admin-mode-btn" onclick="toggleAdminMode()">设  置</button>
            <button id="secret-garden-btn" onclick="toggleSecretGarden()">登  录</button>
        </div>
    </div>
    <div class="content">
        <!-- 添加/删除控制按钮 -->
        <div class="add-remove-controls">
            <button class="round-btn add-btn" onclick="showAddDialog()">+</button>
            <button class="round-btn remove-btn" onclick="toggleRemoveMode()">-</button>
            <button class="round-btn category-btn" onclick="addCategory()">C+</button>
            <button class="round-btn remove-category-btn" onclick="toggleRemoveCategory()">C-</button>

        </div>

        <!-- 分类和卡片容器 -->
        <div id="sections-container"></div>
         <!-- 添加链接对话框 -->
        <div id="dialog-overlay">
            <div id="dialog-box">
                <label for="name-input">名称</label>
                <input type="text" id="name-input">
                <label for="url-input">地址</label>
                <input type="text" id="url-input">
                <label for="category-select">选择分类</label>
                <select id="category-select"></select>
                <div class="private-link-container">
                    <label for="private-checkbox">私密链接</label>    
                    <input type="checkbox" id="private-checkbox">
                </div>
                <button onclick="addLink()">确定</button>
                <button onclick="hideAddDialog()">取消</button>
            </div>
        </div>
     </div>

    <script>

    
    // 日志记录函数
    function logAction(action, details) {
        const timestamp = new Date().toISOString();
        const logEntry = timestamp + ': ' + action + ' - ' + JSON.stringify(details);
        console.log(logEntry); 
    }

    
    // 全局变量
    let publicLinks = [];
    let privateLinks = [];
    let isAdmin = false;
    let isLoggedIn = false;
    let removeMode = false;
    let isRemoveCategoryMode = false;
    let isDarkTheme = false;
    let links = [];
    const categories = {};
    
    // 添加新分类
    async function addCategory() {
        if (!await validateToken()) {
            return; 
        }
        const categoryName = prompt('请输入新分类名称:');
        if (categoryName && !categories[categoryName]) {
            categories[categoryName] = [];
            updateCategorySelect();
            renderCategories();
            saveLinks();
            logAction('添加分类', { categoryName, currentLinkCount: links.length });
        } else if (categories[categoryName]) {
            alert('该分类已存在');
            logAction('添加分类失败', { categoryName, reason: '分类已存在' });
        }
    }

    // 删除分类
    async function deleteCategory(category) {
        if (!await validateToken()) {
            return; 
        }
        if (confirm('确定要删除 "' + category + '" 分类吗？这将删除该分类下的所有链接。')) {
            delete categories[category];
            links = links.filter(link => link.category !== category);
            publicLinks = publicLinks.filter(link => link.category !== category);
            privateLinks = privateLinks.filter(link => link.category !== category);
            updateCategorySelect();
            saveLinks();
            renderCategories();
            logAction('删除分类', { category });
        }
    }    

    // 渲染分类(不重新加载链接)
    function renderCategories() {
        const container = document.getElementById('sections-container');
        container.innerHTML = '';
    
        Object.keys(categories).forEach(category => {
            const section = document.createElement('div');
            section.className = 'section';
    
            const titleContainer = document.createElement('div');
            titleContainer.className = 'section-title-container';
    
            const title = document.createElement('div');
            title.className = 'section-title';
            title.textContent = category;
    
            titleContainer.appendChild(title);
    
            if (isAdmin) {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '删除分类';
                deleteBtn.className = 'delete-category-btn';
                deleteBtn.style.display = isRemoveCategoryMode ? 'inline-block' : 'none'; 
                deleteBtn.onclick = () => deleteCategory(category);
                titleContainer.appendChild(deleteBtn);
            }
    
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.id = category;
    
            section.appendChild(titleContainer);
            section.appendChild(cardContainer);
    
            container.appendChild(section);
    
            const categoryLinks = links.filter(link => link.category === category);
            categoryLinks.forEach(link => {
                createCard(link, cardContainer);
            });
        });
    
        logAction('渲染分类', { categoryCount: Object.keys(categories).length, linkCount: links.length });
    }    
    
    // 读取链接数据
    async function loadLinks() {
        const headers = {
            'Content-Type': 'application/json'
        };
        
        // 如果已登录，从 localStorage 获取 token 并添加到请求头
        if (isLoggedIn) {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers['Authorization'] = token; 
            }
        }
        
        try {
            const response = await fetch('/api/getLinks?userId=testUser', {
                headers: headers
            });
            
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            
            
            const data = await response.json();
            console.log('Received data:', data); 
            
            if (data.categories) {
                Object.assign(categories, data.categories);
            }
            
            publicLinks = data.links ? data.links.filter(link => !link.isPrivate) : [];
            privateLinks = data.links ? data.links.filter(link => link.isPrivate) : [];
            links = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;

            loadSections();
            updateCategorySelect();
            updateUIState();
            logAction('读取链接', { 
                publicCount: publicLinks.length, 
                privateCount: privateLinks.length,
                isLoggedIn: isLoggedIn,
                hasToken: !!localStorage.getItem('authToken')
            });
        } catch (error) {
            console.error('Error loading links:', error);
            alert('加载链接时出错，请刷新页面重试');
        }
    }
    
    
    // 更新UI状态
    function updateUIState() {
        const passwordInput = document.getElementById('admin-password');
        const adminBtn = document.getElementById('admin-mode-btn');
        const secretGardenBtn = document.getElementById('secret-garden-btn');
        const addRemoveControls = document.querySelector('.add-remove-controls');
    
        passwordInput.style.display = isLoggedIn ? 'none' : 'inline-block';
        secretGardenBtn.textContent = isLoggedIn ? "退出" : "登录";
        secretGardenBtn.style.display = 'inline-block';
    
        if (isAdmin) {
            adminBtn.textContent = "离开设置";
            adminBtn.style.display = 'inline-block';
            addRemoveControls.style.display = 'flex';
        } else if (isLoggedIn) {
            adminBtn.textContent = "设置";
            adminBtn.style.display = 'inline-block';
            addRemoveControls.style.display = 'none';
        } else {
            adminBtn.style.display = 'none';
            addRemoveControls.style.display = 'none';
        }
    
        logAction('更新UI状态', { isAdmin, isLoggedIn });
    }
    
    // 登录状态显示（加载所有链接）
    function showSecretGarden() {
        if (isLoggedIn) {
            links = [...publicLinks, ...privateLinks];
            loadSections();
            // 显示所有私密标签
            document.querySelectorAll('.private-tag').forEach(tag => {
                tag.style.display = 'block';
            });
            logAction('显示私密花园');
        }
    }
    
    // 加载分类和链接
    function loadSections() {
        const container = document.getElementById('sections-container');
        container.innerHTML = '';
    
        Object.keys(categories).forEach(category => {
            const section = document.createElement('div');
            section.className = 'section';
    
            const titleContainer = document.createElement('div');
            titleContainer.className = 'section-title-container';
    
            const title = document.createElement('div');
            title.className = 'section-title';
            title.textContent = category;
    
            titleContainer.appendChild(title);
    
            if (isAdmin) {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '删除分类';
                deleteBtn.className = 'delete-category-btn';
                deleteBtn.style.display = 'none'; 
                deleteBtn.onclick = () => deleteCategory(category);
                titleContainer.appendChild(deleteBtn);
            }
    
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.id = category;
    
            section.appendChild(titleContainer);
            section.appendChild(cardContainer);
    
            let privateCount = 0;
            let linkCount = 0;
    
            links.forEach(link => {
                if (link.category === category) {
                    if (link.isPrivate) privateCount++;
                    linkCount++;
                    createCard(link, cardContainer);
                }
            });
    
            if (privateCount < linkCount || isLoggedIn) {
                container.appendChild(section);
            }
        });
    
        logAction('加载分类和链接', { isAdmin: isAdmin, linkCount: links.length, categoryCount: Object.keys(categories).length });
    }
    
    // 创建卡片
    function createCard(link, container) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('draggable', isAdmin);
        card.dataset.isPrivate = link.isPrivate;
    
        const cardTop = document.createElement('div');
        cardTop.className = 'card-top';
    
        // 定义默认的 SVG 图标
        const defaultIconSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>' +
        '<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>' +
        '</svg>';
        
        // 创建图标元素
        const icon = document.createElement('img');
        icon.className = 'card-icon';
        // icon.src = 'https://api.iowen.cn/favicon/' + extractDomain(link.url) + '.png';
        icon.src = 'https://www.faviconextractor.com/favicon/' + extractDomain(link.url);
        icon.alt = 'Website Icon';
        
        // 如果图片加载失败，使用默认的 SVG 图标
        icon.onerror = function() {
            const svgBlob = new Blob([defaultIconSVG], {type: 'image/svg+xml'});
            const svgUrl = URL.createObjectURL(svgBlob);
            this.src = svgUrl;
            
            this.onload = () => URL.revokeObjectURL(svgUrl);
        };
        
        function extractDomain(url) {
            let domain;
            try {
                domain = new URL(url).hostname;
            } catch (e) {
                domain = url;
            }
            return domain;
        }
    
        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = link.name;
    
        cardTop.appendChild(icon);
        cardTop.appendChild(title);
    
        const url = document.createElement('div');
        url.className = 'card-url';
        url.textContent = link.url;
    
        card.appendChild(cardTop);
        card.appendChild(url);
    
        if (link.isPrivate) {
            const privateTag = document.createElement('div');
            privateTag.className = 'private-tag';
            privateTag.textContent = '私密';
            card.appendChild(privateTag);
        }
    
        const correctedUrl = link.url.startsWith('http://') || link.url.startsWith('https://') ? link.url : 'http://' + link.url;
    
        if (!isAdmin) {
            card.addEventListener('click', () => {
                window.open(correctedUrl, '_blank');
                logAction('打开链接', { name: link.name, url: correctedUrl });
            });
        }
    
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '–';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function (event) {
            event.stopPropagation();
            removeCard(card);
        };
        card.appendChild(deleteBtn);
    
        updateCardStyle(card);
    
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragover', dragOver);
        card.addEventListener('dragend', dragEnd);
        card.addEventListener('drop', drop);
        card.addEventListener('touchstart', touchStart, { passive: false });
    
        if (isAdmin && removeMode) {
            deleteBtn.style.display = 'block';
        }
    
        if (isAdmin || (link.isPrivate && isLoggedIn) || !link.isPrivate) {
            container.appendChild(card);
        }
        // logAction('创建卡片', { name: link.name, isPrivate: link.isPrivate });
    }
    
    // 更新卡片样式
    function updateCardStyle(card) {
        if (isDarkTheme) {
            card.style.backgroundColor = '#1e1e1e';
            card.style.color = '#ffffff';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        } else {
            card.style.backgroundColor = '#b8c9d9';
            card.style.color = '#333';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // 更新分类选择下拉框
    function updateCategorySelect() {
        const categorySelect = document.getElementById('category-select');
        categorySelect.innerHTML = '';
    
        Object.keys(categories).forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    
        logAction('更新分类选择', { categoryCount: Object.keys(categories).length });
    }
    
    // 保存链接数据
    async function saveLinks() {
        if (isAdmin && !(await validateToken())) {
            return;
        }

        let allLinks = [...publicLinks, ...privateLinks];
    
        try {
            await fetch('/api/saveOrder', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authToken')
                },
                body: JSON.stringify({ 
                    userId: 'testUser', 
                    links: allLinks,
                    categories: categories
                }),
            });
            logAction('保存链接', { linkCount: allLinks.length, categoryCount: Object.keys(categories).length });
        } catch (error) {
            logAction('保存链接失败', { error: error.message });
            alert('保存链接失败，请重试');
        }
    }
    
    // 添加卡片弹窗
    async function addLink() {
        if (!await validateToken()) {
            return; 
        }
        const name = document.getElementById('name-input').value;
        const url = document.getElementById('url-input').value;
        const category = document.getElementById('category-select').value;
        const isPrivate = document.getElementById('private-checkbox').checked;
    
        if (name && url && category) {
            const newLink = { name, url, category, isPrivate };
    
            if (isPrivate) {
                privateLinks.push(newLink);
            } else {
                publicLinks.push(newLink);
            }
    
            links = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;
    
            if (isAdmin || (isPrivate && isLoggedIn) || !isPrivate) {
                const container = document.getElementById(category);
                if (container) {
                    createCard(newLink, container);
                } else {
                    categories[category] = [];
                    renderCategories();
                }
            }
    
            saveLinks();
    
            document.getElementById('name-input').value = '';
            document.getElementById('url-input').value = '';
            document.getElementById('private-checkbox').checked = false;
            hideAddDialog();

            logAction('添加卡片', { name, url, category, isPrivate });
        }
    }

    // 删除卡片
    async function removeCard(card) {
        if (!await validateToken()) {
            return; 
        }
        const name = card.querySelector('.card-title').textContent;
        const url = card.querySelector('.card-url').textContent;
        const isPrivate = card.dataset.isPrivate === 'true';
        
        links = links.filter(link => link.url !== url);
        if (isPrivate) {
            privateLinks = privateLinks.filter(link => link.url !== url);
        } else {
            publicLinks = publicLinks.filter(link => link.url !== url);
        }
    
        for (const key in categories) {
            categories[key] = categories[key].filter(link => link.url !== url);
        }
    
        card.remove();
    
        saveLinks();
    
        logAction('删除卡片', { name, url, isPrivate });
    }
    
    // 拖拽卡片
    let draggedCard = null;
    let touchStartX, touchStartY;
    
    // 触屏端拖拽卡片
    function touchStart(event) {
        if (!isAdmin) {
            return;
        }
        draggedCard = event.target.closest('.card');
        if (!draggedCard) return;
    
        event.preventDefault();
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    
        draggedCard.classList.add('dragging');
        
        document.addEventListener('touchmove', touchMove, { passive: false });
        document.addEventListener('touchend', touchEnd);
    
    }
    
    function touchMove(event) {
        if (!draggedCard) return;
        event.preventDefault();
    
        const touch = event.touches[0];
        const currentX = touch.clientX;
        const currentY = touch.clientY;

        const deltaX = currentX - touchStartX;
        const deltaY = currentY - touchStartY;
        draggedCard.style.transform = "translate(" + deltaX + "px, " + deltaY + "px)";
    
        const target = findCardUnderTouch(currentX, currentY);
        if (target && target !== draggedCard) {
            const container = target.parentElement;
            const targetRect = target.getBoundingClientRect();
    
            if (currentX < targetRect.left + targetRect.width / 2) {
                container.insertBefore(draggedCard, target);
            } else {
                container.insertBefore(draggedCard, target.nextSibling);
            }
        }
    }
    
    function touchEnd(event) {
        if (!draggedCard) return;
    
        const card = draggedCard;
        const targetCategory = card.closest('.card-container').id;
    
        validateToken().then(isValid => {
            if (isValid && card) {
                updateCardCategory(card, targetCategory);
                saveCardOrder().catch(error => {
                    console.error('Save failed:', error);
                });
            }
            cleanupDragState();
        });
    }
    
    function findCardUnderTouch(x, y) {
        const cards = document.querySelectorAll('.card:not(.dragging)');
        return Array.from(cards).find(card => {
            const rect = card.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        });
    }

    // PC端拖拽卡片
    function dragStart(event) {
        if (!isAdmin) {
            event.preventDefault();
            return;
        }
        draggedCard = event.target.closest('.card');
        if (!draggedCard) return;
    
        draggedCard.classList.add('dragging');
        event.dataTransfer.effectAllowed = "move";
        logAction('开始拖拽卡片', { name: draggedCard.querySelector('.card-title').textContent });
    }
    
    function dragOver(event) {
        if (!isAdmin) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        const target = event.target.closest('.card');
        if (target && target !== draggedCard) {
            const container = target.parentElement;
            const mousePositionX = event.clientX;
            const targetRect = target.getBoundingClientRect();
    
            if (mousePositionX < targetRect.left + targetRect.width / 2) {
                container.insertBefore(draggedCard, target);
            } else {
                container.insertBefore(draggedCard, target.nextSibling);
            }
        }
    }
    
    // 清理拖拽状态函数
    function cleanupDragState() {
        if (draggedCard) {
            draggedCard.classList.remove('dragging');
            draggedCard.style.transform = '';
            draggedCard = null;
        }
        
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('touchend', touchEnd);
        
        touchStartX = null;
        touchStartY = null;
    }

    // PC端拖拽结束
    function drop(event) {
        if (!isAdmin) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        
        const card = draggedCard;
        const targetCategory = event.target.closest('.card-container').id;
        
        validateToken().then(isValid => {
            if (isValid && card) {
                updateCardCategory(card, targetCategory);
                saveCardOrder().catch(error => {
                    console.error('Save failed:', error);
                });
            }
            cleanupDragState();
        });
    }

    function dragEnd(event) {
        if (draggedCard) {
            draggedCard.classList.remove('dragging');
            logAction('拖拽卡片结束');
        }
    }
  
    // 更新卡片分类
    function updateCardCategory(card, newCategory) {
        const cardTitle = card.querySelector('.card-title').textContent;
        const cardUrl = card.querySelector('.card-url').textContent;
        const isPrivate = card.dataset.isPrivate === 'true';
    
        const linkIndex = links.findIndex(link => link.url === cardUrl);
        if (linkIndex !== -1) {
            links[linkIndex].category = newCategory;
        }
    
        const linkArray = isPrivate ? privateLinks : publicLinks;
        const arrayIndex = linkArray.findIndex(link => link.url === cardUrl);
        if (arrayIndex !== -1) {
            linkArray[arrayIndex].category = newCategory;
        }
    
        card.dataset.category = newCategory;
    }

    // 在页面加载完成后添加触摸事件监听器
    document.addEventListener('DOMContentLoaded', function() {
        const cardContainers = document.querySelectorAll('.card-container');
        cardContainers.forEach(container => {
            container.addEventListener('touchstart', touchStart, { passive: false });
        });
    });    
    
    // 保存卡片顺序
    async function saveCardOrder() {
        if (!await validateToken()) {
            return; 
        }
        const containers = document.querySelectorAll('.card-container');
        let newPublicLinks = [];
        let newPrivateLinks = [];
        let newCategories = {};
    
        containers.forEach(container => {
            const category = container.id;
            newCategories[category] = [];
    
            [...container.children].forEach(card => {
                const url = card.querySelector('.card-url').textContent;
                const name = card.querySelector('.card-title').textContent;
                const isPrivate = card.dataset.isPrivate === 'true';
                card.dataset.category = category;
                const link = { name, url, category, isPrivate };
                if (isPrivate) {
                    newPrivateLinks.push(link);
                } else {
                    newPublicLinks.push(link);
                }
                newCategories[category].push(link); 
            });
        });
    
        publicLinks.length = 0;
        publicLinks.push(...newPublicLinks);
        privateLinks.length = 0;
        privateLinks.push(...newPrivateLinks);
        Object.keys(categories).forEach(key => delete categories[key]);
        Object.assign(categories, newCategories);
    
        logAction('保存卡片顺序', { 
            publicCount: newPublicLinks.length, 
            privateCount: newPrivateLinks.length, 
            categoryCount: Object.keys(newCategories).length 
        });
    
        try {
            const response = await fetch('/api/saveOrder', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authToken')
                },
                body: JSON.stringify({ 
                    userId: 'testUser', 
                    links: [...newPublicLinks, ...newPrivateLinks],
                    categories: newCategories
                }),
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error('Failed to save order');
            }
            logAction('保存卡片顺序', { publicCount: newPublicLinks.length, privateCount: newPrivateLinks.length, categoryCount: Object.keys(newCategories).length });
        } catch (error) {
            logAction('保存顺序失败', { error: error.message });
            alert('保存顺序失败，请重试');
        }
    }             
    
    // 设置状态重新加载卡片
    function reloadCardsAsAdmin() {
        document.querySelectorAll('.card-container').forEach(container => {
            container.innerHTML = '';
        });
        loadLinks().then(() => {
            if (isDarkTheme) {
                applyDarkTheme();
            }
        });
        logAction('重新加载卡片（管理员模式）');
    }
    
    // 密码输入框回车事件
    document.getElementById('admin-password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            toggleSecretGarden();
        }
    });
    
    // 切换设置状态
    async function toggleAdminMode() {
        const adminBtn = document.getElementById('admin-mode-btn');
        const addRemoveControls = document.querySelector('.add-remove-controls');
    
        if (!isAdmin && isLoggedIn) {
            if (!await validateToken()) {
                return; 
            }

            // 在进入设置模式之前进行备份
            try {
                const response = await fetch('/api/backupData', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('authToken')
                    },
                    body: JSON.stringify({ 
                        sourceUserId: 'testUser', 
                        backupUserId: 'backup' 
                    }),
                });
                const result = await response.json();
                if (result.success) {
                    logAction('数据备份成功');
                } else {
                    throw new Error('备份失败');
                }
            } catch (error) {
                logAction('数据备份失败', { error: error.message });
                if (!confirm('备份失败，是否仍要继续进入设置模式？')) {
                    return;
                }
            }

            isAdmin = true;
            adminBtn.textContent = "退出设置";
            addRemoveControls.style.display = 'flex';
            alert('准备设置分类和书签');
            reloadCardsAsAdmin();
            logAction('进入设置');
        } else if (isAdmin) {
            isAdmin = false;
            removeMode = false;
            adminBtn.textContent = "设  置";
            addRemoveControls.style.display = 'none';
            alert('设置已保存');
            reloadCardsAsAdmin();
            logAction('离开设置');
        }
    
        updateUIState();
    }
    
    // 切换到登录状态
    function toggleSecretGarden() {
        const passwordInput = document.getElementById('admin-password');
        if (!isLoggedIn) {
            verifyPassword(passwordInput.value)
                .then(result => {
                    if (result.valid) {
                        isLoggedIn = true;
                        localStorage.setItem('authToken', result.token);
                        console.log('Token saved:', result.token); 
                        loadLinks(); 
                        alert('登录成功！');
                        logAction('登录成功');
                    } else {
                        alert('密码错误');
                        logAction('登录失败', { reason: result.error || '密码错误' });
                    }
                    updateUIState();
                })
                .catch(error => {
                    console.error('Login error:', error);
                    alert('登录过程出错，请重试');
                });
        } else {
            isLoggedIn = false;
            isAdmin = false;
            localStorage.removeItem('authToken');
            links = publicLinks;
            loadSections();
            alert('退出登录！');
            updateUIState();
            passwordInput.value = '';
            logAction('退出登录');
        }
    }
    

    
    // 显示添加链接对话框
    function showAddDialog() {
        document.getElementById('dialog-overlay').style.display = 'flex';
        logAction('显示添加链接对话框');
    }
    
    // 隐藏添加链接对话框
    function hideAddDialog() {
        document.getElementById('dialog-overlay').style.display = 'none';
        logAction('隐藏添加链接对话框');
    }
    
    // 切换删除卡片模式
    function toggleRemoveMode() {
        removeMode = !removeMode;
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = removeMode ? 'block' : 'none';
        });
        logAction('切换删除卡片模式', { removeMode });
    }
    
    //切换删除分类模式
    function toggleRemoveCategory() {
        isRemoveCategoryMode = !isRemoveCategoryMode;
        const deleteButtons = document.querySelectorAll('.delete-category-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = isRemoveCategoryMode ? 'inline-block' : 'none';
        });
        logAction('切换删除分类模式', { isRemoveCategoryMode });
    }
    
    
    
    // 验证密码
    async function verifyPassword(inputPassword) {
        const response = await fetch('/api/verifyPassword', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: inputPassword }),
        });
        const result = await response.json();
        return result;
    }
    
    // 初始化加载
    document.addEventListener('DOMContentLoaded', async () => {
        await validateToken(); 
        loadLinks(); 
    });


    // 前端检查是否有 token
    async function validateToken() {
        const token = localStorage.getItem('authToken');
        if (!token) {
            isLoggedIn = false;
            updateUIState();
            return false;
        }

        try {
            const response = await fetch('/api/getLinks?userId=testUser', {
                headers: { 'Authorization': token }
            });
            
            if (response.status === 401) {
                await resetToLoginState('token已过期，请重新登录'); 
                return false;
            }
            
            isLoggedIn = true;
            updateUIState();
            return true;
        } catch (error) {
            console.error('Token validation error:', error);
            return false;
        }
    }

    // 重置状态
    async function resetToLoginState(message) {
        alert(message);
        
        cleanupDragState();
        
        localStorage.removeItem('authToken');
        isLoggedIn = false;
        isAdmin = false;
        removeMode = false;
        isRemoveCategoryMode = false;
        
        const passwordInput = document.getElementById('admin-password');
        if (passwordInput) {
            passwordInput.value = '';
        }
        
        updateUIState();
        links = publicLinks;
        loadSections();
        
        const addRemoveControls = document.querySelector('.add-remove-controls');
        if (addRemoveControls) {
            addRemoveControls.style.display = 'none';
        }
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.style.display = 'none';
        });
        
        document.querySelectorAll('.delete-category-btn').forEach(btn => {
            btn.style.display = 'none';
        });
        
        const dialogOverlay = document.getElementById('dialog-overlay');
        if (dialogOverlay) {
            dialogOverlay.style.display = 'none';
        }
    }

    </script>
</body>

</html>
`;

// 服务端 token 验证
async function validateServerToken(authToken, env) {
    if (!authToken) {
        return {
            isValid: false,
            status: 401,
            response: { error: 'Unauthorized', message: '未登录或登录已过期' }
        };
    }

    try {
        const [timestamp, hash] = authToken.split('.');
        const tokenTimestamp = parseInt(timestamp);
        const now = Date.now();
        
        const FIFTEEN_MINUTES = 15 * 60 * 1000;
        if (now - tokenTimestamp > FIFTEEN_MINUTES) {
            return {
                isValid: false,
                status: 401,
                response: { 
                    error: 'Token expired',
                    tokenExpired: true,
                    message: '登录已过期，请重新登录'
                }
            };
        }
        
        const tokenData = timestamp + "_" + env.ADMIN_PASSWORD;
        const encoder = new TextEncoder();
        const data = encoder.encode(tokenData);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const expectedHash = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
        
        if (hash !== expectedHash) {
            return {
                isValid: false,
                status: 401,
                response: { 
                    error: 'Invalid token',
                    tokenInvalid: true,
                    message: '登录状态无效，请重新登录'
                }
            };
        }

        return { isValid: true };
    } catch (error) {
        return {
            isValid: false,
            status: 401,
            response: { 
                error: 'Invalid token',
                tokenInvalid: true,
                message: '登录验证失败，请重新登录'
            }
        };
    }
}

export default {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      if (url.pathname === '/') {
        return new Response(HTML_CONTENT, {
          headers: { 'Content-Type': 'text/html' }
        });
      }
  
      if (url.pathname === '/api/getLinks') {
        const userId = url.searchParams.get('userId');
        const authToken = request.headers.get('Authorization');
        const data = await env.CARD_ORDER.get(userId);
  
        if (data) {
            const parsedData = JSON.parse(data);
            
            // 验证 token
            if (authToken) {
                const validation = await validateServerToken(authToken, env);
                if (!validation.isValid) {
                    return new Response(JSON.stringify(validation.response), {
                        status: validation.status,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }

                // Token 有效，返回完整数据
                return new Response(JSON.stringify(parsedData), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            // 未提供 token，只返回公开数据
            const filteredLinks = parsedData.links.filter(link => !link.isPrivate);
            const filteredCategories = {};
            Object.keys(parsedData.categories).forEach(category => {
                filteredCategories[category] = parsedData.categories[category].filter(link => !link.isPrivate);
            });
  
            return new Response(JSON.stringify({
                links: filteredLinks,
                categories: filteredCategories
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }
  
        return new Response(JSON.stringify({
            links: [],
            categories: {}
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
      }
  
      if (url.pathname === '/api/saveOrder' && request.method === 'POST') {
        const authToken = request.headers.get('Authorization');
        const validation = await validateServerToken(authToken, env);
        
        if (!validation.isValid) {
            return new Response(JSON.stringify(validation.response), {
                status: validation.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { userId, links, categories } = await request.json();
        await env.CARD_ORDER.put(userId, JSON.stringify({ links, categories }));
        return new Response(JSON.stringify({ 
            success: true,
            message: '保存成功'
        }), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
      }
  
      if (url.pathname === '/api/verifyPassword' && request.method === 'POST') { 
        try {
            const { password } = await request.json();
            const isValid = password === env.ADMIN_PASSWORD;
            
            if (isValid) {
                // 生成包含时间戳的加密 token
                const timestamp = Date.now();
                const tokenData = timestamp + "_" + env.ADMIN_PASSWORD; 
                const encoder = new TextEncoder();
                const data = encoder.encode(tokenData);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                
                // 使用指定格式：timestamp.hash
                const token = timestamp + "." + btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
                
                return new Response(JSON.stringify({ 
                    valid: true,
                    token: token 
                }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            return new Response(JSON.stringify({ 
                valid: false,
                error: 'Invalid password'
            }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new Response(JSON.stringify({ 
                valid: false,
                error: error.message 
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
      }
  
      if (url.pathname === '/api/backupData' && request.method === 'POST') {
        const { sourceUserId } = await request.json();
        const result = await this.backupData(env, sourceUserId);
        return new Response(JSON.stringify(result), {
          status: result.success ? 200 : 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }  
  
      return new Response('Not Found', { status: 404 });
    },
  
    async backupData(env, sourceUserId) {
        const MAX_BACKUPS = 10;
        const sourceData = await env.CARD_ORDER.get(sourceUserId);
        
        if (sourceData) {
            try {
                const currentDate = new Date().toLocaleString('zh-CN', {
                    timeZone: 'Asia/Shanghai',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).replace(/\//g, '-'); 
                
                const backupId = `backup_${currentDate}`;
                
                const backups = await env.CARD_ORDER.list({ prefix: 'backup_' });
                const backupKeys = backups.keys.map(key => key.name).sort((a, b) => {
                    const timeA = new Date(a.split('_')[1].replace(/-/g, '/')).getTime();
                    const timeB = new Date(b.split('_')[1].replace(/-/g, '/')).getTime();
                    return timeB - timeA;  // 降序排序，最新的在前
                });
                
                await env.CARD_ORDER.put(backupId, sourceData);
                
                const allBackups = [...backupKeys, backupId].sort((a, b) => {
                    const timeA = new Date(a.split('_')[1].replace(/-/g, '/')).getTime();
                    const timeB = new Date(b.split('_')[1].replace(/-/g, '/')).getTime();
                    return timeB - timeA;
                });
                
                const backupsToDelete = allBackups.slice(MAX_BACKUPS);
                
                if (backupsToDelete.length > 0) {
                    await Promise.all(
                        backupsToDelete.map(key => env.CARD_ORDER.delete(key))
                    );
                }
    
                return { 
                    success: true, 
                    backupId,
                    remainingBackups: MAX_BACKUPS,
                    deletedCount: backupsToDelete.length 
                };
            } catch (error) {
                return { 
                    success: false, 
                    error: 'Backup operation failed',
                    details: error.message 
                };
            }
        }
        return { success: false, error: 'Source data not found' };
    }
  };