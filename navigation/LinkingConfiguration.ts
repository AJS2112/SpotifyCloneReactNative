/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import { HomeStackParamList } from '../types';


const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeStack: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Search: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Library: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Premium: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',

    },
  },
};

export default linking;
