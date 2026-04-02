import { PaymentMethod } from './PaymentMethod';

export class PayPalPayment implements PaymentMethod {
    public pay(amount: number): void {
        console.log(`[Refactored] Оплата $${amount} через систему PayPal.`);
    }
}
