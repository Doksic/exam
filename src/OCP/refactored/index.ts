import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PayPalPayment';
import { ApplePayPayment } from './ApplePayPayment';

const processor = new PaymentProcessor();

// Передаємо конкретні реалізації в процесор
processor.processPayment(new CreditCardPayment(), 100);
processor.processPayment(new PayPalPayment(), 250);

// Новий функціонал працює без змін у процесорі!
processor.processPayment(new ApplePayPayment(), 500);
