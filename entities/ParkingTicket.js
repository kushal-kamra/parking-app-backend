// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";

class ParkingTicket {
    constructor(ticketId, parkingSpotId, entryDateTime) {
        this.ticketId = ticketId;
        this.parkingSpotId = parkingSpotId;
        this.entryDateTime = entryDateTime;
    }

    printParkingTicket() {
        console.log('Parking Ticket:');
        console.log(`   Ticket Number: ${this.ticketId}`);
        console.log(`   Spot Number: ${this.parkingSpotId}`);
        console.log(`   Entry Date-time: ${moment(this.entryDateTime).format('DD-MMM-YYYY hh:mm:ss')}`)
    }
}

export default ParkingTicket;