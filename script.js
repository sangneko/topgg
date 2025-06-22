document.addEventListener('DOMContentLoaded', () => {
    // --- Mock Data (Dữ liệu giả lập cho các bot và danh mục) ---
    const allBots = [
        {
            id: 'mudae',
            name: 'Mudae',
            avatar: 'https://cdn.top.gg/icons/686414777592477810/8939c01740924ecae1770e1762c4314c.webp?size=512',
            tagline: 'The most popular waifu and husbando collector with many mini-games. Over 1,000,000 Discord Servers!',
            description: `
                <h2>Mudae Bot - Giới thiệu chi tiết</h2>
                <p>Mudae là một bot Discord chuyên về việc sưu tập waifu và husbando, mang đến trải nghiệm độc đáo cho người dùng. Với hàng ngàn nhân vật từ anime, manga, và game, Mudae cho phép bạn thu thập, đấu giá, và quản lý bộ sưu tập của mình một cách thú vị.</p>

                <h3>Tính năng nổi bật</h3>
                <ul>
                    <li><i class="fas fa-star"></i> <strong>Sưu tập nhân vật:</strong> Hơn 60.000 nhân vật từ các tác phẩm phổ biến.</li>
                    <li><i class="fas fa-coins"></i> <strong>Hệ thống kinh tế:</strong> Kiếm tiền, mua bán, và đấu giá các nhân vật.</li>
                    <li><i class="fas fa-gamepad"></i> <strong>Mini-games:</strong> Chơi các trò chơi nhỏ để nhận phần thưởng.</li>
                    <li><i class="fas fa-ruler-combined"></i> <strong>Tùy chỉnh:</strong> Cá nhân hóa hồ sơ và bộ sưu tập của bạn.</li>
                    <li><i class="fas fa-users"></i> <strong>Tương tác cộng đồng:</strong> Giao dịch và cạnh tranh với bạn bè.</li>
                </ul>

                <h3>Cách sử dụng cơ bản</h3>
                <p>Để bắt đầu với Mudae, bạn chỉ cần mời bot vào máy chủ Discord của mình. Sau đó, sử dụng lệnh <code>$wa</code> hoặc <code>$husb</code> để xuất hiện một nhân vật ngẫu nhiên. Nếu bạn muốn sở hữu nhân vật đó, hãy nhanh chóng sử dụng <code>$claim</code> trước khi người khác làm vậy!</p>
                <p>Bạn có thể tìm thấy danh sách đầy đủ các lệnh và hướng dẫn chi tiết trên trang web chính thức của Mudae hoặc bằng cách sử dụng lệnh <code>$help</code> trong Discord.</p>

                <p>Mudae không chỉ là một bot sưu tập, mà còn là một cộng đồng lớn mạnh với hàng triệu người dùng trên khắp thế giới. Tham gia ngay để bắt đầu hành trình sưu tập của bạn!</p>
                <h3>Hình ảnh minh họa</h3>
                <img src="https://cdn.top.gg/assets/img/bot-feature-template.png" alt="Mudae Feature 1" style="width: 100%; max-width: 600px; border-radius: 8px; margin-bottom: 20px;">
                <p>Mudae liên tục được cập nhật với các tính năng mới và nhân vật mới, đảm bảo trải nghiệm luôn mới mẻ và hấp dẫn.</p>
            `,
            commands: `
                <h2>Các lệnh phổ biến của Mudae</h2>
                <p>Dưới đây là một số lệnh cơ bản bạn có thể sử dụng với Mudae:</p>
                <ul>
                    <li><code>$wa</code> - Hiển thị một waifu ngẫu nhiên để claim.</li>
                    <li><code>$husb</code> - Hiển thị một husbando ngẫu nhiên để claim.</li>
                    <li><code>$claim</code> - Yêu cầu nhân vật được hiển thị gần đây nhất.</li>
                    <li><code>$marry</code> - Kết hôn với một waifu/husbando đã claim.</li>
                    <li><code>$divorce</code> - Ly hôn với một waifu/husbando.</li>
                    <li><code>$rank</code> - Xem thứ hạng của bạn trong server.</li>
                    <li><code>$kakera</code> - Thả các viên kakera để thu thập.</li>
                    <li><code>$daily</code> - Nhận phần thưởng hàng ngày.</li>
                    <li><code>$help</code> - Hiển thị tất cả các lệnh và hướng dẫn.</li>
                </ul>
                <p>Để biết thêm chi tiết về các lệnh và tùy chọn nâng cao, hãy truy cập trang web Mudae hoặc sử dụng <code>$help</code> trong Discord.</p>
            `,
            reviews: `
                <div class="review-summary">
                    <h3>Đánh giá và Phản hồi</h3>
                    <div class="rating-overall">
                        <span class="rating-score">4.52</span>
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="total-reviews">(12,345 đánh giá)</span>
                    </div>
                    <button class="btn btn-write-review">Viết đánh giá</button>
                </div>
                <div class="individual-reviews">
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">An Nguyen</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">1 ngày trước</span>
                        </div>
                        <p class="review-text">Bot này thực sự rất hay! Tôi đã dành hàng giờ để chơi và thu thập nhân vật. Rất đáng thử!</p>
                    </div>
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">Van Le</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">3 ngày trước</span>
                        </div>
                        <p class="review-text">Rất nhiều nhân vật, nhưng đôi khi hơi khó để có được nhân vật mình muốn. Overall vẫn là một bot tuyệt vời.</p>
                    </div>
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">Minh Tran</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">1 tuần trước</span>
                        </div>
                        <p class="review-text">Là một fan của anime, bot này là một giấc mơ! Rất dễ sử dụng và thú vị.</p>
                    </div>
                </div>
            `,
            servers: '1.000.000+',
            users: '5.000.000+',
            votes: 1234567,
            categories: ['Anime', 'Multi-purpose', 'Fun', 'Collectibles', 'Games', 'Roleplay'],
            links: {
                website: '#',
                support: '#',
                docs: '#'
            },
            stats: {
                ping: '50ms',
                commandsPerSec: '100+',
                uptime: '99.9%'
            },
            creator: {
                name: 'mudaecreator',
                avatar: 'https://via.placeholder.com/30'
            },
            inviteLink: 'https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot&permissions=8' // Replace with actual bot invite
        },
        {
            id: 'mee6',
            name: 'Mee6',
            avatar: 'https://cdn.top.gg/bots/814407008587636746/banner.webp?size=128',
            tagline: 'The most popular Discord bot for moderation, custom commands, and leveling system.',
            description: `
                <h2>Mee6 Bot - Quản lý server của bạn một cách dễ dàng</h2>
                <p>Mee6 là một trong những bot Discord phổ biến và mạnh mẽ nhất, cung cấp một bộ công cụ toàn diện để quản lý và phát triển cộng đồng của bạn. Từ tính năng tự động điều hành đến hệ thống cấp độ tùy chỉnh, Mee6 giúp bạn tạo ra một server Discord chuyên nghiệp và thú vị.</p>
                <h3>Tính năng chính</h3>
                <ul>
                    <li><i class="fas fa-shield-alt"></i> <strong>Moderation:</strong> Tự động lọc spam, cấm/kick người dùng, cảnh báo.</li>
                    <li><i class="fas fa-cogs"></i> <strong>Custom Commands:</strong> Tạo lệnh tùy chỉnh để tự động hóa các tác vụ.</li>
                    <li><i class="fas fa-chart-line"></i> <strong>Leveling System:</strong> Thưởng cho người dùng hoạt động tích cực bằng cách lên cấp.</li>
                    <li><i class="fas fa-music"></i> <strong>Music:</strong> Chơi nhạc từ YouTube, Spotify, v.v.</li>
                    <li><i class="fas fa-bell"></i> <strong>Welcome Messages:</strong> Tùy chỉnh tin nhắn chào mừng cho thành viên mới.</li>
                </ul>
                <p>Mee6 là lựa chọn hoàn hảo cho các server lớn nhỏ muốn có một bot đáng tin cậy và đầy đủ tính năng.</p>
            `,
            commands: `
                <h2>Các lệnh phổ biến của Mee6</h2>
                <p>Mee6 có rất nhiều lệnh, dưới đây là một số lệnh cơ bản và phổ biến:</p>
                <ul>
                    <li><code>!rank</code> - Xem cấp độ hiện tại của bạn.</li>
                    <li><code>!leaderboard</code> - Xem bảng xếp hạng cấp độ.</li>
                    <li><code>!warn [user] [reason]</code> - Cảnh báo người dùng.</li>
                    <li><code>!ban [user] [reason]</code> - Cấm người dùng khỏi server.</li>
                    <li><code>!play [song]</code> - Chơi nhạc.</li>
                    <li><code>!stop</code> - Dừng nhạc.</li>
                    <li><code>!help</code> - Hiển thị danh sách các lệnh.</li>
                </ul>
                <p>Mee6 cũng cho phép bạn tạo các lệnh tùy chỉnh của riêng mình!</p>
            `,
            reviews: `
                <div class="review-summary">
                    <h3>Đánh giá và Phản hồi</h3>
                    <div class="rating-overall">
                        <span class="rating-score">4.70</span>
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="total-reviews">(50,123 đánh giá)</span>
                    </div>
                    <button class="btn btn-write-review">Viết đánh giá</button>
                </div>
                <div class="individual-reviews">
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">Quynh Anh</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">2 ngày trước</span>
                        </div>
                        <p class="review-text">Mee6 là bot quản lý server không thể thiếu của tôi. Rất dễ cài đặt và tùy chỉnh!</p>
                    </div>
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">Duc Trung</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">5 ngày trước</span>
                        </div>
                        <p class="review-text">Một bot tuyệt vời, nhưng một số tính năng nâng cao yêu cầu premium. Dù sao vẫn rất hài lòng.</p>
                    </div>
                </div>
            `,
            servers: '15.000.000+',
            users: '20.000.000+',
            votes: 5234123,
            categories: ['Moderation', 'Utility', 'Music', 'Fun', 'Leveling'],
            links: {
                website: '#',
                support: '#',
                docs: '#'
            },
            stats: {
                ping: '40ms',
                commandsPerSec: '500+',
                uptime: '99.99%'
            },
            creator: {
                name: 'mee6dev',
                avatar: 'https://via.placeholder.com/30'
            },
            inviteLink: 'https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot&permissions=8'
        },
        {
            id: 'dyno',
            name: 'Dyno',
            avatar: 'https://cdn.top.gg/bots/264103097232230400/banner.webp?size=128',
            tagline: 'A feature-rich moderation bot for your Discord server.',
            description: `
                <h2>Dyno Bot - Đa năng và Mạnh mẽ</h2>
                <p>Dyno là một bot đa chức năng mạnh mẽ, cung cấp nhiều tính năng từ quản lý server đến giải trí. Với giao diện điều khiển web trực quan, bạn có thể dễ dàng tùy chỉnh Dyno để phù hợp với nhu cầu của server mình.</p>
                <h3>Các chức năng chính</h3>
                <ul>
                    <li><i class="fas fa-user-shield"></i> <strong>Moderation:</strong> Tự động hóa các tác vụ điều hành, cảnh báo, cấm, mute.</li>
                    <li><i class="fas fa-music"></i> <strong>Music:</strong> Phát nhạc chất lượng cao từ nhiều nguồn.</li>
                    <li><i class="fas fa-cogs"></i> <strong>Custom Commands:</strong> Tạo lệnh phản hồi tự động tùy chỉnh.</li>
                    <li><i class="fas fa-globe"></i> <strong>Auto-roles:</strong> Tự động gán vai trò cho thành viên mới.</li>
                    <li><i class="fas fa-chart-bar"></i> <strong>Logging:</strong> Ghi lại các sự kiện quan trọng trong server.</li>
                </ul>
                <p>Dyno là một công cụ linh hoạt và đáng tin cậy cho mọi server Discord.</p>
            `,
            commands: `
                <h2>Các lệnh của Dyno</h2>
                <p>Dyno sử dụng prefix <code>?</code> (mặc định), một số lệnh phổ biến:</p>
                <ul>
                    <li><code>?modlog set [channel]</code> - Thiết lập kênh để ghi lại hành động của mod.</li>
                    <li><code>?automod blacklist [word]</code> - Thêm từ vào danh sách đen.</li>
                    <li><code>?play [url/query]</code> - Chơi nhạc.</li>
                    <li><code>?join</code> - Bot tham gia kênh thoại của bạn.</li>
                    <li><code>?leave</code> - Bot rời kênh thoại.</li>
                    <li><code>?addrole [user] [role]</code> - Thêm vai trò cho người dùng.</li>
                </ul>
            `,
            reviews: `
                <div class="review-summary">
                    <h3>Đánh giá và Phản hồi</h3>
                    <div class="rating-overall">
                        <span class="rating-score">4.65</span>
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="total-reviews">(30,500 đánh giá)</span>
                    </div>
                    <button class="btn btn-write-review">Viết đánh giá</button>
                </div>
                <div class="individual-reviews">
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">Huu Nghia</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">4 ngày trước</span>
                        </div>
                        <p class="review-text">Giao diện điều khiển web rất tiện lợi. Dyno là bot yêu thích của tôi!</p>
                    </div>
                </div>
            `,
            servers: '10.000.000+',
            users: '12.000.000+',
            votes: 3500000,
            categories: ['Moderation', 'Utility', 'Music', 'Customizable'],
            links: {
                website: '#',
                support: '#',
                docs: '#'
            },
            stats: {
                ping: '60ms',
                commandsPerSec: '300+',
                uptime: '99.8%'
            },
            creator: {
                name: 'dynodev',
                avatar: 'https://via.placeholder.com/30'
            },
            inviteLink: 'https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot&permissions=8'
        },
        {
            id: 'groot',
            name: 'Groot',
            avatar: 'https://cdn.top.gg/icons/468840656628994048/cb0195e2632298c56c2301f2f814b787.webp?size=128',
            tagline: 'I am Groot! A simple fun bot.',
            description: `
                <h2>Groot - Tôi là Groot!</h2>
                <p>Groot là một bot giải trí đơn giản, lấy cảm hứng từ nhân vật Groot của Marvel. Bot này chủ yếu tập trung vào các câu nói vui nhộn và tương tác nhẹ nhàng.</p>
                <h3>Tính năng</h3>
                <ul>
                    <li><i class="fas fa-comment-dots"></i> <strong>Groot Says:</strong> Bot sẽ nói "I am Groot!" theo nhiều cách khác nhau.</li>
                    <li><i class="fas fa-face-laugh"></i> <strong>Fun Commands:</strong> Một số lệnh giải trí đơn giản.</li>
                </ul>
                <p>Nếu bạn tìm kiếm một bot nhẹ nhàng để thêm chút niềm vui cho server, Groot là một lựa chọn tốt.</p>
            `,
            commands: `
                <h2>Các lệnh của Groot</h2>
                <p>Groot chỉ có một số lệnh rất đơn giản:</p>
                <ul>
                    <li><code>!groot</code> - Bot nói "I am Groot!"</li>
                    <li><code>!hello</code> - Bot chào bạn.</li>
                </ul>
            `,
            reviews: `
                <div class="review-summary">
                    <h3>Đánh giá và Phản hồi</h3>
                    <div class="rating-overall">
                        <span class="rating-score">3.90</span>
                        <div class="stars">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>
                        </div>
                        <span class="total-reviews">(1,000 đánh giá)</span>
                    </div>
                    <button class="btn btn-write-review">Viết đánh giá</button>
                </div>
                <div class="individual-reviews">
                    <div class="review-item">
                        <div class="review-header">
                            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                            <div class="user-info">
                                <span class="username">Thanh Pham</span>
                                <div class="stars small">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>
                                </div>
                            </div>
                            <span class="review-date">2 tuần trước</span>
                        </div>
                        <p class="review-text">Đơn giản, dễ thương và hài hước. Rất thích!</p>
                    </div>
                </div>
            `,
            servers: '50.000+',
            users: '100.000+',
            votes: 15000,
            categories: ['Fun', 'Entertainment'],
            links: {
                website: '#',
                support: '#',
                docs: '#'
            },
            stats: {
                ping: '70ms',
                commandsPerSec: '50+',
                uptime: '98.5%'
            },
            creator: {
                name: 'grootdev',
                avatar: 'https://via.placeholder.com/30'
            },
            inviteLink: 'https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID&scope=bot&permissions=8'
        }
    ];

    const categories = [
        { name: 'Utility', icon: 'fas fa-tools' },
        { name: 'Moderation', icon: 'fas fa-user-shield' },
        { name: 'Music', icon: 'fas fa-music' },
        { name: 'Fun', icon: 'fas fa-smile' },
        { name: 'Gaming', icon: 'fas fa-gamepad' },
        { name: 'Anime', icon: 'fas fa-palette' },
        { name: 'Social', icon: 'fas fa-users' },
        { name: 'Roleplay', icon: 'fas fa-theater-masks' },
        { name: 'Collectibles', icon: 'fas fa-box-open' },
        { name: 'Leveling', icon: 'fas fa-chart-line' },
        { name: 'Customizable', icon: 'fas fa-cogs' },
        { name: 'Entertainment', icon: 'fas fa-film' }
    ];

    let currentBots = [];
    let currentPage = 1;
    const botsPerPage = 6; // Số bot hiển thị mỗi lần
    let currentCategory = 'all';
    let currentSearchQuery = '';

    // --- DOM Elements ---
    const botGrid = document.getElementById('bot-grid');
    const loadMoreButton = document.getElementById('load-more-bots');
    const heroSearchInput = document.getElementById('hero-search-input');
    const heroSearchButton = document.getElementById('hero-search-button');
    const navbarSearchInput = document.getElementById('navbar-search-input');
    const navbarSearchButton = document.getElementById('navbar-search-button');
    const categoryGrid = document.getElementById('category-grid');
    const currentCategoryDisplay = document.getElementById('current-category-display');

    const botProfileModal = document.getElementById('bot-profile-modal');
    const modalBotDetails = document.getElementById('modal-bot-details');
    const closeModalButton = document.querySelector('.modal .close-button');


    // --- Functions to Render Content ---

    // Render Categories
    function renderCategories() {
        categoryGrid.innerHTML = '';
        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.classList.add('category-item');
            categoryItem.innerHTML = `
                <i class="${category.icon}"></i>
                <span>${category.name}</span>
            `;
            categoryItem.dataset.category = category.name; // Store category name
            categoryGrid.appendChild(categoryItem);
        });
    }

    // Create a single bot card HTML
    function createBotCard(bot) {
        const botCard = document.createElement('div');
        botCard.classList.add('bot-card');
        botCard.dataset.botId = bot.id; // Store bot ID for modal
        botCard.innerHTML = `
            <img src="${bot.avatar}" alt="${bot.name} Avatar">
            <div class="bot-info">
                <h3>${bot.name}</h3>
                <p class="description">${bot.tagline}</p>
                <div class="bot-stats">
                    <span><i class="fas fa-server"></i> ${bot.servers} Servers</span>
                    <span><i class="fas fa-arrow-up"></i> ${bot.votes.toLocaleString()} Votes</span>
                </div>
                <div class="bot-tags">
                    ${bot.categories.map(tag => `<span>#${tag}</span>`).join('')}
                </div>
                <div class="bot-actions">
                    <button class="btn btn-invite red" data-bot-id="${bot.id}">Mời</button>
                    <button class="btn btn-vote" data-bot-id="${bot.id}">Vote</button>
                </div>
            </div>
        `;
        return botCard;
    }

    // Render Bots to Grid
    function renderBots(botsToRender, append = false) {
        if (!append) {
            botGrid.innerHTML = ''; // Clear grid if not appending
        }

        botsToRender.forEach(bot => {
            botGrid.appendChild(createBotCard(bot));
        });

        // Update Load More button visibility
        if (currentPage * botsPerPage >= currentBots.length) {
            loadMoreButton.style.display = 'none';
        } else {
            loadMoreButton.style.display = 'block';
        }
    }

    // Filter and Search Logic
    function filterAndSearchBots() {
        let filteredBots = allBots;

        // Filter by category
        if (currentCategory !== 'all') {
            filteredBots = filteredBots.filter(bot =>
                bot.categories.includes(currentCategory)
            );
            currentCategoryDisplay.textContent = `(${currentCategory})`;
        } else {
            currentCategoryDisplay.textContent = '';
        }

        // Search by query
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            filteredBots = filteredBots.filter(bot =>
                bot.name.toLowerCase().includes(query) ||
                bot.tagline.toLowerCase().includes(query) ||
                bot.categories.some(cat => cat.toLowerCase().includes(query))
            );
        }

        // Sort by votes (most popular first)
        filteredBots.sort((a, b) => b.votes - a.votes);

        currentBots = filteredBots; // Update global currentBots
        currentPage = 1; // Reset page on filter/search
        renderBots(currentBots.slice(0, botsPerPage)); // Render first page
    }

    // --- Event Listeners ---

    // Navbar search
    navbarSearchButton.addEventListener('click', () => {
        currentSearchQuery = navbarSearchInput.value.trim();
        filterAndSearchBots();
    });
    navbarSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearchQuery = navbarSearchInput.value.trim();
            filterAndSearchBots();
        }
    });

    // Hero section search
    heroSearchButton.addEventListener('click', () => {
        currentSearchQuery = heroSearchInput.value.trim();
        filterAndSearchBots();
    });
    heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearchQuery = heroSearchInput.value.trim();
            filterAndSearchBots();
        }
    });

    // Load More Bots
    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        const startIndex = (currentPage - 1) * botsPerPage;
        const botsToAppend = currentBots.slice(startIndex, startIndex + botsPerPage);
        renderBots(botsToAppend, true); // Append bots
    });

    // Category filtering
    categoryGrid.addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.category-item');
        if (categoryItem) {
            // Remove active from all categories
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            // Add active to clicked category
            categoryItem.classList.add('active');

            currentCategory = categoryItem.dataset.category;
            currentSearchQuery = ''; // Clear search when filtering by category
            navbarSearchInput.value = '';
            heroSearchInput.value = '';
            filterAndSearchBots();
        }
    });

    // --- Bot Profile Modal Logic ---

    // Open Modal when clicking on a bot card (excluding invite/vote buttons)
    botGrid.addEventListener('click', (e) => {
        const botCard = e.target.closest('.bot-card');
        // Check if the click originated from an invite or vote button
        const isActionButton = e.target.closest('.btn-invite') || e.target.closest('.btn-vote');

        if (botCard && !isActionButton) {
            const botId = botCard.dataset.botId;
            const selectedBot = allBots.find(bot => bot.id === botId);
            if (selectedBot) {
                renderBotProfileInModal(selectedBot);
                botProfileModal.style.display = 'flex'; // Use flex to center
                document.body.style.overflow = 'hidden'; // Prevent scrolling body
            }
        }
    });

    // Close Modal
    closeModalButton.addEventListener('click', () => {
        botProfileModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore body scrolling
    });

    // Close modal if click outside content
    window.addEventListener('click', (e) => {
        if (e.target === botProfileModal) {
            botProfileModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Render Bot Profile content into Modal
    function renderBotProfileInModal(bot) {
        modalBotDetails.innerHTML = `
            <div class="bot-profile-header">
                <div class="bot-avatar-container">
                    <img src="${bot.avatar}" alt="${bot.name} Avatar" class="bot-avatar">
                </div>
                <div class="bot-details">
                    <div class="bot-name-section">
                        <h1>${bot.name} <i class="fas fa-check-circle verified-badge"></i></h1>
                    </div>
                    <p class="bot-tagline">${bot.tagline}</p>
                    <div class="bot-actions">
                        <button class="btn btn-invite red" onclick="window.open('${bot.inviteLink}', '_blank')">Mời</button>
                        <button class="btn btn-action" onclick="window.open('${bot.links.website}', '_blank')">Website</button>
                        <button class="btn btn-action" onclick="window.open('${bot.links.support}', '_blank')">Ủng hộ</button>
                        <button class="btn btn-vote modal-vote-btn" data-bot-id="${bot.id}">Vote</button>
                    </div>
                    <div class="bot-stats">
                        <div class="stat-item">
                            <i class="fas fa-server"></i>
                            <span>${bot.servers} Servers</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-users"></i>
                            <span>${bot.users} Users</span>
                        </div>
                        <div class="stat-item votes-display">
                            <i class="fas fa-arrow-up"></i>
                            <span id="modal-bot-votes">${bot.votes.toLocaleString()} Votes</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bot-profile-body">
                <div class="content-area">
                    <nav class="bot-tabs">
                        <ul>
                            <li class="active" data-tab-content="info-modal"><a href="#">Thông tin</a></li>
                            <li data-tab-content="commands-modal"><a href="#">Lệnh</a></li>
                            <li data-tab-content="reviews-modal"><a href="#">Đánh giá</a></li>
                            <li><a href="#">Hỗ trợ</a></li>
                            <li><a href="#">Premium</a></li>
                        </ul>
                    </nav>

                    <section id="info-modal" class="tab-content active">
                        ${bot.description}
                    </section>
                    <section id="commands-modal" class="tab-content">
                        ${bot.commands}
                    </section>
                    <section id="reviews-modal" class="tab-content">
                        ${bot.reviews}
                    </section>
                </div>

                <aside class="sidebar">
                    <div class="sidebar-section">
                        <h3>Liên kết</h3>
                        <ul>
                            <li><a href="${bot.links.website}" target="_blank"><i class="fas fa-globe"></i> Website</a></li>
                            <li><a href="${bot.links.support}" target="_blank"><i class="fas fa-discord"></i> Support Server</a></li>
                            <li><a href="${bot.links.docs}" target="_blank"><i class="fas fa-book"></i> Docs</a></li>
                        </ul>
                    </div>
                    <div class="sidebar-section">
                        <h3>Thống kê</h3>
                        <p>Ping: <span class="stat-value">${bot.stats.ping}</span></p>
                        <p>Lệnh mỗi giây: <span class="stat-value">${bot.stats.commandsPerSec}</span></p>
                        <p>Uptime: <span class="stat-value">${bot.stats.uptime}</span></p>
                    </div>
                    <div class="sidebar-section">
                        <h3>Danh mục</h3>
                        <div class="categories-tags">
                            ${bot.categories.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="sidebar-section">
                        <h3>Người tạo</h3>
                        <div class="creator-info">
                            <img src="${bot.creator.avatar}" alt="Creator Avatar" class="creator-avatar">
                            <span class="creator-name">${bot.creator.name}</span>
                        </div>
                    </div>
                </aside>
            </div>
        `;
        setupModalTabSwitching(); // Setup tabs for the newly loaded modal content
        setupModalVoteButton(); // Setup vote button for the newly loaded modal content
    }

    // Function to handle tab switching inside the modal
    function setupModalTabSwitching() {
        const modalTabs = document.querySelectorAll('#modal-bot-details .bot-tabs li');
        const modalTabContents = document.querySelectorAll('#modal-bot-details .tab-content');

        modalTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior

                modalTabs.forEach(item => item.classList.remove('active'));
                modalTabContents.forEach(content => content.classList.remove('active'));

                tab.classList.add('active');
                const targetId = tab.dataset.tabContent;
                document.getElementById(targetId).classList.add('active');
            });
        });
    }

    // Function to handle vote button click inside modal
    function setupModalVoteButton() {
        const modalVoteButton = document.querySelector('.modal-vote-btn');
        if (modalVoteButton) {
            modalVoteButton.addEventListener('click', () => {
                const botId = modalVoteButton.dataset.botId;
                const botIndex = allBots.findIndex(b => b.id === botId);
                if (botIndex !== -1) {
                    allBots[botIndex].votes++; // Increment votes
                    const modalVotesDisplay = document.getElementById('modal-bot-votes');
                    if (modalVotesDisplay) {
                        modalVotesDisplay.textContent = `${allBots[botIndex].votes.toLocaleString()} Votes`;
                    }
                    alert(`Bạn đã vote cho ${allBots[botIndex].name}! (${allBots[botIndex].votes} votes)`);

                    // Re-render main grid to reflect updated votes (optional, for real-time update)
                    filterAndSearchBots(); // This will re-sort and re-render
                }
            });
        }
    }

    // Handle vote button clicks on main bot cards
    botGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-vote')) {
            e.stopPropagation(); // Prevent modal from opening
            const botId = e.target.dataset.botId;
            const botIndex = allBots.findIndex(b => b.id === botId);
            if (botIndex !== -1) {
                allBots[botIndex].votes++;
                alert(`Bạn đã vote cho ${allBots[botIndex].name}! (${allBots[botIndex].votes} votes)`);
                filterAndSearchBots(); // Re-render to update votes on card
            }
        } else if (e.target.classList.contains('btn-invite')) {
            e.stopPropagation(); // Prevent modal from opening
            const botId = e.target.dataset.botId;
            const selectedBot = allBots.find(bot => bot.id === botId);
            if (selectedBot && selectedBot.inviteLink) {
                window.open(selectedBot.inviteLink, '_blank');
            } else {
                alert('Liên kết mời không khả dụng.');
            }
        }
    });


    // --- Initial Render ---
    renderCategories();
    filterAndSearchBots(); // Initial load of bots
});
