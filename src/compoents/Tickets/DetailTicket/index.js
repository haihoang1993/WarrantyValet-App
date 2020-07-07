import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { IconBackHeader } from '@compoents';

export default DetailTickets = (props) => {
    console.log('DetailTickets:', props);

    const { navigation, route: { params: ticket } } = props;
    const onBack = () => {
        navigation.pop(1);
    }
    return (
        <View>
            <View>
                <TouchableOpacity onPress={onBack}>
                    <Icon size={30} style={{ fontWeight: '800' }} name="angle-left" />
                </TouchableOpacity>
            </View>

            <Text style={styles.titleTicket}>{ticket.title}</Text>
            <Text style={styles.date}>{ticket.date}</Text>
            <Text style={styles.des}>hhhhh</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titleTicket: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    },
    des: {
        fontSize: 20,
    },
    date: {
        fontSize: 17,
        marginBottom: 10,
        color: '#807f7d',
        fontWeight: 'bold',
    }
})