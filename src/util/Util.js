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

function getLetterColor(letter) {

  const color = {
    'A': '#DA70D6',
    'B': '#FF0000',
    'C': '#8470FF',
    'D': '#7A67EE',
    'E': '#FFA500',
    'F': '#FF3E96',
    'G': '#828282',
    'H': '#CD853F',
    'I': '#0000FF',
    'J': '#DAA520',
    'K': '#2E8B57',
    'L': '#1E90FF',
    'M': '#FF00FF',
    'N': '#FF69B4',
    'O': '#FF6347',
    'P': '#CDCD00',
    'Q': '#CD2626',
    'R': '#7A67EE',
    'S': '#9B30FF',
    'T': '#EEC900',
    'U': '#008B8B',
    'W': '#BF3EFF',
    'X': '#EE7621',
    'Y': '#00B2EE',
    'Z': '#006400',
  }

  return color[letter];
}

export { getTitlePage, getColor, getAleatoryColor, getLetterColor };
