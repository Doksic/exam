import { PaymentMethod } from './PaymentMethod';

// ДЕМОНСТРАЦІЯ РОЗШИРЕННЯ: Ми додали новий метод оплати (Apple Pay), 
// створивши новий файл/клас, взагалі не змінюючи існуючий PaymentProcessor.
export class ApplePayPayment implements PaymentMethod {
    public pay(amount: number): void {
        console.log(`[Refactored] Оплата $${amount} через Apple Pay.`);
    }
}
