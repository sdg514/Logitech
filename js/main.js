// header 메뉴 
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(26, 26, 26, .9)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

document.getElementById("menuOpen").addEventListener('click', () => {
    document.getElementById("overlay").style.display = "block";
});
document.getElementById("closebtn").addEventListener('click', () => {
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("overlay").addEventListener('click', (e) => {
  if (!document.getElementById("mySidenav").contains(e.target)) {
    document.getElementById("overlay").style.display = "none";
  }
});

// nav 클릭시 메뉴 open
const menuItems = document.querySelectorAll('.menu');

menuItems.forEach(menu => {
  menu.addEventListener('click', () => {
    const submenu = menu.querySelector('.hide');
    
    // 다른 모든 서브메뉴 닫기
    document.querySelectorAll('.hide').forEach(ul => {
      if (ul !== submenu) {
        ul.classList.remove('active');
      }
    });

    // 클릭한 메뉴 토글
    submenu.classList.toggle('active');
  });
});

// 위로 가기 버튼 스크롤시 나타나기
const topBtn = document.getElementById("onTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

  // console.log(scrollY);
});

// 맨위로 가기 버튼 클릭시 위로
topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// 탭기능
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // 모든 탭 비활성화
    tabButtons.forEach(btn => {
      btn.setAttribute("aria-selected", "false");
      btn.classList.remove("active");
      btn.setAttribute("tabindex", "-1");
    });

    // 클릭된 탭 활성화
    tab.setAttribute("aria-selected", "true");
    tab.classList.add("active");
    tab.setAttribute("tabindex", "0");

    // 모든 탭패널 숨김
    tabPanels.forEach(panel => panel.classList.remove("active"));
    tabPanels[index].classList.add("active");
  });
});


// content 스크롤시 텍스트 애니메이션
document.addEventListener('DOMContentLoaded', function () {
  const content2 = document.querySelectorAll('.content-text2');
  const ghub = document.querySelectorAll('.ghub-text');

  window.addEventListener('scroll', () => {
    content2.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('active');   // 화면 안에 들어오면 보이기
      } else {
        el.classList.remove('active'); // 벗어나면 다시 숨김
      }
    });
  });

  window.addEventListener('scroll', () => {
    ghub.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('active');   // 화면 안에 들어오면 보이기
      } else {
        el.classList.remove('active'); // 벗어나면 다시 숨김
      }
    });
  });
});
