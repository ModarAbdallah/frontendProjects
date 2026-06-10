const articlesData = [
    {
        title: "دليلك الشامل لهندسة الحوسبة السحابية وDevOps",
        date: "9 يونيو 2026",
        category: "سحابة وبنية تحتية",
        catKey: "devops",
        img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80",
        badgeClass: "bg-warning text-dark",
        btnClass: "btn-warning text-dark",
        content: "ترتكز هندسة البنية التحتية الحديثة على مفاهيم الأتمتة وقابلية التوسع (Scalability). نستعرض في هذا الدليل المعمق كيفية صياغة وتصميم معماريات سحابية مرنة تعتمد على البنية التحتية كبرمجيات (IaC). نناقش آليات عزل المهام عبر خوادم Kubernetes، وإدارة التوزيع الديناميكي للأحمال (Load Balancing)، وبناء جدران الحماية الافتراضية لتأمين تدفق البيانات بأقل زمن تأخير (Latency) ممكن، مما يضمن استمرارية الخدمة بنسبة عالية (High Availability)."
    },
    {
        title: "إستراتيجيات الرندرة المتقدمة وإدارة الذاكرة في React",
        date: "5 يونيو 2026",
        category: "واجهات أمامية",
        catKey: "frontend",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
        badgeClass: "bg-primary text-white",
        btnClass: "btn-primary text-white",
        content: "عند بناء واجهات مستخدم معقدة وضخمة، تصبح إدارة رندرة المكونات (Components Lifecycle) أمراً حرجاً للحفاظ على الأداء. في هذا المقال نغوص عميقاً في آليات التخزين المؤقت (Memoization) عبر خطافات `useMemo` و `useCallback` لتقليل دورات تحديث الـ Virtual DOM. كما نناقش كيفية معالجة تسريبات الذاكرة (Memory Leaks) الناجمة عن الـ Event Listeners غير المغلقة في الـ `useEffect` وإستراتيجيات تقسيم الكود (Code Splitting) عبر React Lazy لتحسين مؤشرات معيار التفاعل الأول (FID)."
    },
    {
        title: "بناء بنية Stateless آمنة باستخدام REST APIs & JWT",
        date: "2 يونيو 2026",
        category: "أنظمة خلفية",
        catKey: "backend",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        badgeClass: "bg-success text-white",
        btnClass: "btn-success text-white",
        content: "تعتمد الأنظمة الموزعة على بروتوكولات عديمة الحالة (Stateless) لزيادة الكفاءة. يشرح هذا المقال بالتفصيل كيفية تأمين نقاط النهاية (Endpoints) باستخدام معيار JSON Web Tokens. نناقش هنا كيفية توقيع الرموز أمنياً، والفرق الرياضي بين التشفير المتناظر وغير المتناظر لتأمين حمولة التوكن، وتطبيق دورة حياة ذكية للرموز عبر فصل الـ Access Token قصير المدى عن الـ Refresh Token المخزن بأمان في الكوكيز لصد هجمات XSS و CSRF."
    },
    {
        title: "حمل الحاويات وعزل البيئات البرمجية عبر Docker Compose",
        date: "28 مايو 2026",
        category: "سحابة وبنية تحتية",
        catKey: "devops",
        img: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80",
        badgeClass: "bg-warning text-dark",
        btnClass: "btn-warning text-dark",
        content: "تعد مشكلة 'يعمل على جهازي فقط' من كوابيس هندسة البرمجيات. يوفر Docker حلاً جذرياً عبر عزل النواة (Kernel Namespace isolation). في هذا المقال التقني، نكتب ملف `docker-compose.yml` متكامل لتشغيل بيئة Microservices تتكون من خادم ووركر (Celery Worker)، وقاعدة بيانات كـ PostgreSQL، وذاكرة كاش خفيفة كـ Redis. نتعلم ضبط أحجام تخزين البيانات الدائمة (Volumes)، وإعداد الشبكات الداخلية الافتراضية (Bridged Networks) لتأمين تبادل البيانات الداخلي."
    },
    {
        title: "تصميم قواعد البيانات والـ ORM الأداء المثالي في Django",
        date: "20 مايو 2026",
        category: "أنظمة خلفية",
        catKey: "backend",
        img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
        badgeClass: "bg-success text-white",
        btnClass: "btn-success text-white",
        content: "أداة محاذاة البيانات للكائنات (Django ORM) قوية جداً ولكن سوء استخدامها قد يدمر أداء النظام. يستعرض هذا المقال مشكلة الـ N+1 Query الشهيرة وكيفية حلها برمجياً في قواعد البيانات العلاقية عن طريق التحميل المسبق للعلاقات باستخدام `select_related` لاستعلامات (SQL Joins) الفورية، و `prefetch_related` للاستعلامات متعددة القيم. كما نتطرق إلى كيفية بناء فهارس قواعد البيانات (Database Indexing) لتسريع عمليات البحث والفلترة عند قراءة البيانات الضخمة."
    },
    {
        title: "أتمتة النشر والتكامل المستمر عبر خطوط معالجة CI/CD",
        date: "15 مايو 2026",
        category: "سحابة وبنية تحتية",
        catKey: "devops",
        img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
        badgeClass: "bg-warning text-dark",
        btnClass: "btn-warning text-dark",
        content: "تتطلب دورة حياة البرمجيات الحديثة سرعة فائقة في دفع الميزات الجديدة دون الإخلال باستقرار النظام. نستعرض في هذه المقالة كيفية بناء خطوط معالجة (Pipelines) مؤتمتة بالكامل عبر GitHub Actions أو GitLab CI. تبدأ السلسلة بالفحص التلقائي لجودة الكود (Linting)، تليها مرحلة تشغيل الاختبارات الأوتوماتيكية (Unit & Integration Tests)، وبمجرد نجاحها يتم تجميع حاوية Docker ودفعها لـ Registry خاص ثم إصدار أمر نشر فوري ومؤمن (Zero-Downtime Deployment) على الخوادم الحية."
    }
];

