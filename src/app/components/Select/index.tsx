'use client';
import React from 'react';
import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from 'react-aria-components';

const FavoriteAnimalSelect = () => (
  <Select className="relative w-64">
    <Label className="mb-2 block text-sm font-medium text-gray-700">Favorite Animal</Label>
    <Button className="relative w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-left shadow-sm hover:border-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      <SelectValue className="block truncate" />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▼</span>
    </Button>
    <Popover className="absolute z-10 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <ListBox className="max-h-60 overflow-auto py-1">
        <ListBoxItem className="selected:bg-indigo-100 selected:text-indigo-900 px-4 py-2 text-sm text-gray-900 hover:bg-indigo-50">
          Cat
        </ListBoxItem>
        <ListBoxItem className="selected:bg-indigo-100 selected:text-indigo-900 px-4 py-2 text-sm text-gray-900 hover:bg-indigo-50">
          Dog
        </ListBoxItem>
        <ListBoxItem className="selected:bg-indigo-100 selected:text-indigo-900 px-4 py-2 text-sm text-gray-900 hover:bg-indigo-50">
          Kangaroo
        </ListBoxItem>
      </ListBox>
    </Popover>
  </Select>
);

export default FavoriteAnimalSelect;
