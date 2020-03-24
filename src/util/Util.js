function getTitlePage(operation, page) {
  const title = {
    'add': `Cadastro de ${page}`,
    'edit': `Edição de ${page}`,
    //'show': 'Visualização de Encomendas'
  }
  return title[operation];
}

function getColor(status) {
  const color = {
    'PENDENTE': ({ back: '#f0f0df', color: '#c1bc35' }),
    'CANCELADA': ({ back: '#fab0b0', color: '#de3b3b' }),
    'RETIRADA': ({ back: '#bad2ff', color: '#4d85ee' }),
    'ENTREGUE': ({ back: '#dff0df', color: '#2ca42b' })
  }
  return color[status];
}

function getAleatoryColor() {

  const number = Math.floor(Math.random() * 8);
  const color = {
    0: '#f0f0df',
    1: '#fab0b0',
    2: '#bad2ff',
    3: '#dff0df',
    4: '#c1bc35',
    5: '#de3b3b',
    6: '#4d85ee',
    7: '#2ca42b',
  }

  return color[number];
}

export { getTitlePage, getColor, getAleatoryColor };
