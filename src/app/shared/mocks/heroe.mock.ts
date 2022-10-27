export const HEROE_MOCK = [
    {
        name: 'SuperMan',
        birthDate: new Date('10-05-1998'),
        superPower: 'Super Fuerza',
        image: 'https://www.xtrafondos.com/descargar.php?id=9204&resolucion=5120x2880'
    },
    {
        name: 'SpiderMan',
        birthDate: new Date('05-11-1990'),
        superPower: 'Hombre Araña',
        image: 'https://images4.alphacoders.com/844/thumb-1920-844967.jpg'
    },
    {
        name: 'WonderWoman',
        birthDate: new Date('01-25-1993'),
        superPower: 'Súper fuerza',
        image: 'https://wallpapercave.com/wp/wp3477736.jpg'
    },
    {
        name: 'BatMan',
        birthDate: new Date('03-11-1989'),
        superPower: 'No tiene',
        image: 'https://i.pinimg.com/originals/0f/fa/49/0ffa49103ad801f255fcd16b78589bc6.jpg'
    },
    
]


export const IMAGE_RANDOM = [
    'https://i.pinimg.com/originals/0f/fa/49/0ffa49103ad801f255fcd16b78589bc6.jpg',
    'https://wallpapercave.com/wp/wp3477736.jpg',
    'https://images4.alphacoders.com/844/thumb-1920-844967.jpg',
    'https://www.xtrafondos.com/descargar.php?id=9204&resolucion=5120x2880'
]

export const GOOD_ADD_RESPONSE = {
          'success': true,
          'errorCode': null,
          'message': '¡Héroe añadido correctamente!',
          'response': {}
}

export const GOOD_EDIT_RESPONSE = {
          'success': true,
          'errorCode': null,
          'message': '¡Héroe editado correctamente!',
          'response': {}
}

export const GOOD_DELETE_RESPONSE = {
          'success': true,
          'errorCode': null,
          'message': '¡Héroe eliminado correctamente!',
          'response': {}
}

export const BAD_RESPONSE = {
          'success': false,
          'errorCode': 'BDA14',
          'message': 'Mensaje de error de ejemplo!',
          'response': {}
}


        
export const HEROE_CREATE_DATA_MOCK = {
    isEditMode: false,
    editModeData: null,
  };

  export const HEROE_EDIT_DATA_MOCK = {
    isEditMode: true,
    editModeData: null,
  };

  export const HEROE_DELETE_DATA_MOCK = {
    mode: 'delete',
    results: HEROE_MOCK[0],
  };


  export const HEROE_DIALOG_ADD_MOCK = {
      mode: 'new',
      results: HEROE_MOCK[0]
}; 

export const HEROE_DIALOG_EDIT_MOCK = {
    mode: 'edit',
    results: HEROE_MOCK[0]
}; 

export const HEROE_DIALOG_DELETE_MOCK = {
    mode: 'delete',
    results: HEROE_MOCK[0]
}; 