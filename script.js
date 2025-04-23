 // Smooth scrolling for navigation links (only for anchor links starting with '#')
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // else allow normal navigation for other links
    });
});

// Function to play audio
function playAudio(audioFile) {
    const audio = new Audio(audioFile);
    audio.play();
}

// Language toggle functionality
document.getElementById('language-toggle')?.addEventListener('click', function() {
    // Logic to switch between Arabic and French content
    alert('Language toggle functionality is not yet implemented.');
});

// Proverbs data for sayings.html
const proverbs = [
    {
        id: 1,
        text: "   ناس تصون وناس تخون وناس عليها العشرة تهون, ناس تفرحك وناس تجرحك وناس لوكان بيدها تذبحك  ",        
        meaning: "بعض الناس أوفياء وبعضهم لا يهمه المعروف أو العلاقة الطويلة. اختلاف الناس في نواياهم وأفعالهم، مو كلهم طيبين.",
        category: "friends",
        image: "assets/proverbs/proverb1.jpg"
    },
    {
        id: 2,
        text: "     لي يمد سلاحو يموت بيه ,ولي يمد سرو يتعاير بيه  , ولي يشد قدرو واحد ما يدور بيه",
        meaning: "لسلاح اللي تستخدمه ضد الناس، ممكن يرجع يؤذيك. اللي يكشف أسراره للناس، يتعرض للإهانة لاحقًا. الإنسان اللي يحافظ على كرامته، الناس تحترمه وما يتمس",
        category: "wisdom",
        image: "assets/proverbs/proverb2.jpg"
    },
    {
        id: 3,
        text: " وين دمك وين همك ",
        meaning: "ماشي كل الأقارب يهتمو بيك، الدم ما يضمنش المحبة.",
        category: "friends",
        image: "assets/proverbs/proverb3.jpg"
    },
    {
        id: 4,
        text: "  لي يعرف عزو كلام ناس ما يهزو  , لي مشى عليك وراح زمان يردو",
        meaning: "الشخص اللي عارف قيمته، ما يتأثر بكلام الناس. ",
        category: "time",
        image: "assets/proverbs/proverb4.jpg"
    },
    {
        id: 5,
        text: "نعمرو في بيدون مثقوب, ونحصلوها في المكتوب",
        meaning: "نعطي ونبذل لكن ما نشوف نتيجة، كأننا نرمي جهدنا في الفراغ، وهذا من الأقدار.",
        category: "wisdom",
        image: "assets/proverbs/proverb5.jpg"
    },
    {
        id: 6,
        text: " نكار الخير كي يتعمَّر كسْكَاسو ,ينسى ناسو",
        meaning: "ناكر المعروف لما يشبع، ينسى الناس اللي وقفوا معه.",
        category: "wisdom",
        image: "assets/proverbs/proverb6.jpg"
    },
    {
        id: 7,
        text: "إذا عطاتك ليام نارك في الما تقدي  , و إذا خانك سعدك أنت تلم والريح يدَّي",
        meaning: "الحياة فيها تقلبات: في وقت اليسر الكل يجي، وفي وقت العسر الكل يروح",
        category: "time",
        image: "assets/proverbs/proverb7.jpg"
    },
    {
        id: 8,
        text: " كاين لي عندو جوابو في فمو ,وكاين لي داسو في كمُّو ,وكاين لي حتى يشاور أمُّو ",
        meaning: "الناس تختلف في طريقة اتخاذ القرار: بعضهم سريع، بعضهم حذر، وبعضهم يرجع للآخرين.",
        category: "friends",
        image: "assets/proverbs/proverb8.jpg"
    },
    {
        id: 9,
        text: "اللي ما يحوس عليك ما تكثرش عليه الملامة , إذا جاك قلُّو مرحبا وإذا راح قلُّو بالسلامة",
        meaning: "لا تعلق على من لا يهتم بك، عامله بالمثل بأدب.",
        category: "friends",
        image: "assets/proverbs/proverb9.jpg"
    },
    {
        id:10,
        text: " هزيناهم نهار طاحو ,ونهار طحنا خلاونا وراحو ",
        meaning: "ناس تنكرك وقت الشدة رغم أنك ساعدتهم.",
        category: "friends",
        image: "assets/proverbs/proverb10.jpg"
    },
    {
        id: 11,
        text: " ما يفوح بخور بلا جمر ,وما ينبت زرع بلا مطر ,وما دوم محبة بلا قدر ",
        meaning: "كل شيء يحتاج لأسباب، لا يوجد نتيجة دون تعب أو أساس.",
        category: "wisdom",
        image: "assets/proverbs/proverb11.jpg"
    },
    {
        id: 12,
        text: " لي راح ومشى ما ترجع ايامو , ولي طاح من العبن ما عاد يعلى مقامو ",
        meaning: "الثقة لما تروح، صعب ترجع.",
        category: "friends",
        image: "assets/proverbs/proverb12.jpg"
    },
];

