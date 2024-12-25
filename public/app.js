let currentLanguage = 'TH'; // Initial language state

function toggleDropdownMenu() {
    const menuImage = document.getElementById('menuImage');
    const toggleImage = document.getElementById('toggleImage');
    const toggleText = document.getElementById('toggleText');
    const menuImageMB = document.getElementById('menuImageMB');
    const toggleImageMB = document.getElementById('toggleImageMB');
    const toggleTextMB = document.getElementById('toggleTextMB');

    // Toggle logic
    if (currentLanguage === 'TH') {
        // Switch to English
        menuImage.src = 'assets/images/Flag-Uk.webp'; // Change image to UK flag
        toggleImage.src = 'assets/images/Flag-Thailand.webp'; // Update toggle image to Thai flag
        menuImageMB.src = 'assets/images/Flag-Uk.webp'; // Change image to UK flag
        toggleImageMB.src = 'assets/images/Flag-Thailand.webp'; // Update toggle image to Thai flag
        toggleText.textContent = 'TH'; // Update dropdown text to show TH
        toggleTextMB.textContent = 'TH'; // Update dropdown text to show TH
        currentLanguage = 'EN'; // Update current language state
        changeLanguage('en');
    } else {
        // Switch to Thai
        menuImage.src = 'assets/images/Flag-Thailand.webp'; // Change image to Thai flag
        toggleImage.src = 'assets/images/Flag-Uk.webp'; // Update toggle image to UK flag
        toggleText.textContent = 'EN'; // Update dropdown text to show EN
        menuImageMB.src = 'assets/images/Flag-Thailand.webp'; // Change image to Thai flag
        toggleImageMB.src = 'assets/images/Flag-Uk.webp'; // Update toggle image to UK flag
        toggleTextMB.textContent = 'EN'; // Update dropdown text to show EN
        currentLanguage = 'TH'; // Update current language state
        changeLanguage('th');
    }
}

