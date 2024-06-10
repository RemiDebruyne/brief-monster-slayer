function renderHp(elements: HTMLElement[], hp: number[]) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = String(hp[i]);
    elements[i].style.width = `${hp[i]}%`;
    switch (true) {
      case Number(elements[i].innerHTML) < 65 &&
        Number(elements[i].innerHTML) >= 40:
        elements[i].setAttribute('data-hp-value', 'medium');
        break;
      case Number(elements[i].innerHTML) < 40:
        elements[i].setAttribute('data-hp-value', 'low');
        break;

      default:
        elements[i].setAttribute('data-hp-value', 'high');
        break;
    }
  }
}

export { renderHp };
