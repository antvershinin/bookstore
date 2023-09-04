import {MultipleSelectList} from 'react-native-dropdown-select-list';
import {styles} from './GenreFilter.styles';
import {Image, Text, View} from 'react-native';
import {useState} from 'react';

const data = ['one', 'two', 'three'];

const GenreFilter = () => {
  return (
    <MultipleSelectList
      setSelected={() => {}}
      search={false}
      boxStyles={styles.button}
      dropdownStyles={styles.dropdown}
      data={data}
    />
  );
};

export default GenreFilter;
