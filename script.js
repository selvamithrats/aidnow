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
gi






