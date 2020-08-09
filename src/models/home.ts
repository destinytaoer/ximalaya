import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const CAROUSEL_URL = '/mock/11/api/carousel';
const GUESS_URL = '/mock/11/api/guess';

export interface ICarousel {
  id: string;
  colors: [string, string];
  image: string;
}

export interface IGuess {
  id: string;
  title: string;
  image: string;
}

interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
  };
}

const initalState = {
  carousels: [],
  guess: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initalState,
  reducers: {
    setState(state = initalState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchCarousels(_, {call, put}) {
      const {data} = yield call(axios.get, CAROUSEL_URL);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *fetchGuess(_, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
  },
};

export default homeModel;
