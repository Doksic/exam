// Абстракція (Інтерфейс), яка дозволяє розширювати систему
export interface PaymentMethod {
    pay(amount: number): void;
}
