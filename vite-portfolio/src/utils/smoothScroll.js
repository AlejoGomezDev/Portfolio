export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  console.log("ELEMENTO", element)
  if (!element) return;

  // Detecta si hay un header fijo
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;

  console.log("HEADER", header, headerHeight)

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerHeight - 20; // 20px de padding extra

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};