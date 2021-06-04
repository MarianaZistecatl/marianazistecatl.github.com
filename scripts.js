/* Funcion para mostrar evento al dar clic en showInfo */
function showInfo() {
  return {
    show: false,
    trigger: {
      ["@click"]() {
        this.show = true;
      },
    },
    info: {
      ["x-show"]() {
        return this.show;
      },
      ["@click.away"]() {
        this.show = false;
      },
    },
  };
}

/* Funcion para cambiar el color del nav cuando se fije en la parte de arriba */
const el = document.querySelector(".nav");
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);
