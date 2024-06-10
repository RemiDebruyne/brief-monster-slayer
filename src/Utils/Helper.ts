function renderHp(entityHpElements: HTMLElement[], hp: number[]): void {
  for (let i = 0; i < entityHpElements.length; i++) {
    entityHpElements[i].innerHTML = String(hp[i]);
    entityHpElements[i].style.width = `${hp[i]}%`;
    switch (true) {
      case Number(entityHpElements[i].innerHTML) < 65 &&
        Number(entityHpElements[i].innerHTML) >= 40:
        entityHpElements[i].setAttribute('data-hp-value', 'medium');
        break;
      case Number(entityHpElements[i].innerHTML) < 40:
        entityHpElements[i].setAttribute('data-hp-value', 'low');
        break;

      default:
        entityHpElements[i].setAttribute('data-hp-value', 'high');
        break;
    }
  }
}

function renderLogs(
  logsElement: Element,
  actionMaker: string,
  action: string,
  result: number
): void {
  logsElement.insertAdjacentHTML(
    'afterbegin',
    `<p class="${actionMaker.toLowerCase()}-log">${actionMaker.charAt(0).toUpperCase()}${actionMaker.slice(1)} ${action} the monster for ${result} </p>`
  );
}

export { renderHp, renderLogs };
