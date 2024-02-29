export default function formatCurrency(input:string) {
    const number = parseFloat(input);  
    if (isNaN(number) || !isFinite(number)) {
      return "Invalid input";
    }
    return number.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  }
  
