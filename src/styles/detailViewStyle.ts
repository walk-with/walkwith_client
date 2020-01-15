import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export const list = [
  {
    url: 'http://image.dongascience.com/Photo/2018/01/15159739972169[1].jpg',
    이름: '오구칭구',
    나이: 1,
    성별: '남',
    무게: '10kg',
    tag: 'tag1',
  },
  {
    url:
      'https://image-notepet.akamaized.net/seimage/20170428%2F2a9d94ebcaa34b93ca0eeadd1107f4b2.jpg',
    이름: '기엽군',
    나이: 1,
    성별: '남',
    무게: '10kg',
    tag: 'tag1',
  },
  {
    url:
      'http://image.yes24.com/images/chyes24/5/1/7/b/517bf1b2a29c9b422a61bb4e1e722e20.JPG',
    이름: '멍멍',
    나이: 1,
    성별: '남',
    무게: '10kg',
    tag: 'tag1',
  },
  {
    url: 'https://coop.ewha.ac.kr/ezstock/1534729386.jpg',
    이름: '왈왈',
    나이: 1,
    성별: '남',
    무게: '10kg',
    tag: 'tag1',
  },
  {
    url:
      'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440',
    이름: '바우와우',
    나이: 1,
    성별: '남',
    무게: '10kg',
    tag: 'tag1',
  },
  {
    url:
      'https://image-notepet.akamaized.net/seimage/20170428%2F2a9d94ebcaa34b93ca0eeadd1107f4b2.jpg',
    이름: '컹컹',
    나이: 1,
    성별: '남',
    무게: '10kg',
    tag: 'tag1',
  },
];

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  petAvatarTitleWrap: {
    justifyContent: 'center',
    height: 30,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  petAvatarWrap: {
    height: 100,
    // borderColor: 'black',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    height: 150,
    margin: 10,
    width: width * 0.9,
  },
  petListSec: {
    height: 120,
    width: width * 0.9,
    margin: 10,
  },
  mapSec: {height: 400},
  sectionTitle: {fontSize: 20, marginTop: 30},
  //
  buttonGroup: {
    height: height * 0.05,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    borderWidth: 0,
  },
  selectedContainer: {height: height * 0.77},

  //Cards
  cardContainer: {
    borderRadius: 10,
    margin: 0,
    height: '100%',
    justifyContent: 'center',
  },
  petCardContainer: {
    borderRadius: 10,
    margin: 0,
    height: '100%',
  },
  petCardSecWrap: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  petCardLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  petCardRight: {flex: 2, paddingLeft: 15},

  //CardInfo
  cardInfoList: {
    flex: 1,
    flexDirection: 'row',
  },
  cardInfoTitle: {
    flex: 1,
    textAlignVertical: 'center',
    marginRight: 10,
    backgroundColor: '#FFCCCC',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: '700',
  },
  cardInfo: {flex: 3, textAlignVertical: 'center'},
  //
  walkCardSecWrap: {
    justifyContent: 'center',
    height: '100%',
    // borderColor: 'black',
    // borderWidth: 1,
  },

  tagContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  tagText: {
    color: 'purple',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
});
