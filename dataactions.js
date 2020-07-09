import axios from './axios-orders';

export function get_event_threed_detail(event_id, hall_number) {
    //let config = setheaderforfirstrequest();
    return axios.get('xporium/threed/get_event_threed_detail?event_id=' + event_id+"&hall_number="+ hall_number);
}

export const exhibitor_visitor_card_exchange_save= ( data) => {         
    let url = 'xporium/threed/exhibitor_visitor_card_exchange_save';            
    return axios.post( url, data)               
}