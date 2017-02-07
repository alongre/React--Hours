import data from '../data';
import routing from '../routing';

export default function* saga() {
  yield [
    data.saga(),
    routing.saga(),
  ];
}

