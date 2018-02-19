const subnav = document.getElementById('subnav');
const mainNav = document.getElementById('header-nav');
const mainNavLinks = mainNav.getElementsByTagName('a');
const subnavLinks = document.querySelectorAll('.subnav-links');
const burger = document.getElementById('hamburger');

const scrollHandler = () => {
  if (window.scrollY >= 120) {
    if (mainNav.getElementsByClassName('hovered').length > 0) {
      for (let i = 0; i < mainNavLinks.length; i += 1) {
        mainNavLinks[i].classList.remove('hovered');
      }
      for (let j = 0; j < subnavLinks.length; j += 1) {
        if (subnavLinks[j].classList.contains('active')) {
          subnavLinks[j].style.display = 'block';
        } else {
          subnavLinks[j].style.display = 'none';
        }
      }
    }
    subnav.classList.add('sticky-nav');
  } else {
    subnav.classList.remove('sticky-nav');
  }
};

const toggleHovered = link => {
  for (let i = 0; i < mainNavLinks.length; i += 1) {
    mainNavLinks[i].classList.remove('hovered');
  }
  link.classList.add('hovered');
};

const handleMouseover = e => {
  e.stopPropagation();

  toggleHovered(e.currentTarget);
  for (let j = 0; j < subnavLinks.length; j += 1) {
    subnavLinks[j].style.display = 'none';
  }
  const id = e.currentTarget.id.replace('nav-', '');
  const current = document.getElementById(`subnav-${id}`);
  current.style.display = 'block';
};

const subnavItems = document.querySelectorAll('.subnav-links a');

// eslint-disable-next-line
const handleClick = id => e => {
  if (!e.currentTarget.parentNode.classList.contains('active')) {
    return true;
  }
  e.preventDefault();

  for (let i = 0; i < subnavItems.length; i += 1) {
    subnavItems[i].classList.remove('active');
  }

  e.currentTarget.classList.add('active');

  const d = document.documentElement;
  const item = document.getElementById(id);
  const dest = item.offsetTop - 50;
  const durationLength = 600;
  let difference;
  if (dest > window.scrollY) {
    difference = dest - window.scrollY;
  } else {
    difference = window.scrollY - dest;
  }
  const move = duration => {
    setTimeout(() => {
      const offset = d.scrollTop + window.innerHeight;
      const height = d.offsetHeight;
      if ((durationLength !== duration && offset === height) || window.scrollY === dest) {
        return;
      }

      let to = dest;
      const delta = difference / duration * 10;
      if (dest > window.scrollY) {
        to = Math.min(window.scrollY + delta, dest);
      } else {
        to = Math.max(window.scrollY - delta, dest);
      }

      window.scrollTo(0, to);
      move(duration - 10);
    }, 10);
  };
  move(durationLength);
};

const navOpenClass = 'navOpen';

const toggleMenu = e => {
  e.stopPropagation();

  if (document.body.classList.contains(navOpenClass)) {
    document.body.classList.remove(navOpenClass);
  } else {
    document.body.classList.add(navOpenClass);
  }
};

export default () => {
  window.addEventListener('scroll', scrollHandler);

  for (let i = 0; i < mainNavLinks.length; i += 1) {
    const link = mainNavLinks[i];
    const id = link.id.replace('nav-', '');
    const hasLinks = document.getElementById(`subnav-${id}`);
    if (hasLinks) {
      link.addEventListener('mouseover', handleMouseover);
    }
  }

  for (let i = 0; i < subnavItems.length; i += 1) {
    const subnavLink = subnavItems[i];
    const [, id] = subnavLink.href.split('#');
    subnavLink.addEventListener('click', handleClick(id));
  }

  document.body.onclick = e => {
    if (document.body.classList.contains(navOpenClass)) {
      toggleMenu(e);
    }
  };
  burger.onclick = toggleMenu;
};
