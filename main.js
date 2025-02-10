const block = document.querySelector('.move');
let angle = 0; // угол вращения
let posX = 0; // текущая позиция по оси X
let posY = 0; // текущая позиция по оси Y
let speedX = 2; // скорость по оси X
let speedY = 2; // скорость по оси Y

function update() {
  // Обновляем угол вращения
  angle += 2; // Увеличиваем угол для вращения
  block.style.transform = `rotate(${angle}deg)`; // Применяем вращение

  // Обновляем позицию блока
  posX += speedX;
  posY += speedY;

  // Проверяем столкновение со стенками
  if (posX + block.offsetWidth > window.innerWidth || posX < 0) {
    speedX = -speedX; // Изменяем направление по оси X
  }
  if (posY + block.offsetHeight > window.innerHeight || posY < 0) {
    speedY = -speedY; // Изменяем направление по оси Y
  }

  // Устанавливаем новую позицию блока
  block.style.left = posX + 'px';
  block.style.top = posY + 'px';

  requestAnimationFrame(update); // Запрашиваем следующую анимацию
}

update(); // Запускаем анимацию
