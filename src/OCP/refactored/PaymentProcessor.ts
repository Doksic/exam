import { PaymentMethod } from './PaymentMethod';

export class PaymentProcessor {
    // Цей клас тепер ЗАКРИТИЙ для модифікації, 
    // але ВІДКРИТИЙ для розширення завдяки поліморфізму.
    public processPayment(paymentMethod: PaymentMethod, amount: number): void {
        paymentMethod.pay(amount);
    }
}