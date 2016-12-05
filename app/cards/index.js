import _ from 'lodash';
import cards from './cards.json';

export function get() {
  return cards;
}

export function draw() {
  return _.sample(cards);
}
