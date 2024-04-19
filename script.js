"use strict";
// 1) Создать функцию-конструктор DomElement, который
//    содержит свойства
//   - selector,
//   - height,
//   - width,
//   - bg,
//   - fontSize
// содержит метод, который создает элемент на странице в зависимости от условия:
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector начинается с решетки # то создаем параграф с id
// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"
// с помощью cssText задавать стили:
//   - высотой - height,
//   - шириной - width,
//   - background - bg
//   - размер текста fontSize
// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.
// 2) Создать новый объект на основе класса DomElement
// 3) Вызвать его метод чтобы создать элемент на странице

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.createElem = function () {
    let element;
    if (this.selector.startsWith(".")) {
        element = document.createElement("div");
        element.classList.add(this.selector)
        // console.log(element);
        document.body.append(element);
    } else if (this.selector.startsWith("#")) {
        element = document.createElement('p');
        element.setAttribute('id', this.selector);
        // console.log(element);
        document.body.append(element);
    }
    element.style.cssText = `height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;`;
    element.textContent = "Любой текст"
}

const newElement1 = new DomElement('#best', "100", "200", "red", "25");
const newElement2 = new DomElement('.block', "100", "200", "green", "25");

newElement1.createElem()
newElement2.createElem()

