import { PaymentMethod } from './PaymentMethod';

export class CreditCardPayment implements PaymentMethod {
    public pay(amount: number): void {
        console.log(`[Refactored] Оплата $${amount} за допомогою кредитної картки.`);
    }
}
