document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality for Navbar buttons (from previous example)
    const addBotButton = document.querySelector('.btn-add-bot');
    if (addBotButton) {
        addBotButton.addEventListener('click', () => {
            alert('Bạn đã nhấp vào nút "Thêm Bot"! Chức năng này sẽ được phát triển sau.');
        });
    }

    const heroSearchButton = document.querySelector('.navbar .search-bar button');
    const heroSearchInput = document.querySelector('.navbar .search-bar input');
    if (heroSearchButton && heroSearchInput) {
        heroSearchButton.addEventListener('click', () => {
            const query = heroSearchInput.value;
            if (query) {
                console.log(`Tìm kiếm: ${query}`);
                alert(`Tìm kiếm cho: "${query}"`);
            } else {
                alert('Vui lòng nhập từ khóa tìm kiếm.');
            }
        });
    }

    // Tab switching logic for Info/Commands/Reviews
    const botTabs = document.querySelectorAll('.bot-tabs li');
    const tabContents = document.querySelectorAll('.tab-content');

    botTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior

            // Remove active class from all tabs and content
            botTabs.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show the corresponding tab content
            const targetId = tab.querySelector('a').getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // Ensure the 'Info' tab is active by default on load
    if (botTabs.length > 0 && tabContents.length > 0) {
        botTabs[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
});
