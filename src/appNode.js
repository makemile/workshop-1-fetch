export const formatPrice = (price) =>   {
    const newPrice = new window.Intl.NumberFormat('en-En', {
     style: "currency",
     currency: "USD"
    }).format(price);
    return newPrice;
   }