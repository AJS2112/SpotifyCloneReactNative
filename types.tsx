/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AlbumScreen: { id: string };
  Modal: undefined;
  NotFound: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  AlbumScreen: { id: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  HomeStack: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type Album = {
  id: string;
  imageUri: any;
  artistHeadline: string;
  name: string;
  by: string;
  numberOfLikes: number;
}


export type Song = {
  id: string;
  imageUri: any;
  title: string;
  artist: string;
}