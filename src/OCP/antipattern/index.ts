import { PaymentProcessor } from './PaymentProcessor';

const processor = new PaymentProcessor();

processor.processPayment("credit_card", 100);
processor.processPayment("paypal", 250);
// processor.processPayment("apple_pay", 300); // Викличе помилку, бо PaymentProcessor не знає про цей тип.