// LocalStorage key for favorites
const FAVORITES_KEY = 'favoriteProverbs';

// Get favorites from localStorage
function getFavorites() {
    const favs = localStorage.getItem(FAVORITES_KEY);
    return favs ? JSON.parse(favs) : [];
}

// Save favorites to localStorage
function saveFavorites(favs) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}

// Check if a proverb is favorite
function isFavorite(id) {
    const favs = getFavorites();
    return favs.includes(id);
}

// Toggle favorite status
function toggleFavorite(id, button) {
    let favs = getFavorites();
    if (favs.includes(id)) {
        favs = favs.filter(favId => favId !== id);
        button.classList.remove('active');
    } else {
        favs.push(id);
        button.classList.add('active');
    }
    saveFavorites(favs);
}

function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function shareProverb(text, imgPath) {
    const fullUrl = window.location.origin + '/' + imgPath.replace(/^\/+/, '');

    if (navigator.share) {
        navigator.share({
            title: 'مثل جزائري',
            text: text,
            url: fullUrl
        }).catch(err => {
            console.error('Error sharing:', err);
            alert('فشل المشاركة');
        });
    } else {
        // Fallback
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
        window.open(shareUrl, '_blank');
    }
}


// Render proverbs cards
function renderProverbs(filterCategory = 'all', searchTerm = '') {
    console.log('renderProverbs called with filter:', filterCategory, 'search:', searchTerm);
    const container = document.getElementById('proverbsGrid');
    container.innerHTML = '';

    let filtered = [...proverbs];


    // Filter by category
    if (filterCategory === 'favorites') {
        const favs = getFavorites();
        filtered = filtered.filter(p => favs.includes(p.id));
    } else if (filterCategory === 'random') {
        filtered = filtered.sort(() => Math.random() - 0.5);
    } else if (filterCategory !== 'all') {
        filtered = filtered.filter(p => p.category === filterCategory);
    }

    // Filter by search term
    if (searchTerm.trim() !== '') {
        const term = searchTerm.trim();
        filtered = filtered.filter(p => p.text.includes(term) || p.meaning.includes(term));
    }

    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666;">لا توجد أمثال مطابقة للمعايير.</p>';
        return;
    }

    filtered.forEach(proverb => {
        const card = document.createElement('article');
        card.className = 'proverb-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `مثل: ${proverb.text}`);

        card.innerHTML = `
            <img src="${proverb.image}" alt="صورة عن المثل" class="proverb-image" />
            <div class="proverb-content">
                <p class="proverb-text">${proverb.text}</p>
                <p class="proverb-meaning">${proverb.meaning}</p>
              <div class="card-actions">
    <button class="favorite" aria-label="إضافة إلى المفضلة" title="إضافة إلى المفضلة">
        <i class="fas fa-heart"></i>
    </button>

            <button class="download" aria-label="تحميل الصورة" title="تحميل الصورة">
                <i class="fas fa-file-image"></i>
            </button>

    <button class="share" aria-label="مشاركة المثل" title="مشاركة المثل">
        <i class="fas fa-share-alt"></i>
    </button>
</div>

        `;

        // Favorite button toggle
        const favBtn = card.querySelector('.favorite');
        if (isFavorite(proverb.id)) {
            favBtn.classList.add('active');
        }
        favBtn.addEventListener('click', () => toggleFavorite(proverb.id, favBtn));
        console.log('Favorite button event listener attached for:', proverb.id);

        // Download button
        const downloadBtn = card.querySelector('.download');
        downloadBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('Download button clicked for:', proverb.image);
            downloadImage(proverb.image, `proverb-${proverb.id}.jpg`);
        });
        console.log('Download button event listener attached for:', proverb.id);

        // Share button
        const shareBtn = card.querySelector('.share');
        shareBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            console.log('Share button clicked for:', proverb.image);
            shareProverb(proverb.text, proverb.image);
        });
        console.log('Share button event listener attached for:', proverb.id);

        container.appendChild(card);
    });
}

// Event listeners for filter and search
document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');

    function updateDisplay() {
        const category = filterSelect.value;
        const searchTerm = searchInput.value;
        renderProverbs(category, searchTerm);
    }

    filterSelect.addEventListener('change', updateDisplay);
    searchInput.addEventListener('input', updateDisplay);

    // Initial render
    renderProverbs();
});
function toggleMenu() {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("show");
  }