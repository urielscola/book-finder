import React from 'react';
import { BookIcon, HeartIcon } from '../components/Icons';

export const CATEGORIES = ['ReactJS', 'Javascript', 'NodeJS', 'Redux'];

export const TABS = [
  {
    label: 'Livros',
    to: '/',
    icon: <BookIcon size={20} />
  },
  {
    label: 'Favoritos',
    to: '/favorites',
    icon: <HeartIcon size={20} />
  }
];
