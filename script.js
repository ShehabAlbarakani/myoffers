document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM content loaded.");  // تأكد من تحميل DOM
    
    // التحقق من زر التسجيل
    const registerButton = document.getElementById('registerButton');
    if (registerButton) {
        console.log("Register button found.");  // التأكد من العثور على الزر
        registerButton.addEventListener('click', function() {
            console.log("Register button clicked.");  // تأكيد الضغط على الزر
            
            const firstName = document.querySelector('input[name="first_name"]').value;
            const lastName = document.querySelector('input[name="last_name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            const address = document.querySelector('input[name="address"]').value;
            const mobile = document.querySelector('input[name="mobile"]').value;

            if (firstName && lastName && email && password && address && mobile) {
                alert("Registration Successful!");
                clearFields(['first_name', 'last_name', 'email', 'password', 'address', 'mobile']);
            } else {
                alert("Please fill out all fields.");
            }
        });
    } else {
        console.log("Register button not found!");
    }

    // التحقق من زر إنشاء العرض
    const createOfferButton = document.getElementById('createOfferButton');
    if (createOfferButton) {
        console.log("Create Offer button found.");  // التأكد من العثور على الزر
        createOfferButton.addEventListener('click', function() {
            console.log("Create Offer button clicked.");  // تأكيد الضغط على الزر
            
            const title = document.querySelector('input[name="title"]').value;
            const image = document.querySelector('input[name="image"]').files[0];
            const description = document.querySelector('textarea[name="description"]').value;
            const originalPrice = document.querySelector('input[name="original_price"]').value;
            const discount = document.querySelector('input[name="discount"]').value;
            const category = document.querySelector('select[name="category"]').value;
            const quantity = document.querySelector('input[name="quantity"]').value;

            if (title && image && description && originalPrice && discount && category && quantity) {
                alert("Offer Created Successfully!");
                clearFields(['title', 'description', 'original_price', 'discount', 'quantity']);
                document.querySelector('input[name="image"]').value = '';
            } else {
                alert("Please fill out all fields.");
            }
        });
    } else {
        console.log("Create Offer button not found!");
    }
});

// دالة تفريغ الحقول
function clearFields(names) {
    names.forEach(name => {
        const input = document.querySelector(`[name="${name}"]`);
        if (input) input.value = '';
    });
}
