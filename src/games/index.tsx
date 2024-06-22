import { GameBundle } from 'gamba-react-ui-v2'
import React from 'react'

export const GAMES: GameBundle[] = [
  // {
  //   id: 'example',
  //   meta: {
  //     background: '#00ffe1',
  //     name: 'Example',
  //     image: '#',
  //     description: '',
  //   },
  //   app: React.lazy(() => import('./ExampleGame')),
  // },
  {
    id: 'dice',
    meta: {
      background: '#1da11f',
      name: 'Dice',
      image: '/games/dice.png',
      description: `
         Oh, the devilish delight of Dice! Picture this, my daring darlings: a game where fate's fickle fingers flick the dice. You, the player, pick a number, any number, and then aim to roll beneath it. Simple? Ha! But here's the twist, the joker's jest—choose wisely, for your pick tweaks the tantalizing payouts. Balance that razor-thin line between risk and reward, and dive into the chaotic carnival of chance! Roll right, and the spoils are yours; roll wrong, and the house cackles last! Ha ha ha
      `,
    },
    app: React.lazy(() => import('./Dice')),
  },
  {
    id: 'slots',
    meta: {
      background: '#5A0361',
      name: 'Slots',
      image: '/games/slots.png',
      description: `
        Ah, Slots, the dazzling dance of destiny and delight! Picture this, my playful pals: spinning reels, whirling with wonder, each symbol a step towards splendor. Match them just right, and behold the bounty! The rewards, oh, they're displayed upfront, teasing and tempting. A game so fair, so thrilling, it brings the classic casino caper straight to your fingertips. Luck and anticipation twine together in this timeless test of fortune. Spin the reels, embrace the excitement, and let the symbols decide your fate! Ha ha ha!
      `,
    },
    app: React.lazy(() => import('./Slots')),
  },
  {
    id: 'flip',
    meta: {
      name: 'Flip',
      description: `
         Ah, Flip, the quintessential quandary of chaos! Imagine, if you will, a coin twirling in the air, a simple yet scintillating gamble. Heads or Tails, the choice is yours! Double your money with a single flip or watch it vanish into the void. A game so pure, so primal, it pits your luck against the fates themselves. Each flip, a test of your nerve, your decision-making dancing on the edge of oblivion. Heads, you win; tails, you lose! The thrill, the agony, the ecstasy of chance! Ha ha ha!
      `,
      image: '/games/flip.png',
      background: '#1da11f',
    },
    app: React.lazy(() => import('./Flip')),
  },
  {
    id: 'hilo',
    meta: {
      name: 'HiLo',
      image: '/games/hilo.png',
      description: `
        Ah, HiLo, the dance of destiny and daring! Imagine, my dear player, a game where your wits and whims collide, a tantalizing test of whether the next card teeters higher or dives lower. Each guess, a step deeper into the abyss of fortune. Nail it right, again and again, and watch your spoils soar! But beware, know when to snatch your riches and run, lest the house has the last laugh! Ha ha ha!
      `,
      background: '#5A0361',
    },
    props: { logo: '/logo.svg' },
    app: React.lazy(() => import('./HiLo')),
  },
  {
    id: 'mines',
    meta: {
      name: 'Mines',
      description: `
        Ah, a game of hidden hazards and hidden treasures! Picture this, my mischievous mates: a board with money lurking beneath the squares. The more squares you reveal, the richer you become. But beware, for five fiendish mines are scattered about, waiting to blast your dreams to bits! Touch one, and poof—you're penniless! Yet, you can cash out at any time, if you've got the nerve to walk away. A tantalizing tango of risk and reward, where every reveal is a step closer to fortune—or folly. Dare to play, and let the chaos commence! Ha ha ha!
      `,
      image: '/games/mines.png',
      background: '#5A0361',
    },
    app: React.lazy(() => import('./Mines')),
  },
  {
    id: 'roulette',
    meta: {
      name: 'Roulette',
      image: '/games/roulette.png',
      description: `
        Roulette, my fiendish friends, is the grand gala of gambling brought to life in digital decadence! Spin the wheel, place your bets, and let the little ball of fate dance across the numbers. Will it land on your lucky spot or dash your dreams into dust? The rules are as simple as a joker's jibe, yet the rewards—oh, the rewards—are as grand as Gotham's tallest towers. A timeless tempest of chance and fortune, where every spin teeters on the edge of triumph or tragedy. Come, take a whirl, and let the wheel decide your destiny! Ha ha ha!
      `,
      background: '#1da11f',
    },
    app: React.lazy(() => import('./Roulette')),
  },
  {
    id: 'plinko',
    meta: {
      background: '#5A0361',
      image: '/games/plinko.png',
      name: 'Plinko',
      description: `
        Plinko, my chaotic companions, is a carnival of controlled chaos! Picture it: chips clattering down a pegged board, bouncing and tumbling, their destiny uncertain, their path unpredictable. Each drop, a delectable dance of anticipation and strategy. Will it land in a slot of splendid riches or one of meager means? The thrill is in the fall, the suspense in the scatter. A game of chance so endlessly entertaining, it could make even the Dark Knight crack a smile. Drop a chip, embrace the chaos, and revel in the randomness of Plinko! Ha ha ha!
        
      `,
    },
    app: React.lazy(() => import('./Plinko')),
  },
  {
    id: 'crash',
    meta: {
      background: '#1da11f',
      image: '/games/crash.png',
      name: 'Crash',
      description: `
        Ah, the rocket game, a splendid spectacle of suspense and soaring stakes! Picture this, my daring deviants: you predict a multiplier target, a lofty goal for our intrepid rocket. Then, with a fiery roar, it ascends, climbing higher and higher. But beware! If it crashes before reaching your target, your dreams go up in smoke. But if it soars past, oh, the sweet taste of victory is yours! Every launch, a gamble with gravity, a dance with destiny. Will you reach the stars or plummet into despair? Only one way to find out! Ha ha ha!
      `,
    },
    app: React.lazy(() => import('./CrashGame')),
  },
]
