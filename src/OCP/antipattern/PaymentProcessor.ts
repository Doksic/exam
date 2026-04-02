export class PaymentProcessor {
    public processPayment(type: string, amount: number): void {
        // ПОРУШЕННЯ OCP: Клас закритий для розширення. 
        // Щоб додати новий метод, ми змушені змінювати цей код.
        if (type === "credit_card") {
            console.log(`[Anti-pattern] Обробка платежу з кредитної картки на суму: $${amount}`);
        } else if (type === "paypal") {
            console.log(`[Anti-pattern] Обробка платежу через PayPal на суму: $${amount}`);
        } else {
            throw new Error("Невідомий метод оплати!");
        }
    }
}