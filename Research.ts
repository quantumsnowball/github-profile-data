import { linkToMyWork } from './common'


export const items =
  `## Research
![python](https://img.shields.io/badge/python-white?logo=python)
![jupyter](https://img.shields.io/badge/jupyter-white?logo=jupyter)
![numpy](https://img.shields.io/badge/numpy-white?logo=numpy&logoColor=blue)
![pandas](https://img.shields.io/badge/pandas-white?logo=pandas&logoColor=darkblue)

I write code to research the financial market all the time.

- ### [trading-lab](https://nbviewer.org/github/quantumsnowball/trading-lab)
  A Jupyter notebook collection of strategy backtest results using [btbox](https://github.com/quantumsnowball/btbox). View these notebooks using [nbviewer.org](https://nbviewer.org/github/quantumsnowball/trading-lab). Or visit the [repository](https://github.com/quantumsnowball/trading-lab) for source code. 

  - ### [indicators](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/)
    Test out common trading indicators for 
    [moving-average](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/moving-average), 
    [relative-strength](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/relative-strength),
    [vwap](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/indicators/vwap).

  - ### [sentiment](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/sentiment/)
    Try strategies relying on market sentiment level in 
    [pnl-ratio](https://nbviewer.org/github/quantumsnowball/trading-lab/tree/master/sentiment/pnl-ratio).

- ### [hong-kong-interbank-liquidity-plot](https://github.com/quantumsnowball/hong-kong-interbank-liquidity-plot)
  Do you think the USD-HKD peg is gonna hold? Here is an indicator you need to pay attention to.

- ### [terra-luna-ust-revival-analysis-May-2022](https://github.com/quantumsnowball/terra-luna-ust-revival-analysis-May-2022)
  A valuation model for Terra 2.0 before the launch of the new LUNA token.

- ### [impermanent-loss-simulation](https://github.com/quantumsnowball/impermanent-loss-simulation)

  When you provide liquidity to a liquidity pool to earn fees and incentives, you capital will face impermanent loss, but by how much? Here is a simulation.

- ### [automatic-market-maker-simulation](https://github.com/quantumsnowball/automatic-market-maker-simulation)

  How does a DEX like Uniswap works? It is built on automaatic market makers, which is very different from the traditional stock market. This jupyter notebook simulates the Constant Product Invariant Curve to better understand how it works.

`

const markdown = items + `${linkToMyWork}

`

export default markdown
