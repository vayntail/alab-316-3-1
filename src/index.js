/*
∧,,,∧
(  ̳• · • ̳)
/    づ♡ R-ALAB 316.1.1 PART ONE!
*/
// ⟡₊ ⊹ Menu data structure ⟡₊ ⊹ 
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

// ⟡₊ ⊹ Part 1: Getting Started ⟡₊ ⊹
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// ⟡₊ ⊹ Part 2: Creating a Menu Bar ⟡₊ ⊹
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// ⟡₊ ⊹ Part 3: Adding Menu Buttons ⟡₊ ⊹
menuLinks.forEach(link => {
    const newEl = document.createElement("a");
    newEl.href = link.href;
    newEl.textContent = link.text;
    topMenuEl.append(newEl);
})



/*
∧,,,∧
(  ̳• · • ̳)
/    づ♡ R-ALAB 316.3.1 PART TWO!
*/
// ⟡₊ ⊹ Part 3: Creating the Submenu ⟡₊ ⊹
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
// temporarily hide it
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";