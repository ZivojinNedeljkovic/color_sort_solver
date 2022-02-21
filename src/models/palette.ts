import { colors as muiColors } from '@mui/material'

type Color = {
  colorId: string
  hexColor: string
}

class Palette {
  private _colors: Color[] = [
    {
      colorId: 'a',
      hexColor: muiColors.red[600],
    },
    {
      colorId: 'b',
      hexColor: muiColors.pink[400],
    },
    {
      colorId: 'c',
      hexColor: muiColors.purple[400],
    },
    {
      colorId: 'd',
      hexColor: muiColors.deepPurple[500],
    },
    {
      colorId: 'e',
      hexColor: muiColors.indigo[500],
    },
    {
      colorId: 'f',
      hexColor: muiColors.blue[500],
    },
    {
      colorId: 'g',
      hexColor: muiColors.lightBlue[400],
    },
    {
      colorId: 'h',
      hexColor: muiColors.cyan[300],
    },
    {
      colorId: 'i',
      hexColor: muiColors.teal.A400,
    },
    {
      colorId: 'j',
      hexColor: muiColors.teal[500],
    },
    {
      colorId: 'k',
      hexColor: muiColors.green[500],
    },
    {
      colorId: 'l',
      hexColor: muiColors.lightGreen[500],
    },
    {
      colorId: 'm',
      hexColor: muiColors.lime[500],
    },
    {
      colorId: 'n',
      hexColor: muiColors.yellow[500],
    },
    {
      colorId: 'o',
      hexColor: muiColors.amber[500],
    },
    {
      colorId: 'p',
      hexColor: muiColors.orange[500],
    },
    {
      colorId: 'q',
      hexColor: muiColors.deepOrange[300],
    },
    {
      colorId: 'r',
      hexColor: muiColors.deepOrange[100],
    },
    {
      colorId: 's',
      hexColor: muiColors.brown[500],
    },
    {
      colorId: 't',
      hexColor: muiColors.grey[500],
    },
    {
      colorId: 'u',
      hexColor: muiColors.blueGrey[500],
    },

    // abcdefghijklmnopqrstuvwxyz
  ]

  get colors() {
    return this._colors.map(color => color.hexColor)
  }

  /**@returns Color ID is a single character. */
  getColorId(hexColor: string) {
    return this._colors.find(color => color.hexColor === hexColor.toLowerCase())
      ?.colorId
  }

  getColorFromId(char: string) {
    return this._colors.find(color => color.colorId === char)?.hexColor
  }
}

export default new Palette()
