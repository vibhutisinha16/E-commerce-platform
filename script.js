// Function to generate a random barcode
function generateBarcode() {
    const barcodeValue = Math.floor(Math.random() * 1000000000).toString().padStart(12, '0');
    const barcodeImage = `https://www.barcodesinc.com/generator/image.php?code=${barcodeValue}&style=197&type=C128B&width=200&height=50&xres=1&font=3`;
  
    document.getElementById('barcode').src = barcodeImage;
  }
  
  // Simulated real-time updates
  setInterval(() => {
    // Update total stock, sold stock, total revenue, total leads, new stock
    const totalStockValue = Math.floor(Math.random() * 1000);
    const soldStockValue = Math.floor(Math.random() * totalStockValue);
    const totalRevenueValue = Math.floor(Math.random() * 100000);
    const totalLeadsValue = Math.floor(Math.random() * 100);
    const newStockValue = Math.floor(Math.random() * 100);
  
    document.getElementById('totalStock').innerText = totalStockValue;
    document.getElementById('soldStock').innerText = soldStockValue;
    document.getElementById('totalRevenue').innerText = totalRevenueValue;
    document.getElementById('totalLeads').innerText = totalLeadsValue;
    document.getElementById('newStock').innerText = newStockValue;
  
    generateBarcode(); // Generate a new barcode
  }, 5000); // Update every 5 seconds
  
  // Initial barcode generation
  generateBarcode();
  