function displayArticles(articles) {
    const container = document.getElementById('articles-container');
    container.innerHTML = "";

    articles.forEach((article) => {
        const originalIndex = articlesData.findIndex(a => a.title === article.title);
        const cardHTML = `
            <div class="col-md-6 col-lg-4 article-item" data-cat="${article.catKey}">
                <div class="card h-100 border-0 shadow-sm article-card overflow-hidden">
                    <div class="article-img-wrapper position-relative">
                        <img src="${article.img}" class="card-img-top" alt="${article.category}">
                        <div class="overlay-gradient"></div>
                        <span class="badge ${article.badgeClass} position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm">${article.category}</span>
                    </div>
                    <div class="card-body p-4 d-flex flex-column bg-white">
                        <div class="d-flex justify-content-between align-items-center mb-2 text-muted small fw-semibold">
                            <span><i class="bi bi-calendar3 me-1"></i> ${article.date}</span>
                            <span><i class="bi bi-clock me-1"></i> 6 د.قراءة</span>
                        </div>
                        <h5 class="card-title fw-bold text-dark mb-3 lh-base mt-2 article-title">${article.title}</h5>
                        <p class="card-text text-secondary mb-4 flex-grow-1 lh-lg">${article.content.substring(0, 120)}...</p>
                        
                        <div class="d-flex align-items-center pt-3 border-top mt-auto">
                            <img src="./images/myPicture.png" class="rounded-circle me-2 border border-2 border-white shadow-sm" width="40" height="40" alt="Modar" style="object-fit: cover;">
                            <div class="me-auto">
                                <h6 class="small fw-bold mb-0 text-dark">مضر عبد الله</h6>
                                <span class="text-muted micro-text">مهندس برمجيات</span>
                            </div>
                            <button class="btn ${article.btnClass} btn-sm rounded-circle shadow-sm stretched-link-btn d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;" onclick="openArticleModal(${originalIndex})">
                                <i class="bi bi-arrow-left"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// تشغيل الدالة فور تحميل الصفحة لعرض الـ 6 مقالات كاملة
document.addEventListener("DOMContentLoaded", () => {
    displayArticles(articlesData);
});

// دالة فتح الـ Modal
function openArticleModal(index) {
    const modal = new bootstrap.Modal(document.getElementById('articleModal'));
    const data = articlesData[index];
    
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDate').innerText = data.date;
    document.getElementById('modalCategory').innerText = data.category;
    document.getElementById('modalContent').innerText = data.content;
    
    modal.show();
}

// منطق الفلترة المطور ليتوافق مع التوليد الديناميكي
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'btn-primary'));
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.add('btn-outline-secondary'));
        
        this.classList.remove('btn-outline-secondary');
        this.classList.add('active', 'btn-primary');
        
        const category = this.getAttribute('data-category');
        
        if (category === 'all') {
            displayArticles(articlesData);
        } else {
            const filtered = articlesData.filter(art => art.catKey === category);
            displayArticles(filtered);
        }
    });
});

function openArticleModal(index) {
    const modal = new bootstrap.Modal(document.getElementById('articleModal'));
    const data = articlesData[index];
    
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDate').innerText = data.date;
    document.getElementById('modalCategory').innerText = data.category;
    document.getElementById('modalContent').innerText = data.content;
    
    modal.show();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'btn-primary'));
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.add('btn-outline-primary'));
        
        this.classList.remove('btn-outline-primary');
        this.classList.add('active', 'btn-primary');
        
        const category = this.getAttribute('data-category');
        const items = document.querySelectorAll('.article-item');
        
        items.forEach(item => {
            if (category === 'all') {
                item.style.display = 'block';
            } else {
                if (item.getAttribute('data-cat') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});
