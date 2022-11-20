// Third Parties
import Card from 'scryfall-client/dist/models/card';

export type MtgCard = Pick<
  Card,
  'id' | 'cmc' | 'image_uris' | 'mana_cost' | 'name' | 'type_line'
>;

export type MtgCardIndexed = MtgCard & { index: number };
