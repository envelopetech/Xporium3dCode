import React from 'react';
import { AppRegistry, View } from 'react-360';
import ThreeD from './components/ThreeD';
import queryString from 'query-string';
import { NativeModules } from 'react-native';
import UIscreen from './components/UIscreen';
import { get_event_threed_detail } from './dataactions';
import Exhibitionstall from './components/ExhibitionStall'
import { stallnumber, hallnumber } from './components/commonutility';
import shortid from "shortid";
import PictureButtonObject from './components/PictureButtonObject';
import Infopanel from './components/infopanel';
import Visitingcardexchange from './components/visitingcardexchange';
import Cardexchangedonescreen from './components/cardexchangedonescreen';

//import {testpanel} from './components/ThreeD';
const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var sortBy = require('lodash.sortby');

export default class xporiumthreed extends React.Component {
  constructor() {
    super();
    this.state = {
      eventthreeddata: null,
      exhibitordata: null,
      userid: null
    };
    RCTDeviceEventEmitter.addListener('clickedhallnumber', (e) => { this.clickedhallnumberhandler(e); });
  }
  clickedhallnumberhandler(e) {
    this.getdata(e.hall_number)
  }
  getdata = (hallnumber) => {
    const Location = NativeModules.Location;
    if (Location.search !== "") {
      const parsedvalue = queryString.parse(Location.search);
      userid = parsedvalue["userid"];
      this.setState({ userid: userid })
      //AsyncStorage.setItem("userid", userid)
    }
    let eventid = 1
    var data = get_event_threed_detail(parseInt(eventid, 10), parseInt(hallnumber, 10))
    data.then(res => {     
      if (res !== undefined) {
        if (res.data[0]["error"] === undefined) {
          let data = res.data[0];
          let sorteddata = sortBy(data, ['stall_number'])
          //console.log("sorting data", sorteddata)
          let data1 = res.data[1];
          //console.log("exhibitordata without sorting", data1)
          let sorteddata1 = sortBy(data1, ['hall_number', 'stall_number'])
          //console.log("exhibitordata with sorting", sorteddata1)
          this.setState({ eventthreeddata: sorteddata, exhibitordata: sorteddata1 })
          //AsyncStorage.setItem("infodata", sorteddata)
        }
      }
    });
  }
  componentDidMount() {
    this.getdata(hallnumber.hall1)
  }  
  render() {
    let threedmodel = null
    let Exhibitionstalllist = [];
    let staticxporiumpicturedata = []
    //let infopanledata = null;


    staticxporiumpicturedata.push(<PictureButtonObject x={-256.2} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} twodloggedinuser_id={this.state.userid} />)
    staticxporiumpicturedata.push(<PictureButtonObject x={-260} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} twodloggedinuser_id={this.state.userid} />)
    //staticxporiumpicturedata.push(<PictureButtonObject x={-264} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} twodloggedinuser_id={this.state.userid}  exhibitoruserid={item.userid}/>)
    staticxporiumpicturedata.push(<Visitingcardexchange x={-264} y={0} z={-15} pic={'https://cdn.filestackcontent.com/gqzJUeAdTfu88xaIu60E'} twodloggedinuser_id={this.state.userid}  exhibitoruserid="e8c2bf5e-a737-4001-8bec-62614ab8e739"/>)

    let detail1 = <Exhibitionstall
      key={shortid.generate()}
      xposition={-255}
      yposition={0}
      zposition={-3}
      scale={4}
      rotatey={270}
      stallname={"xporium"}
      pictureobjectsdata={staticxporiumpicturedata}
      userid={this.state.userid}>
    </Exhibitionstall>

    Exhibitionstalllist.push(
      <React.Fragment key={shortid.generate()}>{detail1}</React.Fragment>
    )
    if (this.state.eventthreeddata !== null) {
      if (this.state.eventthreeddata.length > 0) {
        this.state.eventthreeddata.map((item, i) => {

          let xposition = 0;
          let yposition = 0;
          let zposition = 0;
          let scale = 0;
          let rotatey = 0;
          let stallname = "A-1";

          let picxposition1 = 0;
          let picyposition1 = 0;
          let piczposition1 = 0;

          let picxposition2 = 0;
          let picyposition2 = 0;
          let piczposition2 = 0;

          let picxposition3 = 0;
          let picyposition3 = 0;
          let piczposition3 = 0;

          switch (item.stall_name) {
            case (stallnumber.stall1):
              xposition = -255;
              yposition = 0;
              zposition = -53;
              scale = 4;
              rotatey = 90;

              // picxposition1 = -231.4;
              // picyposition1 = 0;
              // piczposition1 = -15;

              // picxposition2 = -235.35;
              // picyposition2 = 0;
              // piczposition2 = -15;

              // picxposition3 = -239.3;
              // picyposition3 = 0;
              // piczposition3 = -15;
              break;
            case (stallnumber.stall2):
              xposition = -255;
              yposition = 0;
              zposition = -103;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall3):
              xposition = -255;
              yposition = 0;
              zposition = -153;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall4):
              xposition = -255;
              yposition = 0;
              zposition = -188;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall5):
              xposition = -255;
              yposition = 0;
              zposition = -238;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall6):
              xposition = -255;
              yposition = 0;
              zposition = -288;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall7):
              xposition = -255;
              yposition = 0;
              zposition = -342;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall8):
              xposition = -180;
              yposition = 0;
              zposition = -53;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall9):
              xposition = -180;
              yposition = 0;
              zposition = -103;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall10):
              xposition = -180;
              yposition = 0;
              zposition = -153;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall11):
              xposition = -180;
              yposition = 0;
              zposition = -188;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall12):
              xposition = -180;
              yposition = 0;
              zposition = -238;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall13):
              xposition = -180;
              yposition = 0;
              zposition = -288;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall14):
              xposition = -180;
              yposition = 0;
              zposition = -342;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall15):
              xposition = -105;
              yposition = 0;
              zposition = -53;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall16):
              xposition = -105;
              yposition = 0;
              zposition = -3;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall17):
              xposition = -105;
              yposition = 0;
              zposition = -103;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall18):
              xposition = -105;
              yposition = 0;
              zposition = -153;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall19):
              xposition = -105;
              yposition = 0;
              zposition = -188;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall20):
              xposition = -105;
              yposition = 0;
              zposition = -238;
              scale = 4;
              rotatey = 90;
              break;
            case (stallnumber.stall21):
              xposition = -105;
              yposition = 0;
              zposition = -288;
              scale = 4;
              rotatey = 270;
              break;
            case (stallnumber.stall22):
              xposition = -105;
              yposition = 0;
              zposition = -342;
              scale = 4;
              rotatey = 90;
              break;
            default:
              break;
          }
          let pictureobjectsdata = [];
          if (item.productthreeddetail !== null && item.productthreeddetail.length > 0) {
            pictureobjectsdata.push(
              <PictureButtonObject x={picxposition1} y={picyposition1} z={piczposition1} pic={item.product_pic_url_1} twodloggedinuser_id={this.state.userid} />
            )
            pictureobjectsdata.push(
              <PictureButtonObject x={picxposition2} y={picyposition2} z={piczposition2} pic={item.product_pic_url_2} twodloggedinuser_id={this.state.userid} />
            )
            pictureobjectsdata.push(
              <PictureButtonObject x={picxposition3} y={picyposition3} z={piczposition3} pic={item.product_pic_url_3} twodloggedinuser_id={this.state.userid}/>
            )
          }
          let detail = <Exhibitionstall
            key={item.id}
            xposition={xposition}
            yposition={yposition}
            zposition={zposition}
            scale={scale}
            rotatey={rotatey}
            stallname={stallname}
            pictureobjectsdata={pictureobjectsdata}
            twodloggedinuser_id={this.state.userid}
            exhibitoruserid={item.userid}>
          </Exhibitionstall>
          return (
            Exhibitionstalllist.push(
              <React.Fragment key={shortid.generate()}>{detail}</React.Fragment>
            )
          )
        });
      }
      threedmodel = <ThreeD infodata={this.state.exhibitordata} userid={this.state.userid} />
    }
    return (
      <View>
        {threedmodel}
        {Exhibitionstalllist}
        {/* {infopanledata} */}
      </View>
    );
  }
};
AppRegistry.registerComponent('xporiumthreed', () => xporiumthreed);
AppRegistry.registerComponent('UIscreen', () => UIscreen);
AppRegistry.registerComponent('Cardexchangedonescreen', () => Cardexchangedonescreen)
AppRegistry.registerComponent('Infopanel', () => Infopanel);
