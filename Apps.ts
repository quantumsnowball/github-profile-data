import { linkToMyWork } from './common'


export const items =
  `## Apps

When I need a software but I can't find one really suitable, choose one which is pretty close to my needs, then fork it and modify it. Well, if none of them are even close, I will build it from scratch.

- ### [btbox](https://github.com/quantumsnowball/btbox/tree/dev) - a simple and easy to use trading strategy backtesting library written in Python
  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)
  ![pandas](https://img.shields.io/badge/pandas-white?logo=pandas&logoColor=darkblue)
  ![jupyter](https://img.shields.io/badge/jupyter-white?logo=jupyter)
  ![plotly](https://img.shields.io/badge/plotly-white?logo=plotly&logoColor=darkblue)

  When you have a trading idea in your mind, but you are not sure if it is going to work? Most of the time you want to backtest your idea first using historical market data before risking your real money. Usually this can be done using a spreadsheet, but soon you find that spreadsheet only works for simple strategies. Also you will need a robust way to measure 'how-good' a strategy by calculate its performance metrics, such as \`Sharpe Ratio\` or \`Max Drawdown\`. Well, you have come to the right place! \`btbox\` is here to provide a robust solution for strategy backtesting. It is most suitable to use in a Jupyter notebook. Most usage cases and results can be found in [trading-lab](https://nbviewer.org/github/quantumsnowball/trading-lab). Or go to the [tests](https://github.com/quantumsnowball/btbox/tree/dev/tests) folder of the [dev](https://github.com/quantumsnowball/btbox/tree/dev) branch for more reference. This library is still under active development and the API may subject to changes.

- ### [Tabman](https://github.com/quantumsnowball/telescope-tabman.nvim) - a telescope.nvim plugin 
  ![neovim](https://img.shields.io/badge/neovim-white?logo=neovim)
  ![lua](https://img.shields.io/badge/lua-white?logo=lua&logoColor=030380)
  
  If you use Neovim as an IDE, and mainly use telescope.nvim as a file picker, then you may find my plugin to be the long wanted missing tabpages picker.

- ### [link-finder](https://github.com/quantumsnowball/link-finder) - a Chrome extension that can help you capture web traffic urls
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)

  Normally, you use the Chrome DevTool to monitor network traffic. But some website may stop running when the DevTool is opened, so I write a chrome extension to query the chorme API for all network traffic, avoiding the DevTool altogether. 

- ### [waylandmap](https://github.com/quantumsnowball/waylandmap) - a key mapping app for Linux that works under X11 or Wayland
  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![pypi](https://img.shields.io/badge/pypi-white?logo=pypi)
  ![linux](https://img.shields.io/badge/linux-white?logo=linux)

  This project is distributed as [waylandmap](https://pypi.org/project/waylandmap/) on PyPI.org. The best use case I found for myself is to map \`RightAlt\` + \`hjkl\` to be the arrow keys by making \`RightAlt\` to be a 3rd-level shift key.

- ### [opensubtitles-dl](https://github.com/quantumsnowball/opensubtitles-dl) - you can search opensubtitle.org directly in the terminal
  ![python](https://img.shields.io/badge/python-white?logo=python)
  ![pypi](https://img.shields.io/badge/pypi-white?logo=pypi)

  This project is distributed as [opensubtitles-dl](https://pypi.org/project/opensubtitles-dl/) on PyPI.org.

- ### [wide-lihkg-userscript](https://github.com/quantumsnowball/wide-lihkg-userscript) - sideload custom CSS into lihkg

  ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript)
  ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

  This project is distributed as [Wide LIHKG](https://greasyfork.org/en/scripts/430707-wide-lihkg) on greasyfork.org.
   

`

const markdown = items + `${linkToMyWork}

`

export default markdown
