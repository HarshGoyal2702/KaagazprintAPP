import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APIURLS } from 'kaagaz-models';
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
      this.onPaymentSuccess(response);
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

  constructor(private http:HttpClient,private router:Router) { }

  initiatePayment() {
    const razorpay = new Razorpay(this.options);
    razorpay.open();
  }

  private onPaymentSuccess(response: any) {
    console.log('Payment successful!', response);
  
    let userId: string | null = null;

    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      userId = user.id;
    } catch (error) {
      console.error('Error parsing user data from localStorage', error);
    }

    if (!userId) {
      console.error('User ID not found');
      return;
    }
    // Prepare the data to be sent to the backend
    const paymentData = {
      paymentId: response.razorpay_payment_id,
      amount: this.options.amount / 100, // Convert to INR
      paymentStatus: 1, // Assuming 1 means payment success
      userId:userId
    };

    console.log(paymentData);

    // Call the backend to update the order status and save payment details
    this.http.post(APIURLS.SAVE_ORDER, paymentData).subscribe(
      (res: any) => {
        console.log('Order updated successfully!', res);
        // Redirect to a success page or display a success message
        this.router.navigate(['/kaagaz/my-orders']);
      },
      (error) => {
        console.error('Error updating order', error);
      }
    );
  }
}
