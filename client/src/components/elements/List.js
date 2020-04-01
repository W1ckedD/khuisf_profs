import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = props => {
    return (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <ListItem
                    id={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    imageUrl={item.imageUrl}
                    email={item.email}
                    faculty={item.faculty.name}
                    major={item.major.name}
                />
            )}
        />
    );
};

export default List;
