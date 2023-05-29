// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment";

class ParkingReceipt {
    constructor(ticketId, receiptId, entryDateTime, exitDateTime, fees) {
        this.ticketId = ticketId;
        this.receiptId = receiptId;
        this.entryDateTime = entryDateTime;
        this.exitDateTime = exitDateTime;
        this.fees = fees;
    }

    printParkingReceipt() {
        console.log('Parking Receipt');
        console.log(`   Receipt Number: ${this.receiptId}`);
        console.log(`   Ticket Number: ${this.ticketId}`);
        console.log(`   Entry Date-time: ${moment(this.entryDateTime).format('DD-MMM-YYYY hh:mm:ss')}`);
        console.log(`   Exit Date-time: ${moment(this.exitDateTime).format('DD-MMM-YYYY hh:mm:ss')}`);
        console.log(`   Fees: ${this.fees}`);
    }
}

export default ParkingReceipt;