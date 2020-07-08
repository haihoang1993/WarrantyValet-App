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
import ImagesView from '../../base/ImagesView';
import { IconBackHeader } from '@compoents';
import { Avatar, Card } from 'react-native-elements';

export default DetailTickets = (props) => {
    console.log('DetailTickets:', props);
    const { ticket, listReply = [] } = props;
    // const { navigation, route: { params: ticket } } = props;
    const { photos = [] } = ticket;

    const renderItemReply = ({ item }) => {
        const { comment_author, comment_content, comment_date, photos = [] } = item;
        return (
            <View style={styles.viewItemReply}>
                <Card containerStyle={styles.styleCard}>
                    <View style={styles.viewTopItemReply}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar
                                rounded
                                size="medium"
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }}
                            />
                            <Text style={{ marginHorizontal: 5, fontSize: 17 }}>
                                {comment_author}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>
                            20-03-2020
                    </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, marginTop: 10 }}> {comment_content}</Text>
                    </View>
                    {photos.length>0 && ( <ImagesView data={photos} />)}
                </Card>
            </View>
        )
    }
    return (
        <View>
            {/* <View>
                <TouchableOpacity onPress={onBack}>
                    <Icon size={30} style={{ fontWeight: '800' }} name="angle-left" />
                </TouchableOpacity>
            </View> */}
            <View style={styles.header}>
                <Text style={styles.titleTicket}>{ticket.title}</Text>
                <Text style={styles.date}>{ticket.date}</Text>
                <Text style={styles.des}>hhhhh</Text>
                <ImagesView data={photos} />
            </View>
            <View style={{ margin: 0, padding: 0 }}>
                <FlatList data={listReply} renderItem={renderItemReply}>

                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    styleCard: {
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10
    },
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
    },
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
    },
    viewItemReply: {
        margin: 0
    },
    viewTopItemReply: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})