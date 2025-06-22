document.addEventListener('DOMContentLoaded', () => {
    // Example: Alert when clicking the "Add Bot" button
    const addBotButton = document.querySelector('.btn-add-bot');
    if (addBotButton) {
        addBotButton.addEventListener('click', () => {
            alert('Bạn đã nhấp vào nút "Thêm Bot"! Chức năng này sẽ được phát triển sau.');
        });
    }

    // Example: Log search query when pressing search button in hero section
    const heroSearchButton = document.querySelector('.hero-search button');
    const heroSearchInput = document.querySelector('.hero-search input');
    if (heroSearchButton && heroSearchInput) {
        heroSearchButton.addEventListener('click', () => {
            const query = heroSearchInput.value;
            if (query) {
                console.log(`Tìm kiếm: ${query}`);
                alert(`Tìm kiếm cho: "${query}"`);
                // In a real application, you would send this query to a backend API
            } else {
                alert('Vui lòng nhập từ khóa tìm kiếm.');
            }
        });
    }

    // Bạn có thể thêm nhiều yếu tố tương tác khác tại đây,
    // như tải nội dung động, lọc, sắp xếp, v.v.
});
