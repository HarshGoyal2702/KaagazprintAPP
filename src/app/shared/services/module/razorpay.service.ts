import { Injectable } from '@angular/core';
declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  options: any = {
    key: 'rzp_live_A2gcug0ohJ9NbU', // Replace with your Razorpay key ID
    amount: 100, // Default amount in paise (100 paise = 1 INR)
    currency: 'INR',
    name: 'KaagazPrint',
    description: 'Document Printing Payment',
    image: '../../../../../assets/logos/kaagaz-print.jpg', // Replace with your logo URL
    order_id: '', // This can be fetched from the backend if needed
    handler: (response: any) => {
      console.log('Payment successful!', response);
      // Handle payment success, e.g., update order status, save payment details
    },
    prefill: {
      name: '', // Pre-fill user's name
      email: '', // Pre-fill user's email
      contact: '' // Pre-fill user's phone number
    },
    notes: {
      address: 'Document Printing Service'
    },
    theme: {
      color: '#3399cc'
    }
  };

  constructor() { }

  initiatePayment() {
    const razorpay = new Razorpay(this.options);
    razorpay.open();
  }
}
