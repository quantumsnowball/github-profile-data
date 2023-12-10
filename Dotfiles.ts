import { linkToMyWork } from './common'


export const items =
  `## dotfiles

I am using these configs on Linux or Mac terminal. 

- ### [nvim](https://github.com/quantumsnowball/nvim-lazy) - my Neovim config written in lua 
  ![neovim](https://img.shields.io/badge/neovim-white?logo=neovim)
  ![lua](https://img.shields.io/badge/lua-white?logo=lua&logoColor=030380)

- ### [tmux](https://github.com/quantumsnowball/tmux) - my tmux config repo
  ![sh](https://img.shields.io/badge/tmux-white?logo=tmux)
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [zshrc](https://github.com/quantumsnowball/zshrc) - my zshrc config repo
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

- ### [settings](https://github.com/quantumsnowball/settings) - my other config files repo
  ![sh](https://img.shields.io/badge/sh-white?logo=shell)

`

const markdown = items + `${linkToMyWork}

`

export default markdown
