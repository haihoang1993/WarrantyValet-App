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
import { TimeHelper } from '@common';
import { Avatar, Card } from 'react-native-elements';

export default DetailTickets = (props) => {
    console.log('DetailTickets:', props);
    const { ticket, listReply = [] } = props;
    const { ticket_content: { post_content } } = ticket;
    // const { navigation, route: { params: ticket } } = props;
    const { photos = [] } = ticket;

    const renderItemReply = ({ item }) => {
        const { comment_author, comment_content, comment_date, photos = [], avartar } = item;
        const date = comment_date;
        const stDate = TimeHelper.formatDate(date, 'LL');
        const time = TimeHelper.formatDate(date, 'hh:mm a');
        // console.log('time:',m)
        return (
            <View style={styles.viewItemReply}>
                {/* <Card containerStyle={styles.styleCard}> */}
                <View style={styles.styleCard}>
                    <View style={styles.viewTopItemReply}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar
                                rounded
                                size="medium"
                                source={{
                                    uri: avartar
                                }}
                            />
                            <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
                                <Text style={{ marginHorizontal: 5, fontSize: 17, fontWeight: 'bold' }}>
                                    {comment_author ? comment_author : "Admin"}
                                </Text>
                                <Text style={{ fontSize: 15, marginTop: 3, color: '#807f7d', }}>
                                    {stDate}  at {time}
                                </Text>
                            </View>

                        </View>

                    </View>
                    <View>
                        <Text style={{ fontSize: 20, marginTop: 10 }}> {comment_content}</Text>
                    </View>
                    {photos.length > 0 && (<ImagesView data={photos} />)}
                    {/* </Card> */}
                </View>
            </View>
        )
    }
    return (
        <View style={styles.wrap}>
            <View style={styles.header}>
                <Text style={styles.titleTicket}>{ticket.title}</Text>
                <Text style={styles.date}>{ticket.date}</Text>
                <Text style={styles.des}>{post_content}</Text>
                <ImagesView data={photos} />
            </View>
            <View style={{ margin: 0, padding: 0 }}>
                <Card containerStyle={styles.styleCardList}>

                    {listReply.length == 0 && (<Text style={{ padding: 20, fontSize: 18 }}> No comments found. </Text>)}
                    {listReply.length > 0 && (<Text style={{ margin: 20, fontSize: 17 }}>Comments:</Text>)}
                    {listReply.length > 0 && (<FlatList style={{ padding: 0 }} data={listReply} renderItem={renderItemReply} />)}
                </Card>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrap: {
        margin: 5,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 4,
        //     height: 4
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 100,
        // borderRadius: 10,
        // backgroundColor: 'white'
    },
    styleCard: {
        borderRadius: 10,
        borderTopColor: '#a19e9d',
        borderTopWidth: 0.4,
        margin: 0,
        padding: 15
    },
    styleCardList: {
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 0,
    },
    titleTicket: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#2564d9'
    },
    des: {
        fontSize: 19,
    },
    date: {
        fontSize: 16,
        marginBottom: 10,
        color: '#807f7d',
        fontWeight: 'bold',
    },
    header: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderColor: '#2564d9',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    viewItemReply: {
        margin: 0,
        padding: 0
    },
    viewTopItemReply: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})