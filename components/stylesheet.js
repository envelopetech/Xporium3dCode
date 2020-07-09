import React from 'react';
import { StyleSheet } from 'react-360';

export const styles = StyleSheet.create({
  leftPanel: {
    width: 300,
    height: 600,
    backgroundColor: '#00171F',
    borderColor: '#003459',
    borderWidth: 10,
    flexDirection: 'column',
    padding: 10,
  },
  rightPanel: {
    width: 300,
    height: 800,
    overflow: 'scroll',
    
    
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
  },
  header: {
    backgroundColor: '#003459',
  },
  headerText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textSize: {
    fontSize: 15,
    textAlign: 'center'
  },
  infoHeader: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    height: 60,
    width: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2.5
  },
  hover: {
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#0073B7',
    borderColor: 'rgb(255,255,255)',
    borderWidth: 2.5,
  },

  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: '#639dda',
    borderWidth: 2,
    flexDirection: 'column',
    
  },

  greeting: {
    fontSize:25,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },

  exhibitorList: {
    flexDirection: 'row',
  },

  exhibitorColumn1: {
    flexDirection: 'column',
  },


});

export default styles;