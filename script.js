function scrollToField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.scrollIntoView({ behavior: 'smooth', block: 'center' });
        field.classList.add('error');
        field.focus();
    }
}

function validateMobileNumber() {
    const mobile = document.getElementById("mobile");
    const mobileValue = mobile.value.trim();
    if (mobileValue !== '' && !/^\d{10}$/.test(mobileValue)) {
        mobile.value = ''; // Erase the input
        scrollToField('mobile');
    }
}

function submitRequest() {
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var mobile = document.getElementById("mobile");

    if (name.value.trim() == '') {
        scrollToField('name');
        return;
    }

    if (address.value.trim() == '') {
        scrollToField('address');
        return;
    }

    if (mobile.value.trim() == '') {
        scrollToField('mobile');
        return;
    }

    if (!/^\d{10}$/.test(mobile.value.trim())) {
        mobile.value = '';
        scrollToField('mobile');
        return;
    }

    alert('Your request has been submitted. We will contact you shortly. 😊');
    document.getElementById('requestForm').reset();
}

// Function to update item count
function updateItemCount() {
    const needsList = document.querySelectorAll('.item-count');
    needsList.forEach(input => {
        const itemId = input.dataset.itemId;
        const countSpan = document.getElementById(itemId + 'Count');
        if (countSpan) {
            const count = parseInt(input.value) || 0;
            countSpan.textContent = '(' + count + ')';
        }
    });
}

// Call the updateItemCount function when the page loads
updateItemCount();

// Attach event listener to number inputs to update count
const numberInputs = document.querySelectorAll('.item-count');
numberInputs.forEach(input => {
    input.addEventListener('input', updateItemCount);
});

// Attach event listener to mobile number input for validation
const mobileInput = document.getElementById('mobile');
if (mobileInput) {
    mobileInput.addEventListener('blur', validateMobileNumber);
}