// ฟังก์ชันสำหรับโหลดไฟล์ JSON
function loadTranslations(language) {
    return fetch(`${language}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load translation file');
            }
            return response.json();
        });
}

// ฟังก์ชันสำหรับเปลี่ยนภาษา
function changeLanguage(language) {
    localStorage.setItem('selectedLanguage', language); // Save selected language in localStorage

    loadTranslations(language).then(translations => {
        document.getElementById('productFeature').textContent = translations.productFeature;
        document.getElementById('ERPSupport').textContent = translations.ERPSupport;
        document.getElementById('demo').textContent = translations.demo;
        document.getElementById('demo1').textContent = translations.demo1;
        // document.getElementById('signin').textContent = translations.signin;
        document.getElementById('bannerLabel').textContent = translations.bannerLabel;
        document.getElementById('bannerSubLabel').textContent = translations.bannerSubLabel;
        document.getElementById('promote1').textContent = translations.promote1;
        document.getElementById('promote2').textContent = translations.promote2;
        document.getElementById('promote3').textContent = translations.promote3;
        document.getElementById('promote4').textContent = translations.promote4;
        document.getElementById('partnerTitle').textContent = translations.partnerTitle;
        document.getElementById('Attribute_title').textContent = translations.Attribute_title;
        document.getElementById('fdt1').textContent = translations.fdt1;
        document.getElementById('fdt2').textContent = translations.fdt2;
        document.getElementById('fdst1').textContent = translations.fdst1;
        document.getElementById('fdt3').textContent = translations.fdt3;
        document.getElementById('fdt4').textContent = translations.fdt4;
        document.getElementById('fdst2').textContent = translations.fdst2;
        document.getElementById('fdt5').textContent = translations.fdt5;
        document.getElementById('fdt6').textContent = translations.fdt6;
        document.getElementById('fdst3').textContent = translations.fdst3;
        document.getElementById('fdt7').textContent = translations.fdt7;
        document.getElementById('fdt8').textContent = translations.fdt8;
        document.getElementById('fdst4').textContent = translations.fdst4;
        document.getElementById('benefit').textContent = translations.benefit;
        document.getElementById('bdt1').textContent = translations.bdt1;
        document.getElementById('bdt2').textContent = translations.bdt2;
        document.getElementById('bdt3').textContent = translations.bdt3;
        document.getElementById('bdt4').textContent = translations.bdt4;
        document.getElementById('bdt5').textContent = translations.bdt5;
        document.getElementById('bdt6').textContent = translations.bdt6;
        document.getElementById('bdt7').textContent = translations.bdt7;
        document.getElementById('bdt8').textContent = translations.bdt8;
        document.getElementById('bdst1').textContent = translations.bdst1;
        document.getElementById('bdst2').textContent = translations.bdst2;
        document.getElementById('bdst3').textContent = translations.bdst3;
        document.getElementById('bdst4').textContent = translations.bdst4;
        document.getElementById('bdst5').textContent = translations.bdst5;
        document.getElementById('bdst6').textContent = translations.bdst6;
        document.getElementById('bdst7').textContent = translations.bdst7;
        document.getElementById('bdst8').textContent = translations.bdst8;
        document.getElementById('system_title').textContent = translations.system_title;
        document.getElementById('sdt1').textContent = translations.sdt1;
        document.getElementById('sdt2').textContent = translations.sdt2;
        document.getElementById('sdt3').textContent = translations.sdt3;
        document.getElementById('sdt4').textContent = translations.sdt4;
        document.getElementById('read_more1').textContent = translations.read_more1;
        document.getElementById('read_more2').textContent = translations.read_more2;
        document.getElementById('read_more3').textContent = translations.read_more3;
        document.getElementById('read_more4').textContent = translations.read_more4;
        // document.getElementById('Vdo_title').textContent = translations.Vdo_title;
        // document.getElementById('Vdo_subtitle').textContent = translations.Vdo_subtitle;
        // document.getElementById('demo2').textContent = translations.demo2;
        document.getElementById('promote5').textContent = translations.promote5;
        document.getElementById('promote6').textContent = translations.promote6;
        document.getElementById('demo3').textContent = translations.demo3;
        // document.getElementById('Company').textContent = translations.Company;
        // document.getElementById('About_us').textContent = translations.About_us;
        // document.getElementById('help_center').textContent = translations.help_center;
        // document.getElementById('support').textContent = translations.support;
        // document.getElementById('terms_condition').textContent = translations.terms_condition;
        // document.getElementById('Privacy_Policy').textContent = translations.Privacy_Policy;
        // document.getElementById('Cookies_Policy').textContent = translations.Cookies_Policy;
        document.getElementById('Contact_us').textContent = translations.Contact_us;
        // document.getElementById('News').textContent = translations.News;
        // document.getElementById('News_subtitle').textContent = translations.News_subtitle;
        // document.getElementById('submit').textContent = translations.submit;
        document.getElementById('company_address').textContent = translations.company_address;
        document.getElementById('sdt1M').textContent = translations.sdt1M;
        document.getElementById('sdt2M').textContent = translations.sdt2M;
        document.getElementById('sdt3M').textContent = translations.sdt3M;
        document.getElementById('sdt4M').textContent = translations.sdt4M;
        document.getElementById('productFeatureMB').textContent = translations.productFeatureMB;
        document.getElementById('ERPSupportMB').textContent = translations.ERPSupportMB;
        document.getElementById('demoMB').textContent = translations.demoMB;
        // document.getElementById('signinMB').textContent = translations.signinMB;
        document.getElementById('read_less1').textContent = translations.read_less1;
        document.getElementById('read_less2').textContent = translations.read_less2;
        document.getElementById('read_less3').textContent = translations.read_less3;
        document.getElementById('read_less4').textContent = translations.read_less4;
        document.getElementById('RV').textContent = translations.RV;
        document.getElementById('RVST').textContent = translations.RVST;
        document.getElementById('PL').textContent = translations.PL;
        document.getElementById('PLST1').textContent = translations.PLST1;
        document.getElementById('PLST2').textContent = translations.PLST2;
        document.getElementById('PLST3').textContent = translations.PLST3;
        document.getElementById('AE').textContent = translations.AE;
        document.getElementById('AEST1').textContent = translations.AEST1;
        document.getElementById('AEST2').textContent = translations.AEST2;
        document.getElementById('AEST3').textContent = translations.AEST3;
        document.getElementById('BG').textContent = translations.BG;
        document.getElementById('BGST1').textContent = translations.BGST1;
        document.getElementById('BGST2').textContent = translations.BGST2;
        document.getElementById('PO').textContent = translations.PO;
        document.getElementById('POST1').textContent = translations.POST1;
        document.getElementById('POST2').textContent = translations.POST2;
        document.getElementById('POST3').textContent = translations.POST3;
        document.getElementById('IN').textContent = translations.IN;
        document.getElementById('INST1').textContent = translations.INST1;
        document.getElementById('INST2').textContent = translations.INST2;
        document.getElementById('INST3').textContent = translations.INST3;
        document.getElementById('FA').textContent = translations.FA;
        document.getElementById('FAST1').textContent = translations.FAST1;
        document.getElementById('FAST2').textContent = translations.FAST2;
        document.getElementById('FAST3').textContent = translations.FAST3;
        document.getElementById('Dashboard_ST1').textContent = translations.Dashboard_ST1;
        document.getElementById('Dashboard_ST2').textContent = translations.Dashboard_ST2;
        document.getElementById('Dashboard_ST3').textContent = translations.Dashboard_ST3;
        document.getElementById('FN').textContent = translations.FN;
        document.getElementById('FNST1').textContent = translations.FNST1;
        document.getElementById('FNST2').textContent = translations.FNST2;
        document.getElementById('FNST3').textContent = translations.FNST3;
        document.getElementById('FNST4').textContent = translations.FNST4;
        document.getElementById('FNST5').textContent = translations.FNST5;
        document.getElementById('AV').textContent = translations.AV;
        document.getElementById('AVST1').textContent = translations.AVST1;
        document.getElementById('AVST2').textContent = translations.AVST2;
        document.getElementById('AVST3').textContent = translations.AVST3;
        document.getElementById('AP').textContent = translations.AP;
        document.getElementById('APST1').textContent = translations.APST1;
        document.getElementById('APST2').textContent = translations.APST2;
        document.getElementById('APST3').textContent = translations.APST3;
        document.getElementById('AR').textContent = translations.AR;
        document.getElementById('ARST1').textContent = translations.ARST1;
        document.getElementById('ARST2').textContent = translations.ARST2;
        document.getElementById('ARST3').textContent = translations.ARST3;
        document.getElementById('GL').textContent = translations.GL;
        document.getElementById('GLST1').textContent = translations.GLST1;
        document.getElementById('GLST2').textContent = translations.GLST2;
        document.getElementById('CT').textContent = translations.CT;
        document.getElementById('CTST1').textContent = translations.CTST1;
        document.getElementById('CTST2').textContent = translations.CTST2;
        document.getElementById('CTST3').textContent = translations.CTST3;
        document.getElementById('BPMG').textContent = translations.BPMG;
        document.getElementById('PWG').textContent = translations.PWG;
        document.getElementById('AFG').textContent = translations.AFG;
        document.getElementById('OVC').textContent = translations.OVC;
        document.getElementById('company_footer').textContent = translations.company_footer;
        document.getElementById('quotes').textContent = translations.quotes;

    }).catch(error => {
        console.error('Error loading translations:', error);
    });
}

var swiper3El = document.querySelector(".mySwiper3");
Object.assign(swiper3El, {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },
});
swiper3El.initialize()

document.addEventListener('DOMContentLoaded', function () {
    const swiper = document.querySelector('.mySwiper3').swiper;
    function updateActiveNavigation(activeIndex) {
        document.querySelectorAll('.navigate-d').forEach((element, index) => {
            if (index === activeIndex) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    swiper.on('slideChange', function () {
        updateActiveNavigation(swiper.activeIndex);
    });

    document.querySelectorAll('.navigate-d').forEach((element) => {
        element.addEventListener('click', () => {
            const slideIndex = parseInt(element.getAttribute('data-slide'), 10);
            swiper.slideTo(slideIndex);
        });
    });

    updateActiveNavigation(0);
});

document.addEventListener('DOMContentLoaded', function () {
    const navigateItems = document.querySelectorAll('.navigate-d');
    if (navigateItems.length > 0) {
        navigateItems[0].classList.add('active');
    }
    navigateItems.forEach((item) => {
        item.addEventListener('click', function () {
            navigateItems.forEach((el) => el.classList.remove('active'));
            this.classList.add('active');
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // ดึงค่าภาษาจาก localStorage ถ้ามี ถ้าไม่มีให้ใช้ค่าเริ่มต้นเป็น 'th'
    const language = localStorage.getItem('selectedLanguage') || 'th';

    // อัปเดต currentLanguage ตามค่าที่บันทึกไว้ใน localStorage
    if (language === 'th') {
        currentLanguage = 'TH';
        document.getElementById('menuImage').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (desktop)
        document.getElementById('toggleImage').src = 'assets/images/Flag-Uk.webp'; // UK flag (dropdown desktop)
        document.getElementById('menuImageMB').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (mobile)
        document.getElementById('toggleImageMB').src = 'assets/images/Flag-Uk.webp'; // UK flag (dropdown mobile)
        document.getElementById('toggleText').textContent = 'EN'; // Text for English (desktop)
        document.getElementById('toggleTextMB').textContent = 'EN'; // Text for English (mobile)
    } else {
        currentLanguage = 'EN';
        document.getElementById('menuImage').src = 'assets/images/Flag-Uk.webp'; // UK flag (desktop)
        document.getElementById('toggleImage').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (dropdown desktop)
        document.getElementById('menuImageMB').src = 'assets/images/Flag-Uk.webp'; // UK flag (mobile)
        document.getElementById('toggleImageMB').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (dropdown mobile)
        document.getElementById('toggleText').textContent = 'TH'; // Text for Thai (desktop)
        document.getElementById('toggleTextMB').textContent = 'TH'; // Text for Thai (mobile)
    }

    // เปลี่ยนภาษาไปยังค่าที่ดึงมา
    changeLanguage(language);
});

ScrollReveal().reveal('.revealBottom', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});

ScrollReveal().reveal('.revealLeft', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});
ScrollReveal().reveal('.revealRight', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});
ScrollReveal().reveal('.revealTop', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});
ScrollReveal().reveal('.revealCenter', {
    origin: 'center',
    distance: '0px',
    scale: 1,
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});






