import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KaagazUser } from 'kaagaz-models';
import { RazorpayService } from 'src/app/shared/services/module/razorpay.service';

@Component({
  selector: 'kaagaz-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  bill: any;  // You might want to define a more specific type here, such as `KaagazOrderBill`
  
  constructor(private router: Router, private razorpayService: RazorpayService,) { }

  ngOnInit() {
    // Retrieve the bill data from the navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.bill = navigation.extras.state.bill;
      console.log('Received bill:', this.bill);
    }
  }

  user:KaagazUser;

  startPayment() {
    // Set the amount in Razorpay options dynamically based on the bill
    this.razorpayService.options.amount =1 * 100; // Convert to paise
  


    // Optionally, update other Razorpay options like `order_id`, `prefill`, etc.
    this.razorpayService.options.order_id = ''; // You may want to generate and set an order ID from your backend
    this.razorpayService.options.prefill.name = 'Ansh Khurana'; // You can use dynamic data here
    this.razorpayService.options.prefill.email = 'email@example.com';
    this.razorpayService.options.prefill.contact = '9999999999';

    // Initiate the payment
    this.razorpayService.initiatePayment();
  }
}
