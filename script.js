function openSalesForm() {
    document.getElementById('salesForm').style.display = 'block';
}

function closeSalesForm() {
    document.getElementById('salesForm').style.display = 'none';
}

function saveSales() {
    const model = document.getElementById('model').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    if (model && quantity && price) {
        // هنا يمكنك إضافة كود لحفظ البيانات في قاعدة بيانات
        
        // إغلاق نموذج المبيعات وفتح نافذة التأكيد
        closeSalesForm();
        document.getElementById('confirmationModal').style.display = 'block';
    } else {
        alert('يرجى تعبئة جميع الحقول');
    }
}

function stayOnSite() {
    document.getElementById('confirmationModal').style.display = 'none';
}

function leaveSite() {
    window.location.href = 'index.html';
}

function fetchMonthlySales() {
    alert('سيتم جلب بيانات المبيعات الشهرية');
    // يمكنك إضافة كود هنا لجلب بيانات المبيعات الشهرية من قاعدة البيانات
}